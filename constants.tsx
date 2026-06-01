import React from "react";
// FIX: Imported PricingPlan type
import type {
  NavLink,
  Feature,
  Sector,
  Integration,
  Testimonial,
  AutomationSolution,
  Application,
  Reference,
  TeamMember,
  PricingPlan,
  Article,
  Milestone,
  ValueProposition,
  FAQ,
  PressMention,
  SectorPricingPlan,
} from "./types";

export const AUTOMATION_SOLUTIONS: AutomationSolution[] = [

  {
    name: "Sosyal Medya Otomasyonu",
    slug: "sosyal-medya-otomasyonu",
    shortDescription: "Markanızın tüm sosyal medya kanallarını yapay zeka destekli tek bir akıllı panelden kusursuzca yönetin, müşteri etkileşimlerini otomatikleştirerek satışlarınızı katlayın.",
    title: "Akıllı Sosyal Medya Yönetim Platformu",
    description:
      "WhatsApp, Instagram, Facebook, Twitter ve E-ticaret platformlarınızı tek bir akıllı panelde birleştirin. İşletmenize özel olarak eğittiğimiz yapay zeka, müşterilerinizle aynı sizin gibi yazışır, 7/24 otomatik olarak sipariş alır, rezervasyon yapar ve tüm müşteri iletişimini kesintisiz yönetir.",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 300,
      label: "Başarılı Kurulum",
    },
    keyFeatures: [], // This is now replaced by whyChooseUs
    problemSolution: [
      {
        problem:
          "Farklı platformlardan (WhatsApp, Instagram, Facebook vb.) gelen mesajları takip etmek karmaşık ve zaman alıcıdır.",
        solution:
          "Tüm mesajlaşma kanallarınızı tek bir birleşik gelen kutusunda toplayarak tam kontrol ve kolay yönetim sağlıyoruz.",
      },
      {
        problem:
          "Mesai saatleri dışında veya yoğun anlarda müşterilere anında yanıt verememek, satış ve sadakat kaybına yol açar.",
        solution:
          "İşletmenize özel eğitimli yapay zeka, 7/24 çalışarak her soruya anında yanıt verir, sipariş ve rezervasyonları kaçırmaz.",
      },
      {
        problem:
          "Her müşteri sorusu için personel ayırmak, yüksek operasyonel maliyetler ve verimsizlik yaratır.",
        solution:
          "Yapay zeka asistanı, müşteri iletişiminin %90'ını otomatikleştirerek personelinizin daha stratejik işlere odaklanmasını sağlar.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-brain",
        title: "İşletmeye Özel Yapay Zeka",
        description:
          "Yapay zekamızı sizin işletmenizin ürünleri, hizmetleri ve iletişim diliyle eğitiyoruz. Müşterileriniz bir robotla değil, markanızın uzman bir temsilcisiyle konuştuğunu hisseder.",
      },
      {
        icon: "fas fa-boxes-stacked",
        title: "Tüm Kanallar Tek Yerde",
        description:
          "WhatsApp, Instagram, Facebook, Twitter ve daha fazlasını tek bir panelden yönetin. Dağınıklığa son verin, hiçbir mesajı veya fırsatı gözden kaçırmayın.",
      },
      {
        icon: "fas fa-comments",
        title: "İnsan Gibi İletişim",
        description:
          "Yapay zekamız, sadece yanıt vermekle kalmaz; doğal, akıcı ve samimi bir dille diyalog kurar, müşteri taleplerini anlar ve çözüm üretir.",
      },
      {
        icon: "fas fa-robot",
        title: "Uçtan Uca Otomasyon",
        description:
          "Otomatik olarak sipariş alır, rezervasyon yapar, kargo takibi bilgisi verir, konum atar ve sıkça sorulan tüm soruları yanıtlar. İşletmeniz siz uyurken bile çalışır.",
      },
    ],
    howItWorks: [
      {
        icon: "fas fa-plug",
        title: "1. Kanalları Bağla",
        description:
          "WhatsApp, Instagram, Facebook ve diğer platformlarınızı sadece birkaç tıklama ile Mortanas paneline kolayca entegre edin.",
      },
      {
        icon: "fas fa-graduation-cap",
        title: "2. Yapay Zekayı Eğit",
        description:
          "Ürünleriniz, hizmetleriniz ve sıkça sorulan sorular hakkında bilgi yükleyerek yapay zekanın işletmenizin bir uzmanı olmasını sağlayın.",
      },
      {
        icon: "fas fa-rocket",
        title: "3. Otomata Al & Büyü",
        description:
          "Arkanıza yaslanın ve yapay zekanın müşteri iletişimini yönetmesini, satışları artırmasını ve size zaman kazandırmasını izleyin.",
      },
    ],
    integrations: {
      title: "Tüm Ekosisteminizle Bütünleşin",
      description:
        "İster e-ticaret platformunuz, ister CRM'iniz, isterse pazarlama araçlarınız olsun, Mortanas yüzlerce popüler uygulama ile sorunsuz bir şekilde entegre olarak iş akışlarınızı birleştirir ve verimliliğinizi en üst düzeye çıkarır.",
      logos: [
        {
          name: "WhatsApp",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png",
        },
        {
          name: "Instagram",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/512px-Instagram_icon.png",
        },
        {
          name: "Facebook",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png",
        },
        {
          name: "Shopify",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png",
        },
        {
          name: "WooCommerce",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/512px-WooCommerce_logo.svg.png",
        },
        {
          name: "Trendyol",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Trendyol_logo.svg/512px-Trendyol_logo.svg.png",
        },
        {
          name: "Hepsiburada",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Hepsiburada_logo_2023.svg",
        },
        {
          name: "Amazon",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
        },
        {
          name: "Magento",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Magento_logo.svg/512px-Magento_logo.svg.png",
        },
        {
          name: "X (Twitter)",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/512px-X_logo_2023.svg.png",
        },
        {
          name: "LinkedIn",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/512px-LinkedIn_icon.svg.png",
        },
        {
          name: "Telegram",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png",
        },
        {
          name: "Salesforce",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
        },
        {
          name: "HubSpot",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/HubSpot_Logo.svg/512px-HubSpot_Logo.svg.png",
        },
        {
          name: "Slack",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png",
        },
        {
          name: "Zapier",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/512px-Zapier_logo.svg.png",
        },
        {
          name: "Stripe",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: İletişimi Gelire Dönüştürmek",
      description:
        "Her bir müşteri etkileşimini, değerli bir satış fırsatına ve kalıcı bir müşteri sadakatine dönüştürmek için teknolojiyi hizmetinize sunuyoruz. Amacımız, operasyonel yükünüzü hafifletirken kârlılığınızı en üst düzeye çıkarmaktır.",
    },
    setupFee: {
      original: 1000,
      discounted: 600,
    },
    pricingPlans: [
      {
        name: "Başlangıç",
        prices: { monthly: 200, sixMonths: 150, annually: 120 },
        originalPrices: { monthly: 300, sixMonths: 300, annually: 300 },
        features: [
          "Aylık sohbet oturumu: <strong>1.000 oturum</strong>",
          "Günlük ortalama oturum: <strong>33 oturum</strong>",
          "Aylık AI mesaj cevabı: <strong>5.000 cevap</strong>",
          "Günlük ortalama AI cevabı: <strong>160 cevap</strong>",
          "Ekstra 1.000 AI cevap: <strong>$10 - $15</strong>",
          "2 Sosyal Medya Kanalı Entegrasyonu",
          "Temel Yapay Zeka Yanıtlama Modeli",
        ],
        paymentLink:
          "https://mortanas.com/market/akilli-sosyal-medya-yonetim-platformu",
      },
      {
        name: "İşletme",
        prices: { monthly: 300, sixMonths: 225, annually: 180 },
        originalPrices: { monthly: 450, sixMonths: 450, annually: 450 },
        popular: true,
        features: [
          "Aylık sohbet oturumu: <strong>5.000 oturum</strong>",
          "Günlük ortalama oturum: <strong>165 oturum</strong>",
          "Aylık AI mesaj cevabı: <strong>25.000 cevap</strong>",
          "Günlük ortalama AI cevabı: <strong>800 cevap</strong>",
          "Ekstra 1.000 AI cevap: <strong>$8 - $12</strong>",
          "5 Sosyal Medya Kanalı Entegrasyonu",
          "Gelişmiş Yapay Zeka Yanıtlama Modeli",
          "Sipariş ve Rezervasyon Yönetimi",
        ],
      },
      {
        name: "Profesyonel",
        prices: { monthly: 500, sixMonths: 375, annually: 300 },
        originalPrices: { monthly: 750, sixMonths: 750, annually: 750 },
        features: [
          "Aylık sohbet oturumu: <strong>Sınırsız / Özel</strong>",
          "Günlük ortalama oturum: <strong>Sınırsız / Özel</strong>",
          "Aylık AI mesaj cevabı: <strong>Sınırsız / Özel</strong>",
          "Günlük ortalama AI cevabı: <strong>Sınırsız / Özel</strong>",
          "Ekstra 1.000 AI cevap: <strong>Ücretsiz / Dahil</strong>",
          "Sınırsız Sosyal Medya Kanalı Girişi",
          "Özelleştirilmiş Kendi Dil / Ton AI Modeli",
          "Özel API / CRM Entegrasyonları ve 7/24 Destek",
        ],
      },
    ],
  },
  {
    name: "Sesli Müşteri Hizmetleri",
    slug: "sesli-musteri-hizmetleri",
    shortDescription:
      "Yapay zeka sesli asistanı ile müşteri iletişimini 7/24 otomatikleştirin.",
    title: "Mortanas Voice Agent: Sesli Yapay Zeka Asistanı",
    description:
      "İşletmelerin telefon veya çevrimiçi aramalar yoluyla müşterileriyle insan benzeri bir şekilde iletişim kurmasını sağlayan yapay zeka tabanlı bir sistemdir.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 300,
      label: "Mutlu İşletme",
    },
    keyFeatures: [], // Kept for type consistency, but the new page uses detailed fields.
    problemSolution: [
      {
        problem:
          "Yoğun saatlerde veya mesai dışı aramalarda telefonların kaçırılması doğrudan ciro ve müşteri kaybına sebep oluyor.",
        solution:
          "Eş zamanlı yüzlerce çağrıyı sıfır bekleme süresiyle yanıtlayarak tüm müşterilere anında profesyonel asistanlık sunar.",
      },
      {
        problem:
          "Randevu koordinasyonu telefon trafiği içinde kayboluyor ve manuel planlama hataları meydana geliyor.",
        solution:
          "Yapay zeka asistanı, işletmenizin takvimiyle canlı entegre çalışarak randevuları doğrudan oluşturur ve onaylar.",
      },
      {
        problem:
          "Tekrarlayan temel sorular ve basit müşteri talepleri, çalışanların değerli vaktini tüketerek verimliliği düşürüyor.",
        solution:
          "Rutin sorunları anında anlar ve çözer; insan temsilcileri yalnızca karmaşık müşteri operasyonlarına odaklanmak üzere serbest bırakır.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-microchip",
        title: "Yüksek Kaliteli Ses Sentezi",
        description:
          "Gerçeğe en yakın, akıcı ve doğal insan sesi tonuyla müşterilerinize kusursuz deneyim sunuyoruz. Sizi bir robot değil, özel asistan destekler.",
      },
      {
        icon: "fas fa-bolt",
        title: "Sıfır Gecikme (Low Latency)",
        description:
          "Saniyeden çok daha kısa sürede yanıt verme özelliğiyle telefon görüşmelerinde arka plan sessizliği veya bekleme boşlukları oluşturmaz.",
      },
      {
        icon: "fas fa-diagram-project",
        title: "Dinamik Diyalog Yönetimi",
        description:
          "Senaryo dışına çıkan, karmaşık ve iç içe geçmiş soruları kolaylıkla anlar, sohbetin bağlamını kaybetmeden doğrudan çözüme odaklanır.",
      },
      {
        icon: "fas fa-users-viewfinder",
        title: "Sınırsız Kapasite",
        description:
          "Aynı saniye içerisinde gelen binlerce farklı çağrıyı bile tek bir cevapsıza düşürmeden paralel olarak karşılar ve başarıyla sonuçlandırır.",
      },
    ],
    howItWorks: [
      {
        icon: "fas fa-headphones-simple",
        title: "1. Santral Yönlendirmesi",
        description:
          "Mevcut numaranızı veya santral hatlarınızı özel tahsis ettiğimiz akıllı VOIP veya yönlendirme sistemlerine saniyeler içinde bağlayın.",
      },
      {
        icon: "fas fa-brain",
        title: "2. Sesli Doğal Dil Eğitimi",
        description:
          "Sesli yapay zekamıza firmanızın çalışma saatlerini, hizmetlerini ve takvim entegrasyonu bilgilerini verin, sizin yerinize anında öğrensin.",
      },
      {
        icon: "fas fa-chart-line",
        title: "3. Akıllı Yanıt ve Raporlama",
        description:
          "Gereken tüm telefon trafiğini 7/24 yapay zeka yönetsin. Her çağrının anlık özetine, duygu analizine ve ses kayıtlarına anında ulaşın.",
      },
    ],
    integrations: {
      title: "Tüm Ekosisteminizle Bütünleşin",
      description:
        "Mevcut CRM sistemleriniz, santral altyapılarınız ve mesajlaşma servisleriniz ile kusursuz entegrasyon kurarak çağrı merkezi verimliliğinizi katlayın.",
      logos: [
        {
          name: "WhatsApp",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png",
        },
        {
          name: "Salesforce",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
        },
        {
          name: "HubSpot",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/HubSpot_Logo.svg/512px-HubSpot_Logo.svg.png",
        },
        {
          name: "Zendesk",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Zendesk_logo.svg/512px-Zendesk_logo.svg.png",
        },
        {
          name: "Slack",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png",
        },
        {
          name: "Zapier",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/512px-Zapier_logo.svg.png",
        },
        {
          name: "Google Calendar",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/512px-Google_Calendar_icon_%282020%29.svg.png",
        },
        {
          name: "Twilio",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Twilio-logo.png/512px-Twilio-logo.png",
        },
        {
          name: "Shopify",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png",
        },
      ],
    },
    whatIsIt: {
      title: "Voice Agent: Sesli Yapay Zeka Asistanı",
      description:
        "İşletmelerin telefon veya çevrimiçi aramalar yoluyla müşterileriyle insan benzeri bir şekilde iletişim kurmasını sağlayan yapay zeka tabanlı bir sistemdir. Mortanas AI çatısı altında geliştirilen Voice Agent, işletmelere özel akıllı asistan çözümleri ile müşteri iletişimini güçlendirir, iş süreçlerini hızlandırır ve dijital dönüşümü kolaylaştırır.",
      mainFeatures: [
        "7/24 kesintisiz hizmet sunar.",
        "Gerçekçi ve doğal ses tonuyla iletişim kurar.",
        "Aynı anda birden fazla çağrıyı yönetebilir.",
        "Müşteri taleplerini anlayarak doğru ve net bilgilendirme yapar.",
        "Çoklu dil desteği ile global ölçekte erişim imkanı sunar.",
        "Rezervasyon, randevu ve sipariş işlemlerini eksiksiz tamamlar.",
        "Görüşme özetlerini çıkararak işletmeye detaylı raporlar sunar.",
      ],
      benefits: [
        "Müşteri memnuniyetini artırır.",
        "Çağrı merkezlerinin iş yükünü azaltır.",
        "İş süreçlerini hızlandırır ve maliyetleri düşürür.",
        "7/24 Kesintisiz Hizmet ile Müşteri Kaybını Önler",
        "Satış ve Pazarlama Kampanyalarını Destekler",
        "Marka İmajını Güçlendirir ve Modernleştirir",
        "Değerli Veri ve İçgörüler Sunarak Strateji Geliştirir",
      ],
    },
    packageScope: {
      title: "Paket Kapsamı ve İlave Hizmetler",
      included: {
        title: "Pakete Dahil Temel Unsurlar",
        items: [
          "7/24 Hizmet",
          "Özelleştirilmiş Gerçekçi Ses",
          "Eş Zamanlı Konuşma",
          "Standart Bilgi Aktarımı (Sms, E-posta, Whatsapp, Telegram)",
          "Santral Üzerinden Çağrı Aktarımı",
          "Görüşme özetleri",
          "Kullanıcı Bilgi Paneli Erişimi",
        ],
      },
      projectBased: {
        title: "İsteğe Bağlı Proje Kapsamı",
        items: [
          "Yazılım Entegrasyonu (CRM, E-ticaret, Web Sitesi)",
          "Gelişmiş Whatsapp Entegrasyonu",
          "Sosyal Medya Entegrasyonu",
          "Doküman Okuma, Analiz ve Raporlama",
          "Sektöre Özel Otomasyonlar",
        ],
      },
      note: "İstenilen proje hizmetleri firmaya özel çözümler ile fiyatlandırılacaktır.",
    },
    selectionCriteria: {
      title: "Paket Seçim Kriterleri",
      criteria: [
        {
          title: "Günlük Arama Sayısı",
          description: "Beklenen ortalama çağrı miktarı",
        },
        {
          title: "Hafta İçi / Hafta Sonu Farkı",
          description: "Beklenen ortalama çağrı miktarı",
        },
        { title: "Ortalama Görüşme Süresi", description: "Tahmini" },
        {
          title: "Yoğun Dönemler",
          description: "Sezon, kampanya ve özel tarihler",
        },
      ],
    },
    individualPricing: {
      title: "Sesli Asistan Fiyat Listesi",
      plans: [
        {
          name: "Temel Paket",
          minutes: 200,
          monthlyPrice: 249,
          setupFee: 1000,
          extraMinuteFee: "$1.50/dk",
          prices: { monthly: 249, sixMonths: 188, annually: 161 },
          originalPrices: { monthly: 313, sixMonths: 250, annually: 225 },
          features: [
            "Global 100+ Dil Desteği (Aksan, bölgesel diyalekt ve lokalizasyon algoritmaları entegreli)",
            "Akıllı AI Sesli Görüşme Otomasyonu (7/24 kesintisiz karşılama, akıllı yönlendirme ve bilgi verme)",
            "Yapay Zeka Destekli Akıllı Cevaplama Senaryosu (Sorulan soruları anında kavrama ve mantıklı yanıtlar üretebilme)",
            "Bekleme Sürelerini Tamamen Sıfıra İndirme Garantisi (Yoğun saatlerde hiçbir müşterinin çağrısını kaçırmama)",
            "Hızlı Aktivasyon ve Canlı Test Paneli (Kurulum sonrasında sistemi arayıp canlı test yapabilme imkanı)",
            "Standart Çağrı Raporlama (Detaylı çağrı süreleri, konuşma başlangıcı ve temel dinamik analitikler)",
            "Eşzamanlı Yanıt Altyapısı (Aynı anda 3 kişiye kadar sıfır gecikmeli kesintisiz cevap verme kapasitesi)",
            "Yüksek Kaliteli Özelleştirilmiş Doğal Sentezleyici Ses Seçenekleri (Sentetik olmayan, insan tonunda ses kalitesi)",
            "Gelişmiş Yapay Zeka LLM Sürücü Entegrasyonu & Token Lisans Bedeli (GPT-4o & Claude 3.5 Sonnet altyapısı dahil)",
            "Aylık 200 Dakika Görüşme Hakkı (Arama karşılama ve giden dış aramalar dahil olmak üzere toplam süre)",
            "Detaylı Görüşme Kayıtları (Görüşmelerin ses dosyaları ve güvenli bulut arşivi depolama paneli)",
            "Günlük Otomatik Özet Raporu (E-posta ve SMS yoluyla kritik görüşmelerin gün sonu özet bildirimleri)",
            "KVKK ve GDPR Standartlarına Tam Uyumlu Şifrelenmiş Güvenli Veri Saklama Protokolü",
            "Web Tabanlı Yönetim Paneli (Çağrı geçmişini dilediğiniz an inceleyebileceğiniz modern arayüz)",
            "Kolay Kurulum & Entegrasyon (Mevcut telefon hattınızı doğrudan veya yönlendirmeyle kolayca bağlama)",
            "Ek Dakika Ücreti: <strong>$1.50/dk</strong>",
          ],
        },
        {
          name: "Standart Paket",
          minutes: 500,
          monthlyPrice: 461,
          setupFee: 1000,
          extraMinuteFee: "$1.25/dk",
          prices: { monthly: 461, sixMonths: 350, annually: 300 },
          originalPrices: { monthly: 563, sixMonths: 438, annually: 375 },
          popular: true,
          features: [
            "Global 100+ Dil Desteği (Aksan, bölgesel diyalekt ve lokalizasyon algoritmaları entegreli)",
            "Akıllı AI Sesli Görüşme Otomasyonu (7/24 kesintisiz karşılama, akıllı yönlendirme ve bilgi verme)",
            "Kişiselleştirilmiş İntro Ses Tasarımları (Şirketinizin marka kimliğine tam uygun kurumsal karşılama stratejisi)",
            "Gelişmiş Duygu Durum Tahminleme Algoritması (Arayan kişinin ses tonundan sinirli veya sakin olduğunu anlayıp hitap değiştirme)",
            "Esnek Mesai Tablosu Senkronizasyonu (Hafta sonu, gece ve tatil günlerine özel dinamik senaryo kurgulama)",
            "Gelişmiş Gerçek Zamanlı Çağrı Raporlama (Duygu analizi, konsept etiketleme ve gelişmiş analitik paneli)",
            "Eşzamanlı Yanıt Altyapısı (Aynı anda 5 kişiye kadar sıfır gecikmeli kesintisiz cevap verme kapasitesi)",
            "Yüksek Kaliteli Özelleştirilmiş Doğal Sentezleyici Ses Seçenekleri (Sentetik olmayan, insan tonunda ses kalitesi)",
            "Gelişmiş Yapay Zeka LLM Sürücü Entegrasyonu & Token Lisans Bedeli (GPT-4o & Claude 3.5 Sonnet altyapısı dahil)",
            "Aylık 500 Dakika Görüşme Hakkı (Giden ve gelen aramalar)",
            "Gelişmiş CRM, E-Ticaret ve Form Entegrasyon Altyapısı (Hubspot, Salesforce ve özel sistemler)",
            "Webhook Desteği (Görüşme sırasındaki müşteri seçimlerini harici sunucularınıza anlık veri aktarımı)",
            "Mesai Saatleri Dışında Özel Karşılama ve Telesekreter Akış Tasarımları",
            "Öncelikli Sunucu Bağıntısı ile Ekstra Düşük Gecikme Süreli Bağlantı Kalitesi",
            "Akıllı Çağrı Sıralama ve Meşgul Hat Yönetimi (Gelen hiçbir aramayı kaçırmayan akıllı algoritma)",
            "Detaylı Görüşme Kayıtları (Görüşmelerin ses dosyaları ve gelişmiş bulut ses kütüphanesi arşivleme)",
            "Otomatik Mail ve SMS Entegrasyonu (Görüşme sonrasında müşteriye anlık bildirim / özet gönderimi)",
            "KVKK ve GDPR Standartlarına Tam Uyumlu Şifrelenmiş Güvenli Veri Saklama Protokolü",
            "Ek Dakika Ücreti: <strong>$1.25/dk</strong>",
          ],
        },
        {
          name: "Pro Paket",
          minutes: 1000,
          monthlyPrice: 749,
          setupFee: 1000,
          extraMinuteFee: "$1.00/dk",
          prices: { monthly: 749, sixMonths: 563, annually: 488 },
          originalPrices: { monthly: 938, sixMonths: 688, annually: 625 },
          features: [
            "Global 100+ Dil Desteği (Aksan, bölgesel diyalekt ve lokalizasyon algoritmaları entegreli)",
            "Akıllı AI Sesli Görüşme Otomasyonu (7/24 kesintisiz karşılama, akıllı yönlendirme ve bilgi verme)",
            "Sınırsız Alt Algoritma Uzayı (Dilediğiniz kadar derin dallanma yapabileceğiniz AI yönlendirme mimarisi)",
            "Premium Müşteri Temsilcisi Eskalasyonu (Yapay zeka asistanının çözemeyeceği kompleks sorunlarda insana yönlendirme)",
            "Özel Yapay Zeka Eğitim Seti Güncellemeleri (Kullanıcı davranışlarına göre belirlenen periyotlarda sistem eğitimi)",
            "Detaylı Anlık Raporlama Paneli (Eşzamanlı canlı dashboard ve çok boyutlu filtreleme arayüzü)",
            "Eşzamanlı Yanıt Altyapısı (Aynı anda 10 kişiye kadar sıfır gecikmeli kesintisiz cevap verme kapasitesi)",
            "Yüksek Kaliteli Özelleştirilmiş Doğal Sentezleyici Ses Seçenekleri (Sentetik olmayan, insan tonunda ses kalitesi)",
            "Gelişmiş Yapay Zeka LLM Sürücü Entegrasyonu & Token Lisans Bedeli (GPT-4o & Claude 3.5 Sonnet altyapısı dahil)",
            "Aylık 1000 Dakika Görüşme Hakkı (Giden ve gelen aramalar)",
            "Gelişmiş CRM, ERP ve Otomasyon Entegrasyonları (API ve özel soket protokolleriyle tam entegre)",
            "Akıllı Randevu Tanımlama, Takvim Senkronizasyonu ve Canlı Lead Doğrulama/Yönlendirme Yapısı",
            "Sektörünüze Özel Senaryolu Gelişmiş Konuşma ve Eğitilebilir Diyalog Akışı Tasarımı",
            "Veritabanından Dinamik Müşteri Bilgisi Sorgulama ve Canlı Veri Okuma Akışları (SQL, NoSQL, API)",
            "Özel Bölgesel Dialect & Coğrafi Aksan Co-pilot Entegrasyonu ve Ses Tonu Modifikasyonu",
            "Kesintisiz 7/24 Telefon ve SLA Destek Protokolü (Özel hesap yöneticisi desteği dahil)",
            "Özel Güvenlik Duvarı ve İşletmenize Özel İzole Barındırılan dedicated AI Sunucu Altyapısı",
            "Çok Kanallı Bildirim Entegrasyonu (Arama bittiğinde Slack, MS Teams, Mail veya SMS ile anlık raporlama)",
            "Gelişmiş Ses Analitiği (Arayan kişinin duygu tahmini, konuşma hızı ve memnuniyet skoru analizi)",
            "Sürekli AI Model Optimizasyonu (Kullanıcı etkileşimlerine göre konuşma modelinin her hafta güncellenmesi)",
            "Ek Dakika Ücreti: <strong>$1.00/dk</strong>",
          ],
        },
      ],
      notes: [
        "Tüm paketler için tek seferlik $1000 kurulum ücreti alınmaktadır.",
        "Fiyatlarımıza KDV dahil değildir.",
        "İstenilen ekstra proje hizmetleri paket fiyatları içerisine dahil değildir.",
        "Paket aşımı durumunda, kullanılan her ek dakika için yukarıda belirtilen dakika başına ücretlendirme yapılacaktır.",
      ],
    },
    corporatePricing: undefined,
  },
  {
    name: "Sesli Chatbot Otomasyonu",
    slug: "sesli-chatbot",
    shortDescription:
      "Web sitenizde ve uygulamalarınızda sesli komutlarla çalışan akıllı chatbot.",
    title: "Etkileşimli Sesli Chatbot Deneyimi",
    description:
      "Müşterilerinizin metin yazmak yerine konuşarak etkileşim kurmasını sağlayan, yeni nesil bir yapay zeka chatbot çözümüdür. Web sitenize, mobil uygulamanıza veya kiosklarınıza entegre olarak 7/24 sesli destek ve satış asistanlığı yapar.",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 100,
      label: "Aktif Kurulum",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Kullanıcılar mobil cihazlarda veya meşgulken metin yazmaktan hoşlanmaz, bu da etkileşimi düşürür.",
        solution:
          "Sesli Chatbot, kullanıcıların doğal bir şekilde konuşarak soru sormasını ve işlem yapmasını sağlar, böylece daha akıcı bir deneyim sunar.",
      },
      {
        problem:
          "Standart metin tabanlı chatbot'lar, görme engelli veya okuma zorluğu çeken kullanıcılar için erişilebilirlik sorunları yaratır.",
        solution:
          "Sesli arayüz, dijital hizmetlerinizi daha geniş bir kitle için erişilebilir hale getirir ve kapsayıcılığı artırır.",
      },
      {
        problem:
          "Müşteri hizmetleri sadece metinle sınırlı kaldığında, markanın kişiliğini ve sıcaklığını yansıtmak zorlaşır.",
        solution:
          "Markanıza özel bir ses tonu ile tasarlanan Sesli Chatbot, müşterilerinizle daha kişisel ve samimi bir bağ kurmanızı sağlar.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-microphone-alt",
        title: "Doğal Konuşma Deneyimi",
        description:
          "Gelişmiş doğal dil anlama (NLU) teknolojisi sayesinde, kullanıcıların komutlarını ve sorularını bir insan gibi anlar ve yanıtlar.",
      },
      {
        icon: "fas fa-cogs",
        title: "Çok Kanallı Entegrasyon",
        description:
          "Web sitenize, mobil uygulamanıza, kiosklarınıza ve hatta IVR sistemlerinize kolayca entegre ederek tutarlı bir deneyim sunun.",
      },
      {
        icon: "fas fa-tasks",
        title: "Görev Odaklı Eylemler",
        description:
          "Sadece bilgi vermekle kalmaz; form doldurma, ürün arama, sipariş verme gibi eylemleri sesli komutlarla gerçekleştirir.",
      },
      {
        icon: "fas fa-user-astronaut",
        title: "Kişiselleştirilebilir Ses ve Kişilik",
        description:
          "Markanızın kimliğine uygun olarak tasarlanmış benzersiz bir ses tonu ve kişilik ile müşterilerinize unutulmaz bir deneyim yaşatın.",
      },
    ],
    howItWorks: [
      {
        icon: "fas fa-bullseye",
        title: "1. Senaryoları Belirle",
        description:
          "Müşterilerinizin sesli olarak hangi işlemleri yapmasını istediğinizi (bilgi alma, sipariş, randevu vb.) tanımlayın.",
      },
      {
        icon: "fas fa-volume-up",
        title: "2. Sesi ve Kişiliği Tasarla",
        description:
          "Markanıza en uygun ses tonunu ve chatbot'un konuşma tarzını birlikte tasarlayarak yapay zekayı markanızın bir parçası yapın.",
      },
      {
        icon: "fas fa-rocket",
        title: "3. Entegre Et ve Başla",
        description:
          "Web sitenize veya uygulamanıza ekleyeceğimiz basit bir kod parçasıyla Sesli Chatbot'u aktif edin ve müşterilerinizle konuşmaya başlayın.",
      },
    ],
    integrations: {
      title: "Tüm Dijital Varlıklarınızla Uyumlu",
      description:
        "Web, mobil ve fiziksel kanallarınızda sorunsuz bir şekilde çalışarak bütünsel bir sesli deneyim sunar.",
      logos: [
        {
          name: "Web Sitesi",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/W3C_HTML5_logo.svg/512px-W3C_HTML5_logo.svg.png",
        },
        {
          name: "iOS",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1920px-Apple_logo_black.svg.png",
        },
        {
          name: "Android",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/512px-Android_robot.svg.png",
        },
        {
          name: "Kiosk",
          logoUrl: "https://cdn-icons-png.flaticon.com/512/3063/3063820.png",
        },
        {
          name: "IVR",
          logoUrl: "https://cdn-icons-png.flaticon.com/512/1531/1531392.png",
        },
        {
          name: "Zapier",
          logoUrl:
            "https://1000logos.net/wp-content/uploads/2022/09/Zapier-Symbol.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Etkileşimi Kolaylaştırmak, Erişilebilirliği Artırmak",
      description:
        "Teknolojiyi kullanarak, kullanıcıların dijital dünyayla en doğal yolla, yani konuşarak etkileşim kurmasını sağlıyoruz. Amacımız, markanızla müşterileriniz arasında daha hızlı, kolay ve insani bir köprü kurmaktır.",
    },
    setupFee: {
      original: 1500,
      discounted: 900,
    },
    pricingPlans: [
      {
        name: "Web Başlangıç",
        hasApiFee: true,
        prices: { monthly: 150, sixMonths: 135, annually: 120 },
        originalPrices: { monthly: 300, sixMonths: 270, annually: 240 },
        features: [
          "1 Web Sitesi Entegrasyonu",
          "Aylık 2,000 Sesli Etkileşim",
          "Temel Senaryo Akışları",
          "Standart Raporlama",
        ],
      },
      {
        name: "Mobil & Web Pro",
        hasApiFee: true,
        prices: { monthly: 300, sixMonths: 270, annually: 240 },
        originalPrices: { monthly: 600, sixMonths: 540, annually: 480 },
        popular: true,
        features: [
          "Web & Mobil Uygulama Entegrasyonu",
          "Aylık 10,000 Sesli Etkileşim",
          "Gelişmiş Görev Otomasyonu",
          "Detaylı Analitikler",
          "API Erişimi",
        ],
      },
      {
        name: "Kurumsal Omni-Channel",
        hasApiFee: true,
        prices: { monthly: 600, sixMonths: 540, annually: 480 },
        originalPrices: { monthly: 1200, sixMonths: 1080, annually: 960 },
        features: [
          "Sınırsız Kanal Entegrasyonu (Web, Mobil, Kiosk)",
          "Sınırsız Sesli Etkileşim",
          "Özelleştirilmiş AI Modeli ve Ses",
          "CRM & IVR Entegrasyonu",
          "Özel Müşteri Temsilcisi",
        ],
      },
    ],
  },
  {
    name: "Haber Otomasyonu",
    slug: "haber-otomasyonu",
    shortDescription:
      "Haber akışınızı otomatikleştirin, kaynakları izleyin ve içerik üretiminizi hızlandırın.",
    title: "Gazeteciler ve Basın Kuruluşları için Akıllı Haber Otomasyonu",
    description:
      "Gündemi anlık olarak takip eden, binlerce kaynağı tarayan ve size özel haber özetleri sunan yapay zeka destekli platform. Araştırma süreçlerinizi kısaltın, özel haberler üretmeye odaklanın ve içeriklerinizi anında hedef kitlenize ulaştırın.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 50,
      label: "Haber Ajansı Kullanıyor",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Binlerce haber kaynağını (ajanslar, sosyal medya, web siteleri) manuel olarak takip etmek imkansızdır ve önemli gelişmeler gözden kaçabilir.",
        solution:
          "Yapay zeka, belirlediğiniz anahtar kelimeler ve konularla ilgili binlerce kaynağı 7/24 tarar ve önemli haberleri anında size bildirir.",
      },
      {
        problem:
          "Haber metni yazmak, özet çıkarmak ve farklı formatlara (sosyal medya, web) uyarlamak ciddi zaman ve efor gerektirir.",
        solution:
          "Gelişmiş dil modelleri, gelen bültenlerden veya uzun metinlerden saniyeler içinde haber metinleri, başlık önerileri ve sosyal medya paylaşımları üretir.",
      },
      {
        problem:
          "Rakiplerin ve sektördeki gelişmelerin takibi, stratejik planlama için kritik olmasına rağmen genellikle ihmal edilir.",
        solution:
          "Platform, rakip yayınları ve belirli sektörlerdeki trendleri sürekli izleyerek size düzenli rekabet analizi ve trend raporları sunar.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-rss",
        title: "Gerçek Zamanlı Gündem Takibi",
        description:
          "Ajanslar, sosyal medya ve binlerce haber sitesini anlık olarak izleyerek hiçbir gelişmeyi kaçırmamanızı sağlar.",
      },
      {
        icon: "fas fa-pen-nib",
        title: "Yapay Zeka Destekli İçerik Üretimi",
        description:
          "Basın bültenlerinden, uzun raporlardan veya bir dizi bilgiden saniyeler içinde özgün haber metinleri ve özetler oluşturur.",
      },
      {
        icon: "fas fa-magnifying-glass-chart",
        title: "Derinlemesine Kaynak Analizi",
        description:
          "Bir haberin veya konunun farklı kaynaklarda nasıl işlendiğini analiz eder, size karşılaştırmalı bir perspektif sunar.",
      },
      {
        icon: "fas fa-share-alt",
        title: "Çok Kanallı Dağıtım Otomasyonu",
        description:
          "Ürettiğiniz haberleri tek tıkla web sitenizde, sosyal medya hesaplarınızda ve e-posta bültenlerinizde otomatik olarak yayınlar.",
      },
    ],
    howItWorks: [
      {
        icon: "fas fa-bullseye",
        title: "1. Kaynakları Belirle",
        description:
          "Takip etmek istediğiniz haber ajanslarını, anahtar kelimeleri, sosyal medya hesaplarını ve sektörleri sisteme tanımlayın.",
      },
      {
        icon: "fas fa-robot",
        title: "2. Yapay Zekayı Çalıştır",
        description:
          "Yapay zeka, belirlediğiniz kaynakları taramaya başlar, içerikleri analiz eder ve size özel haber akışları oluşturur.",
      },
      {
        icon: "fas fa-newspaper",
        title: "3. Üret & Yayınla",
        description:
          "AI tarafından oluşturulan taslakları düzenleyin veya doğrudan kullanın. Tek tıkla içeriğinizi tüm kanallarınızda yayınlayın.",
      },
    ],
    integrations: {
      title: "İş Akışınıza Sorunsuz Uyum",
      description:
        "İçerik yönetim sistemleri, sosyal medya planlama araçları ve iletişim platformları ile tam entegrasyon.",
      logos: [
        {
          name: "WordPress",
          logoUrl: "https://cdn.simpleicons.org/wordpress",
        },
        {
          name: "X",
          logoUrl: "https://cdn.simpleicons.org/x",
        },
        {
          name: "Telegram",
          logoUrl: "https://cdn.simpleicons.org/telegram",
        },
        {
          name: "Slack",
          logoUrl: "https://cdn.simpleicons.org/slack",
        },
        {
          name: "Google News",
          logoUrl: "https://cdn.simpleicons.org/googlenews",
        },
        {
          name: "Feedly",
          logoUrl: "https://cdn.simpleicons.org/feedly",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Haberciliği Hızlandırmak, Gazeteciliği Güçlendirmek",
      description:
        "Teknolojiyi, gazetecilerin ve basın mensuplarının tekrarlayan araştırma ve yazım süreçlerinden kurtulup, kamuoyunu bilgilendirme ve özel haberler üretme gibi temel görevlerine daha fazla odaklanabilmeleri için bir araç olarak sunuyoruz.",
    },
    setupFee: {
      original: 800,
      discounted: 400,
    },
    pricingPlans: [
      {
        name: "Serbest Gazeteci",
        prices: { monthly: 80, sixMonths: 70, annually: 60 },
        originalPrices: { monthly: 160, sixMonths: 140, annually: 120 },
        features: [
          "50 Anahtar Kelime Takibi",
          "100 Haber Kaynağı İzleme",
          "Aylık 50 AI İçerik Üretimi",
          "Temel Raporlama",
        ],
      },
      {
        name: "Haber Ajansı",
        prices: { monthly: 200, sixMonths: 180, annually: 160 },
        originalPrices: { monthly: 400, sixMonths: 360, annually: 320 },
        popular: true,
        features: [
          "250 Anahtar Kelime Takibi",
          "Sınırsız Haber Kaynağı İzleme",
          "Aylık 200 AI İçerik Üretimi",
          "WordPress & Sosyal Medya Entegrasyonu",
          "Gelişmiş Analitikler",
        ],
      },
      {
        name: "Medya Grubu",
        prices: { monthly: 450, sixMonths: 400, annually: 350 },
        originalPrices: { monthly: 900, sixMonths: 800, annually: 700 },
        features: [
          "Sınırsız Anahtar Kelime Takibi",
          "Sınırsız Haber Kaynağı İzleme",
          "Sınırsız AI İçerik Üretimi",
          "Tüm Entegrasyonlar",
          "Özel API Erişimi",
          "Öncelikli Destek",
        ],
      },
    ],
  },
  {
    name: "Emlak Otomasyonu",
    slug: "emlak-otomasyonu",
    shortDescription:
      "Potansiyel alıcı ve kiracıları yönetin, randevuları otomatikleştirin ve portföyünüzü tek yerden kontrol edin.",
    title: "Emlak Danışmanları ve Ofisleri için Akıllı Otomasyon Platformu",
    description:
      "Web sitenizden, sosyal medyadan ve emlak portallarından gelen potansiyel müşteri taleplerini tek bir akıllı panelde toplayın. Yapay zeka, 7/24 müşteri sorularını yanıtlar, uygun mülkleri önerir ve danışmanlarınız için randevuları otomatik olarak planlar.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 150,
      label: "Emlak Ofisi Kullanıyor",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Farklı emlak portalları, web sitesi ve sosyal medyadan gelen talepleri takip etmek dağınık ve verimsizdir.",
        solution:
          "Tüm potansiyel müşteri (lead) kanallarınızı tek bir akıllı gelen kutusunda birleştirerek hiçbir fırsatı kaçırmamanızı sağlıyoruz.",
      },
      {
        problem:
          "Mesai saatleri dışında veya yoğunluktan dolayı taleplere anında dönememek, potansiyel müşterilerin rakiplere gitmesine neden olur.",
        solution:
          "Yapay zeka, 7/24 çalışarak mülkler hakkında temel soruları yanıtlar, müşteri bilgilerini alır ve danışmanları bilgilendirir.",
      },
      {
        problem:
          "Mülk gösterme randevularını ayarlamak, telefon ve e-posta trafiğiyle çok fazla zaman alır.",
        solution:
          "Müşteriler, danışmanların takvimine göre uygun zamanları online olarak görüp, yapay zeka yardımıyla otomatik randevu oluşturabilir.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-sitemap",
        title: "Tüm Kanallar Tek Yerde",
        description:
          "Sahibinden.com, Hepsiemlak, web siteniz ve WhatsApp'tan gelen tüm müşteri taleplerini tek bir panelden yönetin.",
      },
      {
        icon: "fas fa-robot",
        title: "7/24 Otomatik Karşılama",
        description:
          "Yapay zeka, siz meşgulken bile her yeni talebi anında karşılar, ilk bilgileri verir ve müşteriyi sıcak tutar.",
      },
      {
        icon: "fas fa-calendar-check",
        title: "Akıllı Randevu Planlama",
        description:
          "Danışmanlarınızın takvimleriyle entegre çalışarak, mülk gösterme randevularını otomatik olarak ve çakışma olmadan ayarlar.",
      },
      {
        icon: "fas fa-house-user",
        title: "Akıllı Mülk Eşleştirme",
        description:
          "Yapay zeka, müşterinin aradığı kriterlere (oda sayısı, metrekare, konum vb.) en uygun mülkleri portföyünüzden bularak önerir.",
      },
    ],
    howItWorks: [
      {
        icon: "fas fa-plug",
        title: "1. Kanalları Bağlayın",
        description:
          "Emlak portallarınızı, web sitenizi ve WhatsApp numaranızı sisteme kolayca entegre edin.",
      },
      {
        icon: "fas fa-building-user",
        title: "2. Portföyünüzü Yükleyin",
        description:
          "Mevcut mülk ilanlarınızı sisteme yükleyerek yapay zekanın portföyünüzü öğrenmesini sağlayın.",
      },
      {
        icon: "fas fa-rocket",
        title: "3. Otomasyonu Başlatın",
        description:
          "Arkanıza yaslanın ve yapay zekanın sizin için müşteri adaylarını yönetmesini ve randevuları organize etmesini izleyin.",
      },
    ],
    integrations: {
      title: "Sektörün Liderleriyle Tam Entegrasyon",
      description:
        "En popüler emlak portalları ve iletişim kanallarıyla sorunsuz bir şekilde çalışarak iş akışınızı kolaylaştırın.",
      logos: [
        { name: "Sahibinden.com", logoUrl: "https://i.imgur.com/R3aB5N7.png" },
        { name: "Hepsiemlak", logoUrl: "https://i.imgur.com/GHYp627.png" },
        { name: "Emlakjet", logoUrl: "https://i.imgur.com/4q6XyJ2.png" },
        { name: "Zingat", logoUrl: "https://i.imgur.com/U8tJ8Y3.png" },
        {
          name: "WhatsApp",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png",
        },
        { name: "Instagram", logoUrl: "https://i.hizliresim.com/l1o40i2.png" },
      ],
    },
    ourGoal: {
      title: "Amacımız: Danışmanlara Zaman Kazandırmak, Satışları Hızlandırmak",
      description:
        "Teknolojiyi kullanarak emlak danışmanlarının tekrarlayan ve zaman alan işlerden kurtulmasını, böylece asıl odaklanmaları gereken şeye, yani mülk satmaya ve kiralamaya daha fazla zaman ayırmalarını sağlamayı hedefliyoruz.",
    },
    setupFee: {
      original: 900,
      discounted: 500,
    },
    pricingPlans: [
      {
        name: "Bireysel Danışman",
        prices: { monthly: 90, sixMonths: 80, annually: 70 },
        originalPrices: { monthly: 180, sixMonths: 160, annually: 140 },
        features: [
          "1 Kullanıcı (Danışman)",
          "50 Mülk Yönetimi",
          "2 Portal Entegrasyonu",
          "Temel AI Yanıtlama",
          "Otomatik Randevu Takvimi",
        ],
      },
      {
        name: "Emlak Ofisi",
        prices: { monthly: 220, sixMonths: 200, annually: 180 },
        originalPrices: { monthly: 440, sixMonths: 400, annually: 360 },
        popular: true,
        features: [
          "5 Kullanıcıya Kadar",
          "250 Mülk Yönetimi",
          "5 Portal Entegrasyonu",
          "Gelişmiş AI Eşleştirme",
          "Detaylı Raporlama ve Analitik",
        ],
      },
      {
        name: "Zincir Ofis",
        prices: { monthly: 480, sixMonths: 430, annually: 390 },
        originalPrices: { monthly: 960, sixMonths: 860, annually: 780 },
        features: [
          "Sınırsız Kullanıcı",
          "Sınırsız Mülk Yönetimi",
          "Sınırsız Portal Entegrasyonu",
          "Özelleştirilmiş AI Modeli",
          "Öncelikli Destek ve API Erişimi",
        ],
      },
    ],
  },
  {
    name: "Stok Yönetimi Otomasyonu",
    slug: "stok-yonetimi-otomasyonu",
    shortDescription:
      "Envanterinizi anlık takip edin, siparişleri otomatikleştirin ve stok maliyetlerinizi düşürün.",
    title: "Akıllı Stok ve Envanter Yönetim Otomasyonu",
    description:
      "E-ticaret siteniz, pazar yerleri ve fiziksel mağazalarınızdaki stok seviyelerini tek bir merkezden yönetin. Yapay zeka, satış trendlerini analiz ederek minimum stok seviyelerini belirler, tedarikçilere otomatik sipariş geçer ve stok fazlası veya stok tükenmesi riskini ortadan kaldırır.",
    imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 200,
      label: "Perakendeci Kullanıyor",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Farklı satış kanallarındaki (mağaza, web sitesi, pazar yerleri) stokları manuel olarak takip etmek, hatalara ve zaman kaybına yol açar.",
        solution:
          "Tüm satış kanallarınızdaki envanteri tek bir panelde birleştirerek, stok seviyelerini gerçek zamanlı ve hatasız bir şekilde senkronize ediyoruz.",
      },
      {
        problem:
          "Popüler ürünlerin stoklarının tükenmesi (stockout), hem satış kaybına hem de müşteri memnuniyetsizliğine neden olur.",
        solution:
          "Yapay zeka, satış verilerinizi ve trendleri analiz ederek kritik stok seviyelerini belirler ve tükenmeden önce otomatik olarak tedarikçiye sipariş geçer.",
      },
      {
        problem:
          "Fazla stok (overstock) tutmak, depolama maliyetlerini artırır ve sermayenizi gereksiz yere bağlar.",
        solution:
          "Talep tahminleme algoritmalarımız, hangi üründen ne kadar stok tutmanız gerektiğini optimize eder, böylece gereksiz maliyetlerden kurtulursunuz.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-sync-alt",
        title: "Gerçek Zamanlı Senkronizasyon",
        description:
          "Tüm online ve offline kanallarınızdaki stok hareketlerini anlık olarak tek bir merkezden izleyin. Bir kanalda satılan ürün, anında diğer tüm kanallarda güncellenir.",
      },
      {
        icon: "fas fa-brain",
        title: "AI Destekli Talep Tahmini",
        description:
          "Yapay zeka, geçmiş satış verilerini, mevsimselliği ve trendleri analiz ederek gelecekteki talebi tahmin eder ve size en doğru stok seviyelerini önerir.",
      },
      {
        icon: "fas fa-truck-loading",
        title: "Otomatik Sipariş Yönetimi",
        description:
          "Belirlediğiniz kurallara göre, stoklar kritik seviyeye düştüğünde sistem otomatik olarak tedarikçilerinize sipariş oluşturur ve gönderir.",
      },
      {
        icon: "fas fa-store",
        title: "Çok Kanallı Entegrasyon",
        description:
          "Shopify, WooCommerce, Trendyol, Hepsiburada gibi popüler e-ticaret platformları ve pazar yerleriyle tam entegre çalışır.",
      },
    ],
    howItWorks: [
      {
        icon: "fas fa-plug",
        title: "1. Kanallarınızı Entegre Edin",
        description:
          "E-ticaret sitenizi, pazar yeri mağazalarınızı ve fiziksel POS sistemlerinizi platformumuza kolayca bağlayın.",
      },
      {
        icon: "fas fa-chart-bar",
        title: "2. Yapay Zeka Analiz Etsin",
        description:
          "Yapay zeka, satış verilerinizi analiz ederek ürünleriniz için talep tahminleri ve ideal stok seviyeleri oluşturur.",
      },
      {
        icon: "fas fa-cogs",
        title: "3. Otomasyonu Ayarlayın",
        description:
          "Otomatik sipariş kurallarını belirleyin ve sistemin envanterinizi sizin için optimize etmesini izleyin.",
      },
    ],
    integrations: {
      title: "Tüm Satış Ekosisteminizle Uyumlu",
      description:
        "En popüler e-ticaret platformları, pazar yerleri ve ERP sistemleri ile sorunsuz entegrasyon.",
      logos: [
        {
          name: "Shopify",
          logoUrl:
            "https://www.freepnglogos.com/uploads/shopify-logo-png/ecommerce-shopify-logo-hd-1.png",
        },
        {
          name: "WooCommerce",
          logoUrl:
            "https://1000logos.net/wp-content/uploads/2020/08/WooCommerce-Logo.jpg",
        },
        {
          name: "Trendyol",
          logoUrl:
            "https://cdn.webrazzi.com/uploads/2019/09/trendyol-240_hd.jpeg",
        },
        {
          name: "Hepsiburada",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Hepsiburada_logo_2023.svg",
        },
        {
          name: "Amazon",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
        },
        {
          name: "SAP",
          logoUrl:
            "https://1000logos.net/wp-content/uploads/2017/03/SAP-Logo.png",
        },
        {
          name: "Netsuite",
          logoUrl:
            "https://www.logo.wine/a/logo/NetSuite/NetSuite-Logo.wine.svg",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Sıfır Stok Hatası, Maksimum Kârlılık",
      description:
        "Doğru ürünün, doğru zamanda, doğru miktarda stokta olmasını sağlayarak operasyonel mükemmelliğe ulaşmanızı hedefliyoruz. Amacımız, envanter maliyetlerinizi düşürürken satış potansiyelinizi en üst düzeye çıkarmaktır.",
    },
    setupFee: {
      original: 1200,
      discounted: 700,
    },
    pricingPlans: [
      {
        name: "Küçük İşletme",
        prices: { monthly: 120, sixMonths: 108, annually: 96 },
        originalPrices: { monthly: 240, sixMonths: 216, annually: 192 },
        features: [
          "1 Satış Kanalı Entegrasyonu",
          "500 Ürüne Kadar (SKU)",
          "Temel Talep Tahmini",
          "Manuel Sipariş Oluşturma",
        ],
      },
      {
        name: "Büyüyen Mağaza",
        prices: { monthly: 250, sixMonths: 225, annually: 200 },
        originalPrices: { monthly: 500, sixMonths: 450, annually: 400 },
        popular: true,
        features: [
          "5 Satış Kanalı Entegrasyonu",
          "5,000 Ürüne Kadar (SKU)",
          "AI Destekli Talep Tahmini",
          "Otomatik Sipariş Oluşturma",
          "Detaylı Raporlama",
        ],
      },
      {
        name: "Kurumsal",
        prices: { monthly: 550, sixMonths: 495, annually: 440 },
        originalPrices: { monthly: 1100, sixMonths: 990, annually: 880 },
        features: [
          "Sınırsız Satış Kanalı",
          "Sınırsız Ürün (SKU)",
          "Gelişmiş AI Analizi",
          "ERP Entegrasyonu",
          "Özel Müşteri Temsilcisi",
        ],
      },
    ],
  },
  {
    name: "Yapay Zeka Chatbot (WhatsApp & IG)",
    slug: "yapay-zeka-chatbot", // changed from yapay-zeka-chatbot-whatsapp-ig
    features: [
      {
        icon: "fas fa-robot",
        title: "Doğal Dil İşleme (NLP)",
        description:
          "Müşterilerin sorularını insan gibi anlar ve doğal, sohbet havasında akıcı yanıtlar verir.",
        category: "Temel Özellikler",
      },
      {
        icon: "fas fa-bolt",
        title: "Anında Yanıt",
        description:
          "Gelen tüm mesajlara 1 saniyeden kısa sürede yanıt vererek müşteri memnuniyetini zirveye çıkarır.",
        category: "Temel Özellikler",
      },
      {
        icon: "fas fa-language",
        title: "Çoklu Dil Desteği",
        description:
          "Dünyanın her yerinden gelen müşterilere, onların ana dilinde otomatik ve kusursuz yanıt verir.",
        category: "Müşteri Deneyimi",
      },
      {
        icon: "fas fa-user-tie",
        title: "İnsan Temsilciye Aktarım",
        description:
          "Karmaşık veya özel konularda yapay zeka, görüşmeyi tüm geçmişiyle birlikte yetkili kişiye devreder.",
        category: "Müşteri Deneyimi",
      },
      {
        icon: "fas fa-file-invoice-dollar",
        title: "Sipariş ve Rezervasyon Alımı",
        description:
          "WhatsApp üzerinden doğrudan sipariş kaydı veya rezervasyon taleplerini alıp sisteminize işler.",
        category: "Satış ve Dönüşüm",
      },
    ],
    benefits: [
      {
        icon: "fas fa-chart-line",
        title: "Artan Dönüşüm Oranları",
        description:
          "Müşterilerinizin anında yanıt alması, satın alma kararlarını hızlandırır ve sıcak fırsatların kaçmasını engeller.",
      },
      {
        icon: "fas fa-piggy-bank",
        title: "Düşük Operasyon Maliyetleri",
        description:
          "Büyük bir canlı destek ekibi kurmak yerine, binlerce görüşmeyi tek bir sistem üzerinden yöneterek maliyetleri azaltın.",
      },
      {
        icon: "fas fa-face-smile-wink",
        title: "Yüksek Müşteri Memnuniyeti",
        description:
          "Müşteriler saatlerce bekletilmek yerine 7/24 istedikleri an saniyeler içinde çözüme kavuşurlar.",
      },
      {
        icon: "fas fa-clock",
        title: "7/24 Kesintisiz Hizmet",
        description:
          "İşletmeniz kapalıyken bile satış yapmaya, bilgi vermeye ve müşteri taleplerini toplayama devam edersiniz.",
      },
    ],
    aiFeatures: {
      title: "Gelişmiş Yapay Zeka Özellikleri",
      subtitle:
        "Müşteri iletişimini bir üst seviyeye taşıyan akıllı teknolojiler.",
      features: [
        {
          icon: "fas fa-brain",
          title: "Sürekli Öğrenen Algoritma",
          description:
            "Müşterilerinizle ne kadar çok konuşursa, sektörel standartlarda o kadar isabetli ve kaliteli yanıtlar üretir.",
        },
        {
          icon: "fas fa-heart-crack",
          title: "Duygu (Sentiment) Analizi",
          description:
            "Müşterinin kızgın, memnun veya kararsız olduğunu anlayarak üslubunu otomatik olarak ona göre ayarlar.",
        },
        {
          icon: "fas fa-tags",
          title: "Akıllı Etiketleme ve Segmentasyon",
          description:
            "Görüşme içeriğine göre müşterileri potansiyel alıcı, şikayet veya teknik destek olarak otomatik etiketler.",
        },
      ],
    },
    targetAudience: [
      { name: "E-Ticaret Firmaları", icon: "fas fa-shopping-cart" },
      { name: "Oteller ve Restoranlar", icon: "fas fa-hospitality" },
      { name: "Sağlık Merkezleri", icon: "fas fa-heartbeat" },
      { name: "Emlak Ajansları", icon: "fas fa-building" },
      { name: "Danışmanlık Şirketleri", icon: "fas fa-handshake" },
      { name: "Güzellik ve Spa Tesisleri", icon: "fas fa-spa" },
    ],
    shortDescription:
      "WhatsApp ve Instagram DM üzerindeki tüm mesajları 7/24 otomatik ve akıllıca yanıtlayın.",
    title: "Yapay Zeka Destekli Hibrit Mesajlaşma & Hub Chatbot",
    description:
      "Satış ve destek süreçlerinizin hızını ve dönüşümünü en üst düzeye çıkarmak için WhatsApp ve Instagram platformlarında müşterilerinizle insan benzeri bir akıcılıkla etkileşime geçen gelişmiş yapay zeka entegrasyonu.",
    imageUrl: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 420,
      label: "Aktif Chatbot",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Gece saatlerinde veya yoğunluk anında gelen mesajlar cevapsız kalıyor ve potansiyel müşteriler rakiplere yöneliyor.",
        solution:
          "7/24 anında yanıt veren yapay zeka asistanı, müşterilerinizi saniyeler içinde karşılayarak sıcak satışı canlı tutar.",
      },
      {
        problem:
          "Sıkça sorulan tekrarlayan sorular, canlı destek ekibinin zamanını boşa harcıyor ve operasyon yoruyor.",
        solution:
          "Müşteri sorularının %85'ini insan desteğine ihtiyaç duymadan çözer, karmaşık talepleri yetkililere akıllıca devreder.",
      },
      {
        problem:
          "Sosyal medyada geç dönülen ve takip edilmeyen yorumlar sıcak satış fırsatlarının kaçmasına neden oluyor.",
        solution:
          "Yorum yazan kullanıcıları saniyeler içinde tespit edip DM yoluyla otomatik bir diyalog ve teklif akışına dönüştürür.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fab fa-whatsapp",
        title: "Resmi WhatsApp & Cloud API",
        description:
          "Meta kurumsal iş ortaklığı standartlarında, numara engellenmesi riski olmadan resmi ve güvenli bulut API altyapısı.",
      },
      {
        icon: "fab fa-instagram",
        title: "Instagram DM & Yorum Otomasyonu",
        description:
          "Post ve Story yorumlarına saniyeler içinde yanıt vererek kullanıcıları otomatik olarak DM üzerinden satış hunisine yönlendirir.",
      },
      {
        icon: "fas fa-shield-halved",
        title: "KVKK & %100 Güvenli Altyapı",
        description:
          "Müşteri yazışmaları ve verileri tam uyumlu şifreli sunucularda saklanır, kurumsal gizlilik standartlarını tam karşılar.",
      },
      {
        icon: "fas fa-chart-pie",
        title: "Gelişmiş Conversational Analytics",
        description:
          "Ziyaretçilerin en çok sorduğu soruları, taleplerini ve satış oranlarını anlık görselleştirilmiş panolarla raporlar.",
      },
    ],

    howItWorks: [
      {
        icon: "fas fa-plug",
        title: "1. Kanalları Entegre Et",
        description:
          "WhatsApp ve Instagram hesaplarınızı güvenli Meta kurumsal Cloud API ile sisteme bağlayın.",
      },
      {
        icon: "fas fa-brain",
        title: "2. Satış Dilini Öğret",
        description:
          "Ürünlerinizi, fiyat listelerinizi ve kurumsal iletişim üslubunuzu sisteme yükleyerek yapay zekayı eğitin.",
      },
      {
        icon: "fas fa-rocket",
        title: "3. Satışları Otomatize Et",
        description:
          "Müşterilerinizle iletişimi anında yapay zekaya devredin ve artan müşteri memnuniyetinin ve cironun keyfini çıkarın.",
      },
    ],
    integrations: {
      title: "Kusursuz Ekosistem",
      description:
        "En popüler CRM, ERP ve ödeme sistemleriyle tam uyumlu bir mesajlaşma deneyimi yaşatır.",
      logos: [
        {
          name: "WhatsApp",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png",
        },
        {
          name: "Instagram",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/512px-Instagram_icon.png",
        },
        {
          name: "Shopify",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png",
        },
        {
          name: "Trendyol",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Trendyol_logo.svg/512px-Trendyol_logo.svg.png",
        },
        {
          name: "HubSpot",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/HubSpot_Logo.svg/512px-HubSpot_Logo.svg.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: 7/24 Kesintisiz Satış Motoru Kurmak",
      description:
        "Sosyal medya ve mesajlaşma kanallarınızdaki anlık fırsatları kaçırmamanız için insan zekası esnekliğinde ama robot hızında çalışan bir sistem oluşturmayı hedefliyoruz.",
    },
    setupFee: {
      original: 800,
      discounted: 450,
    },
    pricingPlans: [
      {
        name: "Start",
        prices: { monthly: 79, sixMonths: 69, annually: 59 },
        originalPrices: { monthly: 120, sixMonths: 100, annually: 85 },
        features: [
          "2 Kanal Entegrasyonu",
          "Aylık 2.500 Ücretsiz Mesaj",
          "Bilgi Dağarcığı Eğitimi",
          "Yorumdan DM'e Yönlendirme",
        ],
      },
      {
        name: "Enterprise",
        prices: { monthly: 149, sixMonths: 129, annually: 109 },
        originalPrices: { monthly: 220, sixMonths: 190, annually: 160 },
        features: [
          "Sınırsız Kanal Entegrasyonu",
          "Aylık 15.000 Mesaj",
          "Gelişmiş Raporlama & Duygu Analizi",
          "Sipariş & CRM Entegrasyonları",
        ],
        popular: true,
      },
    ],
  },
  {
    name: "Çağrı Karşılama (Voice AI)",
    slug: "cagri-karsilama-voice-ai",
    shortDescription:
      "Gelen aramaları sıfır gecikmeyle, insan benzeri ses kalitesiyle karşılayan yapay zeka telefon asistanı.",
    title: "Akıllı Çağrı Karşılama & Randevu Otomasyonu",
    description:
      "Gelen çağrıları karşılamak, randevuları organize etmek, rezervasyon almak ve müşteriyi anında bilgilendirmek için tasarlanmış gerçekçi ve anlık sesli yapay zeka çözümü.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 280,
      label: "Entegre Santral",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Yoğun saatlerde veya mesai dışı aramalarda telefonların kaçırılması doğrudan ciro ve müşteri kaybına sebep oluyor.",
        solution:
          "Eş zamanlı yüzlerce çağrıyı sıfır bekleme süresiyle yanıtlayarak tüm müşterilere anında profesyonel asistanlık sunar.",
      },
      {
        problem:
          "Randevu koordinasyonu telefon trafiği içinde kayboluyor ve manuel planlama hataları meydana geliyor.",
        solution:
          "Yapay zeka asistanı, işletmenizin takvimiyle canlı entegre çalışarak randevuları doğrudan oluşturur ve onaylar.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-volume-up",
        title: "Ultra Gerçekçi Ses Tonları",
        description:
          "Robotik olmayan, doğal nefes alma sesleri ve kusursuz Türkçe diksiyonla entegre edilmiş insan benzeri ses teknolojisi.",
      },
      {
        icon: "fas fa-calendar-check",
        title: "Takvim Entegrasyonu",
        description:
          "Google Calendar ve özel CRM sistemlerinizle eş zamanlı randevu oluşturma ve takvim çakışmalarını önleme.",
      },
    ],

    howItWorks: [
      {
        icon: "fas fa-phone",
        title: "1. Santral Yönlendirmesi",
        description:
          "Şirketinizin telefon hattını veya sanal numarasını doğrudan yapay zeka santralimize yönlendirin.",
      },
      {
        icon: "fas fa-cogs",
        title: "2. Ses ve Senaryo Ayarı",
        description:
          "Markanıza uygun ses tonunu seçin, randevu alma ve karşılama senaryolarını ihtiyaçlarınıza göre kurgulayın.",
      },
      {
        icon: "fas fa-headphones",
        title: "3. Akıllı Yanıtlama",
        description:
          "Artık tüm gelen aramalar ilk zil sesinde açılır ve randevu ile bilgi verme işlemleri otonom hale gelir.",
      },
    ],
    integrations: {
      title: "Randevu ve Takvim Entegrasyonları",
      description:
        "Randevular doğrudan takviminize işlenirken müşteri kayıtları CRM sisteminize aktarılır.",
      logos: [
        {
          name: "Google Calendar",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/512px-Google_Calendar_icon_%282020%29.svg.png",
        },
        {
          name: "Salesforce",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
        },
        {
          name: "HubSpot",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/HubSpot_Logo.svg/512px-HubSpot_Logo.svg.png",
        },
        {
          name: "Calendly",
          logoUrl:
            "https://cdn.icon-icons.com/icons2/2699/PNG/512/calendly_logo_icon_168051.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Profesyonel İmkanlarla Sıfır Gecikme",
      description:
        "Hiçbir müşterinizin bekletilmediği, ilk saniyede yüksek bir profesyonellikle karşılandığı ve randevusunun saniyeler içinde oluşturulduğu bir telefon deneyimi sağlamak ana misyonumuzdur.",
    },
    setupFee: {
      original: 1000,
      discounted: 600,
    },
    pricingPlans: [
      {
        name: "Hafif Çağrı",
        prices: { monthly: 119, sixMonths: 99, annually: 89 },
        originalPrices: { monthly: 180, sixMonths: 150, annually: 130 },
        features: [
          "300 Görüşme Dakikası/Ay",
          "Canlı Randevu Rezervasyonu",
          "Arayan Kimliği Analizi",
          "Görüşme Özeti & SMS Gönderimi",
        ],
      },
      {
        name: "Yoğun Çağrı",
        prices: { monthly: 249, sixMonths: 219, annually: 199 },
        originalPrices: { monthly: 380, sixMonths: 330, annually: 290 },
        features: [
          "1.000 Görüşme Dakikası/Ay",
          "Eş Zamanlı 10 Görüşme",
          "Özel Bilgi Entegrasyonu",
          "API ve Veri Aktarımı",
        ],
        popular: true,
      },
    ],
  },
  {
    name: "İş Akışı Otomasyonu (RPA)",
    slug: "is-akisi-otomasyonu-rpa",
    shortDescription:
      "Yazılımsal robotlarla tekrarlayan manuel süreçleri otomatiğe alarak insan hatasını sıfıra indirin.",
    title: "Yapay Zeka Destekli RPA & Süreç Otomasyonu",
    description:
      "Veri girişi, rapor hazırlama, mutabakat ve dosya transferi gibi rutin iş süreçlerinizi insan müdahalesi olmadan 7/24 hatasız yürüten akıllı yazılım robotları.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 180,
      label: "Süreç Otomatikleştirildi",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Ekiplerin saatlerini harcadığı Excel kopyalama, veri taşıma ve manuel fatura kontrolleri iş verimini baltalıyor.",
        solution:
          "Sonsuz hızda çalışan RPA robotlarımız, verileri sistemler arasında saniyeler içinde aktararak personeli yaratıcı işlere yönlendirir.",
      },
      {
        problem:
          "Veri transferlerindeki insan kaynaklı dikkatsizlik ve hatalar ciddi finansal kayıplara sebep oluyor.",
        solution:
          "Robotlar tanımlı algoritmalarla çalışarak işlemleri sıfır hata toleransıyla yürütür ve her adımı kayıt altında tutar.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-shield-halved",
        title: "Kurumsal Güvenlik ve Uyumluluk",
        description:
          "Tüm faaliyetleri şifrelenmiş güvenli sanal makinelerde çalıştırır ve lokal mevzuatlara %100 uyum sağlar.",
      },
      {
        icon: "fas fa-bezier-curve",
        title: "Sistemler Arası Köprü",
        description:
          "API desteği olmayan en eski masaüstü uygulamaları dahi tıpkı bir insan gibi ekranı okuyarak birbiriyle entegre eder.",
      },
    ],

    howItWorks: [
      {
        icon: "fas fa-eye",
        title: "1. Süreç Analizi",
        description:
          "Şirketinizdeki tekrarlayan, manuel ve hataya açık operasyonel iş akışlarını ekiplerimizle analiz edin.",
      },
      {
        icon: "fas fa-robot",
        title: "2. Bot Geliştirme",
        description:
          "Veri aktarımı, fatura işleme ve mutabakat yapacak RPA robotlarını tasarlayalım.",
      },
      {
        icon: "fas fa-chart-line",
        title: "3. Devreye Alma",
        description:
          "Hatasız çalışan botlarla operasyon maliyetlerinizi %70 azaltıp daha stratejik işlere odaklanın.",
      },
    ],
    integrations: {
      title: "Tüm Programlarla Çalışabilen Yapı",
      description:
        "RPA robotlarımız, API olmasa bile ekrandaki verileri okuyarak her türlü ERP ve yazılımla uyumlu çalışabilir.",
      logos: [
        {
          name: "SAP",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/512px-SAP_2011_logo.svg.png",
        },
        {
          name: "Microsoft Excel",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png",
        },
        {
          name: "Salesforce",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: İşgücünü Manuel Yükten Kurtarmak",
      description:
        "Ekibinizin değerli zamanını kopyala-yapıştır gibi rutin işlemlerle harcamak yerine, yaratıcılık ve analiz gerektiren stratejik hedeflere yönlendirmeyi amaçlıyoruz.",
    },
    setupFee: {
      original: 1500,
      discounted: 950,
    },
    pricingPlans: [
      {
        name: "Tekli Robot",
        prices: { monthly: 199, sixMonths: 179, annually: 159 },
        originalPrices: { monthly: 300, sixMonths: 270, annually: 240 },
        features: [
          "1 Aktif Süreç Robotu",
          "Aylık 10.000 İşlem Sınırı",
          "Hata Bildirim Raporları",
          "Çalışma Saatleri Planlama",
        ],
      },
      {
        name: "Çoklu Robot",
        prices: { monthly: 449, sixMonths: 399, annually: 349 },
        originalPrices: { monthly: 650, sixMonths: 580, annually: 500 },
        features: [
          "3 Aktif Süreç Robotu",
          "Sınırsız İşlem Sayısı",
          "7/24 Canlı İzleme Paneli",
          "Akıllı AI Belge Okuma (OCR)",
        ],
        popular: true,
      },
    ],
  },
  {
    name: "İK ve İşe Alım Asistanı",
    slug: "ik-ve-ise-alim-asistani",
    shortDescription:
      "CV tarama, ön mülakat planlama ve aday değerlendirme süreçlerini yapay zeka ile %80 hızlandırın.",
    title: "Akıllı İK, CV Tarama ve Aday Sıralama Asistanı",
    description:
      "İş başvurusu yapan yüzlerce aday arasından aradığınız kriterlere en uygun yetenekleri saniyeler içinde tespit eden, ön elemeleri otomatik gerçekleştiren İK asistanı.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 120,
      label: "İK Departmanı Kullanıyor",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Yüzlerce başvuru arasından doğru özgeçmişleri seçmek İK departmanının günlerce vaktini ve enerjisini alıyor.",
        solution:
          "Yapay zeka, adayların yetkinliklerini pozisyon gereksinimleriyle anlık karşılaştırarak en uyumlu %10'u önünüze sıralar.",
      },
      {
        problem:
          "Adaylarla ilk mülakat randevusu ayarlama süreci e-posta trafiğinde çok uzuyor veya aksıyor.",
        solution:
          "Seçilen adaylara otomatik olarak takvim önerilir, adayın seçtiği saate mülakat daveti anında ulaştırılır.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-folder-open",
        title: "Semantik CV Analizi ve Puanlama",
        description:
          "Sadece anahtar kelimelere bakmakla kalmaz; projenin, şirketlerin ve adayın genel deneyiminin derin semantik analizini gerçekleştirir.",
      },
      {
        icon: "fas fa-user-check",
        title: "Yapay Zeka Ön Süzgeç Mülakatları",
        description:
          "Adaylara WhatsApp veya e-posta üzerinden yönlendirilen akıllı sorularla, başvurunun samimiyeti ve heyecanı önceden ölçülür.",
      },
    ],

    howItWorks: [
      {
        icon: "fas fa-file-upload",
        title: "1. CV'leri Sisteme Yükle",
        description:
          "İş ilanlarınıza gelen yüzlerce CV'yi veya kariyer portallarındaki havuzunuzu sisteme otomatik bağlayın.",
      },
      {
        icon: "fas fa-filter",
        title: "2. Kriterleri Belirle",
        description:
          "Adaylarda aradığınız yetkinlikleri, deneyimi ve beklentileri yapay zekaya bir kez tanımlayın.",
      },
      {
        icon: "fas fa-user-check",
        title: "3. En İyileri Keşfet",
        description:
          "Yapay zeka tüm havuzu analiz eder ve sadece istenen nitelikleri taşıyan adayları size puanlanmış olarak sunar.",
      },
    ],
    integrations: {
      title: "İnsan Kaynakları Entegrasyonu",
      description:
        "En popüler iş ilan portalları ve şirket içi İK yönetim yazılımlarıyla kesintisiz entegre.",
      logos: [
        {
          name: "LinkedIn",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/512px-LinkedIn_icon.svg.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Doğru Yeteneği Hızla Bulmak",
      description:
        "Yanlış işe alımların şirketlere yarattığı büyük maliyeti önleyip, yetenek tarama sürecini en aza indirgeyerek gerçek yeteneklere odaklanmanızı sağlamak.",
    },
    setupFee: {
      original: 800,
      discounted: 500,
    },
    pricingPlans: [
      {
        name: "Start-up İK",
        prices: { monthly: 89, sixMonths: 79, annually: 69 },
        originalPrices: { monthly: 150, sixMonths: 130, annually: 110 },
        features: [
          "Aylık 100 CV Tarama",
          "3 Aktif İlan Yönetimi",
          "Otomatik Aday Puanlama",
          "WhatsApp Davetiye Gönderme",
        ],
      },
      {
        name: "Profesyonel İK",
        prices: { monthly: 199, sixMonths: 179, annually: 159 },
        originalPrices: { monthly: 300, sixMonths: 270, annually: 240 },
        features: [
          "Sınırsız CV Tarama",
          "15 Aktif İlan Yönetimi",
          "ATS (Aday Takip Sistemi) Entegrasyonu",
          "AI Telefon Mülakat Planlama",
        ],
        popular: true,
      },
    ],
  },
  {
    name: "Dinamik Fiyatlandırma & Stok (E-Ticaret)",
    slug: "dinamik-fiyatlandirma-stok",
    shortDescription:
      "Pazaryerlerindeki rakip fiyatlarını ve stoklarını anlık izleyerek kârlılığınızı ve satışlarınızı akıllıca maksimuma çıkarın.",
    title: "Akıllı Dinamik Fiyatlandırma & Envanter Optimizayson Sistemi",
    description:
      "Trendyol, Hepsiburada, Amazon ve Shopify mağazalarınızda rakiplerin fiyat dalgalanmalarını ve stok seviyelerini canlı tarayarak, en yüksek kâr marjıyla Buybox kazanmanızı sağlayan yapay zeka algoritması.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 320,
      label: "E-Ticaret Mağazası",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Rakipler fiyat kırdığında veya stok tükettiğinde bunu geç fark etmek kar kaybına veya aşırı düşük fiyattan satışa yol açıyor.",
        solution:
          "Sistem rakipleri 10 dakikada bir tarar, belirlediğiniz kurallar dahilinde fiyatınızı otomatik olarak yukarı veya aşağı revize eder.",
      },
      {
        problem:
          "Pazaryerlerinde Buybox pozisyonunu kaybetmek reklam bütçenizi boşa harcıyor ve satışları durma noktasına getiriyor.",
        solution:
          "Akıllı algoritmalarımız sayesinde Buybox kazanırken kâr marjınızı en yüksek sınırda koruyarak maksimum kazanç sağlarız.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-bolt",
        title: "10 Dakikalık Periyotlar",
        description:
          "Sektördeki en hızlı tarama ve fiyat güncelleme altyapısıyla rakiplerinizin hamlelerine anında karşılık verin.",
      },
      {
        icon: "fas fa-scale-balanced",
        title: "Kâr Marjı Koruyucu Sistemi",
        description:
          "Minimum kâr limitlerinizin altına asla inmeden, akıllıca ve güvenle rekabet etmenizi sağlar.",
      },
    ],

    howItWorks: [
      {
        icon: "fas fa-link",
        title: "1. Mağazaları Bağla",
        description:
          "Pazaryeri dükkanlarınızı ve e-ticaret sitenizi API aracılığıyla fiyatlandırma motoruna tanımlayın.",
      },
      {
        icon: "fas fa-sliders-h",
        title: "2. Kâr Kurallarını Koy",
        description:
          "Satış stratejinizdeki minimum kâr marjını ve stok seviyesi alarmlarını özel panoda belirleyin.",
      },
      {
        icon: "fas fa-chart-line",
        title: "3. Buybox Kazan",
        description:
          "Rakipler fiyat kırdıkça ya da fiyat artırdıkça, motorunuz otomatik algoritmasıyla en optimum fiyatı vererek satışı alır.",
      },
    ],
    integrations: {
      title: "E-Ticaret Platformlarıyla Anında Senkron",
      description:
        "Tüm popüler pazar yerlerinde fiyatları anlık güncel tutan geniş e-ticaret entegrasyonu.",
      logos: [
        {
          name: "Trendyol",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Trendyol_logo.svg/512px-Trendyol_logo.svg.png",
        },
        {
          name: "Hepsiburada",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Hepsiburada_logo_2023.svg",
        },
        {
          name: "Amazon",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
        },
        {
          name: "Shopify",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Tüm Pazar Yerlerinde Avantaj Sağlamak",
      description:
        "Uyuyan stoklarınızı veya rekabette geri kalan ürünlerinizi akıllı fiyatlandırma manevraları ile sektördeki en büyük oyuncular seviyesine yükseltmek.",
    },
    setupFee: {
      original: 1100,
      discounted: 650,
    },
    pricingPlans: [
      {
        name: "Küçük Ölçek",
        prices: { monthly: 129, sixMonths: 109, annually: 99 },
        originalPrices: { monthly: 200, sixMonths: 170, annually: 150 },
        features: [
          "500 Aktif Ürün (SKU) İzleme",
          "2 Pazaryeri Bağlantısı",
          "Saatlik Fiyat Güncelleme",
          "Stok Kritik Uyarıları",
        ],
      },
      {
        name: "Profesyonel Satıcı",
        prices: { monthly: 279, sixMonths: 249, annually: 229 },
        originalPrices: { monthly: 420, sixMonths: 370, annually: 330 },
        features: [
          "5.000 Aktif Ürün (SKU) İzleme",
          "Tüm Pazaryerleri & Shopify",
          "10 Dakikalık Anlık Fiyat Revizesi",
          "Buybox Takip Algoritması",
        ],
        popular: true,
      },
    ],
  },
  {
    name: "Kişiselleştirilmiş E-Posta Pazarlama",
    slug: "kisisellestirilmis-e-posta-pazarlama",
    shortDescription:
      "Yapay zekanın hazırlayacağı kişiselleştirilmiş bülten ve otomasyon senaryolarıyla e-posta cirosunu %300 artırın.",
    title: "Yapay Zeka Destekli Akıllı E-Posta Otomasyon Entegrasyonu",
    description:
      "Kullanıcıların web sitenizde veya uygulamanızda gerçekleştirdikleri hareketlere göre otomatik bültenler hazırlayan, kişiye özel indirimler kurgulayan ve açılma oranlarını ölçen pazarlama motoru.",
    imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 180,
      label: "Kurumsal Marka",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Tüm veri tabanına aynı e-postayı göndermek düşük açılma oranlarına ve yüksek çıkış (unsubscribe) oranlarına neden oluyor.",
        solution:
          "Sistem her kullanıcının ilgi alanlarına, geçmiş alışverişlerine ve tıklama alışkanlıklarına göre özel ürün bültenleri üretir.",
      },
      {
        problem:
          "Terk edilmiş sepetleri ve hoş geldin serilerini yönetmek zaman alıyor ve statik mailler müşteriyi tetiklemiyor.",
        solution:
          "Sistem, dinamik içerik üreticisiyle sepette kalan tam ürün görsellerini, özel üretilmiş bir ikna metniyle birleştirip otomatik iletir.",
      },
      {
        problem:
          "Manuel kampanya tasarlamak, test etmek ve e-posta başlıklarını optimize etmek ekiplerinizin saatlerini eritiyor.",
        solution:
          "Gelişmiş AI sistemi, otomatik A/B testleriyle en çok dönüşüm alan başlığı bulur ve teslimat akışlarını kendi kendine optimize eder.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-magic",
        title: "Yapay Zeka Konu Başlığı & İçerik Üreticisi",
        description:
          "Sektörünüzü analiz eden AI, en yüksek dönüşüm getiren e-posta konu başlıklarını ve gövde metinlerini saniyeler içinde yazar.",
      },
      {
        icon: "fas fa-chart-line",
        title: "Akıllı Gönderim Zamanlama",
        description:
          "Alıcının geçmiş davranışlarından mail kutusunu en sık kontrol ettiği saatleri belirleyerek her kişiye farklı vakitlerde gönderir.",
      },
      {
        icon: "fas fa-tags",
        title: "Dinamik Kupon Kurguları",
        description:
          "Alıcıya özel, süreli ve benzersiz indirim kuponlarını e-postalara otomatik ekleyerek aciliyet hissi yaratır ve satışı hızlandırır.",
      },
      {
        icon: "fas fa-envelope-open-text",
        title: "%99.9 Inbox Ulaşım Garantisi",
        description:
          "Spam filtrelerini aşan, temiz SMTP sunucu havuzumuz ve dedicated IP desteğimizle maillerinizin tanıtım sekmesinde kaybolmasını önler.",
      },
    ],

    howItWorks: [
      {
        icon: "fas fa-database",
        title: "1. Veri Entegrasyonu",
        description:
          "Müşteri veritabanınızı ve site ziyaret hareketlerini CRM üzerinden AI e-posta motoruna bağlayın.",
      },
      {
        icon: "fas fa-pencil-alt",
        title: "2. Kampanya Taslağı",
        description:
          "Hedeflediğiniz ürünleri veya kampanyayı belirtin; AI hem metni hem de görselleri hazırlasın.",
      },
      {
        icon: "fas fa-paper-plane",
        title: "3. Otomatik Gönderim",
        description:
          "Sistemi aktive ettiğinizde e-postalar müşterilerin sepetteki hareketlerine veya okuma eğilimlerine göre optimum saatte gönderilir.",
      },
    ],
    integrations: {
      title: "Pazarlama ve CRM Uyumu",
      description:
        "Mevcut e-posta sağlayıcılarınızla köprü kuran esnek entegrasyon yapısı.",
      logos: [
        {
          name: "Shopify",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png",
        },
        {
          name: "HubSpot",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/HubSpot_Logo.svg/512px-HubSpot_Logo.svg.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Gelen Kutusu İçerisinden Sadakat Yaratmak",
      description:
        "Klasik ve herkese aynı giden sıkıcı bültenlerin devrini kapatıp, müşteriye adı, ihtiyaçları ve geçmişiyle seslenen %300 verimli mail kurguları yaratmak.",
    },
    setupFee: {
      original: 700,
      discounted: 400,
    },
    pricingPlans: [
      {
        name: "Start-up Pazarlama",
        prices: { monthly: 69, sixMonths: 59, annually: 49 },
        originalPrices: { monthly: 110, sixMonths: 95, annually: 80 },
        features: [
          "5.000 Abone Sınırı",
          "Aylık 25.000 E-posta Gönderimi",
          "Temel Hoş Geldin & Sepet Akışı",
          "AI Konu Başlığı Önerileri",
        ],
      },
      {
        name: "Enterprise Pro",
        prices: { monthly: 159, sixMonths: 139, annually: 119 },
        originalPrices: { monthly: 240, sixMonths: 210, annually: 180 },
        features: [
          "Sınırsız Abone Sayısı",
          "Aylık 250.000 E-posta Gönderimi",
          "Gelişmiş Davranışsal Segmentasyon",
          "Özel SMTP & Dedicated IP Kurulumu",
        ],
        popular: true,
      },
    ],
  },
  {
    name: "Müşteri İtibar ve Yorum Yönetimi",
    slug: "musteri-itibar-yorum-yonetimi",
    shortDescription:
      "Google, TripAdvisor, Şikayetvar ve sosyal medyadaki müşteri geri bildirimlerini anlık yönetip yapay zekayla yanıtlayın.",
    title: "Yapay Zeka Destekli Online İtibar & Yorum Yanıtlama Asistanı",
    description:
      "İşletmeniz hakkında internetteki tüm platformlarda yazılan yorumları, şikayetleri ve puanları tek bir merkezde toplayıp kurumsal dilinize uygun, markanızı koruyacak şekilde otomatik yanıtlayan akıllı platform.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 240,
      label: "Otel & Restoran",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Yüzlerce Google veya TripAdvisor yorumunu gözden kaçırmak veya yanıtsız bırakmak dijital puanınızı ve marka imajınızı düşürüyor.",
        solution:
          "Sistem gelen her yorumu anlık algılar, duygu analizini yapar ve kurumsal tonunuza sadık kalarak 10 saniye içinde yanıt taslağı sunar.",
      },
      {
        problem:
          "Olumsuz yorumlar ve kriz anlarında hızlı ve yapıcı bir cevap üretememek ciddi itibar ve rezervasyon kaybına sebep oluyor.",
        solution:
          "Kritik derecedeki negatif yorumlar için yapay zeka özel kriz yatıştırıcı cevaplar kurgulayarak şikayetleri müşteri memnuniyetine çevirir.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-face-smile",
        title: "Duygu Analizi (Sentiment)",
        description:
          "Yorumların altındaki memnuniyet, öfke veya öneri tonunu otomatik çözümler ve detaylı analitik tablosuna dökerek strateji sunar.",
      },
      {
        icon: "fas fa-language",
        title: "Çok Dilli Profesyonel Yanıt",
        description:
          "Almanca, Rusça, İngilizce veya Arapça gelen yabancı yorumları anında kendi dillerinde mükemmel dil kalitesiyle yanıtlar.",
      },
    ],

    howItWorks: [
      {
        icon: "fas fa-search",
        title: "1. Kaynakları Belirle",
        description:
          "Google Maps, TripAdvisor, Şikayetvar veya Trendyol mağazanızı panoya bağlayın.",
      },
      {
        icon: "fas fa-comment-dots",
        title: "2. Ses Tonu Kurgusu",
        description:
          "Olumlu yorumlara veya sert eleştirilere verilecek kurumsal, empatik yapay zeka tonunu belirleyin.",
      },
      {
        icon: "fas fa-magic",
        title: "3. Otomatik Yanıtla",
        description:
          "Her yeni yoruma saniyeler içinde markanızın özenli üslubuyla dönüş yapılsın, marka algısı zirveye taşınsın.",
      },
    ],
    integrations: {
      title: "Rehber & Harita Entegrasyonları",
      description:
        "Müşterinin doğrudan aradığı yerel ve küresel değerlendirme portallarını bir araya getirir.",
      logos: [
        {
          name: "Google Maps",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Maps_icon.svg/512px-Google_Maps_icon.svg.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Pozitif İtibar Ekonomisi Kurmak",
      description:
        "Bir yorum yüzünden potansiyel yüzlerce müşteriyi kaybetmenizi önlemek ve anında aksiyon alarak markanın değerini ve güvenirliğini herkese göstermek.",
    },
    setupFee: {
      original: 600,
      discounted: 350,
    },
    pricingPlans: [
      {
        name: "Tek Lokasyon",
        prices: { monthly: 59, sixMonths: 49, annually: 39 },
        originalPrices: { monthly: 90, sixMonths: 75, annually: 60 },
        features: [
          "1 Google & 1 TripAdvisor Entegrasyonu",
          "Aylık 200 Yorum Yanıtlama",
          "Anlık Bildirim Altyapısı",
          "Temel Raporlama",
        ],
      },
      {
        name: "Çoklu Şube",
        prices: { monthly: 129, sixMonths: 109, annually: 99 },
        originalPrices: { monthly: 190, sixMonths: 160, annually: 140 },
        features: [
          "Sınırsız Entegrasyon (Şikayetvar dahil)",
          "Sınırsız Yorum Yanıtlama",
          "Detaylı Duygu Analizi & Rakip Takibi",
          "Çoklu Dil Desteği",
        ],
        popular: true,
      },
    ],
  },
  {
    name: "Akıllı Toplantı ve Transkript Asistanı",
    slug: "akilli-toplanti-transkript-asistani",
    shortDescription:
      "Toplantılarınızı kaydedin, sesleri yazıya dökün, toplantı içi önemli kararları ve iş atamalarını otomatik raporlayın.",
    title: "Yapay Zeka Destekli Toplantı Transkript & Aksiyon Planlama Sistemi",
    description:
      "Zoom, Teams veya Google Meet üzerinden gerçekleşen tüm görüşmelerinizi, ses kayıtlarınızı saniyeler içinde eksiksiz yazıya döken, özet çıkaran ve görev dağılımlarını belirleyen yapay zeka arkadaşınız.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 150,
      label: "Şirket Kullanıyor",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Toplantılarda konuşulan kritik kararlar, görevler ve detaylar sonrasında unutuluyor veya yanlış hatırlanıp havada kalıyor.",
        solution:
          "Her kelimeyi %98 doğruluk payıyla arşivler ve toplantı akabinde yapılması gereken işleri PDF rapor halinde ekibe sunar.",
      },
      {
        problem:
          "Toplantı notu tutmak ve özet derlemek katılımcıların dikkatinin dağılmasına ve zaman kaybına yol açıyor.",
        solution:
          "Siz sadece konunuza odaklanın. Asistanımız tüm konuşmaları pürüzsüzce ses analizinden geçirerek konuşmacı bazlı bölümlendirir.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-user-friends",
        title: "Konuşmacı Çözümleme (Diarization)",
        description:
          "Kimin hangi cümleyi söylediğini ses frekanslarına göre ayırt ederek tutanakları kusursuz şekilde yapılandırır.",
      },
      {
        icon: "fas fa-file-export",
        title: "Saniyeler İçinde Özet & PDF",
        description:
          "Saatler süren kurumsal toplantıları 1 dakikada özetleyerek aksiyon maddelerini e-postayla tüm çalışma arkadaşlarınıza iletir.",
      },
    ],

    howItWorks: [
      {
        icon: "fas fa-video",
        title: "1. Toplantıya Davet Et",
        description:
          "Yapay zeka asistanını Zoom, Teams veya Meet odasına katılımcı olarak ekleyin.",
      },
      {
        icon: "fas fa-ear-listen",
        title: "2. Dinle ve Yazıya Dök",
        description:
          "Toplantı boyunca asistan, kimin konuştuğunu ayırarak kesintisiz bir yazılı döküm hazırlar.",
      },
      {
        icon: "fas fa-file-contract",
        title: "3. Özet & Görev Listesi",
        description:
          "Toplantı bitiminde akıllı asistan, konuşulan kritik konuları bir taslak halinde hazırlar ve kişilere görevlerini otomatik listeler.",
      },
    ],
    integrations: {
      title: "Video Konferans Destekleri",
      description:
        "En yoğun kullandığınız iletişim kanallarıyla güvenli ve şifreli veri aktarımı yapan bot entegrasyonu.",
      logos: [
        {
          name: "Microsoft Teams",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/512px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png",
        },
        {
          name: "Google Meet",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/512px-Google_Meet_icon_%282020%29.svg.png",
        },
        {
          name: "Slack",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/512px-Slack_icon_2019.svg.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Karar Alma Süreçlerini Modernleştirmek",
      description:
        "Defter veya belge tutma zorunluluğunu bitirip ekibinizin yalnızca karşılıklı fikir üretimine odaklanabildiği, yüksek verimliliğe sahip şirket içi ekosistemler oluşturmak.",
    },
    setupFee: {
      original: 500,
      discounted: 300,
    },
    pricingPlans: [
      {
        name: "Profesyonel",
        prices: { monthly: 49, sixMonths: 39, annually: 29 },
        originalPrices: { monthly: 80, sixMonths: 65, annually: 50 },
        features: [
          "Aylık 1.000 Toplantı Dakikası",
          "Kişisel Kullanım",
          "Konuşmacı Analizi",
          "Trello & Slack Entegrasyonları",
        ],
      },
      {
        name: "Kurumsal Ekip",
        prices: { monthly: 119, sixMonths: 99, annually: 89 },
        originalPrices: { monthly: 180, sixMonths: 150, annually: 130 },
        features: [
          "Aylık 10.000 Toplantı Dakikası",
          "10 Kullanıcıya Kadar",
          "Markaya Özel AI Özet Şablonları",
          "API Entegrasyonu",
        ],
        popular: true,
      },
    ],
  },
  {
    name: "Akıllı Ön Muhasebe Otomasyonu",
    slug: "akilli-on-muhasebe-otomasyonu",
    shortDescription:
      "Yapay zeka ile fatura tarama, gelir-gider analizi ve cari takipleri sıfır hata ile arşivleyip yönetin.",
    title: "Yapay Zeka Destekli Akıllı Ön Muhasebe & Finans Otomasyonu",
    description:
      "Gelen faturaları görsel ve PDF formatlarından otomatik okuyarak sisteme işleyen, cari ödemelerinizi takip eden ve size özel finansal durum raporları sunan akıllı muhasebe entegrasyonu.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socialProof: {
      count: 310,
      label: "KOBİ Tercih Etti",
    },
    keyFeatures: [],
    problemSolution: [
      {
        problem:
          "Elden veya e-postayla gelen yüzlerce faturayı ön muhasebe sistemine manuel girmek aşırı yavaş ve hataya çok açıktır.",
        solution:
          "Gelişmiş AI OCR algoritmamız, faturanın üzerindeki firma adı, KDV oranı, matrah gibi verileri saniyeler içinde okur ve otomatik muhasebeye kaydeder.",
      },
      {
        problem:
          "Vadesi gelen alacakları ve ödemeleri manuel Excel dosyalarından izlemek gecikmelere ve nakit akışı aksamalarına yol açıyor.",
        solution:
          "Sistem, ödeme günleri yaklaşan carilere WhatsApp veya e-posta ile nazik ödeme hatırlatmalarını otomatik olarak ulaştırır.",
      },
    ],
    whyChooseUs: [
      {
        icon: "fas fa-receipt",
        title: "Yüksek Başarı Oranlı AI OCR",
        description:
          "Kırışık veya eğri fişler, kalitesiz fatura taramaları dahil olmak üzere verileri yüksek doğrulukla dijital ortama aktarır.",
      },
      {
        icon: "fas fa-shield",
        title: "Maliyestandart Güvenli Koruma",
        description:
          "Tüm finansal veri saklama ve e-fatura senkronizasyon protokollerini kurumsal e-fatura entegratörleri standartlarında korur.",
      },
    ],

    howItWorks: [
      {
        icon: "fas fa-file-invoice",
        title: "1. Belgeleri İlet",
        description:
          "Faturalarınızı ve gider evraklarınızı e-posta ile, WhatsApp ile veya panelden yapay zekaya yükleyin.",
      },
      {
        icon: "fas fa-crosshairs",
        title: "2. Optik Veri Ayıklama",
        description:
          "Asistan karmaşık fişlerde ve PDF faturalarında yer alan vergi dairesi, VKN ve tutar gibi verileri OCR ile eksiksiz ayıklar.",
      },
      {
        icon: "fas fa-coins",
        title: "3. Otomatik Muhasebeleştirme",
        description:
          "Hatasız veriler doğrudan muhasebe programınızda eşleştirilir ve cari kayıtlarınıza yansıtılır.",
      },
    ],
    integrations: {
      title: "Popüler Muhasebe Yazılımları",
      description:
        "Mali müşavirlerin ve KOBİ'lerin yerel-küresel pazar ihtiyaçlarına uygun popüler muhasebe köprüleri.",
      logos: [
        {
          name: "Excel",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png",
        },
      ],
    },
    ourGoal: {
      title: "Amacımız: Finansal Verilerde Sıfır Hata",
      description:
        "Manuel girişlerdeki bir sıfır hatasının yaratacağı mali cezaları önlemek, muhasebe tarafını şeffaf, güvenilir ve hızlandırılmış bir yapıya kavuşturmak.",
    },
    setupFee: {
      original: 1200,
      discounted: 750,
    },
    pricingPlans: [
      {
        name: "Küçük İşletme",
        prices: { monthly: 99, sixMonths: 89, annually: 79 },
        originalPrices: { monthly: 150, sixMonths: 130, annually: 110 },
        features: [
          "Aylık 250 Belge Okuma (OCR)",
          "Temel Cari Takip Modülü",
          "Nakit Akış Grafikleri",
          "Otomatik Ödeme Hatırlatmaları",
        ],
      },
      {
        name: "Büyüyen KOBİ",
        prices: { monthly: 219, sixMonths: 199, annually: 179 },
        originalPrices: { monthly: 320, sixMonths: 290, annually: 260 },
        features: [
          "Sınırsız Belge Okuma",
          "Gelişmiş ERP & Muhasebe Entegrasyonları",
          "Yolculuk & Harcırah Gider Entegrasyonu",
          "AI Nakit Akış Öngörü Analizi",
        ],
        popular: true,
      },
    ],
  },
];

