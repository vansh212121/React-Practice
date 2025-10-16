import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

// A simple button component to avoid repeating styles
const GameButton = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`text-white font-bold py-4 px-8 rounded-xl text-2xl shadow-lg transition-colors ${className}`}
  >
    {children}
  </button>
);

const Dice = () => {
  const [die, setDie] = useState(generateNewDice());
  const [tenzies, setTenzies] = useState(false);

  // State and effect to get window dimensions for the confetti
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const allHeld = die.every((d) => d.isHeld);
    const firstValue = die[0].value;
    const allSameValue = die.every((d) => d.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [die]);

  function generateNewDice() {
    return new Array(10).fill(0).map(() => ({
      id: crypto.randomUUID(),
      isHeld: false,
      value: Math.ceil(Math.random() * 6),
    }));
  }

  function rollDice() {
    if (!tenzies) {
      setDie((oldDice) =>
        oldDice.map((d) => {
          return d.isHeld ? d : { ...d, value: Math.ceil(Math.random() * 6) };
        })
      );
    } else {
      setTenzies(false);
      setDie(generateNewDice());
    }
  }

  function hold(id) {
    if (tenzies) return;

    setDie((oldDice) => {
      return oldDice.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      });
    });
  }

  const diceElements = die.map((d) => (
    <button
      key={d.id}
      onClick={() => hold(d.id)}
      className={`h-24 w-24 text-4xl font-bold shadow-lg ${
        d.isHeld
          ? "bg-green-400 hover:bg-green-500 text-white"
          : "bg-white hover:bg-gray-200 text-black"
      } rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105`}
    >
      {d.value}
    </button>
  ));

  return (
    <div className=" flex items-center justify-center  p-4">
      <main className="bg-gray-900 text-white p-10 rounded-2xl flex flex-col items-center justify-center gap-8 shadow-2xl max-w-2xl w-full">
        {tenzies && (
          <ReactConfetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={300}
          />
        )}
        <div className="text-center">
          <h1 className="text-5xl font-bold">Tenzies</h1>
          <p className="mt-4 text-gray-300">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4 md:gap-6">{diceElements}</div>

        <GameButton
          onClick={rollDice}
          className={
            tenzies
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
          }
        >
          {tenzies ? "New Game" : "Roll"}
        </GameButton>
      </main>
    </div>
  );
};

export default Dice;
