"use client";

const PANELS = [
  {
    num: "01",
    title: "Hébergement",
    desc: "Chalets et suites nichés dans la nature, alliant confort moderne et authenticité marocaine.",
    img: "/hebergement.jpg",
    action: { type: "link", href: "https://oxygen-village.hotelrunner.com/bv3" },
    cta: "Réserver",
  },
  {
    num: "02",
    title: "Piscine",
    desc: "Une piscine extérieure au cœur des jardins, face aux sommets de l'Atlas.",
    img: "/piscine.jpg",
    action: { type: "link", href: "https://oxygen-village.hotelrunner.com/bv3" },
    cta: "Réserver",
  },
  {
    num: "03",
    title: "Activités de plein air",
    desc: "Découvrez un Maroc authentique à travers nos expériences exclusives : randonnées équestres, exploration de cités minières et panoramas spectaculaires.",
    img: "/activites.jpg",
    action: { type: "download", href: "/corporate/activites.pdf", filename: "activites-plein-air.pdf" },
    cta: "Télécharger",
  },
  {
    num: "04",
    title: "Salles de réunion",
    desc: "Transformez vos réunions en expériences inspirantes au cœur de l'Atlas. Nos espaces modulables et éco-responsables s'adaptent à tous vos besoins.",
    img: "/salles.jpg",
    action: { type: "download", href: "/corporate/corporate.pdf", filename: "salles-de-reunion.pdf" },
    cta: "Télécharger",
  },
];

export default function ServicesSection() {
  const handleAction = (action) => {
    if (action.type === "link") {
      window.open(action.href, "_blank", "noopener,noreferrer");
    } else if (action.type === "download") {
      const a = document.createElement("a");
      a.href = action.href;
      a.download = action.filename;
      a.click();
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600&family=Inter:wght@300;400&display=swap');
        .font-el-messiri { font-family: 'El Messiri', serif; }
        .font-inter       { font-family: 'Inter', sans-serif; }

        @media (min-width: 768px) {
          .services-wrapper {
            flex-direction: row;
            height: 85vh;
            min-height: 600px;
            max-height: 900px;
          }
          .panel { flex: 1; transition: flex 0.65s cubic-bezier(0.4,0,0.2,1); }
          .panel:hover { flex: 2.8; }

          .panel-title {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
            align-self: flex-start;
            white-space: nowrap;
            font-size: 20px;
            transition: font-size 0.35s ease;
          }
          .panel:hover .panel-title {
            writing-mode: horizontal-tb;
            transform: none;
            font-size: 32px !important;
            align-self: auto;
          }

          .panel-num {
            opacity: 0;
            transform: translateY(6px);
            transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
          }
          .panel:hover .panel-num { opacity: 1; transform: translateY(0); }

          .panel-desc {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: max-height 0.45s ease 0.15s, opacity 0.4s ease 0.2s;
          }
          .panel:hover .panel-desc { max-height: 120px; opacity: 1; }

          .panel-cta {
            opacity: 0;
            transform: translateY(8px);
            transition: opacity 0.4s ease 0.25s, transform 0.4s ease 0.25s;
          }
          .panel:hover .panel-cta { opacity: 1; transform: translateY(0); }

          .cta-line { width: 24px; transition: width 0.3s ease; }
          .panel:hover .cta-line { width: 40px; }

          .v-divider { display: block; }
          .h-divider { display: none; }
        }

        @media (max-width: 767px) {
          .services-wrapper { flex-direction: column; height: auto; }
          .panel { position: relative; height: 220px; flex: none !important; transition: height 0.55s cubic-bezier(0.4,0,0.2,1); }
          .panel:hover, .panel:focus-within { height: 340px; }
          .panel-title { writing-mode: horizontal-tb; transform: none; align-self: auto; font-size: 22px; }
          .panel:hover .panel-title, .panel:focus-within .panel-title { font-size: 26px !important; }
          .panel-num { opacity: 1; transform: none; }
          .panel-desc { max-height: 0; opacity: 0; overflow: hidden; transition: max-height 0.45s ease 0.1s, opacity 0.35s ease 0.15s; }
          .panel:hover .panel-desc, .panel:focus-within .panel-desc { max-height: 100px; opacity: 1; }
          .panel-cta { opacity: 0; transform: translateY(6px); transition: opacity 0.35s ease 0.2s, transform 0.35s ease 0.2s; }
          .panel:hover .panel-cta, .panel:focus-within .panel-cta { opacity: 1; transform: translateY(0); }
          .cta-line { width: 24px; }
          .v-divider { display: none; }
          .h-divider { display: block; }
        }

        .panel-bg { transition: transform 0.75s cubic-bezier(0.4,0,0.2,1); }
        .panel:hover .panel-bg, .panel:focus-within .panel-bg { transform: scale(1.05); }

        .cta-btn {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cta-btn:hover .cta-label { text-decoration: underline; text-underline-offset: 3px; }
      `}</style>

      <section className="services-wrapper flex w-full overflow-hidden">
        {PANELS.map((p, i) => (
          <div
            key={p.num}
            className="panel relative overflow-hidden cursor-pointer"
            onClick={() => handleAction(p.action)}
          >
            {/* Background */}
            <div
              className="panel-bg absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${p.img}')` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

            {/* Dividers */}
            {i < PANELS.length - 1 && (
              <div className="v-divider absolute top-0 bottom-0 right-0 w-px bg-white/15 z-10" />
            )}
            {i < PANELS.length - 1 && (
              <div className="h-divider absolute bottom-0 left-0 right-0 h-px bg-white/15 z-10" />
            )}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">

              <span className="panel-num font-inter text-white/45 text-[10px] tracking-[0.35em] uppercase font-light mb-2">
                {p.num}
              </span>

              <h3 className="panel-title font-el-messiri text-white font-medium mb-2 leading-tight">
                {p.title}
              </h3>

              <p className="panel-desc font-inter text-white/75 text-[13px] font-light leading-relaxed">
                {p.desc}
              </p>

              <div className="panel-cta mt-4">
                <button className="cta-btn" onClick={(e) => { e.stopPropagation(); handleAction(p.action); }}>
                  <div className="cta-line h-px bg-white/60" />
                  <span className="cta-label font-inter text-white text-[10px] tracking-[0.25em] uppercase">
                    {p.cta}
                  </span>
                  {p.action.type === "download" && (
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 1v6.5M5.5 7.5L3 5M5.5 7.5L8 5M1 10h9" stroke="rgba(255,255,255,0.8)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {p.action.type === "link" && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 9L9 1M9 1H4M9 1V6" stroke="rgba(255,255,255,0.8)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>

            </div>
          </div>
        ))}
      </section>
    </>
  );
}