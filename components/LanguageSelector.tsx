import React, { useEffect, useState } from "react";

const FLAGS = [
  { code: "tr", flagCode: "tr", label: "Türkçe" },
  { code: "en", flagCode: "gb", label: "English" },
  { code: "es", flagCode: "es", label: "Español" },
  { code: "ar", flagCode: "sa", label: "العربية" },
  { code: "fr", flagCode: "fr", label: "Français" },
  { code: "pl", flagCode: "pl", label: "Polski" },
];

const COUNTRY_TO_LANG: Record<string, string> = {
  US: "en",
  GB: "en",
  CA: "en",
  AU: "en",
  ES: "es",
  MX: "es",
  AR: "es",
  CO: "es",
  SA: "ar",
  AE: "ar",
  EG: "ar",
  QA: "ar",
  KW: "ar",
  BH: "ar",
  OM: "ar",
  MA: "ar",
  DZ: "ar",
  TN: "ar",
  IQ: "ar",
  JO: "ar",
  LB: "ar",
  FR: "fr",
  BE: "fr",
  CH: "fr",
  CI: "fr",
  SN: "fr",
  PL: "pl",
  TR: "tr",
};

const LanguageSelector: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<string>("tr");

  useEffect(() => {
    // Detect current language from googtrans cookie
    const match = document.cookie.match(/(?:^| )googtrans=([^;]+)/);
    if (match) {
      const parts = match[1].split("/");
      if (parts.length > 2) {
        setCurrentLang(parts[2]);
      }
    }

    // Auto-translate based on IP (only run once)
    const runAutoTranslate = async () => {
      if (
        !localStorage.getItem("lang_detected") &&
        !document.cookie.includes("googtrans=")
      ) {
        try {
          const res = await fetch("https://get.geojs.io/v1/ip/country.json");
          if (res.ok) {
            const data = await res.json();
            const countryCode = data.country;
            const langCode = COUNTRY_TO_LANG[countryCode] || "en"; // Default to English if not TR and not in list

            if (langCode !== "tr") {
              // Set googtrans cookie and reload
              setLanguage(langCode);
            }
          }
        } catch (error) {
          console.error("Auto detect language failed:", error);
        } finally {
          localStorage.setItem("lang_detected", "1");
        }
      }
    };

    runAutoTranslate();
  }, []);

  const setLanguage = (langCode: string, auto = false) => {
    setCurrentLang(langCode);

    if (langCode === "tr") {
      // Clear cookies to revert to original TR
      const host = window.location.hostname;
      const domains = [
        host,
        `.${host}`,
        "",
        host.split(".").slice(-2).join("."),
        `.${host.split(".").slice(-2).join(".")}`,
      ];

      domains.forEach((d) => {
        const domainStr = d ? `; domain=${d}` : "";
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainStr}`;
        document.cookie = `googtrans=/tr/tr; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainStr}`; // some implementations use this
      });

      // Try to reset via combo box first
      const translateCombo = document.querySelector(
        ".goog-te-combo",
      ) as HTMLSelectElement | null;
      if (translateCombo) {
        // Reset to original language in the combo box
        translateCombo.value = "tr";
        translateCombo.dispatchEvent(new Event("change"));

        setTimeout(() => {
          translateCombo.value = "";
          translateCombo.dispatchEvent(new Event("change"));
        }, 100);
      }

      // We will reload to ensure it's completely cleared if the combo trick doesn't work perfectly
      setTimeout(() => {
        window.location.reload();
      }, 300);
      return;
    }

    // Set cookie for other languages
    const rootDomain = window.location.hostname.split(".").slice(-2).join(".");
    document.cookie = `googtrans=/tr/${langCode}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/tr/${langCode}; path=/; domain=.${window.location.hostname}`;
    document.cookie = `googtrans=/tr/${langCode}; path=/; domain=.${rootDomain}`;
    document.cookie = `googtrans=/tr/${langCode}; path=/`;

    const translateCombo = document.querySelector(
      ".goog-te-combo",
    ) as HTMLSelectElement | null;
    if (translateCombo) {
      translateCombo.value = langCode;
      translateCombo.dispatchEvent(new Event("change"));

      if (auto) {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center space-x-1.5 bg-slate-50 border border-slate-100 rounded-full p-1 shadow-inner backdrop-blur-sm">
      {FLAGS.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`relative group flex items-center justify-center p-0.5 rounded-full transition-all duration-300 ${
            currentLang === lang.code
              ? "bg-white shadow-md border border-slate-200/60 scale-115 ring-2 ring-blue-500/10 z-10"
              : "opacity-55 hover:opacity-100 hover:scale-115"
          }`}
          title={lang.label}
         >
          <img
            src={`https://flagcdn.com/w40/${lang.flagCode}.png`}
            alt={lang.label}
            className="w-5 h-5 md:w-5.5 md:h-5.5 rounded-full object-cover shadow-inner border border-slate-200/35 group-hover:border-slate-300/60"
            referrerPolicy="no-referrer"
          />
          {/* Custom elegant tooltip */}
          <span className="pointer-events-none absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 border border-white/5">
            {lang.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
