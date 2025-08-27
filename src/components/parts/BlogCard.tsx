import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { blogsTable } from "@/db/schema";
import { Button } from "../ui/button";

const BlogCard = ({ post, index }: { post: typeof blogsTable.$inferSelect, index: number }) => {
  return (
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
      </CardContent>
      <CardFooter className="mt-auto flex justify-between">
        <div className="flex gap-2 items-center">
          <Avatar className="w-6 h-6">
            <AvatarImage
              src="/me.webp?height=24&width=24"
              alt="Pooyan Salmani"
            />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">Pooyan</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="group-hover:text-primary"
        >
          <Link href={`/en/Blog/${encodeURIComponent(post.title)}`}>
            Read More
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
