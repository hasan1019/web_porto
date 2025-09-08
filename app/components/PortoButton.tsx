"use client";
import { useRouter } from "next/navigation";
import { JSX } from "react";

export default function HeroButton(): JSX.Element {
  const router = useRouter();

  const handleClick = () => {
    router.push("/portofolio");
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 px-6 py-2 outline-3 outline-neutral-50 text-white bg-black rounded-2xl transition-all duration-300 hover:bg-white/90 hover:text-black hover:outline-transparent">
      See More
    </button>
  );
}
