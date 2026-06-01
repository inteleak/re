const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchGrid = `                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[`;
    let replaceGrid = `                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                        {[`;

    if (content.indexOf(searchGrid) !== -1) {
        content = content.replace(searchGrid, replaceGrid);
        console.log("Updated Security grid in", filename);
        fs.writeFileSync(filename, content);
    }
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
