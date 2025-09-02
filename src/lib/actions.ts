"use server"

import { db } from "@/db"
import { blogsTable, messagesTable } from "@/db/schema"
import { sendToAdmin } from "./telegram"
import { formatMessage } from "./utils"
import { eq, sql } from "drizzle-orm"
import { cookies } from "next/headers"
import { cookieNames } from "./constants"
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import { revalidateTag } from "next/cache"

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
