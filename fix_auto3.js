import fs from 'fs';

let content = fs.readFileSync('pages/OtomotivCozumlerimizPage.tsx', 'utf8');

const fixes = {
    // Hotel remnants
    "HotelRunner, SiteMinder gibi sektörün önde gelen kanal yöneticileriyle": "Salesforce, SAP, Microsoft Dynamics gibi sektörün önde gelen ERP ve CRM sistemleriyle",
    "\(Booking, Expedia, Airbnb vb\.\) bayi müsaitliğiniz ve fiyatlarınız": "(arabam.com, sahibinden.com vb.) araç envanteriniz ve fiyatlarınız",
    "HotelRunner": "Salesforce",
    "SiteMinder": "SAP CRM",
    "Opera": "DMS",
    "Fidelio": "Dealer Management System",
    
    // Education remnants
    "ek etüt saatleri ve kurs hizmetleri": "kampanyalar ve servis hizmetleri",
    "otomotiv olanakları": "bayi hizmetleri",
    
    // E-commerce/booking leftovers
    "satış alan": "randevu alan",
    "satış alır": "randevu alır",
    "satış oluşturabilir": "randevu oluşturabilir",
    
    "Yoğun iş seyahatlerinde hızlı müşteri satış, anlık ödeme ve sıfır kaçan çağrı": "Yoğun kampanya dönemlerinde hızlı test sürüşü planlama ve sıfır kaçan çağrı",
    
};

for (const [key, value] of Object.entries(fixes)) {
    const regex = new RegExp(key, 'g');
    content = content.replace(regex, value);
}

fs.writeFileSync('pages/OtomotivCozumlerimizPage.tsx', content);
console.log('Automotive page cleaned up 3.');
