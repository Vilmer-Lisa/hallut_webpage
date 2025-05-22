
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { DataContext } from '../strapi-data/FooterProvider';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { Footer } = useContext(DataContext);
  if (!Footer) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <footer className="bg-sage-50 border-t border-sage-100">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-primary">{Footer.title}</h3>
            <p className="text-sage-700 text-sm max-w-xs">
            {Footer.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-sage-900">{Footer.quicklinkstitle}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/activities" className="text-sage-700 hover:text-primary text-xs animated-underline">
                {Footer.quicklink1}
                </Link>
              </li>
              <li>
                <Link to="/examples" className="text-sage-700 hover:text-primary text-xs animated-underline">
                {Footer.quicklink2}
                </Link>
              </li>
              <li>
                <Link to="/aboutbook" className="text-sage-700 hover:text-primary text-xs animated-underline">
                {Footer.quicklink3}
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-sage-700 hover:text-primary text-xs animated-underline">
                {Footer.quicklink4}
                </Link>
              </li>
              <li>
                <Link to="/aboutme" className="text-sage-700 hover:text-primary text-xs animated-underline">
                {Footer.quicklink5}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-sage-900">{Footer.contacttitle}</h4>
            <div className="flex space-x-4">
              <a 
                href={Footer.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${Footer.email}`}
                className="text-sage-700 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sage-100 text-sage-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} {Footer.bottomtext}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
