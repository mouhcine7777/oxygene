"use client";

import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const ITEMS = [
  "Une carte riche et variée.",
  "Une expérience culinaire unique.",
  "Cuisine gourmande et savoureuse.",
];

export default function RestaurantSection() {
  const [ref, inView] = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Inter:wght@300;400&display=swap');
      `}</style>

      <section ref={ref} className="bg-[#f7f5f0] py-24 px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">

            <p className={`font-['Inter'] text-[10px] tracking-[0.45em] uppercase text-[#aaa] font-light transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Restaurant
            </p>

            <h2 className={`font-['El_Messiri'] text-4xl md:text-[2.6rem] font-medium text-[#1a1a1a] leading-tight transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Des menus variés pour chaque instant gourmand
            </h2>

            <div className={`w-10 h-px bg-[#ccc] transition-all duration-700 delay-150 ${inView ? "opacity-100" : "opacity-0"}`} />

            <p className={`font-['Cormorant_Garamond'] text-lg font-light text-[#777] leading-relaxed transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Profitez d'une cuisine savoureuse et diversifiée, allant des plats simples et légers aux créations plus sophistiquées. Chaque repas est une opportunité de découvrir de nouvelles saveurs dans une atmosphère conviviale.
            </p>

            <ul className={`flex flex-col gap-3 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-4 h-px bg-[#aaa] flex-shrink-0" />
                  <span className="font-['Inter'] text-[13px] font-light text-[#666] tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            <div className={`transition-all duration-700 delay-[400ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <a
                href="/menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-['El_Messiri'] text-[11px] tracking-[0.3em] uppercase text-white bg-[#1a1a1a] border border-[#1a1a1a] px-8 py-3 no-underline hover:bg-transparent hover:text-[#1a1a1a] transition-all duration-300"
              >
                Voir la carte
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M1 10L10 1M10 1H5M10 1V6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Right — 2 images */}
          <div className={`relative flex gap-4 items-end transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>

            {/* Tall image */}
            <div className="w-[55%] overflow-hidden">
              <img
                src="/gallery/5.jpg"
                alt="Restaurant"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Short image — offset down */}
            <div className="w-[45%] overflow-hidden mt-16">
              <img
                src="/restaurant.jpg"
                alt="Cuisine"
                className="w-full h-[380px] object-cover"
              />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}