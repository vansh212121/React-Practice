import clsx from "clsx";
import React from "react";

const KeyBoard = ({ letters, setLetters, gameStatus, currentWord }) => {
  function trackLetters(letter) {
    if (gameStatus !== "playing" || letters.includes(letter)) return;

    setLetters((prevLetters) => [...prevLetters, letter]);
  }

  // Alphabets Buttons
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetButtons = alphabets.split("").map((letter) => {
    const isGuessed = letters.includes(letter.toUpperCase());
    const isCorrect = isGuessed && currentWord.includes(letter.toUpperCase());
    const isWrong = isGuessed && !currentWord.includes(letter.toUpperCase());

    return (
      <button
        key={letter}
        onClick={() => trackLetters(letter.toUpperCase())}
        disabled={isGuessed}
        className={clsx(
          // Base styles for all buttons
          "w-12 h-12 text-white font-bold text-xl rounded-lg uppercase border-b-4 active:border-b-0 active:translate-y-px transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500",

          {
            "bg-green-600 border-green-800": isCorrect,
            "bg-red-600 border-red-800": isWrong,
            "bg-gray-700 border-gray-900 hover:bg-gray-600": !isGuessed,
            "disabled:opacity-40 disabled:cursor-not-allowed": isGuessed,
          }
        )}
      >
        {letter}
      </button>
    );
  });

  return (
    <section className="pt-2">
      <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {alphabetButtons}
      </div>
    </section>
  );
};

export default KeyBoard;
