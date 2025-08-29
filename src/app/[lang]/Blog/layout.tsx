import ThemeToggler from "@/components/parts/ThemeToggler";
import Link from "next/link";

interface props {
  children: React.ReactNode;
}
const layout = async ({ children }: props) => {
  return (
    <>
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50   dark:border-zinc-800 border-zinc-300">
        <div className="container mx-auto px-4 py-4 ">
          <div className="flex items-center justify-between">
            <Link href="/en/Blog" className="cursor-pointer">
              <h1 className="text-2xl font-bold">My Blog</h1>
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
