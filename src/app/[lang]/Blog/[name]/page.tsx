import { db } from "@/db"
import { blogsTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import { Suspense } from "react"

interface props {
  params: {name: string}
}
const page = async ({params}:props) => {
  const decodeName = decodeURIComponent(params.name)
  let post = await db.select().from(blogsTable).where(eq(blogsTable.title, decodeName))

  return (
    <div>
      hi
      <Suspense fallback="Loading...">
        {JSON.stringify(post)}
      </Suspense>
    </div>
  )
}

export default page
