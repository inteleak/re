const fs = require('fs');
const files = ['pages/OtelCozumlerimizPage.tsx', 'pages/OtelProjelerimizPage.tsx'];

files.forEach(f => {
    try {
        let content = fs.readFileSync(f, 'utf8');

        // Update setupSteps data
        const oldSetup = /const setupSteps = \[\s*\{\s*num: 1,[\s\S]*?\}\s*\];/;
        const newSetup = `const setupSteps = [
        {
            num: 1,
            icon: 'fas fa-magnifying-glass-chart',
            title: "Keşif & Strateji",
            details: [
                "Teknik altyapı & PMS analizi.",
                "Satış hedeflerinin belirlenmesi.",
                "Özel entegrasyon yol haritası.",
                "Kaçak gelir noktası tespiti.",
                "AI kullanım stratejisi planı."
            ]
        },
        {
            num: 2,
            icon: 'fas fa-cogs',
            title: "Kurulum & Entegrasyon",
            details: [
                "Tüm modüllerin anahtar kurulumu.",
                "PMS ve ödeme tam entegrasyonu.",
                "Otel verileriyle AI eğitimi.",
                "Kapsamlı stres & onay testi.",
                "Canlıya sorunsuz ve hızlı geçiş."
            ]
        },
        {
            num: 3,
            icon: 'fas fa-chalkboard-teacher',
            title: "Eğitim & Destek",
            details: [
                "Tüm departmanlara özel eğitim.",
                "Sistem kullanım en iyi pratikleri.",
                "7/24 ulaşılabilecek teknik destek.",
                "Anlık sistem performans takibi.",
                "Düzenli güncelleme optimizasyonu."
            ]
        },
        {
            num: 4,
            icon: 'fas fa-chart-line',
            title: "Optimizasyon & Büyüme",
            details: [
                "Aylık performans ve gelir analizi.",
                "AI modelinin veriyle gelişmesi.",
                "Yeni otomasyon fırsatları tespiti.",
                "Sektörel trend entegrasyonları.",
                "Dinamik RevPAR iyileştirmeleri."
            ]
        }
    ];`;
        
        content = content.replace(oldSetup, newSetup);

        // Update rendering
        const searchRender = `<li key={i} className="flex items-start">
                                                 <i className="fas fa-check-circle text-green-400 mr-2 mt-[3px] flex-shrink-0 text-[13px]"></i>
                                                 <span className="leading-snug">{detail}</span>
                                             </li>`;
        const replaceRender = `<li key={i} className="flex items-center overflow-hidden w-full">
                                                 <i className="fas fa-check-circle text-green-400 mr-1.5 flex-shrink-0 text-[12px]"></i>
                                                 <span className="leading-tight truncate text-[12px] md:text-[13px]">{detail}</span>
                                             </li>`;
        
        content = content.replace(searchRender, replaceRender);

        fs.writeFileSync(f, content);
        console.log('Updated setupSteps in ' + f);
    } catch(e) {
        console.error(e);
    }
});
