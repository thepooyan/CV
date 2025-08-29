"use client";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };
  return <Button
    variant="ghost"
    size="sm"
    onClick={handleLike}
    className={`gap-2 ${isLiked ? "text-green-500 hover:text-green-400" : ""}`}
  >
    <ThumbsUp className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
    {likes}
  </Button>;
};

export default Like;
