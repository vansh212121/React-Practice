import React from "react";
import data from "../lib/data.js";

const Content = () => {
  return (
    <main className="px-10 py-12 space-y-12">
      {data.map((item) => (
        <article
          key={item.id}
          className="flex flex-col md:flex-row items-start gap-8 border-b border-gray-700 pb-10"
        >
          <img
            src={item.img.src}
            alt={item.img.alt}
            width={250}
            className="rounded-xl shadow-lg object-cover"
          />

          <div className="space-y-3">
            {/* Country + Google Maps */}
            <div className="flex items-center space-x-3">
              <h2 className="text-sm tracking-widest text-red-500 font-semibold uppercase">
                {item.country}
              </h2>
              <a
                href={item.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 text-xs underline hover:text-gray-300 transition-colors"
              >
                View on Google Maps
              </a>
            </div>

            {/* Title */}
            <h1 className="font-bold text-3xl  leading-tight">
              {item.title}
            </h1>

            {/* Dates */}
            <p className="text-sm font-semibold">{item.dates}</p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        </article>
      ))}
    </main>
  );
};

export default Content;

