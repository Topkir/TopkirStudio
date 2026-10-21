import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Copy, Download, ExternalLink, Mail } from 'lucide-react';
import { Eyebrow, NavPill, PageShell, usePageMeta } from '@/components/SiteChrome';
import { AppIcon, PhoneMockup, SocialLinks, StatusBadge, StoreButtons } from '@/components/AppVisuals';
import EmailButton from '@/components/EmailButton';
import { appPath, apps } from '@/data/apps';

function useCopy() {
    const [copied, setCopied] = useState(null);
    const copy = async (key, text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(key);
            setTimeout(() => setCopied((k) => (k === key ? null : k)), 1600);
        } catch {
            // Pano erişimi yoksa metin zaten seçilebilir durumda.
        }
    };
    return [copied, copy];
}

function CopyBlock({ label, text, id, copied, copy, lang }) {
    return (
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
            <div className="flex items-center justify-between gap-3">
                <span lang={lang} className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-white/40">{label}</span>
                <button onClick={() => copy(id, text)} className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-white/50 transition-colors hover:bg-white/5 hover:text-white">
                    {copied === id ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied === id ? 'Kopyalandı' : 'Kopyala'}
                </button>
            </div>
            <p lang={lang} className="mt-3 text-sm leading-relaxed text-white/70">{text}</p>
        </div>
    );
}

const PressPage = () => {
    usePageMeta('Basın Kiti', 'Topkir Studio uygulamaları için logolar, tanıtım metinleri, renkler ve basın iletişimi.', '/basin');
    const [copied, copy] = useCopy();

    return (
        <PageShell aurora>
            <NavPill />

            <div className="mt-14">
                <Eyebrow>// Basın</Eyebrow>
                <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white">Basın <span className="text-gradient">kiti</span></h1>
                <p className="mt-5 max-w-2xl text-lg text-white/50">
                    Haber, inceleme veya içerik hazırlıyorsan ihtiyacın olan logo, metin ve renkler burada. Ek görsel, röportaj ya da erken erişim için yazman yeterli.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    <EmailButton subject="Basın" className="shine-btn inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5">
                        <Mail className="h-4 w-4" /> Basın iletişimi
                    </EmailButton>
                </div>
            </div>

            <section className="mt-14 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7">
                <div className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Stüdyo hakkında</div>
                <p className="mt-3 max-w-3xl text-white/65 leading-relaxed">
                    Topkir Studio, Türkiye merkezli bağımsız bir mobil uygulama stüdyosudur. iOS ve Android için sade, özenli ve kullanıcısına saygılı uygulamalar geliştirir; hesap zorunluluğu, gereksiz veri toplama ve izleme olmadan.
                </p>
            </section>

            <div className="mt-10 space-y-10">
                {apps.map((app, i) => (
                    <motion.section
                        key={app.slug}
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: i * 0.05 }}
                        className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-7 md:p-10"
                    >
                        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl" style={{ background: app.accent }} aria-hidden="true" />
                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto]">
                            <div>
                                <div className="flex items-center gap-4">
                                    <AppIcon app={app} className="h-16 w-16" />
                                    <div>
                                        <h2 className="font-display text-3xl font-bold text-white">{app.name}</h2>
                                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-white/50">
                                            {app.subtitle} <StatusBadge app={app} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 grid gap-3">
                                    <CopyBlock label="Kısa tanıtım" text={app.pressShort} id={`${app.slug}-short`} copied={copied} copy={copy} />
                                    <CopyBlock label="Uzun tanıtım" text={app.longDescription} id={`${app.slug}-long`} copied={copied} copy={copy} />
                                    {app.en && <CopyBlock label="Short description (EN)" text={app.en.pressShort} id={`${app.slug}-en`} copied={copied} copy={copy} lang="en" />}
                                </div>

                                <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
                                    <div><dt className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Kategori</dt><dd className="mt-1 text-white/75">{app.category}</dd></div>
                                    <div><dt className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Platform</dt><dd className="mt-1 text-white/75" lang="en">{app.platforms.join(', ')}</dd></div>
                                    <div><dt className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Öne çıkanlar</dt><dd className="mt-1 text-white/75">{app.highlights.join(' · ')}</dd></div>
                                </dl>

                                <div className="mt-6">
                                    <div className="font-mono-ui text-[10px] tracking-[0.2em] uppercase text-white/40">Renkler · kopyalamak için dokun</div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {app.palette.map((c) => (
                                            <button
                                                key={c.hex} onClick={() => copy(c.hex, c.hex)}
                                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-3 text-xs text-white/70 transition-colors hover:border-white/20 hover:text-white"
                                            >
                                                <span className="h-6 w-6 rounded-lg ring-1 ring-white/15" style={{ background: c.hex }} />
                                                <span>{c.name}</span>
                                                <span className="font-mono-ui text-white/40">{copied === c.hex ? '✓' : c.hex}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-wrap items-center gap-3">
                                    {app.iconLarge && (
                                        <a href={app.iconLarge} download={`${app.slug}-ikon-1024.png`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-white/20 hover:text-white">
                                            <Download className="h-4 w-4" /> İkon (PNG, 1024px)
                                        </a>
                                    )}
                                    <Link to={appPath(app)} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/80 transition-colors hover:border-white/20 hover:text-white">
                                        <ExternalLink className="h-4 w-4" /> Uygulama sayfası
                                    </Link>
                                </div>
                                <div className="mt-4"><SocialLinks app={app} /></div>
                                <div className="mt-6"><StoreButtons app={app} /></div>
                            </div>

                            <div className="hidden items-start justify-center lg:flex">
                                <PhoneMockup app={app} className="w-52" />
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>
        </PageShell>
    );
};

export default PressPage;
