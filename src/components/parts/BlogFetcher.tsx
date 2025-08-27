import { db } from "@/db";
import { blogsTable } from "@/db/schema";
import BlogClient from "./BlogClient";

const BlogFetcher = async () => {

  const blogPosts = await db.select().from(blogsTable);

  return (
    <BlogClient blogPosts={blogPosts}/>
  )
}

export default BlogFetcher
