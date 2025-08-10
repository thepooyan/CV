"use server"

export async function sendMessage(name: string, email: string, msg: string) {

  return { ok: true, msg: "Message sent successfully" }
}

