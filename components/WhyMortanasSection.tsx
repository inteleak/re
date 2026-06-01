import React from 'react';

interface Point {
    icon: string;
    title: string;
    description: string;
}

interface WhyMortanasSectionProps {
    title: string;
    subtitle: string;
    points: Point[];
    themeColor?: 'blue' | 'green' | 'pink' | 'purple' | 'cyan' | 'orange';
}

const WhyMortanasSection: React.FC<WhyMortanasSectionProps> = ({ title, subtitle, points, themeColor = 'blue' }) => {
    return (
        <section className="container mx-auto px-8 py-4">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-900/90 to-slate-950 text-white rounded-3xl p-4 md:p-6 lg:p-7 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(37,99,235,0.12),rgba(255,255,255,0))] pointer-events-none"></div>

                <div className="relative z-10 w-full">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1.5">
                            {title.split(' ').slice(0, -1).join(' ')} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">{title.split(' ').slice(-1)[0]}</span>
                        </h2>
                        <p className="mt-1 text-sm text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {points.map((point, index) => {
                            const iconClass = point.icon.startsWith('fa') ? point.icon : `fas ${point.icon}`;
                            const themeKeys = ['blue', 'purple', 'cyan', 'emerald', 'amber', 'pink'];
                            const calculatedThemeColor = themeKeys[index % themeKeys.length];
                            
                            const t = {
                                blue: { w: "from-blue-500/10 to-blue-900/20 border-blue-500/30 hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]", t: "text-blue-400", b: "border-blue-500/50 shadow-blue-500/20 bg-slate-900/80" },
                                purple: { w: "from-purple-500/10 to-purple-900/20 border-purple-500/30 hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]", t: "text-purple-400", b: "border-purple-500/50 shadow-purple-500/20 bg-slate-900/80" },
                                cyan: { w: "from-cyan-500/10 to-cyan-900/20 border-cyan-500/30 hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]", t: "text-cyan-400", b: "border-cyan-500/50 shadow-cyan-500/20 bg-slate-900/80" },
                                emerald: { w: "from-emerald-500/10 to-emerald-900/20 border-emerald-500/30 hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]", t: "text-emerald-400", b: "border-emerald-500/50 shadow-emerald-500/20 bg-slate-900/80" },
                                amber: { w: "from-amber-500/10 to-amber-900/20 border-amber-500/30 hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]", t: "text-amber-400", b: "border-amber-500/50 shadow-amber-500/20 bg-slate-900/80" },
                                pink: { w: "from-pink-500/10 to-pink-900/20 border-pink-500/30 hover:border-pink-400 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]", t: "text-pink-400", b: "border-pink-500/50 shadow-pink-500/20 bg-slate-900/80" }
                            }[calculatedThemeColor];

                            return (
                                <div key={index} className={`group bg-gradient-to-br backdrop-blur-sm px-4.5 py-3 md:py-3.5 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden ${t.w}`}>
                                    <div className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                        <i className={`${iconClass} text-9xl ${t.t}`}></i>
                                    </div>
                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1.5 border shadow-lg relative z-10 ${t.b}`}>
                                        <i className={`${iconClass} text-base ${t.t}`}></i>
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-0.5 relative z-10">{point.title}</h3>
                                    <p className="text-slate-300 text-[12px] md:text-[13px] leading-relaxed relative z-10 font-normal">{point.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMortanasSection;
