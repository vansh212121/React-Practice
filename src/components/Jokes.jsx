import React from "react";

const Jokes = (props) => {
  return (
    <main className="bg-black">
      <ul className="px-10 py-5">
        <li>
          <span className="text-xl font-serif text-green-400">{props.joke} </span>
          <br />
          <span className="text-xs text-red-300">{props.punchline}</span>
        </li>
      </ul>
    </main>
  );
};

export default Jokes;
