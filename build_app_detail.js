import fs from 'fs';

const template = fs.readFileSync('pages/AiHotelSitePage.tsx', 'utf8');

let newContent = template
  .replace(/import React, \{ useState, useEffect \} from 'react';/, "import React, { useState, useEffect } from 'react';\nimport { useParams } from 'react-router-dom';\nimport { APPLICATIONS } from '../constants';\nimport ProblemSolutionCard from '../components/ProblemSolutionCard';")
  .replace(/const AiHotelSitePage: React\.FC = \(\) => \{/, "const ApplicationDetailPage: React.FC = () => {\n    const { slug } = useParams<{ slug: string }>();\n    const application = APPLICATIONS.find(a => a.slug === slug);\n\n    if (!application) return <div className=\"text-center py-24 text-white\">Uygulama bulunamadı...</div>;\n")
  .replace(/export default AiHotelSitePage;/, "export default ApplicationDetailPage;");

// Move ProblemSolutionCard to its own component if it doesn't exist, or just leave it inside ApplicationDetailPage?
// Wait, AiHotelSitePage actually has ProblemSolutionCard defined inside it. Let's not re-import it. 
// I'll undo the import ProblemSolutionCard part.

newContent = template
  .replace(/import React, \{ useState, useEffect \} from 'react';/, "import React, { useState, useEffect } from 'react';\nimport { useParams } from 'react-router-dom';\nimport { APPLICATIONS } from '../constants';")
  .replace(/const AiHotelSitePage: React\.FC = \(\) => \{/, "const ApplicationDetailPage: React.FC = () => {\n    const { slug } = useParams<{ slug: string }>();\n    const application = APPLICATIONS.find(a => a.slug === slug);\n\n    if (!application) return <div className=\"text-center py-24 text-white bg-slate-900 min-h-screen\">Uygulama bulunamadı...</div>;\n\n    const mappedFeatures = (application.features && application.features.length > 0 ? application.features : HOTEL_FEATURES).map(f => ({\n        ...f,\n        icon: typeof f.icon === 'string' ? <i className={f.icon}></i> : f.icon\n    }));\n\n    const mappedWhyChooseUs = (application.whyChooseUs && application.whyChooseUs.length > 0 ? application.whyChooseUs : aiConciergeFeatures).map(f => ({\n        ...f,\n        icon: typeof f.icon === 'string' ? <i className={f.icon}></i> : f.icon\n    }));\n")
  .replace(/export default AiHotelSitePage;/, "export default ApplicationDetailPage;");

// Text replacements
newContent = newContent.replace(
  /<span className="text-\[10px\] md:text-xs font-bold tracking-\[0\.2em\] text-blue-300 bg-blue-500\/10 border border-blue-500\/20 px-3 py-1 rounded-full uppercase backdrop-blur-md">Yapay Zeka Web Si̇tesi̇<\/span>/g,
  '<span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase backdrop-blur-md">{application.sector} UYGULAMASI</span>'
);

newContent = newContent.replace(
  /<h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 leading-\[1\.1\] text-white tracking-tight">[\s\S]*?<\/h1>/g,
  `<h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 leading-[1.1] text-white tracking-tight">
    {application.name.split(' ').map((word, i, arr) => i === arr.length - 1 ? <span key={i} className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text"> {word}</span> : word + ' ')}
  </h1>`
);

newContent = newContent.replace(
  /<p className="mt-5 text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">[\s\S]*?<\/p>/g,
  '<p className="mt-5 text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">{application.longDescription || application.description}</p>'
);

newContent = newContent.replace(
  /src="https:\/\/images\.unsplash\.com\/photo-1566073771259-6a8506099945\?ixlib=rb-4\.0\.3&auto=format&fit=crop&w=1600&q=80"/g,
  'src={application.imageUrl || "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"}'
);

newContent = newContent.replace(
  /<h2 className="text-3xl md:text-4xl font-bold text-white">\s*Neden Yapay Zeka Destekli <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">Bir Web Sitesi\?<\/span>\s*<\/h2>/g,
  `<h2 className="text-3xl md:text-4xl font-bold text-white">Neden <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">{application.name}?</span></h2>`
);

// Map HOTEL_FEATURES mapping to mappedFeatures
newContent = newContent.replace(
  /HOTEL_FEATURES\.map/g,
  'mappedFeatures.map'
);

// Problem section replace
newContent = newContent.replace(
  /<div className="relative z-10 grid md:grid-cols-1 lg:grid-cols-3 gap-8">\s*<ProblemSolutionCard[\s\S]*?<\/div>/,
  `<div className="relative z-10 grid md:grid-cols-1 lg:grid-cols-3 gap-8">
      {application.problem && application.solution ? (
          <ProblemSolutionCard problem={application.problem} solution={application.solution} />
      ) : (
          <>
               <ProblemSolutionCard
                    problem="Yüksek komisyonlar ve operasyonel karmaşıklık."
                    solution="Tüm süreçleri otomatize ederek komisyon maliyetlerini ortadan kaldırır."
               />
               <ProblemSolutionCard
                    problem="Mesai saatleri dışında veya yoğun anlarda yanıt alamayan müşteriler."
                    solution="Yapay zeka asistanı, her soruyu 7/24 anında yanıtlar."
               />
               <ProblemSolutionCard
                    problem="Her ziyaretçiye aynı standart içeriği göstermek dönüşümleri düşürür."
                    solution="Yapay zeka, her ziyaretçiye özel teklifler ve içerikler sunar."
               />
          </>
      )}
  </div>`
);

newContent = newContent.replace(
  /aiConciergeFeatures\.map/g,
  'mappedWhyChooseUs.map'
);

newContent = newContent.replace(
  /planName="Yapay Zeka Otel Sitesi"/g,
  'planName={application.name}'
);

fs.writeFileSync('pages/ApplicationDetailPage.tsx', newContent);
console.log('ApplicationDetailPage.tsx updated!');
