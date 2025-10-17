import React, { useEffect } from "react";
import { Badge } from "../ui/badge";
import { languages } from "./languages";

const LanguagesBadges = ({
  letters,
  currentWord,
  gameStatus,
  setGameStatus,
}) => {
  const LIVES = languages.length;

  // --- Derived State (calculated on each render) ---
  const wrongGuessesCount = letters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const livesLeft = LIVES - wrongGuessesCount;

  // Win Condition
  useEffect(() => {
    // Check for a win
    const hasWon = currentWord
      .split("")
      .every((letter) => letters.includes(letter));
    if (hasWon && gameStatus === "playing") {
      setGameStatus("won");
    }
  }, [letters, currentWord, gameStatus]);

  // Loss Condition
  useEffect(() => {
    // Check for a loss
    if (livesLeft === 0 && gameStatus === "playing") {
      setGameStatus("lost");
    }
  }, [livesLeft, gameStatus]);

  // Badges
  const languageElements = languages.slice(0, livesLeft).map((item) => {
    const styles = {
      backgroundColor: item.backgroundColor,
      color: item.color,
      // Using a transparent border to prevent shifting on hover in some cases
      border: "1px solid transparent",
    };
    return (
      <Badge
        key={item.name}
        style={styles}
        className="px-4 py-1 text-md font-semibold shadow-lg transform transition-transform hover:scale-110 cursor-pointer"
      >
        {item.name}
      </Badge>
    );
  });

  return (
    <section className="pt-5 pb-2">
      <div className="flex space-x-5 justify-center">{languageElements}</div>
    </section>
  );
};

export default LanguagesBadges;
