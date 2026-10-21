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
          '**Tercihler ve ilerleme.** Seçtiğiniz şehir, hesaplama yöntemi, bildirim ayarları, zikir sayaçları, kendi eklediğiniz zikirler, Kur\'an okuma ilerlemesi ve favorileriniz cihazınızın yerel depolamasında saklanır. Uygulamayı sildiğinizde bu veriler de silinir.',
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
          'Vakitler, seçtiğiniz konum ve hesaplama yöntemine göre astronomik formüllerle cihazınızda hesaplanır. Diyanet İşleri Başkanlığı\'nın yayımladığı takvimle veya yerel camilerin uygulamasıyla birkaç dakikalık farklar oluşabilir. İhtiyat gerektiren durumlarda (ör. imsak ve iftar) resmî takvimi esas almanızı öneririz.',
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
