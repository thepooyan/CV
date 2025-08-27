"use client";
import { useEffect, useState } from "react";
import { respondToVisibility } from "./utils";

export const useScroller = (to: string) => {
  const [isSeen, setIsSeen] = useState(false);
  let element: Element | null = null;
  useEffect(() => {
    element = document.querySelector(to);
    if (!element) return undefined
    respondToVisibility(
      element,
      () => setIsSeen(true),
      () => setIsSeen(false),
      -500
    );
  });

  return {
    scroll: () => {
      if (!element) throw new Error(`useScroller: Element not found: ${to}`);
      element.scrollIntoView({ behavior: "smooth" });
    },
    isSeen,
  };
};
