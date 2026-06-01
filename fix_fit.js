import fs from "fs";

// 1. DIALOGUE COMPONENT
let comp = fs.readFileSync("components/RestaurantPhoneDialogueSection.tsx", "utf8");

comp = comp.replace(/RestaurantPhoneDialogueSection/g, "FitnessPhoneDialogueSection");
comp = comp.replace(/Restoran Çözümleri/g, "Fitness Çözümleri");
comp = comp.replace(/Restoran/g, "Fitness").replace(/restoran/g, "fitness").replace(/RESTORAN/g, "FİTNESS");

comp = comp.replace(
  /'Merhaba! Mortanas AI Fitness Asistanına hoş geldiniz\. 🍽️ Size nasıl yardımcı olabilirim\?'/,
  `'Merhaba! Mortanas AI Fitness Asistanına hoş geldiniz. 💪 Size nasıl yardımcı olabilirim?'`
);

comp = comp.replace(
  /'Merhabalar, bu akşam saat 20:00 için 4 kişilik rezervasyon yaptırmak istiyorum, yeriniz var mı\?'/,
  `'Merhabalar, akşam 20:00'deki spinning dersinize katılmak istiyorum, boş yeriniz var mı?'`
);

comp = comp.replace(
  /'Hemen kontrol ediyorum\.\.\. 🔍 Evet, saat 20:00 için cam kenarı masamız müsait! İsterseniz hemen rezervasyonunuzu onaylayabilirim\.'/g,
  `'Hemen kontrol ediyorum... 🔍 Evet, spinning dersinde son 3 kişilik yerimiz kaldı! İsterseniz hemen kaydınızı oluşturabilirim.'`
);

comp = comp.replace(
  /"Otoparkınız veya vale hizmetiniz var mı\? Menünüzde glutensiz seçenekler bulunuyor mu\?"/g,
  `"Kişisel antrenör (PT) hizmetiniz var mı? Aylık üyelik ücretleri ne kadar?"`
);

comp = comp.replace(
  /"Evet, fitnessımızın önünde valemiz mevcuttur\. 🚘 Ayrıca menümüzde glutensiz ve vegan birçok özel seçeneğimiz bulunuyor\."/g,
  `"Evet, alanında uzman kişisel antrenörlerimiz (PT) bulunmaktadır. 🏋️‍♂️ Ayrıca özel beslenme danışmanlığı seçeneğimiz de bulunuyor."`
);

comp = comp.replace(
  /'Harika, o zaman rezervasyonumu tamamlayalım lütfen\.'/g,
  `'Harika, o zaman ders kaydımı tamamlayalım lütfen.'`
);

comp = comp.replace(
  /'Talebiniz alındı! 🎉 Adınıza rezervasyonunuz oluşturuldu ve onay bağlantısı WhatsApp üzerinden iletildi\. Şimdiden afiyet olsun! 🍷'/g,
  `'Talebiniz alındı! 🎉 Adınıza ders kaydınız oluşturuldu ve bilgilendirme WhatsApp üzerinden iletildi. İyi antrenmanlar! 💦'`
);

// Dialogue replacements
comp = comp.replace(/misafir/g, "üye");
comp = comp.replace(/Misafir/g, "Üye");
comp = comp.replace(/Misafirin/g, "Üyenin");
comp = comp.replace(/misafirlere/g, "üyelere");
comp = comp.replace(/Misafirlere/g, "Üyelere");
comp = comp.replace(/işletmenizin/g, "salonunuzun");
comp = comp.replace(/fitnessınızı/g, "salonunuzu");
comp = comp.replace(/fitnessınızın web sitesinde/g, "salonunuzun web sitesinde");
comp = comp.replace(/fitnessınız/g, "salonunuz");
comp = comp.replace(/rezervasyonunuzu/g, "kaydınızı");
comp = comp.replace(/Rezervasyonunuzu/g, "Kaydınızı");
comp = comp.replace(/menünüzü inceleyen/g, "programlarınızı inceleyen");
comp = comp.replace(/şefin özel ikramları/g, "ücretsiz deneme dersleri");
comp = comp.replace(/şarap eşleşmeleri/g, "beslenme programları");
comp = comp.replace(/menü içeriklerinden/g, "ders saatlerinden");

// Write component
fs.writeFileSync("components/FitnessPhoneDialogueSection.tsx", comp);


// 2. PAGE
let page = fs.readFileSync("pages/RestoranCozumlerimizPage.tsx", "utf8");

