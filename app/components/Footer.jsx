"use client";

import { useState } from "react";

const SUBSCRIBE_URL = "https://oxygen-village.ma/subscribe.php";

export default function NewsletterFooter({ lang = "fr" }) {
  const [email,   setEmail]   = useState("");
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);
  const t = {
    newsletterLabel: "Newsletter",
    title:     lang === "en" ? <>Stay in the air<br />of the Atlas</> : <>Restez dans l'air<br />de l'Atlas</>,
    subtitle:  lang === "en"
      ? "Exclusive offers, news and moments of serenity — straight to your inbox."
      : "Offres exclusives, nouveautés et instants de sérénité — directement dans votre boîte mail.",
    placeholder: lang === "en" ? "Your e-mail address" : "Votre adresse e-mail",
    subscribe: lang === "en" ? "Subscribe" : "S'inscrire",
    thanks:    lang === "en" ? "Thank you — see you soon ✦" : "Merci — à bientôt ✦",
    errorInvalid: lang === "en" ? "Please enter a valid e-mail address." : "Veuillez entrer une adresse e-mail valide.",
    errorServer: lang === "en" ? "Could not reach the server. Please try again." : "Impossible de joindre le serveur. Veuillez réessayer.",
    errorGeneric: lang === "en" ? "An error occurred. Please try again." : "Une erreur est survenue. Veuillez réessayer.",
    location:  lang === "en" ? "Midelt, Morocco" : "Midelt, Maroc",
    phone:     lang === "en" ? "Phone" : "Téléphone",
    copyright: lang === "en" ? "All rights reserved." : "Tous droits réservés.",
    book:      lang === "en" ? "Book →" : "Réserver →",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.errorInvalid);
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res  = await fetch(SUBSCRIBE_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ email, source: "footer" }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setEmail("");
      } else {
        setError(data.message || t.errorGeneric);
      }
    } catch {
      setError(t.errorServer);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Inter:wght@300;400&display=swap');
      `}</style>

      {/* Newsletter */}
      <section className="bg-white py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">

          <div className="max-w-md">
            <p className="font-['Inter'] text-[10px] tracking-[0.45em] uppercase text-[#aaa] font-light mb-4">
              {t.newsletterLabel}
            </p>
            <h2 className="font-['El_Messiri'] text-3xl md:text-4xl font-medium text-[#1a1a1a] leading-tight mb-4">
              {t.title}
            </h2>
            <p className="font-['Cormorant_Garamond'] text-lg font-light text-[#1a1a1a] leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="w-full md:w-auto md:min-w-[380px]">
            {sent ? (
              <p className="font-['Cormorant_Garamond'] italic text-xl text-[#aaa]">
                {t.thanks}
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 border border-[#e0ddd8]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder={t.placeholder}
                    disabled={loading}
                    required
                    className="flex-1 bg-transparent font-['Inter'] text-[13px] font-light text-[#1a1a1a] placeholder-[#bbb] px-5 py-4 outline-none disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="font-['El_Messiri'] text-[10px] tracking-[0.3em] uppercase text-white bg-[#1a1a1a] px-7 py-4 whitespace-nowrap hover:bg-[#333] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "…" : t.subscribe}
                  </button>
                </form>
                {error && (
                  <p className="font-['Inter'] text-[11px] text-red-500 font-light">{error}</p>
                )}
              </div>
            )}
          </div>

        </div>
      </section>

{/* Footer */}
<footer className="bg-[#111] py-12 px-8 md:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto">

    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-8 border-b border-white/10">

      <img
        src="/logo.png"
        alt="Oxygen Village"
        className="h-10 w-auto brightness-0 invert"
      />

      <div className="flex flex-col gap-1">
        <span className="font-['Inter'] text-[10px] font-light tracking-[0.12em] uppercase text-white/30 mb-3">
          {t.location}
        </span>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center border border-white/15 rounded-lg flex-shrink-0">
            <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18a2 2 0 012-2.18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 6.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92v3z"/>
            </svg>
          </div>
          <div>
            <p className="font-['Inter'] text-[10px] font-light tracking-[0.12em] uppercase text-white/35 mb-0.5">{t.phone}</p>
            <a href="tel:+212677365051" className="font-['Inter'] text-[14px] font-light text-white/85 hover:text-white no-underline transition-colors duration-300">
              +212 677 365 051
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3 mt-3">
          <div className="w-9 h-9 flex items-center justify-center border border-white/15 rounded-lg flex-shrink-0">
            <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div>
            <p className="font-['Inter'] text-[10px] font-light tracking-[0.12em] uppercase text-white/35 mb-0.5">E-mail</p>
            <a href="mailto:contact@oxygen-village.ma" className="font-['Inter'] text-[14px] font-light text-white/85 hover:text-white no-underline transition-colors duration-300">
              contact@oxygen-village.ma
            </a>
          </div>
        </div>
      </div>

    </div>

    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6">
      <p className="font-['Inter'] text-[10px] font-light text-white/20 tracking-wide">
        © {new Date().getFullYear()} Oxygen Village. {t.copyright}
      </p>
      <a
        href="https://oxygen-village.hotelrunner.com/bv3"
        target="_blank"
        rel="noopener noreferrer"
        className="font-['El_Messiri'] text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-white/60 no-underline transition-colors duration-300"
      >
        {t.book}
      </a>
    </div>

  </div>
</footer>
    </>
  );
}