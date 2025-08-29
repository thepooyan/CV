"use client";
import { useCookies } from "next-client-cookies"
import { Button } from "@/components/ui/button";
import { likePostToggle } from "@/lib/actions";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface p {
  postId: number
  likeCount: number
}
const Like = ({postId, likeCount}:p) => {
  const [likes, setLikes] = useState(likeCount);
  const cookies = useCookies()
  const isLikedCookie = cookies.get("isLiked")
  const [isLiked, setIsLiked] = useState(isLikedCookie === "true");

  const handleLike = async () => {
    setLikes(isLiked ? likeCount : likeCount + 1);
    setIsLiked(prev => !prev);
    let {ok} = await likePostToggle(postId)
    if (!ok) {
      setLikes(isLiked ? likeCount : likeCount + 1);
      setIsLiked(prev => !prev);
      toast.error("Something went wrong")
    }
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
