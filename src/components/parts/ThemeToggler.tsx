"use client"
import { Button } from "@/components/ui/button";
import { toggleDarkMode } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleDarkMode}
      className="transition-transform hover:scale-110 cursor-pointer"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggler;
