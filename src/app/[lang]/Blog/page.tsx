"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, Search, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      id: "building-scalable-react-applications",
      title: "Building Scalable React Applications",
      excerpt:
        "Best practices for structuring large React applications with proper state management and component architecture.",
      content: "Full content would be here...",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Architecture", "Best Practices"],
      author: "John Developer",
      image: "/placeholder.svg?height=200&width=400&text=React+Architecture",
    },
    {
      id: "modern-backend-development-nodejs",
      title: "Modern Backend Development with Node.js",
      excerpt:
        "Exploring the latest trends in Node.js development including microservices and serverless architectures.",
      content: "Full content would be here...",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Backend",
      tags: ["Node.js", "Microservices", "Serverless"],
      author: "John Developer",
      image: "/placeholder.svg?height=200&width=400&text=Node.js+Development",
    },
    {
      id: "database-design-patterns",
      title: "Database Design Patterns",
      excerpt: "Common database design patterns and when to use them in your applications.",
      content: "Full content would be here...",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Database",
      tags: ["Database", "Design Patterns", "SQL"],
      author: "John Developer",
      image: "/placeholder.svg?height=200&width=400&text=Database+Design",
    },
    {
      id: "typescript-advanced-features",
      title: "Advanced TypeScript Features You Should Know",
      excerpt:
        "Dive deep into TypeScript's advanced features like conditional types, mapped types, and template literal types.",
      content: "Full content would be here...",
      date: "2023-12-20",
      readTime: "12 min read",
      category: "TypeScript",
      tags: ["TypeScript", "Advanced", "Types"],
      author: "John Developer",
      image: "/placeholder.svg?height=200&width=400&text=TypeScript+Advanced",
    },
    {
      id: "css-grid-flexbox-comparison",
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "A comprehensive comparison of CSS Grid and Flexbox with practical examples and use cases.",
      content: "Full content would be here...",
      date: "2023-12-10",
      readTime: "7 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      author: "John Developer",
      image: "/placeholder.svg?height=200&width=400&text=CSS+Grid+Flexbox",
    },
    {
      id: "api-security-best-practices",
      title: "API Security Best Practices",
      excerpt: "Essential security measures every developer should implement when building APIs.",
      content: "Full content would be here...",
      date: "2023-11-25",
      readTime: "9 min read",
      category: "Security",
      tags: ["API", "Security", "Authentication", "Best Practices"],
      author: "John Developer",
      image: "/placeholder.svg?height=200&width=400&text=API+Security",
    },
  ]

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <h1 className="text-2xl font-bold">Blog</h1>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

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

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                  <Separator orientation="vertical" className="h-4" />
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" alt={post.author} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>

                  <Button variant="ghost" size="sm" asChild className="group-hover:text-primary">
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or selected category.</p>
          </div>
        )}

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
    </div>
  )
}
