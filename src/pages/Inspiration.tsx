import React from "react";
import Navbar from "@/components/Navbar";
import FruitIllustrations from "@/components/FruitIllustrations";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Inspiration: React.FC = () => {
  const inspirationCategories = [
    {
      title: "Seasonal Inspiration",
      description: "Discover ways to use our products throughout the year",
      image:
        "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Creative Pairings",
      description: "Unexpected combinations that delight the senses",
      image:
        "https://images.unsplash.com/photo-1567589646383-3cd9f13a5816?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Entertaining Ideas",
      description: "Hosting tips and presentation inspiration",
      image:
        "https://images.unsplash.com/photo-1559734840-f9509ee5677f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const latestIdeas = [
    {
      title: "Breakfast Grazing Board",
      category: "Entertaining",
      image:
        "https://images.unsplash.com/photo-1461009312844-e80697a81cc7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "June 12, 2023",
    },
    {
      title: "Artisanal Gift Baskets",
      category: "Gift Ideas",
      image:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 28, 2023",
    },
    {
      title: "Citrus & Herb Preserves",
      category: "DIY",
      image:
        "https://images.unsplash.com/photo-1508737804141-4c3b688e2546?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "April 15, 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <div className="container-custom mt-8">
        <div className="flex flex-col items-center">
          <div className="text-xs uppercase tracking-widest text-darkText/70 mb-1">
            <span>Home</span> &gt; <span>Inspiration</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif tracking-wide uppercase mt-8">
            Creative Inspiration
          </h1>

          <div className="max-w-2xl mx-auto text-center mt-8 leading-relaxed">
            <p className="text-base md:text-lg font-serif">
              Beyond recipes, our products inspire creativity in many ways.
              Explore our curated collection of ideas for entertaining, gifting,
              and enjoying the art of fine food.
            </p>
          </div>
        </div>
      </div>

      <FruitIllustrations />

      {/* Inspiration Categories */}
      <div className="container-custom my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirationCategories.map((category, index) => (
            <div key={index} className="bg-white shadow-sm overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif uppercase tracking-wide mb-3">
                  {category.title}
                </h3>
                <p className="font-serif mb-4">{category.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center font-serif text-sm text-accent"
                >
                  Explore ideas <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-wide mb-6">
              Seasonal Highlights
            </h2>
            <p className="font-serif">
              Each season brings new opportunities to create and enjoy. Our
              artisans have crafted special collections and ideas that celebrate
              the unique flavors and moments of each time of year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Summer collection"
                className="rounded-sm"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif uppercase tracking-wide mb-4">
                Summer Berries Collection
              </h3>
              <p className="font-serif mb-6">
                Our summer collection celebrates the bright, vibrant flavors of
                seasonal berries. From strawberries to blackberries, we've
                created special preserves, syrups, and culinary inspirations to
                make the most of these fleeting summer treasures.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                  <span className="font-serif">
                    Limited edition berry preserves
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                  <span className="font-serif">
                    Summer cocktail and mocktail recipes
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                  <span className="font-serif">Outdoor entertaining ideas</span>
                </li>
              </ul>
              <a
                href="#"
                className="bg-black text-white text-xs px-4 py-2 uppercase tracking-wider inline-block"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Ideas */}
      <div className="container-custom my-16">
        <h2 className="text-3xl font-serif uppercase tracking-wide mb-10 text-center">
          Latest Ideas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestIdeas.map((idea, index) => (
            <a href="#" key={index} className="group">
              <div className="bg-white shadow-sm overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs uppercase tracking-wider text-darkText/70">
                      {idea.category}
                    </span>
                    <span className="text-xs text-darkText/50">
                      {idea.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif group-hover:text-accent transition-colors">
                    {idea.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            className="bg-black text-white text-xs px-6 py-3 uppercase tracking-wider inline-block"
          >
            View All Ideas
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Inspiration;
