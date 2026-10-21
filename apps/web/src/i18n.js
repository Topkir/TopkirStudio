import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Arayüz metinleri. Site Türkçe; İngilizce yalnızca çevirisi olan uygulama
// sayfalarında (/en/...) kullanılır.
const strings = {
  tr: {
    soon: 'Yakında',
    live: 'Yayında',
    download: 'İndir',
    getItOn: 'Şimdi edinin',
    allApps: 'Tüm uygulamalar',
    featuresEyebrow: '// Özellikler',
    featuresTitle: 'Neler sunuyor?',
    downloadNow: (n) => `${n} — hemen indir`,
    comingSoonTitle: (n) => `${n} çok yakında`,
    liveBody: 'App Store ve Google Play\'de ücretsiz.',
    soonBody: 'App Store ve Google Play\'e geliyor. Mağaza bağlantıları burada yayınlanacak.',
    privacy: 'Gizlilik Politikası',
    terms: 'Kullanım Şartları',
    support: 'Destek',
    followTikTok: 'TikTok\'ta takip et',
    legalEyebrow: '// Yasal',
    lastUpdated: 'Son güncelleme',
    toc: 'İçindekiler',
    contact: 'İletişim',
    contactBody: 'Sorularınız ve talepleriniz için:',
    supportEyebrow: '// Destek',
    supportTitle: (n) => `${n} Destek`,
    supportLead: 'Sık sorulan sorular aşağıda. Cevabını bulamazsan bize yaz, genellikle 1–2 gün içinde dönüyoruz.',
    writeUs: 'Bize yazın',
    writeUsHint: 'Mesajına cihaz modelini, işletim sistemi sürümünü ve uygulama sürümünü eklersen daha hızlı yardımcı olabiliriz.',
    faq: 'Sık sorulan sorular',
    supportSubject: (n) => `${n} destek`,
    studioTagline: 'Bağımsız mobil uygulama stüdyosu.',
    mailApp: 'E-posta uygulaması',
    copyAddress: 'Adresi kopyala',
    copied: 'Kopyalandı',
  },
  en: {
    soon: 'Coming soon',
    live: 'Available',
    download: 'Download on the',
    getItOn: 'Get it on',
    allApps: 'All apps',
    featuresEyebrow: '// Features',
    featuresTitle: 'What\'s inside?',
    downloadNow: (n) => `Get ${n} now`,
    comingSoonTitle: (n) => `${n} is coming soon`,
    liveBody: 'Free on the App Store and Google Play.',
    soonBody: 'Coming to the App Store and Google Play. Store links will be published here.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    support: 'Support',
    followTikTok: 'Follow on TikTok',
    legalEyebrow: '// Legal',
    lastUpdated: 'Last updated',
    toc: 'Contents',
    contact: 'Contact',
    contactBody: 'For questions and requests:',
    supportEyebrow: '// Support',
    supportTitle: (n) => `${n} Support`,
    supportLead: 'Frequently asked questions are below. If you can\'t find an answer, write to us — we usually reply within 1–2 days.',
    writeUs: 'Email us',
    writeUsHint: 'Including your device model, OS version and app version helps us help you faster.',
    faq: 'Frequently asked questions',
    supportSubject: (n) => `${n} support`,
    studioTagline: 'Independent mobile app studio.',
    mailApp: 'Mail app',
    copyAddress: 'Copy address',
    copied: 'Copied',
  },
};

export function useLang() {
  const { pathname } = useLocation();
  const lang = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'tr';
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return lang;
}

export const t = (lang) => strings[lang] ?? strings.tr;
