import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getFullName } from "@/lib/utils";
import ScrollerBtn from "../ScrollerBtn";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="container mx-auto px-4 text-center relative z-10 mt-15">
        <div className="animate-fade-in-up">
          <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-primary/20 transition-transform hover:scale-105">
            <AvatarImage
              src="/me.webp?height=128&width=128"
              alt="Profile"
            />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {getFullName()} 
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fullstack Developer crafting digital experiences with modern
            technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <ScrollerBtn to="#projects">
              <Button
                size="lg"
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </ScrollerBtn>
            <ScrollerBtn to="#contact">
              <Button
                variant="outline"
                size="lg"
                // onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </ScrollerBtn>
          </div>
        </div>
      </div>
      <ScrollerBtn to="#about">
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </ScrollerBtn>
    </section>
  );
};

export default Hero;
