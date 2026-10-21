// Yasal metinler. Her belge: başlık, güncelleme tarihi, giriş ve bölümler.
// Bölüm gövdesi: düz metin paragrafları veya { ul: [...] } listeleri.
// Metni değiştirdiğinizde `updated` tarihini de güncelleyin.

const controller = 'Topkir Studio (Ahmet Topkir)';

const kvkkRights = {
  heading: 'Haklarınız (KVKK ve GDPR)',
  body: [
    '6698 sayılı Kişisel Verilerin Korunması Kanunu\'nun 11. maddesi ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kapsamında; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme, işlemeye itiraz etme ve zarara uğramanız hâlinde giderilmesini talep etme haklarına sahipsiniz.',
    'Talebinizi aşağıdaki e-posta adresine iletebilirsiniz; en geç 30 gün içinde yanıtlanır. Türkiye\'de Kişisel Verileri Koruma Kurulu\'na, AB\'de ise kendi ülkenizin veri koruma otoritesine şikâyette bulunma hakkınız saklıdır.',
  ],
};

const storeSubscriptions = (appName) => ({
  heading: 'Premium abonelik',
  body: [
    `${appName} Premium, uygulama içinden satın alınabilen isteğe bağlı bir aboneliktir. Ödeme, satın alma onayı sırasında Apple App Store veya Google Play hesabınızdan tahsil edilir.`,
    { ul: [
      'Abonelik, mevcut dönem bitmeden en az 24 saat önce iptal edilmediği sürece aynı süre ve ücretle otomatik olarak yenilenir.',
      'Yenileme ücreti, dönem bitmeden önceki 24 saat içinde hesabınızdan tahsil edilir.',
      'Aboneliğinizi App Store veya Google Play hesap ayarlarınızdan yönetebilir ve iptal edebilirsiniz. Uygulamayı silmek aboneliği iptal etmez.',
      'Ücretsiz deneme sunuluyorsa, deneme bitmeden iptal etmezseniz ücretli dönem başlar; denemenin kullanılmayan kısmı satın alma ile sona erer.',
      'Satın alımlarınızı aynı mağaza hesabıyla "Satın Alımları Geri Yükle" seçeneğiyle geri yükleyebilirsiniz.',
      'İade talepleri Apple veya Google\'ın kendi iade politikalarına tabidir.',
    ] },
  ],
});

const commonTermsTail = (appName) => [
  {
    heading: 'Kabul edilebilir kullanım',
    body: [
      `${appName} uygulamasını yasalara uygun şekilde kullanmayı; uygulamayı kopyalamamayı, tersine mühendislik yapmamayı, değiştirilmiş sürümlerini dağıtmamayı ve hizmeti kötüye kullanmamayı kabul edersiniz.`,
    ],
  },
  {
    heading: 'Fikri mülkiyet',
    body: [
      'Uygulamadaki yazılım, tasarım, grafikler ve logolar Topkir Studio\'ya aittir ve telif hakkıyla korunur. Üçüncü taraf içerikler kendi lisansları kapsamında kullanılır; kaynaklar uygulama içinde belirtilir.',
    ],
  },
  {
    heading: 'Sorumluluğun sınırlandırılması',
    body: [
      'Uygulama "olduğu gibi" sunulur. Kesintisiz veya hatasız çalışacağı garanti edilmez. Yürürlükteki hukukun izin verdiği ölçüde, uygulamanın kullanımından doğan dolaylı zararlardan sorumluluk kabul edilmez.',
    ],
  },
  {
    heading: 'Değişiklikler ve uygulanacak hukuk',
    body: [
      'Bu şartlar zaman zaman güncellenebilir; güncel sürüm her zaman bu sayfada yayımlanır. Önemli değişiklikler uygulama içinde duyurulur.',
      'Bu şartlar Türkiye Cumhuriyeti hukukuna tabidir. Tüketici olarak yaşadığınız ülkenin emredici tüketici hukuku hükümleri saklıdır.',
    ],
  },
];

