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
      className="mt-4 inline-block px-8 py-4 bg-black text-white border-1 border-white font-semibold rounded-3xl hover:bg-white hover:text-black transition-all duration-300">
      SEE MORE
    </button>
  );
}
