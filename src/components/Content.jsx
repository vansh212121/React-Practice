// import React from "react";

// const Content = () => {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center  text-gray-200 p-8">
//       {/* Header */}
//       <header className="mb-6 flex items-center space-x-32">
//         <img
//           src="src/assets/react.svg"
//           alt="React Logo"
//           className="w-20 h-20 animate-spin-slow"
//         />
//         <nav>
//           <ul className="flex space-x-4 items-center text-lg">
//             <li className="text-white ">Pricing</li>
//             <li className="text-white">About</li>
//             <li className="text-white">Contact</li>
//           </ul>
//         </nav>
//       </header>

//       {/* Main Content Section */}
//       <section className="text-center max-w-md">
//         <h1 className="text-3xl font-semibold text-blue-400 mb-4">
//           Interesting Facts About React
//         </h1>

//         <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
//           <li>It’s a Library, Not a Framework</li>
//           <li>Developed and Maintained by Meta (Facebook)</li>
//           <li>Built Around Component-Based Architecture</li>
//           <li>Uses a Virtual DOM for Efficient Rendering</li>
//         </ul>
//       </section>

//       {/* Footer */}
//       <footer className="mt-8 text-sm text-gray-500">
//         © {new Date().getFullYear()} All rights reserved.
//       </footer>
//     </main>
//   );
// };

// export default Content;

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

