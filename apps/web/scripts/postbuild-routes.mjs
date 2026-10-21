// Build sonrası: GitHub Pages'te her rota gerçek bir dosya olarak (HTTP 200)
// sunulsun diye dist içinde <rota>/index.html kopyaları üretir. Her kopyaya
// sayfaya özel başlık, açıklama ve canonical yazılır; ayrıca sitemap.xml ve
// SPA yedeği olarak 404.html oluşturulur.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, apps, appPath, localize, privacyPath, supportPath, termsPath } from '../src/data/apps.js';
import { legalDocs } from '../src/content/legal.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '../../../dist/apps/web');
const brand = 'Topkir Studio';

// Uygulama başına sayfalar; `en` çevirisi olanlar için İngilizce eşleri de.
// `alt`, karşı dildeki sayfanın yolu (hreflang için).
const appRoutes = apps.flatMap((raw) => {
  const langs = raw.en ? ['tr', 'en'] : ['tr'];
  return langs.flatMap((lang) => {
    const a = localize(raw, lang);
    const other = lang === 'tr' ? 'en' : 'tr';
    const alt = (fn) => (raw.en ? fn(raw, other) : null);
    const legal = (kind) => legalDocs[`${a.slug}-${kind}${lang === 'en' ? '-en' : ''}`];
    const support = lang === 'en' ? `${a.name} Support` : `${a.name} Destek`;
    return [
      { path: appPath(a, lang), lang, alt: alt(appPath), title: `${a.name} — ${a.subtitle} · ${brand}`, description: a.description, image: a.iconLarge },
      { path: privacyPath(a, lang), lang, alt: alt(privacyPath), title: `${legal('privacy').title} · ${brand}`, description: legal('privacy').intro[0] },
      { path: termsPath(a, lang), lang, alt: alt(termsPath), title: `${legal('terms').title} · ${brand}`, description: legal('terms').intro[0] },
      { path: supportPath(a, lang), lang, alt: alt(supportPath), title: `${support} · ${brand}`, description: a.faq.map((f) => f.q).slice(0, 3).join(' ') },
    ];
  });
});

const routes = [
  { path: '/', title: `${brand} — Bağımsız mobil uygulama stüdyosu` },
  { path: '/uygulamalar', title: `Uygulamalar · ${brand}`, description: 'Topkir Studio tarafından iOS ve Android için geliştirilen uygulamalar: Firuze ve Anlatsana.' },
  ...appRoutes,
  { path: '/basin', title: `Basın Kiti · ${brand}`, description: 'Topkir Studio uygulamaları için logolar, tanıtım metinleri, renkler ve basın iletişimi.' },
  { path: '/gizlilik', title: `${legalDocs['site-privacy'].title} · ${brand}`, description: legalDocs['site-privacy'].intro[0] },
  { path: '/cerez-politikasi', title: `${legalDocs.cookies.title} · ${brand}`, description: legalDocs.cookies.intro[0] },
  { path: '/iletisim', title: `İletişim · ${brand}`, description: 'Proje, iş birliği, destek ve geri bildirim için Topkir Studio ile iletişime geçin.' },
];

// GitHub Pages klasör rotalarını sonda eğik çizgiyle sunar; canonical da öyle.
const canonical = (p) => `${SITE_URL}${p === '/' ? '/' : `${p}/`}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const clip = (s) => (s.length > 160 ? `${s.slice(0, 157).trimEnd()}…` : s);

const template = await readFile(path.join(dist, 'index.html'), 'utf8');

function render({ path: p, title, description, image, lang = 'tr', alt }) {
  const url = canonical(p);
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`);
  if (description) {
    const d = esc(clip(description));
    html = html
      .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`);
  }
  if (lang === 'en') {
    html = html.replace('<html lang="tr"', '<html lang="en"').replace('content="tr_TR"', 'content="en_US"');
  }
  if (alt) {
    const tr = lang === 'tr' ? p : alt;
    const en = lang === 'en' ? p : alt;
    html = html.replace('</head>', `\t<link rel="alternate" hreflang="tr" href="${canonical(tr)}" />\n\t\t<link rel="alternate" hreflang="en" href="${canonical(en)}" />\n\t\t<link rel="alternate" hreflang="x-default" href="${canonical(tr)}" />\n\t</head>`);
  }
  if (image) html = html.replace('</head>', `\t<meta property="og:image" content="${SITE_URL}${image}" />\n\t</head>`);
  return html;
}

for (const r of routes) {
  const dir = r.path === '/' ? dist : path.join(dist, r.path);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), render(r));
}

// Adı değişen uygulamaların eski adresleri: statik yönlendirme sayfaları.
const redirectHtml = (to) => `<!doctype html>
<html lang="tr"><head><meta charset="utf-8"><title>Yönlendiriliyor…</title>
<link rel="canonical" href="${canonical(to)}"><meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${to}/"><script>location.replace(${JSON.stringify(`${to}/`)} + location.hash);</script>
</head><body><a href="${to}/">${SITE_URL}${to}</a></body></html>
`;
let redirects = 0;
for (const a of apps) {
  for (const old of a.formerSlugs ?? []) {
    for (const r of routes.filter((r) => r.path.startsWith(`/uygulamalar/${a.slug}`))) {
      const from = r.path.replace(`/uygulamalar/${a.slug}`, `/uygulamalar/${old}`);
      await mkdir(path.join(dist, from), { recursive: true });
      await writeFile(path.join(dist, from, 'index.html'), redirectHtml(r.path));
      redirects += 1;
    }
  }
}

await writeFile(path.join(dist, '404.html'), render({ path: '/', title: `Sayfa bulunamadı · ${brand}` }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${canonical(r.path)}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);

console.log(`postbuild: ${routes.length} rota, ${redirects} yönlendirme, sitemap.xml ve 404.html yazıldı.`);
