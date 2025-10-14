import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const Hero = () => {
  const [items, setItems] = useState([]);

  const itemsList = items.map((item, index) => <li key={index}>{item}</li>);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newItem = formData.get("item");
    const color = formData.get("color");

    console.log(color);

    if (newItem.trim() === "") return; // avoid empty items
    setItems((prevItems) => [...prevItems, newItem]);
    event.target.reset(); // clear input
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col flex-1">
          <Label
            htmlFor="item"
            className="text-lg font-medium text-gray-700 mb-3 ml-1"
          >
            Ingredient
          </Label>
          <div className="flex items-center space-x-7">
            <Input
              id="item"
              name="item"
              placeholder="e.g. oregano"
              className="rounded-xl"
              type="text"
            />
            <Button className="bg-black text-white hover:bg-gray-700 rounded-xl">
              + Add Ingredient
            </Button>
          </div>
        </div>
      </form>

      {items.length > 0 ? (
        <section className="px-5 space-y-6">
          <h1 className="text-3xl font-serif">Ingredients on Hand</h1>

          <ul className="list-disc list-inside px-5 space-y-3">{itemsList}</ul>

          {items.length >= 4 && (
            <div className="bg-[#FFF8E7] p-8 rounded-2xl shadow-md mt-8">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-serif text-gray-800">
                  Ready for a recipe?
                </h1>
                <Button className="bg-orange-500 rounded-xl text-white hover:bg-orange-400">
                  Get Recipe
                </Button>
              </div>
              <p className="text-gray-600 mt-3">
                Generate a recipe with a list of your ingredients
              </p>
            </div>
          )}
        </section>
      ) : <h1 className="text-2xl font-serif text-center pt-8">Add Ingredients to generate your recipe</h1>}
    </div>
  );
};

export default Hero;