export const legalDocs = {
  'firuze-privacy': {
    title: 'Firuze Gizlilik Politikası',
    updated: '21 Ekim 2026',
    intro: [
      'Firuze, kişisel verilerinizi toplamamak üzere tasarlandı. Hesap açmanız gerekmez, reklam veya izleme (tracking) araçları kullanılmaz ve verileriniz satılmaz. Bu politika, uygulamanın hangi bilgileri cihazınızda nasıl kullandığını ve hangi durumlarda üçüncü taraf hizmetlerle iletişim kurduğunu açıklar.',
      `Veri sorumlusu: ${controller}.`,
    ],
    sections: [
      {
        heading: 'Özet',
        body: [{ ul: [
          'Hesap yok, kayıt yok, reklam yok, izleme yok.',
          'Konumunuz ve tercihleriniz yalnızca cihazınızda kalır; sunucumuza gönderilmez (bir sunucumuz yoktur).',
          'Yalnızca Premium satın alımları için RevenueCat ile, yazı tiplerini indirmek için Google Fonts ile iletişim kurulur.',
        ] }],
      },
      {
        heading: 'Cihazınızda işlenen bilgiler',
        body: [
          '**Konum.** İzin verirseniz, cihazınızın yaklaşık konumu namaz vakitlerini hesaplamak ve bulunduğunuz şehri belirlemek için kullanılır. Hesaplama tamamen cihazda yapılır; konumunuz hiçbir sunucuya gönderilmez. Konum izni vermeden şehrinizi listeden elle seçebilirsiniz. İzni istediğiniz zaman cihaz ayarlarından kaldırabilirsiniz.',
          '**Tercihler ve ilerleme.** Seçtiğiniz şehir, bildirim ayarları, zikir sayaçları, kendi eklediğiniz zikirler, Kur\'an okuma ilerlemesi ve favorileriniz cihazınızın yerel depolamasında saklanır. Uygulamayı sildiğinizde bu veriler de silinir.',
          '**Bildirimler.** Ezan ve hatırlatma bildirimleri cihazınızda yerel olarak planlanır; bildirim için bir sunucu kullanılmaz.',
          '**Widget\'lar.** Ana ekran widget\'larının gösterdiği vakit ve zikir bilgileri, uygulama ile widget arasında cihaz içi paylaşılan bir alanda (iOS\'ta App Group) tutulur.',
          '**Odaklan (yalnızca iOS).** Bu özellik Apple\'ın Ekran Süresi (Screen Time / Family Controls) altyapısını kullanır. Kilitlemek için seçtiğiniz uygulamalar Apple tarafından şifrelenmiş belirteçler hâlinde verilir; Firuze hangi uygulamaları kullandığınızı göremez ve bu bilgi cihazınızdan çıkmaz.',
        ],
      },
      {
        heading: 'Üçüncü taraf hizmetler',
        body: [
          '**RevenueCat (abonelik yönetimi).** Premium satın alımlarının doğrulanması ve aboneliğinizin durumunun kontrol edilmesi için RevenueCat, Inc. kullanılır. RevenueCat; rastgele oluşturulmuş anonim bir kullanıcı kimliği, satın alma kayıtları (ürün, tarih, fiyat, mağaza işlem kimliği), cihaz/işletim sistemi bilgisi, uygulama sürümü ve ülke tespiti için IP adresi gibi bilgileri işler. Adınız veya e-posta adresiniz paylaşılmaz. Ayrıntılar: revenuecat.com/privacy.',
          '**Apple App Store / Google Play.** Ödemeler mağazalar tarafından işlenir; kart bilgilerinizi göremeyiz. Mağazaların kendi gizlilik politikaları geçerlidir.',
          '**Google Fonts.** Uygulamadaki bazı yazı tipleri ilk kullanımda Google sunucularından indirilip cihazda önbelleğe alınır. Bu istek sırasında IP adresiniz teknik olarak Google\'a iletilir; başka bir bilgi gönderilmez.',
        ],
      },
      {
        heading: 'Yurt dışına aktarım',
        body: [
          'RevenueCat ve Google sunucuları Türkiye dışında (ağırlıklı olarak ABD ve AB) bulunur. Bu hizmetlere iletilen sınırlı teknik veriler, hizmetin sunulması için zorunlu olduğu ölçüde ve sözleşmesel güvencelere dayanılarak aktarılır.',
        ],
      },
      {
        heading: 'Çocukların gizliliği',
        body: [
          'Firuze her yaştan kullanıcıya uygundur ve çocuklardan bilerek kişisel veri toplamaz. Premium satın alımları mağazaların ebeveyn denetimlerine tabidir.',
        ],
      },
      {
        heading: 'Verilerin silinmesi',
        body: [
          'Firuze\'de hesap olmadığı için silinecek bir sunucu kaydı da yoktur. Uygulamayı sildiğinizde cihazdaki tüm veriler kaldırılır. RevenueCat\'teki anonim satın alma kaydının silinmesini isterseniz bize e-posta ile ulaşabilirsiniz.',
        ],
      },
      kvkkRights,
      {
        heading: 'Değişiklikler',
        body: ['Bu politika güncellenirse yeni sürüm bu sayfada yayımlanır ve yukarıdaki tarih değiştirilir. Önemli değişiklikler uygulama içinde duyurulur.'],
      },
    ],
  },

  'firuze-terms': {
    title: 'Firuze Kullanım Şartları',
    updated: '21 Ekim 2026',
    intro: [
      'Bu Kullanım Şartları, Topkir Studio tarafından geliştirilen Firuze mobil uygulamasının kullanımına ilişkindir. Uygulamayı indirerek veya kullanarak bu şartları kabul etmiş olursunuz.',
    ],
    sections: [
      {
        heading: 'Hizmet',
        body: ['Firuze; namaz vakitleri, ezan bildirimleri, zikirmatik, Kur\'an okuma, ana ekran widget\'ları ve odaklanma araçları sunan bir uygulamadır. Temel özellikler ve widget\'lar ücretsizdir; bazı ek özellikler Premium abonelik gerektirir.'],
      },
      {
        heading: 'Namaz vakitleri hakkında önemli not',
        body: [
          'Vakitler, konumunuza göre Diyanet yöntemi esas alınarak astronomik formüllerle cihazınızda hesaplanır. Diyanet İşleri Başkanlığı\'nın yayımladığı takvimle veya yerel camilerin uygulamasıyla birkaç dakikalık farklar oluşabilir. İhtiyat gerektiren durumlarda (ör. imsak ve iftar) resmî takvimi esas almanızı öneririz.',
          'Uygulamadaki içerikler genel bilgilendirme amaçlıdır ve dinî fetva niteliği taşımaz. Kaynaklar uygulamanın Ayarlar › Kaynaklar bölümünde listelenir.',
        ],
      },
      storeSubscriptions('Firuze'),
      ...commonTermsTail('Firuze'),
    ],
  },

  'tabula-privacy': {
    title: 'Tabula Gizlilik Politikası',
    updated: '21 Ekim 2026',
    intro: [
      'Bu politika, Topkir Studio tarafından geliştirilen Tabula kelime oyununun hangi bilgileri, hangi amaçla işlediğini açıklar. Tabula\'da hesap açmanız gerekmez ve verileriniz satılmaz.',
      `Veri sorumlusu: ${controller}.`,
    ],
    sections: [
      {
        heading: 'Cihazınızda saklanan bilgiler',
        body: ['Oyun ayarlarınız (süre, tabu ve pas hakları), takım adları, oyun geçmişi ve skorlar yalnızca cihazınızda saklanır. Uygulamayı sildiğinizde bu veriler de silinir.'],
      },
      {
        heading: 'Reklamlar (Google AdMob)',
        body: [
          'Ücretsiz sürümde reklam göstermek için Google AdMob kullanılır. AdMob; reklam kimliği (IDFA / Android Reklam Kimliği), cihaz ve uygulama bilgileri, IP adresi ve buna dayalı yaklaşık konum ile reklam etkileşimleri gibi verileri reklam sunmak, ölçmek ve dolandırıcılığı önlemek için işleyebilir.',
          'iOS\'ta uygulamalar arası izleme yalnızca izin verirseniz yapılır. Reklam kişiselleştirmesini cihaz ayarlarınızdan (iOS: Ayarlar › Gizlilik › İzleme; Android: Ayarlar › Google › Reklamlar) kapatabilirsiniz. Ayrıntılar: policies.google.com/technologies/partner-sites.',
          'Premium abonelikte reklam gösterilmez.',
        ],
      },
      {
        heading: 'Satın alımlar',
        body: ['Premium satın alımları Apple App Store veya Google Play üzerinden işlenir; kart bilgilerinizi göremeyiz. Satın alma durumunun doğrulanması için mağazaların sağladığı işlem bilgileri kullanılır.'],
      },
      {
        heading: 'Çocukların gizliliği',
        body: ['Tabula 13 yaş altındaki çocuklardan bilerek kişisel veri toplamaz. Böyle bir durumdan haberdar olursanız bize yazın; ilgili verilerin silinmesini sağlarız.'],
      },
      kvkkRights,
      {
        heading: 'Değişiklikler',
        body: ['Bu politika güncellenirse yeni sürüm bu sayfada yayımlanır ve yukarıdaki tarih değiştirilir.'],
      },
    ],
  },

  'tabula-terms': {
    title: 'Tabula Kullanım Şartları',
    updated: '30 Temmuz 2026',
    intro: ['Bu Kullanım Şartları ("Şartlar"), Tabula mobil uygulamasını ("Uygulama") kullanırken geçerlidir. Uygulamayı indirerek veya kullanarak bu şartları kabul etmiş olursunuz.'],
    sections: [
      {
        heading: 'Hizmet',
        body: ['Tabula, kullanıcıların kelime tahmin oyunları oynayabildiği eğlence amaçlı bir mobil uygulamadır.'],
      },
      {
        heading: 'Premium avantajları',
        body: [{ ul: ['Reklamsız kullanım', 'Premium kelime paketlerine erişim', 'Yeni tema ve logo seçenekleri', 'Gelecekte eklenecek Premium özelliklere erişim'] }],
      },
      storeSubscriptions('Tabula'),
      ...commonTermsTail('Tabula'),
    ],
  },

  'site-privacy': {
    title: 'Gizlilik ve KVKK Aydınlatma Metni',
    updated: '21 Ekim 2026',
    intro: [
      `Bu metin, topkirstudio.com web sitesini ziyaret ettiğinizde kişisel verilerinizin nasıl işlendiğini açıklar. Veri sorumlusu ${controller}'dur. Uygulamalarımıza özel gizlilik politikaları ilgili uygulama sayfalarında yer alır.`,
    ],
    sections: [
      {
        heading: 'Topladığımız veriler',
        body: [
          'Bu site çerez, analitik, reklam veya takip aracı kullanmaz ve form aracılığıyla veri toplamaz. Yazı tipleri ve görseller kendi sunucumuzdan yüklenir.',
          'Site GitHub Pages üzerinde barındırılır. GitHub, güvenlik ve hizmetin işletilmesi amacıyla ziyaretçilerin IP adresini sunucu kayıtlarında kısa süreli olarak tutar. Ayrıntılar: docs.github.com/site-policy/privacy-policies.',
        ],
      },
      {
        heading: 'Bize e-posta gönderdiğinizde',
        body: ['E-posta ile ulaştığınızda adınız, e-posta adresiniz ve mesaj içeriğiniz yalnızca talebinizi yanıtlamak amacıyla (KVKK m.5/2-c ve f) işlenir, üçüncü kişilerle paylaşılmaz ve ilişki sona erdikten sonra makul bir süre içinde silinir.'],
      },
      {
        heading: 'Yerel depolama',
        body: ['Açık/koyu tema tercihiniz tarayıcınızın yerel depolamasında (localStorage) tutulur. Bu bilgi bize gönderilmez. Ayrıntılar için Çerez Politikası\'na bakabilirsiniz.'],
      },
      kvkkRights,
    ],
  },

  cookies: {
    title: 'Çerez Politikası',
    updated: '21 Ekim 2026',
    intro: ['topkirstudio.com çerez kullanmaz. Bu nedenle bir çerez onay penceresi göstermiyoruz.'],
    sections: [
      {
        heading: 'Kullandığımız tek yerel kayıt',
        body: [
          'Seçtiğiniz açık/koyu tema, bir sonraki ziyaretinizde hatırlanması için tarayıcınızın yerel depolamasında (localStorage, anahtar: "theme") saklanır. Bu kayıt yalnızca sitenin görünümü içindir, sunucuya gönderilmez ve sizi tanımlamaz. Tarayıcı ayarlarınızdan site verilerini silerek kaldırabilirsiniz.',
        ],
      },
      {
        heading: 'Üçüncü taraf çerezler',
        body: ['Sitede analitik, reklam, sosyal medya eklentisi veya gömülü içerik bulunmadığından üçüncü taraf çerez de yerleştirilmez. Mağaza veya sosyal medya bağlantılarına tıkladığınızda ilgili sitenin kendi politikaları geçerli olur.'],
      },
      {
        heading: 'Değişiklikler',
        body: ['İleride ölçüm aracı eklenirse bu sayfa güncellenir ve gerekli durumlarda onayınız istenir.'],
      },
    ],
  },
};

