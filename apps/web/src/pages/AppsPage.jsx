import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Ban, History, Sparkles, ExternalLink } from 'lucide-react';
import { Eyebrow, NavPill, SiteFooter } from '@/components/SiteChrome';
import ThemeControls from '@/components/ThemeControls';

const features = [
    { icon: Timer, text: 'Tek kişilik veya takım modunda oynayın' },
    { icon: Ban, text: 'Süre, taboo ve pas hakkı ayarlarını dilediğiniz gibi özelleştirin' },
    { icon: History, text: 'Oyun geçmişinizi kaydedin ve skorlarınızı takip edin' },
    { icon: Sparkles, text: 'Akıcı ve keyifli bir arayüzle kelime tahmin heyecanını yaşayın' },
];

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.tabu.tabulaa';
const APPSTORE_URL = 'https://www.apple.com/app-store/';

const AppsPage = () => {
    return (
        <div className="min-h-screen grain-bg">
            <ThemeControls />
            <div className="mx-auto max-w-4xl px-6 pt-10 pb-8 md:pt-16">
                <NavPill />

                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-14">
                    <Eyebrow>// Uygulamalar</Eyebrow>
                    <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white">
                        Yaptığım Uygulamalar
                    </h1>
                    <p className="mt-5 text-lg text-white/50">iOS ve Android üzerinde yayınlanan indie uygulamalar.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
                    className="mt-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]"
                >
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-10">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
                                    <Sparkles className="h-6 w-6" strokeWidth={1.75} />
                                </span>
                                <span className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/35">OYUN · Tabu</span>
                            </div>
                            <h2 className="mt-6 font-display text-3xl font-bold text-white">Tabula</h2>
                            <p className="mt-1 text-white/60">Tabu Kelime Oyunu</p>

                            <ul className="mt-7 space-y-4">
                                {features.map(({ icon: Icon, text }) => (
                                    <li key={text} className="flex gap-3 text-sm text-white/60">
                                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/5 text-white/50">
                                            <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                                        </span>
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href={PLAY_URL} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                                >
                                    Google Play'de İndir
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                                <a
                                    href={APPSTORE_URL} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                                >
                                    App Store'da İndir
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center border-t border-white/[0.06] bg-gradient-to-b from-orange-400/5 to-transparent p-8 md:border-l md:border-t-0">
                            <img
                                src="https://images.hostinger.com/63e9de08-26a0-42ec-b292-b6ccf47f46c3.png"
                                alt="Tabula tabu kelime oyunu uygulama ekran görüntüsü"
                                className="w-52 rounded-2xl shadow-2xl shadow-black/50 md:w-56"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>

                <SiteFooter />
            </div>
        </div>
    );
};

export default AppsPage;
