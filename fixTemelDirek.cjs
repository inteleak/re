const fs = require('fs');

function fixTemelDirek(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    const searchStr = `<div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Otelciliğin Geleceği için <span className="text-blue-400">3 Temel Direk</span></h2>
                        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                            Platformumuz, otelinizi geleceğe taşıyacak üç stratejik felsefe üzerine kurulmuştur.
                        </p>
                    </div>`;

    const replaceStr = `<div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Otelciliğin Geleceği için <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">3 Temel Direk</span></h2>
                        <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                            Platformumuz, otelinizi geleceğe taşıyacak üç stratejik felsefe üzerine kurulmuştur.
                        </p>
                    </div>`;

    content = content.replace(searchStr, replaceStr);

    fs.writeFileSync(filename, content);
}

fixTemelDirek('pages/OtelCozumlerimizPage.tsx');
fixTemelDirek('pages/OtelProjelerimizPage.tsx');
