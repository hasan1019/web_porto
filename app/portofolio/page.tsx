"use client";

import { Footer } from "../components/Footer";
import { Header } from "@/app/components/Header";
import { projects } from "@/data/portofolio";
import { group } from "console";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 z-50">
        <Header />
      </nav>
      <main className="min-h-screen justify-center flex flex-col items-center p-10">
        <div className="text-4xl font-bold text-center text-white mb-10">
          <h1>My Portfolio</h1>
        </div>

        <section className="grid grid-cols-2 gap-6 max-w-4xl w-full px-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portofolio/${project.id}`}
              className={`relative overflow-hidden rounded-2xl p-20 ${project.bgColor} ${project.span ?? ""} group`}>
              <img
                src={project.image}
                alt={project.tittle}
                className="absolute inset-0 w-full h-full object-cover scale-100 transition-transform duration-500 group-hover:scale-110 "
              />
              <div className=" absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:opacity-0"></div>
              <div className="z-10 relative flex flex-col justify-center items-center text-center p-6 text-neutral-200 transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-xl font-bold">{project.tittle}</h3>
                <p className="text-md mt-2 ">{project.description}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
