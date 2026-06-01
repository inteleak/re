const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchList = `<ul className="space-y-1 text-[13px] text-slate-300 font-medium flex-grow">`;
    let replaceList = `<ul className="space-y-2.5 text-[13px] text-slate-300 font-medium flex-grow">`;

    if (content.includes(searchList)) {
        content = content.replace(searchList, replaceList);
        fs.writeFileSync(filename, content);
        console.log("Updated", filename);
    }
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
