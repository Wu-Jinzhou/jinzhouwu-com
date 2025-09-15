// app/page.tsx
"use client";

import React from "react";
import { Permanent_Marker, Lato } from "next/font/google";

const marker = Permanent_Marker({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"] });

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer>
      <ul
        className={`text-sm mt-4 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-6 md:space-y-0 ${lato.className}`}
      >
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-600"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Wu-Jinzhou"
          >
            <ArrowIcon />
            <p className="ml-2 h-6">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-600"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/29.watson/"
          >
            <ArrowIcon />
            <p className="ml-2 h-6">instagram</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-600"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jinzhouwu/"
          >
            <ArrowIcon />
            <p className="ml-2 h-6">linkedin</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 text-black flex flex-col items-center justify-center p-6">
      {/* Sticker */}
      <div
        className="relative w-[300px] sm:w-[400px] md:w-[520px] select-none"
        aria-label="Hello, my name is Jinzhou Wu sticker"
      >
        <div className="mx-auto -rotate-2">
          {/* Red outline wrapper */}
          <div className="rounded-[44px] bg-indigo-700 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            {/* Inner card */}
            <div className="rounded-[40px] overflow-hidden">
              {/* Top red band */}
               <div className="bg-indigo-700 px-10 pt-1 pb-1 text-center">
                <div className="text-5xl sm:text-6xl font-extrabold tracking-wide text-white leading-none">
                  HELLO
                </div>
                <div className="mt-0 text-base sm:text-lg font-semibold uppercase tracking-[0.1em] text-white">
                  my name is
                </div>
              </div>

              {/* Bottom white area */}
              <div className="bg-white text-black px-0 py-8 text-center">
                <div
                  className={`${marker.className} text-5xl sm:text-6xl md:text-7xl leading-tight`}
                  style={{
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                  }}
                >
                  Jinzhou Wu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center">
        {/* Under construction line */}
        <p className={`mt-12 text-center ${lato.className} text-lg`}>
          🏗️ This site is currently under construction.
        </p>

        {/* Links */}
        <Footer />
      </div>
      
    </main>
  );
}
