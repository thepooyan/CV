"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { TagIcon, ClockIcon, ImageIcon, SaveIcon } from "lucide-react"
import { MarkdownPreview } from "@/components/markdown-preview"
import Spinner from "@/components/ui/Spinner"
import { newPost } from "@/lib/actions"
import { useRouter } from "next/navigation"
import { getBlogDetailUrl } from "@/lib/utils"
import { toast } from "sonner"

interface BlogPost {
  title: string
  excerpt: string
  content: string
  tags: string[]
  date: string
  readTime: number
  image: string
}

export default function BlogEditor() {
  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: "",
    excerpt: "",
    content:
      '# Welcome to your blog post\n\nStart writing your **markdown** content here...\n\n- Use lists\n- Add links\n- Include code blocks\n\n```javascript\nconsole.log("Hello, world!");\n```',
    tags: [],
    date: new Date().toISOString().split("T")[0],
    readTime: 1,
    image: "",
  })

  const goodToSend = () => blogPost.title && blogPost.excerpt && blogPost.content && blogPost.tags.length > 0 && blogPost.image && blogPost.readTime

  const [tagInput, setTagInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const router = useRouter()

  const handleContentChange = useCallback((content: string) => {
    const wordCount = content.split(/\s+/).filter((word) => word.length > 0).length
    const readTime = Math.max(1, Math.ceil(wordCount / 200))

    setBlogPost((prev) => ({
      ...prev,
      content,
      readTime,
    }))
  }, [])

  const addTag = useCallback(() => {
    if (tagInput.trim() && !blogPost.tags.includes(tagInput.trim())) {
      setBlogPost((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }))
      setTagInput("")
    }
  }, [tagInput, blogPost.tags])

  const removeTag = useCallback((tagToRemove: string) => {
    setBlogPost((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }, [])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag()
    }
  }

  const saveBlogPost = async () => {
    setIsSending(true)
    let {ok} = await newPost(blogPost)
    if (ok) return router.push(getBlogDetailUrl(blogPost.title))
    toast.error("Something went wrong. please try again.")
    setIsSending(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Blog Editor</h1>
          <Button onClick={saveBlogPost} disabled={!goodToSend() || isSending}>
            {isSending ? <Spinner reverse/> : <SaveIcon className="mr-2 h-4 w-4" />}
            Save Post
          </Button>
        </div>
      </header>

      {/* Metadata Section */}
      <div className="border-b border-border bg-card px-6 py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium text-foreground">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Enter blog post title..."
              value={blogPost.title}
              onChange={(e) => setBlogPost((prev) => ({ ...prev, title: e.target.value }))}
              className="bg-input border-border"
            />
          </div>


          <div className="space-y-2">
            <Label htmlFor="readTime" className="text-sm font-medium text-foreground flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              Read Time (min)
            </Label>
            <Input
              id="readTime"
              type="number"
              min="1"
              value={blogPost.readTime}
              onChange={(e) => setBlogPost((prev) => ({ ...prev, readTime: Number.parseInt(e.target.value) || 1 }))}
              className="bg-input border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="text-sm font-medium text-foreground flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Featured Image URL
            </Label>
            <Input
              id="image"
              placeholder="https://example.com/image.jpg"
              value={blogPost.image}
              onChange={(e) => setBlogPost((prev) => ({ ...prev, image: e.target.value }))}
              className="bg-input border-border"
            />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Label htmlFor="excerpt" className="text-sm font-medium text-foreground">
            Excerpt
          </Label>
          <Textarea
            id="excerpt"
            placeholder="Write a brief excerpt for your blog post..."
            value={blogPost.excerpt}
            onChange={(e) => setBlogPost((prev) => ({ ...prev, excerpt: e.target.value }))}
            className="bg-input border-border resize-none"
            rows={2}
          />
        </div>

        <div className="mt-6 space-y-2">
          <Label className="text-sm font-medium text-foreground flex items-center gap-2">
            <TagIcon className="h-4 w-4" />
            Tags
          </Label>
          <div className="flex gap-2">
            <Input
              placeholder="Add a tag..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-input border-border"
            />
            <Button onClick={addTag} variant="outline" size="sm">
              Add
            </Button>
          </div>
          {blogPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {blogPost.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer bg-accent text-accent-foreground hover:bg-accent/80"
                  onClick={() => removeTag(tag)}
                >
                  {tag} ×
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Editor and Preview */}
      <div className="flex h-[calc(100vh-280px)]">
        {/* Editor Pane */}
        <div className="flex-1 border-r border-border">
          <div className="h-full p-6">
            <Label htmlFor="content" className="text-sm font-medium text-foreground mb-3 block">
              Markdown Content
            </Label>
            <Textarea
              id="content"
              placeholder="Write your markdown content here..."
              value={blogPost.content}
              onChange={(e) => handleContentChange(e.target.value)}
              className="h-[calc(100%-2rem)] bg-background border-border font-mono text-sm resize-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Preview Pane */}
        <div className="flex-1">
          <div className="h-full p-6 bg-card">
            <Label className="text-sm font-medium text-card-foreground mb-3 block">Live Preview</Label>
            <Card className="h-[calc(100%-2rem)] overflow-auto bg-card border-border">
              <div className="p-6">
                <MarkdownPreview content={blogPost.content} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

