const fs = require('fs');

function fixSectionPadding(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    const searchStr = `<section className="container mx-auto px-8 py-10">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 lg:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="relative z-10 w-full">
              <div className="text-center mb-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1">Paketin İçindeki Güç: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">9 Entegre Çözüm</span></h2>`;

    const replaceStr = `<section className="container mx-auto px-8 py-4">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-4 md:p-6 lg:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="relative z-10 w-full">
              <div className="text-center mb-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1">Paketin İçindeki Güç: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">9 Entegre Çözüm</span></h2>`;

    if (content.indexOf(searchStr) !== -1) {
        content = content.replace(searchStr, replaceStr);
        console.log("Updated padding in", filename);
        fs.writeFileSync(filename, content);
    } else {
        console.log("Padding section not found in", filename);
    }
}

fixSectionPadding('pages/OtelCozumlerimizPage.tsx');
fixSectionPadding('pages/OtelProjelerimizPage.tsx');
