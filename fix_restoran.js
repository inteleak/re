import fs from 'fs';

// 1. DIALOGUE COMPONENT
let comp = fs.readFileSync("components/EcommercePhoneDialogueSection.tsx", "utf8");

comp = comp.replace(/EcommercePhoneDialogueSection/g, "RestaurantPhoneDialogueSection");
comp = comp.replace(/E-Ticaret Çözümleri/g, "Restoran Çözümleri");
comp = comp.replace(/E-Ticaret/g, "Restoran").replace(/e-ticaret/g, "restoran").replace(/E-TİCARET/g, "RESTORAN");

comp = comp.replace(
  /'Merhaba! Mortanas AI E-Ticaret Asistanına hoş geldiniz\. 🛍️ Size nasıl yardımcı olabilirim\?'/,
  `'Merhaba! Mortanas AI Restoran Asistanına hoş geldiniz. 🍽️ Size nasıl yardımcı olabilirim?'`
);

comp = comp.replace(
  /'Merhabalar, Nike Air Force 1 beyaz renk 42 numara stoğunuzda var mı\?'/,
  `'Merhabalar, bu akşam saat 20:00 için 4 kişilik rezervasyon yaptırmak istiyorum, yeriniz var mı?'`
);

comp = comp.replace(
  /'Hemen kontrol ediyorum\.\.\. 🔍 Evet stoklarımızda mevcut! Şu an sepette %15 indirimle 3\.400 TL\. Siparişinizi oluşturmamı ister misiniz\?'/,
  `'Hemen kontrol ediyorum... 🔍 Evet, saat 20:00 için cam kenarı masamız müsait! İsterseniz hemen rezervasyonunuzu onaylayabilirim.'`
);

comp = comp.replace(
  /"Siparişim ne zaman kargolanır\? İade şartlarınız neler\?"/,
  `"Otoparkınız veya vale hizmetiniz var mı? Menünüzde glutensiz seçenekler bulunuyor mu?"`
);

comp = comp.replace(
  /"Siparişiniz 24 saat içinde kargolanmaktadır\. 📦 14 gün koşulsuz iade hakkınız bulunuyor\."/,
  `"Evet, restoranımızın önünde valemiz mevcuttur. 🚘 Ayrıca menümüzde glutensiz ve vegan birçok özel seçeneğimiz bulunuyor."`
);

comp = comp.replace(
  /'Harika, o zaman siparişimi tamamlayalım lütfen\.'/g,
  `'Harika, o zaman rezervasyonumu tamamlayalım lütfen.'`
);

comp = comp.replace(
  /'Talebiniz alındı! 🎉 Adınıza siparişiniz sepette oluşturuldu ve güvenli ödeme bağlantısı WhatsApp iletildi\. İyi alışverişler! 🛒'/g,
  `'Talebiniz alındı! 🎉 Adınıza rezervasyonunuz oluşturuldu ve onay bağlantısı WhatsApp üzerinden iletildi. Şimdiden afiyet olsun! 🍷'`
);

// Dialogue replacements
comp = comp.replace(/müşteri/g, "misafir");
comp = comp.replace(/Müşteri/g, "Misafir");
comp = comp.replace(/Müşterinin/g, "Misafirin");
comp = comp.replace(/müşterilere/g, "misafirlere");
comp = comp.replace(/Müşterilere/g, "Misafirlere");
comp = comp.replace(/mağazanızın/g, "işletmenizin");
comp = comp.replace(/sitenizi/g, "restoranınızı");
comp = comp.replace(/sitenizde/g, "restoranınızın web sitesinde");
comp = comp.replace(/mağazanız/g, "restoranınız");
comp = comp.replace(/siparişinizi/g, "rezervasyonunuzu");
comp = comp.replace(/Siparişinizi/g, "Rezervasyonunuzu");
comp = comp.replace(/sipariş/g, "rezervasyon");
comp = comp.replace(/Sipariş/g, "Rezervasyon");
comp = comp.replace(/sepete ürün ekleyip bekleyen/g, "menünüzü inceleyen");
comp = comp.replace(/terk edilen sepetleri/g, "kararsız ziyaretçileri");
comp = comp.replace(/gizli indirim kodları/g, "şefin özel ikramları");
comp = comp.replace(/kombin önerileri/g, "şarap eşleşmeleri");

