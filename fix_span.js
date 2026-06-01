import fs from "fs";

let content = fs.readFileSync("components/HealthPhoneDialogueSection.tsx", "utf8");

content = content.replace(/estetik merkezice/g, "space");
content = content.replace(/<estetik merkezin/g, "<span");
content = content.replace(/<\/estetik merkezin>/g, "</span>");

fs.writeFileSync("components/HealthPhoneDialogueSection.tsx", content);
console.log("Fixed span issue");
