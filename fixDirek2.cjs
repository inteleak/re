const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchCard = `                            return (
                                <div key={index} className={\`group bg-gradient-to-br backdrop-blur-2xl p-8 rounded-3xl border-2 flex flex-col items-center text-center transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
                                    <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
                                    <div className={\`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
                                    
                                    <div className={\`w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 \${theme.iconBg}\`}>
                                        <i className={\`\${pillar.icon} text-4xl text-white\`}></i>
                                    </div>
                                    
                                    <h3 className={\`font-bold text-xl md:text-2xl leading-snug mb-4 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{pillar.title}</h3>
                                    <p className="text-[15px] text-slate-300 leading-relaxed relative z-20 font-medium flex-grow">{pillar.description}</p>
                                </div>
                            );`;

    let replaceCard = `                            return (
                                <div key={index} className={\`group bg-gradient-to-br backdrop-blur-2xl p-5 md:p-6 rounded-2xl border-2 flex flex-col items-center text-center transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
                                    <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
                                    <div className={\`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
                                    
                                    <div className={\`w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 \${theme.iconBg}\`}>
                                        <i className={\`\${pillar.icon} text-2xl text-white\`}></i>
                                    </div>
                                    
                                    <h3 className={\`font-bold text-lg md:text-xl leading-tight mb-2 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{pillar.title}</h3>
                                    <p className="text-[14px] text-slate-300 leading-snug relative z-20 font-medium flex-grow">{pillar.description}</p>
                                </div>
                            );`;

    if (content.indexOf(searchCard) !== -1) {
        content = content.replace(searchCard, replaceCard);
        console.log("Updated card in", filename);
        fs.writeFileSync(filename, content);
    }
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
