import React from "react";
import { CometCard } from "@/lib/ui/comet-card";

export const AboutSection = () => {
  return (
    <section className="h-[55rem] flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        <div className="flex justify-center ">
          <CometCard>
            <button
              type="button"
              className="my-10 flex w-85 cursor-pointer flex-col items-stretch rounded-[18px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
              aria-label="View invite F7RA"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}>
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-[3/4] w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-70"
                    alt="Invite background"
                    src="/PP(2).jpg"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                <div className="text-xs">Hasan</div>
                <div className="text-xs text-gray-300 opacity-50">FrontEnd</div>
                <div className="text-xs text-gray-300 opacity-50">UI/UX</div>
              </div>
            </button>
          </CometCard>
        </div>

        <div className="text-white text-right flex flex-col justify-center space-y-6">
          <p className="leading-normal">
            Saya seorang web developer dengan pengalaman di React, Next.js, dan Tailwind CSS. Fokus saya adalah membangun aplikasi web yang
            modern, responsif, dan memiliki performa tinggi.
          </p>
          <p className="leading-normal">
            Saya senang mempelajari teknologi baru dan selalu terbuka untuk tantangan yang bisa mengasah kemampuan saya di bidang front-end
            maupun fullstack development.
          </p>
          <div>
            <a
              href="/CV_M. Hasan Farikhi.pdf"
              download
              className="inline-block px-8 py-4 bg-black text-white border-1 border-white font-semibold rounded-3xl hover:bg-white hover:text-black transition-all duration-300">
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
