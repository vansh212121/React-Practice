import React from "react";

const Banner = ({gameStatus}) => {
  return (
    <section>
      {/* Banner Section */}
      {gameStatus === "won" && (
        <section className="max-w-md mx-auto bg-green-600 rounded-xl shadow-lg p-6 border border-green-500">
          <div className="flex items-center justify-center gap-4">
            {/* Added a checkmark icon for better UI */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>

            {/* Grouped the text for better styling */}
            <div>
              <h1 className="text-2xl font-bold text-white">You Win!</h1>
              <p className="text-green-100">Well Done! 🔥</p>
            </div>
          </div>
        </section>
      )}

      {gameStatus === "lost" && (
        <section className="max-w-md mx-auto bg-red-600 rounded-xl shadow-lg p-6 border border-red-500">
          <div className="flex items-center justify-center gap-4">
            <svg
              xmlns="http://www.w.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <div>
              <h1 className="text-2xl font-bold text-white">You Lose!</h1>
              <p className="text-red-100">Better luck next time!</p>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Banner;
