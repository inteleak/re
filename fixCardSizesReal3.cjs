const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchWrapper = `div className="pt-8 px-5 pb-5 relative z-20 flex-grow flex flex-col"`;
    let replaceWrapper = `div className="pt-5 px-4 pb-4 relative z-20 flex-grow flex flex-col"`;

    let searchIconDiv = `div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity"`;
    let replaceIconDiv = `div className="mb-2 opacity-80 group-hover:opacity-100 transition-opacity"`;

    let searchTitle = `<h3 className={\`text-lg font-bold text-white mb-3 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;
    let replaceTitle = `<h3 className={\`text-[15px] leading-tight font-bold text-white mb-2 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;

    let searchUl = `<ul className="space-y-2 text-[13px] text-slate-300 font-medium flex-grow">`;
    let replaceUl = `<ul className="space-y-1.5 text-[12px] text-slate-300 font-medium flex-grow">`;
    
    let searchHeader = `<h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1">Anahtar Teslim Kurulum: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">4 Adımda Dijital Dönüşüm</span></h2>
                     <p className="mt-1 text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">`;
    let replaceHeader = `<h2 className="text-[22px] md:text-2xl font-extrabold tracking-tight text-white mb-0.5">Anahtar Teslim Kurulum: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">4 Adımda Dijital Dönüşüm</span></h2>
                     <p className="mt-0 text-[13px] md:text-[14px] text-slate-300/90 max-w-2xl mx-auto leading-snug">`;

    if (content.indexOf(searchWrapper) !== -1) content = content.replace(searchWrapper, replaceWrapper);
    if (content.indexOf(searchIconDiv) !== -1) content = content.replace(searchIconDiv, replaceIconDiv);
    if (content.indexOf(searchTitle) !== -1) content = content.replace(searchTitle, replaceTitle);
    if (content.indexOf(searchUl) !== -1) content = content.replace(searchUl, replaceUl);
    if (content.indexOf(searchHeader) !== -1) content = content.replace(searchHeader, replaceHeader);

    fs.writeFileSync(filename, content);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
