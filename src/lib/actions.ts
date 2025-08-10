"use server"

import { db } from "@/db"
import { messagesTable } from "@/db/schema"

export async function sendMessage(name: string, email: string, msg: string) {

  let values:typeof messagesTable.$inferInsert = {
    name,
    email,
    message: msg
  }

  try {
    await db.insert(messagesTable).values(values)
  } catch(_) {
    return { ok: false, msg: "Something went wrong. please try again."}
  }

  return { ok: true, msg: "Message sent successfully" }
}

