import fs from "fs";

let content = fs.readFileSync("components/DualPhoneDialogueSection.tsx", "utf8");

content = content.replace(/DualPhoneDialogueSection/g, "HealthPhoneDialogueSection");
content = content.replace("Mortanas AI Otel Asistanına hoş geldiniz. 🏨", "Mortanas AI Klinik Asistanına hoş geldiniz. 🏥");
content = content.replace("Hafta sonu için 2 kişilik deniz manzaralı oda fiyatı alabilir miyim?", "Cuma günü için dermatoloji uzmanı Dr. Ayşe Hanım'dan randevu alabilir miyim?");
content = content.replace("Hemen kontrol ediyorum... 🔍 Cumartesi girişli deniz manzaralı Delüks Odamız müsait! Gecelik 2.500 TL (Kahvaltı ve Spa dahil). Rezervasyonunuzu başlatmamı ister misiniz?", "Hemen kontrol ediyorum... 🔍 Cuma günü saat 14:00'te Dr. Ayşe Hanım'ın randevusu müsait! Muayene ücreti 1.500 TL. Randevunuzu onaylamamı ister misiniz?");
content = content.replace("Odalarda kahve makinesi var mı? Bir de geç giriş yapacağız.", "Kan tahlili sonuçlarımı aynı gün alabiliyor muyum? Bir de biraz geç kalabilirim.");
content = content.replace("Evet! Tüm odalarımızda Nespresso makinesi ücretsizdir. ☕ Ayrıca mobil check-in yaparak resepsiyondaki sırayı tamamen atlayabilirsiniz.", "Evet! Tüm tahlil sonuçlarınız sistem üzerinden aynı gün e-Nabız'a aktarılmaktadır. 🧪 Ayrıca mobil hasta kayıt yaparak bankodaki sırayı tamamen atlayabilirsiniz.");
content = content.replace("Talebiniz alındı! 🎉 Adınıza ön rezervasyon yapıldı ve onay bağlantısı WhatsApp telefonunuza iletildi. İyi tatiller dileriz! 🌴", "Talebiniz alındı! 🎉 Adınıza randevunuz oluşturuldu ve onay bağlantısı WhatsApp üzerinden iletildi. Sağlıklı günler dileriz! 🩺");

content = content.replace("konaklama", "tedavi");
content = content.replace("Otel", "Klinik");
content = content.replace(/oda/g, "muayene");
content = content.replace(/Oda/g, "Muayene");
content = content.replace(/otel/g, "klinik");
content = content.replace(/misafir/g, "hasta");
content = content.replace(/Misafir/g, "Hasta");
content = content.replace(/rezervasyon/g, "randevu");
content = content.replace(/Rezervasyon/g, "Randevu");
content = content.replace(/Otel/g, "Klinik");
content = content.replace(/spa/g, "estetik merkezi");

fs.writeFileSync("components/HealthPhoneDialogueSection.tsx", content);
console.log("Done");
