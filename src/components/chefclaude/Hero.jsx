import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import Recipe from "./Recipe";
import { Label } from "../ui/label";
import IngredientsList from "./IngredientsList";

const Hero = () => {
  const [items, setItems] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newItem = formData.get("item");

    if (newItem.trim() === "") return;
    setItems((prevItems) => [...prevItems, newItem]);
    event.target.reset();
  };

  const handleClick = () => {
    setRecipeShown((prev) => !prev);
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
        <IngredientsList items={items} handleClick={handleClick} />
      ) : (
        <h1 className="text-2xl font-serif text-center pt-8">
          Add Ingredients to generate your recipe
        </h1>
      )}

      {/* Recipe */}
      {recipeShown && <Recipe />}
    </div>
  );
};

export default Hero;
