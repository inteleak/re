const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchCard = `<div className="pt-10 px-8 pb-8 relative z-20 flex-grow flex flex-col">`;
    let replaceCard = `<div className="pt-8 px-6 pb-6 relative z-20 flex-grow flex flex-col">`;

    if (content.indexOf(searchCard) !== -1) {
        content = content.replace(searchCard, replaceCard);
        console.log("Updated steps card padding in", filename);
    }
    
    // Additional fix for the text and gap sizes in the card to reduce vertical height further
    let searchContent = `<h3 className="text-xl font-bold text-white mb-3 mt-4 group-hover:text-blue-300 transition-colors">{step.title}</h3>
                                     <p className="text-slate-300 text-sm leading-relaxed flex-grow">{step.description}</p>`;
    let replaceContent = `<h3 className="text-lg font-bold text-white mb-2 mt-3 group-hover:text-blue-300 transition-colors">{step.title}</h3>
                                     <p className="text-slate-300 text-xs leading-relaxed flex-grow">{step.description}</p>`;
    
    if (content.indexOf(searchContent) !== -1) {
        content = content.replace(searchContent, replaceContent);
        console.log("Updated steps card content sizes in", filename);
    }

    fs.writeFileSync(filename, content);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
