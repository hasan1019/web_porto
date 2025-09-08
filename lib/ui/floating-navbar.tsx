"use client";
import React, { JSX, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/ui/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg px-8 py-3 items-center justify-center space-x-6",
          className
        )}>
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className="flex dark:text-neutral-50 items-center space-x-1 text-zz dark:hover:text-neutral-300 hover:text-neutral-500">
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
