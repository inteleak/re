const fs = require('fs');

const SECTIONS_TO_FIX = [
    'Competitive Edge Section',
    'Turnkey Setup Section',
    'Security and Reliability Section',
    'Platform Deep Dive Section',
    'Meet Your AI Team Section', 
    '9-in-1 Power Pack Offer Section'
];

function fixExtraDivs(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    SECTIONS_TO_FIX.forEach(nextComment => {
        const regex = new RegExp(`<\\/div>\\s*<\\/div>\\s*<\\/div>\\s*<\\/section>\\s*{\\/\\* ${nextComment} \\*\\/}`, 'g');
        content = content.replace(regex, `</div>\n              </div>\n            </section>\n\n            {/* ${nextComment} */}`);
    });

    fs.writeFileSync(filename, content);
}

fixExtraDivs('pages/OtelCozumlerimizPage.tsx');
fixExtraDivs('pages/OtelProjelerimizPage.tsx');
