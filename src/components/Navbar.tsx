import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="py-4 bg-cream border-b border-gray-200 relative">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <button
              className="p-2"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className="flex-1 flex justify-center md:justify-start">
            <Link to="/" className="font-serif text-lg md:text-xl">
              Pankekka
            </Link>
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

          <div className="flex items-center md:hidden">
            <button className="p-2">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-cream z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="font-serif text-xl">
              Pankekka
            </Link>
            <button
              className="p-2"
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            <Link to="/" className="nav-link" onClick={toggleSidebar}>
              Home
            </Link>
            <Link to="/recipes" className="nav-link" onClick={toggleSidebar}>
              Recipes
            </Link>
            <Link
              to="/inspiration"
              className="nav-link"
              onClick={toggleSidebar}
            >
              Inspiration
            </Link>
            <Link to="/about" className="nav-link" onClick={toggleSidebar}>
              About Us
            </Link>
            <Link to="/shop" className="nav-link" onClick={toggleSidebar}>
              Shop
            </Link>
            <Link to="/blog" className="nav-link" onClick={toggleSidebar}>
              Blog
            </Link>
            <Link
              to="/contact"
              className="bg-black text-white text-xs px-4 py-2 uppercase tracking-wider mt-4 inline-block"
              onClick={toggleSidebar}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
