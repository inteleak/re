import fs from 'fs';

let content = fs.readFileSync('pages/ApplicationDetailPage.tsx', 'utf8');

content = content.replace(/alt="Luxury AI Hotel Website"/g, 'alt={`${application.name}`}');

fs.writeFileSync('pages/ApplicationDetailPage.tsx', content);
console.log('App Details alt updated.');
