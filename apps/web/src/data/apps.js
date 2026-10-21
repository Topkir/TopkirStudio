// Uygulama kataloğu. Saf veri: hem React tarafı hem de build sonrası
// rota/sitemap üreten script (scripts/postbuild-routes.mjs) buradan okur.
// `features[].icon` lucide-react bileşen adıdır (UI katmanında eşlenir).
// Mağaza linki henüz yoksa `null` bırakın; buton "Yakında" olarak görünür.

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
    features: [
      { icon: 'Clock', title: 'Namaz vakitleri', text: 'Diyanet yöntemiyle, internetsiz ve cihazda hesaplanır. Dünyanın her yerinde çalışır.' },
      { icon: 'BellRing', title: 'Ezan bildirimleri', text: 'Her vakit için ayrı ayarlanabilen, vaktinden önce hatırlatan bildirimler.' },
      { icon: 'CircleDot', title: 'Zikirmatik', text: 'Hazır zikirler veya kendi zikirlerin; 33-99-100 hedefleri, dokunsal geri bildirim ve ilerleme takibi.' },
      { icon: 'BookOpen', title: 'Kur\'an-ı Kerim', text: 'Mushaf sayfa görünümü, okunuş ve kaldığın yerden devam.' },
      { icon: 'LayoutGrid', title: 'Ana ekran widget\'ları', text: 'Namaz vakitleri ve zikir sayacı ana ekranında. Widget\'lar ücretsiz.' },
      { icon: 'ShieldCheck', title: 'Odaklan', text: 'Vakit girdiğinde seçtiğin uygulamaları kısa süre kilitleyerek namaza odaklan (iOS).' },
    ],
    highlights: ['Hesap yok', 'Reklam yok', 'İzleme yok', '7 dil'],
    platforms: ['iOS', 'Android'],
    stores: { appStore: null, googlePlay: null },
    // Firuze paleti: gece mavisi, firuze, altın.
    accent: '#2BB3A8',
    accent2: '#D4AF6A',
    surface: '#0B1530',
    icon: '/apps/firuze/icon.png',
    mockup: 'firuze',
    screenshots: [],
    legal: { privacy: true, terms: true },
    updated: '21 Ekim 2026',
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
    features: [
      { icon: 'Users', title: 'Takım modu', text: 'Tek kişilik veya takımlar hâlinde oyna, sırayı Tabula tutsun.' },
      { icon: 'Timer', title: 'Kendi kuralların', text: 'Süre, tabu ve pas hakkı ayarlarını dilediğin gibi özelleştir.' },
      { icon: 'History', title: 'Skor geçmişi', text: 'Oyun geçmişini kaydet, kimin kazandığı hiç tartışma olmasın.' },
      { icon: 'Sparkles', title: 'Akıcı arayüz', text: 'Hızlı, sade ve parti ortamında bile kolay kullanılan tasarım.' },
    ],
    highlights: ['Parti oyunu', 'Takım modu', 'Türkçe kelimeler'],
    platforms: ['iOS', 'Android'],
    stores: {
      appStore: 'https://apps.apple.com/app/id6789824875',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.tabu.tabulaa',
    },
    accent: '#FB923C',
    accent2: '#F43F5E',
    surface: '#1A1210',
    icon: null,
    mockup: 'tabula',
    screenshots: [],
    legal: { privacy: true, terms: true },
    updated: '30 Temmuz 2026',
  },
];

export const getApp = (slug) => apps.find((a) => a.slug === slug);

export const appPath = (app) => `/uygulamalar/${app.slug}`;
export const privacyPath = (app) => `${appPath(app)}/gizlilik`;
export const termsPath = (app) => `${appPath(app)}/kullanim-sartlari`;
