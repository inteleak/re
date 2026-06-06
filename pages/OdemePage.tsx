import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

// Declare Stripe for TypeScript since it's loaded from a script tag
declare const Stripe: any;

const OdemePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const planName = searchParams.get('plan') || 'Plan Seçilmedi';
  const planPriceString = searchParams.get('price') || '0';
  const planType = searchParams.get('type') || 'automation';
  const planCycle = searchParams.get('cycle') || 'monthly';
  const currency = (searchParams.get('currency') || 'TRY').toLowerCase();
  const setupFeeString = searchParams.get('setupFee') || '0';

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [taxOffice, setTaxOffice] = useState('');
  const [taxId, setTaxId] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState('');

  const numericPrice = useMemo(() => parseFloat(planPriceString) || 0, [planPriceString]);
  const numericSetupFee = useMemo(() => parseFloat(setupFeeString) || 0, [setupFeeString]);

  const currencyFormatter = useMemo(() => new Intl.NumberFormat(currency === 'usd' ? 'en-US' : 'tr-TR', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 0,
  }), [currency]);

  const subtotal = numericPrice + numericSetupFee;
  const totalPrice = Math.max(0, subtotal - discountAmount);
  const paymentAmountInCents = Math.round(totalPrice * 100);

  const handleApplyDiscount = () => {
    if (discountCode.toUpperCase() === 'MORTANAS50') {
      const discountValue = subtotal * 0.50;
      setDiscountAmount(discountValue);
      setDiscountMessage('İndirim kodu başarıyla uygulandı!');
    } else {
      setDiscountMessage('Geçersiz indirim kodu.');
      setDiscountAmount(0);
    }
  };
  
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName || !phone || !address) {
        alert('Lütfen tüm zorunlu fatura alanlarını doldurun.');
        return;
    }
    setIsLoading(true);

    try {
        const configRes = await fetch('/api/config');
        const { publishableKey } = await configRes.json();
        
        if (!publishableKey) {
            alert('Stripe yapılandırması henüz tamamlanmadı.');
            setIsLoading(false);
            return;
        }
        
        if (typeof Stripe === 'undefined') {
            alert('Stripe kütüphanesi yüklenemedi. Lütfen sayfayı yenileyin.');
            setIsLoading(false);
            return;
        }
        
        const stripe = Stripe(publishableKey);
        
        // Hash router base URL
        const basePath = window.location.origin + window.location.pathname;
        const success_url_path = basePath + '#/odeme-basarili';
        const cancel_url_path = basePath + '#/odeme-basarisiz';
        
        const response = await fetch('/api/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lineItems: [{
                    price_data: {
                        currency: currency,
                        product_data: {
                            name: `${planName} (${planCycle})`,
                            description: `Mortanas AI Çözümleri - ${pageTitleMap[planType] || 'Paket'}`,
                        },
                        unit_amount: paymentAmountInCents,
                    },
                    quantity: 1,
                }],
                customerEmail: email,
                successUrl: success_url_path,
                cancelUrl: cancel_url_path
            })
        });
        
        const session = await response.json();
        
        if (session.error) {
            alert(`Hata: ${session.error}`);
            setIsLoading(false);
            return;
        }
        
        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });
        
        if (result.error) {
            alert(result.error.message);
            setIsLoading(false);
        }
    } catch (error: any) {
        console.error('Ödeme hatası:', error);
        alert('İşlem sırasında bir hata oluştu. Lütfen bağlantınızı kontrol edip tekrar deneyin.');
        setIsLoading(false);
    }
  };

  const pageTitleMap: { [key: string]: string } = {
      application: 'Uygulama Paketi',
      automation: 'Otomasyon Planı',
      egitim: 'Eğitim Paketi',
      'dergi-abonelik': 'Dergi Aboneliği'
  };

  const cycleTextMap: { [key:string]: string } = {
    monthly: 'Aylık',
    annually: 'Yıllık',
    lifetime: 'Tek Seferlik',
    sixMonths: '6 Aylık',
  };

  const testimonials = [
      { quote: "Bu yatırım, işimizi 2 ayda dönüştürdü. ROI inanılmaz!", name: "Ahmet Y." },
      { quote: "Kurulum süreci çok hızlı ve profesyoneldi. Teşekkürler Mortanas!", name: "Elif K." },
      { quote: "Müşteri desteği inanılmaz. Her sorumuza anında yanıt aldık.", name: "Can T." },
  ];
  const [currentTestimonial] = useState(testimonials[Math.floor(Math.random() * testimonials.length)]);

  return (
    <div className="py-6 sm:py-8 bg-[#0d0414] min-h-screen relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center">
                <i className="fas fa-shield-alt text-purple-500 mr-3"></i>
                Güvenli <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 ml-2">Ödeme Ekranı</span>
            </h1>
          <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto">
            İşletmenizi dönüştürmeye bir adım daha yaklaştınız. Lütfen bilgilerinizi kontrol ederek ödemeyi tamamlayın.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col">
            <form onSubmit={handlePaymentSubmit}>
                <div className="grid lg:grid-cols-2 gap-x-12 gap-y-8">
                  {/* Left Column: Form */}
                  <div className="bg-[#150a2b]/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_40px_rgba(138,43,226,0.1)] border border-purple-500/20 h-fit">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center"><i className="fas fa-file-invoice mr-2 text-purple-400"></i> Fatura Bilgileri</h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Adınız Soyadınız</label>
                                <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-2.5 bg-black/40 rounded-lg border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-sm placeholder-slate-500" required placeholder="Adınız Soyadınız" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Telefon</label>
                                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2.5 bg-black/40 rounded-lg border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-sm placeholder-slate-500" required placeholder="5XX XXX XX XX" />
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">E-posta</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 bg-black/40 rounded-lg border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-sm placeholder-slate-500" required placeholder="fatura@sirketiniz.com" />
                        </div>

                        <div>
                            <label htmlFor="companyName" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Şirket Adı <span className="text-slate-500 normal-case">(İsteğe Bağlı)</span></label>
                            <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-4 py-2.5 bg-black/40 rounded-lg border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-sm placeholder-slate-500" placeholder="Şirketinizin Adı" />
                        </div>
                        
                        <div>
                            <label htmlFor="address" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Adres</label>
                            <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} rows={2} className="w-full px-4 py-2.5 bg-black/40 rounded-lg border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-sm placeholder-slate-500" required placeholder="Mahalle, Sokak, İlçe, İl"></textarea>
                        </div>
                        
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="taxOffice" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">Vergi Dairesi</label>
                                <input type="text" id="taxOffice" value={taxOffice} onChange={(e) => setTaxOffice(e.target.value)} className="w-full px-4 py-2.5 bg-black/40 rounded-lg border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-sm" />
                            </div>
                            <div>
                                <label htmlFor="taxId" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">VKN / TCKN</label>
                                <input type="text" id="taxId" value={taxId} onChange={(e) => setTaxId(e.target.value)} className="w-full px-4 py-2.5 bg-black/40 rounded-lg border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-sm" />
                            </div>
                        </div>
                        
                        <div className="text-xs text-slate-400 bg-black/30 p-3 rounded-lg border border-purple-500/20 flex items-start gap-2">
                            <i className="fas fa-info-circle text-purple-400 mt-0.5"></i>
                            <span>Sonraki adımda Stripe'ın şifreli güvenli ödeme sayfasında kart bilgilerinizi gireceksiniz.</span>
                        </div>
                    </div>
                    
                    <button type="submit" disabled={isLoading || !email || !fullName || !phone || !address} className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3.5 px-6 rounded-lg shadow-[0_0_20px_rgba(138,43,226,0.3)] hover:shadow-[0_0_30px_rgba(138,43,226,0.5)] hover:from-purple-500 hover:to-blue-500 transition-all flex items-center justify-center space-x-3 text-base disabled:opacity-50 disabled:cursor-not-allowed">
                        {isLoading ? (
                        <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                        <i className="fab fa-stripe-s text-xl"></i>
                        )}
                        <span>{isLoading ? 'Yönlendiriliyor...' : 'Stripe ile Güvenli Öde'}</span>
                    </button>
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-[11px] text-slate-400">
                         <div className="flex items-center">
                            <i className="fas fa-lock mr-1.5"></i> 256-bit SSL Şifreleme
                        </div>
                        <span className="hidden sm:inline text-slate-600">•</span>
                        <div className="flex items-center">
                            <i className="fas fa-envelope-circle-check mr-1.5 text-purple-400"></i> Faturanız mailinize iletilecektir
                        </div>
                    </div>
                  </div>
                  
                  {/* Right Column: Order Summary */}
                  <div className="bg-[#150a2b]/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_40px_rgba(138,43,226,0.1)] border border-purple-500/20 h-fit lg:sticky lg:top-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center"><i className="fas fa-shopping-cart mr-2 text-blue-400"></i> Sipariş Özeti</h2>
                    
                    <div className="bg-black/40 border border-purple-500/20 p-4 rounded-xl flex justify-between items-center mb-5">
                        <span className="text-slate-300 font-medium text-sm">{pageTitleMap[planType] || 'Paket'}:</span>
                        <div className="text-right">
                          <p className="font-bold text-white text-base">{planName}</p>
                          <p className="text-xs text-purple-400 font-semibold">{cycleTextMap[planCycle] || 'Abonelik'}</p>
                        </div>
                    </div>
                    
                    <div className="space-y-2.5 text-sm">
                        <div className="flex justify-between items-center text-slate-300">
                            <span>Ara Toplam:</span>
                            <span className="font-medium text-white">{currencyFormatter.format(numericPrice)}</span>
                        </div>
                        {numericSetupFee > 0 && (
                          <div className="flex justify-between items-center text-slate-300">
                            <span>Tek Seferlik Kurulum:</span>
                            <span className="font-medium text-white">{currencyFormatter.format(numericSetupFee)}</span>
                          </div>
                        )}
                         {discountAmount > 0 && (
                          <div className="flex justify-between items-center text-emerald-400">
                            <span>İndirim (MORTANAS50):</span>
                            <span className="font-medium">-{currencyFormatter.format(discountAmount)}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center text-xl font-black text-white pt-4 border-t border-purple-500/30 mt-4">
                            <span>TOPLAM</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{currencyFormatter.format(totalPrice)}</span>
                        </div>
                    </div>
                    
                    {/* Discount Code */}
                    <div className="mt-6 pt-5 border-t border-purple-500/30">
                        <label htmlFor="discount" className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wide">İndirim Kodu</label>
                        <div className="flex space-x-2">
                           <input 
                                type="text" 
                                id="discount"
                                value={discountCode}
                                onChange={(e) => { setDiscountCode(e.target.value); setDiscountMessage(''); }}
                                placeholder="Kodunuzu girin"
                                className="flex-1 w-full px-4 py-2 bg-black/40 rounded-lg border border-purple-500/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-sm" 
                            />
                           <button type="button" onClick={handleApplyDiscount} className="px-5 py-2 bg-purple-600/20 text-purple-400 font-bold text-sm tracking-wide rounded-lg hover:bg-purple-600/40 transition-colors border border-purple-500/30">Uygula</button>
                        </div>
                        {discountMessage && <p className={`text-xs mt-2 font-medium ${discountAmount > 0 ? 'text-emerald-400' : 'text-red-400'}`}>{discountMessage}</p>}
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-br from-purple-900/40 to-blue-900/20 rounded-xl border border-purple-500/20">
                        <div className="flex items-center">
                            <img src={currentTestimonial.name.includes("Ahmet") ? 'https://randomuser.me/api/portraits/men/44.jpg' : 'https://randomuser.me/api/portraits/women/44.jpg'} alt={currentTestimonial.name} className="w-10 h-10 rounded-full border border-purple-500/50 mr-3" />
                            <div>
                                <p className="text-xs italic text-slate-300">"{currentTestimonial.quote}"</p>
                                <p className="text-[11px] font-bold text-white mt-1 uppercase tracking-wider">{currentTestimonial.name}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-purple-500/30 pt-5">
                        <div className="flex items-center space-x-3 mb-4">
                            <i className="fas fa-shield-check text-2xl text-emerald-400"></i>
                            <div>
                                <h4 className="font-bold text-white text-sm">14 Gün İade Garantisi</h4>
                                <p className="text-xs text-slate-400">Sorgusuz, sualsiz anında iade.</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center space-x-5 opacity-60">
                            <i className="fab fa-cc-visa text-3xl text-white"></i>
                            <i className="fab fa-cc-mastercard text-3xl text-white"></i>
                            <i className="fab fa-cc-amex text-3xl text-white"></i>
                            <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">Stripe Destekli</span>
                        </div>
                    </div>
                  </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default OdemePage;