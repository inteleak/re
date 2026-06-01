const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // Fix section padding
    let searchSection = `<section className="container mx-auto px-8 py-4">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-4 md:p-6 lg:p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">`;
    let replaceSection = `<section className="container mx-auto px-8 py-2">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-3 md:p-4 lg:p-5 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">`;
    content = content.replace(searchSection, replaceSection);

    // Fix grid gap
    let searchGrid = `<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">`;
    let replaceGrid = `<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">`;
    content = content.replace(searchGrid, replaceGrid);

    // Fix FeatureCard padding and margins
    let searchCard = `<div className={\`group bg-gradient-to-br backdrop-blur-2xl p-4 md:p-5 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
            <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
            <div className={\`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
            
            <div className={\`w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border shadow-md relative z-10 \${theme.iconBg}\`}>
                <i className={\`\${icon} text-lg text-white\`}></i>
            </div>
            
            <h3 className={\`font-bold text-base md:text-lg leading-snug mb-2 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{title}</h3>`;
            
    let replaceCard = `<div className={\`group bg-gradient-to-br backdrop-blur-2xl p-3 md:p-4 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
            <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
            <div className={\`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
            
            <div className={\`w-8 h-8 rounded-xl bg-gradient-to-br flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 border shadow-md relative z-10 \${theme.iconBg}\`}>
                <i className={\`\${icon} text-base text-white\`}></i>
            </div>
            
            <h3 className={\`font-bold text-sm md:text-base leading-snug mb-1 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{title}</h3>`;
    content = content.replace(searchCard, replaceCard);

    fs.writeFileSync(filename, content);
    console.log("Updated", filename);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
