import React, { useState } from "react";
import Banner from "./Banner.jsx";
import Words from "./Words.jsx";
import KeyBoard from "./KeyBoard.jsx";
import LanguagesBadges from "./LanguageBadges.jsx";
import RestartGame from "./RestartGame";

const Content = () => {
  const [currentWord, setCurrentWord] = useState("REACT");
  const [letters, setLetters] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing"); // 'playing', 'won', 'lost'

  return (
    <main className="px-14 py-10 space-y-5">
      <header className=" space-y-4">
        <h1 className="text-5xl font-serif text-center text-gray-200">
          Assemby: EndGame
        </h1>
        <p className="text-lg text-gray-400 text-center">
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>

      {/* Banner Section */}
      <Banner gameStatus={gameStatus} />

      {/* Badges Section */}
      <LanguagesBadges
        letters={letters}
        currentWord={currentWord}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />

      {/* word Section */}
      <Words currentWord={currentWord} letters={letters} />

      {/* Alphabets Section */}
      <KeyBoard
        letters={letters}
        setLetters={setLetters}
        gameStatus={gameStatus}
        currentWord={currentWord}
      />

      {/* Restart Game BUtton */}
      <RestartGame
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setLetters={setLetters}
      />
    </main>
  );
};

export default Content;
