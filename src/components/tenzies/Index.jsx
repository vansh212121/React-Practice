import React from "react";
import Dice from "./Dice";

const Index = () => {
  return (
    <div className="bg-blue-900 p-8 min-h-screen flex">

      <main className="bg-white rounded-2xl shadow-xl w-full p-8">
            <Dice/>
      </main>
      
    </div>
  );
};

export default Index;
