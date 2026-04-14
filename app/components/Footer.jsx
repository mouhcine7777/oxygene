"use client";

import { useState } from "react";

export default function NewsletterFooter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
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
              Newsletter
            </p>
            <h2 className="font-['El_Messiri'] text-3xl md:text-4xl font-medium text-[#1a1a1a] leading-tight mb-4">
              Restez dans l'air<br />de l'Atlas
            </h2>
            <p className="font-['Cormorant_Garamond'] text-lg font-light text-[#999] leading-relaxed">
              Offres exclusives, nouveautés et instants de sérénité — directement dans votre boîte mail.
            </p>
          </div>

          <div className="w-full md:w-auto md:min-w-[380px]">
            {sent ? (
              <p className="font-['Cormorant_Garamond'] italic text-xl text-[#aaa]">
                Merci — à bientôt ✦
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 border border-[#e0ddd8]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse e-mail"
                  required
                  className="flex-1 bg-transparent font-['Inter'] text-[13px] font-light text-[#1a1a1a] placeholder-[#bbb] px-5 py-4 outline-none"
                />
                <button
                  type="submit"
                  className="font-['El_Messiri'] text-[10px] tracking-[0.3em] uppercase text-white bg-[#1a1a1a] px-7 py-4 whitespace-nowrap hover:bg-[#333] transition-colors duration-300"
                >
                  S'inscrire
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] py-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">

            <img
              src="/logo.png"
              alt="Oxygen Village"
              className="h-10 w-auto brightness-0 invert"
            />

            <div className="flex flex-col gap-1 md:text-right">
              <span className="font-['Inter'] text-[11px] font-light text-white/40">Midelt, Maroc</span>
              <a
                href="tel:+212677365051"
                className="font-['Inter'] text-[11px] font-light text-white/40 hover:text-white/70 no-underline transition-colors duration-300"
              >
                +212 677 365 051
              </a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6">
            <p className="font-['Inter'] text-[10px] font-light text-white/20 tracking-wide">
              © {new Date().getFullYear()} Oxygen Village. Tous droits réservés.
            </p>
            <a
              href="https://oxygen-village.hotelrunner.com/bv3"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['El_Messiri'] text-[10px] tracking-[0.25em] uppercase text-white/30 hover:text-white/60 no-underline transition-colors duration-300"
            >
              Réserver →
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}