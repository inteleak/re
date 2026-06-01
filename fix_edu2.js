import fs from "fs";

let content = fs.readFileSync("components/EducationalPhoneDialogueSection.tsx", "utf8");

content = content.replace(
  /'Merhaba! Mortanas AI Eğitim Asistanına hoş geldiniz. 🏥 Size nasıl yardımcı olabilirim\?'/,
  `'Merhaba! Mortanas AI Eğitim Asistanına hoş geldiniz. 🎓 Size nasıl yardımcı olabilirim?'`
);

content = content.replace(
  /"Cuma günü için dermatoloji uzmanı Dr. Ayşe Hanım'dan kayıt alabilir miyim\?"/,
  `'Merhabalar, hafta sonu İngilizce A2 seviyesi için boş kontenjanınız var mı?'`
);

content = content.replace(
  /"Hemen kontrol ediyorum... 🔍 Cuma günü saat 14:00'te Dr. Ayşe Hanım'ın kayıtsu müsait! Ders ücreti 1.500 TL. Kayıtnuzu onaylamamı ister misiniz\?"/,
  `'Hemen kontrol ediyorum... 🔍 Cumartesi sabah 10:00 ve Pazar 14:00 sınıflarımızda boş yerimiz mevcut! Aylık kayıt ücreti 1.500 TL. Ön kaydınızı oluşturmamı ister misiniz?'`
);

content = content.replace(
  /'Harika, o zaman kayıtumu tamamlayalım lütfen\.'/g,
  `'Harika, o zaman kaydımı tamamlayalım lütfen.'`
);

content = content.replace(
  /'Talebiniz alındı! 🎉 Adınıza kayıtnuz oluşturuldu ve onay bağlantısı WhatsApp üzerinden iletildi. Başarılar dileriz! 🩺'/g,
  `'Talebiniz alındı! 🎉 Adınıza ön kaydınız oluşturuldu ve onay bağlantısı WhatsApp üzerinden iletildi. Eğitim hayatınızda başarılar dileriz! 🎓'`
);

content = content.replace(/Öğrencinın/g, "Öğrencinin");
content = content.replace(/öğrencilerinize unutulmaz/g, "öğrencilerinize unutulmaz");
content = content.replace(/1.500 TL/g, "2.500 TL");
content = content.replace(/kayıtunuzu/g, "kaydınızı");

fs.writeFileSync("components/EducationalPhoneDialogueSection.tsx", content);
console.log("Quotes replaced");
