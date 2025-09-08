import React from "react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiFigma, SiHtml5, SiCss3 } from "react-icons/si";

export const TechStack = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="flex items-center space-x-8 px-8 py-4 rounded-2xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg">
        <h1 className="font-semibold text-white tracking-widest">TECH STACK</h1>
        <SiFigma className="w-8 h-8 text-white" />
        <SiHtml5 className="w-8 h-8 text-amber-600" />
        <SiCss3 className="w-8 h-8 text-sky-500" />
        <SiReact className="w-8 h-8 text-cyan-400" />
        <SiNextdotjs className="w-8 h-8 text-white" />
        <SiTailwindcss className="w-8 h-8 text-sky-400" />
        <SiNodedotjs className="w-8 h-8 text-green-500" />
      </div>
    </div>
  );
};
