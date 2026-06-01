const fs = require('fs');

function fixFeature(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    const searchStrFeature = `    return (
        <div className={\`group bg-gradient-to-br backdrop-blur-2xl p-5 md:p-6 rounded-3xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
            <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
            <div className={\`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
            
            <div className={\`w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border shadow-lg relative z-10 \${theme.iconBg}\`}>
                <i className={\`\${icon} text-xl text-white\`}></i>
            </div>
            
            <h3 className={\`font-bold text-lg md:text-xl leading-snug mb-3 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{title}</h3>
            <p className="text-[13px] text-slate-300 leading-relaxed relative z-20 font-medium flex-grow">{description}</p>`;

    const replaceStrFeature = `    return (
        <div className={\`group bg-gradient-to-br backdrop-blur-2xl p-4 md:p-5 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
            <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
            <div className={\`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
            
            <div className={\`w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border shadow-md relative z-10 \${theme.iconBg}\`}>
                <i className={\`\${icon} text-lg text-white\`}></i>
            </div>
            
            <h3 className={\`font-bold text-base md:text-lg leading-snug mb-2 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{title}</h3>
            <p className="text-[12px] text-slate-300 leading-relaxed relative z-20 font-medium flex-grow">{description}</p>`;

    if (content.indexOf(searchStrFeature) !== -1) {
        content = content.replace(searchStrFeature, replaceStrFeature);
        console.log("Updated FeatureCard in", filename);
    } else {
        console.log("FeatureCard not found in", filename);
    }

    const searchStrGrid = `              <div className="text-center mb-6">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Paketin İçindeki Güç: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">9 Entegre Çözüm</span></h2>
                  <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                     Otelinizin her departmanını güçlendirmek için tasarlanmış 9 entegre yapay zeka çözümü.
                  </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">`;

    const replaceStrGrid = `              <div className="text-center mb-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1">Paketin İçindeki Güç: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">9 Entegre Çözüm</span></h2>
                  <p className="mt-2 text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                     Otelinizin her departmanını güçlendirmek için tasarlanmış 9 entegre yapay zeka çözümü.
                  </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">`;

    if (content.indexOf(searchStrGrid) !== -1) {
        content = content.replace(searchStrGrid, replaceStrGrid);
        console.log("Updated grid layout in", filename);
    } else {
        console.log("Grid layout not found in", filename);
    }

    const searchStrSection = `<section className="container mx-auto px-8 py-10">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 lg:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">`;
    
    // There are multiple sections with py-10 padding, let's find the specific one for "9 Entegre Çözüm"
    // Above searchStrGrid, there is the section definition

    // Actually, let's just make the changes above, and see if it's enough
    fs.writeFileSync(filename, content);
}

fixFeature('pages/OtelCozumlerimizPage.tsx');
fixFeature('pages/OtelProjelerimizPage.tsx');
