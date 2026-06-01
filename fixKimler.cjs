const fs = require('fs');

function fixKimler(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    const searchStr = `<div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Kimler İçin İdeal?</h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                        Çözümümüz, farklı büyüklükteki ve segmentlerdeki otellerin ihtiyaçlarını karşılamak üzere esnek bir yapıda tasarlanmıştır.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {idealFor.map((target) => (
                        <div key={target.name} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-transparent hover:border-blue-500 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <div className="flex-shrink-0 h-20 w-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
                                     <i className={\`\${target.icon} text-blue-400 text-4xl\`}></i>
                                </div>
                                <h4 className="font-bold text-white mt-6 text-lg">{target.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>`;

    const replaceStr = `<div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2"><span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Kimler İçin İdeal?</span></h2>
                    <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                        Çözümümüz, farklı büyüklükteki ve segmentlerdeki otellerin ihtiyaçlarını karşılamak üzere esnek bir yapıda tasarlanmıştır.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {idealFor.map((target, index) => {
                        const themes = [
                            {
                                wrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(59,130,246,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-blue-500/5 hover:ring-blue-500/15",
                                blur: "bg-blue-500/20 group-hover:bg-blue-500/30",
                                line: "via-blue-400",
                                iconBg: "from-blue-500 to-indigo-600 border-blue-400/20 shadow-blue-500/20",
                                textHover: "group-hover:text-blue-300"
                            },
                            {
                                wrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(168,85,247,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] ring-purple-500/5 hover:ring-purple-500/15",
                                blur: "bg-purple-500/20 group-hover:bg-purple-500/30",
                                line: "via-purple-400",
                                iconBg: "from-purple-500 to-pink-600 border-purple-400/20 shadow-purple-500/20",
                                textHover: "group-hover:text-purple-300"
                            },
                            {
                                wrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(6,182,212,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] ring-cyan-500/5 hover:ring-cyan-500/15",
                                blur: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
                                line: "via-cyan-400",
                                iconBg: "from-cyan-400 to-blue-600 border-cyan-400/20 shadow-cyan-500/20",
                                textHover: "group-hover:text-cyan-300"
                            },
                            {
                                wrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(16,185,129,0.1),_0_15px_40px_rgba(0,0,0,0.6)] border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)] ring-emerald-500/5 hover:ring-emerald-500/15",
                                blur: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
                                line: "via-emerald-400",
                                iconBg: "from-emerald-500 to-teal-600 border-emerald-400/20 shadow-emerald-500/20",
                                textHover: "group-hover:text-emerald-300"
                            }
                        ];
                        const theme = themes[index % themes.length];
                        
                        return (
                            <div key={target.name} className={\`group bg-gradient-to-br backdrop-blur-2xl p-8 rounded-3xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 text-center hover:-translate-y-2 \${theme.wrapper}\`}>
                                <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
                                <div className={\`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
                                
                                <div className={\`w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 \${theme.iconBg}\`}>
                                    <i className={\`\${target.icon} text-4xl text-white\`}></i>
                                </div>
                                <h4 className={\`font-bold text-lg md:text-xl leading-snug text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{target.name}</h4>
                            </div>
                        );
                    })}
                </div>`;

    if (content.indexOf(searchStr) === -1) {
        console.log("Not found in", filename);
    } else {
        content = content.replace(searchStr, replaceStr);
        fs.writeFileSync(filename, content);
        console.log("Updated", filename);
    }
}

fixKimler('pages/OtelCozumlerimizPage.tsx');
fixKimler('pages/OtelProjelerimizPage.tsx');
