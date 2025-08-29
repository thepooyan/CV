import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const Newsletter = () => {
  return (
    <div className="mt-16 text-center">
      <Card className="max-w-2xl mx-auto p-8">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-muted-foreground mb-6">
          Subscribe to get notified when I publish new articles about web
          development and programming.
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Button>Subscribe</Button>
        </div>
      </Card>
    </div>
  );
};

export default Newsletter;
