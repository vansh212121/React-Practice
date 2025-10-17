import React from "react";

const Words = ({ currentWord, letters }) => {
  const letterElements = currentWord.split("").map((letter, index) => (
    <span
      key={index}
      className="w-16 h-16 bg-gray-700 border-2 border-gray-600 rounded-lg flex items-center justify-center text-4xl font-bold text-white"
    >
      {letters.includes(letter) ? letter : ""}
    </span>
  ));

  return (
    <section>
      <div className="bg-gray-900/50 p-6 rounded-xl shadow-inner flex justify-center gap-4 w-min mx-auto">
        {letterElements}
      </div>
    </section>
  );
};

export default Words;
