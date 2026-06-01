const fs = require('fs');

function wrapSection(content, sectionComment, nextSectionComment, customReplace) {
    const rxStart = new RegExp(`{\\/\\* ${sectionComment} \\*\\/}\\s*<section[^>]*>\\s*(<div[^>]*>)?`);
    const strMatch = content.match(rxStart);
    if (!strMatch) {
        console.log("Could not find start for: ", sectionComment);
        return content;
    }
    
    // We don't want to use overly generic replace, so we just do string replacement
    const replacementStart = `{/* ${sectionComment} */}
            <section className="container mx-auto px-8 py-10">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 lg:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="relative z-10 w-full">`;
    
    const rxEnd = new RegExp(`<\\/section>\\s*{\\/\\* ${nextSectionComment} \\*\\/}`);
    const strEndMatch = content.match(rxEnd);
    if (!strEndMatch) {
         console.log("Could not find end for: ", nextSectionComment);
         return content;
    }

    const replacementEnd = `  </div>\n              </div>\n            </section>\n\n            {/* ${nextSectionComment} */}`;

    let newContent = content.replace(rxStart, customReplace ? customReplace : replacementStart);
    newContent = newContent.replace(rxEnd, replacementEnd);
    return newContent;
}

function processFile(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // 1. Included Services Section
    content = wrapSection(content, 'Included Services Section', 'Guest Journey Section');

    // 2. Guest Journey Section - Has an inner div we keep
    content = wrapSection(content, 'Guest Journey Section', '3 Core Pillars Section');

    // 3. 3 Core Pillars Section
    content = wrapSection(content, '3 Core Pillars Section', 'Competitive Edge Section');

    // 4. Competitive Edge Section
    content = wrapSection(content, 'Competitive Edge Section', 'Turnkey Setup Section');

    // 5. Turnkey Setup Section
    content = wrapSection(content, 'Turnkey Setup Section', 'Security and Reliability Section');

    // 6. Security and Reliability Section
    content = wrapSection(content, 'Security and Reliability Section', 'Platform Deep Dive Section');

    // 7. Platform Deep Dive Section
    content = wrapSection(content, 'Platform Deep Dive Section', 'Meet Your AI Team Section', 
    `{/* Platform Deep Dive Section */}
            <section className="container mx-auto px-8 py-10">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 lg:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="relative z-10 w-full">`
    );

    // 8. Heart of the Platform: AI Engine Section
    content = wrapSection(content, 'Heart of the Platform: AI Engine Section', '9-in-1 Power Pack Offer Section');


    fs.writeFileSync(filename, content);
    console.log("Processed", filename);
}

processFile('pages/OtelCozumlerimizPage.tsx');
processFile('pages/OtelProjelerimizPage.tsx');
