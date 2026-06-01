const fs = require('fs');

function fixFeatureCard(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    const searchStr = `<p className="text-[12px] text-slate-300 leading-relaxed relative z-20 font-medium flex-grow">{description}</p>`;
    const replaceStr = `<p className="text-[12px] text-slate-300 leading-snug relative z-20 font-medium flex-grow">{description}</p>`;

    if (content.indexOf(searchStr) !== -1) {
        content = content.replace(searchStr, replaceStr);
        fs.writeFileSync(filename, content);
        console.log("Updated leading in", filename);
    }
}

fixFeatureCard('pages/OtelCozumlerimizPage.tsx');
fixFeatureCard('pages/OtelProjelerimizPage.tsx');
