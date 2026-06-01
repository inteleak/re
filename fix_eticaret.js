import fs from "fs";

let content = fs.readFileSync("components/EducationalPhoneDialogueSection.tsx", "utf8");

content = content.replace(/EducationalPhoneDialogueSection/g, "EcommercePhoneDialogueSection");
content = content.replace(/Eğitim Sektörü Çözümleri/g, "E-Ticaret Çözümleri");
content = content.replace(/Eğitim/g, "E-Ticaret");
content = content.replace(/eğitim/g, "e-ticaret");
content = content.replace(/EĞİTİM/g, "E-TİCARET");

// Dialogues
content = content.replace(
  /'Merhaba! Mortanas AI E-Ticaret Asistanına hoş geldiniz\. 🎓 Size nasıl yardımcı olabilirim\?'/,
  `'Merhaba! Mortanas AI E-Ticaret Asistanına hoş geldiniz. 🛍️ Size nasıl yardımcı olabilirim?'`
);

content = content.replace(
  /'Merhabalar, hafta sonu İngilizce A2 seviyesi için boş kontenjanınız var mı\?'/,
  `'Merhabalar, Nike Air Force 1 beyaz renk 42 numara stoğunuzda var mı?'`
);

content = content.replace(
  /'Hemen kontrol ediyorum\.\.\. 🔍 Cumartesi sabah 10:00 ve Pazar 14:00 sınıflarımızda boş yerimiz mevcut! Aylık kayıt ücreti 2\.500 TL\. Ön kaydınızı oluşturmamı ister misiniz\?'/,
  `'Hemen kontrol ediyorum... 🔍 Evet stoklarımızda mevcut! Şu an sepette %15 indirimle 3.400 TL. Siparişinizi oluşturmamı ister misiniz?'`
);

content = content.replace(
  /"Ders materyallerini sisteme ne zaman yüklüyorsunuz\? Derse devam zorunluluğu var mı\?"/,
  `"Siparişim ne zaman kargolanır? İade şartlarınız neler?"`
);

content = content.replace(
  /"Ders materyalleriniz kayıt onayından hemen sonra Öğrenci Portalı üzerinden erişiminize açılmaktadır\. 📚 MEB kuralları gereği %80 devam zorunluluğumuz bulunmaktadır\."/,
  `"Siparişiniz 24 saat içinde kargolanmaktadır. 📦 14 gün koşulsuz iade hakkınız bulunuyor."`
);

content = content.replace(
  /'Harika, o zaman kaydımı tamamlayalım lütfen\.'/g,
  `'Harika, o zaman siparişimi tamamlayalım lütfen.'`
);

content = content.replace(
  /'Talebiniz alındı! 🎉 Adınıza ön kaydınız oluşturuldu ve onay bağlantısı WhatsApp üzerinden iletildi\. E-Ticaret hayatınızda başarılar dileriz! 🎓'/g,
  `'Talebiniz alındı! 🎉 Adınıza siparişiniz sepette oluşturuldu ve güvenli ödeme bağlantısı WhatsApp iletildi. İyi alışverişler! 🛒'`
);


// Replace other texts
content = content.replace(/öğrenci/g, "müşteri");
content = content.replace(/Öğrenci/g, "Müşteri");
content = content.replace(/Öğrencinin/g, "Müşterinin");
content = content.replace(/öğrencilere/g, "müşterilere");
content = content.replace(/Öğrencilere/g, "Müşterilere");
content = content.replace(/öğrencilerin/g, "müşterilerin");
content = content.replace(/Öğrencilerin/g, "Müşterilerin");
content = content.replace(/öğrenciyi/g, "müşteriyi");
content = content.replace(/Öğrenciyi/g, "Müşteriyi");
content = content.replace(/Öğrencilerimize/g, "Müşterilerimize");
content = content.replace(/öğrencilerimize/g, "müşterilerimize");
content = content.replace(/Öğrencimiz/g, "Müşterimiz");
content = content.replace(/öğrencimiz/g, "müşterimiz");
content = content.replace(/Öğrencilerinizi/g, "Müşterilerinizi");
content = content.replace(/öğrencilerinizi/g, "müşterilerinizi");
content = content.replace(/kaydınızı/g, "siparişinizi");
content = content.replace(/kurs/g, "iade");
content = content.replace(/ders programlarından/g, "sipariş iptal süreçlerinden");
content = content.replace(/sınav sonuçlarına/g, "kargo durumlarına");
content = content.replace(/etüt detaylarından/g, "taksit seçeneklerinden");
content = content.replace(/kurumunuzu/g, "sitenizi");
content = content.replace(/kurumunuzun/g, "mağazanızın");
content = content.replace(/erken kayıt avantajları/g, "gizli indirim kodları");
content = content.replace(/ek etüt paketleri/g, "kombin önerileri");
content = content.replace(/kayda/g, "satışa");
content = content.replace(/kayıt/g, "sipariş");
content = content.replace(/Kayıt/g, "Sipariş");

content = content.replace(
  /"Gelişmiş AI motorumuz, sitenizi inceleyen adayları anında tespit eder ve onlara en cazip alternatifleri \(gizli indirim kodları, kombin önerileri\) sunarak kaçan fırsatları doğrudan satışa çevirir\."/,
  `"Gelişmiş AI motorumuz, sitenizde sepete ürün ekleyip bekleyen müşterileri anında tespit eder ve onlara kişiselleştirilmiş teklifler (gizli indirim kodları, kombin önerileri) sunarak terk edilen sepetleri satışa çevirir."`
);

content = content.replace(/E\s*\-\s*Ticaret/g, "E-Ticaret"); 
content = content.replace(/e\s*\-\s*ticaret/g, "e-ticaret");

fs.writeFileSync("components/EcommercePhoneDialogueSection.tsx", content);
console.log("Done");
