import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Grid, 
  Tv, 
  Heart, 
  MessageCircle, 
  Bookmark, 
  Check, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  ExternalLink,
  Shield,
  AlertCircle,
  Copy,
  UserCheck,
  UserPlus,
  Play,
  FileText,
  HelpCircle,
  TrendingUp,
  Award
} from 'lucide-react';

interface Comment {
  username: string;
  text: string;
  time: string;
  likes?: number;
}

interface Post {
  id: string;
  type: 'post' | 'reel';
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  likesCount: number;
  hasLiked?: boolean;
  comments: Comment[];
  date: string;
  link: string;
}

interface StoryItem {
  image: string;
  title: string;
  sub: string;
  ctaText: string;
  ctaLink: string;
}

interface Highlight {
  id: string;
  name: string;
  coverImage: string;
  stories: StoryItem[];
}

const HIGHLIGHTS: Highlight[] = [
  {
    id: 'highlight-crm',
    name: 'Yapay Zeka CRM',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1080&h=1920&q=80',
        title: 'Akıllı Otel CRM Entegrasyonu',
        sub: 'Tüm misafir yolculuğunu, oda doluluk durumlarını ve rezervasyon akışlarını otonom asistanlarla yönetin.',
        ctaText: 'Otel CRM Keşfet',
        ctaLink: '/uygulama/otel-yonetimi-crm'
      },
      {
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1080&h=1920&q=80',
        title: '360° Şirket Kontrolü',
        sub: 'Satış, teklif süreçleri, proje terminleri ve departmanlar arası veri akışını merkezileştirin.',
        ctaText: 'Şirket CRM Detayı',
        ctaLink: '/uygulama/sirket-yonitimi-crm'
      },
      {
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1080&h=1920&q=80',
        title: 'Gayrimenkul Portföy CRM',
        sub: 'Emlak ilanlarınızı otomatik üretin, portallardan gelen veri akışını yapay zeka ile eşleştirin.',
        ctaText: 'Emlak CRM Keşfet',
        ctaLink: '/uygulama/emlak-yonetimi-crm'
      }
    ]
  },
  {
    id: 'highlight-otomasyon',
    name: 'Otomasyon',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1080&h=1920&q=80',
        title: 'Yapay Zeka Sesli Çağrı (Voice AI)',
        sub: 'Gerçek zamanlı, doğal tınıya sahip dördüncü nesil ses senteziyle otonom müşteri aramaları gerçekleştirin.',
        ctaText: 'Voice AI Detay',
        ctaLink: '/otomasyon/cagri-karsilama-voice-ai'
      },
      {
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1080&h=1920&q=80',
        title: 'İş Akışları ve RPA',
        sub: 'Evrak yükleri, vergi mutabakatları, faturalar ve manuel büro işlerini hatasız RPA robotları devralsın.',
        ctaText: 'RPA Çözümü Gör',
        ctaLink: '/otomasyon/is-akisi-otomasyonu-rpa'
      }
    ]
  },
  {
    id: 'highlight-produksiyon',
    name: 'Prodüksiyon',
    coverImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1080&h=1920&q=80',
        title: 'Sora & Runway Sinematik Medya',
        sub: 'Fiziksel kameralara, lojistik maliyetlerine son. Tek bir komutla markanız için ultra realistik videolar.',
        ctaText: 'Prodüksiyon Keşfet',
        ctaLink: '/yapay-zeka-produksiyon'
      },
      {
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1080&h=1920&q=80',
        title: 'Midjourney Konsept Sanat',
        sub: 'Afişler, bülten grafikleri ve sosyal medya için sınır tanımayan dijital illüstrasyon tasarımları.',
        ctaText: 'Uzakları Yakın Edin',
        ctaLink: '/yapay-zeka-produksiyon'
      }
    ]
  },
  {
    id: 'highlight-yedek',
    name: 'Yedek Kanal',
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
    stories: [
      {
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1080&h=1920&q=80',
        title: 'Acil Durum & Güvenlik',
        sub: 'Resmi sosyal kanallarımız şikayet veya algoritma kaynaklı erişilemez olursa, en güncel linkler mortanas.com ana sayfamızdadır.',
        ctaText: 'Duyuruları Oku',
        ctaLink: '/kurumsal'
      },
      {
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1080&h=1920&q=80',
        title: 'Direkt Müşteri Destek Hattı',
        sub: 'WhatsApp, Telegram ve acil çağrı merkezimizle 7/24 birebir iletişimde kalmaya devam edin.',
        ctaText: 'Hemen İletişime Geç',
        ctaLink: '/kurumsal#iletisim'
      }
    ]
  }
];

