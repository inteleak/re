import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import WhyMortanasSection from "../components/WhyMortanasSection";
import BeautyPhoneDialogueSection from "../components/BeautyPhoneDialogueSection";

const AnimatedCounter: React.FC<{
  target: number;
  suffix?: string;
  prefix?: string;
}> = ({ target, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = target;
          if (start === end) return;

          const duration = 2000;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let increment = end / totalFrames;
          let currentFrame = 0;

          const timer = setInterval(() => {
            currentFrame++;
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, frameRate);
        }
      },
      { threshold: 0.5 },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {new Intl.NumberFormat("tr-TR").format(count)}
      {suffix}
    </span>
  );
};

const FeatureCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  path?: string;
  index?: number;
  features?: string[];
}> = ({ icon, title, description, path, index = 0, features }) => {
  const themes = [
    {
      wrapper:
        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(59,130,246,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-blue-500/5 hover:ring-blue-500/15",
      blur: "bg-blue-500/20 group-hover:bg-blue-500/30",
      line: "via-blue-400",
      iconBg:
        "from-blue-500 to-indigo-600 border-blue-400/20 shadow-blue-500/20",
      textHover: "group-hover:text-blue-300",
    },
    {
      wrapper:
        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(168,85,247,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] ring-purple-500/5 hover:ring-purple-500/15",
      blur: "bg-purple-500/20 group-hover:bg-purple-500/30",
      line: "via-purple-400",
      iconBg:
        "from-purple-500 to-pink-600 border-purple-400/20 shadow-purple-500/20",
      textHover: "group-hover:text-purple-300",
    },
    {
      wrapper:
        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(6,182,212,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] ring-cyan-500/5 hover:ring-cyan-500/15",
      blur: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
      line: "via-cyan-400",
      iconBg: "from-cyan-400 to-blue-600 border-cyan-400/20 shadow-cyan-500/20",
      textHover: "group-hover:text-cyan-300",
    },
    {
      wrapper:
        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(16,185,129,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] ring-emerald-500/5 hover:ring-emerald-500/15",
      blur: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
      line: "via-emerald-400",
      iconBg:
        "from-emerald-500 to-teal-600 border-emerald-400/20 shadow-emerald-500/20",
      textHover: "group-hover:text-emerald-300",
    },
  ];

  const theme = themes[index % themes.length];

  return (
    <div
      className={`group bg-gradient-to-br backdrop-blur-2xl px-4 py-3 md:py-3.5 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 ${theme.wrapper}`}
    >
      <div
        className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 ${theme.blur}`}
      ></div>
      <div
        className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 ${theme.line}`}
      ></div>

      <div
        className={`w-8 h-8 rounded-xl bg-gradient-to-br flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 border shadow-md relative z-10 ${theme.iconBg}`}
      >
        <i className={`${icon} text-sm text-white`}></i>
      </div>

      <h3
        className={`font-bold text-sm md:text-base leading-snug mb-1 text-white relative z-20 transition-colors duration-300 ${theme.textHover}`}
      >
        {title}
      </h3>
      <div className="flex-grow flex flex-col relative z-20">
        <p className="text-[12px] text-slate-300 leading-snug font-medium mb-1.5">
          {description}
        </p>
        {features && features.length > 0 && (
          <div className="space-y-1 mt-2.5 w-full flex-grow">
            {features.map((feature, fIdx) => {
              const cleanThemeColorClass = theme.textHover.replace(
                "group-hover:",
                "",
              );
              return (
                <div
                  key={fIdx}
                  className="flex items-center space-x-2 bg-slate-950/45 hover:bg-slate-900/70 border border-slate-800/80 hover:border-slate-700/80 px-2.5 py-1 rounded-xl transition-all duration-300 group/item shadow-inner"
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-md bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex items-center justify-center relative shadow-sm group-hover/item:border-slate-700/90 transition-all duration-300">
                    <div
                      className={`absolute inset-[1.5px] rounded-[3px] bg-gradient-to-br ${theme.iconBg} opacity-15 group-hover/item:opacity-35 transition-opacity duration-300`}
                    ></div>
                    <i
                      className={`fas fa-check text-[7px] ${cleanThemeColorClass} relative z-10 font-bold transition-transform duration-300 group-hover/item:scale-110`}
                    ></i>
                  </div>
                  <span className="text-[11.5px] font-semibold tracking-wide text-slate-300 group-hover/item:text-white transition-colors duration-200 truncate">
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {path && (
        <div className="mt-3 pt-1.5 relative z-10">
          <Link
            to={path}
            className={`font-bold transition-colors duration-300 text-[13px] flex items-center gap-1 text-white ${theme.textHover}`}
          >
            Detayları İncele <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

const FAQItem: React.FC<{
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
  return (
    <div
      className={`bg-slate-950/45 backdrop-blur-md rounded-xl border transition-all duration-300 ${isOpen ? "border-blue-500/50 shadow-[0_4px_20px_rgba(59,130,246,0.05)] bg-slate-950/70" : "border-slate-800/80 hover:border-blue-500/30"}`}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-4"
        aria-expanded={isOpen}
        id={`faq-btn-${faq.question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span
          className={`font-bold text-xs md:text-sm pl-1 pr-4 transition-colors duration-300 ${isOpen ? "text-blue-300" : "text-slate-100"}`}
        >
          {faq.question}
        </span>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "bg-blue-600/20 border-blue-500 text-blue-400" : "bg-slate-900 border-slate-800 text-slate-400"}`}
        >
          <i
            className={`fas fa-chevron-down text-[9px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          ></i>
        </div>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 shadow-inner" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-[11px] md:text-xs text-slate-400 leading-relaxed font-medium">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const ValueCard: React.FC<{
  icon: string;
  target: number;
  suffix: string;
  title: string;
  description: string;
}> = ({ icon, target, suffix, title, description }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl text-center shadow-2xl border-t-4 border-blue-500">
    <i className={`${icon} text-5xl text-blue-400 mb-4`}></i>
    <p className="text-5xl font-extrabold text-white">
      <AnimatedCounter
        target={target}
        suffix={suffix}
        prefix={target > 0 ? "+" : ""}
      />
    </p>
    <h3 className="text-xl font-bold text-slate-200 mt-3">{title}</h3>
    <p className="text-slate-400 mt-2">{description}</p>
  </div>
);

const PlatformModuleCard: React.FC<{
  imageUrl: string;
  title: string;
  description: string;
}> = ({ imageUrl, title, description }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden group border border-slate-700 hover:border-blue-500 transition-all duration-300">
    <div className="overflow-hidden h-36 md:h-40">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-4 md:p-5">
      <h3 className="font-bold text-base md:text-lg text-white">{title}</h3>
      <p className="text-xs md:text-sm text-slate-300 mt-2">{description}</p>
    </div>
  </div>
);

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}> = ({ quote, name, title, avatarUrl }) => {
  return (
    <div className="group bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/90 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.06),_0_10px_35px_rgba(0,0,0,0.5)] border border-blue-500/30 hover:border-blue-400 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] hover:-translate-y-1 h-full relative overflow-hidden ring-4 ring-blue-500/5 hover:ring-blue-500/10">
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-[25px] group-hover:bg-blue-500/20 transition-all duration-700"></div>
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>

      <img
        className="w-14 h-14 rounded-full object-cover mb-3 ring-4 ring-blue-500/20 relative z-10 group-hover:scale-105 transition-transform duration-300"
        src={avatarUrl}
        alt={name}
      />
      <div className="flex justify-center text-amber-500 space-x-1 mb-3 relative z-10 text-[10px]">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <p className="text-slate-300 text-xs md:text-sm italic mb-4 relative flex-grow leading-relaxed font-medium z-10">
        "{quote}"
      </p>
      <div className="w-full mt-auto pt-3 border-t border-slate-800/80 relative z-10">
        <h4 className="font-extrabold text-sm md:text-base text-white group-hover:text-blue-300 transition-colors duration-300">
          {name}
        </h4>
        <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold mt-1">
          {title}
        </p>
      </div>
    </div>
  );
};

const GuzellikSalonuCozumlerimizPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "annually",
  );
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // ROI Calculator State
  const [rooms, setRooms] = useState(25);
  const [occupancy, setOccupancy] = useState(70);
  const [adr, setAdr] = useState(100);
  const [commission, setCommission] = useState(18);
  const [directConversion, setDirectConversion] = useState(30);
  const [savingsBreakdown, setSavingsBreakdown] = useState<{
    commission: number;
    operational: number;
    upsell: number;
    total: number;
  } | null>(null);

  const [offerEndDate] = useState(
    () =>
      new Date(
        Date.now() +
          29 * 24 * 60 * 60 * 1000 +
          23 * 60 * 60 * 1000 +
          57 * 60 * 1000,
      ),
  ); // ~30 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderItems = [
    {
      type: "video",
      src: "https://cdn.pixabay.com/video/2021/04/23/71999-540700547_large.mp4",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
    {
      type: "video",
      src: "https://cdn.pixabay.com/video/2019/01/29/20993-314482813_large.mp4",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2000&q=80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auto=format&fit=crop&w=2000&q=80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=2000&q=80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
  ];

  const testimonials = [
    {
      quote:
        "Mortanas'ın hepsi bir arada çözümü sayesinde Pazaryeri komisyonlarımız %80 azaldı ve doğrudan tekliflerimız tavan yaptı. Operasyonel verimliliğimizdeki artış ise inanılmaz.",
      name: "Ayşe Güneş",
      title: "Genel Müdür, Ege Butik Güzellik Salonları Güzellik Salonu Çözümleri",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "Sesli asistan ve sosyal medya otomasyonu, canlı destek ekibimizin yükünü yarı yarıya azalttı. Artık müşterilerimizle daha kaliteli zaman geçirebiliyoruz. Keşke daha önce geçseydik!",
      name: "Mehmet Yılmaz",
      title: "İşletme Sahibi, Kapadokya Palace",
      avatarUrl: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      quote:
        "Yapay zeka web sitesi ve CRM entegrasyonu sayesinde müşterilerimize gerçekten kişiselleştirilmiş bir deneyim sunuyoruz. Geri dönüş oranlarımızda %40 artış gördük.",
      name: "Canan Demir",
      title: "Randevu & Pazarlama Direktörü, Elegance Güzellik Salonu",
      avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      quote:
        "Paket Optimizasyonu modülü harika. Dinamik fiyatlandırma özelliği ile Paket oranımızı ve Güzellik Merkezi başına gelirimizi optimize etmeyi başardık. Raporlama araçları çok detaylı.",
      name: "Ahmet Çelik",
      title: "Gelirler Müdürü, Antalya Resort & Destek",
      avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      quote:
        "6 farklı sistemi tek bir panelde birleştirmek, hayatımızı kurtardı. Personel salonu çok daha kolay ve tüm verilerimiz artık tek bir yerde, güvende. Bu yatırımın karşılığını fazlasıyla aldık.",
      name: "Selin Aksoy",
      title: "Operasyon Yöneticisi, Uludağ Kayak Güzellik Salonu Çözümlerii",
      avatarUrl: "https://randomuser.me/api/portraits/women/46.jpg",
    },
    {
      quote:
        "Butik Güzellik Salonları Güzellik Merkezi sektöründe üye deneyimi her şeydir. Mortanas platformu, teknolojiyi kullanarak bu deneyimi bir üst seviyeye taşımamızı sağladı. Müşterilerimiz AI Randevu danışmanı özelliğine bayılıyor!",
      name: "Mustafa Arslan",
      title: "Kurucu, Karadeniz Yayla Konakları",
      avatarUrl: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  const testimonialChunks = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialChunks.push(testimonials.slice(i, i + 3));
  }

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialChunks.length - 1 : prev - 1,
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialChunks.length - 1 ? 0 : prev + 1,
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonialChunks.length - 1 ? 0 : prev + 1,
      );
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(slideInterval);
  }, [testimonialChunks.length]);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(sliderInterval);
  }, [sliderItems.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +offerEndDate - +new Date();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [offerEndDate]);

  const calculateSavings = useCallback(() => {
    const otaBookingPercentage = 0.7; // Assume 70% of bookings come from OTAs initially
    const operationalSavingsPerYear = 15000; // Estimated annual savings from reduced staff workload (USD)
    const upsellRevenueIncrease = 0.05; // Estimated 5% revenue increase from AI upselling

    const totalAnnualRevenue = rooms * (occupancy / 100) * adr * 365;
    const otaRevenue = totalAnnualRevenue * otaBookingPercentage;

    // The revenue we aim to convert from Pazaryeri to Direct
    const convertedRevenue = otaRevenue * (directConversion / 100);

    // The savings is the commission we no longer pay on this converted revenue
    const commissionSavings = convertedRevenue * (commission / 100);

    const upsellRevenue = totalAnnualRevenue * upsellRevenueIncrease;

    const totalSavings =
      commissionSavings + operationalSavingsPerYear + upsellRevenue;

    setSavingsBreakdown({
      commission: commissionSavings,
      operational: operationalSavingsPerYear,
      upsell: upsellRevenue,
      total: totalSavings,
    });
  }, [rooms, occupancy, adr, commission, directConversion]);

  const handleFaqClick = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const includedServices = [
    {
      icon: "fas fa-Güzellik Merkezi",
      title: "AI Güzellik Salonu Çözümleri Yönetimi (CRM)",
      description:
        "Tüm Güzellik Merkezi operasyonlarınızı (Randevu, Güzellik Merkezi durumu, üye ilişkileri) tek yerden yönetin.",
      path: "/uygulamalar/Güzellik Merkezi-yonetimi-crm",
      features: [
        "Merkezi Üye Veritabanı",
        "Kişiselleştirilmiş Üye Deneyimi",
        "Otomatik Görev Atama",
      ],
    },
    {
      icon: "fas fa-globe",
      title: "Yapay Zeka Web Sitesi",
      description:
        "Müşterilerinize kişiselleştirilmiş deneyimler sunan, 7/24 Randevu alan akıllı bir web sitesi.",
      path: "/yapay-zeka-web/Güzellik Merkezi",
      features: [
        "Komisyonsuz Randevu Motoru",
        "Dinamik İçerik Optimizasyonu",
        "SEO ve Hız Odaklı Mimari",
      ],
    },
    {
      icon: "fas fa-share-alt",
      title: "Sosyal Medya Otomasyonu",
      description:
        "WhatsApp, Instagram gibi kanallardan gelen mesajları otomatik yanıtlayın ve 7/24 Randevu yapın.",
      path: "/otomasyon/sosyal-medya-otomasyonu",
      features: [
        "Çoklu Kanal (Omnichannel)",
        "DM Kampanyaları & Çapraz Randevu",
        "Randevu Dönüşüm Takibi",
      ],
    },
    {
      icon: "fas fa-headset",
      title: "Sesli Üye Hizmetleri",
      description:
        "Telefon çağrılarınızı yapay zeka ile karşılayın, rezervasyonları sesli olarak alın ve personel yükünü azaltın.",
      path: "/otomasyon/sesli-musteri-hizmetleri",
      features: [
        "7/24 Çağrı Yanıtlama",
        "Çoklu Dil Desteği",
        "ÖBS ve CRM Entegrasyonu",
      ],
    },
    {
      icon: "fas fa-microphone-alt",
      title: "Sesli Chatbot Otomasyonu",
      description:
        "Web sitenizde ve uygulamalarınızda sesli komutlarla çalışan akıllı asistan ile üye deneyimini zenginleştirin.",
      path: "/otomasyon/sesli-chatbot",
      features: [
        "Doğal Ses Simülasyonu",
        "Güzellik Merkezi İçi Sesli Talepler",
        "Hızlı Aksiyon ve Yönlendirme",
      ],
    },
    {
      icon: "fas fa-comments-dollar",
      title: "Yapay Zeka Chatbot",
      description:
        "Web sitenizdeki ziyaretçileri 7/24 karşılayın, sorularını yanıtlayın ve rezervasyona yönlendirerek rezervasyonları artırın.",
      path: "/uygulamalar/yapay-zeka-chatbot",
      features: [
        "İnsan Benzeri Diyaloglar",
        "Randevu Danışmanı ve Güzellik Merkezi Bilgisi",
        "Fiyat ve Müsaitlik Sorgulama",
      ],
    },
    {
      icon: "fas fa-pizza-slicees-stacked",
      title: "Paket Yönetimi",
      description:
        "Güzellik Merkeziınızın sepet, Salon malzemeleri gibi ekipmanlarını anlık takip edin ve rezervasyonleri otomatikleştirin.",
      path: "/otomasyon/Paket-yonetimi-otomasyonu",
      features: [
        "Kritik Paket Uyarıları",
        "Tedarikçi Entegrasyonu",
        "Zayi & Maliyet Analizi",
      ],
    },
    {
      icon: "fas fa-dollar-sign",
      title: "AI Destekli Paket Optimizasyonu",
      description:
        "Piyasa talebini, rakip fiyatlarını ve etkinlikleri analiz ederek Güzellik Merkezi fiyatlarınızı dinamik olarak optimize edin.",
      path: "/uygulamalar/Güzellik Merkezi-yonetimi-crm",
      features: [
        "Dinamik Fiyatlandırma",
        "Rakip Analitiği (Rate Shopper)",
        "Talep Tahmini (Forecasting)",
      ],
    },
    {
      icon: "fas fa-star-half-alt",
      title: "İtibar ve Yorum Yönetimi",
      description:
        "Booking, Google, TripAdvisor gibi platformlardaki yorumları tek bir panelden takip edin ve anında yanıtlayın.",
      path: "/uygulamalar/Güzellik Merkezi-yonetimi-crm",
      features: [
        "Merkezi Yorum Paneli",
        "Yapay Zeka ile Otomatik Yanıt",
        "Memnuniyet Duygu Analizi",
      ],
    },
  ];

  const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  const pricingTiers = [
    {
      name: "Butik Güzellik Salonları",
      rooms: "5-25 Güzellik Merkezi",
      monthly: 250,
      setup: 1500,
      popular: false,
      isEnterprise: false,
      description: "Küçük ve butik salonlar için ideal, komisyonsuz başlangıç.",
      features: [
        "Tüm 9 Çözüm Modülü",
        "Yapay Zeka Web Sitesi",
        "Sınırsız Kullanıcı",
        "Standart Destek",
      ],
    },
    {
      name: "Profesyonel",
      rooms: "25-100 Güzellik Merkezi",
      monthly: 500,
      setup: 2500,
      popular: true,
      isEnterprise: false,
      description:
        "Büyüyen operasyonlar ve şehir salonları için en popüler çözüm.",
      features: [
        "Tüm 9 Çözüm Modülü",
        "Gelişmiş AI Paket Optimizasyonu",
        "Özel Üye Temsilcisi",
        "Öncelikli Destek",
      ],
    },
    {
      name: "Kurumsal",
      rooms: "Popüler Zincir Güzellik Merkezleri",
      monthly: 0, // Custom price
      setup: 0, // Custom price
      popular: false,
      isEnterprise: true,
      description:
        "Büyük salonlar, estetik klinikleri ve zincirler için ölçeklenebilir, özel çözümler.",
      features: [
        "Özelleştirilebilir Modüller",
        "Özel API Erişimi",
        "Yerinde Kurulum & Güzellik Salonu Çözümleri",
        "Özel Destek Hattı",
      ],
    },
  ];

  const comparisonFeatures = [
    { type: "heading", name: "Temel Platform Özellikleri" },
    {
      name: "Güzellik Merkezi Sayısı",
      butik: "5-25",
      profesyonel: "25-100",
      kurumsal: "100+",
    },
    {
      name: "Tüm 9 Çözüm Modülü",
      butik: true,
      profesyonel: true,
      kurumsal: true,
    },
    {
      name: "Yapay Zeka Web Sitesi",
      butik: true,
      profesyonel: true,
      kurumsal: true,
    },
    {
      name: "Sınırsız Kullanıcı",
      butik: true,
      profesyonel: true,
      kurumsal: true,
    },
    {
      name: "Hizmet Platformu Entegrasyonu",
      butik: true,
      profesyonel: true,
      kurumsal: true,
    },
    {
      name: "ÖBS Entegrasyonu",
      butik: true,
      profesyonel: true,
      kurumsal: true,
    },
    {
      name: "Mobil Yönetim Paneli",
      butik: true,
      profesyonel: true,
      kurumsal: true,
    },

    { type: "heading", name: "Yapay Zeka & Otomasyon" },
    {
      name: "Sesli Üye Hizmetleri",
      butik: "200 dk/ay",
      profesyonel: "500 dk/ay",
      kurumsal: "Özelleştirilmiş",
    },
    {
      name: "AI Paket Optimizasyonu",
      butik: "Standart",
      profesyonel: "Gelişmiş",
      kurumsal: "Proaktif",
    },
    {
      name: "AI İtibar Yönetimi",
      butik: true,
      profesyonel: true,
      kurumsal: true,
    },

    { type: "heading", name: "Destek & Hizmetler" },
    {
      name: "Özel Üye Temsilcisi",
      butik: false,
      profesyonel: true,
      kurumsal: true,
    },
    {
      name: "Stratejik Performans Raporları",
      butik: false,
      profesyonel: true,
      kurumsal: true,
    },
    {
      name: "Özel API Erişimi",
      butik: false,
      profesyonel: false,
      kurumsal: true,
    },
    {
      name: "Yerinde Kurulum & Güzellik Salonu Çözümleri",
      butik: false,
      profesyonel: false,
      kurumsal: true,
    },
    {
      name: "7/24 Destek",
      butik: "Standart",
      profesyonel: "Öncelikli",
      kurumsal: "Özel Hat",
    },
  ];

  const faqs = [
    {
      question: "Kurulum süreci ne kadar sürer ve nasıl işler?",
      answer:
        "Tüm sistemin entegrasyonu ve yapay zekanın Güzellik Merkezi verilerinizle eğitilmesi dahil olmak üzere anahtar teslim kurulum sürecimiz ortalama 7-10 iş günü sürmektedir. Süreç boyunca proje yöneticimiz sizinle sürekli iletişim halinde olacaktır.",
    },
    {
      question: "Mevcut Güzellik Merkezi yönetim yazılımım (ÖBS) ile entegre olabilir mi?",
      answer:
        "Evet, çözüm paketimiz Elektra, Opera, Fidelio gibi birçok popüler CRM ve Salon yönetim yazılımlarıyla tam entegre çalışabilmektedir. Mevcut altyapınızı analiz ederek sorunsuz bir geçiş sağlıyoruz.",
    },
    {
      question: "Pakete donanım (kiosk, telefon vb.) dahil mi?",
      answer:
        "Standart paketlerimiz yazılım lisanslarını ve kurulum hizmetini kapsamaktadır. Kiosk, santral veya diğer donanım ihtiyaçlarınız için iş ortaklarımız üzerinden size özel teklifler sunabiliriz.",
    },
    {
      question: "Ekibimize Güzellik Merkezi veriyor musunuz?",
      answer:
        "Kesinlikle. Kurulum tamamlandıktan sonra canlı destek, Randevu, Salon ve yönetim dahil olmak üzere tüm ekibinize özel online ve/veya yerinde salonlar düzenliyoruz. Ayrıca sürekli olarak ürün eğitim materyalleri ve destek sağlıyoruz.",
    },
    {
      question: "Destek hizmetleriniz neleri kapsıyor?",
      answer:
        "Tüm paketlerimiz 7/24 teknik desteği içermektedir. Telefon, e-posta veya WhatsApp üzerinden uzman ekibimize her an ulaşabilir, sistemle ilgili tüm sorularınıza anında yanıt alabilirsiniz.",
    },
    {
      question: "Birden fazla salonu tek bir hesaptan yönetebilir miyim?",
      answer:
        "Evet, platformumuz çoklu Güzellik Merkezi (multi-property) yönetimini desteklemektedir. Zincir veya grup salonları, tüm mülklerinin tekliflerinı, Paket oranlarını ve finansal raporlarını tek bir merkezi panelden kolayca yönetebilir.",
    },
    {
      question: "Üye verilerinin güvenliği nasıl sağlanıyor?",
      answer:
        "Veri güvenliği en büyük önceliğimizdir. Tüm verileriniz, KVKK ve GDPR uyumlu, yüksek güvenlikli bulut sunucularda uçtan uca şifrelenerek saklanır ve düzenli olarak yedeklenir.",
    },
    {
      question:
        "Kanal yöneticisi (channel manager) entegrasyonu sağlıyor musunuz?",
      answer:
        "Evet, çözümümüz KolayRandevu, Saloni gibi sektörün önde gelen Salon yönetim yazılımlarıyla tam entegre çalışır. Bu sayede tüm online Randevu kanallarınızdaki (KolayRandevu vb.) Güzellik Merkezi müsaitliğiniz ve fiyatlarınız anlık olarak senkronize olur.",
    },
    {
      question: "Güzellik Salonu Çözümleri personeli için bir mobil uygulama var mı?",
      answer:
        "Evet, hem iOS hem de Android için geliştirdiğimiz mobil uygulama sayesinde Salon personeliniz Salon görevlerini anlık olarak takip edebilir, canlı destek ekibiniz üye üyelik/kayıt süreci işlemlerini tabletten yapabilir ve yöneticiler Güzellik Merkezi performansını cepten izleyebilir.",
    },
    {
      question:
        "Platformu kendi salonumuzun ihtiyaçlarına göre özelleştirebilir miyiz?",
      answer:
        "Evet, platformumuz modüler bir yapıya sahiptir. İhtiyaç duymadığınız modülleri kaldırabilir, işletmenize özel raporlar veya otomasyon kuralları oluşturabilirsiniz. Ekibimiz bu süreçte size tam destek sağlar.",
    },
  ];

  const platformModules = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      title: "Merkezi CRM Paneli",
      description:
        "Tüm üye verileri, rezervasyonlar ve iletişim geçmişi tek bir yerde.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      title: "Akıllı Sosyal Medya Inbox",
      description:
        "WhatsApp, Instagram ve diğer kanallardan gelen mesajları yönetin.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      title: "AI Web Sitesi Yönetimi",
      description:
        "Web sitenizdeki içeriği ve randevuları dinamik olarak kişiselleştirin.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      title: "Gelir ve Analitik Raporları",
      description:
        "Paket, gelir ve üye trendleri hakkında anlık, veriye dayalı raporlar alın.",
    },
  ];

  const idealFor = [
    {
      icon: "fas fa-Güzellik Merkezi",
      name: "Butik Güzellik Salonları Güzellik Salonu Çözümleriler",
      badge: "Özelleştirilmiş Lüks",
      desc: "Müşterilere 7/24 kesintisiz, birinci Güzellik Merkezi birebir asistanlık deneyimi sunar.",
      benefit: "%35 Randevu Artışı",
      imageUrl:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "fas fa-building",
      name: "Şehir Güzellik Salonu Çözümlerileri",
      badge: "Maksimum Paket",
      desc: "Yoğun iş seyahatlerinde hızlı üye Randevu, anlık ödeme ve sıfır kaçan çağrı.",
      benefit: "%85 Personel Verimliliği",
      imageUrl:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2000&q=80?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "fas fa-leaf",
      name: "Üniversiteler",
      badge: "Zengin Deneyim",
      desc: "Çok dilli Güzellik Merkezi servisi, dinamik checkout rezervasyonu ve aktivite planlama.",
      benefit: "%45 Daha Fazla Ek Hizmet Randevuı",
      imageUrl:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auto=format&fit=crop&w=2000&q=80?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "fas fa-gift",
      name: "Apart Güzellik Salonu Çözümleriler",
      badge: "Tam Otomasyon",
      desc: "Ön bürosuz otonom operasyon, dijital anahtarlar ve sıfır bekleme süresi.",
      benefit: "Sıfır Operasyonel Kayıp",
      imageUrl:
        "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=2000&q=80?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: "fas fa-spa",
      name: "seans yönetimi Güzellik Salonu Çözümleriler",
      badge: "Up-Sell Odaklı",
      desc: "Destek randevuları, kişiye özel kür takipleri ve üyelik Paketlerı.",
      benefit: "2.5 Kat Ek Randevu Randevuı",
      imageUrl:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?auto=format&fit=crop&w=2000&q=80?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const setupSteps = [
    {
      num: 1,
      icon: "fas fa-magnifying-glass-chart",
      title: "Keşif & Strateji",
      details: [
        "Teknik altyapı & ÖBS analizi.",
        "Randevu hedeflerinin belirlenmesi.",
        "Özel entegrasyon yol haritası.",
        "Kaçak gelir noktası tespiti.",
        "AI kullanım stratejisi planı.",
      ],
    },
    {
      num: 2,
      icon: "fas fa-cogs",
      title: "Kurulum & Entegrasyon",
      details: [
        "Tüm modüllerin anahtar kurulumu.",
        "ÖBS ve ödeme tam entegrasyonu.",
        "Güzellik Salonu Çözümleri verileriyle AI salonu.",
        "Kapsamlı stres & onay testi.",
        "Canlıya sorunsuz ve hızlı geçiş.",
      ],
    },
    {
      num: 3,
      icon: "fas fa-gift",
      title: "Güzellik Salonu Çözümleri & Destek",
      details: [
        "Tüm departmanlara özel Güzellik Merkezi.",
        "Sistem kullanım en iyi pratikleri.",
        "7/24 ulaşılabilecek teknik destek.",
        "Anlık sistem performans takibi.",
        "Düzenli güncelleme optimizasyonu.",
      ],
    },
    {
      num: 4,
      icon: "fas fa-chart-line",
      title: "Optimizasyon & Büyüme",
      details: [
        "Aylık performans ve gelir analizi.",
        "AI modelinin veriyle gelişmesi.",
        "Yeni otomasyon fırsatları tespiti.",
        "Sektörel trend entegrasyonları.",
        "Dinamik Üye Başı Gelir iyileştirmeleri.",
      ],
    },
  ];

  const partners = [
    {
      name: "ElektraWeb",
      logoUrl: "https://www.elektraweb.com/wp-content/uploads/2023/07/logo.png",
    },
    {
      name: "Oracle Opera ÖBS",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oracle_opera_pms.svg/1000px-Oracle_opera_pms.svg.png",
    },
    {
      name: "KolayRandevu",
      logoUrl:
        "https://d2ls16jjuwn436.cloudfront.net/images/hr-logo-new-dark-v2.svg",
    },
    {
      name: "Stripe",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png",
    },
    {
      name: "Booking.com",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/1280px-Booking.com_logo.svg.png",
    },
    {
      name: "Expedia Group",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Expedia_Group_logo.svg/1280px-Expedia_Group_logo.svg.png",
    },
    {
      name: "TripAdvisor",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/TripAdvisor_Logo.svg/1280px-TripAdvisor_Logo.svg.png",
    },
    {
      name: "Google",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
    },
    {
      name: "Airbnb",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png",
    },
  ];

  const guestJourneySteps = [
    {
      icon: "fas fa-search-dollar",
      title: "Keşif & Randevu",
      description:
        "AI destekli web siteniz ve chatbot, müşterileri çeker ve komisyonsuz Randevu aldırır.",
    },
    {
      icon: "fas fa-envelope-open-text",
      title: "Güzellik Salonu Çözümleri Öncesi İletişim",
      description:
        "Otomatik e-postalarla üye beklentisini yönetin ve ek hizmet (upsell) rezervasyonları yapın.",
    },
    {
      icon: "fas fa-spa",
      title: "Güzellik Salonu Çözümleri Deneyimi",
      description:
        "AI Asistan (WhatsApp/Sesli), Güzellik Merkezi servisi ve diğer talepleri 7/24 karşılayarak kusursuz bir deneyim sunar.",
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "Sadakat & Geri Dönüş",
      description:
        "Otomatik geri bildirim toplama ve kişiselleştirilmiş kampanyalarla müşterilerinizi tekrar kazanır.",
    },
  ];

  return (
    <div className="bg-slate-900 text-slate-300">
      <style>
        {`
              @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                  animation: scroll 40s linear infinite;
              }
              .scroller:hover .animate-scroll {
                  animation-play-state: paused;
              }
              input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 24px;
                height: 24px;
                background: #2563eb;
                cursor: pointer;
                border-radius: 50%;
                border: 3px solid #1e293b; /* slate-800 */
                box-shadow: 0 0 5px rgba(0,0,0,0.3);
              }
              input[type=range]::-moz-range-thumb {
                width: 24px;
                height: 24px;
                background: #2563eb;
                cursor: pointer;
                border-radius: 50%;
                border: 3px solid #1e293b; /* slate-800 */
                box-shadow: 0 0 5px rgba(0,0,0,0.3);
              }
          `}
      </style>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <span className="text-sm font-bold tracking-wider text-blue-300 bg-blue-500/20 px-3 py-1.5 rounded-full uppercase">
                GÜZELLİK SALONU ÇÖZÜMLERİ
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
                Komisyonları Unutun, <br />{" "}
                <span className="text-blue-400">Üye Sadakati Yaratın</span>
              </h1>
              <p className="mt-6 text-lg text-blue-200">
                9'u 1 arada güç paketimizle tüm operasyonlarınızı tek bir akıllı
                platformda birleştirin. Doğrudan rezervasyonları artırın,
                personel verimliliğini yükseltin ve Müşterilerinize unutulmaz
                bir dijital deneyim sunun.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/kurumsal"
                  className="relative group overflow-hidden bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-slate-900 font-extrabold py-4 px-8 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center space-x-3 text-base w-full sm:w-auto border border-blue-400/30"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 text-white flex items-center gap-2">
                    <span>Randevu Alın</span>
                    <i className="fas fa-paper-plane text-xs animate-bounce"></i>
                  </span>
                </Link>
                <a
                  href="https://www.mortanas.com/mortanasguzellik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-950/60 backdrop-blur-md border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/40 text-slate-200 font-extrabold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center space-x-3 text-base w-full sm:w-auto"
                >
                  <span>Canlı Demo Sitesi</span>
                  <i className="fas fa-external-link-alt text-xs text-blue-400"></i>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-[11px] font-mono font-semibold text-slate-400">
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-circle-check text-blue-400"></i> 48
                  SAATTE AKTİF KURULUM
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-circle-check text-blue-400"></i> SINIRSIZ
                  BULUT DESTEĞİ
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="fas fa-circle-check text-blue-400"></i>{" "}
                  TAAHHÜTSÜZ ESNEK LİSANS
                </span>
              </div>
            </div>
            <div className="relative group rounded-3xl shadow-[0_0_50px_rgba(37,99,235,0.15)] ring-1 ring-slate-800 hover:ring-blue-500/30 overflow-hidden aspect-video bg-slate-950 transition-all duration-500">
              {/* Ambient Glowing Background Behind Video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

              <video
                autoPlay
                muted
                loop
                playsInline
                src="https://media.istockphoto.com/id/1475916498/tr/video/t-l-aerial-view-of-residential-building-at-night.mp4?p=1&s=mp4-640x640-is&k=20&c=Z5IOszjw_Ov4NmIaNUFSP4AJcvAj9-7SKCrNGPNoBLo="
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
              ></video>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20 pointer-events-none"></div>

              {/* Top Tech Border Accent */}
              <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 text-[10px] font-mono font-black text-blue-400 tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>LIVE_VISUALISATION__ON</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-0 space-y-1">
        {/* Guest Journey Section */}
        <section className="container mx-auto px-8 pt-8 md:pt-12 pb-0 mb-0">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-3 md:p-4 lg:p-5 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="relative z-10 w-full text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                Üye Yolculuğunun Her Adımında{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Yanınızdayız
                </span>
              </h2>
              <p className="mt-1 text-sm text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                Platformumuz, müşterilerinizin salonunuzla ilk temasından, sadık bir
                üyeye dönüşmesine kadar tüm süreci akıllıca ve kesintisiz
                bir şekilde yönetir.
              </p>
            </div>
            <div className="relative z-10">
              <div
                className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-800/80"
                aria-hidden="true"
              ></div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-x-4 md:gap-y-4">
                {guestJourneySteps.map((step, index) => {
                  const stepThemes = [
                    {
                      ring: "ring-blue-500/20",
                      iconColor: "text-white",
                      iconBg:
                        "from-blue-500 to-indigo-600 border-blue-400/20 shadow-[0_0_20px_rgba(59,130,246,0.5)]",
                      cardWrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(59,130,246,0.1)] border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-blue-500/5",
                      textHover: "group-hover:text-blue-300",
                      blur: "bg-blue-500/20 group-hover:bg-blue-500/30",
                    },
                    {
                      ring: "ring-purple-500/20",
                      iconColor: "text-white",
                      iconBg:
                        "from-purple-500 to-pink-600 border-purple-400/20 shadow-[0_0_20px_rgba(168,85,247,0.5)]",
                      cardWrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(168,85,247,0.1)] border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] ring-purple-500/5",
                      textHover: "group-hover:text-purple-300",
                      blur: "bg-purple-500/20 group-hover:bg-purple-500/30",
                    },
                    {
                      ring: "ring-cyan-500/20",
                      iconColor: "text-white",
                      iconBg:
                        "from-cyan-400 to-blue-600 border-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.5)]",
                      cardWrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(6,182,212,0.1)] border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] ring-cyan-500/5",
                      textHover: "group-hover:text-cyan-300",
                      blur: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
                    },
                    {
                      ring: "ring-emerald-500/20",
                      iconColor: "text-white",
                      iconBg:
                        "from-emerald-500 to-teal-600 border-emerald-400/20 shadow-[0_0_20px_rgba(16,185,129,0.5)]",
                      cardWrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(16,185,129,0.1)] border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] ring-emerald-500/5",
                      textHover: "group-hover:text-emerald-300",
                      blur: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
                    },
                  ];
                  const theme = stepThemes[index % stepThemes.length];

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center group h-full"
                    >
                      <div
                        className={`relative flex-shrink-0 h-24 w-24 bg-slate-900 rounded-full flex items-center justify-center ring-8 ${theme.ring} z-10 transition-transform duration-500 group-hover:-translate-y-2`}
                      >
                        <div
                          className={`w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-br flex items-center justify-center border shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 ${theme.iconBg}`}
                        >
                          <i
                            className={`${step.icon} text-3xl ${theme.iconColor}`}
                          ></i>
                        </div>
                      </div>
                      <div
                        className={`w-full bg-gradient-to-br backdrop-blur-2xl px-5 pb-5 pt-[4.5rem] md:px-6 md:pb-6 md:pt-[5rem] rounded-3xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 -mt-12 group-hover:-translate-y-2 ${theme.cardWrapper}`}
                      >
                        <div
                          className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 ${theme.blur}`}
                        ></div>
                        <h4
                          className={`font-bold text-[17px] md:text-[19px] leading-snug mb-2 text-white transition-colors duration-300 relative z-20 ${theme.textHover}`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-[13px] font-medium text-slate-300 relative z-20 leading-snug flex-grow">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 3 Core Pillars Section */}
        <section className="container mx-auto px-8 py-1">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-5 md:p-6 lg:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="relative z-10 w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1.5">
                  Güzellik Salonu Çözümlericiliğin Geleceği için{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    3 Temel Direk
                  </span>
                </h2>
                <p className="mt-1.5 text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                  Platformumuz, salonunuzu geleceğe taşıyacak üç stratejik
                  felsefe üzerine kurulmuştur.
                </p>
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">
                {[
                  {
                    icon: "fas fa-crown",
                    title: "Benzersiz Üye Deneyimi",
                    description:
                      "Yapay zeka, her üyeye adıyla hitap eder, geçmiş tercihlerini hatırlar ve onlara özel teklifler sunar. Bu, zincir salonların bile sunamadığı bir kişiselleştirme seviyesidir.",
                    features: [
                      "Kişiselleştirilmiş Karşılama",
                      "Üye Tercih Havuzu",
                      "VIP Hissettiren İletişim",
                    ],
                  },
                  {
                    icon: "fas fa-bullseye-arrow",
                    title: "Veriye Dayalı Pazarlama",
                    description:
                      "Hangi üye segmentinin hangi tekliflere yanıt verdiğini anlayın. Pazarlama bütçenizi tahminlere değil, somut verilere dayalı olarak en kârlı kanallara yönlendirin.",
                    features: [
                      "Segment Bazlı Retargeting",
                      "ROI Odaklı Reklam Paneli",
                      "Yüksek Dönüşümlü Teklifler",
                    ],
                  },
                  {
                    icon: "fas fa-tachometer-alt-fast",
                    title: "Operasyonel Mükemmellik",
                    description:
                      "Otomatikleştirilmiş süreçler sayesinde daha az personelle daha çok iş yapın. Bu size fiyatlandırmada esneklik ve hizmet kalitesinde tutarlılık olarak geri döner.",
                    features: [
                      "Optimum Personel Planlaması",
                      "Maliyet-Fayda Optimizasyon",
                      "Hatayı Sıfırlayan Sistemler",
                    ],
                  },
                ].map((item, index) => {
                  const themes = [
                    {
                      iconColor: "text-white",
                      iconBg:
                        "from-blue-500 to-indigo-600 border-blue-400/20 shadow-[0_0_20px_rgba(59,130,246,0.5)]",
                      cardWrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(59,130,246,0.1)] border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-blue-500/5",
                      textHover: "group-hover:text-blue-300",
                      blur: "bg-blue-500/20 group-hover:bg-blue-500/30",
                      line: "via-blue-400",
                    },
                    {
                      iconColor: "text-white",
                      iconBg:
                        "from-purple-500 to-pink-600 border-purple-400/20 shadow-[0_0_20px_rgba(168,85,247,0.5)]",
                      cardWrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(168,85,247,0.1)] border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] ring-purple-500/5",
                      textHover: "group-hover:text-purple-300",
                      blur: "bg-purple-500/20 group-hover:bg-purple-500/30",
                      line: "via-purple-400",
                    },
                    {
                      iconColor: "text-white",
                      iconBg:
                        "from-cyan-400 to-blue-600 border-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.5)]",
                      cardWrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(6,182,212,0.1)] border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] ring-cyan-500/5",
                      textHover: "group-hover:text-cyan-300",
                      blur: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
                      line: "via-cyan-400",
                    },
                  ];
                  const theme = themes[index % themes.length];
                  return (
                    <div
                      key={index}
                      className={`group bg-gradient-to-br backdrop-blur-2xl p-4 md:p-5 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 hover:-translate-y-1.5 ${theme.cardWrapper}`}
                    >
                      <div
                        className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 ${theme.blur}`}
                      ></div>
                      <div
                        className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 ${theme.line}`}
                      ></div>

                      <div className="flex items-center space-x-3 mb-3 relative z-20">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center transition-transform duration-300 border shadow-lg ${theme.iconBg}`}
                        >
                          <i
                            className={`${item.icon} text-xl ${theme.iconColor || "text-white"}`}
                          ></i>
                        </div>
                        <h3
                          className={`font-bold text-[16px] md:text-[17px] leading-tight text-white transition-colors duration-300 ${theme.textHover}`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <div className="relative z-20 flex flex-col flex-grow">
                        <p className="text-[12px] md:text-[13px] text-slate-300 leading-snug font-medium mb-3">
                          {item.description}
                        </p>
                        {item.features && (
                          <ul className="mt-auto space-y-1.5 pt-2 border-t border-slate-700/50">
                            {item.features.map((feature, fIdx) => (
                              <li
                                key={fIdx}
                                className="flex items-center text-[12px] text-slate-300 overflow-hidden w-full"
                              >
                                <i
                                  className={`fas fa-check-circle mr-1.5 flex-shrink-0 ${theme.textHover.replace("group-hover:", "")}`}
                                ></i>
                                <span className="truncate leading-tight">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* The Old Way vs The Mortanas Way Section */}
        <section className="container mx-auto px-8 pt-4 md:pt-6 pb-0 mb-0">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-3 md:p-4 lg:p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="relative z-10 w-full">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Güzellik Salonu Çözümleri Yönetiminde Devrim: Kaostan Kontrole
                </h2>
                <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                  Dağınık sistemlerin yarattığı verimsizliği ve gelir kaybını,
                  hepsi bir arada akıllı platformumuzla nasıl aştığımızı görün.
                </p>
              </div>
              <div className="relative">
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
                  {/* The Old Way */}
                  <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-4 md:p-6 rounded-[1.5rem] border-2 border-red-500/20 shadow-xl shadow-red-900/10 relative overflow-hidden group hover:border-red-500/40 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="flex items-center space-x-4 mb-4 relative z-10">
                      <div className="flex-shrink-0 h-14 w-14 rounded-full bg-red-500/10 flex items-center justify-center ring-2 ring-red-500/20 group-hover:bg-red-500/20 transition-colors duration-500">
                        <i className="fas fa-exclamation-triangle text-red-400 text-2xl"></i>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-red-400">
                        Eski Yöntem (Kaos)
                      </h3>
                    </div>
                    <ul className="space-y-1.5 text-slate-400 text-[12px] md:text-[13px] relative z-10">
                      <li className="flex items-center overflow-hidden w-full">
                        <i className="fas fa-times-circle text-red-500/70 mr-2 flex-shrink-0"></i>
                        <span className="truncate">
                          <strong>Yüksek Komisyonlar:</strong> %15-25 Pazaryeri
                          komisyonuyla eriyen kâr.
                        </span>
                      </li>
                      <li className="flex items-center overflow-hidden w-full">
                        <i className="fas fa-times-circle text-red-500/70 mr-2 flex-shrink-0"></i>
                        <span className="truncate">
                          <strong>Sabit Fiyatlandırma:</strong> Talebe adapte
                          olamayan statik fiyatlarla gelir kaybı.
                        </span>
                      </li>
                      <li className="flex items-center overflow-hidden w-full">
                        <i className="fas fa-times-circle text-red-500/70 mr-2 flex-shrink-0"></i>
                        <span className="truncate">
                          <strong>Pasif Varlık:</strong> Ziyaretçiyi üyeye
                          dönüştüremeyen etkileşimsiz web siteleri.
                        </span>
                      </li>
                      <li className="flex items-center overflow-hidden w-full">
                        <i className="fas fa-times-circle text-red-500/70 mr-2 flex-shrink-0"></i>
                        <span className="truncate">
                          <strong>Dağınık Dağıtım:</strong> ÖBS, Paket ve diğer
                          yazılımların birbirinden kopuk çalışması.
                        </span>
                      </li>
                      <li className="flex items-center overflow-hidden w-full">
                        <i className="fas fa-times-circle text-red-500/70 mr-2 flex-shrink-0"></i>
                        <span className="truncate">
                          <strong>Kaçan Fırsatlar:</strong> Mesai dışı cevapsız
                          kalan çağrılar ve potansiyel müşteriler.
                        </span>
                      </li>
                      <li className="flex items-center overflow-hidden w-full">
                        <i className="fas fa-times-circle text-red-500/70 mr-2 flex-shrink-0"></i>
                        <span className="truncate">
                          <strong>Manuel Operasyon:</strong> Sayım ve görev
                          atamalarıyla personelin aşırı yorulması.
                        </span>
                      </li>
                      <li className="flex items-center overflow-hidden w-full">
                        <i className="fas fa-times-circle text-red-500/70 mr-2 flex-shrink-0"></i>
                        <span className="truncate">
                          <strong>İtibar Zafiyeti:</strong> Önemsenmeyen
                          yorumlar, geç yanıtlar sebebiyle düşen güven.
                        </span>
                      </li>
                      <li className="flex items-center overflow-hidden w-full">
                        <i className="fas fa-times-circle text-red-500/70 mr-2 flex-shrink-0"></i>
                        <span className="truncate">
                          <strong>Veri Körlüğü:</strong> Geçmiş tercihlerin
                          kaybolmasıyla imkansızlaşan kişiselleştirme.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* The Mortanas Way */}
                  <div className="bg-gradient-to-br from-[#0a0f1d] via-slate-900 to-[#121b36] p-4 md:p-6 rounded-[1.5rem] border-2 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden group hover:border-blue-400/60 hover:shadow-[0_0_50px_rgba(59,130,246,0.25)] transition-all duration-500 hover:-translate-y-1">
                    <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-100 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700 pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30 shadow-inner shadow-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-500">
                          <i className="fas fa-rocket text-blue-400 text-2xl group-hover:scale-110 transition-transform duration-500"></i>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-500">
                          Mortanas Yolu (Kontrol)
                        </h3>
                      </div>
                      <ul className="space-y-1.5 text-slate-300 text-[12px] md:text-[13px]">
                        <li className="flex items-center overflow-hidden w-full">
                          <i className="fas fa-check-circle text-blue-400 mr-2 flex-shrink-0"></i>
                          <span className="truncate">
                            <strong>Doğrudan Kâr:</strong> 7/24 Randevu alan
                            AI web sitesi ile sıfır komisyon.
                          </span>
                        </li>
                        <li className="flex items-center overflow-hidden w-full">
                          <i className="fas fa-check-circle text-blue-400 mr-2 flex-shrink-0"></i>
                          <span className="truncate">
                            <strong>Dinamik Fiyat:</strong> Rakip ve talep
                            analizleriyle maksimize edilmiş Üye Başı Gelir.
                          </span>
                        </li>
                        <li className="flex items-center overflow-hidden w-full">
                          <i className="fas fa-check-circle text-blue-400 mr-2 flex-shrink-0"></i>
                          <span className="truncate">
                            <strong>Tam Bütünlük:</strong> Online
                            rezervasyonlar, Paket ve üye verisi tek akıllı
                            CRM'de.
                          </span>
                        </li>
                        <li className="flex items-center overflow-hidden w-full">
                          <i className="fas fa-check-circle text-blue-400 mr-2 flex-shrink-0"></i>
                          <span className="truncate">
                            <strong>7/24 Omni-channel:</strong> Sesli asistan,
                            WhatsApp ve botlarla kesintisiz hizmet.
                          </span>
                        </li>
                        <li className="flex items-center overflow-hidden w-full">
                          <i className="fas fa-check-circle text-blue-400 mr-2 flex-shrink-0"></i>
                          <span className="truncate">
                            <strong>Akıllı Operasyon:</strong> Kritik seviyedeki
                            malzemelar ve Güzellik Merkezi görevleri otomatikleşir.
                          </span>
                        </li>
                        <li className="flex items-center overflow-hidden w-full">
                          <i className="fas fa-check-circle text-blue-400 mr-2 flex-shrink-0"></i>
                          <span className="truncate">
                            <strong>Kusursuz İtibar:</strong> Tüm
                            platformlardaki yorumlar AI ile anında ve
                            profesyonel yanıtlanır.
                          </span>
                        </li>
                        <li className="flex items-center overflow-hidden w-full">
                          <i className="fas fa-check-circle text-blue-400 mr-2 flex-shrink-0"></i>
                          <span className="truncate">
                            <strong>Vizyoner Ekip:</strong> Tekrarlayan işlerden
                            kurtulup %100 üye memnuniyetine odaklı personel.
                          </span>
                        </li>
                        <li className="flex items-center overflow-hidden w-full">
                          <i className="fas fa-check-circle text-blue-400 mr-2 flex-shrink-0"></i>
                          <span className="truncate">
                            <strong>360° Profil:</strong> Geçmiş konaklamalar
                            ışığında, sadakati destekleyen akıllı kampanyalar.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* The transformation arrow in the middle for large screens */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-24 h-24"
                  aria-hidden="true"
                >
                  <div className="absolute w-full h-[2px] bg-gradient-to-r from-red-500/50 via-slate-600 to-blue-500/50"></div>
                  <i className="fas fa-arrow-right-long text-4xl text-slate-300 transform bg-slate-900 px-4 animate-pulse"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Included Services Section */}
        <section className="container mx-auto px-8 pt-8 md:pt-12 pb-0 mb-0">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-3 md:p-4 lg:p-5 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="relative z-10 w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1">
                  Paketin İçindeki Güç:{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    9 Entegre Çözüm
                  </span>
                </h2>
                <p className="mt-2 text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                  Güzellik Merkeziınızın her departmanını güçlendirmek için tasarlanmış 9
                  entegre yapay zeka çözümü.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {includedServices.map((service, idx) => (
                  <div key={service.title} className="group h-full">
                    <FeatureCard {...service} index={idx} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Deep Dive Section */}
        <section className="container mx-auto px-8 py-3">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-4 md:p-6 lg:p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="relative z-10 w-full">
              <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
              <div className="relative z-10">
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                      Platforma Derinlemesine Bakış
                    </span>
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                    Tüm operasyonlarınızı yöneteceğiniz merkezi ve akıllı
                    kontrol paneliniz.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {platformModules.map((module) => (
                    <PlatformModuleCard key={module.title} {...module} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Dialogue Section */}
        <BeautyPhoneDialogueSection />

        {/* Meet Your AI Team Section */}
        <section className="container mx-auto px-8 py-8">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/45 via-slate-900/95 to-slate-950 text-white rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.08),rgba(255,255,255,0))] pointer-events-none"></div>

            <div className="relative z-10 w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    Tanışın: Güzellik Merkeziınızın Yeni Akıllı Ekibi
                  </span>
                </h2>
                <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                  Platformumuz, salonunuzun farklı departmanları için uzmanlaşmış
                  yapay zeka asistanlarından oluşur.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: "fas fa-calendar-check",
                    name: "Alex",
                    title: "Randevu Uzmanı",
                    role: "7/24 çalışır, tüm kanallardan rezervasyonları alır ve üye sorularını yanıtlar.",
                  },
                  {
                    icon: "fas fa-comments-dollar",
                    name: "Sofia",
                    title: "Sosyal Medya Yöneticisi",
                    role: "Instagram, WhatsApp ve Facebook'taki sohbetleri yönetir, Randevu fırsatları yaratır.",
                  },
                  {
                    icon: "fas fa-headset",
                    name: "Leo",
                    title: "Sesli Resepsiyonist",
                    role: "Telefon çağrılarını karşılar, sesli olarak Randevu alır ve personelinizi bilgilendirir.",
                  },
                  {
                    icon: "fas fa-chart-line",
                    name: "Clara",
                    title: "Gelir Stratejisti",
                    role: "Fiyatları dinamik olarak optimize eder, doluluğu tahminler ve gelir artırıcı öneriler sunar.",
                  },
                ].map((assistant, index) => {
                  const themes = [
                    {
                      wrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(59,130,246,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-blue-500/5 hover:ring-blue-500/15",
                      blur: "bg-blue-500/20 group-hover:bg-blue-500/30",
                      line: "via-blue-400",
                      iconBg:
                        "from-blue-500 to-indigo-600 border-blue-400/20 shadow-blue-500/20",
                      textHover: "group-hover:text-blue-300",
                    },
                    {
                      wrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(168,85,247,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] ring-purple-500/5 hover:ring-purple-500/15",
                      blur: "bg-purple-500/20 group-hover:bg-purple-500/30",
                      line: "via-purple-400",
                      iconBg:
                        "from-purple-500 to-pink-600 border-purple-400/20 shadow-purple-500/20",
                      textHover: "group-hover:text-purple-300",
                    },
                    {
                      wrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(6,182,212,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] ring-cyan-500/5 hover:ring-cyan-500/15",
                      blur: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
                      line: "via-cyan-400",
                      iconBg:
                        "from-cyan-400 to-blue-600 border-cyan-400/20 shadow-cyan-500/20",
                      textHover: "group-hover:text-cyan-300",
                    },
                    {
                      wrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(16,185,129,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] ring-emerald-500/5 hover:ring-emerald-500/15",
                      blur: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
                      line: "via-emerald-400",
                      iconBg:
                        "from-emerald-500 to-teal-600 border-emerald-400/20 shadow-emerald-500/20",
                      textHover: "group-hover:text-emerald-300",
                    },
                  ];
                  const theme = themes[index % themes.length];
                  return (
                    <div
                      key={assistant.name}
                      className={`group bg-gradient-to-br backdrop-blur-2xl p-4 md:p-5 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 text-center hover:-translate-y-2 ${theme.wrapper}`}
                    >
                      <div
                        className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 ${theme.blur}`}
                      ></div>
                      <div
                        className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 ${theme.line}`}
                      ></div>

                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 ${theme.iconBg}`}
                      >
                        <i
                          className={`${assistant.icon} text-4xl text-white`}
                        ></i>
                      </div>
                      <h3
                        className={`font-bold text-lg md:text-xl leading-snug mb-0.5 text-white relative z-20 transition-colors duration-300 ${theme.textHover}`}
                      >
                        {assistant.name}
                      </h3>
                      <p className="text-[13px] text-blue-400 font-semibold mb-2 relative z-20">
                        {assistant.title}
                      </p>
                      <p className="text-[13px] text-slate-300 leading-normal relative z-20 font-medium flex-grow">
                        {assistant.role}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Heart of the Platform: AI Engine Section */}
        <section className="container mx-auto px-8 py-4">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-5 md:p-8 lg:p-9 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="relative z-10 w-full"></div>
            <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(37,99,235,0.15),rgba(255,255,255,0))]"></div>

            <div className="container mx-auto px-8 relative z-10">
              <div className="text-center mb-8 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-1">
                  Teknolojimizin Kalbi:{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    Akıllı Güzellik Salonu Çözümlericilik Motoru
                  </span>
                </h2>
                <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                  Platformumuzun gücü, Güzellik Merkezi sektörü için özel olarak
                  tasarlanmış, sürekli öğrenen yapay zeka çekirdeğinden gelir.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: "fas fa-user-astronaut",
                    title: "Kişiselleştirme Motoru",
                    description:
                      "Üye verilerini analiz ederek kişiselleştirilmiş teklifler, upsell fırsatları ve pazarlama mesajları oluşturur.",
                  },
                  {
                    icon: "fas fa-dollar-sign",
                    title: "Dinamik Fiyatlandırma",
                    description:
                      "Piyasa talebini, rakip fiyatlarını ve etkinlikleri izleyerek en uygun Güzellik Merkezi fiyatlarını gerçek zamanlı olarak önerir.",
                  },
                  {
                    icon: "fas fa-comments",
                    title: "Doğal Dil İşleme (NLP)",
                    description:
                      "Chatbot ve sesli asistanlarımızın üye taleplerini bir insan gibi anlamasını ve yanıtlamasını sağlar.",
                  },
                  {
                    icon: "fas fa-chart-line",
                    title: "Tahmine Dayalı Analitik",
                    description:
                      "Gelecekteki Paket oranlarını tahmin eder, üye kayıp riskini belirler ve stratejik kararlar için içgörüler sunar.",
                  },
                ].map((engine, index) => {
                  const themes = [
                    {
                      wrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(59,130,246,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-blue-500/5 hover:ring-blue-500/15",
                      blur: "bg-blue-500/20 group-hover:bg-blue-500/30",
                      line: "via-blue-400",
                      iconBg:
                        "from-blue-500 to-indigo-600 border-blue-400/20 shadow-blue-500/20",
                      textHover: "group-hover:text-blue-300",
                    },
                    {
                      wrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(168,85,247,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] ring-purple-500/5 hover:ring-purple-500/15",
                      blur: "bg-purple-500/20 group-hover:bg-purple-500/30",
                      line: "via-purple-400",
                      iconBg:
                        "from-purple-500 to-pink-600 border-purple-400/20 shadow-purple-500/20",
                      textHover: "group-hover:text-purple-300",
                    },
                    {
                      wrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(6,182,212,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] ring-cyan-500/5 hover:ring-cyan-500/15",
                      blur: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
                      line: "via-cyan-400",
                      iconBg:
                        "from-cyan-400 to-blue-600 border-cyan-400/20 shadow-cyan-500/20",
                      textHover: "group-hover:text-cyan-300",
                    },
                    {
                      wrapper:
                        "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(16,185,129,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] ring-emerald-500/5 hover:ring-emerald-500/15",
                      blur: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
                      line: "via-emerald-400",
                      iconBg:
                        "from-emerald-500 to-teal-600 border-emerald-400/20 shadow-emerald-500/20",
                      textHover: "group-hover:text-emerald-300",
                    },
                  ];
                  const theme = themes[index % themes.length];

                  return (
                    <div
                      key={index}
                      className={`group bg-gradient-to-br backdrop-blur-2xl px-4 py-4 md:py-4.5 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 text-center hover:-translate-y-2 ${theme.wrapper}`}
                    >
                      <div
                        className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 ${theme.blur}`}
                      ></div>
                      <div
                        className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 ${theme.line}`}
                      ></div>

                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 ${theme.iconBg}`}
                      >
                        <i className={`${engine.icon} text-xl text-white`}></i>
                      </div>
                      <h3
                        className={`font-semibold text-base md:text-lg leading-snug mb-1 text-white relative z-20 transition-colors duration-300 ${theme.textHover}`}
                      >
                        {engine.title}
                      </h3>
                      <p className="text-[14px] text-slate-300 leading-relaxed relative z-20 font-medium flex-grow">
                        {engine.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="container mx-auto px-8 py-12">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-900/90 to-slate-950 text-white rounded-3xl p-7 md:p-11 lg:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(37,99,235,0.12),rgba(255,255,255,0))] pointer-events-none"></div>

            <div className="relative z-10 w-full">
              <div className="text-center mb-4">
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-1">
                  Size Ne{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    Sunuyoruz?
                  </span>
                </h2>
                <p className="mt-1 text-sm text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                  Güzellik Merkeziınızın her departmanını güçlendirmek için tasarlanmış
                  entegre yapay zeka çözümleri.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {[
                  {
                    icon: "fas fa-comments",
                    title: "Çok Kanallı İletişim",
                    description:
                      "müşterilerinizle e-posta, sohbet, telephone ve WhatsApp gibi tüm kanallardan kesintisiz iletişim kurun.",
                    theme: "blue",
                  },
                  {
                    icon: "fas fa-cogs",
                    title: "İşbirliği ve Otomasyon",
                    description:
                      "Canlı Destek, Salon ve yönetim arasında sorunsuz işbirliği sağlayın, süreçleri ve raporlamayı otomatikleştirin.",
                    theme: "purple",
                  },
                  {
                    icon: "fas fa-database",
                    title: "Merkezi Bilgi Merkezi",
                    description:
                      "Güzellik Salonu Çözümleri hizmetleri, çevre aktiviteleri ve sıkça sorulan soruları bilgi tabanında toplayın, kolayca güncelleyin.",
                    theme: "cyan",
                  },
                  {
                    icon: "fas fa-magic",
                    title: "Kolay Kullanım",
                    description:
                      "BT desteğine gerek duymadan hızlı kurulum yapın, sistemi kolayca kullanarak üye memnuniyetine odaklanın.",
                    theme: "emerald",
                  },
                  {
                    icon: "fas fa-headset",
                    title: "Güçlü Destek Deneyimi",
                    description:
                      "Üye taleplerini kolayca yönetin, kişiselleştirilmiş teklifler sunun ve beklentileri aşın.",
                    theme: "amber",
                  },
                  {
                    icon: "fas fa-chart-bar",
                    title: "Ölçümleme ve Gelişim",
                    description:
                      "Detaylı analizlerle operasyonları ölçün, güçlü yönlerinizi belirleyin ve hizmet kalitenizi sürekli iyileştirin.",
                    theme: "pink",
                  },
                ].map((feature, index) => {
                  const t = {
                    blue: {
                      w: "border-blue-500/30 hover:border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1),_0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] ring-blue-500/5 hover:ring-blue-500/15",
                      bgBlur: "bg-blue-500/20 group-hover:bg-blue-500/30",
                      bgLine: "via-blue-400",
                      iconBg:
                        "from-blue-500 to-blue-600 border-blue-400/20 shadow-blue-500/20 text-white",
                      titleHover: "group-hover:text-blue-300",
                    },
                    purple: {
                      w: "border-purple-500/30 hover:border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1),_0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] ring-purple-500/5 hover:ring-purple-500/15",
                      bgBlur: "bg-purple-500/20 group-hover:bg-purple-500/30",
                      bgLine: "via-purple-400",
                      iconBg:
                        "from-purple-500 to-purple-600 border-purple-400/20 shadow-purple-500/20 text-white",
                      titleHover: "group-hover:text-purple-300",
                    },
                    cyan: {
                      w: "border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.1),_0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] ring-cyan-500/5 hover:ring-cyan-500/15",
                      bgBlur: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
                      bgLine: "via-cyan-400",
                      iconBg:
                        "from-cyan-500 to-cyan-600 border-cyan-400/20 shadow-cyan-500/20 text-white",
                      titleHover: "group-hover:text-cyan-300",
                    },
                    emerald: {
                      w: "border-emerald-500/30 hover:border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1),_0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] ring-emerald-500/5 hover:ring-emerald-500/15",
                      bgBlur: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
                      bgLine: "via-emerald-400",
                      iconBg:
                        "from-emerald-500 to-emerald-600 border-emerald-400/20 shadow-emerald-500/20 text-white",
                      titleHover: "group-hover:text-emerald-300",
                    },
                    amber: {
                      w: "border-amber-500/30 hover:border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.1),_0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(245,158,11,0.25)] ring-amber-500/5 hover:ring-amber-500/15",
                      bgBlur: "bg-amber-500/20 group-hover:bg-amber-500/30",
                      bgLine: "via-amber-400",
                      iconBg:
                        "from-amber-500 to-amber-600 border-amber-400/20 shadow-amber-500/20 text-white",
                      titleHover: "group-hover:text-amber-300",
                    },
                    pink: {
                      w: "border-pink-500/30 hover:border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.1),_0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(236,72,153,0.25)] ring-pink-500/5 hover:ring-pink-500/15",
                      bgBlur: "bg-pink-500/20 group-hover:bg-pink-500/30",
                      bgLine: "via-pink-400",
                      iconBg:
                        "from-pink-500 to-pink-600 border-pink-400/20 shadow-pink-500/20 text-white",
                      titleHover: "group-hover:text-pink-300",
                    },
                  }[feature.theme];

                  return (
                    <div
                      key={index}
                      className={`group bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/90 backdrop-blur-2xl px-6 py-7 md:py-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ring-4 flex flex-col justify-center ${t.w}`}
                    >
                      <div
                        className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[24px] transition-all duration-700 ${t.bgBlur}`}
                      ></div>
                      <div
                        className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 ${t.bgLine}`}
                      ></div>
                      <div className="flex items-center space-x-2.5 mb-1.5">
                        <div
                          className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br flex items-center justify-center border shadow-sm relative z-10 text-[11px] md:text-[12px] ${t.iconBg}`}
                        >
                          <i className={`${feature.icon}`}></i>
                        </div>
                        <h3
                          className={`text-[13px] md:text-[14px] font-bold text-white relative z-10 transition-colors duration-300 leading-none ${t.titleHover}`}
                        >
                          {feature.title}
                        </h3>
                      </div>

                      <p className="text-slate-300 text-[11px] md:text-[11.5px] leading-snug relative z-10 font-medium">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 9-in-1 Power Pack Offer Section */}
        <section className="container mx-auto px-8 py-4 md:py-6">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-900/95 to-slate-950 text-white rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden w-full transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_20px_50px_rgba(245,158,11,0.05)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(245,158,11,0.06),rgba(255,255,255,0))] pointer-events-none"></div>
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] bg-indigo-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              {/* Left: Text Content (span 7 columns for balanced text weight) */}
              <div className="lg:col-span-7 text-center lg:text-left text-white">
                <span className="inline-flex items-center text-xs font-semibold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase shadow-md shadow-amber-500/5">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  Yılın Fırsatı
                </span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mt-4 leading-tight tracking-tight">
                  9'u 1 Arada{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(245,158,11,0.15)]">
                    Güç Paketi
                  </span>
                </h2>

                <p className="mt-4 text-[14px] md:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Güzellik Salonu Çözümleriiniz için uyarlanmış 9 farklı yazılım ve yapay zeka
                  uygulamasından oluşan tam entegre çözümümüzün normal değeri{" "}
                  <del className="text-red-400/80 font-semibold decoration-2 decoration-red-500/50 mr-1">
                    $10,000
                  </del>
                  'dır.
                </p>

                <p className="mt-2 text-xs md:text-sm text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  1 ay boyunca geçerli %40 özel indirim ile tüm yıl masraflar
                  dahil, aylık ödeme olmadan, tek seferlik ödeme ile sahip olun!
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <div className="bg-slate-950/60 backdrop-blur-md rounded-2xl px-5 py-2.5 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.1)] flex items-center space-x-3 group hover:border-amber-400/50 transition-colors duration-300">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold">
                      Tek Seferlik:
                    </span>
                    <span className="text-3xl font-black text-amber-400 tracking-wider font-mono">
                      $6,000
                    </span>
                  </div>

                  <Link
                    to="/kurumsal"
                    className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black py-3 px-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 inline-flex items-center space-x-2 text-sm md:text-base border border-yellow-300/30 shadow-amber-500/10 ring-4 ring-amber-500/5"
                  >
                    <span>Bu Fırsatı Yakala</span>
                    <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>

              {/* Right: Countdown Timer (span 5 columns for snugger rendering) */}
              <div className="lg:col-span-5 w-full max-w-sm mx-auto lg:ml-auto">
                <div className="bg-slate-950/50 backdrop-blur-md rounded-2xl p-5 border border-slate-800/80 shadow-2xl relative overflow-hidden group hover:border-slate-700 transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

                  <p className="text-center font-bold text-slate-300 mb-4 text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-2">
                    <i className="far fa-clock text-amber-500/80 animate-pulse"></i>
                    TEKLİFİN SONA ERMESİNE KALAN SÜRE:
                  </p>

                  <div className="grid grid-cols-4 gap-2 text-center text-white">
                    <div className="bg-slate-900/40 rounded-xl p-2.5 border border-slate-850 shadow-md">
                      <span className="text-2xl md:text-3xl font-black font-mono tracking-tight text-white">
                        {timeLeft.days}
                      </span>
                      <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                        Gün
                      </span>
                    </div>
                    <div className="bg-slate-900/40 rounded-xl p-2.5 border border-slate-850 shadow-md">
                      <span className="text-2xl md:text-3xl font-black font-mono tracking-tight text-white">
                        {timeLeft.hours}
                      </span>
                      <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                        Saat
                      </span>
                    </div>
                    <div className="bg-slate-900/40 rounded-xl p-2.5 border border-slate-850 shadow-md">
                      <span className="text-2xl md:text-3xl font-black font-mono tracking-tight text-white">
                        {timeLeft.minutes}
                      </span>
                      <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                        Dk
                      </span>
                    </div>
                    <div className="bg-slate-900/40 rounded-xl p-2.5 border border-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.08)]">
                      <span className="text-2xl md:text-3xl font-black font-mono tracking-tight text-amber-400 animate-pulse">
                        {timeLeft.seconds}
                      </span>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                        Sn
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Üye İletişimini Nasıl Dönüştürüyoruz? Section */}
        <section className="container mx-auto px-8 py-0">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-900/90 to-slate-950 text-white rounded-3xl p-2.5 md:p-3.5 lg:p-4 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(37,99,235,0.12),rgba(255,255,255,0))] pointer-events-none"></div>

            <div className="relative z-10 w-full">
              <div className="text-center mb-3">
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-white mb-1">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    Üye İletişimini Nasıl Dönüştürüyoruz?
                  </span>
                </h2>
                <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                  Mortanas AI, salonlara hız, esneklik ve 7/24 hizmet imkânı
                  sunarak tüm üye iletişim süreçlerini dijitalleştirir.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "fas fa-calendar-check",
                    title: "Randevu Yönetimi Otomasyonu",
                    description:
                      "Müşteriler, uygun tarih ve hizmet türlerini kolayca görüntüleyerek tek tıkla Randevu oluşturabilir. Mortanas AI, iptalleri ve güncellemeleri otomatik işleyerek operasyon ekibinin zaman planlamasını kolaylaştırır.",
                    theme: "blue",
                  },
                  {
                    icon: "fas fa-comments-alt",
                    title: "Üye Sorularına Anında Yanıt",
                    description:
                      "Yapay zeka asistanımız, Randevu şartları, Güzellik Merkezi olanakları, çalışma saatleri ve özel menü hizmetleri gibi konularda 7/24 anında yanıt verir. Danışmaya gelen tekrarlayan sorular azalır ve personelin iş yükü hafifler.",
                    theme: "purple",
                  },
                  {
                    icon: "fas fa-bell-on",
                    title: "Otomatik Hatırlatmalar ve Karşılama",
                    description:
                      "Güzellik Salonu Çözümleri başlangıç detayları, deneme sınavı tarihleri ve etüt randevuları müşterilere otomatik olarak hatırlatılır. Bu sayede iletişimsizlik azalır ve Güzellik Merkezi süreci pürüzsüz ilerler.",
                    theme: "cyan",
                  },
                  {
                    icon: "fas fa-language",
                    title: "Çok Dilli Üye Desteği",
                    description:
                      "Yabancı uyruklu müşteriler için anında çeviriyle birden fazla dilde doğru ve anlaşılır iletişim sağlanır. Yapay zeka asistanı, yanlış anlamaların önüne geçer ve uluslararası üye memnuniyetini artırır.",
                    theme: "emerald",
                  },
                  {
                    icon: "fas fa-map-marked-alt",
                    title: "Güzellik Merkezi ve Bölge Bilgilendirmesi",
                    description:
                      "Güzellik Salonu Çözümleri içi aktiviteler, çevre gezileri, popüler turistik noktalar ve ulaşım imkanları hakkında bilgilendirici içerikler anında sunulur. Müşteriler tesise gelmeden önce de detaylı bilgiye ulaşabilir.",
                    theme: "amber",
                  },
                  {
                    icon: "fas fa-sparkles",
                    title: "Ek Hizmet (Çapraz Randevu) Rezervasyonları",
                    description:
                      "müşterilerin tercihlerine ve Hizmet tiplerine göre ek premium PT hizmeti, supplement paketi veya diyetisyen danışmanlığı gibi ek hizmetleri doğru zamanda akıllıca Randevu ederek Güzellik Merkezi gelirlerini artırır.",
                    theme: "pink",
                  },
                ].map((item, index) => {
                  const t = {
                    blue: {
                      w: "from-blue-500/10 to-blue-900/20 border-blue-500/30 hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
                      t: "text-blue-400",
                      b: "border-blue-500/50 shadow-blue-500/20 bg-slate-900/80",
                    },
                    purple: {
                      w: "from-purple-500/10 to-purple-900/20 border-purple-500/30 hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
                      t: "text-purple-400",
                      b: "border-purple-500/50 shadow-purple-500/20 bg-slate-900/80",
                    },
                    cyan: {
                      w: "from-cyan-500/10 to-cyan-900/20 border-cyan-500/30 hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
                      t: "text-cyan-400",
                      b: "border-cyan-500/50 shadow-cyan-500/20 bg-slate-900/80",
                    },
                    emerald: {
                      w: "from-emerald-500/10 to-emerald-900/20 border-emerald-500/30 hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
                      t: "text-emerald-400",
                      b: "border-emerald-500/50 shadow-emerald-500/20 bg-slate-900/80",
                    },
                    amber: {
                      w: "from-amber-500/10 to-amber-900/20 border-amber-500/30 hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
                      t: "text-amber-400",
                      b: "border-amber-500/50 shadow-amber-500/20 bg-slate-900/80",
                    },
                    pink: {
                      w: "from-pink-500/10 to-pink-900/20 border-pink-500/30 hover:border-pink-400 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
                      t: "text-pink-400",
                      b: "border-pink-500/50 shadow-pink-500/20 bg-slate-900/80",
                    },
                  }[item.theme];

                  return (
                    <div
                      key={index}
                      className={`group bg-gradient-to-br backdrop-blur-sm px-3.5 py-2.5 md:py-3 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden ${t.w}`}
                    >
                      <div className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <i className={`${item.icon} text-9xl ${t.t}`}></i>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 border shadow-lg relative z-10 ${t.b}`}
                      >
                        <i className={`${item.icon} text-[14px] ${t.t}`}></i>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-[13px] leading-relaxed relative z-10 font-normal">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <WhyMortanasSection
          title="Neden Güzellik Salonu Çözümleri Sektörü için Mortanas AI?"
          subtitle="Üye memnuniyetini artırırken, operasyonel verimliliği en üst düzeye çıkaran akıllı çözüm ortağınız."
          points={[
            {
              icon: "fa-headset",
              title: "7/24 Kesintisiz İletişim",
              description:
                "Yoğun sezonlarda veya gece saatlerinde bile tüm üye sorularını ve Randevu taleplerini anında yanıtlayarak hiçbir fırsatı kaçırmayın.",
            },
            {
              icon: "fa-star",
              title: "Gelişmiş Üye Deneyimi",
              description:
                "Müşterilere Güzellik Merkezi olanakları, seans hatırlatmaları ve yeni paket fırsatları hakkında kişiselleştirilmiş, anlık bilgiler sunarak bağlılığı artırın.",
            },
            {
              icon: "fa-shield-halved",
              title: "Veri Güvenliği ve KVKK Uyumu",
              description:
                "Tüm Güzellik Merkezi, kimlik ve ödeme verileri, KVKK standartlarına uygun, yüksek güvenlikli altyapımızda titizlikle korunur.",
            },
            {
              icon: "fa-cogs",
              title: "İdari Yükü Azaltın",
              description:
                "Tekrarlayan canlı destek görevlerini otomatize ederek personelinizin daha stratejik ve üye odaklı yüz yüze hizmetlere odaklanmasını sağlayın.",
            },
          ]}
          themeColor="blue"
        />

        {/* Ideal For Section */}
        <section className="container mx-auto px-8 py-8">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/45 via-slate-900/95 to-slate-950 text-white rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>

            <div className="text-center mb-10 relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Kimler İçin İdeal?
                </span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                Çözümümüz, farklı büyüklükteki ve segmentlerdeki salonların
                ihtiyaçlarını karşılamak üzere esnek bir yapıda tasarlanmıştır.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {idealFor.map((target, index) => {
                const themes = [
                  {
                    border:
                      "border-blue-500/20 hover:border-blue-400/65 shadow-blue-500/5 hover:shadow-blue-500/20",
                    text: "group-hover:text-blue-300",
                    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                    glow: "bg-blue-500",
                  },
                  {
                    border:
                      "border-purple-500/20 hover:border-purple-400/65 shadow-purple-500/5 hover:shadow-purple-500/20",
                    text: "group-hover:text-purple-300",
                    iconBg:
                      "bg-purple-500/10 text-purple-400 border-purple-500/20",
                    glow: "bg-purple-500",
                  },
                  {
                    border:
                      "border-cyan-500/20 hover:border-cyan-400/65 shadow-cyan-500/5 hover:shadow-cyan-500/20",
                    text: "group-hover:text-cyan-300",
                    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                    glow: "bg-cyan-500",
                  },
                  {
                    border:
                      "border-emerald-500/20 hover:border-emerald-400/65 shadow-emerald-500/5 hover:shadow-emerald-500/20",
                    text: "group-hover:text-emerald-300",
                    iconBg:
                      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                    glow: "bg-emerald-500",
                  },
                  {
                    border:
                      "border-amber-500/20 hover:border-amber-400/65 shadow-amber-500/5 hover:shadow-amber-500/20",
                    text: "group-hover:text-amber-300",
                    iconBg:
                      "bg-amber-500/10 text-amber-400 border-amber-500/20",
                    glow: "bg-amber-500",
                  },
                ];
                const theme = themes[index % themes.length];

                return (
                  <div
                    key={target.name}
                    className={`group relative h-48 md:h-56 rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between p-4 md:p-5 hover:-translate-y-1.5 cursor-pointer ${theme.border}`}
                  >
                    {/* Image Background with overlay */}
                    <img
                      src={target.imageUrl}
                      alt={target.name}
                      className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 group-hover:opacity-35 scale-100 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 opacity-5 group-hover:opacity-10 z-10 ${theme.glow}`}
                    ></div>

                    {/* Top Part: Subtle Badge & Icon */}
                    <div className="relative z-20 flex justify-between items-start w-full">
                      <span className="inline-flex items-center text-[8px] font-bold uppercase tracking-widest text-[#f59e0b] bg-amber-500/10 border border-amber-500/15 px-2 py-0.5 rounded-full backdrop-blur-md">
                        {target.badge}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center border backdrop-blur-md transition-all duration-300 transform group-hover:scale-110 ${theme.iconBg}`}
                      >
                        <i className={`${target.icon} text-sm`}></i>
                      </div>
                    </div>

                    {/* Bottom Part: Dynamic Content with concise alignment */}
                    <div className="relative z-20 flex flex-col text-left w-full">
                      <h4
                        className={`font-black text-sm md:text-base tracking-tight text-white transition-colors duration-300 ${theme.text} mb-1`}
                      >
                        {target.name}
                      </h4>
                      <p className="text-[10px] md:text-[11px] text-slate-400 font-medium leading-relaxed line-clamp-2 md:line-clamp-2 group-hover:text-slate-200 transition-colors duration-300">
                        {target.desc}
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-800/80 border-dashed flex items-center justify-between text-[9px] font-bold text-amber-400 font-mono tracking-wider">
                        <span className="text-slate-500">HEDEF METRİK:</span>
                        <span className="flex items-center gap-1 text-white bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 shadow-sm">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                          </span>
                          {target.benefit}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-8 py-4 md:py-6">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-900/95 to-slate-950 text-white rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden w-full transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.06),rgba(255,255,255,0))] pointer-events-none"></div>
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] bg-indigo-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                  Mutlu Güzellik Salonu Çözümleri{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    Yöneticileri
                  </span>
                </h2>
                <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Çözümümüzü kullanan salonların sahipleri ve yöneticileri ne
                  diyor?
                </p>
              </div>

              <div className="relative max-w-6xl mx-auto">
                <div className="overflow-hidden relative">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(-${currentTestimonial * 100}%)`,
                    }}
                  >
                    {testimonialChunks.map((chunk, slideIndex) => (
                      <div
                        key={slideIndex}
                        className="flex-shrink-0 w-full px-2"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          {chunk.map((testimonial, cardIndex) => (
                            <TestimonialCard
                              key={cardIndex}
                              quote={testimonial.quote}
                              name={testimonial.name}
                              title={testimonial.title}
                              avatarUrl={testimonial.avatarUrl}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevTestimonial}
                  className="absolute top-1/2 -left-3 md:-left-12 transform -translate-y-1/2 bg-slate-900/80 backdrop-blur-md rounded-full p-2.5 shadow-lg hover:bg-slate-800 border border-slate-800 hover:border-blue-500/30 transition-all z-10"
                  aria-label="Önceki yorum"
                >
                  <i className="fas fa-chevron-left text-blue-400 text-sm"></i>
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="absolute top-1/2 -right-3 md:-right-12 transform -translate-y-1/2 bg-slate-900/80 backdrop-blur-md rounded-full p-2.5 shadow-lg hover:bg-slate-800 border border-slate-800 hover:border-blue-500/30 transition-all z-10"
                  aria-label="Sonraki yorum"
                >
                  <i className="fas fa-chevron-right text-blue-400 text-sm"></i>
                </button>

                {/* Dot Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonialChunks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === index ? "bg-blue-400 w-5" : "bg-slate-700 hover:bg-slate-500"}`}
                      aria-label={`Yorum sayfası ${index + 1}'e git`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section
          className="container mx-auto px-8 py-4 md:py-6"
          id="projelerimiz-partners-section"
        >
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-900/95 to-slate-950 text-white rounded-3xl p-5 md:p-6 border border-slate-800 shadow-2xl relative overflow-hidden w-full transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.04),rgba(255,255,255,0))] pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-slate-800"></span>
                ENTEGRASYON VE İŞ ORTAKLARIMIZ
                <span className="h-px w-8 bg-slate-800"></span>
              </h3>
              <div
                className="scroller w-full overflow-hidden relative"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
                }}
              >
                <div className="flex w-max animate-scroll">
                  {[...partners, ...partners].map((partner, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 mx-8 flex items-center h-12"
                      title={partner.name}
                    >
                      <img
                        src={partner.logoUrl}
                        alt={partner.name}
                        className="max-h-6 md:max-h-8 object-contain filter grayscale brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="container mx-auto px-8 py-4 md:py-6"
          id="projelerimiz-faq-section"
        >
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-900/95 to-slate-950 text-white rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden w-full transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)]">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.06),rgba(255,255,255,0))] pointer-events-none"></div>
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] bg-indigo-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                  Sıkça Sorulan{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                    Sorular
                  </span>
                </h2>
                <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Aklınızdaki soruların cevaplarını burada bulabilirsiniz.
                </p>
              </div>
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-x-8 gap-y-4">
                <div className="space-y-3">
                  {faqs.slice(0, 5).map((faq, index) => (
                    <FAQItem
                      key={index}
                      faq={faq}
                      isOpen={openFaqIndex === index}
                      onClick={() => handleFaqClick(index)}
                    />
                  ))}
                </div>
                <div className="space-y-3">
                  {faqs.slice(5, 10).map((faq, index) => {
                    const globalIndex = index + 5;
                    return (
                      <FAQItem
                        key={globalIndex}
                        faq={faq}
                        isOpen={openFaqIndex === globalIndex}
                        onClick={() => handleFaqClick(globalIndex)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="container mx-auto px-8 py-4 md:py-6"
          id="projelerimiz-cta-section"
        >
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-900/95 to-slate-950 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-2xl relative overflow-hidden w-full transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.05)] text-center">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(59,130,246,0.05),rgba(255,255,255,0))] pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
                İşletmenizin Dijital Dönüşümüne{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Bugün Başlayın!
                </span>
              </h2>
              <p className="max-w-2xl mx-auto mb-6 text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
                Uzman ekibimizle görüşerek salonunuzun ihtiyaçlarına özel bir
                demo talep edin ve yapay zekanın gücünü ilk elden deneyimleyin.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-sm sm:max-w-none mx-auto">
                <Link
                  to="/kurumsal"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-slate-950 font-black py-2.5 px-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 text-sm w-full sm:w-auto border border-blue-400/30 shadow-blue-500/10 ring-4 ring-blue-500/5"
                >
                  <span>Ücretsiz Demo Talep Et</span>
                  <i className="fas fa-arrow-right text-xs"></i>
                </Link>
                <a
                  href="https://www.mortanas.com/mortanasguzellik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-950/40 backdrop-blur-md border border-slate-800 hover:border-slate-700 hover:bg-slate-900/60 text-slate-200 font-extrabold py-2.5 px-6 rounded-2xl transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 text-sm w-full sm:w-auto"
                >
                  <span>Canlı Demo Sitesini Gör</span>
                  <i className="fas fa-external-link-alt text-[10px] text-slate-400"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuzellikSalonuCozumlerimizPage;
