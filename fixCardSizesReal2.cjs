const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchWrapper = `div className="pt-10 px-8 pb-8 relative z-20 flex-grow flex flex-col"`;
    let replaceWrapper = `div className="pt-8 px-5 pb-5 relative z-20 flex-grow flex flex-col"`;

    let searchIconDiv = `div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity"`;
    let replaceIconDiv = `div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity"`;

    let searchIcon = `i className={\`\${step.icon} text-4xl transition-colors \${theme.iconColor}\`}`;
    let replaceIcon = `i className={\`\${step.icon} text-3xl transition-colors \${theme.iconColor}\`}`;

    let searchTitle = `<h3 className={\`text-xl font-bold text-white mb-5 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;
    let replaceTitle = `<h3 className={\`text-lg font-bold text-white mb-3 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;

    let searchUl = `<ul className="space-y-4 text-[14px] text-slate-300 font-medium flex-grow">`;
    let replaceUl = `<ul className="space-y-2 text-[13px] text-slate-300 font-medium flex-grow">`;
    
    let searchNumBg = `<div className={\`absolute -top-6 -left-6 w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold text-2xl shadow-lg border-2 z-30 transition-all duration-300 group-hover:scale-110 \${theme.numBg}\`}>`;
    let replaceNumBg = `<div className={\`absolute -top-5 -left-5 w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-lg border-2 z-30 transition-all duration-300 group-hover:scale-110 \${theme.numBg}\`}>`;

    if (content.indexOf(searchWrapper) !== -1) content = content.replace(searchWrapper, replaceWrapper);
    if (content.indexOf(searchIconDiv) !== -1) content = content.replace(searchIconDiv, replaceIconDiv);
    if (content.indexOf(searchIcon) !== -1) content = content.replace(searchIcon, replaceIcon);
    if (content.indexOf(searchTitle) !== -1) content = content.replace(searchTitle, replaceTitle);
    if (content.indexOf(searchUl) !== -1) content = content.replace(searchUl, replaceUl);
    if (content.indexOf(searchNumBg) !== -1) content = content.replace(searchNumBg, replaceNumBg);

    fs.writeFileSync(filename, content);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
