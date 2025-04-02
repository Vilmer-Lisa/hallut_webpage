
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-50 border-t border-sage-100">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-sage-900">Ekonomisk Hållbarhet</h3>
            <p className="text-sage-700 text-sm max-w-xs">
              Exploring how companies can create a sustainable future through economic practices.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-sage-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/book" className="text-sage-700 hover:text-primary text-sm animated-underline">
                  About the Book
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-sage-700 hover:text-primary text-sm animated-underline">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/seminars" className="text-sage-700 hover:text-primary text-sm animated-underline">
                  Upcoming Seminars
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sage-700 hover:text-primary text-sm animated-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-sage-900">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="text-sage-700 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sage-100 text-sage-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Ekonomisk Hållbarhet. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-primary animated-underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary animated-underline">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