// Write component
fs.writeFileSync("components/RestaurantPhoneDialogueSection.tsx", comp);


// 2. PAGE
let page = fs.readFileSync("pages/ETicaretCozumlerimizPage.tsx", "utf8");

page = page.replace(/ETicaretCozumlerimizPage/g, "RestoranCozumlerimizPage");
page = page.replace(/EcommercePhoneDialogueSection/g, "RestaurantPhoneDialogueSection");
page = page.replace(/E-TİCARET ÇÖZÜMLERİ/g, "RESTORAN ÇÖZÜMLERİ");
page = page.replace(/E-Ticaret Çözümleri/g, "Restoran Çözümleri");
page = page.replace(/E-Ticaret/g, "Restoran Çözümleri");

let replacements = {
    "müşteri": "misafir", "Müşteri": "Misafir", "MÜŞTERİ": "MİSAFİR",
    "mağaza": "restoran", "Mağaza": "Restoran", "Mağazası": "Restoranı", "mağazası": "restoranı",
    "mağazanızı": "restoranınızı", "Mağazanızı": "Restoranınızı", "mağazanıza": "restoranınıza",
    "satış": "rezervasyon", "Satış": "Rezervasyon", 
    "Sipariş": "Sipariş/Rezervasyon", "sipariş": "sipariş/rezervasyon", 
    "ürün": "yemek", "Ürün": "Yemek", "ürünler": "lezzetler", "Ürünler": "Lezzetler",
    "E-Ticaret": "Restoran", "e-ticaret": "restoran", "E-TİCARET": "RESTORAN",
    "sepete": "masaya", "Kargo": "Paket Servis", "kargo": "paket servis", "indirim kodu": "ikram",
    "sepet tutarı": "masa hesabı", "Sepet Tutarı": "Masa Hesabı",
    "Global Markalar": "Zincir Restoranlar", "Butik İşletmeler": "Butik Kafeler",
    "Zincir Mağazalar": "Restoran Zincirleri", "kombin": "menü", "Kombin": "Menü",
    // Icons
    "fa-shopping-cart": "fa-utensils", "fa-store": "fa-coffee", "fa-box": "fa-pizza-slice", "fa-percent": "fa-wine-glass-alt",
    "Markanızın Dijital Dönüşümüne": "İşletmenizin Dijital Dönüşümüne",
    "Pazaryeri Entegrasyonu": "Yemek Platformu Entegrasyonu"
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  page = page.replace(regex, value);
}

// Grammer and Context Fixes
page = page.replace(/misafirlere/g, "misafirlere");
page = page.replace(/misafirye/g, "misafire");
page = page.replace(/misafiri/g, "misafiri");
page = page.replace(/misafiryi/g, "misafiri");
page = page.replace(/misafirlera/g, "misafirlere");
page = page.replace(/popüler ERP ve stok yönetimi yazılımlarıyla/g, "popüler POS ve restoran otomasyon programlarıyla");
page = page.replace(/depo/g, "mutfak");
page = page.replace(/Depo/g, "Mutfak");
page = page.replace(/stok/g, "malzeme");
page = page.replace(/Stok/g, "Malzeme");
page = page.replace(/Restoran Çözümleri Çözümleri/g, "Restoran Çözümleri");

// Images - Let's use some restaurant/food ones
const imageReplacements = [
  ['https://cdn.pixabay.com/video/2019/11/17/29168-372990977_large.mp4', 'https://cdn.pixabay.com/video/2020/02/10/32049-389599587_large.mp4'], 
  ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'],
  ['https://cdn.pixabay.com/video/2022/10/24/136323-765039396_large.mp4', 'https://cdn.pixabay.com/video/2019/10/16/27914-366579895_large.mp4'],
  ['https://images.unsplash.com/photo-1472851294608-062f824d29cc', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'],
  ['https://images.unsplash.com/photo-1512406325990-2bdbe7e9d7bd', 'https://images.unsplash.com/photo-1559339352-11d035aa65de'],
  ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f', 'https://images.unsplash.com/photo-1555396273-367dd4610115'],
];

for(const [oldStr, newStr] of imageReplacements) {
    page = page.replace(new RegExp(oldStr, 'g'), newStr);
}

fs.writeFileSync("pages/RestoranCozumlerimizPage.tsx", page);

