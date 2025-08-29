import { db } from "@/db";
import { blogsTable } from "@/db/schema";
import BlogClient from "./BlogClient";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

const BlogFetcher = async () => {
  "use cache"
  cacheTag("blogs")

  const blogPosts = await db.select().from(blogsTable);

  return (
    <BlogClient blogPosts={blogPosts}/>
  )
}

export default BlogFetcher
