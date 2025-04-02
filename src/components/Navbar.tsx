
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/book", label: "The Book" },
    { to: "/author", label: "Author" },
    { to: "/articles", label: "Articles" },
    { to: "/examples", label: "Examples" },
    { to: "/seminars", label: "Seminars" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-40 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-8 py-5">
        <nav className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-primary font-serif text-xl md:text-2xl font-medium"
          >
            Ekonomisk Hållbarhet
          </NavLink>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-primary" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => cn(
                  "text-sm font-medium transition-colors hover:text-primary animated-underline",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm absolute top-full left-0 w-full shadow-md">
          <div className="container max-w-6xl mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => cn(
                  "px-2 py-2 text-base transition-colors hover:text-primary",
                  isActive ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