// FIX: Moved the 'APPLICATIONS' constant before 'NAV_LINKS' to resolve the "used before its declaration" error.

export const APPLICATIONS: Application[] = [
  {
    name: "Otel Yönetimi (CRM)",
    slug: "otel-yonetimi-crm",
    sector: "Turizm",
    description:
      "Tüm otel operasyonlarınızı tek bir yerden yönetin. Rezervasyonlar, oda durumu ve misafir ilişkileri.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Otel Yönetim Platformu",
    longDescription:
      "Otelinizin tüm operasyonel süreçlerini dijitalleştiren, verimliliği artıran ve misafir memnuniyetini en üst düzeye çıkaran hepsi bir arada yönetim çözümüdür.",
    problem: "Yüksek OTA komisyonları ve operasyonel karmaşıklık.",
    solution:
      "Otel Yönetimi (CRM) platformumuz, komisyonları ortadan kaldıran doğrudan rezervasyon motoru ve operasyonları otomatikleştiren merkezi panel sunar.",
    goal: "Amacımız, doğrudan rezervasyonları maksimize etmek ve misafir memnuniyetini artırmaktır.",
    whyChooseUs: [
      {
        icon: "fa-solid fa-hotel",
        title: "Sektörel Uzmanlık",
        description:
          "Platformumuz, otelcilik sektörü dinamikleri göz önünde bulundurularak tasarlanmıştır.",
      },
      {
        icon: "fa-solid fa-brain",
        title: "Yapay Zeka Gücü",
        description:
          "Misafir verilerini analiz eden yapay zeka ile kişiselleştirilmiş teklifler sunun.",
      },
    ],
    features: [
      {
        icon: "fa-solid fa-calendar-check",
        title: "Rezervasyon Yönetimi",
        description:
          "Tüm kanallardan gelen rezervasyonları anlık olarak görüntüleyin.",
        imageUrl: "https://i.imgur.com/A6fXzKk.png",
      },
    ],
  },
  {
    name: "Sağlık / Klinik Yönetimi (CRM)",
    slug: "saglik-yonetimi-crm",
    sector: "Sağlık",
    description:
      "Hasta takibi, online randevu ve e-reçete süreçlerinizi merkezi olarak yönetin.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Sağlık ve Klinik Yönetim Platformu",
    longDescription:
      "Kliniklerin ve doktorların tüm operasyonel süreçlerini dijitalleştiren, verimliliği artıran hepsi bir arada yönetim çözümüdür.",
    problem: "Karmaşık hasta kayıtları ve kaçırılan randevular.",
    solution:
      "Hasta odaklı sistem ile tüm veriler tek panelde toplanır, otomatik hatırlatıcılar ile iptaller önlenir.",
    goal: "Hasta memnuniyetini artırıp klinik verimini maksimize etmek.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "Eğitim Yönetimi (CRM)",
    slug: "egitim-yonetimi-crm",
    sector: "Eğitim",
    description:
      "Öğrenci, veli ve öğretmen iletişimini, kayıt süreçlerini ve not sistemlerini entegre edin.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Eğitim Yönetim Platformu",
    longDescription:
      "Eğitim kurumlarının tüm operasyonel süreçlerini dijitalleştiren, verimliliği artıran hepsi bir arada yönetim çözümüdür.",
    problem: "Zorlu öğrenci takip ve tahsilat süreçleri.",
    solution:
      "Otomatik faturalandırma, yoklama takibi ve veli bilgilendirme sistemi ile iş yükünü kaldırın.",
    goal: "Eğitim kalitesine odaklanmanız için operasyonları otomatize etmek.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "E-Ticaret Yönetimi (CRM)",
    slug: "eticaret-yonetimi-crm",
    sector: "E-Ticaret",
    description:
      "Bütün satış kanallarınızı, stoklarınızı, sipariş ve müşteri ilişkilerini tek platformda toplayın.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı E-Ticaret Yönetim Platformu",
    longDescription:
      "Birden çok pazaryerini ve kendi sitenizi tek bir panelden yönetin.",
    problem:
      "Pazaryerlerinde stok senkronizasyon hataları ve çok kanallı sipariş yönetimi zorlukları.",
    solution:
      "Tam entegre envanter ve otomatik kargo fişleme ile kusursuz gönderim süreci.",
    goal: "Satış hacmini artırırken operasyon maliyetlerini düşürmek.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "Otomotiv Yönetimi (CRM)",
    slug: "otomotiv-yonetimi-crm",
    sector: "Otomotiv",
    description:
      "Galeri, servis kayıtları, test sürüşü planlaması ve müşteri takiplerini dijitalleştirin.",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Otomotiv Yönetim Platformu",
    longDescription:
      "Araç stoğu, parça envanteri ve müşteri taleplerini aynı arayüzde kontrol edin.",
    problem:
      "Araç takip zorlukları ve servis bakım hatırlatmalarının aksaması.",
    solution:
      "Yapay zeka analizleriyle bakım zamanı gelen müşterilere SMS veya e-posta otomasyonu.",
    goal: "Karlılığı ve müşteri bağlılığını zirveye taşımak.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "Hukuk Yönetimi (CRM)",
    slug: "hukuk-yonetimi-crm",
    sector: "Hukuk",
    description:
      "Dava dosya takibi, duruşma ajandası ve müvekkil iletişimi için entegre otomasyon sistemi.",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Hukuk Yönetim Platformu",
    longDescription:
      "Dosyaları kolayca bulun, duruşma günü hatırlatmalarını anında alın.",
    problem:
      "Fiziksel evrak yoğunluğu, son başvuru veya duruşma tarihinin gözden kaçması.",
    solution:
      "UYAP entegre ve güvenli bulut dosya depolama sistemi ile her yerden erişim.",
    goal: "Avukatların iş yükünü azaltıp hatasız hukuki süreç yönetimi sağlamak.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "Restoran Yönetimi (CRM)",
    slug: "restoran-yonetimi-crm",
    sector: "Restoran",
    description:
      "Menü, masa takibi, paket siparişler ve sadakat programını tek panelden yönetin.",
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Restoran Yönetim Platformu",
    longDescription:
      "Müşteri alışkanlıklarını kaydedin ve özel kampanyalar ile cirolarınızı artırın.",
    problem:
      "Sipariş süreçlerinin yavaşlığı ve müşteri verisinin toplanamaması.",
    solution:
      "QR menü, dijital sadakat kartları ve hızlı sipariş ekranı sayesinde verimli iş gücü.",
    goal: "Operasyon hızını artırıp restoran karlılığını en üst düzeye çekmek.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "Fitness Yönetimi (CRM)",
    slug: "fitness-yonetimi-crm",
    sector: "Spor & Fitness",
    description:
      "Üyelik planları, stüdyo ders saatleri ve antrenör takvimini dijital arayüzde birleştirin.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Fitness Yönetim Platformu",
    longDescription:
      "Salona giriş çıkış verileriyle otomatik aidat hatırlatmaları gerçekleştirin.",
    problem: "Eski tip üyelik kartları, takip edilemeyen tahsilatlar.",
    solution:
      "Turnike/mobil QR entegrasyonlu ve otomatik kredi kartı tahsilat destekli çözüm.",
    goal: "Üye devamlılığını artırarak operasyon maliyetlerini düşürmek.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "Sigorta Yönetimi (CRM)",
    slug: "sigorta-yonetimi-crm",
    sector: "Sigorta",
    description:
      "Poliçe yenileme, teklif süreci ve hasar dosya takibini akıllı ekranlardan kontrol edin.",
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Sigorta Yönetim Platformu",
    longDescription:
      "Hasar dosyası görsellerini bulutta tutun, müşteri prim günlerini otomatik hatırlayın.",
    problem:
      "Manuel poliçe yenileme uyarılarının atlanması ve müşteri kayıpları.",
    solution:
      "Yapay zeka ile yenileme döneminin 1 ay öncesinde başlayan otomatik WhatsApp/SMS bildirimleri.",
    goal: "Güven algısını zirveye taşıyıp müşteri tutundurma oranını maksimize etmek.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "Güzellik Salonu Yönetimi (CRM)",
    slug: "guzellik-yonetimi-crm",
    sector: "Sağlık & Güzellik",
    description:
      "Sanal randevu, paket satışı, personel prim takibi ve stok sayımını otomatikleştirin.",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Güzellik Salonu Yönetim Platformu",
    longDescription:
      "Müşteri cilt/saç analiz verilerini saklayıp doğru ürünleri otomatik öneren sistem.",
    problem:
      "Müşteri randevu çakışmaları ve tahsilatı yapılamayan paket satışları.",
    solution:
      "Esnek online takvim, personel performans göstergeleri ve otomatik e-fatura.",
    goal: "Salonun randevu kapasitesini fulleyip satışları şeffaf yönetmek.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "Diyetisyen Yönetimi (CRM)",
    slug: "diyetisyen-yonetimi-crm",
    sector: "Sağlık",
    description:
      "Vücut kitle analiz verileri, diyet listesi planlama ve seans takibi hepsi bir yerde.",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Diyetisyen Yönetim Platformu",
    longDescription:
      "Danışanlara özel mobil uygulama veya portal erişimi ile hedefleri anlık takip edin.",
    problem:
      "Whatsapp üzerinden uzun diyet listesi hazırlama süreleri ve ölçümlerin kaybolması.",
    solution:
      "Makro besin hesaplamalı özel diyet oluşturucu ve danışan gelişim grafik paneli.",
    goal: "Diyetisyenlerin operasyon yükünü sıfırlayıp hizmet kalitesini artırmak.",
    whyChooseUs: [],
    features: [],
  },
  {
    name: "Emlak Yönetimi (CRM)",
    slug: "emlak-yonetimi-crm",
    sector: "Gayrimenkul",
    description:
      "Portföy detayları, potansiyel alıcı havuzu ve danışman satış skorlarını yönetin.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Akıllı Emlak Yönetim Platformu",
    longDescription:
      "Sahibinden, Zingat gibi platformlara otomatik ilan entegrasyonu ve dijital kapora sistemi.",
    problem:
      "Müşteri taleplerini unutma, portföy değişikliklerinin güncellenmemesi.",
    solution:
      "Alıcı talepleri ile eşleşen portföyleri otomatik haberdar eden yapay zeka algoritması.",
    goal: "Danışman satışlarını ikiye katlayıp mülk satış hızını artırmak.",
    whyChooseUs: [],
    features: [],
  },
];

