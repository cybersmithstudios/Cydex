import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const LandingHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-[#AFFF64]" />
          <span className="text-2xl font-bold">Cydex</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-[#AFFF64] transition-colors">
            Home
          </Link>
          <Link to="/#about" className="hover:text-[#AFFF64] transition-colors">
            About Us
          </Link>
          <Link
            to="/#services"
            className="hover:text-[#AFFF64] transition-colors"
          >
            Services
          </Link>
          <Link
            to="/#contact"
            className="hover:text-[#AFFF64] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button
              variant="outline"
              className="bg-[#AFFF64] rounded-md rounded-[0] border-0 shadow-md"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
