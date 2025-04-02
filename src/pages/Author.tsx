
import React from "react";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const Author = () => {
  return (
    <>
      {/* Author Hero */}
      <section className="relative bg-sage-50 pt-16 pb-24">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="mx-auto md:col-span-1">
              <div className="aspect-square w-64 md:w-full max-w-xs bg-sage-200 rounded-full overflow-hidden border-4 border-white shadow-md">
                {/* Author image would go here */}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-serif font-medium mb-3">
                Author Name
              </h1>
              <p className="text-lg text-primary mb-4">
                Economist & Sustainability Expert
              </p>
              <p className="text-muted-foreground mb-6">
                A leading voice in the field of economic sustainability, combining academic expertise with practical business experience to guide companies toward sustainable growth and profitability.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sage-700 hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:author@example.com"
                  className="text-sage-700 hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="section">
        <div className="content-wrapper">
          <SectionHeading 
            title="Biography" 
            align="left"
          />
          
          <div className="prose max-w-none">
            <p className="text-lg">
              The author is a renowned economist specializing in sustainable business practices with over 15 years of experience in both academic research and corporate advisory roles. Their work has significantly contributed to the understanding of how companies can implement economically viable sustainability strategies.
            </p>
            
            <p className="mt-4">
              After completing doctoral studies at Stockholm School of Economics, they went on to become a professor of Economic Sustainability at a leading European university. Their research has been published in prestigious journals including the Journal of Sustainable Economics and Business Strategy Review.
            </p>
            
            <p className="mt-4">
              Beyond academia, they have worked as a strategic advisor to numerous Fortune 500 companies, helping them develop and implement sustainability frameworks that enhance rather than compromise financial performance. This unique combination of theoretical knowledge and practical experience informs the insights presented in "Håll ut: så skapar företag en hållbar framtid."
            </p>
            
            <p className="mt-4">
              When not researching or advising, they are a frequent speaker at international conferences and has delivered keynotes at the World Economic Forum, Sustainable Business Summit, and numerous industry-specific events focused on the future of sustainable economic practices.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section-slim bg-secondary">
        <div className="content-wrapper">
          <SectionHeading 
            title="Areas of Expertise" 
            subtitle="Specialized knowledge and research focus"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <h3 className="font-serif font-medium">Sustainable Economic Models</h3>
              <p className="text-sm text-muted-foreground">Developing frameworks for long-term economic sustainability in business operations.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <h3 className="font-serif font-medium">ESG Financial Analytics</h3>
              <p className="text-sm text-muted-foreground">Quantifying the financial impact of environmental, social, and governance factors.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <h3 className="font-serif font-medium">Circular Economy</h3>
              <p className="text-sm text-muted-foreground">Economic benefits of circular business models and resource efficiency.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-sm space-y-2 hover:shadow-md transition-shadow">
              <h3 className="font-serif font-medium">Sustainability Reporting</h3>
              <p className="text-sm text-muted-foreground">Effective methods for measuring and communicating sustainability performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section">
        <div className="content-wrapper">
          <SectionHeading 
            title="Selected Publications" 
            subtitle="Academic and industry-focused works on economic sustainability"
            align="left"
          />
          
          <div className="space-y-8 mt-8">
            <div className="p-6 border border-sage-100 bg-white rounded-lg hover:border-sage-200 transition-colors">
              <h4 className="font-serif text-xl mb-2">Håll ut: så skapar företag en hållbar framtid</h4>
              <p className="text-muted-foreground mb-4">Timbro Förlag, 2023</p>
              <p>A comprehensive guide to implementing sustainable economic practices in business environments, featuring case studies, frameworks, and practical strategies.</p>
              <div className="mt-4">
                <a 
                  href="https://timbro.se/forlag/hall-ut-sa-skapar-foretag-en-hallbar-framtid/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="p-6 border border-sage-100 bg-white rounded-lg hover:border-sage-200 transition-colors">
              <h4 className="font-serif text-xl mb-2">Economic Sustainability: Theory and Practice</h4>
              <p className="text-muted-foreground mb-4">Journal of Sustainable Economics, Vol. 28, 2021</p>
              <p>An academic paper exploring the theoretical foundations of economic sustainability and their practical applications in business contexts.</p>
            </div>
            
            <div className="p-6 border border-sage-100 bg-white rounded-lg hover:border-sage-200 transition-colors">
              <h4 className="font-serif text-xl mb-2">Measuring the ROI of Sustainability Initiatives</h4>
              <p className="text-muted-foreground mb-4">Business Strategy Review, Issue 3, 2020</p>
              <p>A research study quantifying the financial returns of various sustainability initiatives across different industries and company sizes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Speaking */}
      <section className="section bg-sage-900 text-white">
        <div className="content-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Interested in a Speaking Engagement?</h2>
            <p className="text-lg mb-8">
              The author is available for keynotes, workshops, and panel discussions on economic sustainability, business strategy, and related topics.
            </p>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-900">
              <a href="mailto:speaking@example.com">
                Request Speaking Information
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Author;
