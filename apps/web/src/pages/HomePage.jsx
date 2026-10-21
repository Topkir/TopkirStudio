import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Newspaper, MessageCircle, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Eyebrow, NavPill, PageShell, usePageMeta } from '@/components/SiteChrome';
import { AppIcon, PhoneMockup, StatusBadge, TikTokLogo, Tilt } from '@/components/AppVisuals';
import { apps, appPath, getApp } from '@/data/apps';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const headline = ['Uygulama', 'yap,', 'yayınla', 've', 'büyüt.'];
const marqueeWords = ['Firuze', 'Tabula', 'iOS', 'Android', 'Flutter', 'Widget', 'SwiftUI', 'TikTok', 'Tasarım', 'Indie'];

const card = 'glow-border group relative block h-full overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]';

function CardTitle({ children }) {
    return (
        <h3 className="mt-2 flex items-center gap-1.5 text-xl font-semibold text-white">
            {children}
            <ArrowUpRight className="h-4 w-4 text-white/30 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </h3>
    );
}

const HomePage = () => {
    usePageMeta(null, 'Topkir Studio: Firuze ve Tabula gibi iOS ve Android uygulamaları geliştiren bağımsız mobil uygulama stüdyosu.', '/');
    const firuze = getApp('firuze');
    const tabula = getApp('tabula');
    const tiktok = firuze.socials.find((so) => so.type === 'tiktok');

    return (
        <PageShell aurora>
            <NavPill />
            <section className="mt-12 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                    <Eyebrow>// Topkir Studio</Eyebrow>
                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] text-white">
                        {headline.map((w, i) => (
                            <motion.span
                                key={w} className={`mr-[0.22em] inline-block ${i >= 2 ? 'text-gradient' : ''}`}
                                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            >{w}</motion.span>
                        ))}
                    </h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-6 max-w-md text-lg text-white/55">
                        Bağımsız bir geliştiricinin ürün defteri. Sade, özenli ve kullanıcısına saygılı mobil uygulamalar.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="mt-8 flex flex-wrap items-center gap-3">
                        <Link to="/uygulamalar" className="shine-btn inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5">
                            Uygulamaları keşfet <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link to="/iletisim" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/80 transition-colors hover:border-white/15 hover:text-white">
                            İletişime geç
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mx-auto flex h-[460px] w-full max-w-[380px] items-center justify-center sm:h-[500px]"
                >
                    <Link to={appPath(tabula)} aria-label="Tabula" className="absolute left-0 top-10 z-0 -rotate-6 float-slower opacity-90">
                        <Tilt><PhoneMockup app={tabula} className="w-40 sm:w-48" /></Tilt>
                    </Link>
                    <Link to={appPath(firuze)} aria-label="Firuze" className="absolute right-0 top-0 z-10 rotate-3 float-slow">
                        <Tilt><PhoneMockup app={firuze} className="w-48 sm:w-56" /></Tilt>
                    </Link>
                </motion.div>
            </section>

            <div className="marquee relative mt-16 overflow-hidden border-y border-white/5 py-4" aria-hidden="true">
                <div className="marquee-track gap-10 font-mono-ui text-sm tracking-[0.3em] text-white/25">
                    {[...marqueeWords, ...marqueeWords].map((w, i) => (
                        <span key={i} className="flex items-center gap-10">{w}<span className="text-teal-400/50">✦</span></span>
                    ))}
                </div>
            </div>

            <motion.div
                variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
                className="mt-16 grid gap-4 md:grid-cols-6"
            >
                <motion.div variants={item} className="md:col-span-4 md:row-span-2">
                    <Link to="/uygulamalar" className={card} style={{ '--glow': '#2BB3A8' }}>
                        <span className="absolute right-6 top-6 font-mono-ui text-xs text-white/20">01</span>
                        <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/35">YAP · {apps.length} uygulama</div>
                        <CardTitle>Uygulamalar</CardTitle>
                        <p className="mt-2 max-w-sm text-sm text-white/45">iOS ve Android için geliştirilen indie uygulamalar.</p>
                        <div className="mt-8 space-y-3">
                            {apps.map((a) => (
                                <div key={a.slug} className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors group-hover:border-white/10">
                                    <AppIcon app={a} className="h-12 w-12" />
                                    <div className="min-w-0 flex-1">
                                        <div className="font-semibold text-white">{a.name}</div>
                                        <div className="truncate text-xs text-white/45">{a.subtitle}</div>
                                    </div>
                                    <StatusBadge app={a} />
                                </div>
                            ))}
                        </div>
                    </Link>
                </motion.div>

                <motion.div variants={item} className="md:col-span-2">
                    <a href={tiktok.url} target="_blank" rel="noopener noreferrer" className={card} style={{ '--glow': '#FE2C55' }}>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white shadow-[2px_2px_0_#25F4EE,-2px_-2px_0_#FE2C55]"><TikTokLogo className="h-5 w-5" /></span>
                        <div className="mt-5 font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/35">TAKİP ET · <span lang="en">TikTok</span></div>
                        <CardTitle>{tiktok.handle}</CardTitle>
                        <p className="mt-2 text-sm text-white/45">Firuze'nin hikâyesi, yeni özellikler ve kısa videolar.</p>
                    </a>
                </motion.div>

                <motion.div variants={item} className="md:col-span-2">
                    <Link to="/basin" className={card} style={{ '--glow': '#818CF8' }}>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 text-indigo-400"><Newspaper className="h-5 w-5" strokeWidth={1.75} /></span>
                        <div className="mt-5 font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/35">PAYLAŞ · basın</div>
                        <CardTitle>Basın kiti</CardTitle>
                        <p className="mt-2 text-sm text-white/45">Logolar, tanıtım metinleri ve renkler.</p>
                    </Link>
                </motion.div>

                <motion.div variants={item} className="md:col-span-6">
                    <Link to="/iletisim" className={`${card} flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`} style={{ '--glow': '#F472B6' }}>
                        <div className="flex items-center gap-4">
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pink-400/10 text-pink-400"><MessageCircle className="h-5 w-5" strokeWidth={1.75} /></span>
                            <div>
                                <div className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/35">BAĞLAN · iletişim</div>
                                <CardTitle>Bir fikrin mi var? Yaz.</CardTitle>
                            </div>
                        </div>
                        <span className="text-sm text-white/45">Proje, iş birliği ve geri bildirim için.</span>
                    </Link>
                </motion.div>
            </motion.div>
        </PageShell>
    );
};

export default HomePage;