export const NAV_LINKS = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Kurumsal", path: "/kurumsal" },
  {
    name: "Sektör Yazılımlarımız (CRM)",
    path: "/yapay-zeka-uygulamalar",
    children: [
      { name: "Otel Yönetimi", path: "/uygulamalar/otel-yonetimi-crm" },
      { name: "Sağlık Yönetimi", path: "/uygulamalar/saglik-yonetimi-crm" },
      { name: "Eğitim Yönetimi", path: "/uygulamalar/egitim-yonetimi-crm" },
      {
        name: "E-Ticaret Yönetimi",
        path: "/uygulamalar/eticaret-yonetimi-crm",
      },
      { name: "Otomotiv Yönetimi", path: "/uygulamalar/otomotiv-yonetimi-crm" },
      { name: "Hukuk Yönetimi", path: "/uygulamalar/hukuk-yonetimi-crm" },
      { name: "Restoran Yönetimi", path: "/uygulamalar/restoran-yonetimi-crm" },
      { name: "Fitness Yönetimi", path: "/uygulamalar/fitness-yonetimi-crm" },
      { name: "Sigorta Yönetimi", path: "/uygulamalar/sigorta-yonetimi-crm" },
      { name: "Güzellik Salonu", path: "/uygulamalar/guzellik-yonetimi-crm" },
      { name: "Diyetisyen", path: "/uygulamalar/diyetisyen-yonetimi-crm" },
      { name: "Emlak Yönetimi", path: "/uygulamalar/emlak-yonetimi-crm" },
    ],
  },
  { name: "Yapay Zeka Otomasyonları", path: "/yapay-zeka-otomasyonlari" },
  { name: "Fiyatlandırma", path: "/fiyatlandirma" },
  { name: "İletişim", path: "/iletisim" },
];

