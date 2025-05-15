import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import portfolioData from "@/lib/portfolio-data";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-secondary/95 backdrop-blur-sm border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold text-gradient">DevfolioX</a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-foreground hover:text-primary transition-colors duration-300 font-medium",
                  activeSection === item.href.substring(1) && "text-primary"
                )}
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="default" className="ml-4 rounded-full">
              <a href={portfolioData.resumeUrl} download>
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-secondary border-t border-border"
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-foreground hover:text-primary transition-colors duration-300 font-medium",
                    activeSection === item.href.substring(1) && "text-primary"
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
              <Button asChild variant="default" className="rounded-full w-full">
                <a href={portfolioData.resumeUrl} download>
                  Resume
                </a>
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}
