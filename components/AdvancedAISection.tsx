import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Edit, Camera, Mic, FlaskConical, ListTodo, Newspaper,
    Megaphone, FileText, CheckCheck, BookOpen, Film, AudioLines, FileAudio
} from 'lucide-react';

const aiCards = [
    { title: "Metin ve Makale Asistanı", desc: "Makale, köşe yazısı, haber ve basın bülteni üretimi.", icon: <Edit className="w-8 h-8" /> },
    { title: "Görsel & Video Asistanı", desc: "Metinden görsel ve video üretin, video scriptleri hazırlayın.", icon: <Camera className="w-8 h-8" /> },
    { title: "Sesli İçerik Asistanı", desc: "Metni sese dönüştürün ve ses kayıtlarını metne çevirin.", icon: <Mic className="w-8 h-8" /> },
    { title: "Araştırma Asistanı", desc: "Hızlı ve güvenilir kaynak taraması yapın ve bilgileri doğrulayın.", icon: <FlaskConical className="w-8 h-8" /> },
    { title: "Planlama & Görev Asistanı", desc: "Kişisel ve profesyonel projeleriniz için akıllı planlar oluşturun.", icon: <ListTodo className="w-8 h-8" /> },
    { title: "Haber Yazma Asistanı", desc: "Hızlı ve doğru haber makaleleri hazırlayın.", icon: <Newspaper className="w-8 h-8" /> },
    { title: "Manşet Üretici Asistanı", desc: "Dikkat çekici ve etkili manşetler oluşturun.", icon: <Megaphone className="w-8 h-8" /> },
    { title: "Basın Bülteni Asistanı", desc: "Profesyonel basın bültenleri oluşturun.", icon: <FileText className="w-8 h-8" /> },
    { title: "Medya Doğruluk Kontrolü Asistanı", desc: "Bilgilerin doğruluğunu anında kontrol edin.", icon: <CheckCheck className="w-8 h-8" /> },
    { title: "Özet Motoru Asistanı", desc: "Uzun metinleri saniyeler içinde özetleyin.", icon: <BookOpen className="w-8 h-8" /> },
    { title: "Video Haber Asistanı", desc: "Metinden hızlıca video haberler oluşturun.", icon: <Film className="w-8 h-8" /> },
    { title: "Metin Seslendirme Asistanı", desc: "Metinlerinizi doğal bir sesle dinleyin.", icon: <AudioLines className="w-8 h-8" /> },
    { title: "Haber Deşifre Asistanı", desc: "Ses kayıtlarınızı metne dönüştürün.", icon: <FileAudio className="w-8 h-8" /> }
];

const sliderImages = [
    "https://mortanascompany.com/create/resim/1.png",
    "https://mortanascompany.com/create/resim/2.png",
    "https://mortanascompany.com/create/resim/3.png",
    "https://mortanascompany.com/create/resim/4.png",
    "https://mortanascompany.com/create/resim/5.png"
];

