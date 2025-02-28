
import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-background/95 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="h-10 w-10 relative flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight">
            Pegasus
            <span className="text-primary">CS</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#programs" className="text-sm font-medium hover-underline">
            Programs
          </a>
          <a href="#research" className="text-sm font-medium hover-underline">
            Research
          </a>
          <a href="#faculty" className="text-sm font-medium hover-underline">
            Faculty
          </a>
          <a href="#contact" className="text-sm font-medium hover-underline">
            Contact
          </a>
          <Button size="sm" variant="outline" className="ml-2">
            Resources
          </Button>
          <Button size="sm">Apply Now</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#programs"
              className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="#research"
              className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Research
            </a>
            <a
              href="#faculty"
              className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Faculty
            </a>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex space-x-2 pt-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Button>
              <Button
                size="sm"
                className="flex-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