// ---- English (Firuze) ----

const rightsEn = {
  heading: 'Your rights (GDPR and KVKK)',
  body: [
    'Under the EU General Data Protection Regulation (GDPR) and Turkey\'s Personal Data Protection Law No. 6698 (KVKK), you have the right to know whether your data is processed, to request information, to request correction or deletion, to object to processing, and to seek compensation for damages.',
    'You can send your request to the email address below; we respond within 30 days at the latest. You also have the right to lodge a complaint with your local data protection authority (in Turkey, the Personal Data Protection Authority).',
  ],
};

const subscriptionsEn = {
  heading: 'Premium subscription',
  body: [
    'Firuze Premium is an optional subscription purchased inside the app. Payment is charged to your Apple App Store or Google Play account when you confirm the purchase.',
    { ul: [
      'The subscription renews automatically for the same period and price unless cancelled at least 24 hours before the end of the current period.',
      'Your account is charged for renewal within the 24 hours before the current period ends.',
      'You can manage and cancel your subscription in your App Store or Google Play account settings. Deleting the app does not cancel the subscription.',
      'If a free trial is offered and you do not cancel before it ends, the paid period begins; any unused part of a trial is forfeited when you purchase.',
      'You can restore purchases with the same store account using "Restore purchases".',
      'Refunds are subject to Apple\'s or Google\'s refund policies.',
    ] },
  ],
};

