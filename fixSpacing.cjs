const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchTitle = `<h3 className={\`text-[16px] leading-tight font-bold text-white mb-1 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;
    let replaceTitle = `<h3 className={\`text-[16px] leading-tight font-bold text-white mb-3 transition-colors duration-300 \${theme.textHover}\`}>{step.title}</h3>`;

    let count = 0;
    if (content.includes(searchTitle)) { content = content.replace(searchTitle, replaceTitle); count++; }
    
    fs.writeFileSync(filename, content);
    console.log("Updated", filename, "count:", count);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
