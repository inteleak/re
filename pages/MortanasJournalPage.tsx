import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AssistantPortal from '../components/AssistantPortal';
import CreativeStudioSection from '../components/CreativeStudioSection';
import AdvancedAISection from '../components/AdvancedAISection';
import FAQSection from '../components/FAQSection';

const sliderImages = [
    "http://mortanascompany.com/create/resim/ha5.png",
    "http://mortanascompany.com/create/resim/ha6.png",
    "http://mortanascompany.com/create/resim/ha7.png",
    "http://mortanascompany.com/create/resim/ha.png",
    "http://mortanascompany.com/create/resim/ha1.png",
    "http://mortanascompany.com/create/resim/ha2.png",
    "http://mortanascompany.com/create/resim/ha3.png",
    "http://mortanascompany.com/create/resim/ha4.png"
];

const milestones = [
    {
        year: "Problem",
        title: "Manuel İş Yükü ve Zaman Kaybı",
        shortDesc: "İçerik üretimi, proje yönetimi ve görsel tasarım gibi süreçlere harcanan zaman ve emek, verimliliği azaltır ve yaratıcılığı sınırlar. Bu rutin ve tekrarlayan işler yüzünden ekiplerin asıl potansiyeli ve enerjisi ortaya çıkamadan tükenir.",
        longDesc: "Geleneksel iş akışları, özellikle metin ve görsel içerik oluşturma, fikir geliştirme ve proje takibi gibi alanlarda önemli bir manuel iş yükü yaratır. Bu durum, çalışanların daha stratejik görevlere odaklanmasını engeller ve bir şirketin inovasyon hızını yavaşlatır. MorBot, bu sorunları ortadan kaldırarak iş süreçlerinizi dönüştürür.",
        icon: "fas fa-exclamation-triangle"
    },
    {
        year: "Çözüm",
        title: "MorBot: Yapay Zeka Gücüyle Dönüşüm",
        shortDesc: "MorBot, metin ve görsel oluşturma, proje yönetimi ve fikir geliştirme gibi görevleri otomatikleştiren hepsi bir arada bir yapay zeka asistanıdır. Böylece karmaşık iş akışlarınızı tek bir platform üzerinden kusursuzca yönetebilirsiniz.",
        longDesc: "MorBot, işletmelere ve bireylere verimlilik ve yaratıcılık için benzersiz bir araç sunmak amacıyla en son yapay zeka teknolojilerini kullanır. Metin ve görsel oluşturma yeteneklerinin yanı sıra, kullanıcıları proje yönetimi ve stratejik planlama gibi alanlarda da destekler. Bu, manuel işi en aza indirerek zamandan ve maliyetten tasarruf etmenizi sağlar.",
        icon: "fas fa-lightbulb"
    },
    {
        year: "Yaratıcılık",
        title: "Metin ve Görsel Üretimi",
        shortDesc: "MorBot, yüksek kaliteli metinler ve özgün görselleri saniyeler içinde oluşturarak içerik pazarlaması, reklamcılık ve tasarım süreçlerinizi hızlandırır. Markanızın dijital varlığını güçlendirmek artık çok daha zahmetsiz ve profesyonel.",
        longDesc: "MorBot'un gelişmiş metin ve görsel oluşturma yetenekleri, yaratıcı süreçlerinizi temelden değiştirir. İster bir blog yazısı, ister bir sosyal medya gönderisi veya bir ürün görseli olsun, MorBot ihtiyacınız olan içeriği hızlı ve etkili bir şekilde sağlar. Bu, içerik üretiminde sınırsız bir potansiyel yaratır.",
        icon: "fas fa-paint-brush"
    },
    {
        year: "Verimlilik",
        title: "Akıllı Proje Yönetimi",
        shortDesc: "MorBot ile proje görevlerinizi otomatik olarak oluşturun, önceliklendirin ve yönetin. Ekipleriniz için daha iyi bir işbirliği ve takip süreci sağlayın. Hedeflerinize giden yolu basitleştirerek projenizin başarısını garanti altına alın.",
        longDesc: "Proje yönetimini daha akıllı hale getirin. MorBot, proje hedeflerinize dayalı görevler tanımlar, kaynakları optimize eder ve ilerlemeyi gerçek zamanlı olarak izler. Bu, ekibinizin daha uyumlu çalışmasını sağlar ve projelerinizin zamanında tamamlanmasını garantileyerek size zaman ve çaba kazandırır.",
        icon: "fas fa-tasks"
    }
];

