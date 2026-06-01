const fs = require('fs');

function convertFiles(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // 1. Update FeatureCard component
    const oldFeatureCardRegex = new RegExp(`const FeatureCard: React\.FC<\\{ icon: string; title: string; description: string; path\\?: string; \\}> = \\(\\{ icon, title, description, path \\}\\) => \\([\\s\\S]*?\\);`);
    
    const newFeatureCard = `const FeatureCard: React.FC<{ icon: string; title: string; description: string; path?: string; index?: number; }> = ({ icon, title, description, path, index = 0 }) => {
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
        <div className={\`group bg-gradient-to-br backdrop-blur-2xl p-5 md:p-6 rounded-3xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
            <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
            <div className={\`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
            
            <div className={\`w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 \${theme.iconBg}\`}>
                <i className={\`\${icon} text-xl text-white\`}></i>
            </div>
            
            <h3 className={\`font-bold text-lg mb-2 text-white relative z-10 transition-colors duration-300 \${theme.textHover}\`}>{title}</h3>
            <p className="text-[13px] text-slate-300 leading-relaxed relative z-10 font-medium flex-grow">{description}</p>
            
            {path && (
                <div className="mt-4 pt-2 relative z-10">
                    <Link to={path} className={\`font-bold transition-colors duration-300 text-[13px] flex items-center gap-1 text-white \${theme.textHover}\`}>
                        Detayları İncele <i className="fas fa-arrow-right text-xs"></i>
                    </Link>
                </div>
            )}
        </div>
    );
};`;

    content = content.replace(oldFeatureCardRegex, newFeatureCard);

    // 2. Update heading "Paketin İçindeki Güç: 9 Entegre Çözüm"
    // Also use index in the map
    const innerSectionRegex = /<h2 className="text-3xl md:text-4xl font-bold text-white">Paketin İçindeki Güç: 9 Entegre Çözüm<\/h2>\s*<p className="mt-3 text-lg text-slate-300 max-w-3xl mx-auto">\s*Otelinizin her departmanını güçlendirmek için tasarlanmış 9 entegre yapay zeka çözümü\.\s*<\/p>\s*<\/div>\s*<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">\s*\{includedServices\.map\(service => \(\s*<div key=\{service\.title\} className="group">\s*<FeatureCard \{\.\.\.service\} \/>\s*<\/div>\s*\)\)\}/g;

    const newInnerSection = `<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Paketin İçindeki Güç: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">9 Entegre Çözüm</span></h2>
                  <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                     Otelinizin her departmanını güçlendirmek için tasarlanmış 9 entegre yapay zeka çözümü.
                  </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {includedServices.map((service, idx) => (
                     <div key={service.title} className="group h-full">
                        <FeatureCard {...service} index={idx} />
                     </div>
                  ))}`;

    content = content.replace(innerSectionRegex, newInnerSection);

    fs.writeFileSync(filename, content);
}

convertFiles('pages/OtelCozumlerimizPage.tsx');
convertFiles('pages/OtelProjelerimizPage.tsx');