export const SECTOR_ITEMS = [];
export const TEAM_MEMBERS = [];
export const MILESTONES = [];
export const WHY_MORTANAS_POINTS = [];
export const TESTIMONIALS = [
  {
    quote:
      "Mortanas yapay zeka otomasyon sistemleri sayesinde operasyonel verimliliğimiz %150 arttı. İş gücümüzü çok daha stratejik alanlara yönlendirebiliyoruz.",
    name: "Caner Demir",
    title: "COO, Nexus Global",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Müşteri ilişkileri yönetiminde (CRM) yapay zeka destekli geçişimiz sonrasında kullanıcı memnuniyetimiz hiç olmadığı kadar yüksek seviyelere ulaştı.",
    name: "Merve Şahin",
    title: "Müşteri Deneyimi Müdürü, Solis Digital",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Yapay zeka sesli asistanı ve CRM entegrasyonu, satış ekibimizin teklif hazırlama ve takip sürelerini yarı yarıya düşürdü. Kesinlikle sınıfının en iyisi.",
    name: "Hakan Yılman",
    title: "Satış Direktörü, Astra Group",
    avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "Mortanas'ın otonom medya yönetimi ve akıllı veri analiz araçları, pazarlama kampanyalarımızın yatırım getirisini (ROI) sadece 3 ayda 4 katına çıkardı.",
    name: "Ece Soydan",
    title: "CMO, Vibe Creative Agency",
    avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    quote:
      "Tüm dijital altyapımızı Mortanas ekosistemine entegre ettikten sonra iş süreçlerimizde sıfır hata oranı elde ettik. Geleceğin teknolojisi bugün elimizde.",
    name: "Murat Karahan",
    title: "CTO, Vanguard Technologies",
    avatarUrl: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    quote:
      "Uçtan uca otomasyon çözümleri sayesinde veri analizlerimizi anlık yapabiliyoruz. Mortanas ile tanıştıktan sonra tamamen veri odaklı bir şirkete dönüştük.",
    name: "Zeynep Aslan",
    title: "Veri Analitiği Direktörü, Qubit Systems",
    avatarUrl: "https://randomuser.me/api/portraits/women/62.jpg",
  },
];
export const ARTICLES = [];
export const TRAINING_PARTNER_LOGOS = [];
export const HOME_FAQS = [];
export const FEATURES = [];
export const INTEGRATIONS = [];
export const FAQS = [];
export const PRESS_MENTIONS = [];
export const CORPORATE_REFERENCES = [];
export const AUTOMATION_PRICING_PLANS = [];
export const APPLICATION_PRICING_PLANS = [];
export const SECTORS = [];
export const SECTOR_PRICING_PLANS = [];
