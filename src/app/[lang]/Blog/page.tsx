import BlogFetcher from "@/components/parts/BlogFetcher"
// import Newsletter from "@/components/parts/Newsletter"
import Blogs from "@/components/skeleton/Blogs"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Suspense } from "react"

export default async function BlogPage() {
  return (
    <>
        <Breadcrumb className="container mx-auto px-4 py-8 max-w-4xl pb-0">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/en">Portfolio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Developer Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, programming, and technology.
          </p>
        </div>
        <Suspense fallback={<Blogs/>}>
          <BlogFetcher/>
        </Suspense>

        {/*<Newsletter/>*/}
      </div>
    </>
  )
}
