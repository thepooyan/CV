import ThemeToggler from "@/components/parts/ThemeToggler";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface props {
  children: React.ReactNode;
}
const layout = async ({ children }: props) => {
  return (
    <>
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50   border-zinc-800">
        <div className="container mx-auto px-4 py-4 ">
          <div className="flex items-center justify-between">
            <Link
              href="/en/Blog"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Blog</span>
            </Link>

            <ThemeToggler/>
          </div>
        </div>
      </header>
      <div className="min-h-screen bg-background">{children}</div>
    </>
  );
};

export default layout;
