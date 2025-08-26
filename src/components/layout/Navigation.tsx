"use client"
import { cn, getDynamicName } from "@/lib/utils";
import ThemeToggler from "../parts/ThemeToggler";
import { useScroller } from "@/lib/Hooks";
import ScrollerBtn from "./ScrollerBtn";
import ChangeLanguege from "../parts/ChangeLanguege";
import { lang, useTranslate } from "@/lib/translation";

const Navigation = ({lang}:{lang: lang}) => {

  type section = "About" | "Skills" | "Contact" | "Projects" | "Blog"
  const sections:section[] = ["About", "Skills", "Projects", "Contact", "Blog"];
  const sectionsFa = new Map<section, string>([
    ["About", "درباره"],
    ["Skills", "مهارت‌ها"],
    ["Projects", "پروژه‌ها"],
    ["Contact", "تماس"],
    ["Blog", " بلاگ"]
  ])

  let scrollTo:Record<section, ReturnType<typeof useScroller>> = {
    About:  useScroller("#about"),
    Skills: useScroller("#skills"),
    Projects: useScroller("#projects"),
    Contact: useScroller("#contact"),
    Blog: useScroller("#blog"),
  }
  const t = useTranslate(lang)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ScrollerBtn to="#hero">
          <h1 className="font-bold text-xl cursor-pointer">{getDynamicName(lang)}</h1>
        </ScrollerBtn>
        <div className="hidden md:flex space-x-6">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo[item].scroll()}
              className={cn(`text-sm font-medium transition-colors hover:text-primary text-muted-foreground cursor-pointer`,
              scrollTo[item].isSeen && "text-primary"
              )}
            >
              {t(item, sectionsFa.get(item) || "")}
            </button>
          ))}
        </div>
        <div className="space-x-2">
          <ThemeToggler/>
          <ChangeLanguege lang={lang}/>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
