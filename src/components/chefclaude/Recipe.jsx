import React from "react";

const Recipe = () => {
  return (
    <section className="px-6 py-8 mb-6">
      <h1 className="text-3xl font-serif mb-5 text-gray-800 border-b pb-2">
        Chef Claude Recommends:
      </h1>

      <article className="bg-[#FFF8E7] rounded-2xl shadow-md p-8 space-y-4 leading-relaxed">
        <p className="text-gray-700">
          Based on the ingredients you have available, I would recommend making
          a simple and delicious{" "}
          <strong className="text-orange-600">Beef Bolognese Pasta</strong>.
          Here is the recipe:
        </p>

        <h2 className="font-sans font-semibold text-2xl mt-6 text-gray-800">
          Beef Bolognese Pasta
        </h2>

        <div>
          <strong className="text-lg text-gray-800 block mb-2">
            Ingredients:
          </strong>
          <ul className="space-y-1 list-disc list-inside text-gray-700">
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>
              8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
            </li>
          </ul>
        </div>

        <div>
          <strong className="text-lg text-gray-800 block mb-2">
            Instructions:
          </strong>
          <ol className="space-y-2 list-decimal list-inside text-gray-700">
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>
              In a large skillet or Dutch oven, cook the ground beef over
              medium-high heat until browned, about 5–7 minutes.
            </li>
            <li>
              Add diced onion and minced garlic; cook until translucent, 2–3
              minutes.
            </li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>
              Add crushed tomatoes, broth, oregano, and basil. Season with salt
              and pepper.
            </li>
            <li>
              Simmer on low heat for 15–20 minutes, stirring occasionally.
            </li>
            <li>
              Cook pasta per package directions, then drain and return to the
              pot.
            </li>
            <li>Add the Bolognese sauce to the pasta and toss to combine.</li>
            <li>Serve hot, garnished with basil or grated Parmesan cheese.</li>
          </ol>
        </div>
      </article>
    </section>
  );
};

export default Recipe;
