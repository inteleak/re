const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchCard = `<div className={\`group bg-gradient-to-br backdrop-blur-2xl p-3 md:p-4 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
            <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
            <div className={\`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
            
            <div className={\`w-8 h-8 rounded-xl bg-gradient-to-br flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 border shadow-md relative z-10 \${theme.iconBg}\`}>
                <i className={\`\${icon} text-base text-white\`}></i>
            </div>
            
            <h3 className={\`font-bold text-sm md:text-base leading-snug mb-1 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{title}</h3>`;
            
    let replaceCard = `<div className={\`group bg-gradient-to-br backdrop-blur-2xl p-3 rounded-2xl border-2 flex flex-col transition-all duration-500 h-full relative overflow-hidden ring-4 \${theme.wrapper}\`}>
            <div className={\`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[30px] transition-all duration-700 \${theme.blur}\`}></div>
            <div className={\`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 \${theme.line}\`}></div>
            
            <div className={\`w-8 h-8 rounded-xl bg-gradient-to-br flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 border shadow-md relative z-10 \${theme.iconBg}\`}>
                <i className={\`\${icon} text-sm text-white\`}></i>
            </div>
            
            <h3 className={\`font-bold text-sm md:text-base leading-snug mb-1 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{title}</h3>`;

    if (content.indexOf(searchCard) !== -1) {
        content = content.replace(searchCard, replaceCard);
        console.log("Updated", filename);
    }
    fs.writeFileSync(filename, content);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
