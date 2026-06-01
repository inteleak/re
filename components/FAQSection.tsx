import React, { useState } from 'react';
import { Newspaper, PenTool, CheckCheck, Mic, Feather, Archive, Search, Briefcase, Shrink, Video, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
    { 
        title: 'Yapay zeka ile etkili manşetler nasıl oluşturulur?', 
        icon: <Newspaper className="w-5 h-5" />,
        desc: 'Sistem, haberinizin ana metnini analiz eder ve okuyucu tıklama psikolojisine, SEO kriterlerine uygun, tıklama oranı yüksek alternatif manşetler üretir.' 
    },
    { 
        title: 'Yapay zeka özgün köşe yazıları yazabilir mi?', 
        icon: <PenTool className="w-5 h-5" />,
        desc: 'Evet, belirlediğiniz konu, üslup ve bakış açısına göre, tekrara düşmeyen, tamamen özgün ve yaratıcı makaleler veya köşe yazıları kaleme alabilir.' 
    },
    { 
        title: 'İçeriğimin doğruluğunu nasıl kontrol ederim?', 
        icon: <CheckCheck className="w-5 h-5" />,
        desc: 'Medya doğruluk kontrolü asistanı ile metindeki iddiaları, istatistikleri ve bilgileri güvenilir küresel veri tabanları ve haber kaynakları üzerinden sorgulayarak saniyeler içinde analiz eder.' 
    },
    { 
        title: 'Ses dosyalarını metne dönüştürmek ne kadar sürer?', 
        icon: <Mic className="w-5 h-5" />,
        desc: 'Gelişmiş deşifre motorumuz, saatlik ses veya video kayıtlarını sadece birkaç dakika içinde yüksek doğruluk oranıyla ve konuşmacı ayrımı yaparak yazılı metne dönüştürür.' 
    },
    { 
        title: 'Haber metni yazarken nelere dikkat etmeli?', 
        icon: <Feather className="w-5 h-5" />,
        desc: 'Yazım kurallarına uygunluk, 5N1K yapısının korunması ve SEO anahtar kelimelerinin dengeli dağılımına dikkat ederek editör asistanımız size anlık iyileştirme önerileri sunar.' 
    },
    { 
        title: 'Yapay zeka ile büyük arşivlerde nasıl araştırma yapılır?', 
        icon: <Archive className="w-5 h-5" />,
        desc: 'Büyük veri setlerini, PDF dokümanları veya geçmiş arşiv yazılarını sisteme yükleyerek anlamsal arama (semantic search) ile odaklanmış analizler gerçekleştirebilirsiniz.' 
    },
    { 
        title: 'Yapay zeka ile yapılan araştırmalar güvenilir mi?', 
        icon: <Search className="w-5 h-5" />,
        desc: 'Sistemimiz ürettiği her bilgiyi doğrulanabilir referanslar, akademik kaynaklar veya resmi veriler ile destekleyerek kaynak gösterir ve asılsız iddiaların önüne geçer.' 
    },
    { 
        title: 'Yapay zeka ile iş planı oluşturmanın avantajları nelerdir?', 
        icon: <Briefcase className="w-5 h-5" />,
        desc: 'Pazar analizi, rakip tespiti, bütçe öngörüleri ve risk yönetimini otomatik analiz ederek saatler süren strateji çalışmalarını saniyeler içinde yapılandırılmış şablonlara döker.' 
    },
    { 
        title: 'Uzun metinleri özetlerken bilgi kaybı olur mu?', 
        icon: <Shrink className="w-5 h-5" />,
        desc: 'Özet motorumuz anlamsal bütünlüğü koruyarak en kritik iddiaları, sayısal verileri ve kararları seçip çıkarır, böylece bağlam kaybı olmadan zamandan tasarruf sağlarsınız.' 
    },
    { 
        title: 'Metinden video haber üretimi nasıl çalışır?', 
        icon: <Video className="w-5 h-5" />,
        desc: 'Hazırladığınız haber metni doğrultusunda sistem uygun stok görselleri ve videoları eşleştirir, profesyonel seslendirme ekleyerek yayına hazır video taslakları oluşturur.' 
    }
];

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const cardThemes = [
        { // Blue
            border: "border-blue-500/40 hover:border-blue-400",
            borderLight: "border-blue-500/25",
            borderHover: "hover:border-blue-500/60",
            borderActive: "border-blue-500/80",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            bgActive: "bg-gradient-to-br from-[#061e47] to-[#0d0414]",
            circle: "bg-blue-500/20 group-hover:bg-blue-500/30",
            line: "via-blue-400",
            iconBg: "from-blue-500 to-indigo-650",
            iconColor: "text-blue-400",
            shadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]",
            shadowActive: "shadow-[0_0_20px_rgba(59,130,246,0.25)]",
            textLight: "text-blue-300",
            textHover: "group-hover:text-blue-300",
            badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
            accent: "text-blue-400",
            accentHover: "group-hover:text-blue-300",
        },
        { // Purple
            border: "border-purple-500/40 hover:border-purple-400",
            borderLight: "border-purple-500/25",
            borderHover: "hover:border-purple-500/60",
            borderActive: "border-purple-500/80",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            bgActive: "bg-gradient-to-br from-[#230948] to-[#0d0414]",
            circle: "bg-purple-500/20 group-hover:bg-purple-500/30",
            line: "via-purple-400",
            iconBg: "from-purple-500 to-pink-650",
            iconColor: "text-purple-400",
            shadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]",
            shadowActive: "shadow-[0_0_20px_rgba(168,85,247,0.25)]",
            textLight: "text-purple-300",
            textHover: "group-hover:text-purple-300",
            badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
            accent: "text-purple-400",
            accentHover: "group-hover:text-purple-300",
        },
        { // Cyan
            border: "border-cyan-500/40 hover:border-cyan-400",
            borderLight: "border-cyan-500/25",
            borderHover: "hover:border-cyan-500/60",
            borderActive: "border-cyan-500/80",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            bgActive: "bg-gradient-to-br from-[#022a36] to-[#0d0414]",
            circle: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
            line: "via-cyan-400",
            iconBg: "from-cyan-500 to-blue-650",
            iconColor: "text-cyan-400",
            shadow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]",
            shadowActive: "shadow-[0_0_20px_rgba(6,182,212,0.25)]",
            textLight: "text-cyan-300",
            textHover: "group-hover:text-cyan-300",
            badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
            accent: "text-cyan-400",
            accentHover: "group-hover:text-cyan-300",
        },
        { // Emerald
            border: "border-emerald-500/40 hover:border-emerald-400",
            borderLight: "border-emerald-500/25",
            borderHover: "hover:border-emerald-500/60",
            borderActive: "border-emerald-500/80",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            bgActive: "bg-gradient-to-br from-[#062817] to-[#0d0414]",
            circle: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
            line: "via-emerald-400",
            iconBg: "from-emerald-500 to-teal-650",
            iconColor: "text-emerald-400",
            shadow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]",
            shadowActive: "shadow-[0_0_20px_rgba(16,185,129,0.25)]",
            textLight: "text-emerald-300",
            textHover: "group-hover:text-emerald-300",
            badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
            accent: "text-emerald-400",
            accentHover: "group-hover:text-emerald-300",
        },
        { // Pink
            border: "border-pink-500/40 hover:border-pink-400",
            borderLight: "border-pink-500/25",
            borderHover: "hover:border-pink-500/60",
            borderActive: "border-pink-500/80",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            bgActive: "bg-gradient-to-br from-[#2f0823] to-[#0d0414]",
            circle: "bg-pink-500/20 group-hover:bg-pink-500/30",
            line: "via-pink-400",
            iconBg: "from-pink-500 to-rose-650",
            iconColor: "text-pink-400",
            shadow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]",
            shadowActive: "shadow-[0_0_20px_rgba(236,72,153,0.25)]",
            textLight: "text-pink-300",
            textHover: "group-hover:text-pink-300",
            badge: "bg-pink-500/10 text-pink-300 border-pink-500/30",
            accent: "text-pink-400",
            accentHover: "group-hover:text-pink-300",
        },
        { // Amber
            border: "border-amber-500/40 hover:border-amber-400",
            borderLight: "border-amber-500/25",
            borderHover: "hover:border-amber-500/60",
            borderActive: "border-amber-500/80",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            bgActive: "bg-gradient-to-br from-[#2a1705] to-[#0d0414]",
            circle: "bg-amber-500/20 group-hover:bg-amber-500/30",
            line: "via-amber-400",
            iconBg: "from-amber-500 to-orange-650",
            iconColor: "text-amber-400",
            shadow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]",
            shadowActive: "shadow-[0_0_20px_rgba(245,158,11,0.25)]",
            textLight: "text-amber-300",
            textHover: "group-hover:text-amber-300",
            badge: "bg-amber-500/10 text-amber-300 border-amber-500/30",
            accent: "text-amber-400",
            accentHover: "group-hover:text-amber-300",
        }
    ];
    return (
        <section className="w-full relative z-20 mt-24 pb-16">
            <style>{`
                @keyframes gradient-animation-faq {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .demo-link-faq {
                    background-color: rgba(168, 85, 247, 0.15);
                    border: 1px solid rgba(168, 85, 247, 0.5);
                    color: #c084fc;
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 0.25rem 0.625rem;
                    border-radius: 9999px;
                    text-decoration: none;
                    transition: all 0.4s ease-in-out;
                    opacity: 0;
                    transform: translateX(20px);
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                }
                .group:hover .demo-link-faq {
                    opacity: 1;
                    transform: translateX(0);
                    color: white;
                    background: linear-gradient(90deg, #8e2de2, #4a00e0, #8e2de2);
                    background-size: 250% 100%;
                    animation: gradient-animation-faq 4s ease infinite;
                    border-color: #c084fc;
                    box-shadow: 0 0 20px rgba(142, 45, 226, 0.6);
                }
                .demo-link-faq:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 25px rgba(142, 45, 226, 0.8);
                }
                .demo-link-faq::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -120%;
                    width: 80%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
                    transform: skewX(-30deg);
                    transition: left 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                .demo-link-faq:hover::before {
                    left: 120%;
                }
                .demo-link-faq .link-icon-faq {
                    margin-left: 0.375rem;
                    transition: transform 0.3s ease-in-out;
                }
                .demo-link-faq:hover .link-icon-faq {
                    transform: translateX(3px);
                }
            `}</style>

            {/* Prominent Divider / Şerit */}
            <div className="w-full max-w-7xl mx-auto h-1 mb-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent relative">
                <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80"></div>
                <div className="absolute inset-0 blur-sm bg-purple-400 opacity-50"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative antialiased z-10">
                <div className="max-w-3xl mx-auto text-center mb-8">
                    <span className="bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white py-1 px-3.5 rounded-full text-xs font-semibold inline-block mb-3 shadow-[0_0_15px_rgba(142,45,226,0.4)]">
                        Sıkça Sorulan Sorular
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                        Yapay Zeka Araçlarımız Hakkında
                    </h2>
                    <p className="mt-2 text-base text-gray-400 max-w-2xl mx-auto">
                        İçerik üretiminden video oluşturmaya kadar, platformumuzun yetenekleri hakkında en sık sorulan sorular ve cevapları burada.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
                    <a href="https://www.mortanascreate.com/studio" target="_blank" rel="noopener noreferrer" 
                        className="bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white font-semibold py-2.5 px-6 rounded-full inline-block w-full sm:w-auto text-sm shadow-[0_0_15px_rgba(142,45,226,0.5)] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(142,45,226,0.8)] transition-all duration-300 text-center">
                        Platforma Erişin
                    </a>
                    <a href="https://www.mortanascreate.com/mortan" target="_blank" rel="noopener noreferrer" 
                        className="bg-slate-900/50 border border-[#4a00e0] hover:border-[#8e2de2] hover:bg-slate-800/70 text-white font-semibold py-2.5 px-6 rounded-full inline-block w-full sm:w-auto text-sm hover:-translate-y-1 transition-all duration-300 text-center">
                        Kişisel Asistan
                    </a>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                    <div className="w-full lg:w-1/3 h-[485px] overflow-y-auto pr-1 custom-scrollbar">
                        <div className="space-y-2">
                            {features.map((feature, idx) => {
                                const isOpen = activeIndex === idx;
                                const t = cardThemes[idx % cardThemes.length];
                                return (
                                    <div 
                                        key={idx} 
                                        className={`group rounded-xl border transition-all duration-300 overflow-hidden relative ${
                                            isOpen 
                                            ? `${t.borderActive} ${t.bgActive} ${t.shadowActive}` 
                                            : `${t.borderLight} bg-[#0d0414] ${t.borderHover} hover:bg-gradient-to-br ${t.bg} ${t.shadow}`
                                        }`}
                                    >
                                        {/* Ambient background glow and top line light */}
                                        {isOpen && (
                                            <>
                                                <div className={`absolute -top-12 -right-12 w-20 h-20 rounded-full blur-[20px] transition-all duration-700 pointer-events-none ${t.circle}`}></div>
                                                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent ${t.line} to-transparent`}></div>
                                            </>
                                        )}
                                        {/* Header / Clickable Accordion Row */}
                                        <button
                                            onClick={() => setActiveIndex(isOpen ? null : idx)}
                                            className="w-full text-left p-3 flex items-center justify-between gap-3 focus:outline-none cursor-pointer relative z-10"
                                        >
                                            <div className="flex items-center gap-2.5 min-w-0 flex-grow">
                                                <div className={`flex-shrink-0 transition-colors duration-300 ${
                                                    isOpen ? t.textLight : `${t.accent} ${t.accentHover}`
                                                } [&_svg]:w-4 [&_svg]:h-4`}>
                                                    {feature.icon}
                                                </div>
                                                <span className={`font-bold text-[11px] truncate transition-colors duration-300 ${
                                                    isOpen ? t.textLight : 'text-white'
                                                }`} title={feature.title}>
                                                    {feature.title}
                                                </span>
                                            </div>
                                            <ChevronDown className={`w-3.5 h-3.5 ${isOpen ? t.textLight : t.accent} flex-shrink-0 transition-transform duration-300 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`} />
                                        </button>

                                        {/* Expanded Information Panel */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    key="content"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                    className="overflow-hidden relative z-10"
                                                >
                                                    <div className={`px-3 pb-3.5 pt-1.5 border-t ${t.borderLight} text-[#cbd5e1] text-[10.5px] leading-relaxed flex flex-col gap-2.5`}>
                                                        <p className="text-slate-300 font-medium">{feature.desc}</p>
                                                        <div className="flex justify-end pt-0.5">
                                                            <a 
                                                                href="https://www.mortanascreate.com/studio" 
                                                                target="_blank" 
                                                                rel="noopener noreferrer" 
                                                                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold text-white bg-gradient-to-r ${t.iconBg} hover:opacity-90 hover:scale-[1.02] transition-all duration-300 active:scale-95`}
                                                            >
                                                                <span>Demoyu Görüntüle</span>
                                                                <ArrowRight className="w-2.5 h-2.5" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                        <div className="w-full h-[485px] rounded-2xl border-2 border-purple-600/80 shadow-[0_0_30px_rgba(142,45,226,0.3)] bg-black/20 p-1 relative overflow-hidden">
                            <iframe src="https://journalist-mortan-453604928185.us-west1.run.app/"
                                    className="w-full h-full rounded-xl border-0"
                                    title="Kişisel Asistan"
                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
                                    allow="microphone">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
