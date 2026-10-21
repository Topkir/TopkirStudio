// Uygulama kataloğu. Saf veri: hem React tarafı hem de build sonrası
// rota/sitemap üreten script (scripts/postbuild-routes.mjs) buradan okur.
// `features[].icon` lucide-react bileşen adıdır (UI katmanında eşlenir).
// Mağaza linki henüz yoksa `null` bırakın; buton "Yakında" olarak görünür.
// `en` alanı olan uygulamaların İngilizce sayfaları da üretilir (/en/apps/...).

export const SITE_URL = 'https://topkirstudio.com';
export const CONTACT_EMAIL = 'ahmettopkir@topkirstudio.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/a_topkir/';

export const apps = [
  {
    slug: 'firuze',
    name: 'Firuze',
    subtitle: 'Namaz Vakti & Zikir',
    category: 'Yaşam · Maneviyat',
    status: 'yakinda',
    tagline: 'Vaktin, zikrin ve ayetin — tek bir sakin yerde.',
    description:
      'Diyanet yöntemiyle hesaplanan namaz vakitleri, ezan bildirimleri, zikirmatik, Kur\'an okuma ve ana ekran widget\'ları.',
    longDescription:
      'Firuze, günlük ibadet ritmini sade ve huzurlu bir arayüzde toplar. Vakitler internete ihtiyaç duymadan doğrudan cihazında hesaplanır; hesap açman gerekmez, verilerin telefonundan çıkmaz. İznik çinilerinden ilham alan renkleri ve yıldız desenleriyle hem göze hem gönle hitap eder.',
    pressShort: 'Firuze; namaz vakitleri, ezan bildirimleri, zikirmatik ve Kur\'an\'ı hesap, reklam ve izleme olmadan tek bir sakin uygulamada toplar.',
    features: [
      { icon: 'Clock', title: 'Namaz vakitleri', text: 'Diyanet yöntemiyle, internetsiz ve cihazda hesaplanır. Dünyanın her yerinde çalışır.' },
      { icon: 'BellRing', title: 'Ezan bildirimleri', text: 'Her vakit için ayrı ayarlanabilen, vaktinden önce hatırlatan bildirimler.' },
      { icon: 'CircleDot', title: 'Zikirmatik', text: 'Hazır zikirler veya kendi zikirlerin; 33-99-100 hedefleri, dokunsal geri bildirim ve ilerleme takibi.' },
      { icon: 'BookOpen', title: 'Kur\'an-ı Kerim', text: 'Mushaf sayfa görünümü, okunuş ve kaldığın yerden devam.' },
      { icon: 'LayoutGrid', title: 'Ana ekran widget\'ları', text: 'Namaz vakitleri ve zikir sayacı ana ekranında. Widget\'lar ücretsiz.' },
      { icon: 'ShieldCheck', title: 'Odaklan', text: 'Vakit girdiğinde seçtiğin uygulamalar kilitlenir; namazını kıldığını işaretleyince veya 33 zikri tamamlayınca açılır (iOS).' },
    ],
    highlights: ['Hesap yok', 'Reklam yok', 'İzleme yok', '7 dil'],
    faq: [
      { q: 'Vakitler neden Diyanet takviminden 1–2 dakika farklı olabiliyor?', a: 'Firuze vakitleri konumuna göre astronomik formüllerle doğrudan cihazında hesaplar. Diyanet\'in yayımladığı takvim ilçe merkezlerine göre hazırlandığı için bulunduğun noktaya göre birkaç dakikalık fark oluşabilir. İmsak ve iftar gibi ihtiyat gerektiren durumlarda resmî takvimi esas almanı öneririz.' },
      { q: 'Ezan bildirimleri gelmiyor, ne yapmalıyım?', a: 'iPhone\'da Ayarlar › Bildirimler › Firuze bölümünden bildirimlere izin verildiğini kontrol et. Android\'de bildirim iznine ek olarak "Alarmlar ve hatırlatıcılar" (tam zamanlı alarm) iznini aç ve Firuze için pil optimizasyonunu kapat; bazı üreticiler arka plandaki uygulamaları kapatabiliyor. Ardından uygulamayı bir kez açman bildirimleri yeniden planlar.' },
      { q: 'Konum izni vermeden kullanabilir miyim?', a: 'Evet. Konum izni vermezsen şehrini listeden arayıp seçebilirsin. İzin verirsen konumun yalnızca vakit hesabı için cihazda kullanılır, hiçbir yere gönderilmez.' },
      { q: 'Ana ekrana widget nasıl eklerim?', a: 'iPhone: ana ekranda boş bir alana basılı tut, sol üstteki "+" simgesine dokun, listeden Firuze\'yi seç ve istediğin widget\'ı ekle. Android: ana ekranda boş bir alana basılı tut, "Widget\'lar"a dokun, Firuze\'yi bul ve widget\'ı sürükle.' },
      { q: 'Odaklan özelliği neden yalnızca iPhone\'da?', a: 'Odaklan, Apple\'ın Ekran Süresi altyapısını kullanır ve ilk kullanımda bu izni ister. Android sürümü üzerinde çalışıyoruz.' },
      { q: 'Premium aboneliğimi nasıl iptal ederim veya geri yüklerim?', a: 'İptal: iPhone\'da Ayarlar › Apple Kimliği › Abonelikler; Android\'de Google Play › Profil › Ödemeler ve abonelikler. Uygulamayı silmek aboneliği iptal etmez. Yeni bir cihazda Premium ekranındaki "Satın alımları geri yükle" ile aynı mağaza hesabındaki aboneliğini geri getirebilirsin.' },
      { q: 'Verilerim nerede saklanıyor?', a: 'Firuze\'de hesap yok. Ayarların, zikir sayaçların ve okuma ilerlemen yalnızca cihazında saklanır; uygulamayı sildiğinde silinir.' },
    ],
    platforms: ['iOS', 'Android'],
    stores: { appStore: null, googlePlay: null },
    socials: [{ type: 'tiktok', url: 'https://www.tiktok.com/@firuzeapp', handle: '@firuzeapp' }],
    // Firuze paleti: gece mavisi, firuze, altın.
    accent: '#2BB3A8',
    accent2: '#D4AF6A',
    surface: '#0B1530',
    palette: [
      { name: 'Gece mavisi', hex: '#0B1530' },
      { name: 'Firuze', hex: '#2BB3A8' },
      { name: 'Altın', hex: '#D4AF6A' },
      { name: 'Fildişi', hex: '#F6F1E7' },
    ],
    icon: '/apps/firuze/icon.png',
    iconLarge: '/apps/firuze/icon-1024.png',
    mockup: 'firuze',
    screenshots: [],
    updated: '21 Ekim 2026',
    en: {
      subtitle: 'Prayer Times & Dhikr',
      category: 'Lifestyle · Spirituality',
      tagline: 'Your prayers, dhikr and verses — in one calm place.',
      description:
        'Prayer times calculated with the Diyanet method, adhan notifications, a dhikr counter, Quran reading and home screen widgets.',
      longDescription:
        'Firuze brings your daily rhythm of worship into a calm, simple interface. Prayer times are calculated right on your device without needing the internet; no account is required and your data never leaves your phone. Its colors and star patterns, inspired by İznik tiles, are made to please both the eye and the heart.',
      pressShort: 'Firuze brings prayer times, adhan notifications, a dhikr counter and the Quran together in one calm app — with no account, no ads and no tracking.',
      features: [
        { icon: 'Clock', title: 'Prayer times', text: 'Calculated on your device with the Diyanet method, fully offline. Works anywhere in the world.' },
        { icon: 'BellRing', title: 'Adhan notifications', text: 'Per-prayer notification settings, with optional reminders before each prayer.' },
        { icon: 'CircleDot', title: 'Dhikr counter', text: 'Built-in or your own dhikr; 33-99-100 targets, haptic feedback and progress tracking.' },
        { icon: 'BookOpen', title: 'The Holy Quran', text: 'Mushaf page view, transliteration and continue where you left off.' },
        { icon: 'LayoutGrid', title: 'Home screen widgets', text: 'Prayer times and your dhikr counter on the home screen. Widgets are free.' },
        { icon: 'ShieldCheck', title: 'Focus', text: 'The apps you choose lock when prayer time begins and unlock when you mark your prayer done or complete 33 dhikr (iOS).' },
      ],
      highlights: ['No account', 'No ads', 'No tracking', '7 languages'],
      faq: [
        { q: 'Why can times differ by 1–2 minutes from the official calendar?', a: 'Firuze calculates prayer times on your device with astronomical formulas for your exact location. Official calendars are prepared for town centers, so a difference of a few minutes is normal. For times that require caution, such as suhoor and iftar, we recommend following your official local calendar.' },
        { q: 'I\'m not receiving adhan notifications. What should I do?', a: 'On iPhone, check Settings › Notifications › Firuze. On Android, allow notifications and the "Alarms & reminders" (exact alarm) permission, and turn off battery optimization for Firuze; some manufacturers stop background apps. Opening the app once reschedules notifications.' },
        { q: 'Can I use Firuze without location permission?', a: 'Yes. Without permission you can search for and pick your city. If you allow it, your location is used only on your device to calculate prayer times and is never sent anywhere.' },
        { q: 'How do I add a widget?', a: 'iPhone: touch and hold an empty area of the home screen, tap "+" at the top left, choose Firuze and add a widget. Android: touch and hold an empty area, tap "Widgets", find Firuze and drag a widget to the home screen.' },
        { q: 'Why is Focus only available on iPhone?', a: 'Focus uses Apple\'s Screen Time framework and asks for that permission on first use. We are working on an Android version.' },
        { q: 'How do I cancel or restore Premium?', a: 'To cancel: on iPhone go to Settings › Apple ID › Subscriptions; on Android open Google Play › Profile › Payments & subscriptions. Deleting the app does not cancel your subscription. On a new device, use "Restore purchases" on the Premium screen with the same store account.' },
        { q: 'Where is my data stored?', a: 'Firuze has no accounts. Your settings, dhikr counts and reading progress are stored only on your device and are deleted when you delete the app.' },
      ],
    },
  },
  {
    slug: 'tabula',
    name: 'Tabula',
    subtitle: 'Tabu Kelime Oyunu',
    category: 'Oyun · Kelime',
    status: 'yayinda',
    tagline: 'Tabu, ama cebinde.',
    description:
      'Tek kişilik veya takım modunda oyna. Süre, tabu ve pas haklarını özelleştir, skorlarını takip et.',
    longDescription:
      'Tabula, klasik tabu kelime oyununu modern ve akıcı bir arayüzle telefonuna getiriyor. Arkadaşlarınla takımlar kur, süreyi ve pas haklarını kendi kurallarına göre ayarla, her turun sonucunu kaydet. İster kalabalık bir parti gecesinde ister ikili bir maçta — Tabula her ortamda hazır.',
    pressShort: 'Tabula, klasik tabu kelime oyununu takım modu ve özelleştirilebilir kurallarla telefona taşıyan bir parti oyunudur.',
    features: [
      { icon: 'Users', title: 'Takım modu', text: 'Tek kişilik veya takımlar hâlinde oyna, sırayı Tabula tutsun.' },
      { icon: 'Timer', title: 'Kendi kuralların', text: 'Süre, tabu ve pas hakkı ayarlarını dilediğin gibi özelleştir.' },
      { icon: 'History', title: 'Skor geçmişi', text: 'Oyun geçmişini kaydet, kimin kazandığı hiç tartışma olmasın.' },
      { icon: 'Sparkles', title: 'Akıcı arayüz', text: 'Hızlı, sade ve parti ortamında bile kolay kullanılan tasarım.' },
    ],
    highlights: ['Parti oyunu', 'Takım modu', 'Türkçe kelimeler'],
    faq: [
      { q: 'Takım modunda nasıl oynanır?', a: 'Oyun kurulumunda takımları oluştur, süreyi ve pas/tabu haklarını belirle. Her turda bir oyuncu kartı anlatır, takım arkadaşları tahmin eder; Tabula sırayı ve skoru otomatik tutar.' },
      { q: 'Reklamları nasıl kaldırabilirim?', a: 'Tabula Premium ile reklamsız oynayabilir, Premium kelime paketlerine ve yeni temalara erişebilirsin.' },
      { q: 'Premium aboneliğimi nasıl iptal ederim?', a: 'iPhone\'da Ayarlar › Apple Kimliği › Abonelikler; Android\'de Google Play › Profil › Ödemeler ve abonelikler. Uygulamayı silmek aboneliği iptal etmez.' },
      { q: 'Satın alımımı yeni telefonuma nasıl taşırım?', a: 'Aynı mağaza hesabıyla giriş yaptıktan sonra uygulamadaki "Satın Alımları Geri Yükle" seçeneğini kullan.' },
      { q: 'Bir kelimede hata buldum, nasıl bildiririm?', a: 'Kelimeyi ve kartı bize e-posta ile gönder; bir sonraki güncellemede düzeltelim.' },
    ],
    platforms: ['iOS', 'Android'],
    stores: {
      appStore: 'https://apps.apple.com/app/id6789824875',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.tabu.tabulaa',
    },
    socials: [],
    accent: '#FB923C',
    accent2: '#F43F5E',
    surface: '#1A1210',
    palette: [
      { name: 'Turuncu', hex: '#FB923C' },
      { name: 'Gül', hex: '#F43F5E' },
      { name: 'Koyu', hex: '#1A1210' },
    ],
    icon: null,
    iconLarge: null,
    mockup: 'tabula',
    screenshots: [],
    updated: '30 Temmuz 2026',
  },
];

