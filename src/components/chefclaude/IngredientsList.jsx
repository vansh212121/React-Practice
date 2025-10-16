import React from "react";
import { Button } from "../ui/button";

const IngredientsList = ({ items, handleClick }) => {
    
  const itemsList = items.map((item, index) => <li key={index}>{item}</li>);

  return (
    <section className="px-5 space-y-6">
      <h1 className="text-3xl font-serif">Ingredients on Hand</h1>

      <ul className="list-disc list-inside px-5 space-y-3">{itemsList}</ul>

      {items.length >= 4 && (
        <div className="bg-[#FFF8E7] p-8 rounded-2xl shadow-md mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-serif text-gray-800">
              Ready for a recipe?
            </h1>
            <Button
              onClick={handleClick}
              className="bg-orange-500 rounded-xl text-white hover:bg-orange-400"
            >
              Get Recipe
            </Button>
          </div>
          <p className="text-gray-600 mt-3">
            Generate a recipe with a list of your ingredients
          </p>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
