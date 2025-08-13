"use client"
import { cn, getFullName } from "@/lib/utils";
import ThemeToggler from "../parts/ThemeToggler";
import { useScroller } from "@/lib/Hooks";

const Navigation = () => {

  let scrollTo = {
    About:  useScroller("#about"),
    Skills: useScroller("#skills"),
    Projects: useScroller("#projects"),
    Contact: useScroller("#contact"),
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">{getFullName()}</div>
        <div className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo[item as keyof typeof scrollTo]()}
              className={cn(`text-sm font-medium transition-colors hover:text-primary text-muted-foreground cursor-pointer`,
              false && "text-primary"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="space-x-2">
          <ThemeToggler/>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
