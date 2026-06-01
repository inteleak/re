import fs from "fs";

let content = fs.readFileSync("components/HealthPhoneDialogueSection.tsx", "utf8");

content = content.replace(/HealthPhoneDialogueSection/g, "EducationalPhoneDialogueSection");
content = content.replace(/Klinik/g, "Eğitim");
content = content.replace(/klinik/g, "eğitim");
content = content.replace(/Sağlıklı günler/g, "Başarılar");
content = content.replace(/muayene/g, "ders");
content = content.replace(/Muayene/g, "Ders");
content = content.replace(/hastalar/g, "öğrenciler");
content = content.replace(/Hastalar/g, "Öğrenciler");
content = content.replace(/hasta/g, "öğrenci");
content = content.replace(/Hasta/g, "Öğrenci");
content = content.replace(/randevu/g, "kayıt");
content = content.replace(/Randevu/g, "Kayıt");
content = content.replace(/tetkik/g, "kurs");

// Update Dialogue content
content = content.replace(
  /"Cuma günü için dermatoloji uzmanı Dr\. Ayşe Hanım'dan randevu alabilir miyim\?"/,
  `"Merhabalar, hafta sonu İngilizce A2 seviyesi için boş kontenjanınız var mı?"`
);
content = content.replace(
  /"Hemen kontrol ediyorum... 🔍 Cuma günü saat 14:00'te Dr\. Ayşe Hanım'ın randevusu müsait! Ders ücreti 1\.500 TL\. Kayıtunuzu onaylamamı ister misiniz\?"/,
  `"Hemen kontrol ediyorum... 🔍 Cumartesi sabah 10:00 ve Pazar 14:00 sınıflarımızda boş yerimiz mevcut! Aylık kayıt ücreti 1.500 TL. Ön kaydınızı oluşturmamı ister misiniz?"`
);
content = content.replace(
  /'Kan tahlili sonuçlarımı aynı gün alabiliyor muyum\? Bir de biraz geç kalabilirim\.'/g,
  `"Ders materyallerini sisteme ne zaman yüklüyorsunuz? Derse devam zorunluluğu var mı?"`
);
content = content.replace(
  /"Evet! Tüm tahlil sonuçlarınız sistem üzerinden aynı gün e-Nabız'a aktarılmaktadır\. 🧪 Ayrıca mobil öğrenci kayıt yaparak bankodaki sırayı tamamen atlayabilirsiniz\."/,
  `"Ders materyalleriniz kayıt onayından hemen sonra Öğrenci Portalı üzerinden erişiminize açılmaktadır. 📚 MEB kuralları gereği %80 devam zorunluluğumuz bulunmaktadır."`
);
content = content.replace(
  /'Talebiniz alındı! 🎉 Adınıza randevunuz oluşturuldu ve onay bağlantısı WhatsApp üzerinden iletildi\. Başarılar dileriz! 🩺'/g,
  `"Talebiniz alındı! 🎉 Adınıza ön kaydınız oluşturuldu ve ödeme bağlantısı SMS ile iletildi. Eğitim hayatınızda başarılar dileriz! 🎓"`
);

// Diğer metinleri eğitim odaklı güncelle
content = content.replace(
  /"Öğrencinın tahlil sonuçlarından kayıt saatlerine, işlem detaylarından kurs kayıtlarına kadar tüm karmaşık sorularını eğitim politikanıza göre kusursuz yanıtlar\."/,
  `"Öğrencinin ders programlarından sınav sonuçlarına, etüt detaylarından kurs kayıtlarına kadar tüm karmaşık sorularını eğitim kurumunuzun politikalarına göre kusursuz yanıtlar."`
);

content = content.replace(
  /"Gelişmiş AI motorumuz, kayıtsız ziyaretçileri anında tespit eder ve onlara en cazip alternatifleri \(check-up paketleri, özel sağlık paketleri\) sunarak kaçan fırsatları doğrudan gelire çevirir\."/,
  `"Gelişmiş AI motorumuz, kurumunuzu inceleyen adayları anında tespit eder ve onlara en cazip alternatifleri (erken kayıt avantajları, ek etüt programları) sunarak kaçan fırsatları doğrudan kayda çevirir."`
);

fs.writeFileSync("components/EducationalPhoneDialogueSection.tsx", content);
console.log("Done");
