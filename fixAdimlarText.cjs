const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchTitle = `<h3 className={\`text-[15px] leading-tight font-bold text-white mb-2 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;
    let replaceTitle = `<h3 className={\`text-[16px] leading-tight font-bold text-white mb-1.5 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;

    let searchList = `<ul className="space-y-1.5 text-[12px] text-slate-300 font-medium flex-grow">
                                         {step.details.map((detail, i) => (
                                             <li key={i} className="flex items-start">
                                                 <i className="fas fa-check-circle text-green-400 mr-3 mt-0.5 flex-shrink-0 text-sm"></i>
                                                 <span className="leading-relaxed">{detail}</span>`;
    let replaceList = `<ul className="space-y-1 text-[13px] text-slate-300 font-medium flex-grow">
                                         {step.details.map((detail, i) => (
                                             <li key={i} className="flex items-start">
                                                 <i className="fas fa-check-circle text-green-400 mr-2 mt-[3px] flex-shrink-0 text-[13px]"></i>
                                                 <span className="leading-snug">{detail}</span>`;

    let searchIcon = `div className="mb-2 opacity-80 group-hover:opacity-100 transition-opacity"`;
    let replaceIcon = `div className="mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity"`;

    let count = 0;
    if (content.indexOf(searchTitle) !== -1) { content = content.replace(searchTitle, replaceTitle); count++; }
    if (content.indexOf(searchList) !== -1) { content = content.replace(searchList, replaceList); count++; }
    if (content.indexOf(searchIcon) !== -1) { content = content.replace(searchIcon, replaceIcon); count++; }
    
    fs.writeFileSync(filename, content);
    console.log("Updated", filename, "count:", count);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
