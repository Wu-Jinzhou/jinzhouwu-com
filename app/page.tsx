// app/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import portrait from "../public/images/portrait.png";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#FAF9EE] flex flex-col">
      <header className="fixed top-0 left-0 w-full h-8 flex items-center justify-between bg-[#4E1F00] px-8 z-10 font-[anziano]">
        <span className="text-[#FAF9EE] text-lg">Jinzhou Wu</span>
        <nav className="flex gap-6">
          <a href="/about" className="text-[#FAF9EE]">
            About
          </a>
          <a href="/blog" className="text-[#FAF9EE]">
            Blog
          </a>
        </nav>
      </header>
      <main className="flex flex-col md:flex-row flex-grow pt-8 relative">
        <div className="flex flex-1 items-center justify-center">
          <Image
            src={portrait}
            alt="Portrait of Jinzhou Wu"
            width={400}
            height={400}
            className="object-cover rounded-sm px-4 md:px-0 md:pl-12 lg:pl-0 mt-12 md:mt-0"
            priority
          />
        </div>
        <div className="flex flex-1 flex-col items-center md:items-start md:pl-12 lg:pl-0 md:pr-12 px-12 md:px-0 mt-12 md:mt-0 justify-start md:justify-center text-[#4E1F00]">
          <h1 className="text-5xl font-bold mb-4 text-center md:text-left">
            Jinzhou Wu
          </h1>
          <div className="space-y-3 text-md text-[#4E1F00] max-w-xl text-justify sm:text-left font-sans">
            <p className="">
              Hi! I’m a sophomore at Cornell University exploring the
              intersections of technology, society, and humanity. I'm figuring
              out how we can align advanced AI systems with human values—and, in
              turn, what that alignment process reveals about those values
              themselves.
            </p>
            <p className="">
              The Romanian existentialist philosopher E. M. Cioran once wrote:
              “There are questions which, once approached, either isolate you or
              kill you outright.” For me, these questions are: as AI begins to
              approach human-level intelligence and encroach on qualities once
              thought to belong exclusively to us, what this shift means for our
              sense of meaning, morality, and values, and how the resulting
              absurdity invite new ways of life both at the individual and
              collective levels.
            </p>
            <p className="">
              Beyond academics and research, I enjoy hiking, sailing, diving,
              and photo shooting. You can find me reading an existentialist
              book, tinkering with the hidden layers of large language models,
              or at{" "}
              <a
                href="mailto:jw2782@cornell.edu"
                className="underline text-[#4E1F00]"
              >
                jw2782@cornell.edu
              </a>
              .
            </p>
          </div>
        </div>
        {/* Footer positioned absolutely on desktop only */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full">
          <div className="flex justify-center px-6 md:px-12 pb-8 md:pb-0">
            <Footer />
          </div>
        </div>
      </main>
      {/* Footer in normal flow on mobile */}
      <div className="flex justify-center px-6 md:px-12 md:hidden">
        <Footer />
      </div>
    </div>
  );
}
