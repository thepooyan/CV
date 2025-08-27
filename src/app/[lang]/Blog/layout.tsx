import { ArrowLeft, Link } from "lucide-react";

interface props {
  children: React.ReactNode;
}
const layout = ({ children }: props) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            <h1 className="text-2xl font-bold">Blog</h1>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default layout;
