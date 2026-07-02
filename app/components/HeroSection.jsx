"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Add to globals.css:
// @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600&family=Inter:wght@300;400&display=swap');

const IMAGES = ["/hero.jpg", "/hero.webp"];
const SLIDE_DURATION = 7000;

export default function HeroSection({ lang = "fr" }) {
  const [scrollY, setScrollY] = useState(0);
  const [current, setCurrent] = useState(0);
  const t = {
    location: lang === "en" ? "Atlas, Morocco" : "Atlas, Maroc",
    line2:    lang === "en" ? "Breathe the" : "Respirez la",
    line3:    lang === "en" ? "difference" : "différence",
    book:     lang === "en" ? "Book" : "Réserver",
    langBtn:  lang === "en" ? "FR" : "EN",
    langHref: lang === "en" ? "/" : "/eng",
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % IMAGES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600&family=Inter:wght@300;400&display=swap');

        .font-el-messiri { font-family: 'El Messiri', serif; }
        .font-inter       { font-family: 'Inter', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes kenBurns {
          from { transform: scale(1.0); }
          to   { transform: scale(1.1); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
          50%       { opacity: 0.8; transform: scaleY(1); }
        }

        .slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 2s ease-in-out;
          will-change: opacity;
        }
        .slide.active {
          opacity: 1;
          animation: kenBurns ${SLIDE_DURATION + 2000}ms ease-out forwards;
        }

        .a1 { animation: fadeIn  1s   ease forwards; opacity: 0; animation-delay: 0.3s; }
        .a2 { animation: fadeUp  0.9s ease forwards; opacity: 0; animation-delay: 0.5s; }
        .a3 { animation: fadeUp  0.9s ease forwards; opacity: 0; animation-delay: 0.7s; }
        .a4 { animation: fadeUp  0.9s ease forwards; opacity: 0; animation-delay: 0.95s; }
        .a5 { animation: fadeUp  0.9s ease forwards; opacity: 0; animation-delay: 1.15s; }
        .a6 { animation: fadeIn  1s   ease forwards; opacity: 0; animation-delay: 1.3s; }

        .scroll-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          animation: scrollPulse 2.4s ease-in-out infinite;
        }

        .social-btn {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.25s ease, background 0.25s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .social-btn:hover {
          border-color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.1);
        }

        .book-btn {
          font-family: 'El Messiri', serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          border: 1px solid #fff;
          padding: 13px 30px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.3s ease, color 0.3s ease;
          white-space: nowrap;
        }
        .book-btn:hover {
          background: transparent;
          color: #fff;
        }
      `}</style>

      <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-black">

        {/* ── Slideshow — all slides always mounted ── */}
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.12}px)`, willChange: "transform" }}
        >
          {IMAGES.map((src, i) => (
            <div
              key={src}
              className={`slide${i === current ? " active" : ""}`}
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>

        {/* Dark overlay — heavier on left for text legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        {/* ── Logo — top center ── */}
        <header className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-7 a1">
          <img
            src="/logo.png"
            alt="Oxygen Village"
            className="h-20 w-auto object-contain"
          />
          <Link
            href={t.langHref}
            style={{
              position: "absolute",
              right: "24px",
              top: "28px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#000",
              background: "#fff",
              border: "1px solid #fff",
              padding: "7px 14px",
              textDecoration: "none",
              transition: "background 0.25s ease, color 0.25s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#000"; }}
          >
            {t.langBtn}
          </Link>
        </header>

        {/* ── Left-aligned hero text ── */}
        <div className="relative z-20 h-full flex flex-col justify-center px-10 md:px-16 lg:px-20 max-w-3xl">

          <span className="a2 font-inter text-white/45 text-[10px] tracking-[0.45em] uppercase font-light mb-6">
            {t.location}
          </span>

          <h1 className="font-el-messiri text-white font-medium leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}>
            <span className="a3 block">Oxygen Village</span>
            <span className="a4 block">{t.line2}</span>
            <span className="a5 block">{t.line3}</span>
          </h1>

          <a
            href="https://oxygen-village.hotelrunner.com/bv3"
            target="_blank"
            rel="noopener noreferrer"
            className="a5 book-btn self-start"
          >
            {t.book}
          </a>
        </div>

        {/* ── Right side — social icons ── */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 a6">
          <a
            href="https://www.facebook.com/profile.php?id=61566130216944&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Facebook"
          >
            {/* Facebook icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/oxygen.village/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="Instagram"
          >
            {/* Instagram icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
            </svg>
          </a>
        </div>

        {/* ── Scroll label — bottom right, vertical ── */}
        <div className="absolute bottom-10 right-8 z-20 flex flex-col items-center gap-3 a6">
          <span className="scroll-label font-inter text-white/30 text-[9px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-white/25" />
        </div>

        {/* ── Slide dots — bottom left ── */}
        <div className="absolute bottom-10 left-10 md:left-16 lg:left-20 z-20 flex gap-2 a6">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                border: "none",
                padding: 0,
                cursor: "pointer",
                height: "2px",
                borderRadius: "2px",
                width: i === current ? "22px" : "6px",
                background: i === current ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.3)",
                transition: "width 0.5s ease, background 0.5s ease",
              }}
            />
          ))}
        </div>

      </section>
    </>
  );
}