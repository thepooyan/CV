"use client"
import { Button } from "@/components/ui/button";
import { BookmarkPlus } from "lucide-react";
import { useState } from "react";

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setIsBookmarked(!isBookmarked)}
      className={isBookmarked ? "text-primary" : ""}
    >
      <BookmarkPlus className="w-4 h-4" />
    </Button>
  );
};

export default Bookmark;
