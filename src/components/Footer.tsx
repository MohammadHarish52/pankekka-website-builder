import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Logo and socials */}
          <div>
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="Pankekka"
                className="h-12 mb-4 invert"
              />
            </Link>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-white hover:text-gray-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links - simplified to 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm uppercase tracking-wide mb-3 font-medium">
                Shop
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Recipes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wide mb-3 font-medium">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wide mb-3 font-medium">
                Contact
              </h4>
              <p className="text-sm">customer@pankekka.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Copyright - simplified */}
        <div className="border-t border-white/20 pt-6 text-center text-xs text-white/60">
          <p>© {new Date().getFullYear()} Pankekka. All rights reserved.</p>
          <div className="flex justify-center mt-3 space-x-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
