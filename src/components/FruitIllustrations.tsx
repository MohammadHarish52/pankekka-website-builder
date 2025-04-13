import React from "react";

const FruitIllustrations: React.FC = () => {
  const fruits = [
    "https://images.unsplash.com/photo-1740903534818-9b2375790286?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Blueberry
    "https://images.unsplash.com/photo-1610126176343-3e1833a107e1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Lemon
    "https://images.unsplash.com/photo-1594294809831-17b41563ba09?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Cherry
    "https://images.unsplash.com/photo-1615484477676-c6f3c18e8462?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Berry
    "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Apple
    "https://images.unsplash.com/photo-1729499991586-27e04a30f421?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Pear
    "https://images.unsplash.com/photo-1717625940956-421a56f5bdc8?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Strawberry
    "https://images.unsplash.com/photo-1618422689173-3dbcdeb82fa7?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Raspberry
    "https://plus.unsplash.com/premium_photo-1676642609912-7e47d0c59ba1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Orange
  ];

  return (
    <div className="container-custom my-10">
      <div className="flex justify-between items-center overflow-x-auto py-4 space-x-8">
        {fruits.map((fruit, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={fruit}
              alt={`Fruit illustration ${index + 1}`}
              className="h-12 md:h-16 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitIllustrations;
