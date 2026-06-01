import fs from "fs";

let content = fs.readFileSync("components/EducationalPhoneDialogueSection.tsx", "utf8");

content = content.replace(
  /\(check-up paketleri, özel sağlık paketleri\)/g,
  "(erken kayıt avantajları, ek etüt paketleri)"
);

content = content.replace( // maybe "öğrencilera" typo
  /öğrencilera/g,
  "öğrencilere"
);

fs.writeFileSync("components/EducationalPhoneDialogueSection.tsx", content);
console.log("Fixed remaining health text in EducationalPhoneDialogueSection");
