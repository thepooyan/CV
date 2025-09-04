import BlogEditor from '@/components/parts/BlogEditor'
import { validateToken } from '@/lib/actions'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {

  let token = (await cookies()).get("token")
  let validate = await validateToken(token?.value || "")
  if (!validate.isValid) redirect("/")

  return (
    <BlogEditor/>
  )
}

export default page
