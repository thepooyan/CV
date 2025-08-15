"use server"

import { db } from "@/db"
import { messagesTable } from "@/db/schema"
import { sendToAdmin } from "./telegram"
import { formatMessage } from "./utils"

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

