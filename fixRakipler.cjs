const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchStr = `<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg h-full border border-slate-700 flex flex-col hover:border-blue-400">
                        <div className="flex-shrink-0 h-16 w-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5">
                            <i className="fas fa-user-astronaut text-blue-400 text-3xl"></i>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-white">Benzersiz Misafir Deneyimi</h3>
                        <p className="text-slate-300 text-sm flex-grow">Yapay zeka, her misafire adıyla hitap eder, geçmiş tercihlerini hatırlar ve onlara özel teklifler sunar. Bu, zincir otellerin bile sunamadığı bir kişiselleştirme seviyesidir.</p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg h-full border border-slate-700 flex flex-col hover:border-blue-400">
                        <div className="flex-shrink-0 h-16 w-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5">
                            <i className="fas fa-magnifying-glass-chart text-blue-400 text-3xl"></i>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-white">Veriye Dayalı Pazarlama</h3>
                        <p className="text-slate-300 text-sm flex-grow">Hangi müşteri segmentinin hangi tekliflere yanıt verdiğini anlayın. Pazarlama bütçenizi tahminlere değil, somut verilere dayalı olarak en kârlı kanallara yönlendirin.</p>
                    </div>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg h-full border border-slate-700 flex flex-col hover:border-blue-400">
                        <div className="flex-shrink-0 h-16 w-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5">
                            <i className="fas fa-tachometer-alt-fast text-blue-400 text-3xl"></i>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-white">Operasyonel Mükemmellik</h3>
                        <p className="text-slate-300 text-sm flex-grow">Otomatikleştirilmiş süreçler sayesinde daha az personelle daha çok iş yapın. Bu size fiyatlandırmada esneklik ve hizmet kalitesinde tutarlılık olarak geri döner.</p>
                    </div>
                </div>`;

    let replaceStr = `<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: 'fas fa-user-astronaut', title: 'Benzersiz Misafir Deneyimi', description: 'Yapay zeka, her misafire adıyla hitap eder, geçmiş tercihlerini hatırlar ve onlara özel teklifler sunar. Bu, zincir otellerin bile sunamadığı bir kişiselleştirme seviyesidir.' },
                        { icon: 'fas fa-magnifying-glass-chart', title: 'Veriye Dayalı Pazarlama', description: 'Hangi müşteri segmentinin hangi tekliflere yanıt verdiğini anlayın. Pazarlama bütçenizi tahminlere değil, somut verilere dayalı olarak en kârlı kanallara yönlendirin.' },
                        { icon: 'fas fa-tachometer-alt-fast', title: 'Operasyonel Mükemmellik', description: 'Otomatikleştirilmiş süreçler sayesinde daha az personelle daha çok iş yapın. Bu size fiyatlandırmada esneklik ve hizmet kalitesinde tutarlılık olarak geri döner.' }
                    ].map((item, index) => {
                        const themes = [
                            {
                                    iconColor: "text-white",
                                    iconBg: "from-blue-500 to-indigo-600 border-blue-400/20 shadow-[0_0_20px_rgba(59,130,246,0.5)]",
                                    cardWrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(59,130,246,0.1)] border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] ring-blue-500/5",
                                    textHover: "group-hover:text-blue-300",
                                    blur: "bg-blue-500/20 group-hover:bg-blue-500/30",
                                    line: "via-blue-400"
                            },
                            {
                                    iconColor: "text-white",
                                    iconBg: "from-purple-500 to-pink-600 border-purple-400/20 shadow-[0_0_20px_rgba(168,85,247,0.5)]",
                                    cardWrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(168,85,247,0.1)] border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)] ring-purple-500/5",
                                    textHover: "group-hover:text-purple-300",
                                    blur: "bg-purple-500/20 group-hover:bg-purple-500/30",
                                    line: "via-purple-400"
                            },
                            {
                                    iconColor: "text-white",
                                    iconBg: "from-cyan-400 to-blue-600 border-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.5)]",
                                    cardWrapper: "from-slate-950 via-slate-900 to-indigo-950/90 shadow-[0_0_25px_rgba(6,182,212,0.1)] border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.35)] ring-cyan-500/5",
                                    textHover: "group-hover:text-cyan-300",
                                    blur: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
                                    line: "via-cyan-400"
                            }
                        ];
                        const theme = themes[index % themes.length];
                        return (
                            <div key={index} className={\`group bg-gradient-to-br backdrop-blur-2xl p-6 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 hover:-translate-y-2 \${theme.cardWrapper}\`}>
                                <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
                                <div className={\`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
                                
                                <div className={\`w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 \${theme.iconBg}\`}>
                                    <i className={\`\${item.icon} text-2xl \${theme.iconColor}\`}></i>
                                </div>
                                
                                <h3 className={\`font-bold text-xl mb-2 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{item.title}</h3>
                                <p className="text-slate-300 text-[14px] leading-relaxed relative z-20 font-medium flex-grow">{item.description}</p>
                            </div>
                        );
                    })}
                </div>`;

    if (content.indexOf(searchStr) !== -1) {
        content = content.replace(searchStr, replaceStr);
        console.log("Updated Rakiplerinizden cards in", filename);
        fs.writeFileSync(filename, content);
    }
}

try { fix('pages/HomePage.tsx'); } catch (e) {}
try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
