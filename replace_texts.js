import fs from 'fs';

let content = fs.readFileSync('pages/ApplicationDetailPage.tsx', 'utf8');

content = content.replace(
    'Otelcilik sektörü hızla dijitalleşirken, harekete geçmemek pazar payı ve kârlılık kaybetmek anlamına gelir. Yapay zeka entegrasyonunun somut etkilerini hemen görün.',
    '{application.sector} sektörü hızla dijitalleşirken, harekete geçmemek pazar payı ve kârlılık kaybetmek anlamına gelir. Sistemin somut etkilerini hemen görün.'
);

content = content.replace(
    /const whatsappLink = `https:\/\/wa\.me\/905540118888\?text=\$\{encodeURIComponent\("Merhaba, Yapay Zeka Otel Sitesi hakkında bilgi almak istiyorum\."\)\}`;/,
    'const whatsappLink = `https://wa.me/905540118888?text=${encodeURIComponent("Merhaba, " + application.name + " hakkında detaylı bilgi almak istiyorum.")}`;'
);

content = content.replace(
    'Mevcut Otel Yönetim Sisteminizi (PMS), kanal yöneticinizi ve ödeme altyapınızı platformumuza sorunsuzca bağlıyoruz.',
    'Mevcut yönetim sistemlerinizi ve altyapınızı platformumuza sorunsuzca bağlıyoruz.'
);

content = content.replace(
    'Yapay Zeka Otel Siteniz hakkında aklınıza takılan en yaygın soruları sizin için yanıtladık.',
    '{application.name} hakkında aklınıza takılan en yaygın soruları sizin için yanıtladık.'
);

content = content.replace(
    /alt={`Otel Arayüzü \$\{index \+ 1\}`}/g,
    'alt={`${application.name} Arayüzü ${index + 1}`}'
);

fs.writeFileSync('pages/ApplicationDetailPage.tsx', content);
console.log('App Details replaced correctly.');
