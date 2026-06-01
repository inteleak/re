import fs from "fs";

let content = fs.readFileSync("components/HealthPhoneDialogueSection.tsx", "utf8");

content = content.replace("'Cuma günü için dermatoloji uzmanı Dr. Ayşe Hanım'dan randevu alabilir miyim?'", `"Cuma günü için dermatoloji uzmanı Dr. Ayşe Hanım'dan randevu alabilir miyim?"`);
content = content.replace(/Cuma günü saat 14:00'te Dr. Ayşe Hanım'ın randevusu müsait!/g, `Cuma günü saat 14:00'te Dr. Ayşe Hanım'ın randevusu müsait!`);
content = content.replace(/'Hemen kontrol ediyorum... 🔍 Cuma günü saat 14:00'te Dr. Ayşe Hanım'ın randevusu müsait! Muayene ücreti 1.500 TL. Randevunuzu onaylamamı ister misiniz?'/g, `"Hemen kontrol ediyorum... 🔍 Cuma günü saat 14:00'te Dr. Ayşe Hanım'ın randevusu müsait! Muayene ücreti 1.500 TL. Randevunuzu onaylamamı ister misiniz?"`);

fs.writeFileSync("components/HealthPhoneDialogueSection.tsx", content);
console.log("Quotes fixed");
