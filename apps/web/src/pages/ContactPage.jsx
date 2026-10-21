import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Instagram, ArrowUpRight } from 'lucide-react';
import { Eyebrow, NavPill, PageShell, usePageMeta } from '@/components/SiteChrome';
import { CONTACT_EMAIL, INSTAGRAM_URL, apps } from '@/data/apps';

const ContactPage = () => {
    usePageMeta('İletişim', 'Proje, iş birliği, destek ve geri bildirim için Topkir Studio ile iletişime geçin.', '/iletisim');
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            window.location.href = `mailto:${CONTACT_EMAIL}`;
        }
    };

    return (
        <PageShell aurora width="max-w-4xl">
            <NavPill />

            <div className="mt-14">
                <Eyebrow>// İletişim</Eyebrow>
                <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white">Bize <span className="text-gradient">ulaşın</span></h1>
                <p className="mt-5 text-lg text-white/50">Proje, iş birliği, destek veya geri bildirim — tek bir e-posta yeter.</p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="glow-border mt-12 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-10"
            >
                <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300"><Mail className="h-5 w-5" /></span>
                    <span className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/40">E-posta</span>
                </div>
                <div className="mt-6 break-all font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">{CONTACT_EMAIL}</div>
                <div className="mt-8 flex flex-wrap gap-3">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="shine-btn inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5">
                        <Mail className="h-4 w-4" /> E-posta yaz
                    </a>
                    <button onClick={copy} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/80 transition-colors hover:border-white/15 hover:text-white">
                        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                        {copied ? 'Kopyalandı' : 'Adresi kopyala'}
                    </button>
                </div>
            </motion.div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {apps.map((a) => (
                    <a
                        key={a.slug}
                        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${a.name} destek`)}`}
                        className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-sm text-white/70 transition-colors hover:border-white/15 hover:text-white"
                    >
                        <span><span className="mr-2 inline-block h-2 w-2 rounded-full" style={{ background: a.accent }} />{a.name} destek</span>
                        <ArrowUpRight className="h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100" />
                    </a>
                ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/40">Sosyal Medya</span>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 hover:border-white/15 hover:text-white transition-colors">
                    <Instagram className="h-4 w-4" /> Instagram
                </a>
            </div>
        </PageShell>
    );
};

export default ContactPage;
