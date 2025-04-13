import React from "react";
import { Link } from "react-router-dom";
import { Search, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="py-4 bg-cream border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="p-2 mr-2 md:hidden">
              <Menu size={20} />
            </button>
            <button className="p-2">
              <Search size={18} />
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/recipes" className="nav-link">
              Recipes
            </Link>
            <Link to="/inspiration" className="nav-link">
              Inspiration
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </nav>

          <div className="flex items-center justify-end space-x-4">
            <Link to="/shop" className="nav-link hidden md:block">
              Shop
            </Link>
            <Link to="/blog" className="nav-link hidden md:block">
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-black text-white text-xs px-4 py-2 uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
