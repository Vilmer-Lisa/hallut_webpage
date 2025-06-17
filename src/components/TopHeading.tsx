import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

const TopHeading = ({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right"
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl text-white font-serif mb-4">
      {title.split(' ')[0] }{" " + title.split(' ')[1]}<br  />
      {title.split(' ').slice(2).join(' ')}
    </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground text-white/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TopHeading;