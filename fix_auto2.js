import fs from 'fs';

let content = fs.readFileSync('pages/OtomotivCozumlerimizPage.tsx', 'utf8');

const fixes = {
    // E-commerce/Education leftovers
    "sipariş": "satış",
    "Sipariş": "Satış",
    "müşteri": "müşteri", // this is fine for automotive
    "Müşteri": "Müşteri", // this is fine for automotive
    "okul": "bayi",
    "sepet": "teklif",
    "ürün": "araç",
    "kargo": "kredi",
    "indirim": "finansman",
    "satış": "satış",

    "HotomotivRunner": "HotelRunner", // fixing hotel remnants
    "Hotomotiv": "Otomotiv", // fixing hotomotiv
    "otomotivler düzenliyoruz": "eğitimler düzenliyoruz",
    "video otomotiv materyalleri": "video eğitim materyalleri",

    "Otomotiv başlangıç detayları, deneme sınavı tarihleri ve etüt randevuları müşterilere otomatik olarak hatırlatılır.":
    "Araç teslimat detayları, test sürüşü tarihleri ve periyodik bakım randevuları müşterilere otomatik olarak hatırlatılır.",

    "bayi tiplerini": "araç tiplerine",

    "ürün tiplerine göre ek premium kredi, hediye paketi veya uzatılmış garanti":
    "araç tiplerine göre ek aksesuar, seramik kaplama veya uzatılmış garanti",
    
    "etüt randevuları ve kulüp sosyal etkinlik önerileri":
    "test sürüşü randevuları ve yeni kampanya önerileri",
    
    "Otomotiv içi aktiviteler, çevre gezileri, popüler turistik noktalar ve ulaşım imkanları":
    "Araç donanım paketleri, ödeme seçenekleri, finansman olanakları ve garanti imkanları",
    
    "ürün tiplerine": "araç modellerine"
};

for (const [key, value] of Object.entries(fixes)) {
    const regex = new RegExp(key, 'g');
    content = content.replace(regex, value);
}

// Ensure proper casing for replaced Hotomotiv
content = content.replace(/Istanbul Business Otomotiv/g, "Istanbul Business Otomotiv");
content = content.replace(/otomotivinizle/g, "bayinizle");
content = content.replace(/zincir otomotivlerin/g, "zincir bayilerin");
content = content.replace(/otomotiv performansını/g, "bayi performansını");
content = content.replace(/otomotiv gelirlerini/g, "bayi gelirlerini");
content = content.replace(/otomotiv süreci/g, "satış süreci");

fs.writeFileSync('pages/OtomotivCozumlerimizPage.tsx', content);
console.log('Automotive page cleaned up.');
