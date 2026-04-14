"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IMAGES = [
  { src: "/gallery/1.jpg",  label: "Vue Atlas" },
  { src: "/gallery/2.jpg",  label: "Intérieur" },
  { src: "/gallery/3.jpg",  label: "Nature" },
  { src: "/gallery/4.jpg",  label: "Piscine" },
  { src: "/gallery/5.jpg",  label: "Panorama" },
  { src: "/gallery/6.jpg",  label: "Nuit étoilée" },
  { src: "/gallery/7.jpg",  label: "Terrasse" },
  { src: "/gallery/8.jpg",  label: "Forêt" },
  { src: "/gallery/9.jpg",  label: "Coucher de soleil" },
  { src: "/gallery/10.jpg", label: "Sommet" },
];

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

export default function AboutGalerie() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="bg-[#f7f5f0] py-20 overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Inter:wght@300;400&display=swap');

        .about-swiper { padding: 0 48px !important; }

        .about-swiper .swiper-slide { width: 380px !important; height: 460px !important; }
        .about-swiper .swiper-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .about-swiper .swiper-pagination {
          bottom: -40px !important;
          left: 0 !important;
          right: 0 !important;
          width: calc(100% - 96px) !important;
          margin: 0 48px;
          height: 1px;
          background: #e0ddd8;
        }
        .about-swiper .swiper-pagination-progressbar-fill { background: #1a1a1a !important; }
        .about-swiper .swiper-button-prev,
.about-swiper .swiper-button-next {
  color: #1a1a1a !important;
}
      `}</style>

      {/* Header */}
      <div className="px-12 max-w-7xl mx-auto">
        <div className={`flex items-end justify-between flex-wrap gap-8 mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div>
            <p className="font-['Inter'] text-[10px] tracking-[0.45em] uppercase text-[#aaa] font-light mb-3">
              À propos &amp; Galerie
            </p>
            <h2 className="font-['El_Messiri'] text-4xl font-medium text-[#1a1a1a] leading-tight max-w-md">
              Un refuge où l'innovation,<br />le luxe et la nature s'unissent
            </h2>
          </div>
          <p className="font-['Cormorant_Garamond'] text-base font-light text-[#999] leading-relaxed max-w-xs text-right">
            Niché à 1500 mètres d'altitude, à la jonction du Moyen et du Haut Atlas — un séjour écoresponsable pensé dans les moindres détails.
          </p>
        </div>
      </div>

      {/* Swiper */}
      <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={10}
          loop={true}
          navigation
          pagination={{ type: "progressbar" }}
          className="about-swiper"
          style={{ paddingBottom: "60px" }}
        >
          {IMAGES.map(({ src, label }) => (
            <SwiperSlide key={label}>
              <img src={src} alt={label} draggable="false" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer */}
      <div className={`px-12 max-w-7xl mx-auto mt-10 pt-8 border-t border-[#e0ddd8] flex items-center justify-between flex-wrap gap-4 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="flex">
          {[["1500m","Altitude"],["100%","Écoresponsable"],["2","Chaînes Atlas"]].map(([n, l], i) => (
            <div key={l} className={`pr-7 ${i !== 0 ? "pl-7 border-l border-[#e0ddd8]" : ""}`}>
              <div className="font-['El_Messiri'] text-[1.6rem] font-medium text-[#1a1a1a] leading-none">{n}</div>
              <div className="font-['Inter'] text-[9px] tracking-[0.22em] uppercase text-[#bbb] font-light mt-1">{l}</div>
            </div>
          ))}
        </div>
        <a
          href="https://oxygen-village.hotelrunner.com/bv3"
          target="_blank"
          rel="noopener noreferrer"
          className="font-['El_Messiri'] text-[10px] tracking-[0.3em] uppercase text-white bg-[#1a1a1a] border border-[#1a1a1a] px-8 py-3 no-underline hover:bg-transparent hover:text-[#1a1a1a] transition-all duration-300"
        >
          Réserver votre séjour
        </a>
      </div>

    </section>
  );
}