legalDocs['firuze-privacy-en'] = {
  title: 'Firuze Privacy Policy',
  updated: 'October 21, 2026',
  intro: [
    'Firuze is designed not to collect your personal data. You don\'t need an account, no advertising or tracking tools are used, and your data is never sold. This policy explains how the app uses information on your device and when it communicates with third-party services.',
    'Data controller: Topkir Studio (Ahmet Topkir).',
  ],
  sections: [
    {
      heading: 'Summary',
      body: [{ ul: [
        'No account, no sign-up, no ads, no tracking.',
        'Your location and preferences stay on your device; they are never sent to our servers (we don\'t have any).',
        'The app only contacts RevenueCat for Premium purchases and Google Fonts to download fonts.',
      ] }],
    },
    {
      heading: 'Information processed on your device',
      body: [
        '**Location.** If you grant permission, your device\'s approximate location is used to calculate prayer times and determine your city. The calculation happens entirely on your device; your location is never sent to any server. You can pick your city from a list without granting location permission, and you can revoke the permission at any time in your device settings.',
        '**Preferences and progress.** Your selected city, notification settings, dhikr counts, custom dhikr, Quran reading progress and favorites are stored in your device\'s local storage and are deleted when you delete the app.',
        '**Notifications.** Adhan and reminder notifications are scheduled locally on your device; no server is used.',
        '**Widgets.** The prayer time and dhikr information shown by home screen widgets is kept in an on-device area shared between the app and its widgets (an App Group on iOS).',
        '**Focus (iOS only).** This feature uses Apple\'s Screen Time (Family Controls) framework. The apps you choose to lock are provided by Apple as encrypted tokens; Firuze cannot see which apps you use and this information never leaves your device.',
      ],
    },
    {
      heading: 'Third-party services',
      body: [
        '**RevenueCat (subscription management).** RevenueCat, Inc. is used to validate Premium purchases and check your subscription status. RevenueCat processes a randomly generated anonymous user ID, purchase records (product, date, price, store transaction ID), device/OS information, app version and IP address for country detection. Your name and email are not shared. Details: revenuecat.com/privacy.',
        '**Apple App Store / Google Play.** Payments are processed by the stores; we never see your card details. The stores\' own privacy policies apply.',
        '**Google Fonts.** Some fonts are downloaded from Google\'s servers on first use and cached on your device. During this request your IP address is technically transmitted to Google; no other information is sent.',
      ],
    },
    {
      heading: 'International transfers',
      body: ['RevenueCat and Google servers are located outside Turkey (mainly in the US and EU). The limited technical data sent to these services is transferred only as necessary to provide the service and on the basis of contractual safeguards.'],
    },
    {
      heading: 'Children\'s privacy',
      body: ['Firuze is suitable for all ages and does not knowingly collect personal data from children. Premium purchases are subject to the stores\' parental controls.'],
    },
    {
      heading: 'Deleting your data',
      body: ['Because Firuze has no accounts, there is no server record to delete. Deleting the app removes all data from your device. If you want the anonymous purchase record at RevenueCat deleted, contact us by email.'],
    },
    rightsEn,
    {
      heading: 'Changes',
      body: ['If this policy is updated, the new version will be published on this page and the date above will change. Material changes will be announced in the app.'],
    },
  ],
};

