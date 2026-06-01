const fs = require('fs');

function fixKarsilastir(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    const searchStr = `<h3 className="text-2xl font-bold text-center text-white mb-8">Tüm Özellikleri Karşılaştırın</h3>`;

    const replaceStr = `<h3 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-8 tracking-tight"><span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Tüm Özellikleri Karşılaştırın</span></h3>`;

    if (content.indexOf(searchStr) === -1) {
        console.log("Not found in", filename);
    } else {
        content = content.replace(searchStr, replaceStr);
        fs.writeFileSync(filename, content);
        console.log("Updated", filename);
    }
}

fixKarsilastir('pages/OtelCozumlerimizPage.tsx');
fixKarsilastir('pages/OtelProjelerimizPage.tsx');
