const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let searchHeader = `<div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">Güvenlik ve Güvenilirlik: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Verileriniz Bizimle Güvende</span></h2>
                        <p className="mt-4 text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                            Misafir verilerinizin güvenliği ve platformumuzun kesintisiz çalışması en büyük önceliğimizdir.
                        </p>
                    </div>`;
                    
    let replaceHeader = `<div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-1.5">Güvenlik ve Güvenilirlik: <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Verileriniz Bizimle Güvende</span></h2>
                        <p className="mt-1.5 text-sm md:text-base text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
                            Misafir verilerinizin güvenliği ve platformumuzun kesintisiz çalışması en büyük önceliğimizdir.
                        </p>
                    </div>`;

    if (content.indexOf(searchHeader) !== -1) {
        content = content.replace(searchHeader, replaceHeader);
        console.log("Updated Security header in", filename);
        fs.writeFileSync(filename, content);
    }
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
try { fix('pages/OtelProjelerimizPage.tsx'); } catch (e) { console.error(e); }
