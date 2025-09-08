"use client";
import React from "react";
import CardSwap, { Card } from "@/lib/ui/CardSwap/CardSwap";
import Image from "next/image";
import Button from "@/app/components/PortoButton";

export default function PortoSection() {
  return (
    <section className="h-[53rem] flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 relative max-h-screen h-[600px] border border-white/50 rounded-xl overflow-hidden text-white grid grid-cols-2">
        <div className="flex flex-col justify-center mx-6 space-y-4">
          <h1 className="text-5xl font-bold ">PORTOFOLIO</h1>
          <p>Some projects I have worked on, both during internships and study independent program</p>
          <div>
            <Button />
          </div>
        </div>
        <div className="relative flex-col h-[550px] ">
          <CardSwap cardDistance={70} verticalDistance={100} delay={5000} pauseOnHover={false}>
            <Card className="p-4 overflow-clip">
              <h3 className="font-bold">SinauBareng</h3>
              <p>Insternship Team Project || UI/UX</p>
              <Image src="/SinauBareng.png" alt="ndoro arum" width={600} height={400} className="mt-2 rounded-md" />
            </Card>
            <Card className="p-4 overflow-hidden">
              <h3 className="font-bold">Ndoro Arum</h3>
              <p>Study Independent Team Project || UI/UX</p>
              <Image src="/NdoroArum.png" alt="ndoro arum" width={600} height={400} className="mt-2 rounded-md" />
            </Card>
            <Card className="p-4 overflow-hidden">
              <h3 className="font-bold">HiColleagues</h3>
              <p>Study Independent Test Project || UI/UX</p>
              <Image src="/HiColleagues.png" alt="ndoro arum" width={600} height={400} className="mt-2 rounded-md" />
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
