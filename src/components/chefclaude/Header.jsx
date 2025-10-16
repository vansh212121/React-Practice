import React from "react";

const Header = () => {
  return (
    <nav className="bg-gray-100">
      <div className="flex space-x-3 items-center justify-center py-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2v2QaJbKoMrqwBj9G58BcLzHSHgy0Oqoaag&s"
          alt=""
          width={60}
          height={60}
        />
        <span className="text-2xl font-serif">Chef Claude</span>
      </div>
    </nav>
  );
};

export default Header;
