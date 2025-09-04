"use client"

import Markdown from "react-markdown"

interface MarkdownPreviewProps {
  content: string
}

export function MarkdownPreview({ content }: MarkdownPreviewProps) {
  if (!content.trim()) {
    return (
      <div className="flex items-center justify-center h-32 text-muted-foreground">
        Start typing to see your markdown preview...
      </div>
    )
  }

  return <div className="prose prose-sm max-w-none  dark:prose-invert">
    <Markdown>{content}</Markdown>
  </div>
}

