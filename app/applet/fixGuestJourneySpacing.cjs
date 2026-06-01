const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // Fix Guest Journey Section spacing
    let search = `<section className="container mx-auto px-8 py-8">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-5 md:p-8 lg:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="relative z-10 w-full text-center mb-8">`;
                
    let replace = `<section className="container mx-auto px-8 py-2">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-3 md:p-4 lg:p-5 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="relative z-10 w-full text-center mb-4">`;

    if (content.indexOf(search) !== -1) {
        content = content.replace(search, replace);
        console.log("Updated guest journey spacing in", filename);
        fs.writeFileSync(filename, content);
    }
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
