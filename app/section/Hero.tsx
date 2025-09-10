"use client";
import React from "react";

import ProfileCard from "@/lib/ui/profileCard/ProfileCard";
import SplitText from "@/lib/ui/SplitText";
import { TextGenerateEffect } from "@/lib/ui/text-generate-effect";

const words = "Designing, Coding, and Creating Awesome Website";
export function HeroSection() {
  return (
    <div className="max-w-6xl h-[53rem] mx-auto flex justify-between items-center">
      <div className="max-w-4xl mx-auto p-4 justify-center text-center space-y-2">
        <div>
          <SplitText
            text="Hello Folks!!"
            className="text-2xl text-neutral-200 font-medium "
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        <div>
          <SplitText
            text="I AM HASAN"
            className="text-7xl text-neutral-200 font-semibold "
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        <div>
          <SplitText
            text="Frontend Developer & UI/UX Designer"
            className="text-lg text-neutral-200 font-normal "
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            // onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        {/* <TextGenerateEffect
          words={words}
          duration={3}
          filter={true}
          className="flex justify-center"
        /> */}
        {/* <p className="text-neutral-400 max-w-3xl mx-auto my-2 text-md text-justify relative z-10">
          Hi, I’m Hasan 👋. I’m a developer passionate about building modern, fast, and user-friendly websites using{" "}
          <span className="font-semibold">Next.js</span> and <span className="font-semibold">TailwindCSS</span>. I'd like to built fast,
          modern, and usefull website.
        </p> */}
      </div>
    </div>
  );
}
