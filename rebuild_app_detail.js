import fs from 'fs';

let template = fs.readFileSync('pages/AiHotelSitePage.tsx', 'utf8');

let newContent = template
  .replace(/import React, \{ useState, useEffect \} from 'react';/, "import React, { useState, useEffect } from 'react';\nimport { useParams } from 'react-router-dom';\nimport { APPLICATIONS } from '../constants';")
  .replace(/const AiHotelSitePage: React\.FC = \(\) => \{/, "const ApplicationDetailPage: React.FC = () => {\n    const { slug } = useParams<{ slug: string }>();\n    const application = APPLICATIONS.find(a => a.slug === slug);\n\n    if (!application) return <div className=\"text-center py-24 text-white bg-slate-950 min-h-screen\">İçerik bulunamadı...</div>;\n\n")
  .replace(/export default AiHotelSitePage;/, "export default ApplicationDetailPage;");

// Update standard meta badges
newContent = newContent.replace(
  /<span className="text-\[10px\] md:text-xs font-bold tracking-\[0\.2em\] text-blue-300 bg-blue-500\/10 border border-blue-500\/20 px-3 py-1 rounded-full uppercase backdrop-blur-md">Yapay Zeka Web Si̇tesi̇<\/span>/,
  '<span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase backdrop-blur-md">{application.sector} UYGULAMASI</span>'
);

// We want to replace the H1:
// <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 leading-[1.1] text-white tracking-tight">İşletmenizi Çağın Ötesine <br className="hidden md:block" /> <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text"> Taşıyın </span></h1>
newContent = newContent.replace(
  /<h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 leading-\[1\.1\] text-white tracking-tight">[\s\S]*?<\/h1>/,
  `<h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 leading-[1.1] text-white tracking-tight">
    {application.name.split(' ').map((word, i, arr) => i === arr.length - 1 ? <span key={i} className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text"> {word}</span> : word + ' ')}
  </h1>`
);

// Replace paragraph text
newContent = newContent.replace(
    'Otelcilik sektörü hızla dijitalleşirken, harekete geçmemek pazar payı ve kârlılık kaybetmek anlamına gelir. Yapay zeka entegrasyonunun somut etkilerini hemen görün.',
    '{application.sector} sektörü hızla dönüşürken yapay zeka entegrasyonunun somut etkilerini hemen görün ve pazar payınızı artırın.'
);

// Hero Image
newContent = newContent.replace(
  /https:\/\/images\.unsplash\.com\/photo-1566073771259[\w-]+\?ixlib=rb-4\.0\.3&auto=format&fit=crop&w=1600&q=80/g,
  '{application.imageUrl || "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"}'
);

newContent = newContent.replace(
    /src="\{application\.imageUrl/g,
    'src={application.imageUrl'
);
newContent = newContent.replace(
    /q=80"\}"/g,
    'q=80"}'
);


// Section 2 H2 "Neden Yapay Zeka Destekli Bir Web Sitesi?"
newContent = newContent.replace(
  /<h2 className="text-3xl md:text-4xl font-bold text-white">\s*Neden Yapay Zeka Destekli <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">Bir Web Sitesi\?<\/span>\s*<\/h2>/,
  `<h2 className="text-3xl md:text-4xl font-bold text-white">Neden <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">{application.name}?</span></h2>`
);

// Replace 'Mevcut Otel Yönetim Sisteminizi (PMS)...'
newContent = newContent.replace(
    'Mevcut Otel Yönetim Sisteminizi (PMS), kanal yöneticinizi ve ödeme altyapınızı platformumuza sorunsuzca bağlıyoruz.',
    'Mevcut yönetim sistemlerinizi ve altyapınızı platformumuza sorunsuzca bağlıyoruz.'
);

newContent = newContent.replace(
    'Yapay Zeka Otel Siteniz hakkında aklınıza takılan en yaygın soruları sizin için yanıtladık.',
    '{application.name} hakkında aklınıza takılan en yaygın soruları sizin için yanıtladık.'
);

newContent = newContent.replace(
    /alt=\{`Otel Arayüzü \$\{index \+ 1\}`\}/g,
    'alt={`${application.name} Arayüzü ${index + 1}`}'
);

newContent = newContent.replace(
    /const whatsappLink = `https:\/\/wa\.me\/905540118888\?text=\$\{encodeURIComponent\("Merhaba, Yapay Zeka Otel Sitesi hakkında bilgi almak istiyorum\."\)\}`;/,
    'const whatsappLink = `https://wa.me/905540118888?text=${encodeURIComponent("Merhaba, " + application.name + " hakkında detaylı bilgi almak istiyorum.")}`;'
);

newContent = newContent.replace(
    /planName="Yapay Zeka Otel Sitesi"/g,
    'planName={application.name}'
);

const newFaqsStr = `const faqs: FAQ[] = [
        { 
            question: "Bu uygulama tam olarak ne işe yarar?",
            answer: "İşletmenizin operasyonel süreçlerini dijitalleştiren, verimliliği artıran ve müşteri memuniyetini en üst düzeye çıkaran hepsi bir arada bir yönetim platformudur."
        },
        { 
            question: "Mevcut sistemlerimle entegre olabilir mi?",
            answer: "Evet, birçok popüler yazılım ve altyapı ile tam entegre çalışarak veririnizi anlık senkronize eder."
        },
        { 
            question: "Kurulum ve yayına alma süreci ne kadar sürer?",
            answer: "Anahtar teslim projemiz, genel olarak özelliklerinize ve entegrasyon süreçlerine bağlı olarak 5-7 iş günü içinde tamamlanır."
        },
        { 
            question: "Sistem hangi dilleri destekliyor?",
            answer: "Türkçe ve İngilizce başta olmak üzere çok dilli altyapı sunarak global müşteri kitlenizi genişletir."
        }
    ];`;

newContent = newContent.replace(/const faqs: FAQ\[\] = \[\s*\{[\s\S]*?\s*\];/, newFaqsStr);

fs.writeFileSync('pages/ApplicationDetailPage.tsx', newContent);
console.log('ApplicationDetailPage written');