export const getApp = (slug) => apps.find((a) => a.slug === slug);

// Uygulamanın verilen dildeki görünümü; çevirisi olmayan alanlar Türkçe kalır.
export const localize = (app, lang) => (lang === 'en' && app.en ? { ...app, ...app.en, lang } : { ...app, lang: 'tr' });

// Sayfa yolları. İngilizce yollar /en/apps/... altında.
const base = (app, lang) => (lang === 'en' ? `/en/apps/${app.slug}` : `/uygulamalar/${app.slug}`);
export const appPath = (app, lang = 'tr') => base(app, lang);
export const privacyPath = (app, lang = 'tr') => `${base(app, lang)}/${lang === 'en' ? 'privacy' : 'gizlilik'}`;
export const termsPath = (app, lang = 'tr') => `${base(app, lang)}/${lang === 'en' ? 'terms' : 'kullanim-sartlari'}`;
export const supportPath = (app, lang = 'tr') => `${base(app, lang)}/${lang === 'en' ? 'support' : 'destek'}`;

// TR ⇄ EN eşdeğer yol (çevirisi yoksa null).
export function alternatePath(pathname) {
  const m = pathname.match(/^\/(?:uygulamalar|en\/apps)\/([^/]+)(?:\/([^/]+))?\/?$/);
  if (!m) return null;
  const app = getApp(m[1]);
  if (!app?.en) return null;
  const toEn = !pathname.startsWith('/en/');
  const lang = toEn ? 'en' : 'tr';
  const kind = { gizlilik: 'privacy', privacy: 'privacy', 'kullanim-sartlari': 'terms', terms: 'terms', destek: 'support', support: 'support' }[m[2]];
  if (!m[2]) return appPath(app, lang);
  return { privacy: privacyPath, terms: termsPath, support: supportPath }[kind]?.(app, lang) ?? null;
}
