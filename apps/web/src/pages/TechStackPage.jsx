import React from 'react';
import { motion } from 'framer-motion';
import { Eyebrow, NavPill, SiteFooter } from '@/components/SiteChrome';
import ThemeControls from '@/components/ThemeControls';
const updates = [{
  ep: 'GÜNCELLEME 0',
  date: '24 KAS 2025',
  title: 'Tabula Google Play\'de yayınlandı.',
  chips: ['🎮 TABULA', '🚀 YAYIN']
}, {
  ep: 'GÜNCELLEME 1',
  date: '27 ARA 2025',
  title: 'Takım modu ve skor takibi eklendi.',
  chips: ['🎮 TABULA', '👥 TAKIM']
}, {
  ep: 'GÜNCELLEME 2',
  date: '22 OCA 2026',
  title: 'Yeni kelime paketleri ve süre ayarları.',
  chips: ['🎮 TABULA', '⏱️ SÜRE']
}, {
  ep: 'GÜNCELLEME 3',
  date: '26 ŞUB 2026',
  title: 'Karanlık tema ve arayüz yenilemesi.',
  chips: ['🎮 TABULA', '🎨 TASARIM']
}];
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 16
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
const TechStackPage = () => {
  return <div className="min-h-screen grain-bg">
            <ThemeControls />
            <div className="mx-auto max-w-4xl px-6 pt-10 pb-8 md:pt-16">
                <NavPill />

                <motion.div initial={{
        opacity: 0,
        y: 12
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="mt-14">
                    <Eyebrow>// Geliştirme Yolculuğu</Eyebrow>
                    <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-white">
                        Güncellemeler
                    </h1>
                    <p className="mt-6 text-lg text-white/50">Uygulamalara gelen yeni özellikler ve iyileştirmeler.</p>

                    <div className="mt-10 flex items-center gap-4">
                        <div className="relative h-1.5 flex-1 rounded-full bg-white/10">
                            <div className="absolute left-0 top-0 h-full w-[12%] rounded-full bg-emerald-400" />
                            <div className="absolute left-[12%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                        </div>
                        <span className="font-mono-ui text-xs tracking-[0.15em] text-white/50">4 GÜNCELLEME</span>
                    </div>
                </motion.div>

                <motion.div variants={container} initial="hidden" animate="show" className="mt-12 space-y-4">
                    {updates.map(u => <motion.div key={u.ep} variants={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/15">
                            <div className="flex items-center gap-2 font-mono-ui text-xs tracking-[0.2em] uppercase">
                                <span className="text-white/80">{u.ep}</span>
                                <span className="text-white/20">·</span>
                                <span className="text-white/40">{u.date}</span>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold text-white">{u.title}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {u.chips.map(chip => <span key={chip} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono-ui text-[10px] tracking-[0.15em] uppercase text-white/60">
                                        {chip}
                                    </span>)}
                            </div>
                        </motion.div>)}
                </motion.div>

                <SiteFooter />
            </div>
        </div>;
};
export default TechStackPage;
