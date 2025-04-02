
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
  variant?: "default" | "outline";
  isExternal?: boolean;
}

const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink,
  className,
  variant = "default",
  isExternal = false,
}: CallToActionProps) => {
  const ButtonComponent = () => (
    <Button 
      variant={variant === "default" ? "default" : "outline"} 
      className="group mt-6"
    >
      {buttonText}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );

  return (
    <div className={cn("py-16 px-4 md:py-24 text-center max-w-3xl mx-auto", className)}>
      <h3 className="text-2xl md:text-3xl font-serif mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      {isExternal ? (
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <ButtonComponent />
        </a>
      ) : (
        <Link to={buttonLink}>
          <ButtonComponent />
        </Link>
      )}
    </div>
  );
};

export default CallToAction;
