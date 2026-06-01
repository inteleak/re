import fs from 'fs';

let content = fs.readFileSync('pages/SaglikCozumlerimizPage.tsx', 'utf8');

const replacements = {
  "rezervasyon": "randevu",
  "Rezervasyon": "Randevu",
  "hastaler": "hastalar",
  "Hastaler": "Hastalar",
  "Oda Sayısı": "Klinik Kapasitesi",
  "Klinik Oda Sayısı": "Klinik Kapasitesi",
  "Oda": "Muayene",
  "oda ": "muayene ",
  "odası": "muayene odası",
  "odalar": "muayene odaları",
  "ota": "acente",
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
  "upsell": "ek tetkik",
  "Minibar": "Sarf Malzemesi",
  "minibar": "sarf malzemesi",
  "Restoran": "Laboratuvar",
  "restoran": "laboratuvar",
  "Booking": "Doktortakvimi",
  "Expedia": "Google Maps",
  "TripAdvisor": "Şikayetvar",
  "Airbnb": "UzmanDoktor",
  "SiteMinder": "BulutKlinik",
  "ElektraWeb": "Evrim HBYS",
  "Oracle Opera HBYS": "Probel",
  "HklinikRunner": "Medin",
  "Tatil": "Şifa",
  "tatil": "şifa",
  "Acente": "Sağlık Turizmi",
  "Otel": "Klinik",
  "otel": "klinik"
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  content = content.replace(regex, value);
}

fs.writeFileSync('pages/SaglikCozumlerimizPage.tsx', content);
console.log('Update finished.');
