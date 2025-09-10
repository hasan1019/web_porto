"use client";
import { projects } from "@/data/portofolio";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetailPage() {
  const { id } = useParams(); // ambil slug dari url
  const router = useRouter();
  const project = projects.find((p) => p.id.toString() === id);

  const [index, setIndex] = useState(0);

  if (!project) {
    return (
      <div className="text-center text-white mt-20">Project not found</div>
    );
  }

  useEffect(() => {
    if (!project.images || project.images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images!.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <main className="min-h-screen p-10 text-white relative">
      {/* Tombol kembali */}
      <button
        onClick={() => router.push("/portofolio")}
        className="absolute top-20 left-20 text-md text-neutral-500 hover:text-white transition">
        ← Kembali
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto my-50">
        <div className="relative h-[30rem] overflow-hidden rounded-2xl shadow-lg bg-neutral-900 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {project.images && project.images[index] && (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absoulute inset-0 flex flex-col">
                <img
                  src={project.images?.[index].src}
                  alt={project.images?.[index].caption}
                  className="h-full w-full object-cover rounded-2xl"
                />

                <p className="text-center text-sm bg-black/60 py-2 rounded-b-2xl">
                  {project.images?.[index]?.caption}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-center space-y-4 text-left">
          <h1 className="text-3xl font-bold">{project.tittle}</h1>
          <p className="text-lg">{project.description}</p>
          <p className="text-base leading-relaxed text-neutral-400">
            {project.details}
          </p>
        </div>
      </div>
    </main>
  );
}
