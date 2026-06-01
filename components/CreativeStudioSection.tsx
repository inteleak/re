import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sliderImages = [
  "http://mortanascompany.com/create/resim/n1.png",
  "http://mortanascompany.com/create/resim/n2.png",
  "http://mortanascompany.com/create/resim/n3.png",
];

const cards = [
  {
    title: "Akıllı İçerik Üretimi",
    slug: "akilli-icerik-uretimi",
    description:
      "Tek bir komutla, blog yazılarından pazarlama metinlerine kadar SEO dostu ve benzersiz içerikler oluşturun.",
    theme: {
      border: "border-blue-500/40 hover:border-blue-400",
      bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
      circle: "bg-blue-500/20 group-hover:bg-blue-500/30",
      line: "via-blue-400",
      iconBg: "from-blue-500 to-indigo-650",
      shadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]",
      text: "group-hover:text-blue-300",
      iconColor: "text-white",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    title: "Yapay Zeka Destekli Görsel Üretimi",
    slug: "gorsel-uretimi",
    description:
      "Hayal ettiğiniz görselleri saniyeler içinde metin komutlarıyla gerçeğe dönüştürün.",
    theme: {
      border: "border-purple-500/40 hover:border-purple-400",
      bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
      circle: "bg-purple-500/20 group-hover:bg-purple-500/30",
      line: "via-purple-400",
      iconBg: "from-purple-500 to-pink-600",
      shadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
      text: "group-hover:text-purple-300",
      iconColor: "text-white",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
        <path d="M15 15l-3 7-3-7" />
      </svg>
    ),
  },
  {
    title: "Yazılım Asistanı",
    slug: "yazilim-asistani",
    description:
      "Hata ayıklamadan yeni kod blokları oluşturmaya kadar yazılım geliştirme sürecinizi hızlandırın.",
    theme: {
      border: "border-cyan-500/40 hover:border-cyan-400",
      bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
      circle: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
      line: "via-cyan-400",
      iconBg: "from-cyan-500 to-blue-600",
      shadow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]",
      text: "group-hover:text-cyan-300",
      iconColor: "text-white",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "7/24 Sanal Asistan",
    slug: "sanal-asistan",
    description:
      "Karmaşık sorulara anında yanıtlar alın, projeler planlayın ve iş akışlarınızı optimize edin.",
    theme: {
      border: "border-emerald-500/40 hover:border-emerald-400",
      bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
      circle: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
      line: "via-emerald-400",
      iconBg: "from-emerald-500 to-teal-600",
      shadow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]",
      text: "group-hover:text-emerald-300",
      iconColor: "text-white",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <path d="M16 2a4 4 0 0 1 4 4v1H4V6a4 4 0 0 1 4-4h8z" />
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    title: "Video ve Ses Üretimi",
    slug: "video-ses-uretimi",
    description:
      "Metinleri konuşmaya, sesleri müziğe dönüştürerek projelerinize profesyonel bir dokunuş katın.",
    theme: {
      border: "border-pink-500/40 hover:border-pink-400",
      bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
      circle: "bg-pink-500/20 group-hover:bg-pink-500/30",
      line: "via-pink-400",
      iconBg: "from-pink-500 to-rose-600",
      shadow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]",
      text: "group-hover:text-pink-300",
      iconColor: "text-white",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15.5 14.5L22 22" />
        <path d="M13 13L16 16" />
        <path d="M12 21.5V12a4 4 0 0 0-4-4H3.5" />
        <path d="M5.5 2C8 2 10.5 3.5 10.5 6" />
        <path d="M12 21.5V12a4 4 0 0 0-4-4H3.5" />
        <path d="M18.5 2C21 2 23.5 3.5 23.5 6" />
      </svg>
    ),
  },
  {
    title: "Gerçek Zamanlı Sohbet",
    slug: "gercek-zamanli-sohbet",
    description:
      "Fikirlerinizi anında test edin ve bir yapay zeka ile dinamik olarak beyin fırtınası yapın.",
    theme: {
      border: "border-amber-500/40 hover:border-amber-400",
      bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
      circle: "bg-amber-500/20 group-hover:bg-amber-500/30",
      line: "via-amber-400",
      iconBg: "from-amber-500 to-orange-600",
      shadow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]",
      text: "group-hover:text-amber-300",
      iconColor: "text-white",
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const CreativeStudioSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextImage, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="w-full relative z-20 mt-16 pb-8">
      {/* Prominent Divider / Şerit */}
      <div className="w-full max-w-7xl mx-auto h-1 mb-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent relative">
        <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80"></div>
        <div className="absolute inset-0 blur-sm bg-purple-400 opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-4 antialiased">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300"
        >
          Neden Mortanas Create Studio'yu Seçmelisiniz?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-white/90 font-bold text-base max-w-3xl mx-auto mb-10"
        >
          Yaratıcılığınızı serbest bırakın ve fikirlerinizi hayata geçirin.
          Platformumuzun sunduğu avantajlardan bazıları:
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-7xl mx-auto">
          {/* Left Column: Single slideshow area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center w-full min-h-[320px] lg:h-[26rem]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-2 border-purple-500/30 group">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {sliderImages.map((src, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img
                      src={src}
                      className="w-full h-full object-cover"
                      alt={`Slayt Görseli ${index + 1}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://placehold.co/800x800/1a084c/FFF?text=Görsel+Yok";
                      }}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-700/60 hover:bg-purple-700/90 border-none text-white p-2.5 rounded-full z-10 transition-colors duration-300 opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-700/60 hover:bg-purple-700/90 border-none text-white p-2.5 rounded-full z-10 transition-colors duration-300 opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:h-[26rem] gap-4"
          >
            {cards.map((card, index) => {
              const t = card.theme;
              return (
                <Link
                  key={index}
                  to={`/otomasyon/${card.slug}`}
                  className={`group p-4 rounded-xl cursor-pointer ${t.bg} border ${t.border} transition-all duration-300 ${t.shadow} hover:scale-[1.02] flex items-center justify-start text-left gap-4 relative overflow-hidden`}
                >
                  {/* Ambient background glows */}
                  <div
                    className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-[20px] transition-all duration-700 pointer-events-none ${t.circle}`}
                  ></div>
                  <div
                    className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent ${t.line} to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Icon Container with Gradient */}
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-md relative z-10 flex-shrink-0 text-white [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-white`}
                  >
                    {card.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow min-w-0 relative z-10">
                    <h3
                      className={`text-sm font-bold text-white ${t.text} transition-colors duration-300 mb-1 truncate`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed font-semibold">
                      {card.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreativeStudioSection;
