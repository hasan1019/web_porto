import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";
import { FloatingDock } from "@/lib/ui/floating-dock";

export function TechStack() {
  const links = [
    {
      title: "React",
      icon: (
        <SiReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "NextJs",
      icon: (
        <SiNextdotjs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "TailwindCSS",
      icon: (
        <SiTailwindcss className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Github",
      icon: (
        <SiGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Figma",
      icon: (
        <SiFigma className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "HTML5",
      icon: (
        <SiHtml5 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "CSS3",
      icon: (
        <SiCss3 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[45rem] w-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <FloatingDock
        desktopClassName="scale-125"
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

// export const TechStack = () => {
//   return (
//     <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//       <div className="flex items-center space-x-8 px-8 py-4 rounded-2xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg">
//         <h1 className="font-semibold text-white tracking-widest">TECH STACK</h1>
//         <SiFigma className="w-8 h-8 text-white" />
//         <SiHtml5 className="w-8 h-8 text-amber-600" />
//         <SiCss3 className="w-8 h-8 text-sky-500" />
//         <SiReact className="w-8 h-8 text-cyan-400" />
//         <SiNextdotjs className="w-8 h-8 text-white" />
//         <SiTailwindcss className="w-8 h-8 text-sky-400" />
//         <SiNodedotjs className="w-8 h-8 text-green-500" />
//       </div>
//     </div>
//   );
// };
