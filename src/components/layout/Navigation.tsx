import { cn, getFullName } from "@/lib/utils";
import ThemeToggler from "../parts/ThemeToggler";
import Link from "next/link";
import { LucideGlobe } from "lucide-react";
import { Button } from "../ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">{getFullName()}</div>
        <div className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
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
          <Link href="/fa">
            <Button variant="secondary">
              <LucideGlobe/>
              fa
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
