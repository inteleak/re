import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface AiWebPricingSectionProps {
  planName: string;
  themeColor: 'blue' | 'green';
  isCrm?: boolean;
}

const PricingCard: React.FC<{
  plan: {
    title: string;
    cycle: 'monthly' | 'annually' | 'lifetime';
    price: number;
    originalPrice?: number;
    description: string;
    popular?: boolean;
    savings?: string;
    features?: { text: string; detail: React.ReactNode; highlight?: boolean; negative?: boolean }[];
  };
  planName: string;
  theme: any;
  isCrmPlan?: boolean;
}> = ({ plan, planName, theme, isCrmPlan }) => {
    const usdFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
    
    let priceForPayment = 0;
    if (plan.cycle === 'monthly') priceForPayment = plan.price;
    if (plan.cycle === 'annually') priceForPayment = plan.price * 12;
    if (plan.cycle === 'lifetime') priceForPayment = plan.price;

    const paymentSearchParams = new URLSearchParams({
        plan: planName,
        price: priceForPayment.toString(),
        type: 'application',
        cycle: plan.cycle,
        currency: 'USD',
    }).toString();

    const cardClasses = plan.popular
        ? `bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-indigo-900/50 backdrop-blur-2xl text-white rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transform lg:scale-105 border-2 border-indigo-400/50 z-10`
        : `bg-gradient-to-br from-slate-950/70 via-slate-900/70 to-slate-950/70 backdrop-blur-xl text-slate-200 rounded-2xl shadow-lg border border-slate-700/50`;
    
    const buttonClasses = plan.popular
        ? `bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold hover:from-blue-600 hover:to-cyan-500`
        : `${theme.bg} ${theme.hoverBg} text-white font-semibold`;

    return (
        <div className={`flex flex-col p-4 md:p-5 h-full relative ${cardClasses}`}>
            {plan.popular && (
                <div className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap`}>
                    <i className="fas fa-star text-yellow-300 mr-1.5"></i>EN AVANTAJLI
                </div>
            )}
            <h3 className="text-lg md:text-xl font-bold">{plan.title}</h3>
            <p className={`mt-0 text-xs md:text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-400'} min-h-[36px]`}>{plan.description}</p>
            
            <div className="mt-2">
                {plan.originalPrice ? (
                    <del className={`text-xs font-semibold block leading-none ${plan.popular ? 'text-red-400' : 'text-red-400'}`}>
                        {usdFormatter.format(plan.originalPrice)}
                    </del>
                ) : <div className="h-[12px] block"></div>}
                <p className="text-3xl md:text-4xl mt-1 font-extrabold text-white leading-none">
                    {usdFormatter.format(plan.price)}
                    {plan.cycle !== 'lifetime' && <span className={`text-xs font-medium ${plan.popular ? 'text-slate-300' : 'text-slate-400'}`}> /ay</span>}
                </p>
                 {plan.savings ? <p className={`text-[10px] md:text-xs mt-1 font-semibold ${theme.text} leading-none`}>{plan.savings}</p> : <div className="h-[14px] mt-1 block"></div>}
            </div>

            <Link to={`/odeme?${paymentSearchParams}`} className={`mt-3 w-full text-center py-2.5 rounded-lg transition-all transform hover:-translate-y-0.5 text-xs md:text-sm font-bold ${buttonClasses}`}>
                { plan.cycle === 'lifetime' ? 'Ömür Boyu Satın Al' : 'Aboneliği Başlat' }
            </Link>

            {plan.features && plan.features.length > 0 && (
                <div className={`mt-4 pt-3 border-t ${plan.popular ? 'border-indigo-500/20' : 'border-slate-700/50'}`}>
                    <div className="space-y-1.5 md:space-y-2">
                        {plan.features.map((f, i) => (
                            <div key={i} className="flex justify-between items-center text-[10px] md:text-[11px] border-b border-white/5 pb-1 md:pb-1.5 last:border-0 last:pb-0">
                                <span className="text-slate-400 font-medium">{f.text}</span>
                                <span className={`font-semibold ${f.negative ? 'text-slate-500 text-[10px]' : (f.highlight ? theme.text : 'text-slate-200')}`}>{f.detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            <div className={`mt-4 p-3 bg-slate-900/40 backdrop-blur-md rounded-xl border ${plan.popular ? 'border-indigo-500/30' : 'border-slate-700/50'} text-left md:text-center text-[10px] text-slate-300 space-y-1.5 shadow-inner`}>
                <p className="leading-tight"><i className="fas fa-check-circle text-green-400 mr-1.5"></i><strong className="text-white">{isCrmPlan ? 'Tüm Yapay Zeka CRM' : 'Tüm Yapay Zeka Web'}</strong> özelliklerine tam erişim.</p>
                {plan.cycle === 'lifetime' ? (
                     <p className="leading-tight"><i className="fas fa-check-circle text-green-400 mr-1.5"></i><strong className={theme.text}>Ömür boyu</strong> alan adı ve hosting <strong className={theme.text}>ücretsiz</strong>.</p>
                ) : (
                    <p className="leading-tight"><i className="fas fa-check-circle text-green-400 mr-1.5"></i>Alan adı, hosting ve bakım abonelik süresince <strong className="text-white">dahildir</strong>.</p>
                )}
            </div>
        </div>
    );
};


const AiWebPricingSection: React.FC<AiWebPricingSectionProps> = ({ planName, themeColor, isCrm }) => {
    const isCrmPlan = isCrm || planName.toLowerCase().includes('crm') || planName.toLowerCase().includes('yönetimi');
    const [offerEndDate] = useState(() => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const difference = +offerEndDate - +new Date();
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [offerEndDate]);

    const isOfferActive = timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0;

    const whatsappLink = `https://wa.me/905540118888?text=${encodeURIComponent(`Merhaba, "${planName}" için ücretsiz bir demo talep etmek istiyorum. Bana yardımcı olabilir misiniz?`)}`;

    const themeClasses = {
        blue: {
            gradient: 'from-slate-900 to-slate-800',
            bg: 'bg-blue-600',
            hoverBg: 'hover:bg-blue-700',
            text: 'text-blue-400',
            ring: 'ring-blue-500',
            accentBg: 'bg-blue-500/10',
            accentText: 'text-blue-300',
        },
        green: {
            gradient: 'from-slate-900 to-slate-800',
            bg: 'bg-green-600',
            hoverBg: 'hover:bg-green-700',
            text: 'text-green-400',
            ring: 'ring-green-500',
            accentBg: 'bg-green-500/10',
            accentText: 'text-green-300',
        }
    };
    const currentTheme = themeClasses[themeColor];
    
    const plans = [
        {
            title: "Aylık Esnek Plan",
            cycle: 'monthly' as const,
            price: 70,
            description: "Taahhütsüz, esnek başlangıç.",
            features: [
                { text: "Ödeme Periyodu", detail: "Aylık", highlight: false },
                { text: "Hosting & Alan Adı", detail: "Dahil", highlight: false },
                { text: "Sistem Güncellemeleri", detail: "Dahil", highlight: false },
                { text: "Öncelikli Destek", detail: "Yok", highlight: false, negative: true },
            ]
        },
        {
            title: "Yıllık Avantajlı Plan",
            cycle: 'annually' as const,
            price: 50,
            originalPrice: 70,
            description: "Uzun vadeli büyüme için en iyi değer.",
            popular: true,
            savings: "Yıllık ödemede ~%30 tasarruf edin!",
            features: [
                { text: "Ödeme Periyodu", detail: "Yıllık", highlight: false },
                { text: "Hosting & Alan Adı", detail: "Dahil", highlight: false },
                { text: "Sistem Güncellemeleri", detail: "Dahil", highlight: false },
                { text: "Öncelikli Destek", detail: "7/24 Dahil", highlight: true },
            ]
        },
        {
            title: "Ömür Boyu Lisans",
            cycle: 'lifetime' as const,
            price: isCrmPlan ? 995 : 1250,
            originalPrice: isCrmPlan ? 1250 : undefined,
            description: "Tek seferlik ödeme ile sonsuza dek sizin.",
            features: [
                { text: "Ödeme Periyodu", detail: "Tek Seferlik", highlight: true },
                { text: "Hosting & Alan Adı", detail: "Ömür Boyu Ücretsiz", highlight: true },
                { text: "Sistem Güncellemeleri", detail: "Ömür Boyu Dahil", highlight: true },
                { text: "Öncelikli VIP Destek", detail: "Ömür Boyu VIP", highlight: true },
            ]
        }
    ];

    const includedFeatures = [
        { icon: "fas fa-robot", title: "Yapay Zeka Asistanı" },
        { icon: "fas fa-mobile-alt", title: "Mobil Uyumlu Tasarım" },
        { icon: "fas fa-search-dollar", title: "SEO Altyapısı" },
        { icon: "fas fa-sitemap", title: "CRM Entegrasyonu" },
        { icon: "fas fa-headset", title: "7/24 Teknik Destek" },
        { icon: "fas fa-shield-alt", title: "Güvenli Altyapı (SSL)" },
    ];

    return (
        <div className="space-y-6 md:space-y-8 w-full max-w-7xl mx-auto">
            {/* Pricing Cards Container */}
            <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-950/90 backdrop-blur-2xl rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-600/50 shadow-[0_8px_30px_rgb(0,0,0,0.5)] relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
                
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Abonelik <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Planları</span></h2>
                    <p className="text-slate-400 text-sm">Şeffaf fiyatlandırma, gizli ücret yok.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10 w-full">
                    {plans.map(plan => (
                        <PricingCard key={plan.cycle} plan={plan} planName={planName} theme={currentTheme} isCrmPlan={isCrmPlan} />
                    ))}
                </div>
            </div>

            {/* Lower Information Section */}
            <section className={`bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-950/90 backdrop-blur-3xl rounded-3xl p-5 md:p-6 lg:p-8 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-slate-700/50 w-full max-w-7xl mx-auto`}>
                <div className={`absolute -top-24 -right-24 w-64 h-64 ${currentTheme.accentBg} rounded-full blur-[80px] opacity-30 pointer-events-none`}></div>
                <div className={`absolute -bottom-24 -left-24 w-64 h-64 ${currentTheme.accentBg} rounded-full blur-[80px] opacity-30 pointer-events-none`}></div>
                
                <div className="relative z-10 grid lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
                    
                    {/* Left: Campaign & Countdown (Col span 4) */}
                    <div className="lg:col-span-4 flex flex-col justify-center space-y-4 bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-slate-700/60 shadow-inner w-full h-full">
                        <div className="text-center lg:text-left">
                            <h2 className="text-lg md:text-xl font-bold text-white mb-1.5 leading-tight">İşletmenize Uygun Plan</h2>
                            <p className={`text-[11px] md:text-xs flex items-center justify-center lg:justify-start ${currentTheme.text} font-semibold mb-2`}>
                                <span className="relative flex h-2 w-2 mr-1.5 flex-shrink-0">
                                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentTheme.bg} opacity-75`}></span>
                                  <span className={`relative inline-flex rounded-full h-2 w-2 ${currentTheme.bg}`}></span>
                                </span>
                                Lansman Fiyatlarını Kaçırmayın
                            </p>
                            <p className="text-slate-400 text-[10.5px] md:text-[11px] leading-relaxed">
                                Esnek ödeme seçeneklerimizle otelinizin dijital dönüşümünü bugün başlatın.
                            </p>
                        </div>

                        <div className="pt-4 mt-auto border-t border-slate-700/50 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <p className="font-semibold text-slate-300 text-[9px] md:text-[10px] uppercase tracking-wider mb-2">Teklifin Sona Ermesine:</p>
                            <div className="flex space-x-2">
                                {isOfferActive ? (
                                    <>
                                        <div className="bg-black/50 rounded-xl py-1.5 px-2.5 w-12 shadow-inner border border-white/5"><span className={`text-sm md:text-base font-bold ${currentTheme.text} block`}>{String(timeLeft.days).padStart(2, '0')}</span><span className="block text-[8px] uppercase tracking-wider text-slate-400 mt-0.5">Gün</span></div>
                                        <div className="bg-black/50 rounded-xl py-1.5 px-2.5 w-12 shadow-inner border border-white/5"><span className={`text-sm md:text-base font-bold ${currentTheme.text} block`}>{String(timeLeft.hours).padStart(2, '0')}</span><span className="block text-[8px] uppercase tracking-wider text-slate-400 mt-0.5">Saat</span></div>
                                        <div className="bg-black/50 rounded-xl py-1.5 px-2.5 w-12 shadow-inner border border-white/5"><span className={`text-sm md:text-base font-bold ${currentTheme.text} block`}>{String(timeLeft.minutes).padStart(2, '0')}</span><span className="block text-[8px] uppercase tracking-wider text-slate-400 mt-0.5">Dk</span></div>
                                        <div className="bg-black/50 rounded-xl py-1.5 px-2.5 w-12 shadow-inner border border-white/5"><span className={`text-sm md:text-base font-bold ${currentTheme.text} block`}>{String(timeLeft.seconds).padStart(2, '0')}</span><span className="block text-[8px] uppercase tracking-wider text-slate-400 mt-0.5">Sn</span></div>
                                    </>
                                ) : (
                                    <p className="text-xs font-bold text-red-500 m-0 bg-red-400/10 px-4 py-2 rounded-lg border border-red-400/20">Teklif Sona Erdi!</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Middle: Included Features (Col span 5) */}
                    <div className="lg:col-span-5 flex flex-col justify-center w-full px-2 lg:px-4 py-2">
                        <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                            <i className="fas fa-gem text-indigo-400 text-sm"></i>
                            <h3 className="text-sm md:text-base font-bold text-white tracking-wide">
                                 Standart Özellikler
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {includedFeatures.map(feature => (
                                <div key={feature.title} className="flex items-center space-x-3 bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-md rounded-xl p-3 border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(99,102,241,0.1)] group">
                                    <div className={`h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-slate-900/80 border border-slate-700/50 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300 shadow-inner`}>
                                        <i className={`${feature.icon} text-sm ${currentTheme.text} group-hover:scale-110 transition-transform duration-300`}></i>
                                    </div>
                                    <p className="font-medium text-slate-300 text-[11px] md:text-xs leading-tight group-hover:text-white transition-colors duration-300">{feature.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Final Demo CTA (Col span 3) */}
                    <div className="lg:col-span-3 flex flex-col justify-center items-center text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900/60 to-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-indigo-500/20 shadow-lg w-full h-full relative overflow-hidden group">
                         <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none"></div>
                         
                         <div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-3 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                             <i className="fas fa-headset text-blue-400 text-xl"></i>
                         </div>
                         <h4 className="text-sm md:text-base font-bold text-white mb-1.5">İncelemek İster misiniz?</h4>
                         <p className="text-slate-300 text-[10px] md:text-[11px] mb-5 leading-tight max-w-[180px]">
                            Uzman ekibimizle canlı demo seansı planlayın.
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 text-[11px] md:text-xs w-full relative z-10 border border-indigo-400/20"
                        >
                            <i className="fab fa-whatsapp text-sm md:text-base"></i>
                            <span>Canlı Demo Talep Et</span>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AiWebPricingSection;