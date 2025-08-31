"use client";

import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/Spinner";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const error = () => {

  const [refreshing, setRefreshing] = useState(false)
  const refresh = () => {
    setRefreshing(true)
    window.location.reload()
  }

  return (
    <div className="py-30 bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-8">
          There was an error fetching the page. please try again later.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <Link href="/en/Blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          <Button onClick={refresh}>
            Try again
            {refreshing && <Spinner reverse/>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default error;
