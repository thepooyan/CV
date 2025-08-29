import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { db } from "@/db"
import { blogsTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import Bookmark from "@/components/parts/blogDetail/Bookmark"
import Like from "@/components/parts/blogDetail/Like"
import Share from "@/components/parts/blogDetail/Share"

interface props {
  params: {name: string}
}
const page = async ({params}:props) => {
  const decodeName = decodeURIComponent(params.name)
  let post = (await db.select().from(blogsTable).where(eq(blogsTable.title, decodeName))).at(0)

  const relatedPosts = [
    {
      id: "modern-backend-development-nodejs",
      title: "Modern Backend Development with Node.js",
      excerpt:
        "Exploring the latest trends in Node.js development including microservices and serverless architectures.",
      image: "/placeholder.svg?height=150&width=250&text=Node.js+Development",
    },
    {
      id: "database-design-patterns",
      title: "Database Design Patterns",
      excerpt: "Common database design patterns and when to use them in your applications.",
      image: "/placeholder.svg?height=150&width=250&text=Database+Design",
    },
  ]



  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Blog</span>
            </Link>

            <div className="flex items-center gap-2">
              <Bookmark/>
              <Share title={post.title}/>

            </div>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            {post.tags?.map(t => <Badge variant="secondary" className="mb-4" key={t}>
              {t}
            </Badge>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/me.webp?height=48&width=48" alt="pooyan salmani" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Pooyan</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  <Separator orientation="vertical" className="h-4" />
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Like/>

              <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                12
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div className="whitespace-pre-wrap leading-relaxed">{post.content}</div>
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="outline" className="gap-1">
                <Tag className="w-3 h-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <Card className="mb-8 p-6">
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/me.webp?height=64&width=64" alt="pooyan salmani" />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg mb-2">About Pooyan</h3>
              <p className="text-muted-foreground mb-3">
                Full-stack developer with 5+ years of experience building scalable web applications. Passionate about
                React, Node.js, and modern web technologies.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/">View Portfolio</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Related Posts */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{relatedPost.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                    <Link href={`/blog/${relatedPost.id}`} className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
export default page
