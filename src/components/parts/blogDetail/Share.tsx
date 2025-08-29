"use client";
import { Button } from "@/components/ui/button";
import {
  Share2,
  Copy,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

import { useState } from "react";

const Share = ({ title }: { title: string }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const handleShare = (platform: string) => {
    const url = window.location.href;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      copy: url,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      // You could show a toast notification here
    } else {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }

    setShowShareMenu(false);
  };

  return (
    <>
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowShareMenu(!showShareMenu)}
        >
          <Share2 className="w-4 h-4" />
        </Button>

        {showShareMenu && (
          <div className="absolute right-0 top-full mt-2 bg-background border rounded-md shadow-lg p-2 min-w-[150px]">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => handleShare("twitter")}
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => handleShare("linkedin")}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => handleShare("facebook")}
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => handleShare("copy")}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Link
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Share;
