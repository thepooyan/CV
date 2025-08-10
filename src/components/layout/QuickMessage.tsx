"use client"
import { FormEvent, useState } from "react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { sendMessage } from "@/lib/actions"
import { cn } from "@/lib/utils"

type Event = { ok: boolean; msg: string }

export default function QuickMessage() {
  const [waiting, setWaiting] = useState(false)
  const [message, setMessage] = useState<Event>()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name) return setMessage({ok: false, msg: "Please enter your name"})
    if (!email) return setMessage({ok: false, msg: "Please enter your email"})
    if (!msg) return setMessage({ok: false, msg: "Please enter the message"})
    setWaiting(true)
    let res = await sendMessage(name, email, msg)
    setMessage(res)
    setWaiting(false)
  }

  return (
    <Card className={cn("p-8 border-1", message?.ok === false && "border-red-500", message?.ok === true && "border-green-500")}>
      <h3 className="text-xl font-semibold mb-6">Quick Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-input rounded-md bg-background"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-input rounded-md bg-background"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border border-input rounded-md bg-background resize-none"
            value={msg}
            onChange={e => setMsg(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full" disabled={waiting}>
          {waiting ? "Sending..." : "Send Message"}
        </Button>
        {message && (
          <p className={`mt-2 ${message.ok ? "text-green-500" : "text-red-500"}`}>
            {message.msg}
          </p>
        )}
      </form>
    </Card>
  )
}

