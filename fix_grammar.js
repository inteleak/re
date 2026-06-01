import fs from "fs";

let content = fs.readFileSync("pages/SaglikCozumlerimizPage.tsx", "utf8");

content = content.replace(/hastalare/g, "hastalara");
content = content.replace(/hastalari/g, "hastaları");
content = content.replace(/hastalariniz/g, "hastalarınız");
content = content.replace(/hastalarin/g, "hastaların");
content = content.replace(/hastalarinize/g, "hastalarınıza");
content = content.replace(/hastalarimizle/g, "hastalarımızla");
content = content.replace(/hastalarimize/g, "hastalarımıza");
content = content.replace(/hastalarimiz/g, "hastalarımız");
content = content.replace(/Hastalarinize/g, "Hastalarınıza");
content = content.replace(/Hastalarimizle/g, "Hastalarımızla");
// other fixes
content = content.replace(/klinikcilikte/g, "klinik süreçlerinde");
content = content.replace(/Klinikcilikte/g, "Klinik Süreçlerinde");
content = content.replace(/muayene manzarası/g, "doktor uzmanlığı");

fs.writeFileSync("pages/SaglikCozumlerimizPage.tsx", content);
console.log("Grammar fixed");
