
import React from "react";
import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  rating: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ id, title, image, rating }) => {
  return (
    <div className="recipe-card overflow-hidden">
      <Link to={`/recipes/${id}`}>
        <div className="relative overflow-hidden h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star} 
                className={star <= rating ? "rating-dot" : "rating-dot-empty"}
              />
            ))}
          </div>
          
          <h3 className="uppercase text-center tracking-widest text-sm font-medium mt-2">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
