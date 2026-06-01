import React from 'react';
import type { FAQ } from '../types';

export const getContentForSlug = (slug: string | undefined, application: any) => {
    if (slug === 'saglik-yonetimi-crm') {
        return {
            fomoTitle: (
                <>
                    Dijital Sağlıkta <br />
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">Zirveye Ulaşın</span>
                </>
            ),
            fomoDesc: "Sağlık sektörü hızla dönüşürken yapay zeka destekli randevu ve hasta yönetimi ile hastalarınızın memnuniyetini katlayın ve pazar payınızı artırın.",
            stat1Val: "78", stat1Title: "Daha Fazla Randevu", stat1Desc: "Hastalar, 7/24 anında online randevu ve SMS hatırlatma sunan klinikleri öncelikli olarak tercih ediyor.",
            stat2Val: "40", stat2Title: "İdari Zaman Tasarrufu", stat2Desc: "Rutin sekreterlik işleri, check-up hatırlatmaları ve hasta evrakları yapay zekayla otomatikleşir.",
            stat3Val: "24/7", stat3Title: "Kesintisiz Destek", stat3Desc: "Hastalarınızın muayene öncesi ve sonrası tüm sorularını saniyeler içinde yanıtlayarak yüksek güven bağı kurun.",
            sliderImages: [
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
                "https://images.unsplash.com/photo-1551076805-e1869043e560?ixid=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixid=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
                "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?ixid=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            ],
            faqs: [
                { question: "Sağlık CRM sistemi KVKK ve hasta verileri gizliliği standartlarına uygun mu?", answer: "Evet, tüm altyapımız KVKK mevzuatına tam uyumlu çalışır. Hasta verileri ve tıbbi geçmiş kayıtları en modern şifreleme ve güvenlik mimarisiyle saklanır." },
                { question: "Mevcut Doktor, Klinik veya Hastane Otomasyonu (HMS) yazılımlarımızla entegre olabilir mi?", answer: "Evet. Kullandığınız klinik yönetim sistemleri ve HMS yazılımlarının birçoğuyla çift yönlü API entegrasyonu sunuyoruz, verilerinizi anlık senkronize ederiz." },
                { question: "Uluslararası sağlık turizmi için yabancı dilleri destekliyor mu?", answer: "Evet, yapay zeka asistanımız Türkçe ve İngilizce başta olmak üzere 30'un üzerinde dilde akıcı konuşabilir. Yabancı dilde gelen mesajları otomatik çevirerek doğrudan yanıtlar." },
                { question: "Klinik personelinin eğitimi ve teknik destek süreçleri nasıl ilerliyor?", answer: "Kurulum sonrasında klinik sekreterleriniz, asistanlarınız ve hekimleriniz için detaylı eğitim programları sunuyoruz. Ayrıca 7/24 öncelikli acil teknik destek hattımızla her zaman yanınızdayız." }
            ],
            whatsappLink: `https://wa.me/905540118888?text=${encodeURIComponent("Merhaba, " + application?.name + " hakkında detaylı bilgi almak istiyorum.")}`,
            aiConciergeFeatures: [
                { icon: <i className="fas fa-calendar-plus"></i>, title: "Anında Online Randevu", description: "Doktor müsaitlik takvimini gerçek zamanlı sorgular ve uygun seansı hastaya saniyeler içinde tanımlar." },
                { icon: <i className="fas fa-comment-medical"></i>, title: "Semptom ve Tedavi Ön Bilgisi", description: "Hastanın şikayetlerine göre ön bilgilendirme yapar, doğru branş doktorunu önerir ve beklentileri yönetir." },
                { icon: <i className="fas fa-prescription"></i>, title: "Tedavi Takibi ve Yönergeler", description: "Klinik ziyaretinden sonra hastaya egzersiz, diyet veya ilaç hatırlatmaları sunarak takip kalitesini artırır." },
                { icon: <i className="fas fa-globe"></i>, title: "Uluslararası Sağlık Turizmi", description: "Yabancı hastalarla kendi dillerinde akıcı bir şekilde yazışarak sağlık turizminde satış kapatma oranlarınızı artırır." },
                { icon: <i className="fas fa-heart-pulse"></i>, title: "Hasta Memnuniyeti Geri Bildirimi", description: "Tedavi sonrası memnuniyeti ölçen anlık anketler gönderir ve iyileştirilmesi gereken alanları analiz eder." },
                { icon: <i className="fas fa-hospital-user"></i>, title: "Vaka Dağıtımı ve Sevk", description: "Acil durumları ve öncelikli vakaları tespit ederek medikal sekreterliğe anlık bildirim ve hatırlatma geçer." }
            ],
            howItWorksSteps: [
                { icon: 'fa-hospital', title: '1. Klinik Entegrasyonu', description: 'Mevcut HMS, randevu portalları ve laboratuvar sistemlerinizi platformumuza kusursuzca entegre ediyoruz.' },
                { icon: 'fa-brain', title: '2. Sektörel AI Eğitimi', description: 'Yapay zekayı kliniğinizin branşları, doktor çalışma saatleri, tedavi protokolleri ve hasta iletişimi standartları doğrultusunda eğitiyoruz.' },
                { icon: 'fa-laptop-medical', title: '3. Güvenli Yayına Alım', description: 'Yapay zeka destekli web arayüzünüzü ve CRM kontrol panelinizi açıyoruz; ilk günden itibaren otonom olarak randevu almaya başlayın.' }
            ],
            heroAssistantActiveTitle: "Yapay Zeka Klinik Hub",
            heroAssistantActiveSubtitle: "7/24 Kesintisiz Sağlık",
            heroDescription: (
                <>
                    Hasta ilişkileri, randevu takibi, tedavi planlaması ve klinik süreçlerinizi yapay zeka gücüyle yönetin. <strong className="text-white font-semibold text-indigo-100">Mortanas Sağlık / Klinik CRM</strong>, her hastanıza VIP konforunda kesintisiz dijital deneyim sunar, klinik doluluğunuzu optimize eder ve süreçlerinizi hızlandırır.
                </>
            ),
            whyTitle: `Neden ${application?.name}?`,
            featuresSubtitle: "Hasta kabulünü hızlandırın, randevu kaçırma oranlarını sıfırlayın ve kliniklerinizin operasyonel verimliliğini zirveye taşıyın.",
            featuresList: [
                { title: "Kişiselleştirilmiş Hasta Karşılama", description: "Yapay zeka, web sitenizi ziyaret eden potansiyel hastaların ilgi duyduğu branşlara ve şikayetlerine göre ana sayfa ve tekliflerinizi dinamik olarak optimize eder.", icon: <i className="fas fa-stethoscope"></i> },
                { title: "Akıllı Randevu Motoru", description: "Hastalarınıza doktor çalışma takvimlerine en uygun randevu saatlerini önerir, tedavi türüne göre seans sürelerini planlar ve çapraz seans teklifleri sunar.", icon: <i className="fas fa-calendar-check"></i> },
                { title: "7/24 Akıllı Medikal Asistan", description: "AI web asistanınız, hastaların sıkça sorduğu tedavi süreçleri, fiyatlandırma ve doktor uzmanlık sorularını anında yanıtlar, randevuları CRM altyapınıza aktarır.", icon: <i className="fas fa-user-md"></i> },
                { title: "Akıllı Tedavi Planlama", description: "Hastaların geçmiş kayıtları, randevu alışkanlıkları ve tedavi süreçlerini analiz ederek klinikte oluşabilecek gecikmeleri engeller ve doktor verimliliğini artırır.", icon: <i className="fas fa-notes-medical"></i> },
                { title: "Otomatik Hatırlatıcılar & Medikal SMS", description: "Randevu teyitleri, kontrol muayene tarihleri ve seans yönergelerini hastalara otomatik olarak iletir, kağıt ve arama yükünü tamamen ortadan kaldırır.", icon: <i className="fas fa-bell"></i> },
                { title: "Davranışsal Hasta Analizi", description: "En çok talep gören branşları, tedavi sayfalarının inceleme sürelerini ve seans iptal nedenlerini analiz ederek klinik büyüme stratejinizi belirlemenizi sağlar.", icon: <i className="fas fa-chart-line"></i> }
            ],
            problemsTitle: <>Klasik Kliniklerin Yaşadığı Problemler ve <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">Akıllı Çözümler</span></>,
            problemsSubtitle: "Hasta kaybı yaşamanıza ve zaman kaybı oluşmasına neden olan klasik yönetim engellerini anında ortadan kaldırın.",
            problemsList: [
                { problem: "Sekreterlik iş yükünün fazla olması ve cevaplanamayan çağrılar nedeniyle hasta kaybı yaşanması.", solution: "Yapay zeka asistanı, 7/24 medikal soruları ve randevu taleplerini sıfır gecikmeyle yöneterek gelire dönüştürür." },
                { problem: "Hastaların randevularını unutması veya son dakika seans iptali yapması yüzünden oluşan boş saat kayıpları.", solution: "Akıllı hatırlatıcı sistemi, WhatsApp ve SMS entegrasyonu ile hastadan anlık teyit alarak iptal oranlarını %90 azaltır." },
                { problem: "Hasta tıbbi geçmişlerinin ve seans detaylarının dağınık olması, tedavi takibini zorlaştırır.", solution: "Hasta ve klinik yönetim süreçlerini birleştiren entegre CRM her doktor için tek platformda eksiksiz tıbbi geçmiş profili sunar." }
            ],
            conciergeTitle: <>Kliniğinizin Dijital Sağlık Temsilcisi: <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">7/24 AI Medikal Asistan</span></>,
            conciergeSubtitle: "Yapay zeka destekli akıllı asistan ile hastalarınızın tedavi öncesi ve sonrası tüm sorularını yanıtlayarak yüksek güven bağı oluşturun.",
            ctaTitle: <><span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Klinik Yönetiminde</span><br /> Yapay Zeka Çağını Başlatın</>,
            ctaSubtitle: "Tüm hasta takip, randevu ve klinik büyüme süreçlerinizi otomatize edin, hasta sadakatini ve gelirlerinizi maksimize edin.",
            ctaBulletsList: [
                { icon: <i className="fas fa-circle-check text-emerald-400 text-sm"></i>, text: "<strong>7/24 Kesintisiz</strong> Randevu Kabul Altyapısı" },
                { icon: <i className="fas fa-shield-halved text-blue-400 text-sm"></i>, text: "<strong>KVKK Uyumlu</strong> Güvenli Hasta Veri Altyapısı" },
                { icon: <i className="fas fa-arrows-spin text-purple-400 text-sm"></i>, text: "<strong>%90'a Varan</strong> Seans İptal Oranı Azalışı" }
            ]
        };
    }
    
    if (slug === 'egitim-yonetimi-crm') {
        return {
            fomoTitle: (
                <>
                    Dijital Eğitimde <br />
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">Zirveye Ulaşın</span>
                </>
            ),
            fomoDesc: "Eğitim sektörü hızla dijitalleşirken yapay zeka destekli öğrenci ve kurum yönetimi ile öğrenci başarı ve memnuniyetini katlayın.",
            stat1Val: "85", stat1Title: "Hızlı Öğrenci Kayıtları", stat1Desc: "Veliler ve öğrenciler, 7/24 kesintisiz bilgi alabilecekleri yenilikçi kurumları tercih ediyor.",
            stat2Val: "60", stat2Title: "İdari Zaman Tasarrufu", stat2Desc: "Ders planlama, yoklama takibi ve ödev süreçleri yapay zeka ve otomasyonla hızlanır.",
            stat3Val: "24/7", stat3Title: "Kesintisiz İletişim", stat3Desc: "Velilerin soruları anında yanıt bulur, toplantılar otomatik ayarlanır ve yüksek güven bağı kurulur.",
            sliderImages: [
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
                "https://images.unsplash.com/photo-1546410531-b4edbcbb969a?ixid=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
                "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixid=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            ],
            faqs: [
                { question: "Eğitim CRM sistemi öğrenci şifreleme ve KVKK standartlarına uygun mu?", answer: "Evet, tüm altyapımız KVKK'ya ve eğitim verileri gizlilik politikalarına tam uyumludur." },
                { question: "Mevcut okul yönetim sistemlerimizle entegre çalışır mı?", answer: "Evet. Kullandığınız mevcut e-okul veya üniversite bilgi sistemleriyle çift yönlü API entegrasyonu sunuyoruz." },
                { question: "Yabancı öğrenci kayıtları için dil desteği var mı?", answer: "Evet, yapay zeka asistanımız Türkçe ve İngilizce başta olmak üzere 30'un üzerinde dilde uluslararası öğrencilere destek sağlar." },
                { question: "Öğretmenler ve akademik kadro için sistemin kullanımı kolay mı?", answer: "Tamamen kullanıcı dostu arayüz sunuyoruz ve tüm idari personelinize detaylı eğitimler sağlıyoruz." }
            ],
            whatsappLink: `https://wa.me/905540118888?text=${encodeURIComponent("Merhaba, " + application?.name + " hakkında detaylı bilgi almak istiyorum.")}`,
            aiConciergeFeatures: [
                { icon: <i className="fas fa-user-graduate"></i>, title: "Anında Online Kayıt Planlama", description: "Kurumunuzdaki müsaitlik takvimini inceler ve yeni öğrenci görüşmelerini hızlıca planlar." },
                { icon: <i className="fas fa-book-open"></i>, title: "Müfredat ve Ders Bilgisi", description: "Öğrenci adaylarına veya velilere en uygun eğitim programları hakkında anında detaylı ön bilgilendirme yapar." },
                { icon: <i className="fas fa-chart-bar"></i>, title: "Öğrenci Başarı Takibi", description: "Sınav sonuçları ve devamsızlık durumları üzerinden otomatik süreçler yürüterek veliyi bilgilendirir." },
                { icon: <i className="fas fa-globe"></i>, title: "Uluslararası Eğitim Danışmanlığı", description: "Uluslararası öğrenciler için çok dilli destek sağlayarak kabul oranlarını ve memnuniyeti artırır." },
                { icon: <i className="fas fa-user-friends"></i>, title: "Veli Geri Bildirim Sistemi", description: "Eğitim yılı içerisinde veli memnuniyetini ölçen anında geri bildirim mekanizmaları çalıştırır." },
                { icon: <i className="fas fa-bell"></i>, title: "Akıllı Sınav ve Ödev Hatırlatıcı", description: "Öğrencilere yaklaşan sınavları ve ödev son teslim tarihlerini otomatik hatırlatan akıllı bildirimler." }
            ],
            howItWorksSteps: [
                { icon: 'fa-school', title: '1. Kurum Entegrasyonu', description: 'Mevcut okul yönetim ve öğrenci takip sistemlerinizi platformumuza kusursuzca entegre ediyoruz.' },
                { icon: 'fa-robot', title: '2. Akademik AI Eğitimi', description: 'Yapay zekayı kurumunuzun eğitim modeli, iletişim gereksinimleri ve okul kültürü doğrultusunda eğitiyoruz.' },
                { icon: 'fa-rocket', title: '3. Güvenli Yayına Alım', description: 'AI destekli portalınızı açıp otonom olarak öğrenci kayıtlarına ve idari yönetime hızlıca başlıyoruz.' }
            ],
            heroAssistantActiveTitle: "Yapay Zeka Eğitim Hub",
            heroAssistantActiveSubtitle: "7/24 Kesintisiz Eğitim Destek",
            heroDescription: (
                <>
                    Veli ilişkileri, öğrenci takibi, ders planlaması ve kurum süreçlerinizi yapay zeka gücüyle yönetin. <strong className="text-white font-semibold text-indigo-100">Mortanas Eğitim CRM</strong> ile her öğrenci ve veliye premium dijital deneyim sunarak başarı oranınızı artırın.
                </>
            ),
            whyTitle: `Neden ${application?.name}?`,
            featuresSubtitle: "Öğrenci alım süreçlerini hızlandırın, idari yükleri azaltın ve eğitim kurumunuzun rekabet gücünü zirveye taşıyın.",
            featuresList: [
                { title: "Kişiselleştirilmiş Veli ve Öğrenci Karşılama", description: "Sitenize giren velilerin çocuklarının yaş veya sınıf profiline en uygun içerik ve eğitim paketlerini AI otomatik sunar.", icon: <i className="fas fa-hands-holding-child"></i> },
                { title: "Akıllı Rehberlik Motoru", description: "Öğrencinin seviyesine göre en uygun eğitim programını önerir ve akademik ilerlemeyi kişiselleştirir.", icon: <i className="fas fa-compass"></i> },
                { title: "7/24 Akıllı Eğitim Asistanı", description: "Kayıt işlemleri, burs olanakları veya takvimle ilgili karmaşık soruları saniyeler içerisinde yanıtlayan yapay zeka asistanı.", icon: <i className="fas fa-headset"></i> },
                { title: "Akademik Başarı Takip Sistemi", description: "Öğrencilerin sonuçlarını ve katılım verilerini tek bir CRM üzerinde toplayıp hocaların değerlendirmesine destek sağlar.", icon: <i className="fas fa-chart-line"></i> },
                { title: "Otomatik Hatırlatıcılar", description: "Veli toplantıları, ödemeler ve önemli okul etkinliklerini otomatik zamanlanmış SMS ve mailler ile iletin.", icon: <i className="fas fa-envelope-open-text"></i> },
                { title: "Davranışsal Katılım Analizi", description: "Öğrenci veya veli katılım istatistiklerini izleyerek okul içi iyileştirme adımlarınızı şekillendirin.", icon: <i className="fas fa-microscope"></i> }
            ],
            problemsTitle: <>Klasik Kurumların Yaşadığı Problemler ve <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">Akıllı Çözümler</span></>,
            problemsSubtitle: "Kayıt kaybı yaşamanıza ve zaman israfına neden olan klasik eğitim yönetimi engellerini ortadan kaldırın.",
            problemsList: [
                { problem: "İdari personelin kayıt sezonunda çağrılara ve sorulara yetişememesinden kaynaklanan potansiyel öğrenci kaybı.", solution: "7/24 aktif AI asistanı tüm kayıt sorularını yanıtlar ve yüz yüze görüşmeler için anlık randevu oluşturur." },
                { problem: "Öğrenci devamsızlığı, not takibi ve veli bilgilendirmesinin manuel yapılması nedeniyle oluşan veri iletişim gecikmesi.", solution: "Tam entegre çalışan sistem, not girildiği an veliye bildirim gönderir ve takip yükünü en aza yindirir." },
                { problem: "Farklı öğrenci gruplarının karışık ders programları ve eksik iletişim sağlayan dağınık sistemler.", solution: "Her öğrenciye ve öğretmene özel, tek ekrandan tüm süreci yönetebildikleri gelişmiş ve kişiselleştirilmiş portal imkanı." }
            ],
            conciergeTitle: <>Kurumunuzun Dijital Rehberi: <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">7/24 AI Eğitim Asistanı</span></>,
            conciergeSubtitle: "Yapay zeka asistanı ile öğrenci ve velilerin aklına takılan her soruya anında yanıt verin, güven bağınızı güçlendirin.",
            ctaTitle: <><span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Eğitim Yönetiminde</span><br /> Yapay Zeka Çağını Başlatın</>,
            ctaSubtitle: "Tüm kayıt, takip ve kurum büyüme süreçlerinizi otomatize edin, öğrenci başarısını vizyonunuzla maksimize edin.",
            ctaBulletsList: [
                { icon: <i className="fas fa-circle-check text-emerald-400 text-sm"></i>, text: "<strong>7/24 Kesintisiz</strong> Eğitim Rehberliği" },
                { icon: <i className="fas fa-shield-halved text-blue-400 text-sm"></i>, text: "<strong>KVKK Uyumlu</strong> Güvenli Öğrenci Veri Altyapısı" },
                { icon: <i className="fas fa-arrows-spin text-purple-400 text-sm"></i>, text: "<strong>İş Yükünde %90</strong> Azalış ve Artan Memnuniyet" }
            ]
        };
    }
    
    // HOTEL DEFAULT (Otel, etc. or Default for others)
    return {
        fomoTitle: (
            <>
                Dijital Dönüşümü <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">Ertelemeyin</span>
            </>
        ),
        fomoDesc: `${application?.sector} sektörü hızla dönüşürken yapay zeka entegrasyonunun somut etkilerini hemen görün ve pazar payınızı artırın.`,
        stat1Val: "66", stat1Title: "Daha Fazla Rezervasyon", stat1Desc: "Her 3 müşteriden 2'si, kişiselleştirilmiş teklifler sunan sitelerden işlem yapıyor.",
        stat2Val: "35", stat2Title: "Daha Yüksek Kârlılık", stat2Desc: "Akıllı otomasyon kullananlar aracı komisyonlarından kurtularak kârlılığını artırıyor.",
        stat3Val: "24/7", stat3Title: "Kesintisiz Hizmet", stat3Desc: "AI asistan ile hiçbir potansiyel fırsatı veya talebi kaçırmayın.",
        sliderImages: [
            "https://mortanas.com/resim/mortel1.png",
            "https://mortanas.com/resim/mortel2.png",
            "https://mortanas.com/resim/mortel3.png",
            "https://mortanas.com/resim/mortel4.png",
            "https://mortanas.com/resim/mortel5.png",
            "https://mortanas.com/resim/mortel6.png",
            "https://mortanas.com/resim/mortel7.png",
            "https://mortanas.com/resim/mortel8.png",
            "https://mortanas.com/resim/mortel9.png",
            "https://mortanas.com/resim/mortel10.png",
            "https://mortanas.com/resim/mortel11.png",
            "https://mortanas.com/resim/mortel12.png"
        ],
        faqs: [
            { question: "Bu uygulama tam olarak ne işe yarar?", answer: "İşletmenizin operasyonel süreçlerini dijitalleştiren, verimliliği artıran ve müşteri memuniyetini en üst düzeye çıkaran hepsi bir arada bir yönetim platformudur." },
            { question: "Mevcut sistemlerimle entegre olabilir mi?", answer: "Evet, birçok popüler yazılım ve altyapı ile tam entegre çalışarak veririnizi anlık senkronize eder." },
            { question: "Kurulum ve yayına alma süreci ne kadar sürer?", answer: "Anahtar teslim projemiz, genel olarak özelliklerinize ve entegrasyon süreçlerine bağlı olarak 5-7 iş günü içinde tamamlanır." },
            { question: "Sistem hangi dilleri destekliyor?", answer: "Türkçe ve İngilizce başta olmak üzere çok dilli altyapı sunarak global müşteri kitlenizi genişletir." }
        ],
        whatsappLink: `https://wa.me/905540118888?text=${encodeURIComponent("Merhaba, " + application?.name + " hakkında detaylı bilgi almak istiyorum.")}`,
        aiConciergeFeatures: [
            { icon: <i className="fas fa-bolt"></i>, title: "Anında Rezervasyon", description: "Müsaitliği sorar, en iyi fiyatı sunar ve rezervasyonu saniyeler içinde tamamlar." },
            { icon: <i className="fas fa-concierge-bell"></i>, title: "Oda Servisi & Talep Yönetimi", description: "Misafirleriniz web sitenizden ayrılmadan ek hizmetler için sipariş verebilir." },
            { icon: <i className="fas fa-map-location-dot"></i>, title: "Akıllı Bölge Rehberi", description: "Yakındaki restoranlar, gezilecek yerler veya ulaşım seçenekleri hakkında anında bilgi verir." },
            { icon: <i className="fas fa-language"></i>, title: "Çok Dilli Destek", description: "Yabancı misafirlerinizle kendi dillerinde akıcı bir şekilde iletişim kurarak global müşteri kitlenizi genişletir." },
            { icon: <i className="fas fa-star-half-alt"></i>, title: "Anlık Geri Bildirim Toplama", description: "Hizmet sonrası müşteri memnuniyetini ölçmek için sohbet üzerinden anket yapar ve yorumları analiz eder." },
            { icon: <i className="fas fa-arrow-up-right-dots"></i>, title: "Upsell & Cross-sell", description: "Ek hizmetleri proaktif olarak önererek kişi başına geliri artırır." }
        ],
        howItWorksSteps: [
            { icon: 'fa-plug', title: '1. Entegrasyon & Kurulum', description: 'Mevcut yönetim sistemlerinizi ve altyapınızı platformumuza sorunsuzca bağlıyoruz.' },
            { icon: 'fa-brain', title: '2. AI Eğitimi & Kişiselleştirme', description: 'Yapay zekayı, işletmenizin kimliği ve hedef kitlesi ile eğitiyoruz. Web siteniz markanızın dilini konuşmaya başlıyor.' },
            { icon: 'fa-rocket', title: '3. Aktivasyon & Büyüme', description: 'Akıllı sisteminiz yayına alınır. İlk günden itibaren verimliliği ve gelirinizi artırmaya başlarsınız.' }
        ],
        heroAssistantActiveTitle: "Akıllı Asistan Aktif",
        heroAssistantActiveSubtitle: "7/24 Müşteri Hizmeti",
        heroDescription: (
            <>
                Sadece form doldurulan bir web sitesinden çok daha fazlası. <strong className="text-white font-semibold text-indigo-100">Mortanas Yapay Zeka Web</strong>, her müşterinize kişiselleştirilmiş bir deneyim sunar, dönüşümlerinizi artırır ve 7/24 çalışan akıllı bir temsilci gibi hareket eder.
            </>
        ),
        whyTitle: `Neden ${application?.name}?`,
        featuresSubtitle: "Aracı maliyetlerini azaltın, sadakati artırın ve operasyonel verimliliği en üst düzeye çıkarın.",
        featuresList: [
            { title: "Kişiselleştirilmiş Karşılama", description: "Yapay zeka, ziyaretçinin konumuna, geçmiş ziyaretlerine ve davranışlarına göre ana sayfanızı, tekliflerinizi ve içeriğinizi dinamik olarak değiştirir.", icon: <i className="fas fa-user-astronaut"></i> },
            { title: "Akıllı Dönüşüm Motoru", description: "Müşterinize en uygun paketleri önerir, ek hizmetler için akıllıca çapraz satış yapar ve süreci kolaylaştırır.", icon: <i className="fas fa-calendar-check"></i> },
            { title: "7/24 Akıllı Temsilci", description: "Web sitenizdeki sohbet botu, soruları anında yanıtlar, randevu yapar ve talepleri CRM'inize iletir.", icon: <i className="fas fa-comments-dollar"></i> },
            { title: "Dinamik Fiyatlandırma", description: "Doluluk oranına, talep yoğunluğuna ve rakip analizlerine göre web sitenizde anlık fiyat güncellemeleri yaparak kârlılığınızı maksimize eder.", icon: <i className="fas fa-tags"></i> },
            { title: "Otomatik İletişim", description: "Hizmet öncesi ve sonrası e-postaları kişiselleştirilmiş içeriklerle otomatik olarak göndererek hedef kitleyle bağ kurar.", icon: <i className="fas fa-envelope-open-text"></i> },
            { title: "Davranışsal Analiz", description: "Hangi tekliflerin daha çok ilgi çektiğini, hangi sayfaların terk edildiğini analiz eder ve web sitenizi sürekli olarak optimize etmeniz için size içgörüler sunar.", icon: <i className="fas fa-chart-line"></i> }
        ],
        problemsTitle: <>Klasik Sitelerin Yarattığı Problemler ve <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">Akıllı Çözümler</span></>,
        problemsSubtitle: "Doğrudan dönüşümleri ve kârlılığı engelleyen yaygın sorunları nasıl aştığımızı görün.",
        problemsList: [
            { problem: "Aracılara ödenen yüksek komisyonlar kâr marjınızı eritir.", solution: "Yapay zeka siteniz, müşterileri doğrudan işleme teşvik ederek bu maliyeti ortadan kaldırır." },
            { problem: "Mesai saatleri dışında veya yoğun anlarda telefonlara cevap veremez, potansiyel fırsatları kaçırırsınız.", solution: "AI Chatbot, her soruyu 7/24 anında yanıtlar ve hiçbir fırsatı kaçırmaz." },
            { problem: "Her ziyaretçiye aynı standart içeriği göstermek, kişiselleştirme eksikliği nedeniyle dönüşümleri düşürür.", solution: "AI, her ziyaretçiye özel teklifler ve içerikler sunarak etkileşimi ve dönüşüm oranını artırır." }
        ],
        conciergeTitle: <>Web Sitenizin Yeni Yıldızı: <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">7/24 AI Konsiyerj</span></>,
        conciergeSubtitle: "Bu sadece bir chatbot değil; dijital operasyonlarınızı yöneten, gelir getiren akıllı bir asistandır.",
        ctaTitle: <><span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">Doğrudan Dönüşüm</span><br /> Devrimine Katılın</>,
        ctaSubtitle: "Yapay zekanın gücüyle komisyon maliyetlerinizi sıfırlayın ve kârlılığınızı hemen artırın.",
        ctaBulletsList: [
            { icon: <i className="fas fa-percent text-emerald-400 text-sm"></i>, text: "<strong>Komisyonsuz</strong> İşlemler" },
            { icon: <i className="fas fa-user-astronaut text-blue-400 text-sm"></i>, text: "<strong>7/24 Çalışan</strong> AI Asistan" },
            { icon: <i className="fas fa-hand-holding-heart text-purple-400 text-sm"></i>, text: "<strong>Kişiselleştirilmiş</strong> Deneyim" }
        ]
    };
};