const MortanasJournalPage: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedMilestone, setSelectedMilestone] = useState<typeof milestones[0] | null>(null);
    const [isNightMode, setIsNightMode] = useState(false);
    const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    const startAutoSlide = () => {
        if (autoSlideIntervalRef.current) clearInterval(autoSlideIntervalRef.current);
        autoSlideIntervalRef.current = setInterval(nextImage, 6000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (autoSlideIntervalRef.current) clearInterval(autoSlideIntervalRef.current);
        };
    }, [currentImageIndex]); // restart timer on manual change

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="relative min-h-screen text-[#e2e8f0] flex flex-col pt-24 pb-12 overflow-hidden border-t border-white/10 bg-[#0d0414]">
            {/* Custom Embedded CSS for Animations & Advanced Layers */}
            <style>{`
                @keyframes background-gradient-animation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .bg-cosmic-animate {
                    background: linear-gradient(-45deg, #0d0414, #1a084c, #110433, #0d0414);
                    background-size: 400% 400%;
                    animation: background-gradient-animation 20s ease-in-out infinite;
                }
                .bg-night-static {
                    background: linear-gradient(-45deg, #121021, #1f1d36);
                    background-size: 100% 100%;
                }
                .futuristic-grid {
                    position: absolute;
                    inset: 0;
                    opacity: 0.6;
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                    background-size: 40px 40px;
                    pointer-events: none;
                    z-index: 2;
                }
            `}</style>

            {/* Background Transitions */}
            <div 
                className={`absolute inset-0 z-0 transition-all duration-1000 ${isNightMode ? 'bg-night-static' : 'bg-cosmic-animate'}`}
            ></div>
            
            {/* Grid Pattern Layer */}
            <div className="futuristic-grid"></div>

            <main className="relative z-10 flex-grow flex flex-col w-full">
                <section id="milestones" className="w-full max-w-7xl mx-auto px-4 mt-8 relative">
                    {/* Futuristic High-Trust Theme Toggle */}
                    <div className="flex justify-end mb-4 relative z-30">
                        <button 
                            onClick={() => setIsNightMode(!isNightMode)}
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-[#160b2d]/85 backdrop-blur-md hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all cursor-pointer font-bold text-[11px] text-purple-300 active:scale-95 duration-150"
                        >
                            <i className={`fas ${isNightMode ? 'fa-moon text-purple-400' : 'fa-wand-magic-sparkles text-purple-400 animate-pulse'}`}></i>
                            <span>{isNightMode ? 'GECE MODU: ETKİN' : 'TEMA: KOZMİK HAREKETLİ'}</span>
                        </button>
                    </div>

                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white"
                    >
                        MorBot: Yapay Zeka ile Geleceği Keşfet
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch lg:h-[470px]">
                        {/* Image Slider Area on the Left */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-[300px] sm:h-[350px] lg:h-full rounded-2xl shadow-xl overflow-hidden relative group bg-black/20"
                        >
                            <div 
                                className="flex h-full transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {sliderImages.map((src, index) => (
                                    <div key={index} className="w-full h-full flex-shrink-0">
                                        <img 
                                            src={src} 
                                            alt={`Slider Image ${index + 1}`} 
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = 'https://placehold.co/800x800/1a084c/FFF?text=Görsel+Yok';
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                            
                            {/* Previous Button */}
                            <button 
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-purple-400"
                            >
                                <i className="fas fa-chevron-left drop-shadow-md"></i>
                            </button>
                            
                            {/* Next Button */}
                            <button 
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-purple-400"
                            >
                                <i className="fas fa-chevron-right drop-shadow-md"></i>
                            </button>

                            {/* Dots Container */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {sliderImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleDotClick(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Milestone Cards on the Right */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-4 rounded-xl shadow-xl flex flex-col items-center transition-all bg-gradient-to-br from-[#3a1c71] to-[#1b0a33] border border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] cursor-pointer group h-full"
                                    onClick={() => setSelectedMilestone(milestone)}
                                >
                                    <div className="bg-purple-600 w-6 h-6 rounded-full flex items-center justify-center mb-1 top-2 z-10 text-white shadow-xl group-hover:scale-110 transition-transform">
                                        <i className={`${milestone.icon} text-[10px]`}></i>
                                    </div>
                                    <h3 className="text-[13px] sm:text-sm font-bold text-purple-400 mb-2 mt-1 text-center line-clamp-2">
                                        {milestone.year}: {milestone.title}
                                    </h3>
                                    <p className="text-white/90 font-medium mb-3 text-[12px] leading-relaxed flex-grow line-clamp-5 text-justify px-1">
                                        {milestone.shortDesc}
                                    </p>
                                    <button 
                                        className="mt-auto bg-purple-600 border border-purple-400 hover:bg-purple-500 text-white font-bold py-1 px-3 text-[10px] sm:text-[11px] rounded-full shadow-lg transition-all"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedMilestone(milestone);
                                        }}
                                    >
                                        Detaylar
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <AssistantPortal />
                <CreativeStudioSection />
                <AdvancedAISection />
                <FAQSection />
            </main>

            {/* Modal */}
            <AnimatePresence>
                {selectedMilestone && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                            onClick={() => setSelectedMilestone(null)}
                        />
                        <motion.div 
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            className="relative bg-[#121021] border-2 border-[#7f8de0] p-8 rounded-3xl shadow-2xl w-full max-w-xl text-slate-100 z-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedMilestone(null)}
                                className="absolute top-4 right-6 text-3xl font-bold text-white/50 hover:text-red-400 transition-colors"
                            >
                                &times;
                            </button>
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="bg-purple-600/20 p-3 rounded-full text-purple-400">
                                    <i className={`${selectedMilestone.icon} text-2xl`}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-purple-400">
                                    {selectedMilestone.year}: {selectedMilestone.title}
                                </h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-justify text-sm sm:text-base">
                                {selectedMilestone.longDesc}
                            </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MortanasJournalPage;
