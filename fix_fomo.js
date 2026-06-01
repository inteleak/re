import fs from 'fs';

let content = fs.readFileSync('pages/ApplicationDetailPage.tsx', 'utf8');

// The FomoSection is defined outside, causing ReferenceError when rendered.
content = content.replace(
  /const FomoSection: React\.FC = \(\) => \(/,
  'const FomoSection: React.FC<{ application: any }> = ({ application }) => ('
);

content = content.replace(
  /<FomoSection \/>/g,
  '<FomoSection application={application} />'
);

fs.writeFileSync('pages/ApplicationDetailPage.tsx', content);
console.log('Fixed FomoSection props');
