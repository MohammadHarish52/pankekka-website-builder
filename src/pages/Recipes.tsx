import React from "react";
import Navbar from "@/components/Navbar";
import FruitIllustrations from "@/components/FruitIllustrations";
import RecipeGrid from "@/components/RecipeGrid";
import Footer from "@/components/Footer";

const Recipes: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <div className="container-custom mt-8">
        <div className="flex flex-col items-center">
          <div className="text-xs uppercase tracking-widest text-darkText/70 mb-1">
            <span>Home</span> &gt; <span>Recipes</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif tracking-wide uppercase mt-8">
            Our Recipes
          </h1>

          <div className="max-w-2xl mx-auto text-center mt-8 leading-relaxed">
            <p className="text-base md:text-lg font-serif">
              Discover our carefully crafted recipes that highlight the natural
              flavors of our artisanal fruit products. From breakfast to
              dessert, we offer delightful culinary experiences for every
              occasion.
            </p>
          </div>
        </div>
      </div>

      <FruitIllustrations />

      <div className="container-custom mt-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif uppercase mb-4">
              Seasonal Favorites
            </h2>
            <p className="font-serif mb-6">
              Our most popular recipes using seasonal fruits and preserves.
              Perfect for enjoying the best flavors each season has to offer.
            </p>
            <div className="border-t border-gray-200 pt-6">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center group"
                  >
                    <span className="font-serif group-hover:text-accent transition-colors">
                      Summer Berry Trifle
                    </span>
                    <span className="text-xs uppercase tracking-wider text-darkText/50">
                      Summer
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center group"
                  >
                    <span className="font-serif group-hover:text-accent transition-colors">
                      Apple & Cinnamon Cake
                    </span>
                    <span className="text-xs uppercase tracking-wider text-darkText/50">
                      Autumn
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center group"
                  >
                    <span className="font-serif group-hover:text-accent transition-colors">
                      Cranberry Winter Punch
                    </span>
                    <span className="text-xs uppercase tracking-wider text-darkText/50">
                      Winter
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center group"
                  >
                    <span className="font-serif group-hover:text-accent transition-colors">
                      Rhubarb Spring Compote
                    </span>
                    <span className="text-xs uppercase tracking-wider text-darkText/50">
                      Spring
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-serif uppercase mb-4">
              Chef's Selection
            </h2>
            <p className="font-serif mb-6">
              Curated recipes from our head chef, featuring unique flavor
              combinations and techniques to elevate your culinary creations.
            </p>
            <div className="border-t border-gray-200 pt-6">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center group"
                  >
                    <span className="font-serif group-hover:text-accent transition-colors">
                      Elderflower Panna Cotta
                    </span>
                    <span className="text-xs uppercase tracking-wider text-darkText/50">
                      Dessert
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center group"
                  >
                    <span className="font-serif group-hover:text-accent transition-colors">
                      Blackberry Thyme Galette
                    </span>
                    <span className="text-xs uppercase tracking-wider text-darkText/50">
                      Pastry
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center group"
                  >
                    <span className="font-serif group-hover:text-accent transition-colors">
                      Plum & Rosemary Jam
                    </span>
                    <span className="text-xs uppercase tracking-wider text-darkText/50">
                      Preserve
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center group"
                  >
                    <span className="font-serif group-hover:text-accent transition-colors">
                      Fig & Honey Toast
                    </span>
                    <span className="text-xs uppercase tracking-wider text-darkText/50">
                      Breakfast
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <RecipeGrid />

      <Footer />
    </div>
  );
};

export default Recipes;
