const fs = require('fs');

function fixDerinlemesineBakis(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    const searchStr = `<div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Platforma Derinlemesine Bakış</h2>
                        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                           Tüm operasyonlarınızı yöneteceğiniz merkezi ve akıllı kontrol paneliniz.
                        </p>
                    </div>`;

    const replaceStr = `<div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2"><span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Platforma Derinlemesine Bakış</span></h2>
                        <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                           Tüm operasyonlarınızı yöneteceğiniz merkezi ve akıllı kontrol paneliniz.
                        </p>
                    </div>`;

    if (content.indexOf(searchStr) === -1) {
        console.log("Not found in", filename);
    } else {
        content = content.replace(searchStr, replaceStr);
        fs.writeFileSync(filename, content);
        console.log("Updated", filename);
    }
}

fixDerinlemesineBakis('pages/OtelCozumlerimizPage.tsx');
fixDerinlemesineBakis('pages/OtelProjelerimizPage.tsx');
