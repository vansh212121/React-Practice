import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Content = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({ ...prevMeme, name: [value] }));
  }

  function GenerateMeme() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;
    setMeme((prev) => ({
      ...prev,
      imageUrl: newMemeUrl,
    }));
  }

  return (
    <div className="mt-12 flex flex-col items-center space-y-8">
      {/* Inputs */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-2xl">
        <div className="flex flex-col space-y-2 flex-1 min-w-[200px]">
          <h1 className="text-gray-700 font-medium">Top Text</h1>
          <Input placeholder="One does not simply" onChange={handleChange} />
        </div>
        <div className="flex flex-col space-y-2 flex-1 min-w-[200px]">
          <h1 className="text-gray-700 font-medium">Bottom Text</h1>
          <Input placeholder="Walk into Mordor" onChange={handleChange} />
        </div>
      </div>

      {/* Button */}
      <Button
        onClick={GenerateMeme}
        className="bg-purple-500 text-white rounded-xl px-6 py-2 hover:bg-purple-400"
      >
        Get new meme image
      </Button>

      {/* Meme Display Area */}
      <div className="mt-8 w-full max-w-xl h-[400px] bg-gray-100 rounded-2xl relative flex items-center justify-center shadow-inner overflow-hidden">
        <img
          src={meme.imageUrl}
          alt="Generated meme"
          className="w-full h-full object-contain rounded-xl"
        />
        <span className="absolute top-4 left-1/2 -translate-x-1/2 text-black text-3xl font-extrabold drop-shadow-md uppercase tracking-wide text-center">
          {meme.topText}
        </span>
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black text-3xl font-extrabold drop-shadow-md uppercase tracking-wide text-center">
          {meme.bottomText}
        </span>
      </div>
    </div>
  );
};

export default Content;
