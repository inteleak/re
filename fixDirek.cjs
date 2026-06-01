const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchHeader = `<div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Otelciliğin Geleceği için <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">3 Temel Direk</span></h2>
                        <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                            Platformumuz, otelinizi geleceğe taşıyacak üç stratejik felsefe üzerine kurulmuştur.
                        </p>
                    </div>`;
                    
    let replaceHeader = `<div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1.5">Otelciliğin Geleceği için <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">3 Temel Direk</span></h2>
                        <p className="mt-1.5 text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                            Platformumuz, otelinizi geleceğe taşıyacak üç stratejik felsefe üzerine kurulmuştur.
                        </p>
                    </div>`;

    if (content.indexOf(searchHeader) !== -1) {
        content = content.replace(searchHeader, replaceHeader);
        console.log("Updated header in", filename);
    }

    let searchCard = `                            return (
                                <div key={index} className={\`group bg-gradient-to-br backdrop-blur-2xl p-8 rounded-3xl border-2 flex flex-col items-center text-center transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
                                    <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
                                    <div className={\`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
                                    
                                    <div className={\`w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 \${theme.iconBg}\`}>
                                        <i className={\`\${pillar.icon} text-3xl text-white\`}></i>
                                    </div>
                                    <h3 className={\`font-bold text-xl md:text-2xl leading-snug mb-3 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{pillar.title}</h3>
                                    <p className="text-[14px] text-slate-300 leading-relaxed relative z-20 font-medium flex-grow">{pillar.description}</p>
                                </div>
                            );`;

    let replaceCard = `                            return (
                                <div key={index} className={\`group bg-gradient-to-br backdrop-blur-2xl p-5 md:p-6 rounded-2xl border-2 flex flex-col items-center text-center transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
                                    <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
                                    <div className={\`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
                                    
                                    <div className={\`w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 \${theme.iconBg}\`}>
                                        <i className={\`\${pillar.icon} text-2xl text-white\`}></i>
                                    </div>
                                    <h3 className={\`font-bold text-lg md:text-xl leading-tight mb-2 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{pillar.title}</h3>
                                    <p className="text-[13px] text-slate-300 leading-snug relative z-20 font-medium flex-grow">{pillar.description}</p>
                                </div>
                            );`;

    if (content.indexOf(searchCard) !== -1) {
        content = content.replace(searchCard, replaceCard);
        console.log("Updated card in", filename);
    }

    let searchSection = `<section className="container mx-auto px-8 py-6">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-5 md:p-8 lg:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">`;
    let replaceSection = `<section className="container mx-auto px-8 py-4">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-5 md:p-6 lg:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">`;

    if (content.indexOf(searchSection) !== -1) {
        content = content.replace(searchSection, replaceSection);
        console.log("Updated section padding in", filename);
    }

    fs.writeFileSync(filename, content);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
