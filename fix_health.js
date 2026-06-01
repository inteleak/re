import fs from 'fs';

let content = fs.readFileSync('pages/OtelProjelerimizPage.tsx', 'utf8');

// Do simple string replacements for safe things
content = content.replace(/OtelCozumlerimizPage/g, "SaglikCozumlerimizPage");
content = content.replace(/OtelProjelerimizPage/g, "SaglikCozumlerimizPage");
content = content.replace(/Otelinizin Dijital Dönüşümüne/g, "Kliniğinizin Dijital Dönüşümüne");
content = content.replace(/OTEL ÇÖZÜMLERİ/g, "SAĞLIK ÇÖZÜMLERİ");
content = content.replace(/Otel/g, "Klinik");
content = content.replace(/otel/g, "klinik");
content = content.replace(/OTEL/g, "KLİNİK");

// Need to replace misafir -> hasta
content = content.replace(/Misafir/g, "Hasta");
content = content.replace(/misafir/g, "hasta");
content = content.replace(/MİSAFİR/g, "HASTA");
content = content.replace(/hastaler/g, "hastalar");
content = content.replace(/Hastaler/g, "Hastalar");

const wordReplacements = {
  "rezervasyon": "randevu",
  "Rezervasyon": "Randevu",
  "Oda Sayısı": "Klinik Kapasitesi",
  "Oda": "Muayene",
  "oda": "muayene",
  "odası": "muayene odası",
  "odalar": "muayene odaları",
  "OTA": "Acente",
  "PMS": "HBYS",
  "Check-in": "Hasta Kayıt",
  "check-in": "hasta kayıt",
  "check-out": "hasta çıkış",
  "Tatil Köyleri": "Tıp Merkezleri",
  "Zincirler": "Zincir Hastaneler",
  "Butik": "Poliklinik",
  "Spa": "Estetik Merkezi",
  "Termal": "Fizik Tedavi",
  "Kanal Yöneticisi": "Takvim Yöneticisi",
  "kanal yöneticisi": "takvim yöneticisi",
  "Resepsiyon": "Kayıt Bankosu",
  "resepsiyon": "kayıt bankosu",
  "Konsiyerj": "Hasta Danışmanı",
  "konsiyerj": "hasta danışmanı",
  "Kat hizmetleri": "Klinik temizlik",
  "kat hizmetleri": "klinik temizlik",
  "Konaklama": "Tedavi",
  "konaklama": "tedavi",
  "Tesis": "Klinik",
  "tesis": "klinik",
  "Mülk": "Klinik",
  "mülk": "klinik",
  "Gelir yönetimi": "Kapasite yönetimi",
  "Gelir Yönetimi": "Kapasite Yönetimi",
  "Doluluk": "Randevu Doluluğu",
  "doluluk": "randevu doluluğu",
  "RevPAR": "Günlük Hasta Kapasitesi",
  "Upsell": "Ek Tetkik",
  "Minibar": "Sarf Malzemesi",
  "minibar": "sarf malzemesi",
  "Restoran": "Laboratuvar",
  "restoran": "laboratuvar",
  "Tatil": "Şifa",
  "tatil": "şifa",
};

for (const [key, value] of Object.entries(wordReplacements)) {
  const regex = new RegExp("\\b" + key + "\\b", 'g');
  // Avoid replacing code variables by only replacing in specific blocks or ensuring no code breakages, 
  // but \b usually avoids breaking embedded words. E.g., `rooms` will not match `Room`.
  // Actually, we are only replacing Turkish text and some common terms.
  content = content.replace(regex, value);
}

// Special cases
content = content.replace(/fa-hotel/g, "fa-hospital");

fs.writeFileSync('pages/SaglikCozumlerimizPage.tsx', content);
console.log('Fixed health script run.');
