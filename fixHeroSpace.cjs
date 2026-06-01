const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    let search = `<div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center lg:text-left">
                      <span className="text-sm font-bold tracking-wider text-blue-300 bg-blue-500/20 px-3 py-1.5 rounded-full uppercase">OTEL ÇÖZÜMLERİ</span>
                      <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
                          Komisyonları Unutun, <br /> <span className="text-blue-400">Misafir Sadakati Yaratın</span>
                      </h1>
                      <p className="mt-6 text-lg text-blue-200">
                         9'u 1 arada güç paketimizle tüm operasyonlarınızı tek bir akıllı platformda birleştirin. Doğrudan rezervasyonları artırın, personel verimliliğini yükseltin ve misafirlerinize unutulmaz bir dijital deneyim sunun.
                      </p>
                       <div className="mt-8">`;
                       
    let replace = `<div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                      <span className="text-sm font-bold tracking-wider text-blue-300 bg-blue-500/20 px-3 py-1.5 rounded-full uppercase">OTEL ÇÖZÜMLERİ</span>
                      <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
                          Komisyonları Unutun, <br /> <span className="text-blue-400">Misafir Sadakati Yaratın</span>
                      </h1>
                      <p className="mt-3 text-lg text-blue-200">
                         9'u 1 arada güç paketimizle tüm operasyonlarınızı tek bir akıllı platformda birleştirin. Doğrudan rezervasyonları artırın, personel verimliliğini yükseltin ve misafirlerinize unutulmaz bir dijital deneyim sunun.
                      </p>
                       <div className="mt-5">`;

    if (content.indexOf(search) !== -1) {
        content = content.replace(search, replace);
        console.log("Updated hero spacing in", filename);
        fs.writeFileSync(filename, content);
    }
}

try { fix('pages/OtelCozumlerimizPage.tsx'); } catch (e) { console.error(e); }
