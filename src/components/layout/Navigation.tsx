import { cn, getFullName } from "@/lib/utils";
import ThemeToggler from "../parts/ThemeToggler";
import Link from "next/link";
import { LucideGlobe } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">{getFullName()}</div>
        <div className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Blog", "Contact"].map((item) => (
            <button
              key={item}
              // onClick={() => scrollToSection(item.toLowerCase())}
              className={cn(`text-sm font-medium transition-colors hover:text-primary text-muted-foreground`,
              false && "text-primary"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="space-x-2">
          <ThemeToggler/>
          <Link href="/fa" className="border-1 border-black dark:hidden dark:border-white inline-flex items-center rounded-md p-1 gap-2">
            <LucideGlobe/>
            fa
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
