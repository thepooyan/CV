"use client";
import { useCookies } from "next-client-cookies"
import { Button } from "@/components/ui/button";
import { likePostToggle } from "@/lib/actions";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cookieNames } from "@/lib/constants";

interface p {
  postId: number
  likeCount: number
}
const Like = ({postId, likeCount: initialLikeCount}:p) => {
  const [likes, setLikes] = useState(initialLikeCount);
  const [pending, setPending] = useState(false)
  const cookies = useCookies()
  const isLikedCookie = cookies.get(cookieNames.likedArticles)
  const initialIsLiked = (() => {
    if (isLikedCookie) {
      let a = JSON.parse(isLikedCookie) as string[] | undefined
      console.log(a)
      return a?.includes(String(postId))
    } return false
  })()
  const [isLiked, setIsLiked] = useState(initialIsLiked);

  const calcNewLikeCount = () => {
    let newLikeValue = !isLiked

    if (!initialIsLiked && newLikeValue) return initialLikeCount + 1
    if (initialIsLiked && !newLikeValue) return initialLikeCount - 1
    return initialLikeCount
  }

  const handleLike = async () => {
    let state = {likeCount: initialLikeCount, isLiked};

    setLikes(calcNewLikeCount());
    setIsLiked(prev => !prev);

    setPending(true)
    let {ok} = await likePostToggle(postId)
    setPending(false)
    if (!ok) {
      setLikes(state.likeCount);
      setIsLiked(state.isLiked);
      toast.error("Something went wrong while submitting your like, please try again later")
    }
  };

  return <Button
    variant="ghost"
    size="sm"
    onClick={handleLike}
    className={`gap-2 ${isLiked ? "text-green-500 hover:text-green-400" : ""}`}
    disabled={pending}
  >
    <ThumbsUp className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
    {likes}
  </Button>;
};

export default Like;
