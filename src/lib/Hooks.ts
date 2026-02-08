"use client";
import { useEffect, useState } from "react";
import { respondToVisibility } from "./utils";
import { lang } from "./translation";
import { redirect } from "next/navigation";

export const useScroller = (to: string) => {
  const [isSeen, setIsSeen] = useState(false);
  let element: Element | null = null;
  useEffect(() => {
    element = document.querySelector(to);
    if (!element) throw new Error(`useScroller: Element not found: ${to}`)
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

export const useParseLang = async (params: Promise<{lang: string}>):Promise<lang> => {

  const {lang} = await params
  if (lang !== "en" && lang !== "fa") throw redirect("/")

  return lang
}