const INITIAL_POSTS: Post[] = [
  {
    id: 'post-sora',
    type: 'post',
    title: 'Sora & Runway ile Video Çağı Başladı!',
    category: 'Yapay Zeka Prodüksiyon',
    description: 'Sıfır fiziksel stüdyo bütçesi, sıfır lojistik karmaşa. Sora, Kling ve Runway Gen-3 entegrasyonu ile markanıza lüks ve çarpıcı sinematik reklamlar üretiyoruz.',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
    likesCount: 1420,
    date: '27 Mayıs 2026',
    link: '/yapay-zeka-produksiyon',
    comments: [
      { username: 'ahmet_yilmaz', text: 'Yapay zekanın bu seviyeye geldiğini görmek inanılmaz, reklam kalitesi harika olmuş.', time: '2s' },
      { username: 'creative_director_ist', text: 'Prodüksiyon bütçelerimizi %90 oranında düşürecek bir teknoloji.', time: '5s' },
      { username: 'mortanasagency', text: 'Teşekkürler! Detaylı bilgi ve markanıza özel kurgular için bio\'daki linkten bizimle iletişime geçebilirsiniz.', time: '1s', likes: 25 }
    ]
  },
  {
    id: 'post-hotel',
    type: 'post',
    title: 'Yapay Zeka Destekli Otel Yönetimi (CRM)',
    category: 'CRM Yazılımları',
    description: 'Ön bürosuz otonom yönetim, anlık rezervasyon işleme ve kişiselleştirilmiş müşteri asistanları ile turizmde her şeyi tek noktadan yönetin.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    likesCount: 984,
    date: '25 Mayıs 2026',
    link: '/uygulama/otel-yonetimi-crm',
    comments: [
      { username: 'turizm_rehberim', text: 'Bunu butik otelimizde denedik, manuel işler tamamen bitti.', time: '1g' },
      { username: 'hotel_manager_antalya', text: 'OTA komisyonlarından kurtulup doğrudan rezervasyon almak için mükemmel bir araç.', time: '2g' }
    ]
  },
  {
    id: 'post-voice',
    type: 'post',
    title: 'Müşterilerinizle Gerçek İnsan Gibi Konuşan Voice AI',
    category: 'Akıllı Çağrı Merkezi',
    description: 'Aynı anda 5.000 çağrı yönetebilen, randevu alan, sipariş tamamlayan ve gecikme olmaksızın yanıt veren üst düzey konuşma yapay zekası.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    likesCount: 2132,
    date: '22 Mayıs 2026',
    link: '/otomasyon/cagri-karsilama-voice-ai',
    comments: [
      { username: 'startup_bites', text: 'Gece 3\'te aradığımda dahi uykusuz kalmayan bir asistan kulağa muazzam geliyor.', time: '4g' },
      { username: 'serkan_finans', text: 'Türkçe fonetik ve ses tonu o kadar başarılı ki müşteri bir yapay zeka olduğunu anlamıyor.', time: '5g' }
    ]
  },
  {
    id: 'post-realestate',
    type: 'post',
    title: 'Gayrimenkulde Otonom İlan Geliştirici ve CRM',
    category: 'Gayrimenkul Teknolojileri',
    description: 'Sıcak müşteri adaylarını anında yakalayan, portallardaki ilanları analiz edip otomatik optimize eden ve müşterileri otonom şekilde besleyen emlak asistanı.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    likesCount: 742,
    date: '18 Mayıs 2026',
    link: '/uygulama/emlak-yonetimi-crm',
    comments: [
      { username: 'emlakci_murat', text: 'Telefonum artık susmuyor, her leade anında dönüş yapılması harika.', time: '1h' },
      { username: 'selda_investment', text: 'Veri madenciliği kısmı çok iyi tasarlanmış.', time: '1h' }
    ]
  },
  {
    id: 'post-enterprise',
    type: 'post',
    title: 'Departmanlar Arası Otonom Entegrasyon (Şirket CRM)',
    category: 'Kurumsal ERP & CRM',
    description: 'Teklif hazırlamadan, faturalandırmaya ve performans analizlerine kadar şirketinizin her departmanını tek merkezde birleştiren lüks otomasyon.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    likesCount: 1612,
    date: '15 Mayıs 2026',
    link: '/uygulama/sirket-yonitimi-crm',
    comments: [
      { username: 'ceo_gorkem', text: 'Şirket içi kopuklukların %100 önüne geçtik, gerçek zamanlı rapor alabiliyoruz.', time: '1h' }
    ]
  },
  {
    id: 'post-chatbot',
    type: 'post',
    title: 'WhatsApp & Instagram Chatbot Sistemleri',
    category: 'Sosyal Medya Satış',
    description: 'Instagram DM ve WhatsApp üzerinden potansiyel müşterilerinizi yakalayın, ürünlerinizi sergileyin ve ödeme alarak satışı tamamen otomatik kapatın.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    likesCount: 1210,
    date: '12 Mayıs 2026',
    link: '/uygulama/yapay-zeka-chatbot',
    comments: [
      { username: 'e_ticaret_turkiye', text: 'Sepet terketme oranlarında inanılmaz bir iyileşme yakaladık.', time: '2h' }
    ]
  },
  {
    id: 'post-warai',
    type: 'post',
    title: 'Savaş Zekası: Geleceğin Simülasyon Teknolojisi',
    category: 'İleri Yapay Zeka',
    description: 'Devrim niteliğinde veri analiz hızları, jeopolitik analizler ve stratejik karar alma mekanizmaları ile donatılmış otonom asistan modülü.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    likesCount: 3105,
    date: '8 Mayıs 2026',
    link: '/savas-zekasi',
    comments: [
      { username: 'analyst_hakan', text: 'Karar alma hızını saniyelere indirmek muazzam bir güç.', time: '2h' }
    ]
  },
  {
    id: 'post-hologram',
    type: 'post',
    title: 'Lansmanların Yıldızı: 3D Yapay Zeka Hologram',
    category: 'Geleceğin Teknolojileri',
    description: 'Fiziksel alanlarda ziyaretçileri ses ve görüntü tanıma yetenekleriyle karşılayan, akıllı etkileşim kuran fütüristik yapay zeka asistanları.',
    imageUrl: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80',
    likesCount: 1845,
    date: '4 Mayıs 2026',
    link: '/yapay-zeka-hologram',
    comments: [
      { username: 'fuar_organizasyon', text: 'Son etkinliğimizde ziyaretçilerin ilgi odağı oldu.', time: '3h' }
    ]
  },
  {
    id: 'post-alert',
    type: 'post',
    title: '⚠️ ALERT: GÜVENLİK DUYURUSU VE RESMİ YEDEK PROTONU',
    category: 'Güvenlik Protokolü',
    description: 'DİKKAT: Sosyal medya algoritmalarının, asılsız rakip şikayetlerinin resmi Instagram hesabımızı banlaması veya kısıtlaması durumunda bu sayfa ana portfolyomuzu canlı tutan, asıl ve sarsılmaz yedek portalımızdır. Tüm kritik linkler, güncel partner kodlarımız ve iletişim ağımız bu sayfa üzerinden resmi olarak güvence altına alınmıştır.',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    likesCount: 8962,
    date: '1 Mayıs 2026',
    link: '/kurumsal',
    comments: [
      { username: 'guvenlik_uzmani', text: 'Bilişim güvenliği ve kriz yönetimi açısından mükemmel düşünülmüş bir önlem.', time: '3h' },
      { username: 'kamu_iliskileri_ort', text: 'Engellemelere karşı dijital imparatorluk koruması.', time: '3h' }
    ]
  }
];

const InstagramPortfolioPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [activeStoryHighlight, setActiveStoryHighlight] = useState<Highlight | null>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'posts' | 'reels' | 'backup'>('posts');
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [followersCount, setFollowersCount] = useState<number>(120000);
  const [newCommentText, setNewCommentText] = useState<string>('');
  const [showToast, setShowToast] = useState<string | null>(null);

  // Auto-progress story
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeStoryHighlight) {
      timer = setTimeout(() => {
        handleNextStory();
      }, 5000); // 5 seconds per story slide
    }
    return () => clearTimeout(timer);
  }, [activeStoryHighlight, activeStoryIndex]);

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => {
      setShowToast(null);
    }, 3000);
  };

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount(prev => prev - 1);
      triggerToast('Abonelik iptal edildi.');
    } else {
      setIsFollowing(true);
      setFollowersCount(prev => prev + 1);
      triggerToast('mortanasagency takip ediliyor!');
    }
  };

  const handleLikePost = (postId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const hasLiked = !p.hasLiked;
        return {
          ...p,
          hasLiked,
          likesCount: hasLiked ? p.likesCount + 1 : p.likesCount - 1
        };
      }
      return p;
    }));
    
    // Sync current modal view state if open
    if (selectedPost && selectedPost.id === postId) {
      const updatedPost = posts.find(p => p.id === postId);
      if (updatedPost) {
        const hasLiked = !selectedPost.hasLiked;
        setSelectedPost({
          ...selectedPost,
          hasLiked,
          likesCount: hasLiked ? selectedPost.likesCount + 1 : selectedPost.likesCount - 1
        });
      }
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim() || !selectedPost) return;

    const newComment: Comment = {
      username: 'ziyaretci_pro',
      text: newCommentText.trim(),
      time: 'Şimdi'
    };

    const updatedPost = {
      ...selectedPost,
      comments: [...selectedPost.comments, newComment]
    };

    setPosts(prev => prev.map(p => p.id === selectedPost.id ? updatedPost : p));
    setSelectedPost(updatedPost);
    setNewCommentText('');
  };

  const handleNextStory = () => {
    if (!activeStoryHighlight) return;
    if (activeStoryIndex < activeStoryHighlight.stories.length - 1) {
      setActiveStoryIndex(prev => prev + 1);
    } else {
      // End of this highlight's stories
      setActiveStoryHighlight(null);
      setActiveStoryIndex(0);
    }
  };

  const handlePrevStory = () => {
    if (!activeStoryHighlight) return;
    if (activeStoryIndex > 0) {
      setActiveStoryIndex(prev => prev - 1);
    }
  };

  const handleCopyProfileLink = () => {
    navigator.clipboard.writeText(window.location.href);
    triggerToast('Bağlantı kopyalandı! Arkadaşlarınızla paylaşabilirsiniz.');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white pt-24 pb-16 px-4 md:px-8 relative font-sans">
      <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-black/40 border border-slate-800/60 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl relative z-10">
        
        {/* Urgent Alert Protocol Header */}
        <div className="bg-gradient-to-r from-red-950/40 via-blue-950/40 to-red-950/40 border-b border-red-500/20 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-red-500/20 p-2 rounded-xl text-red-500 animate-pulse">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-red-400">Mortanas Güvenlik Protokolü</p>
              <h2 className="text-xs md:text-sm font-semibold text-slate-300">Resmi Medya Kanalları Yedek ve Doğrulama Arayüzü</h2>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full text-blue-400 text-[10px] font-bold tracking-wider uppercase">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Aktif Kesintisiz Katman</span>
          </div>
        </div>

        {/* Profile Card Header */}
        <div className="p-6 md:p-10 border-b border-slate-800/40">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
            
            {/* Story Ring around Profile Picture */}
            <div className="shrink-0 mb-6 md:mb-0 relative cursor-pointer" onClick={() => {
              setActiveStoryHighlight(HIGHLIGHTS[0]);
              setActiveStoryIndex(0);
            }}>
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-black p-1.5">
                  <div className="w-full h-full rounded-full bg-slate-800/50 flex items-center justify-center overflow-hidden border border-slate-600">
                    <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent tracking-tighter">MORTANAS</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1.5 border-4 border-[#0a0a0c] scale-110">
                <Check className="w-3.5 h-3.5 stroke-[4]" />
              </div>
            </div>

            {/* Profile Info Details */}
            <div className="flex-1 w-full text-center md:text-left">
              {/* Row 1: Username & Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <h1 className="text-xl font-bold tracking-tight text-white flex items-center justify-center md:justify-start">
                  mortanasagency
                  <svg className="w-5 h-5 text-blue-500 ml-1.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </h1>
                
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <button 
                    onClick={handleFollowToggle}
                    className={`px-6 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 ${isFollowing ? 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    {isFollowing ? (
                      <span className="flex items-center space-x-1 justify-center">
                        <UserCheck className="w-3.5 h-3.5 mr-1" />
                        <span>Takip Ediliyor</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-1 justify-center">
                        <UserPlus className="w-3.5 h-3.5 mr-1" />
                        <span>Takip Et</span>
                      </span>
                    )}
                  </button>
                  <Link 
                    to="/kurumsal#iletisim"
                    className="px-6 py-1.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                  >
                    Mesaj Gönder
                  </Link>
                  <button 
                    onClick={handleCopyProfileLink}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Bağlantıyı Kopyala"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Row 2: Stats (Posts, Followers, Following) */}
              <div className="flex justify-center md:justify-start space-x-8 mb-6 border-y border-slate-800/35 py-3 md:py-0 md:border-none">
                <div className="text-center md:text-left">
                  <span className="font-bold text-white block md:inline">440</span>{' '}
                  <span className="text-xs text-slate-400">gönderi</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="font-bold text-white block md:inline">{followersCount >= 1000 ? (followersCount / 1000).toFixed(0) + 'K' : followersCount}</span>{' '}
                  <span className="text-xs text-slate-400">takipçi</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="font-bold text-white block md:inline">55</span>{' '}
                  <span className="text-xs text-slate-400">takip</span>
                </div>
              </div>

              {/* Row 3: Bio Details */}
              <div className="text-sm space-y-2">
                <div className="font-bold text-white flex items-center justify-center md:justify-start space-x-1.5">
                  <span>Mortanas | Yapay Zeka & Medya Ajansı</span>
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-[10px] uppercase font-black tracking-wider">Verified Agency</span>
                </div>
                <p className="text-xs text-slate-400">Yapay Zeka Şirketi</p>
                
                {/* Visual Bio Block */}
                <div className="text-slate-300 space-y-1.5 leading-relaxed pt-1.5 text-xs md:text-sm">
                  <p>🤖 Otonom Yapay Zeka İş Ortakları & Akıllı CRM Altyapıları</p>
                  <p>🎬 Sora & Runway ile Sinematik Reklam ve Prodüksiyon Çözümleri</p>
                  <p className="text-red-400 bg-red-500/5 px-2 py-1 rounded-lg border border-red-500/10 inline-block font-semibold">
                    🔒 Resmi Hesap Askıya Alınırsa/Kapatılırsa Tüm Yedek Duyurular Bu Sayfadadır!
                  </p>
                  <p>👇 İşinizi Geleceğe Taşıyın ve 10 Kat Büyütün</p>
                  <a 
                    href="https://instagram.com/mortanasagency" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-400 hover:underline font-semibold"
                  >
                    instagram.com/mortanasagency
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Highlights Section */}
        <div className="px-6 py-6 md:px-10 border-b border-slate-800/40 overflow-x-auto select-none flex space-x-6 md:space-x-8 scrollbar-thin scrollbar-thumb-slate-800">
          {HIGHLIGHTS.map(hl => (
            <motion.div 
              key={hl.id} 
              className="flex flex-col items-center cursor-pointer shrink-0 space-y-2 group"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setActiveStoryHighlight(hl);
                setActiveStoryIndex(0);
              }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[3px] bg-slate-800 group-hover:bg-gradient-to-tr group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300">
                <div className="w-full h-full rounded-full bg-black p-0.5">
                  <img 
                    src={hl.coverImage} 
                    alt={hl.name} 
                    className="w-full h-full object-cover rounded-full border border-slate-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">{hl.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Navigation Tabs (Post / Reels / Info Pages) */}
        <div className="flex justify-center border-b border-slate-800/40 text-[11px] font-black uppercase tracking-[0.2em] select-none text-slate-400">
          <button 
            onClick={() => setActiveTab('posts')}
            className={`flex items-center space-x-2 py-4 px-6 border-b-2 transition-colors ${activeTab === 'posts' ? 'border-white text-white' : 'border-transparent hover:text-slate-200'}`}
          >
            <Grid className="w-4 h-4" />
            <span>Gönderiler</span>
          </button>
          <button 
            onClick={() => setActiveTab('reels')}
            className={`flex items-center space-x-2 py-4 px-6 border-b-2 transition-colors ${activeTab === 'reels' ? 'border-white text-white' : 'border-transparent hover:text-slate-200'}`}
          >
            <Tv className="w-4 h-4" />
            <span>Videolar (Reels)</span>
          </button>
          <button 
            onClick={() => setActiveTab('backup')}
            className={`flex items-center space-x-2 py-4 px-6 border-b-2 transition-colors ${activeTab === 'backup' ? 'border-white text-white' : 'border-transparent hover:text-slate-200'}`}
          >
            <Shield className="w-4 h-4" />
            <span>Yedek Kılavuzu</span>
          </button>
        </div>

        {/* Content Container based on Active Tab */}
        <div className="p-6 md:p-10">
          {activeTab === 'posts' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map(post => (
                <motion.div 
                  key={post.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedPost(post)}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group bg-slate-900 border border-slate-800"
                >
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6">
                    <div className="flex items-center text-white font-bold text-sm">
                      <Heart className="w-5 h-5 mr-1.5 fill-white" />
                      <span>{post.likesCount}</span>
                    </div>
                    <div className="flex items-center text-white font-bold text-sm">
                      <MessageCircle className="w-5 h-5 mr-1.5 fill-white" />
                      <span>{post.comments.length}</span>
                    </div>
                  </div>
                  {post.id === 'post-alert' && (
                    <div className="absolute top-3 right-3 bg-red-600/90 text-white p-1.5 rounded-xl border border-red-500">
                      <Shield className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'reels' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.filter(p => p.type === 'reel' || p.category.includes('Prodüksiyon') || p.category.includes('Çağrı')).map(post => (
                <motion.div 
                  key={post.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedPost(post)}
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group bg-slate-900 border border-slate-800"
                >
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white p-1.5 rounded-xl border border-white/10">
                    <Play className="w-4 h-4 fill-white text-white" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6">
                    <div className="flex items-center text-white font-bold text-sm">
                      <Heart className="w-5 h-5 mr-1.5 fill-white" />
                      <span>{post.likesCount}</span>
                    </div>
                    <div className="flex items-center text-white font-bold text-sm">
                      <MessageCircle className="w-5 h-5 mr-1.5 fill-white" />
                      <span>{post.comments.length}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'backup' && (
            <div className="space-y-8 max-w-2xl mx-auto">
              {/* Alert Protocol Header Description */}
              <div className="border-l-4 border-red-500 bg-red-500/5 p-6 rounded-r-2xl border border-slate-800/40">
                <h3 className="text-base font-bold text-red-400 mb-2 flex items-center">
                  <Shield className="w-4 h-5 mr-2" />
                  Failsafe (Yedek Erişim) Nedir?
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  Sosyal medya platformlarının (özellikle Instagram ve Facebook algoritmaları) zaman zaman kurumsal hesapları askıya alması, kısıtlaması veya tamamen devredışı bırakması küresel bir risk halini almıştır. Mortanas Agency olarak bu riskin tam karşısındayız.
                </p>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mt-2 font-semibold text-blue-400">
                  Resmi ana sayfamız bu durumlar için en yetkili haberleşme merkezi olup, kapatılan hesaplarımızın ardından tüm yeni ve doğrulanmış yedek kanallarımız ilk olarak bu arayüzden ilan edilir.
                </p>
              </div>

              {/* Steps or Rules to do */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/40">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-3 text-xs">01</div>
                  <h4 className="font-bold text-white mb-2 text-xs md:text-sm">Sabit Web Sayfamız</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Sistemlerimiz tamamen otonom ve merkezi bakiye korumalıdır. Web sitemiz hiçbir dış sosyal kanala bağlı olmayıp kesintisiz hizmet vermektedir.
                  </p>
                </div>
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/40">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-3 text-xs">02</div>
                  <h4 className="font-bold text-white mb-2 text-xs md:text-sm">Resmi İletişim Hattı</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Tüm müşterilerimize atanan özel AI Temsilcileri ve CRM veritabanları bu süreçlerden kesinlikle etkilenmez.
                  </p>
                </div>
              </div>

              {/* Direct Call to Actions */}
              <div className="p-6 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-xs md:text-sm mb-1">Kurumsal İletişim Formuna Erişin</h4>
                  <p className="text-slate-400 text-xs text-center sm:text-left">Sorularınız, iş ortaklığı talepleriniz ve yedek destek kanallarımız için.</p>
                </div>
                <Link 
                  to="/kurumsal#iletisim"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-full whitespace-nowrap"
                >
                  İletişime Geçin
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Popups & Modals */}
      <AnimatePresence>
        
        {/* Toast Notification */}
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-2xl z-[150] border border-blue-400/20"
          >
            {showToast}
          </motion.div>
        )}

        {/* Live Stories Viewer Modal */}
        {activeStoryHighlight && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveStoryHighlight(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Story Card Container */}
            <div className="relative w-full max-w-sm aspect-[9/16] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
              
              {/* Top Progress Bar */}
              <div className="absolute top-3 left-0 right-0 px-3 z-30 flex space-x-1.5">
                {activeStoryHighlight.stories.map((s, idx) => (
                  <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-white transition-all duration-5000 ease-linear`}
                      style={{ 
                        width: idx < activeStoryIndex ? '100%' : idx === activeStoryIndex ? '100%' : '0%',
                        transition: idx === activeStoryIndex ? 'width 5000ms linear' : 'none'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Story Source Details Header */}
              <div className="absolute top-6 left-0 right-0 px-4 z-30 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full border border-blue-400 p-0.5">
                    <div className="w-full h-full rounded-full bg-slate-700 flex items-center justify-center font-black text-[7px]">M</div>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white flex items-center">
                      mortanasagency 
                      <span className="text-blue-500 text-[10px] ml-1">●</span>
                    </h4>
                    <p className="text-[9px] text-slate-300">{activeStoryHighlight.name}</p>
                  </div>
                </div>
              </div>

              {/* Story Slide Image */}
              <div className="absolute inset-0">
                <img 
                  src={activeStoryHighlight.stories[activeStoryIndex].image} 
                  alt={activeStoryHighlight.stories[activeStoryIndex].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/50" />
              </div>

              {/* Bottom CTA / Slide Info */}
              <div className="relative z-30 p-6 pt-32 mt-auto text-center space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white leading-tight mb-2">
                    {activeStoryHighlight.stories[activeStoryIndex].title}
                  </h3>
                  <p className="text-slate-200 text-xs leading-relaxed font-semibold">
                    {activeStoryHighlight.stories[activeStoryIndex].sub}
                  </p>
                </div>

                <div className="pt-2">
                  <Link 
                    to={activeStoryHighlight.stories[activeStoryIndex].ctaLink}
                    onClick={() => setActiveStoryHighlight(null)}
                    className="inline-flex items-center justify-center w-full py-2.5 bg-white text-black hover:bg-slate-100 font-extrabold text-[11px] uppercase tracking-wider rounded-xl transition-all shadow-lg scale-95 hover:scale-100"
                  >
                    <span>{activeStoryHighlight.stories[activeStoryIndex].ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>

              {/* Left / Right Interactive Navigational Arrows */}
              <button 
                onClick={handlePrevStory}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white"
                style={{ visibility: activeStoryIndex > 0 ? 'visible' : 'hidden' }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextStory}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-40 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </div>
          </motion.div>
        )}

        {/* Selected Post Detail Modal */}
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[150] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedPost(null)}
          >
            {/* Modal Body Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-4xl bg-gradient-to-br from-slate-950 to-[#0e111a] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media Preview Frame (Left) */}
              <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative select-none">
                <img 
                  src={selectedPost.imageUrl} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover max-h-[40vh] md:max-h-full"
                  onDoubleClick={() => handleLikePost(selectedPost.id)}
                  referrerPolicy="no-referrer"
                />
                
                {/* Double click heart animation indicator */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-white">
                  Kategorisi: <span className="font-bold text-blue-400">{selectedPost.category}</span>
                </div>
              </div>

              {/* Interactions Frame (Right) */}
              <div className="w-full md:w-2/5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800/60 min-h-0">
                
                {/* Header (Author) */}
                <div className="p-4 border-b border-slate-800/35 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-black">M</div>
                    <div>
                      <h4 className="font-bold text-xs text-white flex items-center">
                        mortanasagency
                        <svg className="w-4 h-4 text-blue-500 ml-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </h4>
                      <p className="text-[10px] text-slate-400">İstanbul, Türkiye</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-slate-400 hover:text-white p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Caption and Comments Stream */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[30vh] md:max-h-full">
                  
                  {/* Caption */}
                  <div className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[10px] shrink-0">M</div>
                    <div>
                      <p className="leading-relaxed">
                        <span className="font-bold text-white mr-2">mortanasagency</span>
                        {selectedPost.description}
                      </p>
                    </div>
                  </div>

                  {/* Rest of comments */}
                  {selectedPost.comments.map((comment, index) => (
                    <div key={index} className="flex items-start space-x-2.5 text-xs text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-slate-800/60 flex items-center justify-center font-bold text-[10px] shrink-0">
                        {comment.username[0].toUpperCase()}
                      </div>
                      <div>
                        <p className="leading-relaxed">
                          <span className="font-bold text-white mr-2">{comment.username}</span>
                          {comment.text}
                        </p>
                        <p className="text-[9px] text-slate-400 mt-1">{comment.time}</p>
                      </div>
                    </div>
                  ))}

                </div>

                {/* Interactions Panel */}
                <div className="p-4 border-t border-slate-800/40 space-y-3 bg-black/25">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <button onClick={(e) => handleLikePost(selectedPost.id, e)} className="text-slate-300 hover:text-red-500 transition-colors">
                        <Heart className={`w-6 h-6 ${selectedPost.hasLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
                      <button className="text-slate-300 hover:text-white transition-colors">
                        <MessageCircle className="w-6 h-6" />
                      </button>
                    </div>
                    <div>
                      <Bookmark className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
                    </div>
                  </div>

                  <p className="text-xs font-bold text-white">{selectedPost.likesCount} beğenme</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-wider">{selectedPost.date}</p>

                  {/* High Conversion Action Trigger CTA */}
                  <div className="pt-2">
                    <Link 
                      to={selectedPost.link}
                      onClick={() => setSelectedPost(null)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[11px] uppercase tracking-wider py-2 rounded-xl text-center block transition-all hover:shadow-lg hover:shadow-blue-500/10"
                    >
                      <span>Projeyi & Çözümü İnceleyin</span>
                    </Link>
                  </div>
                </div>

                {/* Comment Input */}
                <form onSubmit={handleAddComment} className="border-t border-slate-800/40 p-4 flex items-center bg-black/40">
                  <input 
                    type="text" 
                    placeholder="Yorum ekle..." 
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    className="flex-1 bg-transparent text-xs focus:outline-none placeholder:text-slate-500 text-white"
                  />
                  <button 
                    type="submit" 
                    disabled={!newCommentText.trim()}
                    className="text-xs font-bold text-blue-500 hover:text-blue-400 disabled:opacity-40 transition-opacity"
                  >
                    Paylaş
                  </button>
                </form>

              </div>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
};

export default InstagramPortfolioPage;
