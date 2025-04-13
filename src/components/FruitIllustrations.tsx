
import React from "react";

const FruitIllustrations: React.FC = () => {
  const fruits = [
    "https://i.imgur.com/VPmZF3S.png", // Blueberry
    "https://i.imgur.com/1YMdoTP.png", // Lemon
    "https://i.imgur.com/x1NfGIi.png", // Cherry
    "https://i.imgur.com/fHJBWPv.png", // Berry
    "https://i.imgur.com/KGEmYU3.png", // Apple
    "https://i.imgur.com/7MZgtqS.png", // Pear
    "https://i.imgur.com/Gydquzp.png", // Strawberry
    "https://i.imgur.com/KJ5yXcJ.png", // Raspberry
    "https://i.imgur.com/wkPMZJR.png", // Orange
  ];

  return (
    <div className="container-custom my-10">
      <div className="flex justify-between items-center overflow-x-auto py-4 space-x-8">
        {fruits.map((fruit, index) => (
          <div key={index} className="flex-shrink-0">
            <img src={fruit} alt={`Fruit illustration ${index + 1}`} className="h-12 md:h-16 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitIllustrations;
