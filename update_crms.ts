import fs from 'fs';

let content = fs.readFileSync('constants.tsx', 'utf8');

// The CRM applications are in `export const APPLICATIONS: Application[] = [`
// They go until `export const NAV_LINKS = [`
const startToken = 'export const APPLICATIONS: Application[] = [';
const endToken = 'export const NAV_LINKS = [';

let crmCode = `
export const APPLICATIONS: Application[] = [
    {
        name: 'Otel Yönetimi (CRM)',
        slug: 'otel-yonetimi-crm',
        sector: 'Turizm',
        description: 'Tüm otel operasyonlarınızı tek bir yerden yönetin. Rezervasyonlar, oda durumu ve misafir ilişkileri.',
        imageUrl: 'https://mortanas.com/resim/otel.png',
        title: 'Akıllı Otel Yönetim Platformu',
        longDescription: 'Otelinizin tüm operasyonel süreçlerini dijitalleştiren, verimliliği artıran ve misafir memnuniyetini en üst düzeye çıkaran hepsi bir arada yönetim çözümüdür.',
        problem: "Yüksek OTA komisyonları ve operasyonel karmaşıklık.",
        solution: "Otel Yönetimi (CRM) platformumuz, komisyonları ortadan kaldıran doğrudan rezervasyon motoru ve operasyonları otomatikleştiren merkezi panel sunar.",
        goal: "Amacımız, doğrudan rezervasyonları maksimize etmek ve misafir memnuniyetini artırmaktır.",
        whyChooseUs: [
            { icon: 'fa-solid fa-hotel', title: 'Sektörel Uzmanlık', description: 'Platformumuz, otelcilik sektörü dinamikleri göz önünde bulundurularak tasarlanmıştır.' },
            { icon: 'fa-solid fa-brain', title: 'Yapay Zeka Gücü', description: 'Misafir verilerini analiz eden yapay zeka ile kişiselleştirilmiş teklifler sunun.' }
        ],
        features: [
            { icon: 'fa-solid fa-calendar-check', title: 'Rezervasyon Yönetimi', description: 'Tüm kanallardan gelen rezervasyonları anlık olarak görüntüleyin.', imageUrl: 'https://i.imgur.com/A6fXzKk.png' }
        ]
    },
    {
        name: 'Sağlık / Klinik Yönetimi (CRM)',
        slug: 'saglik-yonetimi-crm',
        sector: 'Sağlık',
        description: 'Hasta takibi, online randevu ve e-reçete süreçlerinizi merkezi olarak yönetin.',
        imageUrl: 'https://media.istockphoto.com/id/1183353523/tr/foto%C4%9Fraf/k%C3%BCresel-evren-k%C3%BCresini-tutan-asya-erkek-sa%C4%9Fl%C4%B1k-veya-doktor-hedef-i%C5%9F-sa%C4%9Fl%C4%B1k-hizmetleri-ve-a%C4%9F.jpg?s=612x612&w=0&k=20&c=pA8Gz0a9u3Z4eOtw4Yf_2TksEw1Z0_H_R_aQ25_1L4E=',
        title: 'Akıllı Sağlık ve Klinik Yönetim Platformu',
        longDescription: 'Kliniklerin ve doktorların tüm operasyonel süreçlerini dijitalleştiren, verimliliği artıran hepsi bir arada yönetim çözümüdür.',
        problem: "Karmaşık hasta kayıtları ve kaçırılan randevular.",
        solution: "Hasta odaklı sistem ile tüm veriler tek panelde toplanır, otomatik hatırlatıcılar ile iptaller önlenir.",
        goal: "Hasta memnuniyetini artırıp klinik verimini maksimize etmek.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'Eğitim Yönetimi (CRM)',
        slug: 'egitim-yonetimi-crm',
        sector: 'Eğitim',
        description: 'Öğrenci, veli ve öğretmen iletişimini, kayıt süreçlerini ve not sistemlerini entegre edin.',
        imageUrl: 'https://media.istockphoto.com/id/1288075308/tr/foto%C4%9Fraf/makine-%C3%B6%C4%9Frenimi-uygulamal%C4%B1-e%C4%9Fitim-ve-evde-e%C4%9Fitim.jpg?s=612x612&w=0&k=20&c=oexC5kP8i43s5PXZe0xG0Zf7rXj6N9Z2_7xTq8k5z58=',
        title: 'Akıllı Eğitim Yönetim Platformu',
        longDescription: 'Eğitim kurumlarının tüm operasyonel süreçlerini dijitalleştiren, verimliliği artıran hepsi bir arada yönetim çözümüdür.',
        problem: "Zorlu öğrenci takip ve tahsilat süreçleri.",
        solution: "Otomatik faturalandırma, yoklama takibi ve veli bilgilendirme sistemi ile iş yükünü kaldırın.",
        goal: "Eğitim kalitesine odaklanmanız için operasyonları otomatize etmek.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'E-Ticaret Yönetimi (CRM)',
        slug: 'eticaret-yonetimi-crm',
        sector: 'E-Ticaret',
        description: 'Bütün satış kanallarınızı, stoklarınızı, sipariş ve müşteri ilişkilerini tek platformda toplayın.',
        imageUrl: 'https://media.istockphoto.com/id/1324838520/tr/foto%C4%9Fraf/digital-marketing-concept-online-advertisement-business-strategy.jpg?s=612x612&w=0&k=20&c=tq2C7X4s41B0T71c6H7f92083u0o3Vn8X-_nQ5b0H2c=',
        title: 'Akıllı E-Ticaret Yönetim Platformu',
        longDescription: 'Birden çok pazaryerini ve kendi sitenizi tek bir panelden yönetin.',
        problem: "Pazaryerlerinde stok senkronizasyon hataları ve çok kanallı sipariş yönetimi zorlukları.",
        solution: "Tam entegre envanter ve otomatik kargo fişleme ile kusursuz gönderim süreci.",
        goal: "Satış hacmini artırırken operasyon maliyetlerini düşürmek.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'Otomotiv Yönetimi (CRM)',
        slug: 'otomotiv-yonetimi-crm',
        sector: 'Otomotiv',
        description: 'Galeri, servis kayıtları, test sürüşü planlaması ve müşteri takiplerini dijitalleştirin.',
        imageUrl: 'https://media.istockphoto.com/id/1453265551/tr/foto%C4%9Fraf/auto-repair-software-mechanic-at-service-station.jpg?s=612x612&w=0&k=20&c=G_Z8Z1Z7T7E8u5I8W23126Z9T1v6o9k8E5H7K0_r5wM=',
        title: 'Akıllı Otomotiv Yönetim Platformu',
        longDescription: 'Araç stoğu, parça envanteri ve müşteri taleplerini aynı arayüzde kontrol edin.',
        problem: "Araç takip zorlukları ve servis bakım hatırlatmalarının aksaması.",
        solution: "Yapay zeka analizleriyle bakım zamanı gelen müşterilere SMS veya e-posta otomasyonu.",
        goal: "Karlılığı ve müşteri bağlılığını zirveye taşımak.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'Hukuk Yönetimi (CRM)',
        slug: 'hukuk-yonetimi-crm',
        sector: 'Hukuk',
        description: 'Dava dosya takibi, duruşma ajandası ve müvekkil iletişimi için entegre otomasyon sistemi.',
        imageUrl: 'https://media.istockphoto.com/id/102008320/tr/foto%C4%9Fraf/law-library.jpg?s=612x612&w=0&k=20&c=6P4sL9Vf6F5g8t7a7P2jM6rK4e7D2Y3pL9uQ1n9_J7U=',
        title: 'Akıllı Hukuk Yönetim Platformu',
        longDescription: 'Dosyaları kolayca bulun, duruşma günü hatırlatmalarını anında alın.',
        problem: "Fiziksel evrak yoğunluğu, son başvuru veya duruşma tarihinin gözden kaçması.",
        solution: "UYAP entegre ve güvenli bulut dosya depolama sistemi ile her yerden erişim.",
        goal: "Avukatların iş yükünü azaltıp hatasız hukuki süreç yönetimi sağlamak.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'Restoran Yönetimi (CRM)',
        slug: 'restoran-yonetimi-crm',
        sector: 'Restoran',
        description: 'Menü, masa takibi, paket siparişler ve sadakat programını tek panelden yönetin.',
        imageUrl: 'https://media.istockphoto.com/id/1283624322/tr/foto%C4%9Fraf/pos-makinesi-ve-kredi-kart%C4%B1-kullanarak-%C3%B6deme-restoran-arka-plan%C4%B1-olan-masada-duran-sar%C4%B1%C5%9F%C4%B1n.jpg?s=612x612&w=0&k=20&c=eX-rP30W3eX4tN9a5a3T5d0x_z-N-Z9O5qW7O_j_6r0=',
        title: 'Akıllı Restoran Yönetim Platformu',
        longDescription: 'Müşteri alışkanlıklarını kaydedin ve özel kampanyalar ile cirolarınızı artırın.',
        problem: "Sipariş süreçlerinin yavaşlığı ve müşteri verisinin toplanamaması.",
        solution: "QR menü, dijital sadakat kartları ve hızlı sipariş ekranı sayesinde verimli iş gücü.",
        goal: "Operasyon hızını artırıp restoran karlılığını en üst düzeye çekmek.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'Fitness Yönetimi (CRM)',
        slug: 'fitness-yonetimi-crm',
        sector: 'Spor & Fitness',
        description: 'Üyelik planları, stüdyo ders saatleri ve antrenör takvimini dijital arayüzde birleştirin.',
        imageUrl: 'https://media.istockphoto.com/id/1149237699/tr/foto%C4%9Fraf/sa%C4%9Fl%C4%B1k-kul%C3%BCb%C3%BCnde-a%C4%9F%C4%B1rl%C4%B1k-makinesi-olan-gen%C3%A7-kad%C4%B1n.jpg?s=612x612&w=0&k=20&c=bX4uO5lY1rQeF4uN8V9mG-A0n_5t_Z9O5qW7O_j_6r0=',
        title: 'Akıllı Fitness Yönetim Platformu',
        longDescription: 'Salona giriş çıkış verileriyle otomatik aidat hatırlatmaları gerçekleştirin.',
        problem: "Eski tip üyelik kartları, takip edilemeyen tahsilatlar.",
        solution: "Turnike/mobil QR entegrasyonlu ve otomatik kredi kartı tahsilat destekli çözüm.",
        goal: "Üye devamlılığını artırarak operasyon maliyetlerini düşürmek.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'Sigorta Yönetimi (CRM)',
        slug: 'sigorta-yonetimi-crm',
        sector: 'Sigorta',
        description: 'Poliçe yenileme, teklif süreci ve hasar dosya takibini akıllı ekranlardan kontrol edin.',
        imageUrl: 'https://media.istockphoto.com/id/1283307525/tr/foto%C4%9Fraf/businessman-reviewing-insurance-policy.jpg?s=612x612&w=0&k=20&c=W0wS4I1n5zS1dK3rE5z8L9o_K_1bE_N_T5z9S-Q_3I0=',
        title: 'Akıllı Sigorta Yönetim Platformu',
        longDescription: 'Hasar dosyası görsellerini bulutta tutun, müşteri prim günlerini otomatik hatırlayın.',
        problem: "Manuel poliçe yenileme uyarılarının atlanması ve müşteri kayıpları.",
        solution: "Yapay zeka ile yenileme döneminin 1 ay öncesinde başlayan otomatik WhatsApp/SMS bildirimleri.",
        goal: "Güven algısını zirveye taşıyıp müşteri tutundurma oranını maksimize etmek.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'Güzellik Salonu Yönetimi (CRM)',
        slug: 'guzellik-yonetimi-crm',
        sector: 'Sağlık & Güzellik',
        description: 'Sanal randevu, paket satışı, personel prim takibi ve stok sayımını otomatikleştirin.',
        imageUrl: 'https://media.istockphoto.com/id/1149237699/tr/foto%C4%9Fraf/sa%C4%9Fl%C4%B1k-kul%C3%BCb%C3%BCnde-a%C4%9F%C4%B1rl%C4%B1k-makinesi-olan-gen%C3%A7-kad%C4%B1n.jpg?s=612x612&w=0&k=20&c=bX4uO5lY1rQeF4uN8V9mG-A0n_5t_Z9O5qW7O_j_6r0=',
        title: 'Akıllı Güzellik Salonu Yönetim Platformu',
        longDescription: 'Müşteri cilt/saç analiz verilerini saklayıp doğru ürünleri otomatik öneren sistem.',
        problem: "Müşteri randevu çakışmaları ve tahsilatı yapılamayan paket satışları.",
        solution: "Esnek online takvim, personel performans göstergeleri ve otomatik e-fatura.",
        goal: "Salonun randevu kapasitesini fulleyip satışları şeffaf yönetmek.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'Diyetisyen Yönetimi (CRM)',
        slug: 'diyetisyen-yonetimi-crm',
        sector: 'Sağlık',
        description: 'Vücut kitle analiz verileri, diyet listesi planlama ve seans takibi hepsi bir yerde.',
        imageUrl: 'https://media.istockphoto.com/id/1183353523/tr/foto%C4%9Fraf/k%C3%BCresel-evren-k%C3%BCresini-tutan-asya-erkek-sa%C4%9Fl%C4%B1k-veya-doktor-hedef-i%C5%9F-sa%C4%9Fl%C4%B1k-hizmetleri-ve-a%C4%9F.jpg?s=612x612&w=0&k=20&c=pA8Gz0a9u3Z4eOtw4Yf_2TksEw1Z0_H_R_aQ25_1L4E=',
        title: 'Akıllı Diyetisyen Yönetim Platformu',
        longDescription: 'Danışanlara özel mobil uygulama veya portal erişimi ile hedefleri anlık takip edin.',
        problem: "Whatsapp üzerinden uzun diyet listesi hazırlama süreleri ve ölçümlerin kaybolması.",
        solution: "Makro besin hesaplamalı özel diyet oluşturucu ve danışan gelişim grafik paneli.",
        goal: "Diyetisyenlerin operasyon yükünü sıfırlayıp hizmet kalitesini artırmak.",
        whyChooseUs: [],
        features: []
    },
    {
        name: 'Emlak Yönetimi (CRM)',
        slug: 'emlak-yonetimi-crm',
        sector: 'Gayrimenkul',
        description: 'Portföy detayları, potansiyel alıcı havuzu ve danışman satış skorlarını yönetin.',
        imageUrl: 'https://media.istockphoto.com/id/1165384568/tr/foto%C4%9Fraf/architecture-project-planning.jpg?s=612x612&w=0&k=20&c=I-J_t_Z_3_3_3_3_3_3_3_3_3_3_3_3_3_3_3_3_3_3_=',
        title: 'Akıllı Emlak Yönetim Platformu',
        longDescription: 'Sahibinden, Zingat gibi platformlara otomatik ilan entegrasyonu ve dijital kapora sistemi.',
        problem: "Müşteri taleplerini unutma, portföy değişikliklerinin güncellenmemesi.",
        solution: "Alıcı talepleri ile eşleşen portföyleri otomatik haberdar eden yapay zeka algoritması.",
        goal: "Danışman satışlarını ikiye katlayıp mülk satış hızını artırmak.",
        whyChooseUs: [],
        features: []
    }
];

`;

const firstPart = content.split(startToken)[0];
const secondPart = content.split(endToken)[1];

const finalContent = firstPart + crmCode + '\\nexport const NAV_LINKS = [' + secondPart;

fs.writeFileSync('constants.tsx', finalContent);
console.log('CRM list updated.');
