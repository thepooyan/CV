import { db } from "@/db"
import { blogsTable } from "@/db/schema"
import { eq } from "drizzle-orm"

interface props {
  params: {name: string}
}
const page = async ({params}:props) => {
  const decodeName = decodeURIComponent(params.name)
  let post = (await db.select().from(blogsTable).where(eq(blogsTable.title, decodeName))).at(0)

  if (!post) return <>Post Not found!</>

  return (
    <div>
      Post found:
      {JSON.stringify(post)}
    </div>
  )
}

export default page
