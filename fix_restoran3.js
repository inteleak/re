import fs from "fs";

let comp = fs.readFileSync("components/RestaurantPhoneDialogueSection.tsx", "utf8");

comp = comp.replace(/🛍️/g, "🍽️");
comp = comp.replace(/tahlil sonuçlarından/g, "menü içeriklerinden");
comp = comp.replace(/iade rezervasyonlarına/g, "iptal/iade süreçlerine");
comp = comp.replace(/restoran politikanıza %100 sadık kalarak bir insan gibi anlar ve anında yanıtlar/g, "işletme politikanıza %100 sadık kalarak bir insan gibi anlar ve anında yanıtlar");

fs.writeFileSync("components/RestaurantPhoneDialogueSection.tsx", comp);
