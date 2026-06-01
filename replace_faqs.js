import fs from 'fs';

let content = fs.readFileSync('pages/ApplicationDetailPage.tsx', 'utf8');

const regex = /const faqs: FAQ\[\] = \[\s*\{[\s\S]*?\s*\];/;

const newFaqs = `const faqs: FAQ[] = [
        { 
            question: "Bu uygulama tam olarak ne işe yarar?",
            answer: "İşletmenizin operasyonel süreçlerini dijitalleştiren, verimliliği artıran ve müşteri memuniyetini en üst düzeye çıkaran hepsi bir arada bir yönetim platformudur."
        },
        { 
            question: "Mevcut sistemlerimle entegre olabilir mi?",
            answer: "Evet, birçok popüler yazılım ve altyapı ile tam entegre çalışarak veririnizi anlık senkronize eder."
        },
        { 
            question: "Kurulum ve yayına alma süreci ne kadar sürer?",
            answer: "Anahtar teslim projemiz, genel olarak özelliklerinize ve entegrasyon süreçlerine bağlı olarak 5-7 iş günü içinde tamamlanır."
        },
        { 
            question: "Sistem hangi dilleri destekliyor?",
            answer: "Türkçe ve İngilizce başta olmak üzere çok dilli altyapı sunarak global müşteri kitlenizi genişletir."
        },
        { 
            question: "Fiyatlandırmaya güncellemeler dahil mi?",
            answer: "Evet, aktif kullanım süreniz boyunca tüm sistem güncellemeleri, güvenlik iyileştirmeleri ve teknik destek fiyata dahildir."
        },
        { 
            question: "Tasarımı ve süreçleri kendi markama göre özelleştirebilir miyim?",
            answer: "Kesinlikle. Kurulum aşamasında yetkilendirmeler, süreçler ve arayüz kurumunuzun kimliğine uyumlu hale getirilir."
        },
        { 
            question: "Raporlama ve analiz özellikleri nelerdir?",
            answer: "Yönetim panelinden personel metrikleri, satış hedefleri, randevu kapasitesi ve gelir tablosu gibi kritik verilere anlık ulaşabilirsiniz."
        },
        {
            question: "Platformu kullanmak için teknik bilgi gerekli mi?",
            answer: "Hayır. Kullanıcı dostu arayüzü sayesinde teknik bir bilgiye ihtiyaç duymadan sistem üzerinden tüm işlemleri kolayca yapabilirsiniz."
        },
        {
            question: "Sistemin bulut altyapısı güvenli mi?",
            answer: "En yeni şifreleme ve güvenlik protokollerini kullanarak verilerinizi güvenli bir bulut altyapısında barındırıyoruz."
        },
        {
            question: "Teknik sorun yaşarsam destek süreciniz nasıl işliyor?",
            answer: "7/24 hizmet veren teknik destek ekibimiz, olası problemleri dakikalar içerisinde çözerek kesintisiz operasyon yapmanızı sağlar."
        },
        {
            question: "Eski yazılımdaki içerikler yeni sisteme taşınacak mı?",
            answer: "Evet, uzman ekibimiz önceki sisteminizdeki müşteri verilerinizi, geçmiş işlem kayıtlarını yeni sisteme eksiksiz aktarır."
        },
        {
            question: "Çalışan sayıma göre ek ücret öder miyim?",
            answer: "Lisans modelimize göre kullanıcı sınırlandırması seçenekleri sunuyoruz, ihtiyacınıza uygun modeli baştan belirleyebilirsiniz."
        }
    ];`;

content = content.replace(regex, newFaqs);
fs.writeFileSync('pages/ApplicationDetailPage.tsx', content);
console.log('App Details faqs replaced correctly.');
