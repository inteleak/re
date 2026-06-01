import fs from 'fs';

let content = fs.readFileSync('pages/EgitimCozumlerimizPage.tsx', 'utf8');

// Do simple string replacements for safe things
content = content.replace(/EgitimCozumlerimizPage/g, "ETicaretCozumlerimizPage");
content = content.replace(/Kurumunuzun Dijital Dönüşümüne/g, "Markanızın Dijital Dönüşümüne");
content = content.replace(/EĞİTİM ÇÖZÜMLERİ/g, "E-TİCARET ÇÖZÜMLERİ");
content = content.replace(/Eğitim/g, "E-Ticaret");
content = content.replace(/eğitim/g, "e-ticaret");
content = content.replace(/EĞİTİM/g, "E-TİCARET");
content = content.replace(/EducationalPhoneDialogueSection/g, "EcommercePhoneDialogueSection");

content = content.replace(/Öğrenci/g, "Müşteri");
content = content.replace(/öğrenci/g, "müşteri");
content = content.replace(/ÖĞRENCİ/g, "MÜŞTERİ");
content = content.replace(/öğrenciler/g, "müşteriler");
content = content.replace(/Öğrenciler/g, "Müşteriler");

const wordReplacements = {
  "kayıt": "sipariş",
  "Kayıt": "Sipariş",
  "Öğrenci Kapasitesi": "Ortalama Sepet Tutarı",
  "Sınıf": "Mağaza",
  "sınıf": "mağaza",
  "sınıfı": "mağazası",
  "sınıflar": "ürünler",
  "Acente": "Pazaryeri",
  "ÖBS": "ERP",
  "Öğrenci Kayıt": "Satış",
  "öğrenci kayıt": "satış",
  "mezuniyet": "iade süreci",
  "Üniversiteler": "Global Markalar",
  "Zincir Okullar": "Zincir Mağazalar",
  "Butik Okullar": "Butik İşletmeler",
  "Etüt": "Destek",
  "Kurs": "Kargo",
  "Ders Programı": "Stok Yönetimi",
  "ders programı": "stok yönetimi",
  "Danışma": "Canlı Destek",
  "danışma": "canlı destek",
  "Rehberlik": "Satış Danışmanı",
  "rehberlik": "satış danışmanı",
  "Temizlik": "Depo",
  "temizlik": "depo",
  "Kurum": "Mağaza",
  "kurum": "mağaza",
  "Kampüs": "E-Ticaret",
  "kampüs": "e-ticaret",
  "Kapasite Yönetimi": "Stok Optimizasyonu",
  "Kontenjan": "Stok",
  "kontenjan": "stok",
  "Öğrenci Başı Gelir": "Müşteri Yaşam Boyu Değeri",
  "Ek Program": "Çapraz Satış",
  "Kantin": "Sepet",
  "kantin": "sepet",
  "Yemekhane": "Checkout",
  "yemekhane": "checkout",
  "Dönem": "Kampanya",
  "dönem": "kampanya",
};

for (const [key, value] of Object.entries(wordReplacements)) {
  const regex = new RegExp("\\b" + key + "\\b", 'g');
  content = content.replace(regex, value);
}

// Grammer extensions
content = content.replace(/müşteriye/g, "müşteriye");
content = content.replace(/müşterilere/g, "müşterilere");
content = content.replace(/müşterileri/g, "müşterileri");
content = content.replace(/müşterilerinize/g, "müşterilerinize");
content = content.replace(/müşterileriniz/g, "müşterileriniz");
content = content.replace(/müşterilerimizle/g, "müşterilerimizle");
content = content.replace(/müşterilerin/g, "müşterilerin");
content = content.replace(/Müşterilerin/g, "Müşterilerin");

content = content.replace(/fa-graduation-cap/g, "fa-shopping-cart");
content = content.replace(/fa-school/g, "fa-store");
content = content.replace(/fa-book/g, "fa-box-open");
content = content.replace(/fa-chalkboard-teacher/g, "fa-tags");

content = content.replace(/E-Ticaret Sektöründe/g, "E-Ticaret Sektöründe");
content = content.replace(/e-ticaret sektöründe/g, "e-ticaret sektöründe");
content = content.replace(/burs imkanı/g, "indirim kodu");
content = content.replace(/kulüp etkinlikleri önerileri/g, "kişiselleştirilmiş ürün önerileri");
content = content.replace(/kurumunuz/g, "mağazanız");
content = content.replace(/mağazanızu/g, "mağazanızı");


// Images
const replacements = [
  // Intro video
  ['https://media.istockphoto.com/id/1498114389/tr/video/dna-with-ai-animation.mp4?s=mp4-640x640-is&k=20&c=3iEIf5zntfIu4gGvIot3u18D1Y9s62qf94oR_wVpT4I=', 'https://cdn.pixabay.com/video/2019/11/17/29168-372990977_large.mp4'],
  ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://cdn.pixabay.com/video/2020/05/11/38743-424160459_large.mp4', 'https://cdn.pixabay.com/video/2022/10/24/136323-765039396_large.mp4'],
  ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&q=80&w=2000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1512406325990-2bdbe7e9d7bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],

  // Ideal For images (matching sizes)
  ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1512406325990-2bdbe7e9d7bd?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1512406325990-2bdbe7e9d7bd?auto=format&fit=crop&w=600&q=80'],
];

for(const [oldStr, newStr] of replacements) {
    content = content.replace(oldStr, newStr);
}


fs.writeFileSync('pages/ETicaretCozumlerimizPage.tsx', content);
console.log('Fixed script run.');
