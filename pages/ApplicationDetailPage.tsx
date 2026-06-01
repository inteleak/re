import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APPLICATIONS } from '../constants';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import AiWebPricingSection from '../components/AiWebPricingSection';
import type { FAQ } from '../types';

const FAQItem: React.FC<{ faq: FAQ; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="group bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/90 backdrop-blur-2xl rounded-2xl border-2 border-indigo-500/20 shadow-lg shadow-indigo-500/5 transition-all duration-300 hover:shadow-indigo-500/20 hover:border-indigo-400">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-2.5 px-4"
                aria-expanded={isOpen}
            >
                <span className="font-bold text-sm text-white pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${isOpen ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-blue-500/30' : 'bg-slate-800 text-slate-300 border border-slate-600/50'}`}>
                    <i className={`fas text-xs transition-transform duration-300 ${isOpen ? 'fa-minus rotate-180' : 'fa-plus'}`}></i>
                </div>
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-4 pb-3">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent mb-2"></div>
                        <p className="text-slate-300 text-xs font-medium leading-relaxed">{faq.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};




const ProblemSolutionCard: React.FC<{ problem: string; solution: string; }> = ({ problem, solution }) => (
    <div className="group bg-gradient-to-br from-slate-950/80 via-slate-900/80 to-indigo-950/80 backdrop-blur-2xl rounded-xl border border-indigo-500/20 overflow-hidden transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] flex flex-col h-full relative">
        <div className="p-4 relative z-10">
            <div className="flex items-start gap-3">
                 <div className="w-6 h-6 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center flex-shrink-0 border border-red-500/20 mt-0.5">
                     <i className="fas fa-times text-[10px]"></i>
                 </div>
                 <div>
                     <h4 className="text-[10px] font-bold uppercase tracking-wider text-red-400/80 mb-0.5">Klasik Sorun</h4>
                     <p className="text-slate-300 text-xs md:text-[13px] font-medium leading-relaxed">{problem}</p>
                 </div>
            </div>
        </div>
        <div className="p-4 bg-gradient-to-br from-indigo-500/10 to-blue-500/5 border-t border-indigo-500/20 relative z-10 flex-grow">
            <div className="flex items-start gap-3">
                 <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 border border-blue-500/30 mt-0.5 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                     <i className="fas fa-check text-[10px]"></i>
                 </div>
                 <div>
                     <h4 className="text-[10px] font-bold uppercase tracking-wider text-blue-400/80 mb-0.5">Akıllı Çözüm</h4>
                     <p className="text-white text-xs md:text-[13px] font-semibold leading-relaxed">{solution}</p>
                 </div>
            </div>
        </div>
    </div>
);


const FomoSection: React.FC<{ application: any; slug?: string }> = ({ application, slug }) => {
    const content = getContentForSlug(slug, application);
    const { fomoTitle, fomoDesc, stat1Val, stat1Title, stat1Desc, stat2Val, stat2Title, stat2Desc, stat3Val, stat3Title, stat3Desc } = content;

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/90 to-slate-950 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-indigo-500/30 w-full max-w-7xl mx-auto backdrop-blur-2xl">
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                {/* Left: Text Content */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-[10px] md:text-xs font-bold tracking-widest text-indigo-300 uppercase">
                            Rekabette Öne Geçin
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                        {fomoTitle}
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                        {fomoDesc}
                    </p>
                    <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <Link to="/kurumsal" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 text-sm border border-indigo-400/20 hover:border-indigo-400/40">
                            <span>Hemen Harekete Geçin</span>
                            <i className="fas fa-arrow-right text-xs"></i>
                        </Link>
                    </div>
                </div>
                
                {/* Right: Stats */}
                <div className="space-y-4 w-full">
                    {/* Stat 1 */}
                    <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-indigo-500/50 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150 pointer-events-none"></div>
                        <div className="flex items-center space-x-4 md:space-x-5 relative z-10">
                            <div className="flex-shrink-0 flex items-center justify-center relative min-w-[70px]">
                                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors duration-300"></div>
                                <div className="relative z-10">
                                    <span className="text-4xl md:text-5xl font-black bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text drop-shadow-sm inline-block transform group-hover:scale-105 transition-transform duration-300 tracking-tighter">
                                        {stat1Val}<span className="text-2xl md:text-3xl">%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-sm md:text-base text-white mb-1.5 flex items-center group-hover:text-blue-300 transition-colors duration-300">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/30 mr-2 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                        <i className="fas fa-arrow-trend-up text-emerald-400 text-[10px]"></i>
                                    </span>
                                    {stat1Title}
                                </h3>
                                <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed font-medium">{stat1Desc}</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Stat 2 */}
                    <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/50 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150 pointer-events-none"></div>
                        <div className="flex items-center space-x-4 md:space-x-5 relative z-10">
                            <div className="flex-shrink-0 flex items-center justify-center relative min-w-[70px]">
                                <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover:bg-purple-500/30 transition-colors duration-300"></div>
                                <div className="relative z-10">
                                    <span className="text-4xl md:text-5xl font-black bg-gradient-to-br from-purple-400 via-fuchsia-400 to-pink-400 text-transparent bg-clip-text drop-shadow-sm inline-block transform group-hover:scale-105 transition-transform duration-300 tracking-tighter">
                                        {stat2Val}<span className="text-2xl md:text-3xl">%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-sm md:text-base text-white mb-1.5 flex items-center group-hover:text-purple-300 transition-colors duration-300">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/30 mr-2 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                        <i className="fas fa-chart-line text-emerald-400 text-[10px]"></i>
                                    </span>
                                    {stat2Title}
                                </h3>
                                <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed font-medium">{stat2Desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-4 md:p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150 pointer-events-none"></div>
                        <div className="flex items-center space-x-4 md:space-x-5 relative z-10">
                            <div className="flex-shrink-0 flex items-center justify-center relative min-w-[70px]">
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/30 transition-colors duration-300"></div>
                                <div className="relative z-10 text-center w-full">
                                    <span className="text-4xl md:text-5xl font-black bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text drop-shadow-sm inline-block transform group-hover:scale-105 transition-transform duration-300 tracking-tighter">
                                        24<span className="text-2xl md:text-3xl text-cyan-300/80">/</span><span className="text-3xl md:text-4xl text-indigo-300">7</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-sm md:text-base text-white mb-1.5 flex items-center group-hover:text-cyan-300 transition-colors duration-300">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-cyan-500/20 border border-cyan-500/30 mr-2 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                                        <i className="fas fa-robot text-cyan-400 text-[10px]"></i>
                                    </span>
                                    {stat3Title}
                                </h3>
                                <p className="text-slate-400 text-[11px] md:text-xs leading-relaxed font-medium">{stat3Desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


import { getContentForSlug } from './ApplicationContent';

const ApplicationDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const application = APPLICATIONS.find(a => a.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!application) return <div className="text-center py-24 text-white bg-slate-950 min-h-screen">İçerik bulunamadı...</div>;

    const content = getContentForSlug(slug, application);

    const {
        fomoTitle, fomoDesc, stat1Val, stat1Title, stat1Desc,
        stat2Val, stat2Title, stat2Desc, stat3Val, stat3Title, stat3Desc,
        sliderImages, faqs, whatsappLink, aiConciergeFeatures,
        howItWorksSteps, heroAssistantActiveTitle, heroAssistantActiveSubtitle,
        heroDescription, whyTitle, featuresSubtitle, featuresList,
        problemsTitle, problemsSubtitle, problemsList,
        conciergeTitle, conciergeSubtitle,
        ctaTitle, ctaSubtitle, ctaBulletsList
    } = content;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [sliderImages.length]);

    const handleFaqClick = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-slate-900 text-slate-300">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 text-white pt-24 pb-16">
                <div className="container mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 mb-5">
                                <span className="relative flex h-2.5 w-2.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                                </span>
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase backdrop-blur-md">{application.sector} UYGULAMASI</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 leading-[1.1] text-white tracking-tight">
    {application.name.split(' ').map((word, i, arr) => i === arr.length - 1 ? <span key={i} className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text"> {word}</span> : word + ' ')}
  </h1>
                            <p className="mt-5 text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">
                                {heroDescription}
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-5 items-center">
                                <Link to="/kurumsal" className="w-full sm:w-auto group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3.5 px-8 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full -translate-x-full transition-transform duration-500 ease-out skew-x-12"></div>
                                    <span className="relative z-10 flex items-center gap-2 text-base">
                                        Hemen Teklif Alın <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                    </span>
                                </Link>
                                <div className="flex items-center gap-3 text-slate-400 text-xs md:text-sm font-medium bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-2 pr-4 shadow-inner">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative z-30 shadow-sm">
                                            <i className="fas fa-rocket text-blue-400 text-[10px]"></i>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative z-20 shadow-sm">
                                            <i className="fas fa-chart-line text-green-400 text-[10px]"></i>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative z-10 shadow-sm">
                                            <i className="fas fa-magic text-purple-400 text-[10px]"></i>
                                        </div>
                                    </div>
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-white font-semibold text-xs text-indigo-100">Yeni Nesil Teknoloji</span>
                                        <span className="text-[10px] text-slate-400">7/24 Kesintisiz Operasyon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                                <img src={application.imageUrl || "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"} alt={`${application.name}`} className="w-full h-full object-cover aspect-[4/3] transform transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>
                                <div className="absolute bottom-6 left-6 p-4 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl">
                                     <div className="flex items-center gap-3">
                                         <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                                             <i className="fas fa-robot text-blue-400"></i>
                                         </div>
                                         <div>
                                             <p className="text-white font-bold text-sm">{heroAssistantActiveTitle}</p>
                                             <p className="text-blue-200 text-xs text-left">{heroAssistantActiveSubtitle}</p>
                                         </div>
                                     </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="container mx-auto px-8 py-12 space-y-16">
                {/* Features Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl py-10 md:py-12 -mx-8 px-8 border border-indigo-500/20 shadow-indigo-500/10">
                    <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
                    <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{whyTitle}</h2>
                            <p className="mt-3 text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
                               {featuresSubtitle}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {featuresList.map((feature, index) => (
                                <FeatureCard key={index} feature={feature} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Problem & Solution Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-12 shadow-inner border border-indigo-500/20 shadow-indigo-500/10">
                    <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-blue-500/10 to-transparent"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{problemsTitle}</h2>
                        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                           {problemsSubtitle}
                        </p>
                    </div>
                    <div className="relative z-10 grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                       {problemsList.map((item, idx) => (
                           <ProblemSolutionCard
                                key={idx}
                                problem={item.problem}
                                solution={item.solution}
                           />
                       ))}
                    </div>
                </section>

                {/* AI Chatbot System Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-12 shadow-inner border border-indigo-500/20 shadow-indigo-500/10">
                    <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-blue-500/10 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] -translate-x-1/2 -translate-y-1/2 bg-blue-500/20 rounded-full blur-3xl opacity-50 animate-pulse pointer-events-none"></div>
                    <div className="relative z-10 text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{conciergeTitle}</h2>
                        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                           {conciergeSubtitle}
                        </p>
                    </div>
                    <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                       {aiConciergeFeatures.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} index={index} />
                       ))}
                    </div>
                </section>
                
                {/* FOMO Section */}
                <FomoSection application={application} slug={slug} />
                
                {/* Pricing Section */}
                <AiWebPricingSection planName={application.name} themeColor="blue" />

                {/* FAQ Section */}
                <section id="faq" className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-12 shadow-inner border border-indigo-500/20 shadow-indigo-500/10">
                    <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-blue-500/10 to-transparent"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="relative z-10 w-full">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Sıkça Sorulan <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">Sorular</span>
                            </h2>
                            <p className="mt-3 text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
                                {application.name} hakkında aklınıza takılan en yaygın soruları sizin için yanıtladık.
                            </p>
                        </div>
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-4 md:gap-5">
                            <div className="space-y-4 md:space-y-5">
                                {faqs.slice(0, 2).map((faq, index) => (
                                    <FAQItem key={index} faq={faq} isOpen={openFaqIndex === index} onClick={() => handleFaqClick(index)} />
                                ))}
                            </div>
                            <div className="space-y-4 md:space-y-5">
                                {faqs.slice(2, 4).map((faq, index) => (
                                    <FAQItem key={index + 2} faq={faq} isOpen={openFaqIndex === (index + 2)} onClick={() => handleFaqClick(index + 2)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900/90 to-indigo-950/90 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-indigo-500/30 w-full max-w-7xl mx-auto backdrop-blur-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
                    
                    <div className="grid lg:grid-cols-2 items-center relative z-10">
                        <div className="p-6 md:p-8 lg:p-10 text-center lg:text-left z-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                                {ctaTitle}
                            </h2>
                            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-lg mx-auto lg:mx-0">
                                {ctaSubtitle}
                            </p>
                            
                            <div className="mt-5 space-y-2 text-left max-w-md mx-auto lg:mx-0">
                                {ctaBulletsList.map((bullet, idx) => (
                                    <div key={idx} className="flex items-center text-slate-200 bg-white/5 backdrop-blur-sm p-2.5 rounded-xl border border-white/5 transition-colors hover:bg-white/10 group">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mr-3 group-hover:bg-indigo-500/30 transition-colors">
                                            {bullet.icon}
                                        </div>
                                        <span className="text-xs md:text-sm" dangerouslySetInnerHTML={{ __html: bullet.text }}></span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                              <Link to="/kurumsal" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-2.5 px-6 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 text-sm md:text-base border border-indigo-400/20 hover:border-indigo-400/40">
                                <i className="fas fa-calendar-check text-indigo-200 text-sm"></i>
                                <span>Ücretsiz Danışmanlık</span>
                              </Link>
                              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold py-2.5 px-6 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 text-sm md:text-base border border-green-400/20 hover:border-green-400/40">
                                <i className="fab fa-whatsapp text-green-100 text-lg"></i>
                                <span>WhatsApp'tan Sor</span>
                              </a>
                            </div>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden p-6">
                             <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                             <div className="absolute w-56 h-56 bg-cyan-400/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
                             
                             <div className="relative w-full max-w-[280px] lg:max-w-[360px] aspect-square rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 ring-1 ring-white/10 overflow-hidden transform transition-transform duration-500 hover:scale-105 z-10 group">
                                {sliderImages.map((img, index) => (
                                    <img 
                                        key={index}
                                        src={img} 
                                        alt={`${application.name} Arayüzü ${index + 1}`} 
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'} group-hover:scale-105`} 
                                    />
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none"></div>
                             </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ApplicationDetailPage;