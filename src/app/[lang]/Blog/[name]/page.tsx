import { Button } from "@/components/ui/button"
import Markdown from "react-markdown"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
} from "lucide-react"
import Link from "next/link"
import Like from "@/components/parts/blogDetail/Like"
import Share from "@/components/parts/blogDetail/Share"
import RelatedPosts from "@/components/parts/blogDetail/RelatedPosts"
import { Suspense } from "react"
import SpinnerCard from "@/components/ui/SpinnerCard"
import { getBlogPicUrl } from "@/lib/utils"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { getBlogDetail } from "@/lib/cache"

interface props {
  params: Promise<{name: string}>
}
const page = async ({params}:props) => {
  const {name} = await params
  const decodeName = decodeURIComponent(name)
  let post = await getBlogDetail(decodeName)

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/en/Blog">
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
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <Breadcrumb className="mb-5">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/en">Portfolio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/en/Blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
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
                  {post.readTime} min read
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Like postId={post.id} likeCount={post.likeCount}/>
              <Share title={post.title}/>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img src={getBlogPicUrl(post.image)} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
        </div>

        {/* Article Content */}
        <div className="mb-8">
          {post.content}
        </div>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <Link href={`/en/Blog?tag=${tag}`} key={tag} className="hover:-translate-y-1 transition-transform">
                <Badge variant="secondary" className="gap-1">
                  <Tag className="w-3 h-3" />
                  {tag}
                </Badge>
              </Link>
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
              <h3 className="font-semibold text-lg mb-2">About Me</h3>
              <p className="text-muted-foreground mb-3">
                Full-stack developer with 5+ years of experience building scalable web applications. Passionate about
                React, Node.js, and modern web technologies.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/en/">View Portfolio</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/en#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Suspense fallback={<SpinnerCard text="Loading related articles..."/>}>
          <RelatedPosts tags={post.tags} title={post.title}/>
        </Suspense>
      </article>
    </div>
  )
}
export default page
