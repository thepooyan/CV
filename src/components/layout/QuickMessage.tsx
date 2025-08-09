"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { sendMessage } from "@/lib/actions"

type Event = { ok: boolean; msg: string }

export default function QuickMessage() {
  const [waiting, setWaiting] = useState(false)
  const [message, setMessage] = useState<Event>()

  const handleSubmit = async (formData: FormData) => {
    setWaiting(true)
    let res = await sendMessage(formData)
    setMessage(res)
    setWaiting(false)
  }

  return (
    <Card className="p-8">
      <h3 className="text-xl font-semibold mb-6">Quick Message</h3>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-input rounded-md bg-background"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-input rounded-md bg-background"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border border-input rounded-md bg-background resize-none"
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

