import fs from 'fs';

let content = fs.readFileSync('constants.tsx', 'utf8');

const missingConstants = `
export const NAV_LINKS = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Yapay Zeka Uygulamaları', path: '/yapay-zeka-uygulamalar' }
];

export const SECTOR_ITEMS = [];
export const TEAM_MEMBERS = [];
export const MILESTONES = [];
export const WHY_MORTANAS_POINTS = [];
export const TESTIMONIALS = [];
export const ARTICLES = [];
export const TRAINING_PARTNER_LOGOS = [];
export const HOME_FAQS = [];
export const FEATURES = [];
export const INTEGRATIONS = [];
export const FAQS = [];
export const PRESS_MENTIONS = [];
export const CORPORATE_REFERENCES = [];
export const AUTOMATION_PRICING_PLANS = [];
export const APPLICATION_PRICING_PLANS = [];
export const SECTORS = [];
export const SECTOR_PRICING_PLANS = [];
`;

fs.writeFileSync('constants.tsx', content + '\\n' + missingConstants);
console.log('Restored missing exports.');
