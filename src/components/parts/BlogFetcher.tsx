import BlogClient from "./BlogClient";
import { getAllBlogs } from "@/lib/cache";

const BlogFetcher = async () => {

  const blogPosts = await getAllBlogs()

  return (
    <BlogClient blogPosts={blogPosts}/>
  )
}

export default BlogFetcher
