const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchCardContent = `div className="p-8 pt-12 relative z-20 flex flex-col h-full"`;
    let replaceCardContent = `div className="p-5 pt-8 relative z-20 flex flex-col h-full"`;

    let searchIconDiv = `div className="mb-6 text-right"`;
    let replaceIconDiv = `div className="mb-3 text-right"`;

    let count = 0;
    if (content.indexOf(searchCardContent) !== -1) { content = content.replace(searchCardContent, replaceCardContent); count++; }
    if (content.indexOf(searchIconDiv) !== -1) { content = content.replace(searchIconDiv, replaceIconDiv); count++; }
    
    fs.writeFileSync(filename, content);
    console.log("Updated", filename, "count:", count);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
