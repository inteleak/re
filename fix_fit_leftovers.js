import fs from "fs";

let page = fs.readFileSync("pages/FitnessCozumlerimizPage.tsx", "utf8");

let replacements = {
    "misafirlerimizle": "üyelerimizle",
    "misafirlerimize": "üyelerimize",
    "Misafirlerimiz": "Üyelerimiz",
    "Misafirlerinize": "Üyelerinize",
    "misafirleri": "üyeleri",
    "misafirlerinizi": "üyelerinizi",
    "Misafirlere": "Üyelere",
    "misafir": "üye",
    "Misafir": "Üye",
    
    "Hrestoran": "Fitness",
    "hrestoran": "fitness",
    "restoranleri": "salonları",
    "restoranlerin": "salonların",
    "restoranlere": "salonlara",
    "restoranler": "salonlar",
    "restorani": "salonu",
    "restoraniniz": "salonunuz",
    "restoraninizin": "salonunuzun",
    "restoraninizle": "salonunuzla",
    "restorancilik": "fitness",
    "Restoran Çözümleriinizin": "Spor Salonunuzun",
    "restorin": "salonun",

    "sipariş/online eğitim": "üyelik/kayıt",
    "kampanya köyleri": "spor kompleksleri",
    "Booking, Expedia, Airbnb vb.": "Mindbody, ClassPass vb.",
    "HrestoranRunner, SiteMinder": "Mindbody, GymMaster",
    "kanal yöneticileriyle": "salon yönetim yazılımlarıyla",
    "/mortanasrestoran": "/mortanasfitness",

    "İstanbul Business Fitness": "FitLife Sports Club",
    "online eğitim, hediye paketi veya uzatılmış garanti": "PT hizmeti, supplement paketi veya diyetisyen danışmanlığı",
    "etüt randevuları ve kulüp sosyal etkinlik önerileri": "grup dersleri ve özel etkinlik önerileri",
    "ek etüt saatleri ve kurs hizmetleri": "özel ders saatleri ve pt hizmetleri",
    
    "100\\+ Spor Salonu \\& Zincir Restoranlar": "Popüler Spor Salonları",
    "spor salonu sektöründe üye deneyimi": "fitness sektöründe üye deneyimi",
    "video spor salonu materyalleri": "video eğitim materyalleri"
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'gi');
  page = page.replace(regex, value);
}

// Ensure correct case for specific ones
page = page.replace(/FİTNESS/g, "FİTNESS");
page = page.replace(/FİTness/g, "Fitness");
page = page.replace(/Spor Salonuda/g, "Spor Salonunda");
page = page.replace(/spor salonuda/g, "spor salonunda");
page = page.replace(/spor salonuyı/g, "spor salonunu");
page = page.replace(/spor salonuya/g, "spor salonuna");

fs.writeFileSync("pages/FitnessCozumlerimizPage.tsx", page);
