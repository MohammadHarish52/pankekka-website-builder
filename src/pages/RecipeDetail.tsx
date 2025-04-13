import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FruitIllustrations from "@/components/FruitIllustrations";
import { ArrowLeft, Clock, Users } from "lucide-react";

// Import the recipe data to access it
import { recipes } from "@/components/RecipeGrid";

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipeId = parseInt(id || "1");

  // Find the recipe with the matching ID
  const recipe = recipes.find((r) => r.id === recipeId);

  // Recommended products array
  const recommendedProducts = [
    {
      id: 1,
      name: "Strawberry Jam",
      image:
        "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "250g jar",
      price: "$8.95",
    },
    {
      id: 2,
      name: "Mixed Berry Preserve",
      image:
        "https://images.unsplash.com/photo-1585678668451-ecd744ae0a1b?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "250g jar",
      price: "$9.95",
    },
    {
      id: 3,
      name: "Elderflower Syrup",
      image:
        "https://images.unsplash.com/photo-1713775259912-d1f68f0b14ba?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "200ml bottle",
      price: "$12.95",
    },
    {
      id: 4,
      name: "Apple Butter",
      image:
        "https://images.unsplash.com/photo-1691480208637-6ed63aac6694?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "300g jar",
      price: "$10.95",
    },
  ];

  // If recipe not found, show a simple message
  if (!recipe) {
    return (
      <div className="min-h-screen bg-cream">
        <Navbar />
        <div className="container-custom py-16 text-center">
          <h1 className="text-3xl font-serif mb-6">Recipe not found</h1>
          <Link
            to="/recipes"
            className="bg-black text-white text-xs px-4 py-2 uppercase tracking-wider"
          >
            Back to Recipes
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Ingredients array - dynamically selects the right preserve type based on category
  const ingredients = [
    "2 cups all-purpose flour",
    "3 tablespoons sugar",
    "1 teaspoon baking powder",
    "1/2 teaspoon salt",
    `1 jar Pankekka ${
      recipe.category.toLowerCase() === "breakfast"
        ? "Berry Preserve"
        : recipe.category.toLowerCase() === "dessert"
        ? "Fruit Compote"
        : "Fruit Spread"
    }`,
    "Fresh seasonal fruits for garnish",
  ];

  // Instructions array
  const instructions = [
    "Mix all dry ingredients in a large bowl.",
    "Add wet ingredients and mix until just combined.",
    "Heat a pan or griddle over medium heat.",
    "Cook until golden brown on both sides.",
    `Serve with Pankekka ${
      recipe.category.toLowerCase() === "breakfast"
        ? "Berry Preserve"
        : recipe.category.toLowerCase() === "dessert"
        ? "Fruit Compote"
        : "Fruit Spread"
    } and fresh fruits.`,
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <div className="container-custom mt-8">
        <div className="flex flex-col items-center">
          <div className="text-xs uppercase tracking-widest text-darkText/70 mb-1 w-full">
            <span>Home</span> &gt; <span>Recipes</span> &gt;{" "}
            <span>{recipe.title}</span>
          </div>
        </div>
      </div>

      <div className="container-custom mt-8">
        <Link
          to="/recipes"
          className="inline-flex items-center font-serif mb-8 hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all recipes
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-auto rounded-sm shadow-sm"
            />

            <div className="flex justify-center mt-4">
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= recipe.rating ? "rating-dot" : "rating-dot-empty"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-8">
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-darkText/70" />
                <span className="text-sm">30 min</span>
              </div>
              <div className="flex items-center">
                <Users size={18} className="mr-2 text-darkText/70" />
                <span className="text-sm">Serves 4</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-darkText/70">
              {recipe.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif tracking-wide mt-2 mb-6">
              {recipe.title}
            </h1>

            <p className="font-serif mb-8 leading-relaxed">
              This delicious {recipe.title.toLowerCase()} recipe features our
              homemade{" "}
              {recipe.category.toLowerCase() === "breakfast"
                ? "berry preserves"
                : recipe.category.toLowerCase() === "dessert"
                ? "fruit compote"
                : "sweetened fruit preparation"}
              . The balanced flavors and beautiful presentation make it perfect
              for{" "}
              {recipe.category.toLowerCase() === "breakfast"
                ? "starting your day"
                : recipe.category.toLowerCase() === "dessert"
                ? "ending a meal"
                : "any occasion"}
              .
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-serif uppercase tracking-wide mb-4">
                Ingredients
              </h2>
              <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2"></span>
                    <span className="font-serif">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-serif uppercase tracking-wide mb-4">
                Instructions
              </h2>
              <ol className="space-y-4">
                {instructions.map((instruction, index) => (
                  <li key={index} className="pl-8 relative font-serif">
                    <span className="absolute left-0 font-serif">
                      {index + 1}.
                    </span>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="bg-black text-white text-xs px-6 py-3 uppercase tracking-wider inline-block"
              >
                Print Recipe
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-serif uppercase tracking-wide mb-10 text-center">
            Recommended Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="bg-cream p-6 text-center">
                <div className="h-40 flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-auto"
                  />
                </div>
                <h3 className="uppercase text-sm tracking-widest mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-darkText/70 mb-4">{product.size}</p>
                <span className="font-serif">{product.price}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#"
              className="bg-black text-white text-xs px-6 py-3 uppercase tracking-wider inline-block"
            >
              Shop All Products
            </a>
          </div>
        </div>
      </div>

      <FruitIllustrations />

      <Footer />
    </div>
  );
};

export default RecipeDetail;
