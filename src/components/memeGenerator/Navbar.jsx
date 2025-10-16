import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-500">
      <div className="flex items-center p-7 space-x-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rM9igyzpeneokA9qydMUUWBJ3tQYDlmQjQ&s"
          alt=""
          width={40}
          height={40}
        />
        <h1 className="text-2xl font-serif text-white ">Meme Generator</h1>
      </div>
    </nav>
  );
};

export default Navbar;
