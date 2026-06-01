import fs from "fs";

let content = fs.readFileSync("components/HealthPhoneDialogueSection.tsx", "utf8");

content = content.replace(
  /Hastain kahve makinesinden geç giriş detaylarına, evcil hayvan kurallarından estetik merkezi randevularına kadar tüm karmaşık sorularını tesis politikanıza/g,
  "Hastanın tahlil sonuçlarından randevu saatlerine, işlem detaylarından tetkik randevularına kadar tüm karmaşık sorularını klinik politikanıza"
);

content = content.replace(
  /hastalere anında en cazip alternatifleri \(muayene manzarası, kahvaltı, estetik merkezi teklifi\)/g,
  "hastalara anında en cazip alternatifleri (check-up paketleri, özel sağlık paketleri)"
);

content = content.replace(
  /tesis politikanıza/g,
  "klinik politikanıza"
);

content = content.replace(
  /hastalere/g,
  "hastalara"
);

fs.writeFileSync("components/HealthPhoneDialogueSection.tsx", content);
console.log("Updated texts");
