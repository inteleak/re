const fs = require('fs');

function convertFiles(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    const startStr = `<div className="relative z-10 w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Misafir Yolculuğunun Her Adımında <span className="text-blue-400">Yanınızdayız</span></h2>`;
    const endStr = `                        ))}
                    </div>
                </div>`;

    const startIndex = content.indexOf(startStr);
    const endIndex = content.indexOf(endStr, startIndex);

    if (startIndex !== -1 && endIndex !== -1) {
        const replaceLen = endIndex + endStr.length - startIndex;
        const newGuestJourney = `<div className="relative z-10 w-full text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Misafir Yolculuğunun Her Adımında <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Yanınızdayız</span></h2>
                    <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                        Platformumuz, misafirinizin otelinizle ilk temasından, sadık bir müşteriye dönüşmesine kadar tüm süreci akıllıca ve kesintisiz bir şekilde yönetir.
                    </p>
                </div>
                <div className="relative z-10">
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-800/80" aria-hidden="true"></div>
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {guestJourneySteps.map((step, index) => {
                            const stepThemes = [
                                {
                                    ring: "ring-blue-500/20",
                                    iconColor: "text-white",
                                    iconBg: "from-blue-500 to-indigo-600 border-blue-400/20 shadow-[0_0_20px_rgba(59,130,246,0.5)]",
                                    cardWrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(59,130,246,0.1)] border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-blue-500/5",
                                    textHover: "group-hover:text-blue-300",
                                    blur: "bg-blue-500/20 group-hover:bg-blue-500/30"
                                },
                                {
                                    ring: "ring-purple-500/20",
                                    iconColor: "text-white",
                                    iconBg: "from-purple-500 to-pink-600 border-purple-400/20 shadow-[0_0_20px_rgba(168,85,247,0.5)]",
                                    cardWrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(168,85,247,0.1)] border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] ring-purple-500/5",
                                    textHover: "group-hover:text-purple-300",
                                    blur: "bg-purple-500/20 group-hover:bg-purple-500/30"
                                },
                                {
                                    ring: "ring-cyan-500/20",
                                    iconColor: "text-white",
                                    iconBg: "from-cyan-400 to-blue-600 border-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.5)]",
                                    cardWrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(6,182,212,0.1)] border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] ring-cyan-500/5",
                                    textHover: "group-hover:text-cyan-300",
                                    blur: "bg-cyan-500/20 group-hover:bg-cyan-500/30"
                                },
                                {
                                    ring: "ring-emerald-500/20",
                                    iconColor: "text-white",
                                    iconBg: "from-emerald-500 to-teal-600 border-emerald-400/20 shadow-[0_0_20px_rgba(16,185,129,0.5)]",
                                    cardWrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(16,185,129,0.1)] border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] ring-emerald-500/5",
                                    textHover: "group-hover:text-emerald-300",
                                    blur: "bg-emerald-500/20 group-hover:bg-emerald-500/30"
                                }
                            ];
                            const theme = stepThemes[index % stepThemes.length];
                            
                            return (
                                <div key={index} className="flex flex-col items-center text-center group h-full">
                                    <div className={\`relative flex-shrink-0 h-24 w-24 bg-slate-900 rounded-full flex items-center justify-center ring-8 \${theme.ring} z-10 transition-transform duration-500 group-hover:-translate-y-2\`}>
                                        <div className={\`w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-br flex items-center justify-center border shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10 \${theme.iconBg}\`}>
                                            <i className={\`\${step.icon} text-3xl \${theme.iconColor}\`}></i>
                                        </div>
                                    </div>
                                    <div className={\`w-full bg-gradient-to-br backdrop-blur-2xl p-6 md:p-8 rounded-3xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 -mt-12 pt-16 group-hover:-translate-y-2 \${theme.cardWrapper}\`}>
                                        <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
                                        <h4 className={\`font-bold text-lg text-white transition-colors duration-300 relative z-10 \${theme.textHover}\`}>{step.title}</h4>
                                        <p className="text-[13px] font-medium text-slate-300 mt-3 relative z-10 leading-relaxed flex-grow">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>`;
        content = content.substring(0, startIndex) + newGuestJourney + content.substring(startIndex + replaceLen);
    }
    
    fs.writeFileSync(filename, content);
}

convertFiles('pages/OtelCozumlerimizPage.tsx');
convertFiles('pages/OtelProjelerimizPage.tsx');
