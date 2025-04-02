
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const articles = [
  {
    id: "sustainable-profit-models",
    title: "The Economics of Sustainable Profit Models",
    excerpt: "How companies are finding new ways to balance profit with purpose in today's economy.",
    date: "May 15, 2023",
    category: "Business Strategy",
    readTime: "8 min read"
  },
  {
    id: "measuring-sustainability",
    title: "Measuring Sustainability: Beyond Financial Metrics",
    excerpt: "Innovative approaches to evaluate the true impact of sustainability initiatives on business performance.",
    date: "April 22, 2023",
    category: "Analytics",
    readTime: "12 min read"
  },
  {
    id: "circular-economy-benefits",
    title: "The Economic Benefits of Circular Business Models",
    excerpt: "How circular economy principles are creating new revenue streams while reducing environmental impact.",
    date: "March 10, 2023",
    category: "Innovation",
    readTime: "10 min read"
  },
  {
    id: "investor-perspectives",
    title: "Sustainability from the Investor's Perspective",
    excerpt: "How the investment community is evaluating sustainability performance and its implications for company valuations.",
    date: "February 28, 2023",
    category: "Finance",
    readTime: "7 min read"
  },
  {
    id: "regulatory-changes",
    title: "Economic Opportunities in Regulatory Changes",
    excerpt: "Turning compliance challenges into competitive advantages through proactive sustainability strategies.",
    date: "January 15, 2023",
    category: "Policy",
    readTime: "9 min read"
  },
  {
    id: "small-business-sustainability",
    title: "Economic Sustainability for Small and Medium Enterprises",
    excerpt: "Tailored approaches for smaller organizations to implement sustainable practices without breaking the bank.",
    date: "December 5, 2022",
    category: "SMEs",
    readTime: "11 min read"
  },
];

const Articles = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(articles.map(article => article.category)));

  return (
    <>
      {/* Articles Hero */}
      <section className="relative bg-sage-50 pt-16 pb-24">
        <div className="content-wrapper">
          <SectionHeading 
            title="Articles & Insights" 
            subtitle="Explore our collection of articles on economic sustainability and related topics."
          />
          
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 pl-10 pr-4 border border-sage-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="section">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {filteredArticles.length > 0 ? (
              filteredArticles.map(article => (
                <article key={article.id} className="group">
                  <div className="aspect-video bg-sage-100 rounded-lg mb-4"></div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span>{article.category}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">
                    <Link to={`/articles/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mt-2 mb-4">{article.excerpt}</p>
                  <Link 
                    to={`/articles/${article.id}`}
                    className="text-primary font-medium hover:underline"
                  >
                    Read more
                  </Link>
                </article>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-slim bg-sage-50">
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Stay Updated with Our Latest Insights</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive new articles, book updates, and seminar announcements directly to your inbox.
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

export default Articles;
