import fs from 'fs';

let content = fs.readFileSync('pages/EgitimCozumlerimizPage.tsx', 'utf8');

content = content.replace(
    /"Yapay zeka asistanımız, kayıt şartları, eğitim olanakları, yemekhane saatleri ve SPA hizmetleri gibi konularda 7\/24 anında yanıt verir\. Resepsiyona gelen tekrarlayan sorular azalır ve personelin iş yükü hafifler\."/g,
    '"Yapay zeka asistanımız, kayıt şartları, eğitim olanakları, ek etüt saatleri ve kurs hizmetleri gibi konularda 7/24 anında yanıt verir. Danışmaya gelen tekrarlayan sorular azalır ve personelin iş yükü hafifler."'
);

content = content.replace(
    /"Eğitim öncesi giriş detayları, havaalanı transferleri ve yemekhane rezervasyonları öğrencilere otomatik olarak hatırlatılır\. Bu sayede iletişimsizlik azalır ve eğitim süreci pürüzsüz ilerler\."/g,
    '"Eğitim başlangıç detayları, deneme sınavı tarihleri ve etüt randevuları öğrencilere otomatik olarak hatırlatılır. Bu sayede iletişimsizlik azalır ve eğitim süreci pürüzsüz ilerler."'
);

content = content.replace(
    /"Öğrencilerin tercihlerine ve eğitim tiplerine göre sınıf yükseltme, SPA veya özel akşam yemeği gibi ek hizmetleri doğru zamanda akıllıca teklif ederek eğitim gelirlerini artırır\."/g,
    '"Öğrencilerin tercihlerine ve eğitim tiplerine göre ek özel ders, hafta sonu kampı veya yayın paketleri gibi ek hizmetleri doğru zamanda akıllıca teklif ederek eğitim gelirlerini artırır."'
);

content = content.replace(
    /"Öğrencilere kurum olanakları, yemekhane rezervasyonları ve kulüp etkinlikleri önerileri hakkında kişiselleştirilmiş, anlık bilgiler sunarak bağlılığı artırın\."/g,
    '"Öğrencilere kurum olanakları, etüt randevuları ve kulüp sosyal etkinlik önerileri hakkında kişiselleştirilmiş, anlık bilgiler sunarak bağlılığı artırın."'
);

fs.writeFileSync('pages/EgitimCozumlerimizPage.tsx', content);
console.log('Fixed edu phase 4 run.');
