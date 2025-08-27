"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Search, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogsTable } from "@/db/schema";
import { useState } from "react";
import { Button } from "../ui/button";

interface props {
  blogPosts: (typeof blogsTable.$inferSelect)[];
}
const BlogClient = ({ blogPosts }: props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

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
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesSearch && selectedTag === "All";
  });
  return (
    <div>
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
                <Badge
                  variant="secondary"
                  className="bg-background/80 backdrop-blur-sm"
                ></Badge>
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
              <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags?.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="/placeholder.svg?height=24&width=24"
                      alt="Pooyan Salmani"
                    />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">
                    Pooyan Salmani
                  </span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="group-hover:text-primary"
                >
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
          <p className="text-muted-foreground">
            Try adjusting your search terms or selected category.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogClient;
