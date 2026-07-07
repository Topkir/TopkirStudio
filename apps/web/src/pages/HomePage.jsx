import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Layers, Rocket, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Eyebrow, NavPill, SiteFooter } from '@/components/SiteChrome';
import ThemeControls from '@/components/ThemeControls';

const cards = [
    {
        num: '01', to: '/uygulamalar', tag: 'YAP', meta: '1 yayında', title: 'Uygulamalar',
        desc: 'iOS ve Android üzerinde yayınlanmış indie uygulamalar.',
        icon: Smartphone, tint: 'text-orange-400 bg-orange-400/10',
        chips: ['Tabula'],
    },
    {
        num: '02', to: '/techstack', tag: 'ÖĞREN', meta: 'yenilikler',
        title: 'Güncellemeler', desc: 'Uygulamalara gelen yeni özellikler ve iyileştirmeler.',
        icon: Layers, tint: 'text-indigo-400 bg-indigo-400/10',
        chips: ['Yeni Özellik', 'Düzeltme', 'Tasarım'],
    },
    {
        num: '03', to: '/yayinlar', tag: 'TAKİP ET', meta: 'yolculuk',
        title: 'Sıfırdan Yayına', desc: 'Bir fikri mağazada yayınlanan ürüne dönüştürmek.',
        icon: Rocket, tint: 'text-emerald-400 bg-emerald-400/10',
        chips: ['Fikir', 'MVP', 'Yayın'],
    },
    {
        num: '04', to: '/iletisim', tag: 'BAĞLAN', meta: 'iletişim',
        title: 'İletişim', desc: 'Proje, iş birliği ve geri bildirimleriniz için yazın.',
        icon: MessageCircle, tint: 'text-pink-400 bg-pink-400/10',
        chips: ['E-posta', 'Mesaj'],
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const HomePage = () => {
    return (
        <div className="min-h-screen grain-bg">
            <ThemeControls />
            <div className="mx-auto max-w-4xl px-6 pt-16 pb-8 md:pt-24">
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Eyebrow>// Topkir Studio</Eyebrow>
                    <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-white">
                        Uygulama Yap,<br />Yayınla ve Büyüt
                    </h1>
                    <p className="mt-6 text-lg text-white/50">
                        Bağımsız bir geliştiricinin ürün defteri.
                    </p>
                    <div className="mt-8">
                        <NavPill />
                    </div>
                </motion.div>

                <motion.div
                    variants={container} initial="hidden" animate="show"
                    className="mt-14 grid gap-4 sm:grid-cols-2"
                >
                    {cards.map((c) => {
                        const Icon = c.icon;
                        return (
                            <motion.div key={c.num} variants={item}>
                                <Link
                                    to={c.to}
                                    className="group relative block h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                                >
                                    <span className="absolute right-5 top-5 font-mono-ui text-xs text-white/20">{c.num}</span>
                                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.tint}`}>
                                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                                    </span>
                                    <div className="mt-6 font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/35">
                                        {c.tag} · {c.meta}
                                    </div>
                                    <h3 className="mt-2 flex items-center gap-1.5 text-xl font-semibold text-white">
                                        {c.title}
                                        <ArrowUpRight className="h-4 w-4 text-white/30 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                    </h3>
                                    <p className="mt-2 text-sm text-white/45">{c.desc}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {c.chips.map((chip) => (
                                            <span key={chip} className="rounded-md border border-white/10 px-2.5 py-1 font-mono-ui text-[10px] tracking-[0.15em] uppercase text-white/45">
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <SiteFooter />
            </div>
        </div>
    );
};

export default HomePage;
