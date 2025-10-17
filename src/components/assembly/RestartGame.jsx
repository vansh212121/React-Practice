import React from "react";

const RestartGame = ({gameStatus, setGameStatus ,setLetters}) => {
  function restartGame() {
    // This function will reset everything to start a new game
    setLetters([]);
    setGameStatus("playing");
    // Optional: select a new word
    // setCurrentWord(getNewWord());
  }

  return (
    <section className="pt-8 text-center">
      {gameStatus !== "playing" && (
        <button
          onClick={restartGame}
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-10 rounded-xl text-2xl shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          New Game
        </button>
      )}
    </section>
  );
};

export default RestartGame;
