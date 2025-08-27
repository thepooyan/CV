import { Button } from "@/components/ui/button"
import {
  ArrowRight,
} from "lucide-react"
import { lang, useTranslate } from "@/lib/translation"
import Link from "next/link"
import { db } from "@/db"
import { blogsTable } from "@/db/schema"
import BlogCard from "@/components/parts/BlogCard"

interface props {
  lang: lang
}
const BlogShowcase = async ({lang}:props) => {

  let blogs = await db.select().from(blogsTable).limit(3)
  const t = useTranslate(lang)

  return (
      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("Latest Blog Posts", "آخرین بلاگ ها")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogs.map((post,i) => (
              <BlogCard post={post} index={i} key={i}/>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={`/en/Blog/`}>
              <Button variant="outline" size="lg">
                {t("View All Posts", "نمایش همه")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
)
}

export default BlogShowcase
