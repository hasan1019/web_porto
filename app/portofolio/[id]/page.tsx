"use client";
import { projects } from "@/data/portofolio";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useParams, useRouter } from "next/navigation";

export default function ProjectDetailPage() {
  const { id } = useParams(); // ambil slug dari url
  const router = useRouter();

  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div className="text-center text-white mt-20">Project not found</div>;
  }

  return (
    <main className="min-h-screen p-10 text-white relative">
      {/* Tombol kembali */}
      <button
        onClick={() => router.push("/portofolio")}
        className="absolute top-20 left-20 text-md text-neutral-500 hover:text-white transition">
        ← Kembali
      </button>

      {/* Detail Project */}
      <div className="max-w-3xl mx-auto text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">{project.tittle}</h1>
        <p className="text-lg mb-6">{project.description}</p>
        {project.image && <img src={project.image} alt={project.tittle} className="rounded-lg shadow-lg mx-auto max-w-full" />}
      </div>
    </main>
  );
}
