import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [checkoutUrl, setCheckoutUrl] = useState('');
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
                            description: `Mortanas AI - ${pageTitleMap[planType] || 'Paket'}`,
                        },
                        unit_amount: Math.round(totalPrice * 100),
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
        
        if (session.url) {
            try {
                // Try to open in a new tab first, typically works better from iframes
                const newWindow = window.open(session.url, '_blank', 'noopener,noreferrer');
                
                // If pop-up blocker might have prevented it, show link on screen
                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    setCheckoutUrl(session.url);
                    setIsLoading(false);
                }
            } catch (e) {
                // Fallback direct link
                setCheckoutUrl(session.url);
                setIsLoading(false);
            }
        } else {
            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });
            
            if (result.error) {
                alert(result.error.message);
                setIsLoading(false);
            }
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

  return (
    <div className="py-12 sm:py-24 bg-[#0a0510] min-h-screen relative overflow-hidden font-sans">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-700/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
      


      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 w-full max-w-2xl"
        >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold mb-4 uppercase tracking-widest">
                <i className="fas fa-lock"></i>
                <span>256-Bit SSL Şifreleme</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Güvenli <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Checkout</span>
            </h1>
          <p className="text-sm md:text-base text-slate-400">
            Premium dijital deneyime sadece bir adım kaldı. Bilgilerinizi doldurun ve işleminizi tamamlayın.
          </p>
        </motion.div>

        <div className="w-full max-w-5xl">
            <form onSubmit={handlePaymentSubmit}>
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-7 bg-[#130922]/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-purple-500/20 shadow-[0_0_50px_rgba(138,43,226,0.05)] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <h2 className="text-lg font-bold text-white mb-6 flex items-center pb-4 border-b border-purple-500/20">
                        <span className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center mr-3 border border-purple-500/30">
                            <i className="fas fa-user text-purple-400 text-sm"></i>
                        </span>
                        Fatura ve İletişim
                    </h2>
                    
                    <div className="space-y-5 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label htmlFor="fullName" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Adınız Soyadınız</label>
                                <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full px-4 py-3 bg-[#0a0510] rounded-xl border border-purple-500/20 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm placeholder-slate-600" required placeholder="John Doe" />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="phone" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Telefon</label>
                                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 bg-[#0a0510] rounded-xl border border-purple-500/20 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm placeholder-slate-600" required placeholder="+90 (555) 000 00 00" />
                            </div>
                        </div>
                        
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">E-posta Adresi</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-[#0a0510] rounded-xl border border-purple-500/20 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm placeholder-slate-600" required placeholder="ornek@sirketiniz.com" />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="companyName" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Şirket Ünvanı <span className="opacity-50 lowercase normal-case">İsteğe Bağlı</span></label>
                            <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-4 py-3 bg-[#0a0510] rounded-xl border border-purple-500/20 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm placeholder-slate-600" placeholder="Mortanas Yazılım A.Ş." />
                        </div>
                        
                        <div className="space-y-1.5">
                            <label htmlFor="address" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Açık Adres</label>
                            <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} rows={2} className="w-full px-4 py-3 bg-[#0a0510] rounded-xl border border-purple-500/20 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm placeholder-slate-600 resize-none" required placeholder="Mahalle, Sokak, İlçe, İl, Ülke"></textarea>
                        </div>
                        
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label htmlFor="taxOffice" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Vergi Dairesi</label>
                                <input type="text" id="taxOffice" value={taxOffice} onChange={(e) => setTaxOffice(e.target.value)} className="w-full px-4 py-3 bg-[#0a0510] rounded-xl border border-purple-500/20 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm placeholder-slate-600" placeholder="İl / İlçe VD" />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="taxId" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Vergi No / TCKN</label>
                                <input type="text" id="taxId" value={taxId} onChange={(e) => setTaxId(e.target.value)} className="w-full px-4 py-3 bg-[#0a0510] rounded-xl border border-purple-500/20 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm placeholder-slate-600" placeholder="10 Haneli VKN" />
                            </div>
                        </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-8"
                  >
                    <div className="bg-[#130922]/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-[0_0_40px_rgba(138,43,226,0.1)] border border-purple-500/20 relative overflow-hidden">
                        <h2 className="text-lg font-bold text-white mb-6 flex items-center pb-4 border-b border-purple-500/20">
                            <span className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center mr-3 border border-blue-500/30">
                                <i className="fas fa-shopping-bag text-blue-400 text-sm"></i>
                            </span>
                            Sipariş Özeti
                        </h2>
                        
                        <div className="bg-[#0a0510] border border-blue-500/10 p-5 rounded-2xl flex justify-between items-center mb-6">
                            <div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{pageTitleMap[planType] || 'Paket'}</span>
                                <p className="font-bold text-white text-base mt-1">{planName}</p>
                            </div>
                            <div className="bg-purple-600/20 border border-purple-500/30 px-3 py-1.5 rounded-lg text-right">
                                <p className="text-[11px] text-purple-300 font-bold uppercase tracking-wider">{cycleTextMap[planCycle] || 'Abonelik'}</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Ara Toplam</span>
                                <span className="font-semibold text-white">{currencyFormatter.format(numericPrice)}</span>
                            </div>
                            {numericSetupFee > 0 && (
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Tek Seferlik Kurulum</span>
                                <span className="font-semibold text-white">{currencyFormatter.format(numericSetupFee)}</span>
                            </div>
                            )}
                            {discountAmount > 0 && (
                            <div className="flex justify-between items-center text-sm text-emerald-400">
                                <span>İndirim (MORTANAS50)</span>
                                <span className="font-bold">-{currencyFormatter.format(discountAmount)}</span>
                            </div>
                            )}
                        </div>

                        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-900/40 to-blue-900/20 rounded-2xl border border-purple-500/30 mb-6">
                            <span className="text-sm font-bold text-white">Genel Toplam</span>
                            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{currencyFormatter.format(totalPrice)}</span>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="discount" className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">İndirim Kodu</label>
                            <div className="flex space-x-2">
                            <input 
                                    type="text" 
                                    id="discount"
                                    value={discountCode}
                                    onChange={(e) => { setDiscountCode(e.target.value); setDiscountMessage(''); }}
                                    placeholder="Kodu buraya girin"
                                    className="flex-1 w-full px-4 py-2.5 bg-[#0a0510] rounded-xl border border-purple-500/20 text-white focus:outline-none focus:border-purple-500/50 transition-all text-sm" 
                                />
                            <button type="button" onClick={handleApplyDiscount} className="px-5 py-2.5 bg-blue-600/10 text-blue-400 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-blue-600/20 transition-colors border border-blue-500/20">Uygula</button>
                            </div>
                            {discountMessage && <p className={`text-xs mt-2 font-medium ${discountAmount > 0 ? 'text-emerald-400' : 'text-red-400'}`}>{discountMessage}</p>}
                        </div>

                        {checkoutUrl ? (
                            <div className="space-y-4">
                                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                                    <p className="text-sm text-yellow-200 mb-3 text-center">
                                        Tarayıcınız otomatik yönlendirmeyi engellemiş olabilir. Lütfen aşağıdaki butona tıklayarak ödeme sayfasına gidin.
                                    </p>
                                    <a 
                                        href={checkoutUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                                    >
                                        <span>Ödeme Sayfasına Git</span>
                                        <i className="fas fa-external-link-alt ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <button 
                                type="submit" 
                                disabled={isLoading} 
                                className="w-full relative group overflow-hidden bg-white text-slate-900 font-bold py-4 px-6 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center space-x-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {isLoading ? (
                                    <i className="fas fa-spinner fa-spin relative z-10"></i>
                                ) : (
                                    <i className="fab fa-stripe-s text-xl relative z-10 text-[#635BFF]"></i>
                                )}
                                <span className="relative z-10">{isLoading ? 'Yönlendiriliyor...' : 'Stripe ile Güvenli Öde'}</span>
                            </button>
                        )}

                        <div className="mt-5 flex items-center justify-center space-x-2 text-[11px] text-slate-400 font-medium">
                            <i className="fas fa-lock text-purple-400"></i>
                            <span>Ödemeniz 256-bit ile korunmaktadır</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#130922]/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 flex flex-col items-center text-center">
                            <i className="fas fa-undo text-emerald-400 text-xl mb-2"></i>
                            <h4 className="text-xs font-bold text-white mb-1">14 Gün İade</h4>
                            <p className="text-[10px] text-slate-400 leading-tight">Sorgusuz tam para iadesi garantisi.</p>
                        </div>
                        <div className="bg-[#130922]/60 backdrop-blur-md rounded-2xl border border-white/5 p-4 flex flex-col items-center text-center">
                            <i className="fas fa-headset text-blue-400 text-xl mb-2"></i>
                            <h4 className="text-xs font-bold text-white mb-1">7/24 Destek</h4>
                            <p className="text-[10px] text-slate-400 leading-tight">Uzman ekibimiz her zaman yanınızda.</p>
                        </div>
                    </div>
                  </motion.div>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default OdemePage;
