import fs from "fs";
let path = "components/FitnessPhoneDialogueSection.tsx";
let comp = fs.readFileSync(path, "utf8");
comp = comp.replace(/'Merhabalar, akşam 20:00'deki spinning dersinize katılmak istiyorum, boş yeriniz var mı\?'/, `"Merhabalar, akşam 20:00'deki spinning dersinize katılmak istiyorum, boş yeriniz var mı?"`);
fs.writeFileSync(path, comp);
