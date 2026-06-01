import fs from 'fs';

let content = fs.readFileSync('pages/ETicaretCozumlerimizPage.tsx', 'utf8');

// Do simple string replacements
content = content.replace(/ETicaretCozumlerimizPage/g, "OtomotivCozumlerimizPage");
content = content.replace(/Markanızın Dijital Dönüşümüne/g, "Bayinizin Dijital Dönüşümüne");
content = content.replace(/E-TİCARET ÇÖZÜMLERİ/g, "OTOMOTİV ÇÖZÜMLERİ");
content = content.replace(/E-Ticaret/g, "Otomotiv");
content = content.replace(/E-ticaret/g, "Otomotiv");
content = content.replace(/e-ticaret/g, "otomotiv");

content = content.replace(/EcommercePhoneDialogueSection/g, "AutomotivePhoneDialogueSection");

const wordReplacements = {
  "Ortalama Sepet Tutarı": "Araç Başı Karlılık",
  "Mağaza": "Bayi",
  "mağaza": "bayi",
  "mağazası": "bayisi",
  "mağazanıza": "bayinize",
  "mağazanızı": "bayinizi",
  "ürünler": "araçlar",
  "Ürünler": "Araçlar",
  "Pazaryeri": "Otomobil Portalı",
  "Satış": "Randevu",
  "satış": "randevu",
  "iade süreci": "servis süreci",
  "Global Markalar": "Global Üreticiler",
  "Zincir Mağazalar": "Otomotiv Grupları",
  "Butik İşletmeler": "Özel Servisler",
  "Destek": "Servis",
  "Kargo": "Test Sürüşü",
  "Stok Yönetimi": "Araç Envanteri",
  "stok yönetimi": "araç envanteri",
  "Canlı Destek": "Satış Danışmanı",
  "canlı destek": "satış danışmanı",
  "Depo": "Galeri",
  "depo": "galeri",
  "Stok Optimizasyonu": "Filo Optimizasyonu",
  "Stok": "Araç Stoğu",
  "stok": "araç stoğu",
  "Müşteri Yaşam Boyu Değeri": "Müşteri Yaşam Boyu Değeri",
  "Çapraz Randevu": "Ek Garanti/Aksesuar",
  "Sepet": "Teklif",
  "sepet": "teklif",
  "Checkout": "Satış Kapama",
  "checkout": "satış kapama",
  "Kampanya": "Lansman",
  "kampanya": "lansman",
  "Sipariş": "Randevu",
  "sipariş": "randevu"
};

for (const [key, value] of Object.entries(wordReplacements)) {
  const regex = new RegExp("\\b" + key + "\\b", 'g');
  content = content.replace(regex, value);
}

content = content.replace(/fa-shopping-cart/g, "fa-car");
content = content.replace(/fa-store/g, "fa-warehouse");
content = content.replace(/fa-box/g, "fa-tools");
content = content.replace(/fa-box-open/g, "fa-tools");
content = content.replace(/fa-percent/g, "fa-key");
content = content.replace(/fa-tags/g, "fa-key");

content = content.replace(/Otomotiv Sektöründe/g, "Otomotiv Sektöründe");
content = content.replace(/e-ticarette/g, "otomotivde");
content = content.replace(/E-Ticarette/g, "Otomotivde");
content = content.replace(/indirim kodu/g, "finansman teklifi");
content = content.replace(/kişiselleştirilmiş ürün önerileri/g, "kişiselleştirilmiş araç detayları");
content = content.replace(/premium randevu, hediye paketi veya uzatılmış garanti/g, "seramik kaplama, aksesuar veya uzatılmış garanti");

// Image updates
const replacements = [
  ['https://cdn.pixabay.com/video/2019/11/17/29168-372990977_large.mp4', 'https://cdn.pixabay.com/video/2021/08/17/85264-589578135_large.mp4'],
  ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://cdn.pixabay.com/video/2022/10/24/136323-765039396_large.mp4', 'https://cdn.pixabay.com/video/2016/09/21/5361-182390317_tiny.mp4'],
  ['https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://images.unsplash.com/photo-1512406325990-2bdbe7e9d7bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1620012253245-c529ce153d82?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],

  ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1512406325990-2bdbe7e9d7bd?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1620012253245-c529ce153d82?auto=format&fit=crop&w=600&q=80']
];

for(const [oldStr, newStr] of replacements) {
    content = content.replace(oldStr, newStr);
}


fs.writeFileSync('pages/OtomotivCozumlerimizPage.tsx', content);
console.log('Fixed auto script run.');
