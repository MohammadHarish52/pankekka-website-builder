
import React from "react";
import RecipeCard from "./RecipeCard";
import { Select } from "@/components/ui/select";

interface Recipe {
  id: number;
  title: string;
  image: string;
  rating: number;
  category: string;
}

const recipes: Recipe[] = [
  {
    id: 1,
    title: "Swedish Pancakes with Berries",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
    category: "Breakfast"
  },
  {
    id: 2,
    title: "Fruit Compote with Yogurt",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4,
    category: "Breakfast"
  },
  {
    id: 3,
    title: "Berry Tart with Custard",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
    category: "Dessert"
  },
  {
    id: 4,
    title: "Homemade Granola",
    image: "https://images.unsplash.com/photo-1517093157656-b9eccef01cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    rating: 4,
    category: "Breakfast"
  },
  {
    id: 5,
    title: "Crepes with Mascarpone",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 5,
    category: "Dessert"
  },
  {
    id: 6,
    title: "Hazelnut Pralines",
    image: "https://images.unsplash.com/photo-1548329408-0bcd6e68058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    rating: 4,
    category: "Sweets"
  },
  {
    id: 7,
    title: "Fruit Punch with Candied Fruits",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    rating: 5,
    category: "Drinks"
  },
  {
    id: 8,
    title: "Italian Almond Cookies",
    image: "https://images.unsplash.com/photo-1587244141530-6b6aceef93db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4,
    category: "Sweets"
  }
];

const RecipeGrid: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="w-full md:w-48 mb-4 md:mb-0">
            <div className="relative border border-gray-300 rounded">
              <select className="appearance-none w-full py-2 pl-4 pr-8 bg-white text-xs uppercase tracking-widest">
                <option value="">All Dishes</option>
                <option value="breakfast">Breakfast</option>
                <option value="dessert">Dessert</option>
                <option value="sweets">Sweets</option>
                <option value="drinks">Drinks</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-48">
            <div className="relative border border-gray-300 rounded">
              <select className="appearance-none w-full py-2 pl-4 pr-8 bg-white text-xs uppercase tracking-widest">
                <option value="">All Products</option>
                <option value="fruits">Fruits</option>
                <option value="jams">Jams</option>
                <option value="preserves">Preserves</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              rating={recipe.rating}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <span className="border border-black w-8 h-8 flex items-center justify-center font-serif">1</span>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-accent font-serif">2</a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-accent font-serif">3</a>
            <span className="w-8 h-8 flex items-center justify-center font-serif">...</span>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:text-accent font-serif">11</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default RecipeGrid;
