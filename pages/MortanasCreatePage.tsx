import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const sliderImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1675276329768-e3ac5924efcc?q=80&w=2564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2564&auto=format&fit=crop",
];

const features = [
    {
        id: "image",
        title: "Yapay Zeka ile Görsel Üretimi",
        desc: "İhtiyacınız olan her türlü görsel aracı saniyeler içinde tasarlayın. Marka dilinize uygun, yüksek çözünürlüklü ve tamamen benzersiz imajlar oluşturun.",
        icon: "fas fa-image"
    },
    {
        id: "video",
        title: "Otonom Video Prodüksiyonu",
        desc: "Senaryodan kurguya kadar tüm video oluşturma sürecini yapay zekaya devredin. Sosyal medya reklamlarından kurumsal tanıtım videolarına kadar projenizi tamamlayın.",
        icon: "fas fa-video"
    },
    {
        id: "pdf",
        title: "Dinamik PDF ve Raporlama",
        desc: "İş verilerinizi saniyeler içinde etkileyici, kurum kültürünüzü yansıtan PDF dökümanlarına, sektörel raporlara ve analizlere dönüştürün.",
        icon: "fas fa-file-pdf"
    },
    {
        id: "presentation",
        title: "Akıllı Sunum Hazırlayıcı",
        desc: "Verdiğiniz kısa bir brifle slaytlarınızı görseller, grafikler ve etkileyici metinlerle dolu, yatırımcı veya müşteri sunumlarına anında hazır edin.",
        icon: "fas fa-project-diagram"
    }
];

const MortanasCreatePage: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeFeature, setActiveFeature] = useState(features[0].id);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen text-[#e2e8f0] flex flex-col pt-24 pb-12 overflow-hidden border-t border-white/10 bg-[#0a0512]">
            {/* Background effects */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1d1033] via-[#0a0512] to-[#0a0512]"></div>
            
            <div className="absolute inset-0 opacity-40 z-0 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            <main className="relative z-10 flex-grow flex flex-col w-full max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="text-center mt-12 mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-bold tracking-[0.2em] text-[#b084ff] bg-purple-500/10 border border-purple-500/20 px-6 py-2 rounded-full uppercase mb-6"
                    >
                        THE ULTIMATE CREATIVE SUITE
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
                    >
                        Mortanas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#00d2ff]">Create</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-10"
                    >
                        İşletmeler ve kreatif ajanslar için tasarlanmış yenilikçi SaaS platformu. Yapay zeka ile görsel, video, pdf analizler ve yatırımcı sunumlarını tek pencereden saniyeler içinde otonom olarak üretin.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link to="/kurumsal#iletisim" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                            Platformu Ücretsiz Deneyin <i className="fas fa-arrow-right ml-2 text-sm"></i>
                        </Link>
                    </motion.div>
                </div>

                {/* Dashboard Slider / Visuals */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.15)] mb-24"
                >
                    <div className="absolute top-4 left-4 right-4 z-20 flex gap-2">
                        {sliderImages.map((_, idx) => (
                            <div key={idx} className={`h-1 flex-1 rounded-full bg-white/20 overflow-hidden`}>
                                {idx === currentImageIndex && (
                                    <motion.div 
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 5, ease: "linear" }}
                                        className="h-full bg-white"
                                    />
                                )}
                                {idx < currentImageIndex && <div className="h-full w-full bg-white/40" />}
                            </div>
                        ))}
                    </div>
                    <div className="h-full w-full relative">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                src={sliderImages[currentImageIndex]}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0512] via-transparent to-black/30"></div>
                    </div>
                </motion.div>

                {/* Features Section */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Her Şey Tek Bir Platformda</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Mortanas Create, departmanlarınızın tüm içerik ihtiyaçlarını otonom olarak çözen hepsi bir arada kreatif ekosistemdir.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#110920] border border-purple-500/20 p-8 rounded-3xl hover:border-purple-500/50 hover:bg-[#150a2b] transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-[#00d2ff]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <i className={`${feature.icon} text-2xl text-purple-400`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-light">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#120a28] to-[#080515] border border-purple-500/30 p-12 text-center"
                >
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-[#00d2ff]/20 rounded-full blur-[80px]"></div>
                    
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 tracking-tight">Kreatif Çağınızı Başlatın</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">Mortanas Create SaaS altyapısıyla markanızın görsel kimliğini yapay zeka hızında inşa edin.</p>
                    
                    <Link to="/kurumsal#iletisim" className="relative z-10 inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-bold tracking-wide hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Hemen Başlayın <i className="fas fa-rocket ml-2"></i>
                    </Link>
                </motion.div>

            </main>
        </div>
    );
};

export default MortanasCreatePage;
