const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchSection = `<section className="container mx-auto px-8 py-10">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-6 md:p-10 lg:p-12 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="relative z-10 w-full">
                 <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Anahtar Teslim Kurulum: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">4 Adımda Dijital Dönüşüm</span></h2>
                     <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                         Endişelenmeyin, tüm süreci sizin için şeffaf ve profesyonel bir şekilde yönetiyoruz.
                     </p>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">`;

    let replaceSection = `<section className="container mx-auto px-8 py-6">
              <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/90 to-slate-900 text-white rounded-3xl p-5 md:p-8 lg:p-10 border border-slate-700/50 shadow-2xl relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                <div className="relative z-10 w-full">
                 <div className="text-center mb-10">
                     <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Anahtar Teslim Kurulum: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">4 Adımda Dijital Dönüşüm</span></h2>
                     <p className="mt-2 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                         Endişelenmeyin, tüm süreci sizin için şeffaf ve profesyonel bir şekilde yönetiyoruz.
                     </p>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">`;
                 
    if (content.indexOf(searchSection) !== -1) {
        content = content.replace(searchSection, replaceSection);
        console.log("Updated steps section in", filename);
    } else {
        console.log("Steps section not found in", filename);
    }

    fs.writeFileSync(filename, content);
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
