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
    const themeClasses = {
        blue: { 
            text: 'text-blue-400', 
            border: 'border-slate-700/50', 
            bg: 'bg-blue-500/10', 
            glow: 'via-blue-500',
            grad: 'from-blue-400 to-cyan-400',
            pointBg: 'from-blue-500/10 to-blue-900/20 border-blue-500/30 hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
            iconBox: 'border-blue-500/50 shadow-blue-500/20 bg-slate-900/80'
        },
        green: { 
            text: 'text-green-400', 
            border: 'border-slate-700/50', 
            bg: 'bg-green-500/10', 
            glow: 'via-green-500',
            grad: 'from-emerald-400 to-teal-400',
            pointBg: 'from-green-500/10 to-green-900/20 border-green-500/30 hover:border-green-400 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]',
            iconBox: 'border-green-500/50 shadow-green-500/20 bg-slate-900/80'
        },
        pink: { 
            text: 'text-pink-400', 
            border: 'border-slate-700/50', 
            bg: 'bg-pink-500/10', 
            glow: 'via-pink-500',
            grad: 'from-pink-400 to-rose-400',
            pointBg: 'from-pink-500/10 to-pink-900/20 border-pink-500/30 hover:border-pink-400 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
            iconBox: 'border-pink-500/50 shadow-pink-500/20 bg-slate-900/80'
        },
        purple: { 
            text: 'text-purple-400', 
            border: 'border-slate-700/50', 
            bg: 'bg-purple-500/10', 
            glow: 'via-purple-500',
            grad: 'from-purple-400 to-pink-400',
            pointBg: 'from-purple-500/10 to-purple-900/20 border-purple-500/30 hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
            iconBox: 'border-purple-500/50 shadow-purple-500/20 bg-slate-900/80'
        },
        cyan: { 
            text: 'text-cyan-400', 
            border: 'border-slate-700/50', 
            bg: 'bg-cyan-500/10', 
            glow: 'via-cyan-500',
            grad: 'from-blue-400 to-cyan-400',
            pointBg: 'from-cyan-500/10 to-cyan-900/20 border-cyan-500/30 hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
            iconBox: 'border-cyan-500/50 shadow-cyan-500/20 bg-slate-900/80'
        },
        orange: { 
            text: 'text-orange-400', 
            border: 'border-slate-700/50', 
            bg: 'bg-orange-500/10', 
            glow: 'via-orange-500',
            grad: 'from-orange-400 to-amber-400',
            pointBg: 'from-orange-500/10 to-orange-900/20 border-orange-500/30 hover:border-orange-400 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
            iconBox: 'border-orange-500/50 shadow-orange-500/20 bg-slate-900/80'
        },
    };

    const currentTheme = themeClasses[themeColor] || themeClasses.blue;

    return (
        <section className="container mx-auto px-8 py-2 md:py-4">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-900/90 to-slate-950 text-white rounded-3xl p-4 md:p-6 lg:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${currentTheme.glow} to-transparent opacity-50`}></div>
                <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(37,99,235,0.12),rgba(255,255,255,0))] pointer-events-none"></div>

                <div className="relative z-10 w-full">
                    <div className="text-center mb-6">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white mb-2">
                            {title.split(' ').slice(0, -1).join(' ')} <span className={`bg-gradient-to-r ${currentTheme.grad} text-transparent bg-clip-text`}>{title.split(' ').slice(-1)[0]}</span>
                        </h2>
                        <p className="mt-1 text-xs md:text-sm text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3.5">
                        {points.map((point, index) => {
                            const iconClass = point.icon.startsWith('fa') ? point.icon : `fas ${point.icon}`;
                            const themeKeys: ('blue' | 'purple' | 'cyan' | 'green' | 'pink' | 'orange')[] = ['blue', 'purple', 'cyan', 'green', 'pink', 'orange'];
                            const calculatedThemeColor = themeKeys[index % themeKeys.length];
                            const cardTheme = themeClasses[calculatedThemeColor] || currentTheme;
                            
                            return (
                                <div key={index} className={`group bg-gradient-to-br backdrop-blur-sm p-3.5 md:p-4 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ${cardTheme.pointBg}`}>
                                    <div className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                        <i className={`${iconClass} text-9xl ${cardTheme.text}`}></i>
                                    </div>
                                    <div className="flex items-start relative z-10">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-3 border shadow-lg ${cardTheme.iconBox}`}>
                                            <i className={`${iconClass} text-base ${cardTheme.text}`}></i>
                                        </div>
                                        <div>
                                            <h3 className="text-sm md:text-base font-bold text-white mb-1">{point.title}</h3>
                                            <p className="text-slate-300 text-[12px] md:text-[13px] leading-relaxed font-normal">{point.description}</p>
                                        </div>
                                    </div>
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