const AdvancedAISection: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const cardThemes = [
        { // Blue
            border: "border-2 border-blue-500/45 hover:border-blue-400",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            circle: "bg-blue-500/20 group-hover:bg-blue-500/30",
            line: "via-blue-400",
            iconBg: "from-blue-500 to-indigo-650",
            shadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
            text: "group-hover:text-blue-300",
            iconColor: "text-white"
        },
        { // Purple
            border: "border-2 border-purple-500/45 hover:border-purple-400",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            circle: "bg-purple-500/20 group-hover:bg-purple-500/30",
            line: "via-purple-400",
            iconBg: "from-purple-500 to-pink-650",
            shadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]",
            text: "group-hover:text-purple-300",
            iconColor: "text-white"
        },
        { // Cyan
            border: "border-2 border-cyan-500/45 hover:border-cyan-400",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            circle: "bg-cyan-500/20 group-hover:bg-cyan-500/30",
            line: "via-cyan-400",
            iconBg: "from-cyan-500 to-blue-650",
            shadow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]",
            text: "group-hover:text-cyan-300",
            iconColor: "text-white"
        },
        { // Emerald
            border: "border-2 border-emerald-500/45 hover:border-emerald-400",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            circle: "bg-emerald-500/20 group-hover:bg-emerald-500/30",
            line: "via-emerald-400",
            iconBg: "from-emerald-500 to-teal-650",
            shadow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]",
            text: "group-hover:text-emerald-300",
            iconColor: "text-white"
        },
        { // Pink
            border: "border-2 border-pink-500/45 hover:border-pink-400",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            circle: "bg-pink-500/20 group-hover:bg-pink-500/30",
            line: "via-pink-400",
            iconBg: "from-pink-500 to-rose-650",
            shadow: "hover:shadow-[0_0_25px_rgba(236,72,153,0.35)]",
            text: "group-hover:text-pink-300",
            iconColor: "text-white"
        },
        { // Amber
            border: "border-2 border-amber-500/45 hover:border-amber-400",
            bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
            circle: "bg-amber-500/20 group-hover:bg-amber-500/30",
            line: "via-amber-400",
            iconBg: "from-amber-500 to-orange-650",
            shadow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]",
            text: "group-hover:text-amber-300",
            iconColor: "text-white"
        }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    useEffect(() => {
        const autoSlide = setInterval(nextImage, 6000);
        return () => clearInterval(autoSlide);
    }, []);

    const visibleCards = showAll ? aiCards : aiCards.slice(0, 12);

    return (
        <section className="w-full relative z-20 mt-24 pb-16">
            {/* Prominent Divider / Şerit */}
            <div className="w-full max-w-7xl mx-auto h-1 mb-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent relative">
                <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80"></div>
                <div className="absolute inset-0 blur-sm bg-purple-400 opacity-50"></div>
            </div>

            <div className="w-[90%] lg:w-[85%] mx-auto antialiased relative">
                {/* Background effects for this section if needed */}
                <div className="absolute inset-0 z-[-1] pointer-events-none opacity-50" style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>

                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-center mb-4 text-white"
                >
                    MorBot: Gelişmiş Yapay Zeka Çözümleri
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-center text-lg max-w-2xl mx-auto mb-10 text-gray-200"
                >
                    MorBot, iş akışınızı kolaylaştıran, yaratıcılığınızı artıran ve verimliliğinizi maksimuma çıkaran hepsi bir arada yapay zeka platformudur.
                </motion.p>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    
                    {/* Left Side: Cards */}
                    <div className="w-full lg:w-[65%] flex flex-col items-center justify-between">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full lg:h-[35rem]"
                        >
                            <AnimatePresence>
                                {visibleCards.map((card, index) => {
                                    const t = cardThemes[index % cardThemes.length];
                                    return (
                                        <motion.div 
                                            key={index}
                                            initial={showAll && index >= 12 ? { opacity: 0, scale: 0.8 } : false}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                            className={`group relative rounded-xl p-3.5 flex items-center justify-start text-left gap-3 ${t.bg} border-2 ${t.border} transition-all duration-300 ${t.shadow} hover:scale-[1.02] h-full overflow-hidden`}
                                        >
                                            {/* Ambient background glows */}
                                            <div className={`absolute -top-12 -right-12 w-20 h-20 rounded-full blur-[20px] transition-all duration-700 pointer-events-none ${t.circle}`}></div>
                                            <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent ${t.line} to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                            {/* Icon Container with Gradient */}
                                            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-md relative z-10 flex-shrink-0 text-white [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-white`}>
                                                {card.icon}
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex-grow min-w-0 relative z-10">
                                                <h3 className={`text-xs font-bold text-white ${t.text} transition-colors duration-300 mb-0.5 truncate`}>
                                                    {card.title}
                                                </h3>
                                                <p className="text-slate-300 text-[11px] line-clamp-2 leading-tight">
                                                    {card.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>
                        
                        {!showAll && aiCards.length > 12 && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="w-full flex justify-center mt-6"
                            >
                                <button 
                                    onClick={() => setShowAll(true)}
                                    className="bg-[#a855f7] hover:bg-[#c084fc] hover:scale-105 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg text-sm"
                                >
                                    Daha Fazlasını Göster
                                </button>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Side: Slider */}
                    <div className="w-full lg:w-[35%] flex items-start justify-center pt-2 lg:pt-0">
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-[25rem] sm:h-[30rem] lg:h-[35rem] rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.3),0_0_50px_rgba(168,85,247,0.2)] border border-purple-500/30 group"
                        >
                            <div 
                                className="flex h-full w-full transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {sliderImages.map((src, index) => (
                                    <img 
                                        key={index} 
                                        src={src} 
                                        alt={`Kaydırıcı Resim ${index + 1}`} 
                                        className="w-full h-full object-cover flex-shrink-0"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = 'https://placehold.co/800x1200/1a084c/FFF?text=Görsel+Yok';
                                        }}
                                    />
                                ))}
                            </div>
                            
                            <button 
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100 z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100 z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdvancedAISection;
