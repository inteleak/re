import fs from "fs";

let content = fs.readFileSync("pages/OtelProjelerimizPage.tsx", "utf8");

content = content.replace(/OtelCozumlerimizPage/g, "SaglikCozumlerimizPage");
content = content.replace(/OtelProjelerimizPage/g, "SaglikCozumlerimizPage");
content = content.replace(/OTEL ÇÖZÜMLERİ/g, "SAĞLIK ÇÖZÜMLERİ");
content = content.replace(/Otelinizin Dijital Dönüşümüne/g, "Kliniğinizin Dijital Dönüşümüne");
content = content.replace(/Oda Sayısı/g, "Klinik Oda Sayısı");
content = content.replace(/Otel/g, "Klinik");
content = content.replace(/otel/g, "klinik");
content = content.replace(/OTEL/g, "KLİNİK");
content = content.replace(/Misafir/g, "Hasta");
content = content.replace(/misafir/g, "hasta");
content = content.replace(/MİSAFİR/g, "HASTA");

fs.writeFileSync("pages/SaglikCozumlerimizPage.tsx", content);
console.log("Done");
