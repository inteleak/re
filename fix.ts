import fs from 'fs';
let content = fs.readFileSync('constants.tsx', 'utf8');
content = content.replace("\\\\nexport const NAV_LINKS = [undefined", "");
fs.writeFileSync('constants.tsx', content);