legalDocs['firuze-terms-en'] = {
  title: 'Firuze Terms of Use',
  updated: 'October 21, 2026',
  intro: ['These Terms of Use apply to the Firuze mobile app developed by Topkir Studio. By downloading or using the app, you agree to these terms.'],
  sections: [
    {
      heading: 'The service',
      body: ['Firuze offers prayer times, adhan notifications, a dhikr counter, Quran reading, home screen widgets and focus tools. Core features and widgets are free; some additional features require a Premium subscription.'],
    },
    {
      heading: 'Important note about prayer times',
      body: [
        'Prayer times are calculated on your device with astronomical formulas based on the Diyanet method and your location. Differences of a few minutes from official calendars or local mosques may occur. For times that require caution (e.g. suhoor and iftar), we recommend following your official local calendar.',
        'Content in the app is for general information and does not constitute a religious ruling (fatwa). Sources are listed under Settings › Sources in the app.',
      ],
    },
    subscriptionsEn,
    {
      heading: 'Acceptable use',
      body: ['You agree to use Firuze lawfully and not to copy, reverse engineer, distribute modified versions of, or misuse the app.'],
    },
    {
      heading: 'Intellectual property',
      body: ['The software, design, graphics and logos in the app belong to Topkir Studio and are protected by copyright. Third-party content is used under its own license; sources are credited in the app.'],
    },
    {
      heading: 'Limitation of liability',
      body: ['The app is provided "as is". We do not guarantee that it will be uninterrupted or error-free. To the extent permitted by applicable law, we are not liable for indirect damages arising from the use of the app.'],
    },
    {
      heading: 'Changes and governing law',
      body: [
        'These terms may be updated from time to time; the current version is always published on this page. Material changes will be announced in the app.',
        'These terms are governed by the laws of the Republic of Turkey. Mandatory consumer protection rules of your country of residence remain unaffected.',
      ],
    },
  ],
};
