import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Cydex Logo" className="h-8" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-[#59B800] transition-colors">
            Home
          </Link>
          <Link to="/#about" className="hover:text-[#59B800] transition-colors">
            About Us
          </Link>
          <Link
            to="/#services"
            className="hover:text-[#59B800] transition-colors"
          >
            Services
          </Link>
          <Link
            to="/#contact"
            className="hover:text-[#59B800] transition-colors"
          >
            Contact
          </Link>
          <Link to="/login">
            <Button className="bg-[#AFFF64] text-black rounded-[0] hover:bg-[#9FEF54]">
              Login
            </Button>
          </Link>
        </nav>

        {/* Navigation - Mobile */}
        {isMenuOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-white border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              <Link
                to="/"
                className="py-2 hover:text-[#59B800] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/#about"
                className="py-2 hover:text-[#59B800] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/#services"
                className="py-2 hover:text-[#59B800] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/#contact"
                className="py-2 hover:text-[#59B800] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-[#AFFF64] rounded-[0] text-black hover:bg-[#9FEF54]">
                  Login
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;
