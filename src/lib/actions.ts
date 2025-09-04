"use server"

import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { db } from "@/db"
import { adminsTable, blogsTable, messagesTable } from "@/db/schema"
import { sendToAdmin } from "./telegram"
import { formatMessage } from "./utils"
import { eq, sql } from "drizzle-orm"
import { cookies } from "next/headers"
import { cookieNames } from "./constants"
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import { revalidateTag } from "next/cache"
import { keys } from "./cache"
import { redirect } from "next/navigation"

export async function sendMessage(name: string, email: string, msg: string) {

  let values:typeof messagesTable.$inferInsert = {
    name,
    email,
    message: msg
  }

  try {
    await db.insert(messagesTable).values(values)
    await sendToAdmin(formatMessage(name, email, msg))
  } catch(e) {
    console.log(e)
    return { ok: false, msg: "Something went wrong. please try again.", msgFa: "مشکلی پیش آمده. لطفا مجددا تلاش کنید"}
  }

  return { ok: true, msg: "Message sent successfully", msgFa: "پیام با موفقیت ارسال شد!" }
}


export const likePostToggle = async (postId: number) => {
  const cookieStore = await cookies()
  const {add, remove, has} = handleLikedPostsCookie(cookieStore)

  try {
    if (has(String(postId))) {
      await db.update(blogsTable).set({likeCount: sql`${blogsTable.likeCount}-1`}).where(eq(blogsTable.id, postId))
      remove(String(postId))
    } else {
      await db.update(blogsTable).set({likeCount: sql`${blogsTable.likeCount}+1`}).where(eq(blogsTable.id, postId))
      add(String(postId))
    }
    revalidateTag("blogPost")
    return {ok: true}
  } catch(_) {
    return {ok: false}
  }
}

const handleLikedPostsCookie = (cookieStore: ReadonlyRequestCookies) => {
  let targetCookie = cookieStore.get(cookieNames.likedArticles)
  let value = targetCookie ? JSON.parse(targetCookie.value) as string[] : undefined

  const setCookie = (arr: string[]) => {
    cookieStore.set(cookieNames.likedArticles, JSON.stringify(arr), {httpOnly: false, secure: false})
  }
  const add = (toAppend: string) => {
    let already = []
    if (value) {
      already.push(...value)
    }
    setCookie([...already, toAppend])
  }
  const remove = (toRemove: string) => {
    let toSet:string[] = []
    if (value) {
      toSet = value.filter(p => p !== toRemove)
    }
    setCookie(toSet)
  }
  const has = (str: string) => {
    return value ? value.includes(str) : false
  }

  return {add,remove,value,has}
}

export const setThemeCookie = async (value: string) => {
  (await cookies()).set('theme', value, { path: '/', maxAge: 60 * 60 * 24 * 365 })
}
export const setLangCookie = async (value: string) => {
  (await cookies()).set('lang', value, { path: '/', maxAge: 60 * 60 * 24 * 365 })
}

export const newPost = async (value: typeof blogsTable.$inferInsert) => {
  try {
    await db.insert(blogsTable).values(value)
    revalidateTag(keys.relatedPosts)
    revalidateTag(keys.blogs)
    revalidateTag(keys.blogShowcase)
    return {ok: true}
  } catch(_) {
    return {ok: false}
  }
}

export const authAdmin = async (form: FormData) => {
  const pass = form.get("password")

  if (pass === process.env.ADMIN_PASS) {
    let token = await generateToken("admin")
    await db.update(adminsTable).set({token: token, expiresAt: new Date(Date.now() + 5 * 60 * 1000).toString()});
    (await cookies()).set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      expires: Date.now() + 5 * 60 * 1000,
    });
    redirect("/en/newBlog")
  }
}

export const generateToken = async (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: '5m',
  });
}


interface DecodedToken extends JwtPayload {
  // Add any custom properties you might have in your token payload
  userId?: string;
}

interface ValidationResult {
  isValid: boolean;
  payload?: DecodedToken;
  error?: string;
}

/**
 * Validates a JWT and returns the decoded payload if successful.
 * @param token The JWT string to validate.
 * @returns An object indicating the validation result and the decoded payload or an error message.
 */
export async function validateToken(token: string): Promise<ValidationResult> {
  const jwtSecret: Secret | undefined = process.env.JWT_SECRET;

  // Ensure the secret key is defined in your environment variables
  if (!jwtSecret) {
    console.error('JWT_SECRET is not defined.');
    return { isValid: false, error: 'Server configuration error.' };
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, jwtSecret) as DecodedToken;
    
    // Check if the token has expired
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      return { isValid: false, error: 'Token has expired.' };
    }

    // Token is valid, return the payload
    return { isValid: true, payload: decoded };
  } catch (err: any) {
    // Handle specific JWT errors
    if (err.name === 'TokenExpiredError') {
      return { isValid: false, error: 'Token has expired.' };
    }
    if (err.name === 'JsonWebTokenError') {
      return { isValid: false, error: 'Invalid token.' };
    }

    // Handle any other unknown errors
    return { isValid: false, error: 'Failed to validate token.' };
  }
}
