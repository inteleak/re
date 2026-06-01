const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchCardContent = `div className="p-5 pt-8 relative z-20 flex flex-col h-full"`;
    let replaceCardContent = `div className="p-4 pt-6 relative z-20 flex flex-col h-full"`;

    let searchIconDiv = `div className="mb-3 text-right"`;
    let replaceIconDiv = `div className="mb-2 text-right"`;

    let searchTitle = `<h3 className={\`text-[16px] leading-tight font-bold text-white mb-1.5 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;
    let replaceTitle = `<h3 className={\`text-[16px] leading-tight font-bold text-white mb-1 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;

    let searchList = `<ul className="space-y-2.5 text-[13px] text-slate-300 font-medium flex-grow">`;
    let replaceList = `<ul className="space-y-2 text-[13px] text-slate-300 font-medium flex-grow">`;

    let count = 0;
    if (content.includes(searchCardContent)) { content = content.replace(searchCardContent, replaceCardContent); count++; }
    if (content.includes(searchIconDiv)) { content = content.replace(searchIconDiv, replaceIconDiv); count++; }
    if (content.includes(searchTitle)) { content = content.replace(searchTitle, replaceTitle); count++; }
    if (content.includes(searchList)) { content = content.replace(searchList, replaceList); count++; }
    
    fs.writeFileSync(filename, content);
    console.log("Updated", filename, "count:", count);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
