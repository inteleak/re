import fs from "fs";

let content = fs.readFileSync("pages/SaglikCozumlerimizPage.tsx", "utf8");

content = content.replace(/Hastalare/g, "Hastalara");
content = content.replace(/çevre gezi önerileri/g, "tetkik önerileri");

fs.writeFileSync("pages/SaglikCozumlerimizPage.tsx", content);
console.log("Grammar fixed again");
