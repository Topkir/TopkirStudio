import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeControls from '@/components/ThemeControls';
import { TikTokLogo } from '@/components/AppVisuals';
import { CONTACT_EMAIL, INSTAGRAM_URL, SITE_URL, apps } from '@/data/apps';
import { t, useLang } from '@/i18n';

const tiktok = apps.flatMap((a) => a.socials).find((s) => s.type === 'tiktok');

export function Eyebrow({
  children
}) {
  return <div className="font-mono-ui text-xs tracking-[0.3em] text-white/40 uppercase mb-6">
            {children}
        </div>;
}

const navLinks = {
  tr: [
    { to: '/uygulamalar', label: 'Uygulamalar' },
    { to: '/basin', label: 'Basın' },
    { to: '/iletisim', label: 'İletişim' },
  ],
  en: [
    { to: '/uygulamalar', label: 'Apps' },
    { to: '/iletisim', label: 'Contact' },
  ],
};

export function NavPill() {
  const lang = useLang();
  const linkCls = ({ isActive }) =>
    `rounded-full px-3 py-1.5 transition-colors hover:bg-white/5 hover:text-white/80 ${isActive ? 'bg-white/5 text-white/90' : ''}`;
  return <nav className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-2xl sm:rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 font-mono-ui text-[11px] tracking-[0.15em] uppercase text-white/50 backdrop-blur-md">
            <Link to="/" className="rounded-full px-3 py-1.5 text-white/80 hover:bg-white/5 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-teal-400 to-orange-400 text-[9px] font-bold text-black">T</span>
                Topkir Studio
            </Link>
            {navLinks[lang].map((l) => <NavLink key={l.to} to={l.to} className={linkCls}>{l.label}</NavLink>)}
        </nav>;
}

export function SiteFooter() {
  const lang = useLang();
  return <footer className="mt-28 border-t border-white/5 pt-10 pb-6">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <div className="font-display text-lg font-bold text-white">Topkir Studio</div>
                    <p className="mt-1 text-sm text-white/40">{t(lang).studioTagline}</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 inline-block text-sm text-white/60 hover:text-white transition-colors">{CONTACT_EMAIL}</a>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-2 font-mono-ui text-[11px] tracking-[0.15em] uppercase text-white/45">
                    <Link to="/uygulamalar" className="hover:text-white/80 transition-colors">Uygulamalar</Link>
                    <Link to="/gizlilik" className="hover:text-white/80 transition-colors">Gizlilik</Link>
                    <Link to="/iletisim" className="hover:text-white/80 transition-colors">İletişim</Link>
                    <Link to="/cerez-politikasi" className="hover:text-white/80 transition-colors">Çerezler</Link>
                    <Link to="/basin" className="hover:text-white/80 transition-colors">Basın</Link>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" lang="en" className="hover:text-white/80 transition-colors">Instagram</a>
                    {tiktok && (
                        <a href={tiktok.url} target="_blank" rel="noopener noreferrer" lang="en" className="inline-flex items-center gap-1.5 hover:text-white/80 transition-colors">
                            <TikTokLogo className="h-3 w-3" /> TikTok
                        </a>
                    )}
                </div>
            </div>
            <p className="mt-10 font-mono-ui text-[11px] tracking-[0.25em] uppercase text-white/30">
                © {new Date().getFullYear()} Topkir Studio
            </p>
        </footer>;
}

// Sayfa başlığı, açıklaması ve canonical bağlantısı. Build sonrası script
// aynı değerleri statik HTML'e de yazar; bu, istemci tarafı gezinti içindir.
export function usePageMeta(title, description, path) {
  useEffect(() => {
    document.title = title ? `${title} · Topkir Studio` : 'Topkir Studio — Bağımsız mobil uygulama stüdyosu';
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    if (path !== undefined) document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`);
  }, [title, description, path]);
}

export function PageShell({ children, width = 'max-w-5xl', aurora = false, className = '' }) {
  return <div className="relative min-h-screen overflow-x-clip grain-bg">
            {aurora && <div className="aurora" aria-hidden="true"><span className="a1" /><span className="a2" /><span className="a3" /><span className="a4" /></div>}
            <ThemeControls />
            <motion.main
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`relative z-10 mx-auto ${width} px-4 sm:px-6 pt-20 pb-8 md:pt-16 ${className}`}
            >
                {children}
                <SiteFooter />
            </motion.main>
        </div>;
}
