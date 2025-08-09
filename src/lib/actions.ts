"use server"

export async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  await new Promise(res => setTimeout(res, 2000))
  // Example: save to DB, send email, etc.
  console.log({ name, email, message })

  return { ok: true, msg: "Message sent successfully" }
}

