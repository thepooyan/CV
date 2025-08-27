"use client";

import { useState } from "react";

const Share = ({title}:{title: string}) => {
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

  return <div>Share</div>;
};

export default Share;
