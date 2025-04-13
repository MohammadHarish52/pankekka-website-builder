
import React from "react";
import Navbar from "@/components/Navbar";
import FruitIllustrations from "@/components/FruitIllustrations";
import RecipeGrid from "@/components/RecipeGrid";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <div className="container-custom mt-8">
        <div className="flex flex-col items-center">
          <div className="text-xs uppercase tracking-widest text-darkText/70 mb-1">
            <span>Home</span> &gt; <span>Recipes</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif tracking-wide uppercase mt-8">Recipe Ideas</h1>
          
          <div className="max-w-2xl mx-auto text-center mt-8 leading-relaxed">
            <p className="text-base md:text-lg font-serif">
              Since 1879, the Pankekka family has been creating small delicacies with lots of love and even more fruit. 
              Anyone who wants to be inspired by this will find sweet recipe ideas and lots of enjoyment here. 
              A true delight for eyes and palate!
            </p>
          </div>
        </div>
      </div>
      
      <FruitIllustrations />
      <RecipeGrid />
      
      <Footer />
    </div>
  );
};

export default Index;
