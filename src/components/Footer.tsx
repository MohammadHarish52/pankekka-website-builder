import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <Link to="/">
              <img
                src="/assets/images/logo.png"
                alt="Pankekka"
                className="h-16 mb-4 invert"
              />
            </Link>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">
                Contact
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="footer-link text-sm">
                    Our Address
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    customer@pankekka.com
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    +1 (555) 123-4567
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">
                Products
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="footer-link text-sm">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    Jams
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    Honey
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    Preserves
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    Spreads
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">
                Inspiration
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="footer-link text-sm">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    Seasonal Ideas
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    Stories & Tips
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">
                About Us
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="footer-link text-sm">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    Philosophy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8 text-center text-xs text-white/60">
          <p>© {new Date().getFullYear()} Pankekka. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="hover:text-white">
              Impressum
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
