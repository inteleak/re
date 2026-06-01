const fs = require('fs');

const GLOBAL_SECTIONS_TO_FIX = [
    'Pricing Section',
    'Testimonials Section',
    'Interactive Demos Section', 
    'Partners Section',
    'FAQ Section',
    'CTA Section'
];

function fixExtraDivs(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    GLOBAL_SECTIONS_TO_FIX.forEach(nextComment => {
        const regex = new RegExp(`<\\/div>\\s*<\\/div>\\s*<\\/div>\\s*<\\/section>\\s*{\\/\\* ${nextComment} \\*\\/}`, 'g');
        content = content.replace(regex, `</div>\n              </div>\n            </section>\n\n            {/* ${nextComment} */}`);
    });

    // Also at the end of CTA Section, if there's an extra div before the final component closing tag.
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*\);/g, `</div>\n              </div>\n            </section>\n        </div>\n\n      </div>\n    );`);


    fs.writeFileSync(filename, content);
}

fixExtraDivs('pages/OtelCozumlerimizPage.tsx');
fixExtraDivs('pages/OtelProjelerimizPage.tsx');