page = page.replace(/RestoranCozumlerimizPage/g, "FitnessCozumlerimizPage");
page = page.replace(/RestaurantPhoneDialogueSection/g, "FitnessPhoneDialogueSection");
page = page.replace(/RESTORAN ÇÖZÜMLERİ/g, "FİTNESS ÇÖZÜMLERİ");
page = page.replace(/Restoran Çözümleri/g, "Fitness Çözümleri");

let replacements = {
    "misafir": "üye", "Misafir": "Üye", "MİSAFİR": "ÜYE",
    "misafirler": "üyeler", "Misafirler": "Üyeler",
    "misafire": "üyeye", "Misafire": "Üyeye",
    "misafiri": "üyeyi", "Misafiri": "Üyeyi",
    "Restoran": "Spor Salonu", "restoran": "spor salonu", "RESTORAN": "SPOR SALONU",
    "Restoranı": "Spor Salonu", "restoranı": "spor salonu", 
    "restoranınızı": "salonunuzu", "Restoranınızı": "Salonunuzu", "restoranınıza": "salonunuza",
    "rezervasyon": "randevu", "Rezervasyon": "Randevu", 
    "rezervasyonları": "randevuları", "Rezervasyonları": "Randevuları",
    "Sipariş/Randevu": "Üyelik/Ders", "sipariş/randevu": "üyelik/ders", 
    "yemek": "antrenman", "Yemek": "Antrenman", "lezzetler": "programlar", "Lezzetler": "Programlar",
    "masaya": "salona", "Paket Servis": "Online Eğitim", "paket servis": "online eğitim", "ikram": "deneme dersi",
    "Masa Hesabı": "Aylık Üyelik", "masa hesabı": "aylık üyelik",
    "Zincir Spor Salonular": "Spor Salonu Zincirleri", "Butik Kafeler": "Butik Stüdyolar",
    "Spor Salonu Zincirleri": "Spor Salonu Zincirleri", "menü": "program", "Menü": "Program",
    "işletmenizin": "salonunuzun", "İşletmenizin": "Salonunuzun",
    // Icons
    "fa-utensils": "fa-dumbbell", "fa-coffee": "fa-running", "fa-pizza-slice": "fa-heartbeat", "fa-wine-glass-alt": "fa-fire",
    "Yemek Platformu": "Fitness Platformu",
    "mutfak": "salon", "Mutfak": "Salon",
    "malzeme": "ekipman", "Malzeme": "Ekipman",
    "malzemelerini": "ekipmanlarını"
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp("\\b" + key + "\\b", 'g');
  page = page.replace(regex, value);
}

// Grammer Fixes
page = page.replace(/spor salonuunuzun/g, "salonunuzun");
page = page.replace(/Spor salonunuz/g, "Spor salonunuz");
page = page.replace(/misafirlere/g, "üyelere");
page = page.replace(/misafirye/g, "üyeye");
page = page.replace(/üyeye/g, "üyeye");
page = page.replace(/misafiri/g, "üyeyi");
page = page.replace(/misafiryi/g, "üyeyi");
page = page.replace(/misafirlera/g, "üyelere");
page = page.replace(/Spor Salonuda/g, "Spor Salonunda");
page = page.replace(/spor salonuda/g, "spor salonunda");
page = page.replace(/popüler POS ve spor salonu otomasyon programlarıyla/g, "popüler CRM ve salon yönetim yazılımlarıyla");

// Fix some specific cases caused by word boundary replaces
page = page.replace(/spor salonu zincirleri/g, "spor salonu zincirleri");

// Additional fitness specific changes
page = page.replace(/masa türlerini/g, "ders programlarını");
page = page.replace(/çalışma saatleri ve özel program hizmetleri/g, "grup ders saatleri ve PT (kişisel antrenör) paketleri");
page = page.replace(/şeflerinizi/g, "eğitmenlerinizi");

// Images - Fitness
const imageReplacements = [
  ['https://cdn.pixabay.com/video/2020/02/10/32049-389599587_large.mp4', 'https://cdn.pixabay.com/video/2021/04/16/71337-537449553_large.mp4'],
  ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'],
  ['https://cdn.pixabay.com/video/2019/10/16/27914-366579895_large.mp4', 'https://cdn.pixabay.com/video/2016/08/22/4741-178550757_tiny.mp4'],
  ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0', 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b'],
  ['https://images.unsplash.com/photo-1559339352-11d035aa65de', 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f'],
  ['https://images.unsplash.com/photo-1555396273-367dd4610115', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438'],
];

for(const [oldStr, newStr] of imageReplacements) {
    page = page.replace(new RegExp(oldStr, 'g'), newStr);
}

fs.writeFileSync("pages/FitnessCozumlerimizPage.tsx", page);
