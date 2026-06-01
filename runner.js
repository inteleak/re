const fs = require('fs');

function replaceBlock(content, startRegex, endRegex, blockOpenReplacement, blockCloseReplacement) {
    let replacedOpen = false;
    let replacedClose = false;

    // We can just use replace with regex patterns
    content = content.replace(startRegex, blockOpenReplacement);
    content = content.replace(endRegex, blockCloseReplacement);
    return content;
}

function processFile(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // 1. Included Services Section
    content = content.replace(
        /{\/\* Included Services Section \*\/}\s*<section className="[^"]*">\s*<div className="container mx-auto px-8">/g,
        `{/* Included Services Section */}\n          <section className="container mx-auto px-8 py-10">\n            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">\n                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>`
    );
    content = content.replace(
        /<\/div>\s*<\/section>\s*{\/\* Guest Journey Section \*\/}/,
        `  </div>\n            </div>\n          </section>\n\n          {/* Guest Journey Section */}`
    );

    // 2. Guest Journey Section
    content = content.replace(
        /{\/\* Guest Journey Section \*\/}\s*<section className="container mx-auto px-8">/g,
        `{/* Guest Journey Section */}\n            <section className="container mx-auto px-8 py-10">\n              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">\n                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>`
    );
    content = content.replace(
        /<\/div>\s*<\/section>\s*{\/\* 3 Core Pillars Section \*\/}/,
        `    </div>\n              </div>\n            </section>\n            \n          {/* 3 Core Pillars Section */}`
    );

    // 3. 3 Core Pillars Section
    content = content.replace(
        /{\/\* 3 Core Pillars Section \*\/}\s*<section className="bg-slate-900 py-24">\s*<div className="container mx-auto px-8">/g,
        `{/* 3 Core Pillars Section */}\n            <section className="container mx-auto px-8 py-10">\n              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">\n                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>`
    );
    content = content.replace(
        /<\/div>\s*<\/section>\s*{\/\* Competitive Edge Section \*\/}/,
        `    </div>\n              </div>\n            </section>\n            \n            {/* Competitive Edge Section */}`
    );
    
    // 4. Competitive Edge Section
    content = content.replace(
        /{\/\* Competitive Edge Section \*\/}\s*<section className="bg-gradient-to-b from-slate-900 to-indigo-900\/30 py-24">\s*<div className="container mx-auto px-8">/g,
        `{/* Competitive Edge Section */}\n            <section className="container mx-auto px-8 py-10">\n              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">\n                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>`
    );
    content = content.replace(
        /<\/div>\s*<\/section>\s*{\/\* Transformation\/Setup Section \*\/}/,
        `    </div>\n              </div>\n            </section>\n            \n            {/* Transformation/Setup Section */}`
    );

    // 5. Transformation/Setup Section
    content = content.replace(
        /{\/\* Transformation\/Setup Section \*\/}\s*<section className="container mx-auto px-8">/g,
        `{/* Transformation/Setup Section */}\n            <section className="container mx-auto px-8 py-10">\n              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">\n                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>`
    );
    content = content.replace(
        /<\/div>\s*<\/section>\s*{\/\* Security Section \*\/}/,
        `    </div>\n              </div>\n            </section>\n            \n            {/* Security Section */}`
    );

    // 6. Security Section
    content = content.replace(
        /{\/\* Security Section \*\/}\s*<section className="bg-slate-900 py-24">\s*<div className="container mx-auto px-8">/g,
        `{/* Security Section */}\n            <section className="container mx-auto px-8 py-10">\n              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">\n                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>`
    );
    content = content.replace(
        /<\/div>\s*<\/section>\s*{\/\* Heart of the Platform:/,
        `    </div>\n              </div>\n            </section>\n            \n            {/* Heart of the Platform:`
    );

    // 7. Moduller (if there is such section)
    content = content.replace(
        /{\/\* Platform Modules Walkthrough \*\/}\s*<section className="bg-slate-900 py-24">\s*<div className="container mx-auto px-8">/g,
        `{/* Platform Modules Walkthrough */}\n            <section className="container mx-auto px-8 py-10">\n              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden">\n                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>`
    );
    content = content.replace(
        /<\/div>\s*<\/section>\s*{\/\* Pricing Section \*\/}/,
        `    </div>\n              </div>\n            </section>\n            \n            {/* Pricing Section */}`
    );

    fs.writeFileSync(filename, content);
    console.log("Processed", filename);
}

processFile('pages/OtelCozumlerimizPage.tsx');
processFile('pages/OtelProjelerimizPage.tsx');
