import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          {/* Pankekka */}
          <div>
            <Link to="/" className="font-serif text-xl md:text-2xl">
              Pankekka
            </Link>
          </div>

          {/* Links - two columns */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm uppercase tracking-wide mb-3 font-medium">
                Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/recipes"
                    className="text-sm text-white/80 hover:text-white"
                  >
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inspiration"
                    className="text-sm text-white/80 hover:text-white"
                  >
                    Inspiration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-white/80 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-white/80 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wide mb-3 font-medium">
                Contact
              </h4>
              <p className="text-sm text-white/80">customer@pankekka.com</p>
              <p className="text-sm text-white/80">+1 (555) 123-4567</p>
              <p className="text-sm text-white/80 mt-2">
                Berryhill Lane 45
                <br />
                Stockholm, Sweden
              </p>
            </div>
          </div>
        </div>

        {/* Copyright with social links */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Pankekka. All rights reserved.
            </p>

            <div className="flex space-x-4 mt-3 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
