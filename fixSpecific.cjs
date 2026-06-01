const fs = require('fs');

const SECTIONS_TO_FIX = [
    'Guest Journey Section',
    '3 Core Pillars Section',
    'Competitive Edge Section',
    'Turnkey Setup Section',
    'Security and Reliability Section',
    'Platform Deep Dive Section',
    'Meet Your AI Team Section', // that's the next section of Platform Deep
    '9-in-1 Power Pack Offer Section' // next of Heart of Platform
];

function fixExtraDivs(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // For the specific sections we generated, we know that before the next section comment,
    // we put:
    //               </div>
    //             </div>
    //             </section>
    // but there's a </div> right above it from original code.
    // So the pattern is:
    // </div>
    // </div>
    // </div>
    // </section>
    // \n\n {/* SECTION COMMENT */}
    
    SECTIONS_TO_FIX.forEach(nextComment => {
        const regex = new RegExp(`<\\/div>\\s*<\\/div>\\s*<\\/div>\\s*<\\/section>\\s*{\\/\\* ${nextComment} \\*\\/}`, 'g');
        content = content.replace(regex, `</div>\n              </div>\n            </section>\n\n            {/* ${nextComment} */}`);
    });

    fs.writeFileSync(filename, content);
}

fixExtraDivs('pages/OtelCozumlerimizPage.tsx');
fixExtraDivs('pages/OtelProjelerimizPage.tsx');
