import fs from 'fs';

let content = fs.readFileSync('pages/OtelProjelerimizPage.tsx', 'utf8');

// Do simple string replacements for safe things
content = content.replace(/OtelCozumlerimizPage/g, "EgitimCozumlerimizPage");
content = content.replace(/OtelProjelerimizPage/g, "EgitimCozumlerimizPage");
content = content.replace(/Otelinizin Dijital Dönüşümüne/g, "Kurumunuzun Dijital Dönüşümüne");
content = content.replace(/OTEL ÇÖZÜMLERİ/g, "EĞİTİM ÇÖZÜMLERİ");
content = content.replace(/Otel/g, "Eğitim");
content = content.replace(/otel/g, "eğitim");
content = content.replace(/OTEL/g, "EĞİTİM");
content = content.replace(/DualPhoneDialogueSection/g, "EducationalPhoneDialogueSection");

content = content.replace(/Misafir/g, "Öğrenci");
content = content.replace(/misafir/g, "öğrenci");
content = content.replace(/MİSAFİR/g, "ÖĞRENCİ");
content = content.replace(/öğrenciler/g, "öğrenciler");
content = content.replace(/Öğrenciler/g, "Öğrenciler");

const wordReplacements = {
  "rezervasyon": "kayıt",
  "Rezervasyon": "Kayıt",
  "Oda Sayısı": "Öğrenci Kapasitesi",
  "Oda": "Sınıf",
  "oda": "sınıf",
  "odası": "sınıfı",
  "odalar": "sınıflar",
  "OTA": "Acente",
  "PMS": "ÖBS",
  "Check-in": "Öğrenci Kayıt",
  "check-in": "öğrenci kayıt",
  "check-out": "mezuniyet",
  "Tatil Köyleri": "Üniversiteler",
  "Zincirler": "Zincir Okullar",
  "Butik": "Butik Okullar",
  "Spa": "Etüt",
  "Termal": "Kurs",
  "Kanal Yöneticisi": "Ders Programı",
  "kanal yöneticisi": "ders programı",
  "Resepsiyon": "Danışma",
  "resepsiyon": "danışma",
  "Konsiyerj": "Rehberlik",
  "konsiyerj": "rehberlik",
  "Kat hizmetleri": "Temizlik",
  "kat hizmetleri": "temizlik",
  "Konaklama": "Eğitim",
  "konaklama": "eğitim",
  "Tesis": "Kurum",
  "tesis": "kurum",
  "Mülk": "Kampüs",
  "mülk": "kampüs",
  "Gelir yönetimi": "Kapasite Yönetimi",
  "Gelir Yönetimi": "Kapasite Yönetimi",
  "Doluluk": "Kontenjan",
  "doluluk": "kontenjan",
  "RevPAR": "Öğrenci Başı Gelir",
  "Upsell": "Ek Program",
  "Minibar": "Kantin",
  "minibar": "kantin",
  "Restoran": "Yemekhane",
  "restoran": "yemekhane",
  "Tatil": "Dönem",
  "tatil": "dönem",
};

for (const [key, value] of Object.entries(wordReplacements)) {
  const regex = new RegExp("\\b" + key + "\\b", 'g');
  content = content.replace(regex, value);
}

// Grammer extensions
content = content.replace(/öğrencie/g, "öğrenciye");
content = content.replace(/öğrencilera/g, "öğrencilere");
content = content.replace(/öğrencileri/g, "öğrencileri");
content = content.replace(/öğrencilerinize/g, "öğrencilerinize");
content = content.replace(/öğrenciiniz/g, "öğrencileriniz");
content = content.replace(/öğrenciniz/g, "öğrencileriniz");
content = content.replace(/öğrencilerimizle/g, "öğrencilerimizle");
content = content.replace(/öğrencilerin/g, "öğrencilerin");
content = content.replace(/Öğrencilerin/g, "Öğrencilerin");
content = content.replace(/fa-concierge-bell/g, "fa-graduation-cap");
content = content.replace(/fa-hotel/g, "fa-school");
content = content.replace(/fa-umbrella-beach/g, "fa-book");
content = content.replace(/fa-key/g, "fa-chalkboard-teacher");

content = content.replace(/Eğitimcilikte/g, "Eğitim Sektöründe");
content = content.replace(/eğitimcilikte/g, "eğitim sektöründe");
content = content.replace(/sınıf manzarası/g, "burs imkanı");
content = content.replace(/çevre gezi önerileri/g, "kulüp etkinlikleri önerileri");
content = content.replace(/Hastalare/g, "Hastalara");
content = content.replace(/öğrencilera/g, "öğrencilere");
content = content.replace(/Öğrencilera/g, "Öğrencilere");
content = content.replace(/Öğrencie/g, "Öğrenciye");
content = content.replace(/kurumus/g, "kurumunuz");
content = content.replace(/kurumunuzu/g, "kurumunuzu");


// Images
const replacements = [
  // Intro video
  ['https://cdn.pixabay.com/video/2018/06/25/16933-277180295_large.mp4', 'https://media.istockphoto.com/id/1498114389/tr/video/dna-with-ai-animation.mp4?s=mp4-640x640-is&k=20&c=3iEIf5zntfIu4gGvIot3u18D1Y9s62qf94oR_wVpT4I='],
  ['https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://cdn.pixabay.com/video/2021/08/17/85264-589578135_large.mp4', 'https://cdn.pixabay.com/video/2020/05/11/38743-424160459_large.mp4'],
  ['https://images.unsplash.com/photo-1551882547-ff40c0d509af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&q=80&w=2000&auto=format&fit=crop'],
  ['https://images.unsplash.com/photo-1522798514397-e04e123610e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],

  // Ideal For images (matching sizes)
  ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80'],
];

for(const [oldStr, newStr] of replacements) {
    content = content.replace(oldStr, newStr);
}


fs.writeFileSync('pages/EgitimCozumlerimizPage.tsx', content);
console.log('Fixed edu script run.');
