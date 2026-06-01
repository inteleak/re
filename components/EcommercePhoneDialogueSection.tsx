import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap, MessageSquare, Bot, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

const dialogue: ChatMessage[] = [
  { sender: 'bot', text: 'Merhaba! Mortanas AI E-Ticaret Asistanına hoş geldiniz. 🛍️ Size nasıl yardımcı olabilirim?', time: '14:30' },
  { sender: 'user', text: 'Merhabalar, Nike Air Force 1 beyaz renk 42 numara stoğunuzda var mı?', time: '14:30' },
  { sender: 'bot', text: 'Hemen kontrol ediyorum... 🔍 Evet stoklarımızda mevcut! Şu an sepette %15 indirimle 3.400 TL. Siparişinizi oluşturmamı ister misiniz?', time: '14:31' },
  { sender: 'user', text: "Siparişim ne zaman kargolanır? İade şartlarınız neler?", time: '14:31' },
  { sender: 'bot', text: "Siparişiniz 24 saat içinde kargolanmaktadır. 📦 14 gün koşulsuz iade hakkınız bulunuyor.", time: '14:32' },
  { sender: 'user', text: 'Harika, o zaman siparişimi tamamlayalım lütfen.', time: '14:32' },
  { sender: 'bot', text: 'Talebiniz alındı! 🎉 Adınıza siparişiniz sepette oluşturuldu ve güvenli ödeme bağlantısı WhatsApp iletildi. İyi alışverişler! 🛒', time: '14:33' }
];

