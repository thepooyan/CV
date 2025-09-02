import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const page = async () => {
  const cookieStore = await cookies()
  const lang = cookieStore.get("lang")?.value || getDefaultLang()
  redirect(lang)
}

const getDefaultLang = () => "en"

export default page
