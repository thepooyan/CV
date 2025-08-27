import BlogFetcher from "@/components/parts/BlogFetcher"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Suspense } from "react"

export default async function BlogPage() {
  return (
    <>
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
        <Suspense fallback={<>Fetching blog posts...</>}>
          <BlogFetcher/>
        </Suspense>


        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to get notified when I publish new articles about web development and programming.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
