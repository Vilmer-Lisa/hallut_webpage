import React from "react";
import { Quote } from "lucide-react";

interface CitationCardProps {
  text: string;
  author?: string;
  large?: boolean;
}

const CitationCard: React.FC<CitationCardProps> = ({ text, author, large = false }) => {
  const iconSize = large ? "text-4xl" : "text-3xl";
  const textSize = large ? "text-md" : "text-sm";
  const authorSize = large ? "text-sm md:text-base" : "text-xs";
  const padding = large ? "p-6" : "p-4";
  const margTop = large ? "mt-8" : "mt-4";
  const width = large ? "w-full md:max-w-lg" : "w-full md:max-w-sm";

  return (
    <div className={`bg-white rounded-lg shadow-sm ${padding} mb-4 ${width} md:mx-auto`}>
      <Quote className={`text-primary ${iconSize} flex-shrink-0`} />

      <p className={`mx-4 ${margTop} text-primary ${textSize} flex-1`}>
        {text}
      </p>

      {author && (
        <p className={`mx-4 text-gray-700 font-medium ${margTop} ${authorSize}`}>
          {author}
        </p>
      )}
    </div>
  );
};


export default CitationCard;
