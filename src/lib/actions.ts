"use server"

import { db } from "@/db"
import { blogsTable, messagesTable } from "@/db/schema"
import { sendToAdmin } from "./telegram"
import { formatMessage } from "./utils"
import { eq, sql } from "drizzle-orm"
import { cookies } from "next/headers"
import { cookieNames } from "./constants"
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"

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
  const {add, remove} = handleCookie(cookieStore)
  const liked = cookieStore.get(cookieNames.likedArticles)
  const f = liked?.value ? JSON.parse(liked?.value) as string[] : undefined
  try {
    if (f?.includes(String(postId))) {
      await db.update(blogsTable).set({likeCount: sql`${blogsTable.likeCount}-1`}).where(eq(blogsTable.id, postId))
      remove(String(postId))
    } else {
      await db.update(blogsTable).set({likeCount: sql`${blogsTable.likeCount}+1`}).where(eq(blogsTable.id, postId))
      add(String(postId))
    }
    return {ok: true}
  } catch(_) {
    return {ok: false}
  }
}

const handleCookie = (cookieStore: ReadonlyRequestCookies) => {
  let c = cookieStore.get(cookieNames.likedArticles)
  let parsed = c ? JSON.parse(c.value) as string[] : undefined

  const set = (arr: string[]) => {
    cookieStore.set(cookieNames.likedArticles, JSON.stringify(arr), {httpOnly: false, secure: false})
  }
  const add = (toAppend: string) => {
    let already = []
    if (parsed) {
      already.push(...parsed)
    }
    set([...already, toAppend])
  }
  const remove = (toRemove: string) => {
    let toSet:string[] = []
    if (parsed) {
      toSet = parsed.filter(p => p !== toRemove)
    }
    set(toSet)
  }

  return {add,remove}
}
