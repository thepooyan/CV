import "server-only"
import { db } from "@/db";
import { blogsTable } from "@/db/schema";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { and, eq, not, sql } from "drizzle-orm";


export const getAllBlogs = async () => {
  "use cache"
  cacheTag("blogs")
  return db.select().from(blogsTable);
}

export const getBlogDetail = async (blogName: string) => {
  "use cache"
  cacheTag("blogPost")
  return (await db.select().from(blogsTable).where(eq(blogsTable.title, blogName))).at(0)
}

export const getRelatedPosts = async (tags: string[], title: string) => {
  "use cache"
  cacheTag("relatedPosts")
  return db.select()
    .from(blogsTable)
    .limit(2).where(
      and(
        sql`
          EXISTS (
            SELECT 1
            FROM json_each(${blogsTable.tags})
            WHERE value IN (${sql.join(tags, sql`, `)})
          )
        `,
        not(eq(blogsTable.title, title))
      )
    )
}

export const getBlogShowcase = async () => {
  "use cache"
  cacheTag("blogShowcase")
  return db.select().from(blogsTable).limit(3)
}
