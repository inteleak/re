import fs from 'fs';

let page = fs.readFileSync("pages/RestoranCozumlerimizPage.tsx", "utf8");

page = page.replace(/sipariş\/rezervasyon\/iade süreci/g, "sipariş\/paket servis süreci");
page = page.replace(/Sipariş\/Rezervasyon/g, "Rezervasyon");
page = page.replace(/sipariş\/rezervasyon/g, "rezervasyon");
page = page.replace(/Restoran Çözümleriinizin/g, "Restoranınızın");
page = page.replace(/malzemelarını/g, "malzemelerini");
page = page.replace(/ek etüt saatleri ve kurs hizmetleri/g, "çalışma saatleri ve özel menü hizmetleri");
page = page.replace(/restoran tiplerini/g, "masa türlerini");
page = page.replace(/Restorande/g, "Restoranda");
page = page.replace(/restorande/g, "restoranda");

fs.writeFileSync("pages/RestoranCozumlerimizPage.tsx", page);
