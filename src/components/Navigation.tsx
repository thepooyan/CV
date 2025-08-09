import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const {setTheme, theme} = useTheme()
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">John Developer</div>
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
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const newTheme = theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
          }}
          className="transition-transform hover:scale-110"
          suppressHydrationWarning
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
