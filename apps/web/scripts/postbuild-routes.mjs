// Build sonrası: GitHub Pages'te her rota gerçek bir dosya olarak (HTTP 200)
// sunulsun diye dist içinde <rota>/index.html kopyaları üretir. Her kopyaya
// sayfaya özel başlık, açıklama ve canonical yazılır; ayrıca sitemap.xml ve
// SPA yedeği olarak 404.html oluşturulur.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, apps, appPath, privacyPath, termsPath } from '../src/data/apps.js';
import { legalDocs } from '../src/content/legal.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(here, '../../../dist/apps/web');
const brand = 'Topkir Studio';

const routes = [
  { path: '/', title: `${brand} — Bağımsız mobil uygulama stüdyosu` },
  { path: '/uygulamalar', title: `Uygulamalar · ${brand}`, description: 'Topkir Studio tarafından iOS ve Android için geliştirilen uygulamalar: Firuze ve Tabula.' },
  ...apps.flatMap((a) => [
    { path: appPath(a), title: `${a.name} — ${a.subtitle} · ${brand}`, description: a.description, image: a.icon },
    { path: privacyPath(a), title: `${legalDocs[`${a.slug}-privacy`].title} · ${brand}`, description: legalDocs[`${a.slug}-privacy`].intro[0] },
    { path: termsPath(a), title: `${legalDocs[`${a.slug}-terms`].title} · ${brand}`, description: legalDocs[`${a.slug}-terms`].intro[0] },
  ]),
  { path: '/gizlilik', title: `${legalDocs['site-privacy'].title} · ${brand}`, description: legalDocs['site-privacy'].intro[0] },
  { path: '/cerez-politikasi', title: `${legalDocs.cookies.title} · ${brand}`, description: legalDocs.cookies.intro[0] },
  { path: '/techstack', title: `Güncellemeler · ${brand}`, description: 'Topkir Studio uygulamalarına gelen yeni özellikler ve iyileştirmeler.' },
  { path: '/yayinlar', title: `Sıfırdan Yayına · ${brand}`, description: 'Bir fikri mağazada yayınlanan ürüne dönüştürme yolculuğu.' },
  { path: '/iletisim', title: `İletişim · ${brand}`, description: 'Proje, iş birliği, destek ve geri bildirim için Topkir Studio ile iletişime geçin.' },
];

// GitHub Pages klasör rotalarını sonda eğik çizgiyle sunar; canonical da öyle.
const canonical = (p) => `${SITE_URL}${p === '/' ? '/' : `${p}/`}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const clip = (s) => (s.length > 160 ? `${s.slice(0, 157).trimEnd()}…` : s);

const template = await readFile(path.join(dist, 'index.html'), 'utf8');

function render({ path: p, title, description, image }) {
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
  if (image) html = html.replace('</head>', `\t<meta property="og:image" content="${SITE_URL}${image}" />\n\t</head>`);
  return html;
}

for (const r of routes) {
  const dir = r.path === '/' ? dist : path.join(dist, r.path);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), render(r));
}

await writeFile(path.join(dist, '404.html'), render({ path: '/', title: `Sayfa bulunamadı · ${brand}` }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${canonical(r.path)}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);

console.log(`postbuild: ${routes.length} rota, sitemap.xml ve 404.html yazıldı.`);
