import React from "react";
import { Button } from "./components/ui/button";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content2 from "./components/Login";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="py-10 px-28 space-y-12">
        <Hero/>
        {/* <Login /> */}
      </div>
    </div>
  );
};

export default App;
