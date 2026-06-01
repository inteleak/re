import fs from 'fs';

let content = fs.readFileSync('constants.tsx', 'utf8');

const unsplashImages = [
    '"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Hotel
    '"https://images.unsplash.com/photo-1551076805-e1869043e560?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Saglik
    '"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Egitim
    '"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // E-ticaret
    '"https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Otomotiv
    '"https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Hukuk
    '"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Restoran
    '"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Fitness
    '"https://images.unsplash.com/photo-1450101499163-c8848c66cb85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Sigorta
    '"https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Guzellik
    '"https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"', // Diyetisyen
    '"https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"'  // Emlak
];

content = content.replace(/'https:\/\/mortanas\.com\/resim\/otel\.png'/g, unsplashImages[0]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1183353523[^']+'/g, unsplashImages[1]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1288075308[^']+'/g, unsplashImages[2]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1324838520[^']+'/g, unsplashImages[3]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1453265551[^']+'/g, unsplashImages[4]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/102008320[^']+'/g, unsplashImages[5]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1283624322[^']+'/g, unsplashImages[6]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1149237699[^']+'/g, unsplashImages[7]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1283307525[^']+'/g, unsplashImages[8]);
// Guzellik also was using 1149237699
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1149237699[^']+'/g, unsplashImages[9]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1183353523[^']+'/g, unsplashImages[10]);
content = content.replace(/'https:\/\/media\.istockphoto\.com\/id\/1165384568[^']+'/g, unsplashImages[11]);

const endToken = 'export const NAV_LINKS = [';
const firstPart = content.split(endToken)[0];

const validNavLinks = "export const NAV_LINKS = [\n  { name: 'Ana Sayfa', path: '/' },\n  { name: 'Kurumsal', path: '/kurumsal' },\n  { \n    name: 'Sektör Yazılımlarımız (CRM)',\n    path: '/yapay-zeka-uygulamalar',\n    children: [\n        { name: 'Otel Yönetimi', path: '/uygulamalar/otel-yonetimi-crm' },\n        { name: 'Sağlık Yönetimi', path: '/uygulamalar/saglik-yonetimi-crm' },\n        { name: 'Eğitim Yönetimi', path: '/uygulamalar/egitim-yonetimi-crm' },\n        { name: 'E-Ticaret Yönetimi', path: '/uygulamalar/eticaret-yonetimi-crm' },\n        { name: 'Otomotiv Yönetimi', path: '/uygulamalar/otomotiv-yonetimi-crm' },\n        { name: 'Hukuk Yönetimi', path: '/uygulamalar/hukuk-yonetimi-crm' },\n        { name: 'Restoran Yönetimi', path: '/uygulamalar/restoran-yonetimi-crm' },\n        { name: 'Fitness Yönetimi', path: '/uygulamalar/fitness-yonetimi-crm' },\n        { name: 'Sigorta Yönetimi', path: '/uygulamalar/sigorta-yonetimi-crm' },\n        { name: 'Güzellik Salonu', path: '/uygulamalar/guzellik-yonetimi-crm' },\n        { name: 'Diyetisyen', path: '/uygulamalar/diyetisyen-yonetimi-crm' },\n        { name: 'Emlak Yönetimi', path: '/uygulamalar/emlak-yonetimi-crm' }\n    ]\n  },\n  { name: 'Yapay Zeka Otomasyonları', path: '/yapay-zeka-otomasyonlari' },\n  { name: 'Fiyatlandırma', path: '/fiyatlandirma' },\n  { name: 'İletişim', path: '/iletisim' }\n];"

let finalContent = content;
const regex = /export const NAV_LINKS = \[\s*\{ name: 'Ana Sayfa', path: '\/' \}\s*,\s*\{ name: 'Yapay Zeka Uygulamaları', path: '\/yapay-zeka-uygulamalar' \}\s*\];/;
finalContent = content.replace(regex, validNavLinks);

fs.writeFileSync('constants.tsx', finalContent);
console.log("Images and Nav Links updated");
