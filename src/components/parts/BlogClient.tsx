"use client";
import { useQueryState } from 'next-usequerystate';
import { Search } from "lucide-react";
import { blogsTable } from "@/db/schema";
import { useState } from "react";
import { Button } from "../ui/button";
import BlogCard from "./BlogCard";

interface props {
  blogPosts: (typeof blogsTable.$inferSelect)[];
}
const BlogClient = ({ blogPosts }: props) => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [search, setSearch] = useQueryState("search", {defaultValue: ""})

  const changeHandler = (str: string) => {
    setSearch(str)
  }

  const tags = [
    "All",
    ...new Set(
      blogPosts
        .map((post) => post.tags)
        .flat()
        .filter((a) => a !== null),
    ),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchTag = 
      post.tags?.includes(selectedTag) || selectedTag === "All"

    return matchesSearch && matchTag;
  });
  return (
    <div>
      {/* Search and Filter */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="relative flex-1 md:w-2/3 mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => changeHandler(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className="transition-all duration-200"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <BlogCard post={post} index={index} key={post.id}/>
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or selected category.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogClient;
