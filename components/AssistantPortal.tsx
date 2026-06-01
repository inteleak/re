import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderImages2 = [
    'https://mortanascreate.com/TR/resim/t1.png', 
    'https://mortanascreate.com/TR/resim/t2.png', 
    'https://mortanascreate.com/TR/resim/t3.png', 
    'https://mortanascreate.com/TR/resim/t4.png', 
    'https://mortanascreate.com/TR/resim/t5.png', 
    'https://mortanascreate.com/TR/resim/t6.png', 
    'https://mortanascreate.com/TR/resim/t7.png', 
    'https://mortanascreate.com/TR/resim/t8.png', 
    'https://mortanascreate.com/TR/resim/t9.png', 
    'https://mortanascreate.com/TR/resim/t10.png', 
    'https://mortanascreate.com/TR/resim/t11.png', 
];

const assistantsData = [
  {
      title: "Mortanas Manşet Üretici Asistanı",
      summary: "Haber metinlerinizden okuyucunun dikkatini çekecek en çarpıcı manşetleri oluşturun.",
      details: [
          { heading: "Başlık ve Manşet Oluşturma", features: ["Ana temaları belirlemek için haber metnini analiz eder ve SEO dostu başlıklar üretir.", "Çeşitli stillerde ve tonlarda (resmi, duygusal, eleştirel vb.) başlık seçenekleri sunar.", "A/B testi için farklı manşet varyasyonları hazırlar."] },
          { heading: "İçerik Optimizasyonu", features: ["Metnin ana fikrini yakalayarak kısa ve etkili manşetler hazırlar.", "Haberin duygusal tonuna uygun kelimeler seçer.", "Başlık uzunluklarını belirli sosyal medya platformlarına (Twitter, Instagram vb.) göre ayarlar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-3h-3.375a1.125 1.125 0 110-2.25h2.25m-2.25 2.25h1.5a1.125 1.125 0 011.125 1.125v1.5a1.125 1.125 0 01-1.125 1.125H5.125C3.964 19.5 3 18.536 3 17.375v-11.75C3 4.295 3.964 3.375 5.125 3.375h12.25c1.161 0 2.125.928 2.125 2.0625v11.75C19.5 18.536 18.536 19.5 17.375 19.5H12.75" /></svg>
  },
  {
      title: "Mortanas Köşe Yazarı Asistanı",
      summary: "Belirli bir konuya ve bakış açısına göre akıcı ve etkileyici köşe yazıları yazın.",
      details: [
          { heading: "Makale Oluşturma ve Geliştirme", features: ["Ana fikirler ve argümanlar temelinde bir köşe yazısı taslağı hazırlar.", "Akıcı ve ikna edici bir dil kullanarak metinleri yapılandırır.", "Yazarın kişisel stilini ve tonunu taklit eder."] },
          { heading: "Analiz ve İnovasyon", features: ["Derinlemesine analizlerle makalenin zenginliğini artırır.", "Okuyucuya farklı bakış açıları sunarak yeni perspektifler sağlar.", "Argümanlarınızı desteklemek için güvenilir veriler ve kaynaklar önerir.", "Kilit noktaları vurgulamak için başlık ve alt başlıklar önerir."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
  },
  {
      title: "Mortanas Medya Doğruluk Kontrolü Asistanı",
      summary: "Haberlerinizdeki bilgilerin ve istatistiklerin kaynağını anında doğrulayarak yanlış bilginin yayılmasını önleyin.",
      details: [
          { heading: "Doğrulama ve Referans", features: ["Metindeki verileri ve iddiaları güvenilir kaynaklarla karşılaştırır.", "Potansiyel yanlış bilgileri ve güncelliğini yitirmiş verileri tespit eder.", "Kaynakların güvenilirlik düzeyini puanlayarak detaylı bir analiz sunar.", "Daha az bilinen kaynaklardaki bilgileri kontrol etmek için derin web aramaları yapar."] },
          { heading: "Güvenilirlik Raporlama", features: ["Haberinizin güvenilirlik düzeyini değerlendiren bir rapor sunar.", "Bilgilerin kaynağını ve çapraz referanslarını gösterir.", "Tüm doğrulama sürecini şeffaf bir şekilde belgeler ve raporlar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
      title: "Mortanas Ses Deşifre Asistanı",
      summary: "Röportaj, toplantı ve basın açıklaması ses kayıtlarını saniyeler içinde yazıya dökün.",
      details: [
          { heading: "Sesli Metne Dönüştürme", features: ["Ses kaydını kelime kelime metne dönüştürür.", "Konuşmacıları ayırt eder ve her konuşmacıya bir etiket atar."] },
          { heading: "Sesli Metin Özetleme", features: ["Kısa Özet (2-3 cümle), Spot Özet (50 kelime) ve Tweet boyutunda Özet.", "Madde İşaretli Özet (anahtar noktaları listeler)."] },
          { heading: "Ses → Haber Otomasyonu", features: ["Deşifre edilen ses dosyasını otomatik olarak haber formatına dönüştürür.", "Başlık + Spot + Gövde içeren bir haber şablonu oluşturur.", "Alternatif başlık önerileri sunar."] },
          { heading: "Detaylı Filtreleme", features: ["Özet Uzunluğu: kısa, orta, detaylı.", "Haber Türü: son dakika, analiz, köşe yazısı.", "Ton ve Stil: resmi, akademik, duygusal."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 6a6 6 0 01-6-6v-1.5m6 6v-1.5m6-1.5a6 6 0 00-6-6m6 6v-1.5m6-1.5a6 6 0 01-6-6m6 6h-1.5m-6 0h-1.5m-6 0H6.75m0 0a2.25 2.25 0 01-4.5 0v-1.5m4.5 0a2.25 2.25 0 014.5 0v1.5m-4.5-1.5v-1.5" /></svg>
  },
  {
      title: "Mortanas Haber Yazma Asistanı",
      summary: "Ham verileri, basın bültenlerini ve notları profesyonel haber metinlerine dönüştürün.",
      details: [
          { heading: "Haber Metni Oluşturma", features: ["Verilen notlardan 5N1K kuralına uygun haber metinleri yazar.", "Otomatik olarak manşet ve spot cümleleri üretir.", "Farklı haber türlerine (son dakika, röportaj, analiz) uyum sağlar."] },
          { heading: "İçerik Düzenleme", features: ["Cümle ve paragrafları akıcı bir şekilde yeniden düzenler.", "Haber diline uygun kelime ve terimler önerir.", "Otomatik olarak infografik ve veri görselleştirme taslakları oluşturur."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75H3m12 0a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H3m12-10.5h-1.5m-1.5-1.5h-.75M12 18V5.25m4.5 13.5a1.5 1.5 0 00-1.5-1.5H3m12 1.5a1.5 1.5 0 01-1.5-1.5M12 18V5.25" /></svg>
  },
  {
      title: "Mortanas Arşiv Araştırma Asistanı",
      summary: "Geniş veri tabanlarını, eski haberleri ve belgeleri hızlıca araştırın.",
      details: [
          { heading: "Derinlemesine Araştırma", features: ["Anahtar kelimelerle dijital arşivlerde arama yapar.", "İlgili makaleleri, belgeleri ve geçmiş haberleri derler.", "Araştırma konularını birleştirerek kronolojik bir zaman çizelgesi oluşturur."] },
          { heading: "Veri Analizi", features: ["Bulunan verileri analiz ederek kilit noktaları vurgular.", "Tarihsel veriler ve eğilimler hakkında özet raporlar hazırlar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" /></svg>
  },
  {
      title: "Mortanas Haber Bülteni Asistanı",
      summary: "Güncel ve ilgi çekici haberlerden kişisel haber bülteninizi otomatik olarak oluşturun.",
      details: [
          { heading: "Haber Bülteni Oluşturma", features: ["Belirlediğiniz ilgi alanlarına göre interneti tarar.", "Önemli ve güncel haberleri otomatik olarak seçip özetler.", "Abone segmentasyonuna göre kişiselleştirilmiş bülten içerikleri sunar."] },
          { heading: "Otomasyon ve Kişiselleştirme", features: ["Haber bültenini periyodik olarak size e-posta ile gönderebilir.", "Okuma alışkanlıklarınıza göre içerik önerileri sunar.", "Haber bülteninin etkileşim oranlarını raporlar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8h18M3 8a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2v-10zm18-2h-3.5a2.5 2.5 0 00-2.5 2.5v1.5a2.5 2.5 0 002.5 2.5H21v-6.5z" /></svg>
  },
  {
      title: "Mortanas Basın Bülteni Asistanı",
      summary: "Yeni bir ürün, etkinlik veya duyuru için profesyonel ve etkili basın bültenleri oluşturun.",
      details: [
          { heading: "Basın Bülteni Yazma", features: ["Verilen bilgilere dayanarak profesyonel basın bültenleri yazar.", "Sektör standartlarına uygun bir format kullanır.", "Anahtar kelime optimizasyonu ile bültenin medya kuruluşları tarafından keşfedilebilirliğini artırır."] },
          { heading: "Etki Optimizasyonu", features: ["Medya kuruluşlarının dikkatini çekecek ana mesajları vurgular.", "Başlık ve spot bölümlerini özelleştirir.", "Çeşitli formatlarda çıktı sunar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75V12h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
      title: "Mortanas Derin Araştırma Asistanı",
      summary: "Karmaşık konuları, eğilimleri ve piyasa dinamiklerini derinlemesine analiz edin.",
      details: [
          { heading: "Çok Kaynaklı Analiz", features: ["Birden fazla veri kaynağını birleştirerek analiz yapar.", "Bir konunun tüm yönlerini kapsayan detaylı raporlar hazırlar.", "Rekabet analizi ve pazar eğilimi tahminleri sunar."] },
          { heading: "Pazar ve Trend Raporlama", features: ["Piyasa dinamiklerini ve güncel eğilimleri inceler.", "Raporları grafikler ve veri görselleştirmeleriyle destekler.", "Risk ve fırsat analizi yaparak stratejik öneriler sunar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
      title: "Mortanas İş Planlama Asistanı",
      summary: "Gazetecilik projeleriniz veya serbest çalışmalarınız için detaylı iş planları hazırlayın.",
      details: [
          { heading: "Proje Planlama", features: ["Proje hedeflerini ve hedef kitle analizini tanımlar.", "Detaylı bütçe tahminleri ve finansal öngörüler oluşturur.", "Gelir modeli simülasyonları aracılığıyla farklı senaryolar sunar."] },
          { heading: "Strateji Geliştirme", features: ["Pazarlama ve içerik dağıtım stratejilerini planlar.", "Yatırımcı sunumları için özetler ve kilit noktalar hazırlar.", "Rakip analizi raporları ve konumlandırma önerileri sunar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3L12 5.25m0 0L14.25 3M12 5.25v15M17.25 10.5h-10.5" /></svg>
  },
  {
      title: "Mortanas Spot Özet Motoru Asistanı",
      summary: "Uzun haber makalelerini, raporları ve analizleri tek bir spot cümlede özetleyin.",
      details: [
          { heading: "Özetleme Motoru", features: ["Uzun metinleri analiz ederek ana fikir ve ana mesajı çıkarır.", "Tek bir spot cümlede veya paragrafta özetler sunar.", "Çok dilli özetleme desteği sunar."] },
          { heading: "Verimlilik", features: ["Okuyucuların tüm metni okuma ihtiyacını ortadan kaldırır.", "Bilgilere hızlı erişim sağlar.", "Sesli özetleme ve görsel özetleme seçenekleri sunar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 6a.75.75 0 110-1.5.75.75 0 010 1.5zm0 6a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
  },
  {
      title: "Mortanas Video Haber Üretimi Asistanı",
      summary: "Metin tabanlı haber içeriklerinizi video senaryolarına ve düzenleme planlarına dönüştürün.",
      details: [
          { heading: "Video Senaryosu Oluşturma", features: ["Haber metnini video içeriğine dönüştürmek için senaryo yazar.", "Sahne geçişleri ve görsel hikaye anlatımı için öneriler sunar.", "Saniye saniye detaylı video düzenleme planları hazırlar.", "Video için seslendirme metni üretir."] },
          { heading: "Prodüksiyon Desteği", features: ["Metne uygun telifsiz müzik ve görseller önerir.", "Video düzenleme için bir storyboard taslağı hazırlar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path d="M19.5 10.5v1.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-1.5m1.5-6v6m6-6v6m-6-6h1.5m-1.5 6h1.5M10.5 6h3.75" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6h.008v.008H12z" /></svg>
  },
  {
      title: "Mortanas Kişisel Asistan",
      summary: "Günlük görevlerinizi, randevularınızı ve notlarınızı düzenlemenize yardımcı olur.",
      details: [
          { heading: "Görev ve Zaman Yönetimi", features: ["Günlük görevlerinizi ve randevularınızı yönetir.", "Önemli toplantılar ve haber teslim tarihleri için hatırlatıcılar ayarlar.", "E-posta ve takvim entegrasyonu ile otomatik olarak görevler oluşturur."] },
          { heading: "Bilgi Organizasyonu", features: ["Araştırma notlarınızı etiketleyerek düzenlemenizi sağlar.", "Önemli belgeleri ve web sayfalarını arşivler.", "Seyahat ve etkinlik planlamaları için detaylı programlar hazırlar."] }
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6M12 18V6" /></svg>
  }
];

const AssistantPortal: React.FC = () => {
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

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedAssistant, setSelectedAssistant] = useState<typeof assistantsData[0] | null>(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [scrolledToBottom, setScrolledToBottom] = useState(false);
    const assistantsScrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const isNearBottom = target.scrollHeight - target.scrollTop - target.clientHeight < 30;
        setScrolledToBottom(isNearBottom);
    };

    const scrollAssistantsDown = () => {
        if (assistantsScrollRef.current) {
            assistantsScrollRef.current.scrollBy({
                top: 200,
                behavior: 'smooth'
            });
        }
    };
    
    // Split for carousels
    const row1 = assistantsData.slice(0, 9);
    const row2 = assistantsData.slice(9);

    const scrollRef1 = useRef<HTMLDivElement>(null);
    const scrollRef2 = useRef<HTMLDivElement>(null);

    const nextImage = () => setCurrentImageIndex(p => (p + 1) % sliderImages2.length);
    const prevImage = () => setCurrentImageIndex(p => (p - 1 + sliderImages2.length) % sliderImages2.length);

    useEffect(() => {
        const interval = setInterval(nextImage, 6000);
        return () => clearInterval(interval);
    }, []);

    const scrollCarousel = (ref: React.RefObject<HTMLDivElement>, direction: number) => {
        if (ref.current) {
            const scrollAmount = ref.current.clientWidth * 0.8;
            ref.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full relative z-20 mt-24">
            {/* Prominent Divider / Şerit */}
            <div className="w-full max-w-7xl mx-auto h-1 mb-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent relative">
                <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80"></div>
                <div className="absolute inset-0 blur-sm bg-purple-400 opacity-50"></div>
            </div>
            
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <header className="text-center mb-12">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-extrabold text-purple-400 mb-3 tracking-wide drop-shadow-lg"
                    >
                        MORTANAS
                    </motion.h1>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl font-semibold text-slate-300"
                    >
                        Gazeteciler için Akıllı Asistan Portalı
                    </motion.h2>
                </header>

                <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:h-[30rem]">
                    
                    {/* Left side: Slider & Video Button */}
                    <div className="w-full lg:w-[45%] flex flex-col items-center justify-between h-full">
                        <div className="relative w-full h-[22rem] lg:h-[24.5rem] rounded-3xl border-2 border-purple-600/80 shadow-[0_0_30px_rgba(138,43,226,0.3)] overflow-hidden bg-black group">
                            <div 
                                className="flex h-full transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {sliderImages2.map((src, idx) => (
                                    <div key={idx} className="w-full h-full flex-shrink-0 cursor-pointer" onClick={() => setIsImageModalOpen(true)}>
                                        <img src={src} alt="Portal" className="w-full h-full object-cover object-right" />
                                    </div>
                                ))}
                            </div>
                            
                            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                        <button 
                            onClick={() => setIsVideoModalOpen(true)}
                            className="mt-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2.5 px-8 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 transform hover:scale-105"
                        >
                            Tanıtım Videosunu İzle
                        </button>
                    </div>

                    {/* Right side: Assistants Grid with Vertical Scroll on Desktop */}
                    <div className="w-full lg:w-[55%] h-[32rem] lg:h-full relative overflow-hidden flex flex-col group/scroll">
                        <div 
                            ref={assistantsScrollRef}
                            onScroll={handleScroll}
                            className="flex-grow overflow-y-auto pr-0 lg:pr-2 custom-scrollbar pb-10"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {assistantsData.map((item, idx) => {
                                    const t = cardThemes[idx % cardThemes.length];
                                    return (
                                        <div 
                                            key={idx} 
                                            className={`w-full ${t.bg} border-2 ${t.border} rounded-xl p-4 transition-all duration-300 ${t.shadow} hover:scale-[1.02] flex flex-col justify-between cursor-pointer group relative overflow-hidden`} 
                                            onClick={() => setSelectedAssistant(item)}
                                        >
                                            {/* Ambient background glows */}
                                            <div className={`absolute -top-12 -right-12 w-20 h-20 rounded-full blur-[20px] transition-all duration-700 pointer-events-none ${t.circle}`}></div>
                                            <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent ${t.line} to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                            <div className="flex items-start gap-4 relative z-10">
                                                {/* Icon Container with Gradient */}
                                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${t.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-md relative z-10 flex-shrink-0 text-white [&_svg]:w-5 [&_svg]:h-5 [&_svg]:text-white [&_svg]:stroke-current [&_svg]:stroke-[1.5]`}>
                                                    {item.icon}
                                                </div>

                                                <div className="flex-grow min-w-0">
                                                    <h3 className={`text-sm font-bold text-white ${t.text} transition-colors duration-300 line-clamp-1`}>{item.title}</h3>
                                                    <p className="text-slate-300 text-xs mt-1 line-clamp-2 leading-relaxed text-left font-semibold">{item.summary}</p>
                                                </div>
                                            </div>
                                            <div className="mt-3 flex justify-end relative z-10">
                                                <span className={`text-[10px] sm:text-[11px] font-semibold ${t.text} flex items-center gap-1 transition-colors`}>
                                                    Özellikleri Gör <i className="fas fa-arrow-right text-[8px]"></i>
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Scroll Down Indicator */}
                        <AnimatePresence>
                            {!scrolledToBottom && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d0414] via-[#0d0414]/95 to-transparent flex flex-col items-center justify-end pb-2 pointer-events-none z-30"
                                >
                                    <span 
                                        onClick={scrollAssistantsDown}
                                        className="pointer-events-auto cursor-pointer text-[10px] sm:text-[11px] text-purple-400 font-bold tracking-widest uppercase flex items-center gap-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-3.5 py-1.5 bg-[#150a2b]/90 hover:bg-[#201042] border border-purple-500/30 rounded-full shadow-[0_4px_12px_rgba(138,43,226,0.3)] transition-all active:scale-95 duration-150"
                                    >
                                        Daha Fazla Asistan 
                                        <motion.svg 
                                            animate={{ y: [0, 4, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                            className="w-3 h-3 text-purple-400" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                        </motion.svg>
                                    </span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <AnimatePresence>
                {/* Features Modal */}
                {selectedAssistant && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedAssistant(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                        <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="relative bg-[#1a1a32] border-2 border-[#8A2BE2] p-8 rounded-2xl shadow-[0_0_40px_rgba(138,43,226,0.6)] w-full max-w-2xl text-slate-100 z-10 max-h-[90vh] overflow-y-auto">
                            <button onClick={() => setSelectedAssistant(null)} className="absolute top-4 right-6 text-3xl font-bold text-white/50 hover:text-red-400 transition-colors">&times;</button>
                            <h3 className="text-3xl font-bold mb-8 text-purple-400">{selectedAssistant.title}</h3>
                            <div className="space-y-6">
                                {selectedAssistant.details.map((sec, i) => (
                                    <div key={i} className="space-y-3">
                                        <h4 className="text-lg font-semibold text-[#8A2BE2] flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V4z" /></svg>
                                            {sec.heading}
                                        </h4>
                                        <ul className="space-y-2 text-slate-300">
                                            {sec.features.map((feat, j) => (
                                                <li key={j} className="relative pl-6">
                                                    <span className="absolute left-0 text-[#38bdf8] font-bold">✓</span>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Video Modal */}
                {isVideoModalOpen && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVideoModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-[#1a1a32] border-2 border-[#8A2BE2] p-4 md:p-8 rounded-2xl w-full max-w-4xl z-10">
                            <button onClick={() => setIsVideoModalOpen(false)} className="absolute top-2 right-4 text-3xl font-bold text-white/50 hover:text-red-400 transition-colors z-50">&times;</button>
                            <div className="relative w-full overflow-hidden rounded-lg aspect-video">
                                <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/8_4-YK4n_44" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Image Modal */}
                {isImageModalOpen && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsImageModalOpen(false)} className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
                        <div className="relative w-full h-full flex items-center justify-center pointer-events-none z-10">
                            <button onClick={() => setIsImageModalOpen(false)} className="absolute top-4 right-4 text-4xl font-bold text-white/50 hover:text-red-400 transition-colors pointer-events-auto">&times;</button>
                            <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} src={sliderImages2[currentImageIndex]} alt="Expanded" className="max-w-full max-h-full object-contain rounded-lg pointer-events-auto" />
                        </div>
                    </div>
                )}
            </AnimatePresence>

            <style>{`
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scroll-bar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default AssistantPortal;
