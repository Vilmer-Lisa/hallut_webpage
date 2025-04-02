
import React from "react";
import { ArrowRight, Link as LinkIcon, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const mentions = [
  {
    id: "mention-1",
    title: "The Economic Sustainability Revolution",
    excerpt: "An insightful review of 'Håll ut' highlighting the innovative economic sustainability framework presented in the book.",
    date: "May 15, 2023",
    source: "LinkedIn",
    author: "Emma Johansson",
    url: "https://linkedin.com/post/example1",
    sourceIcon: <Linkedin size={20} />
  },
  {
    id: "mention-2",
    title: "Sustainability Models That Actually Work",
    excerpt: "This blog post discusses how the principles from 'Håll ut' can be applied to transform business operations for long-term sustainability.",
    date: "April 22, 2023",
    source: "Economics Today Blog",
    author: "Lars Eriksson",
    url: "https://example.com/blog/sustainability-models",
    sourceIcon: <LinkIcon size={20} />
  },
  {
    id: "mention-3",
    title: "Required Reading for Modern Business Leaders",
    excerpt: "A detailed analysis of why 'Håll ut' should be on every executive's bookshelf in today's challenging business landscape.",
    date: "March 10, 2023",
    source: "LinkedIn",
    author: "Sofia Lindberg",
    url: "https://linkedin.com/post/example2",
    sourceIcon: <Linkedin size={20} />
  },
  {
    id: "mention-4",
    title: "Balancing Profit and Sustainability",
    excerpt: "This article references 'Håll ut' as a pioneering work that bridges the gap between profitability and sustainable business practices.",
    date: "February 28, 2023",
    source: "Business Sustainability Forum",
    author: "Anders Peterson",
    url: "https://example.com/forum/balancing-profit",
    sourceIcon: <LinkIcon size={20} />
  }
];

const Mentioned = () => {
  return (
    <>
      {/* Mentions Hero */}
      <section className="relative bg-sage-50 pt-16 pb-24">
        <div className="content-wrapper">
          <SectionHeading 
            title="Mentions & Reviews" 
            subtitle="See what others are saying about 'Håll ut' across LinkedIn and other platforms."
          />
        </div>
      </section>

      {/* Mentions List */}
      <section className="section">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {mentions.map(mention => (
              <article key={mention.id} className="group">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    {mention.sourceIcon}
                    {mention.source}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{mention.date}</span>
                </div>
                <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">
                  <a href={mention.url} target="_blank" rel="noopener noreferrer">
                    {mention.title}
                  </a>
                </h3>
                <p className="text-muted-foreground mt-2 mb-2">{mention.excerpt}</p>
                <p className="text-sm font-medium mb-4">By {mention.author}</p>
                <a 
                  href={mention.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read full post
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-slim bg-sage-50">
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Stay Updated with New Mentions</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive updates when the book is featured in new articles and discussions.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 py-3 px-4 border border-sage-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentioned;