const EcommercePhoneDialogueSection: React.FC = () => {
    const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
    const [typingSender, setTypingSender] = useState<'user' | 'bot' | null>(null);
    const [progressPercent, setProgressPercent] = useState<number>(0);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const timeoutIds = useRef<NodeJS.Timeout[]>([]);

    const runDialogueAnimation = () => {
        // Clear active timeouts
        timeoutIds.current.forEach(clearTimeout);
        timeoutIds.current = [];

        // Start with the first message of AI assistant
        setVisibleMessages([dialogue[0]]);
        setTypingSender(null);
        setProgressPercent((1 / dialogue.length) * 100);

        let currentDelay = 2200;

        // Loop through the rest of the dialogue
        for (let i = 1; i < dialogue.length; i++) {
            const msg = dialogue[i];

            // 1. Set typing first
            const typingTimeout = setTimeout(() => {
                setTypingSender(msg.sender);
            }, currentDelay);
            timeoutIds.current.push(typingTimeout);

            // 2. Add message content and clear typing
            currentDelay += msg.sender === 'bot' ? 2200 : 1800; // time spent typing
            const msgTimeout = setTimeout(() => {
                setTypingSender(null);
                setVisibleMessages(prev => {
                    const next = [...prev, msg];
                    setProgressPercent((next.length / dialogue.length) * 100);
                    return next;
                });
            }, currentDelay);
            timeoutIds.current.push(msgTimeout);

            currentDelay += 1300; // pause after message appears before next turn
        }

        // Restart loop after idle time
        const restartTimeout = setTimeout(() => {
            runDialogueAnimation();
        }, currentDelay + 4000);
        timeoutIds.current.push(restartTimeout);
    };

    useEffect(() => {
        runDialogueAnimation();
        return () => {
            timeoutIds.current.forEach(clearTimeout);
        };
    }, []);

    // Auto-scroll logic when messages change or typing begins
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [visibleMessages, typingSender]);

    return (
        <section className="container mx-auto px-6 py-3 md:py-4">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-900/95 to-slate-950 text-white rounded-3xl p-4 md:p-5 lg:p-6 border border-slate-705/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden w-full">
                {/* Glowing neon top accents */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 w-[70rem] h-[30rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(59,130,246,0.06),rgba(0,0,0,0))] pointer-events-none"></div>
                
                {/* Header Section with reduced margins */}
                <div className="text-center mb-4 md:mb-5">
                    <div className="inline-flex items-center space-x-1.5 bg-blue-500/10 border border-blue-400/20 text-blue-400 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                        <span>Multi-Channel Canlı Simülasyon</span>
                    </div>
                    <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-white mb-1">
                        Örnek Chatbot <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Diyaloğu</span>
                    </h2>
                    <p className="text-[11px] md:text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
                        Yapay zeka asistanımızın müşteri sorularını nasıl yanıtladığını ve sipariş süreçlerini nasıl kolaylaştırdığını canlı olarak görün.
                    </p>
                </div>

                {/* Integration Channel Badge Strip - Ultra Compact & Sleek */}
                <div className="flex flex-wrap justify-center items-center gap-1.5 md:gap-2 mb-4 max-w-2xl mx-auto border-y border-white/5 py-1.5">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mr-1">Entegre Kanallar:</span>
                    <div className="inline-flex items-center space-x-1 bg-slate-950/80 border border-emerald-500/20 px-2 py-0.5 rounded-md text-[10px] text-emerald-400 font-semibold shadow-inner">
                        <i className="fab fa-whatsapp text-emerald-500"></i>
                        <span>WhatsApp</span>
                    </div>
                    <div className="inline-flex items-center space-x-1 bg-slate-950/80 border border-pink-500/20 px-2 py-0.5 rounded-md text-[10px] text-pink-400 font-semibold shadow-inner">
                        <i className="fab fa-instagram text-pink-500"></i>
                        <span>Instagram DM</span>
                    </div>
                    <div className="inline-flex items-center space-x-1 bg-slate-950/80 border border-blue-500/20 px-2 py-0.5 rounded-md text-[10px] text-blue-400 font-semibold shadow-inner">
                        <i className="fas fa-comments text-blue-500"></i>
                        <span>Canlı Destek</span>
                    </div>
                    <div className="inline-flex items-center space-x-1 bg-slate-950/80 border border-sky-500/20 px-2 py-0.5 rounded-md text-[10px] text-sky-400 font-semibold shadow-inner">
                        <i className="fab fa-telegram-plane text-sky-500"></i>
                        <span>Telegram</span>
                    </div>
                    <div className="inline-flex items-center space-x-1 bg-slate-950/80 border border-amber-500/20 px-2 py-0.5 rounded-md text-[10px] text-amber-500 font-semibold shadow-inner">
                        <i className="fab fa-google text-amber-500"></i>
                        <span>Google Business</span>
                    </div>
                </div>

                {/* Main Layout containing 2 compact phones on the left and feature cards on the right */}
                <div className="grid lg:grid-cols-12 gap-6 xl:gap-8 justify-center items-center max-w-5xl mx-auto relative z-10 w-full mt-4">
                    
                    {/* LEFT PANEL: Dual Live Phone Simulators */}
                    <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 justify-center items-center w-full max-w-[560px] mx-auto">
                        
                        {/* PHONE 1: GENEL KONUŞMALAR (Omnichannel Active Inbox) */}
                        <div className="relative mx-auto w-full max-w-[270px]">
                            {/* Interactive glow effect around phone border */}
                            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-cyan-500/20 blur opacity-75 animate-pulse"></div>
                            <div className="relative rounded-[2.5rem] border-[5px] border-slate-800 bg-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col h-[400px] md:h-[430px] transition-all duration-300 hover:border-slate-700">
                                
                                {/* Phone Notch & Camera */}
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-between px-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-800/80"></span>
                                    <span className="w-8 h-[3px] bg-slate-950 rounded-full"></span>
                                </div>

                                {/* Phone System Header */}
                                <div className="bg-slate-900 border-b border-white/5 pt-5 pb-1 px-4 flex justify-between items-center text-[8.5px] text-slate-400 font-mono z-20">
                                    <span className="font-semibold text-[8px]">14:30</span>
                                    <div className="flex space-x-1 items-center scale-90">
                                        <i className="fas fa-signal"></i>
                                        <i className="fas fa-wifi"></i>
                                        <i className="fas fa-battery-three-quarters text-emerald-400"></i>
                                    </div>
                                </div>

                                {/* App Navigation */}
                                <div className="bg-slate-900/95 border-b border-slate-800/80 px-3 py-2 flex items-center justify-between z-10">
                                    <div className="flex items-center space-x-1.5">
                                        <div className="w-5 h-5 rounded bg-blue-500/15 flex items-center justify-center border border-blue-400/20">
                                            <i className="fas fa-inbox text-blue-400 text-[9px]"></i>
                                        </div>
                                        <span className="font-bold text-slate-100 text-[10px] tracking-wide">Müşteri Havuzu</span>
                                    </div>
                                    <div className="px-1.5 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 flex items-center space-x-1 scale-90">
                                        <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse"></span>
                                        <span className="text-[7.5px] text-green-400 font-extrabold tracking-wide">3 CANLI</span>
                                    </div>
                                </div>

                                {/* Conversations Feed */}
                                <div className="flex-1 p-2 space-y-2 overflow-y-auto custom-scrollbar bg-slate-950/60 flex flex-col justify-start">
                                    {/* Chat Row 1 (WhatsApp) - ACTIVE/TYPING */}
                                    <div className="bg-gradient-to-r from-slate-900 via-indigo-950/20 to-slate-900 border border-blue-500/30 p-2 rounded-xl flex items-center justify-between transition-colors duration-300 shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
                                        <div className="flex items-center space-x-2 min-w-0">
                                            <div className="relative flex-shrink-0 scale-90">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-[10px] text-white font-bold">GY</div>
                                                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-600 rounded-full border-2 border-slate-950 flex items-center justify-center">
                                                    <i className="fab fa-whatsapp text-[8px] text-white"></i>
                                                </span>
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-[10px] font-bold text-white leading-tight truncate">Gökhan Yılmaz</h4>
                                                <p className="text-[8.5px] text-slate-300 font-medium truncate max-w-[95px] opacity-90">Fiyat alabilir miyim?</p>
                                            </div>
                                        </div>
                                        <div className="text-right flex flex-col items-end flex-shrink-0">
                                            <span className="text-[7px] text-blue-400 font-semibold mb-0.5 animate-pulse">Az önce</span>
                                            <div className="px-1 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 flex items-center space-x-0.5 scale-90">
                                                <span className="text-[7.5px] text-blue-400 font-bold uppercase tracking-wider">Aktif</span>
                                                <span className="flex space-x-0.5">
                                                    <span className="w-0.5 h-0.5 rounded-full bg-blue-400 animate-bounce delay-75"></span>
                                                    <span className="w-0.5 h-0.5 rounded-full bg-blue-400 animate-bounce delay-150"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chat Row 2 (Instagram Direct) */}
                                    <div className="bg-slate-900/30 hover:bg-slate-900/60 border border-slate-900 px-2 py-1.5 rounded-xl flex items-center justify-between transition-colors duration-300">
                                        <div className="flex items-center space-x-2 min-w-0">
                                            <div className="relative flex-shrink-0 scale-90">
                                                <div className="w-8 h-8 rounded-full bg-slate-850 border border-slate-750 flex items-center justify-center text-[10px] text-slate-300 font-semibold">SM</div>
                                                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-pink-600 rounded-full border-2 border-slate-950 flex items-center justify-center">
                                                    <i className="fab fa-instagram text-[8px] text-white"></i>
                                                </span>
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-[10px] font-bold text-slate-300 leading-tight truncate">Sarah Miller</h4>
                                                <p className="text-[8.5px] text-slate-400 truncate max-w-[95px]">Do you have vegan...</p>
                                            </div>
                                        </div>
                                        <div className="text-right flex flex-col items-end flex-shrink-0">
                                            <span className="text-[7px] text-slate-500 mb-0.5">3 dk önce</span>
                                            <span className="px-1.5 py-0.5 rounded text-[7.5px] font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 uppercase tracking-wide scale-90">AI Agent</span>
                                        </div>
                                    </div>

                                    {/* Chat Row 3 (Website Live Chat) */}
                                    <div className="bg-slate-900/30 hover:bg-slate-900/60 border border-slate-900 px-2 py-1.5 rounded-xl flex items-center justify-between transition-colors duration-300">
                                        <div className="flex items-center space-x-2 min-w-0">
                                            <div className="relative flex-shrink-0 scale-90">
                                                <div className="w-8 h-8 rounded-full bg-slate-850 border border-slate-750 flex items-center justify-center text-[10px] text-slate-300 font-semibold">AK</div>
                                                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                                                    <i className="fas fa-comments text-[7px] text-white"></i>
                                                </span>
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-[10px] font-bold text-slate-300 leading-tight truncate">Ahmet K. (302)</h4>
                                                <p className="text-[8.5px] text-slate-400 truncate max-w-[95px]">Teşekkürler, çok...</p>
                                            </div>
                                        </div>
                                        <div className="text-right flex flex-col items-end flex-shrink-0">
                                            <span className="text-[7px] text-slate-500 mb-0.5">5 dk önce</span>
                                            <span className="px-1.5 py-0.5 rounded text-[7.5px] font-bold bg-emerald-500/15 border border-emerald-500/35 text-emerald-400 uppercase tracking-wide scale-90">ÇÖZÜLDÜ</span>
                                        </div>
                                    </div>

                                    {/* Chat Row 4 (Telegram) */}
                                    <div className="bg-slate-900/30 hover:bg-slate-900/60 border border-slate-900 px-2 py-1.5 rounded-xl flex items-center justify-between transition-colors duration-300">
                                        <div className="flex items-center space-x-2 min-w-0">
                                            <div className="relative flex-shrink-0 scale-90">
                                                <div className="w-8 h-8 rounded-full bg-slate-850 border border-slate-750 flex items-center justify-center text-[10px] text-slate-300 font-semibold">ES</div>
                                                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-sky-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                                                    <i className="fab fa-telegram-plane text-[7px] text-white"></i>
                                                </span>
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-[10px] font-bold text-slate-300 leading-tight truncate">Elena S.</h4>
                                                <p className="text-[8.5px] text-slate-400 truncate max-w-[95px]">What is checkout...</p>
                                            </div>
                                        </div>
                                        <div className="text-right flex flex-col items-end flex-shrink-0">
                                            <span className="text-[7px] text-slate-500 mb-0.5">12 dk önce</span>
                                            <span className="px-1.5 py-0.5 rounded text-[7.5px] font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 uppercase tracking-wide scale-90">AI Agent</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Statistics Panel Footer */}
                                <div className="bg-slate-900 border-t border-white/5 p-2 flex items-center justify-around text-center mt-auto flex-shrink-0">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] font-extrabold text-blue-400 leading-none">98.4%</span>
                                        <span className="text-[6px] text-slate-400 tracking-wider mt-0.5">OTOMASYON</span>
                                    </div>
                                    <div className="w-px h-5 bg-slate-800"></div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] font-extrabold text-cyan-400 leading-none">12 sn</span>
                                        <span className="text-[6px] text-slate-400 tracking-wider mt-0.5">YANIT SÜRESİ</span>
                                    </div>
                                    <div className="w-px h-5 bg-slate-800"></div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] font-extrabold text-emerald-400 leading-none">4.9/5</span>
                                        <span className="text-[6px] text-slate-400 tracking-wider mt-0.5">MEMNUNİYET</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PHONE 2: SIRAYLA GELEN CANLI GÖRÜŞME (Sequential Animated Dialogue) */}
                        <div className="relative mx-auto w-full max-w-[270px]">
                            {/* Interactive glow effect around phone border */}
                            <div className="absolute -inset-1 rounded-[2.6rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur opacity-75 animate-pulse"></div>
                            <div className="relative rounded-[2.5rem] border-[5px] border-slate-800 bg-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col h-[400px] md:h-[430px] transition-all duration-300 hover:border-slate-700">
                                
                                {/* Phone Notch & Camera */}
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-between px-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 border border-slate-800/80"></span>
                                    <span className="w-8 h-[3px] bg-slate-950 rounded-full"></span>
                                </div>

                                {/* Phone System Header */}
                                <div className="bg-slate-900 border-b border-white/5 pt-5 pb-1 px-4 flex justify-between items-center text-[8.5px] text-slate-400 font-mono z-20">
                                    <span className="font-semibold text-[8px]">14:31</span>
                                    <div className="flex space-x-1 items-center scale-90">
                                        <i className="fas fa-signal"></i>
                                        <i className="fas fa-wifi"></i>
                                        <i className="fas fa-battery-three-quarters text-emerald-400"></i>
                                    </div>
                                </div>

                                {/* Chat Header */}
                                <div className="bg-slate-900/95 border-b border-slate-800/80 px-3 py-1.5 flex items-center space-x-2 z-10">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/15 flex items-center justify-center border border-blue-400/25">
                                        <i className="fas fa-robot text-blue-400 text-[10px] shadow-sm"></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-white text-[10px] leading-none mb-0.5">Mortanas AI</h4>
                                        <p className="text-[7.5px] text-green-400 font-medium flex items-center space-x-1">
                                            <span className="w-1 h-1 rounded-full bg-green-400 inline-block mr-0.5 animate-pulse"></span>
                                            <span>Aktif Görüşme</span>
                                        </p>
                                    </div>
                                    <div className="flex space-x-1.5 text-slate-400 text-[9px] min-w-[24px]">
                                        <i className="fas fa-phone-alt hover:text-white cursor-pointer py-1 px-0.5"></i>
                                        <i className="fas fa-ellipsis-v hover:text-white cursor-pointer py-1 px-0.5"></i>
                                    </div>
                                </div>

                                {/* Animated Visual Progress Bar for conversation progression */}
                                <div className="w-full bg-slate-900 h-[1.5px] relative z-10">
                                    <div 
                                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                                        style={{ width: `${progressPercent}%` }}
                                    ></div>
                                </div>
                                
                                {/* Chat messages body */}
                                <div 
                                    ref={chatContainerRef}
                                    className="flex-1 p-2.5 space-y-2 overflow-y-auto custom-scrollbar bg-slate-950/70"
                                >
                                    {visibleMessages.map((msg, index) => (
                                        <div 
                                            key={index} 
                                            className={`flex items-start flex-col max-w-[85%] ${
                                                msg.sender === 'user' ? 'ml-auto items-end' : ''
                                            }`}
                                        >
                                            <div 
                                                className={`px-2.5 py-1.5 rounded-xl text-[10px] leading-relaxed shadow-md break-words transition-all duration-300 transform scale-98 animate-fade-in ${
                                                    msg.sender === 'user' 
                                                        ? 'bg-blue-600/90 text-white rounded-br-none border border-blue-500/20' 
                                                        : 'bg-slate-900/95 border border-slate-800/80 text-slate-100 rounded-bl-none shadow-black/40'
                                                }`}
                                            >
                                                {msg.text}
                                            </div>
                                            <span className="text-[7px] text-slate-500 mt-0.5 px-0.5 font-mono">{msg.time}</span>
                                        </div>
                                    ))}

                                    {/* Live Typing Indicator */}
                                    {typingSender && (
                                        <div className={`flex items-start ${typingSender === 'user' ? 'ml-auto' : ''}`}>
                                            <div className={`px-2.5 py-1.5 rounded-xl text-slate-400 flex items-center space-x-1 border shadow-xs ${
                                                typingSender === 'user' 
                                                    ? 'bg-blue-600/15 border-blue-500/20' 
                                                    : 'bg-slate-900/85 border-slate-800/70'
                                            }`}>
                                                <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                                                    {typingSender === 'user' ? 'Müşteri' : 'Yapay Zeka'}
                                                </span>
                                                <span className="flex space-x-0.5">
                                                    <span className="w-1 h-1 rounded-full bg-blue-400 animate-bounce delay-75"></span>
                                                    <span className="w-1 h-1 rounded-full bg-blue-400/80 animate-bounce delay-150"></span>
                                                    <span className="w-1 h-1 rounded-full bg-blue-400/60 animate-bounce delay-220"></span>
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Standard Phone Interface Footer */}
                                <div className="bg-slate-900 border-t border-white/5 py-2 px-3 flex items-center space-x-2 mt-auto flex-shrink-0">
                                    <i className="fas fa-smile text-slate-400 text-xs hover:text-white cursor-pointer"></i>
                                    <div className="flex-1 bg-slate-950 rounded-lg height-7 px-2 py-0.5 flex items-center justify-between border border-slate-800/85">
                                        <span className="text-slate-500 text-[8.5px] truncate font-mono">Otomatik akış aktif...</span>
                                    </div>
                                    <i className="fas fa-circle-notch text-[9px] text-cyan-400 animate-spin"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL: PREMIUM BENEFITS & COGNITIVE ACTION CARDS */}
                    <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-center w-full max-w-md mx-auto md:mt-0">
                        
                        {/* CARD 1: Sizin yerinize düşünür */}
                        <div className="border border-slate-800 bg-slate-900/45 p-4 rounded-2xl relative overflow-hidden group hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] backdrop-blur-md">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 rounded-s-2xl"></div>
                            <div className="flex items-start space-x-3.5">
                                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-400/25 flex-shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 transition-all">
                                    <Bot className="w-4.5 h-4.5 text-blue-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors uppercase tracking-wider font-sans text-xs">
                                            Sizin Yerinize Düşünür
                                        </h3>
                                        <span className="text-[10px] font-extrabold text-blue-400/60 bg-blue-400/10 px-1.5 py-0.5 rounded uppercase tracking-widest scale-90 font-mono">
                                            BİLİŞSEL
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-slate-300/90 leading-relaxed mt-1.5 font-sans">
                                        Müşterinin tahlil sonuçlarından sipariş saatlerine, işlem detaylarından iade siparişlarına kadar tüm karmaşık sorularını e-ticaret politikanıza %100 sadık kalarak bir insan gibi anlar ve anında yanıtlar.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 2: Doğrudan satış yapar */}
                        <div className="border border-slate-800 bg-slate-900/45 p-4 rounded-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] backdrop-blur-md">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-400 rounded-s-2xl"></div>
                            <div className="flex items-start space-x-3.5">
                                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-400/25 flex-shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/50 transition-all">
                                    <Zap className="w-4.5 h-4.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors uppercase tracking-wider font-sans text-xs">
                                            7/24 Sıcak Satış Yapar
                                        </h3>
                                        <span className="text-[10px] font-extrabold text-emerald-400/60 bg-emerald-400/10 px-1.5 py-0.5 rounded uppercase tracking-widest scale-90 font-mono">
                                            %100 OTONOM
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-slate-300/90 leading-relaxed mt-1.5 font-sans">
                                        Sadece bilgi vermez; fiyat teklifi soran müşterilere anında en cazip alternatifleri (gizli indirim kodları, kombin önerileri) listeler, ikna eder ve WhatsApp üzerinden güvenli sipariş onay bağlantısını göndererek satışı kapatır.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CARD 3: Omnichannel Entegrasyonu */}
                        <div className="border border-slate-800 bg-slate-900/45 p-4 rounded-2xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] backdrop-blur-md">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-400 rounded-s-2xl"></div>
                            <div className="flex items-start space-x-3.5">
                                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-400/25 flex-shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/50 transition-all">
                                    <MessageSquare className="w-4.5 h-4.5 text-indigo-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold text-slate-100 group-hover:text-indigo-400 transition-colors uppercase tracking-wider font-sans text-xs">
                                            Tek Merkezden Yönetilir
                                        </h3>
                                        <span className="text-[10px] font-extrabold text-indigo-400/60 bg-indigo-400/10 px-1.5 py-0.5 rounded uppercase tracking-widest scale-90 font-mono">
                                            ENTEGRE
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-slate-300/90 leading-relaxed mt-1.5 font-sans">
                                        WhatsApp, Instagram DM, web sitesi canlı yardım ve Telegram gibi farklı kanallardan akan tüm müşteri hacmini tek bir akıllı algoritma ile koordine eder. Sipariş ve müşteri bilgilerini pürüzsüz eşzamanlar.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default EcommercePhoneDialogueSection;
