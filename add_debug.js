import fs from 'fs';

let content = fs.readFileSync('pages/ApplicationDetailPage.tsx', 'utf8');

content = content.replace(
  /if \(\!application\) return \<div className="text-center py-24 text-white bg-slate-950 min-h-screen"\>İçerik bulunamadı\.\.\.\<\/div\>;/,
  'if (!application) return <div className="text-center py-24 text-white bg-slate-950 min-h-screen">İçerik bulunamadı... Slug: {slug} | Known: {APPLICATIONS.map(a => a.slug).join(", ")}</div>;'
);

fs.writeFileSync('pages/ApplicationDetailPage.tsx', content);
console.log('Added debug info');
