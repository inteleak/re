import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { APPLICATIONS } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const cardThemes = [
    { // Blue
        border: "border-2 border-blue-500/40 hover:border-[#00d2ff]/95",
        bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
        circle: "bg-blue-500/15 group-hover:bg-blue-500/25",
        line: "via-[#00d2ff]",
        iconBg: "from-blue-600 to-indigo-700",
        shadow: "shadow-[0_4px_25px_rgba(0,0,0,0.5),_0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),_0_0_30px_rgba(0,210,255,0.3)]",
        text: "group-hover:text-blue-300",
        badge: "bg-[#00d2ff]/10 text-[#00d2ff] border-[#00d2ff]/40 shadow-sm shadow-[#00d2ff]/10",
        btnColor: "text-blue-400 hover:text-white"
    },
    { // Purple
        border: "border-2 border-purple-500/40 hover:border-purple-400/95",
        bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
        circle: "bg-purple-500/15 group-hover:bg-purple-500/25",
        line: "via-purple-400",
        iconBg: "from-purple-500 to-pink-650",
        shadow: "shadow-[0_4px_25px_rgba(0,0,0,0.5),_0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),_0_0_30px_rgba(168,85,247,0.3)]",
        text: "group-hover:text-purple-300",
        badge: "bg-purple-500/15 text-purple-300 border-purple-500/45 shadow-sm shadow-purple-500/10",
        btnColor: "text-purple-400 hover:text-white"
    },
    { // Cyan
        border: "border-2 border-cyan-500/40 hover:border-cyan-400/95",
        bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
        circle: "bg-cyan-500/15 group-hover:bg-cyan-500/25",
        line: "via-cyan-400",
        iconBg: "from-cyan-500 to-blue-650",
        shadow: "shadow-[0_4px_25px_rgba(0,0,0,0.5),_0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),_0_0_30px_rgba(6,182,212,0.3)]",
        text: "group-hover:text-cyan-300",
        badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/45 shadow-sm shadow-cyan-500/10",
        btnColor: "text-cyan-400 hover:text-white"
    },
    { // Emerald
        border: "border-2 border-emerald-500/40 hover:border-emerald-400/95",
        bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
        circle: "bg-emerald-500/15 group-hover:bg-emerald-500/25",
        line: "via-emerald-400",
        iconBg: "from-emerald-500 to-teal-650",
        shadow: "shadow-[0_4px_25px_rgba(0,0,0,0.5),_0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),_0_0_30px_rgba(16,185,129,0.3)]",
        text: "group-hover:text-emerald-300",
        badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/45 shadow-sm shadow-emerald-500/10",
        btnColor: "text-emerald-400 hover:text-white"
    },
    { // Pink
        border: "border-2 border-pink-500/40 hover:border-pink-400/95",
        bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
        circle: "bg-pink-500/15 group-hover:bg-pink-500/25",
        line: "via-pink-400",
        iconBg: "from-pink-500 to-rose-650",
        shadow: "shadow-[0_4px_25px_rgba(0,0,0,0.5),_0_0_15px_rgba(236,72,153,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),_0_0_30px_rgba(236,72,153,0.3)]",
        text: "group-hover:text-pink-300",
        badge: "bg-pink-500/15 text-pink-300 border-pink-500/45 shadow-sm shadow-pink-500/10",
        btnColor: "text-pink-400 hover:text-white"
    },
    { // Amber
        border: "border-2 border-amber-500/40 hover:border-amber-400/95",
        bg: "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/95",
        circle: "bg-amber-500/15 group-hover:bg-amber-500/25",
        line: "via-amber-400",
        iconBg: "from-amber-500 to-orange-650",
        shadow: "shadow-[0_4px_25px_rgba(0,0,0,0.5),_0_0_15px_rgba(245,158,11,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),_0_0_30px_rgba(245,158,11,0.3)]",
        text: "group-hover:text-amber-300",
        badge: "bg-amber-500/15 text-amber-300 border-amber-500/45 shadow-sm shadow-amber-500/10",
        btnColor: "text-amber-400 hover:text-white"
    }
];

const YapayZekaUygulamalarPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 text-slate-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
            {/* Hero Section */}
            <section className="relative pt-36 pb-24 overflow-hidden px-4 border-b border-indigo-500/20">
                {/* Full-bleed Video Background Slider */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="w-full h-full"
                    >
                        {[
                            "https://media.istockphoto.com/id/2175867130/tr/video/3d-animation-of-colorful-branching-neural-network-on-dark-background-visualization-of-complex.mp4?s=mp4-640x640-is&k=20&c=kktBKy4fekxkBlqiXnIu-6V-uhZrUW63TqbtE_8e7VA=",
                            "https://media.istockphoto.com/id/1707385922/tr/video/futuristic-cyber-technology-innovation-artificial-intelligence-concept-brain-over-the-circuit.mp4?s=mp4-640x640-is&k=20&c=q9yhW2WO1bYVm3ZsZgd9srSqsYxv7X96TLuC7KIPfz8=",
                            "https://media.istockphoto.com/id/2217816754/tr/video/big-city-with-internet-connections-the-concept-of-internet-network-and-big-data.mp4?s=mp4-640x640-is&k=20&c=k1QOr40RuW-RtgYPrTod0TcYv6DcEoeiU_1oecTXs3Y="
                        ].map((videoUrl, idx) => (
                            <SwiperSlide key={idx} className="w-full h-full">
                                <video 
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline 
                                    className="w-full h-full object-cover opacity-25"
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                </video>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1731] via-[#0e1731]/80 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e1731]/30 to-[#0e1731] z-10" />
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-bold tracking-[0.25em] text-[#00d2ff] bg-[#00d2ff]/10 border border-[#00d2ff]/20 px-6 py-2.5 rounded-full uppercase mb-8 backdrop-blur-md"
                    >
                        MÜŞTERİ İLİŞKİLERİNDE YAPAY ZEKA GÜCÜ
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight max-w-5xl mx-auto mb-6"
                    >
                        Mortanas: Sektöre Özel <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-blue-400 to-indigo-400">Yapay Zeka CRM Uygulamaları</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 font-medium text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        İşletmenizin müşteri yönetim süreçlerini akıllı CRM uygulamalarımızla dijitalleştiriyoruz. Veri odaklı analizler, otonom müşteri takibi ve akıllı segmentasyon özellikleriyle satışlarınızı ve müşteri memnuniyetinizi en üst seviyeye çıkarıyoruz.
                    </motion.p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
                {/* Applications Grid */}
                <div id="uygulamalar-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {APPLICATIONS.map((app, index) => {
                        const t = cardThemes[index % cardThemes.length];
                        return (
                            <motion.div
                                key={app.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`${t.bg} border-2 ${t.border} rounded-2xl overflow-hidden transition-all duration-500 group flex flex-col justify-between ${t.shadow} hover:-translate-y-1.5 relative`}
                            >
                                {/* Ambient Background Glow */}
                                <div className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-[25px] transition-all duration-700 pointer-events-none ${t.circle}`}></div>
                                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent ${t.line} to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>

                                <div className="relative h-28 overflow-hidden shrink-0">
                                    <img 
                                        src={app.imageUrl} 
                                        alt={app.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] to-transparent opacity-85"></div>
                                    <div className={`absolute top-3 left-3 text-[10px] uppercase font-bold px-2.5 py-1 rounded-full border ${t.badge} z-10`}>
                                        {app.sector}
                                    </div>
                                </div>
                                <div className="py-4 px-5 flex-1 flex flex-col justify-between min-h-0 relative z-10">
                                    <div className="space-y-2.5">
                                        <h3 className={`text-base font-bold text-white ${t.text} transition-colors duration-300 leading-snug`}>
                                            {app.name}
                                        </h3>
                                        <p className="text-slate-300 font-semibold text-xs md:text-[13px] leading-relaxed line-clamp-3">
                                            {app.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-indigo-500/20 flex items-center justify-between">
                                        <Link 
                                            to={`/uygulamalar/${app.slug}`}
                                            className={`inline-flex items-center text-xs font-bold transition-all group/link ${t.btnColor}`}
                                        >
                                            Uygulamayı İncele
                                            <i className="fas fa-arrow-right ml-2 text-[10px] transition-transform group-hover/link:translate-x-1.5"></i>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#1e1b4b] border border-indigo-500/30 rounded-3xl text-center relative overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.15)] ring-1 ring-white/5"
                >
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
                    
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-300 mb-4 relative z-10 tracking-tight">İşletmenizi Dijitalleştirin</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
                        Mortanas CRM uygulamaları, sadece bir veri tabanı değil; işletmenizin büyümesine yardımcı olan akıllı bir asistandır.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
                        <Link 
                            to="/kurumsal#iletisim"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
                        >
                            Demo Talep Edin
                        </Link>
                        <a 
                            href="tel:+905540118888" 
                            className="flex items-center justify-center px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all backdrop-blur-sm group font-semibold font-mono"
                        >
                            <i className="fas fa-phone-alt text-indigo-400 group-hover:text-indigo-300 mr-2.5"></i>
                            <span className="font-sans">Bizi Arayın</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default YapayZekaUygulamalarPage;
