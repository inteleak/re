import fs from 'fs';

let content = fs.readFileSync('pages/ETicaretCozumlerimizPage.tsx', 'utf8');

content = content.replace(/Ders Programı Entegrasyonu/g, "Pazaryeri Entegrasyonu");
content = content.replace(/popüler ÖBS ve ders programı ile/g, "popüler ERP ve stok yönetimi yazılımlarıyla");
content = content.replace(/özel ders, hafta sonu kampı veya yayın paketleri/g, "premium kargo, hediye paketi veya uzatılmış garanti");
content = content.replace(/e-ticaret tiplerine/g, "ürün tiplerine");
content = content.replace(/Eğitimcilikte/g, "E-Ticarette");
content = content.replace(/eğitimcilikte/g, "e-ticarette");
content = content.replace(/fa-box-open/g, "fa-box");
content = content.replace(/fa-tags/g, "fa-percent");

fs.writeFileSync('pages/ETicaretCozumlerimizPage.tsx', content);
console.log('Fixed leftovers');
