import fs from "fs";

let content = fs.readFileSync("components/EcommercePhoneDialogueSection.tsx", "utf8");

content = content.replace(/EcommercePhoneDialogueSection/g, "AutomotivePhoneDialogueSection");
content = content.replace(/E-Ticaret Çözümleri/g, "Otomotiv Çözümleri");
content = content.replace(/E-Ticaret/g, "Otomotiv");
content = content.replace(/E-TİCARET/g, "OTOMOTİV");
content = content.replace(/e-ticaret/g, "otomotiv");

// Dialogues
content = content.replace(
  /'Merhaba! Mortanas AI Otomotiv Asistanına hoş geldiniz\. 🛍️ Size nasıl yardımcı olabilirim\?'/,
  `'Merhaba! Mortanas AI Otomotiv Asistanına hoş geldiniz. 🚗 Size nasıl yardımcı olabilirim?'`
);

content = content.replace(
  /'Merhabalar, Nike Air Force 1 beyaz renk 42 numara stoğunuzda var mı\?'/,
  `'Merhabalar, Audi A3 Sedan S-Line 2024 modeliniz için test sürüşü yapabilir miyim?'`
);

content = content.replace(
  /'Hemen kontrol ediyorum\.\.\. 🔍 Evet stoklarımızda mevcut! Şu an sepette %15 indirimle 3\.400 TL\. Siparişinizi oluşturmamı ister misiniz\?'/,
  `'Hemen kontrol ediyorum... 🔍 Evet, test aracımız mevcut! Cuma günü saat 14:00 için test sürüşü randevunuzu oluşturmamı ister misiniz?'`
);

content = content.replace(
  /"Siparişim ne zaman kargolanır\? İade şartlarınız neler\?"/,
  `"Aracın kredi seçenekleri neler? Takas desteği mevcut mu?"`
);

content = content.replace(
  /"Siparişiniz 24 saat içinde kargolanmaktadır\. 📦 14 gün koşulsuz iade hakkınız bulunuyor\."/,
  `"Otomobiliniz için 36 aya varan vade seçeneklerimiz bulunuyor. 💰 Ayrıca mevcut aracınız için takas değerlendirmesi yapabiliriz."`
);

content = content.replace(
  /'Harika, o zaman siparişimi tamamlayalım lütfen\.'/g,
  `'Harika, o zaman randevumu tamamlayalım lütfen.'`
);

content = content.replace(
  /'Talebiniz alındı! 🎉 Adınıza siparişiniz sepette oluşturuldu ve güvenli ödeme bağlantısı WhatsApp iletildi\. İyi alışverişler! 🛒'/g,
  `'Talebiniz alındı! 🎉 Adınıza randevunuz oluşturuldu ve onay detayı WhatsApp ile iletildi. İyi sürüşler! 🔑'`
);

// Replace mapping terms
content = content.replace(/sipariş/g, "randevu");
content = content.replace(/Sipariş/g, "Randevu");
content = content.replace(/mağazanızın/g, "bayinizin");
content = content.replace(/sitenizi/g, "bayinizi");
content = content.replace(/sepet/g, "başvuru");
content = content.replace(/iptal/g, "bakım");
content = content.replace(/müşterinin/g, "müşterinin"); // same
content = content.replace(/gizli indirim kodları/g, "özel finansman teklifleri");
content = content.replace(/kombin önerileri/g, "bakım paketleri");
content = content.replace(/mağazanız/g, "bayiniz");
content = content.replace(/satışa/g, "satışa");

content = content.replace(
  /"Gelişmiş AI motorumuz, bayinizde başvuruya ürün ekleyip bekleyen müşterileri anında tespit eder ve onlara kişiselleştirilmiş teklifler \(özel finansman teklifleri, bakım paketleri\) sunarak terk edilen başvurulari satışa çevirir\."/,
  `"Gelişmiş AI motorumuz, bayinizin web sitesini inceleyen müşterileri anında tespit eder ve onlara araçları ile ilgili kişiselleştirilmiş teklifler (özel finansman kampanyaları, bakım paketleri) sunarak, kararsız ziyaretçileri randevuya çevirir."`
);

content = content.replace(/başvurulari/g, "başvuruları");

fs.writeFileSync("components/AutomotivePhoneDialogueSection.tsx", content);
console.log("Done components");
