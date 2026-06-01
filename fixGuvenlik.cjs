const fs = require('fs');

function fixGuvenlik(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    const searchStr = `<div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Güvenlik ve Güvenilirlik: <span className="text-blue-400">Verileriniz Bizimle Güvende</span></h2>
                        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                            Misafir verilerinizin güvenliği ve platformumuzun kesintisiz çalışması en büyük önceliğimizdir.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: 'fas fa-shield-halved', title: 'KVKK & GDPR Uyumu', description: 'Tüm veri işleme süreçlerimiz, ulusal ve uluslararası veri koruma kanunlarına (KVKK, GDPR) tam uyumludur.' },
                            { icon: 'fas fa-cloud-arrow-up', title: '%99.9 Kesintisiz Çalışma', description: 'Global standartlardaki bulut altyapımız sayesinde platformumuz kesintisiz olarak çalışır, işiniz asla yarım kalmaz.' },
                            { icon: 'fas fa-lock', title: 'Uçtan Uca Şifreleme', description: 'Tüm misafir verileri ve iç iletişiminiz, bankacılık düzeyinde güvenlik sağlayan SSL/TLS şifreleme ile korunur.' },
                            { icon: 'fas fa-headset', title: '7/24 İzleme ve Destek', description: 'Sistemlerimiz proaktif olarak 7/24 izlenir ve herhangi bir sorun anında uzman teknik ekibimiz müdahale etmeye hazırdır.' }
                        ].map(item => (
                             <div key={item.title} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10 transition-all duration-300 hover:border-blue-400 hover:-translate-y-1">
                                <div className="flex-shrink-0 h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <i className={\`\${item.icon} text-3xl\`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-300 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>`;

    const replaceStr = `<div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Güvenlik ve Güvenilirlik: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Verileriniz Bizimle Güvende</span></h2>
                        <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                            Misafir verilerinizin güvenliği ve platformumuzun kesintisiz çalışması en büyük önceliğimizdir.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: 'fas fa-shield-halved', title: 'KVKK & GDPR Uyumu', description: 'Tüm veri işleme süreçlerimiz, ulusal ve uluslararası veri koruma kanunlarına (KVKK, GDPR) tam uyumludur.' },
                            { icon: 'fas fa-cloud-arrow-up', title: '%99.9 Kesintisiz Çalışma', description: 'Global standartlardaki bulut altyapımız sayesinde platformumuz kesintisiz olarak çalışır, işiniz asla yarım kalmaz.' },
                            { icon: 'fas fa-lock', title: 'Uçtan Uca Şifreleme', description: 'Tüm misafir verileri ve iç iletişiminiz, bankacılık düzeyinde güvenlik sağlayan SSL/TLS şifreleme ile korunur.' },
                            { icon: 'fas fa-headset', title: '7/24 İzleme ve Destek', description: 'Sistemlerimiz proaktif olarak 7/24 izlenir ve herhangi bir sorun anında uzman teknik ekibimiz müdahale etmeye hazırdır.' }
                        ].map((item, index) => {
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
                                <div key={item.title} className={\`group bg-gradient-to-br backdrop-blur-2xl p-8 rounded-3xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 text-center hover:-translate-y-2 \${theme.wrapper}\`}>
                                    <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
                                    <div className={\`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
                                    
                                    <div className={\`w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 \${theme.iconBg}\`}>
                                        <i className={\`\${item.icon} text-3xl text-white\`}></i>
                                    </div>
                                    <h3 className={\`font-bold text-xl md:text-2xl leading-snug mb-3 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{item.title}</h3>
                                    <p className="text-[14px] text-slate-300 leading-relaxed relative z-20 font-medium flex-grow">{item.description}</p>
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

fixGuvenlik('pages/OtelCozumlerimizPage.tsx');
fixGuvenlik('pages/OtelProjelerimizPage.tsx');
