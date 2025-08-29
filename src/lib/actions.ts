"use server"

import { db } from "@/db"
import { blogsTable, messagesTable } from "@/db/schema"
import { sendToAdmin } from "./telegram"
import { formatMessage } from "./utils"
import { eq, sql } from "drizzle-orm"
import { cookies } from "next/headers"

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
  const isLiked = cookieStore.get("isLiked")
  try {
    if (isLiked?.value === "true") {
      await db.update(blogsTable).set({likeCount: sql`${blogsTable.likeCount}-1`}).where(eq(blogsTable.id, postId))
      cookieStore.set("isLiked", "false", {httpOnly: false})
    } else {
      await db.update(blogsTable).set({likeCount: sql`${blogsTable.likeCount}+1`}).where(eq(blogsTable.id, postId))
      cookieStore.set("isLiked", "true", {httpOnly: false})
    }
    return {ok: true}
  } catch(_) {
    return {ok: false}
  }
}
