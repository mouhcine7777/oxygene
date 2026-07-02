"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IMAGES_FR = [
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
const IMAGES_EN = [
  { src: "/gallery/1.jpg",  label: "Atlas View" },
  { src: "/gallery/2.jpg",  label: "Interior" },
  { src: "/gallery/3.jpg",  label: "Nature" },
  { src: "/gallery/4.jpg",  label: "Pool" },
  { src: "/gallery/5.jpg",  label: "Panorama" },
  { src: "/gallery/6.jpg",  label: "Starry Night" },
  { src: "/gallery/7.jpg",  label: "Terrace" },
  { src: "/gallery/8.jpg",  label: "Forest" },
  { src: "/gallery/9.jpg",  label: "Sunset" },
  { src: "/gallery/10.jpg", label: "Summit" },
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

export default function AboutGalerie({ lang = "fr" }) {
  const [ref, inView] = useInView();
  const IMAGES = lang === "en" ? IMAGES_EN : IMAGES_FR;
  const t = {
    label:   lang === "en" ? "About & Gallery" : "À propos & Galerie",
    title:   lang === "en" ? <>A sanctuary where innovation,<br />luxury and nature unite</> : <>Un refuge où l'innovation,<br />le luxe et la nature s'unissent</>,
    desc:    lang === "en"
      ? "Nestled at 1,500 metres altitude, at the junction of the Middle and High Atlas — an eco-friendly stay crafted down to the finest detail."
      : "Niché à 1500 mètres d'altitude, à la jonction du Moyen et du Haut Atlas — un séjour écoresponsable pensé dans les moindres détails.",
    stats:   lang === "en"
      ? [["1500m", "Altitude"], ["100%", "Eco-friendly"], ["2", "Atlas Ranges"]]
      : [["1500m", "Altitude"], ["100%", "Écoresponsable"], ["2", "Chaînes Atlas"]],
    cta:     lang === "en" ? "Book your stay" : "Réserver votre séjour",
  };

  return (
    <section ref={ref} className="bg-[#f7f5f0] py-14 md:py-20 overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Inter:wght@300;400&display=swap');

        /* ── Swiper container: flush on mobile, padded on desktop ── */
        .about-swiper {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
        @media (min-width: 768px) {
          .about-swiper {
            padding-left: 48px !important;
            padding-right: 48px !important;
          }
        }

        /* ── Slide dimensions: narrower on mobile ── */
        .about-swiper .swiper-slide {
          width: calc(85vw) !important;
          height: 300px !important;
        }
        @media (min-width: 480px) {
          .about-swiper .swiper-slide {
            width: 320px !important;
            height: 380px !important;
          }
        }
        @media (min-width: 768px) {
          .about-swiper .swiper-slide {
            width: 380px !important;
            height: 460px !important;
          }
        }

        .about-swiper .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Progress bar ── */
        .about-swiper .swiper-pagination {
          bottom: -32px !important;
          left: 0 !important;
          right: 0 !important;
          width: calc(100% - 40px) !important;
          margin: 0 20px;
          height: 1px;
          background: #e0ddd8;
        }
        @media (min-width: 768px) {
          .about-swiper .swiper-pagination {
            width: calc(100% - 96px) !important;
            margin: 0 48px;
          }
        }
        .about-swiper .swiper-pagination-progressbar-fill {
          background: #1a1a1a !important;
        }

        /* ── Nav arrows ── */
        .about-swiper .swiper-button-prev,
        .about-swiper .swiper-button-next {
          color: #1a1a1a !important;
          /* hide arrows on small screens to avoid overlap */
          display: none !important;
        }
        @media (min-width: 640px) {
          .about-swiper .swiper-button-prev,
          .about-swiper .swiper-button-next {
            display: flex !important;
          }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div
          className={`flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div>
            <p className="font-['Inter'] text-[10px] tracking-[0.45em] uppercase text-[#aaa] font-light mb-3">
              {t.label}
            </p>
            <h2 className="font-['El_Messiri'] text-3xl md:text-4xl font-medium text-[#1a1a1a] leading-tight max-w-md">
              {t.title}
            </h2>
          </div>
          <p className="font-['Cormorant_Garamond'] text-base font-light text-[#1a1a1a] leading-relaxed max-w-xs md:text-right">
            {t.desc}
          </p>
        </div>
      </div>

      {/* ── Swiper ── */}
      <div
        className={`transition-all duration-700 delay-200 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          spaceBetween={10}
          loop={true}
          navigation
          pagination={{ type: "progressbar" }}
          className="about-swiper"
          style={{ paddingBottom: "48px" }}
        >
          {IMAGES.map(({ src, label }) => (
            <SwiperSlide key={label}>
              <img src={src} alt={label} draggable="false" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Footer stats + CTA ── */}
      <div
        className={`px-5 sm:px-8 md:px-12 max-w-7xl mx-auto mt-4 sm:mt-10 pt-6 border-t border-[#e0ddd8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 transition-all duration-700 delay-300 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* Stats */}
        <div className="grid grid-cols-3 w-full sm:w-auto sm:flex gap-y-0">
          {t.stats.map(
            ([n, l], i) => (
              <div
                key={l}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left py-4 sm:py-0 sm:pr-7 ${
                  i !== 0 ? "border-l border-[#e0ddd8] sm:pl-7" : ""
                }`}
              >
                <div className="font-['El_Messiri'] text-[1.4rem] sm:text-[1.6rem] font-medium text-[#1a1a1a] leading-none">
                  {n}
                </div>
                <div className="font-['Inter'] text-[9px] tracking-[0.18em] uppercase text-[#bbb] font-light mt-1">
                  {l}
                </div>
              </div>
            )
          )}
        </div>

        {/* CTA */}
        <a
          href="https://oxygen-village.hotelrunner.com/bv3"
          target="_blank"
          rel="noopener noreferrer"
          className="font-['El_Messiri'] text-[10px] tracking-[0.3em] uppercase text-white bg-[#1a1a1a] border border-[#1a1a1a] px-8 py-3 no-underline hover:bg-transparent hover:text-[#1a1a1a] transition-all duration-300 w-full sm:w-auto text-center"
        >
          {t.cta}
        </a>
      </div>

    </section>
  );
}