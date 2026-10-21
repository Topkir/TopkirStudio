import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Eyebrow, NavPill, PageShell, usePageMeta } from '@/components/SiteChrome';
import { AppIcon, PhoneMockup, StatusBadge, Tilt } from '@/components/AppVisuals';
import { apps, appPath } from '@/data/apps';

const AppsPage = () => {
    usePageMeta('Uygulamalar', 'Topkir Studio tarafından iOS ve Android için geliştirilen uygulamalar: Firuze ve Anlatsana.', '/uygulamalar');
    return (
        <PageShell aurora>
            <NavPill />

            <div className="mt-14">
                <Eyebrow>// Uygulamalar</Eyebrow>
                <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white">
                    Yaptığım <span className="text-gradient">Uygulamalar</span>
                </h1>
                <p className="mt-5 max-w-lg text-lg text-white/50">iOS ve Android için özenle geliştirilen indie uygulamalar. Her biri tek bir işi iyi yapmak için.</p>
            </div>

            <div className="mt-14 space-y-8">
                {apps.map((app, i) => (
                    <motion.div
                        key={app.slug}
                        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Link
                            to={appPath(app)}
                            className="glow-border group relative grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-white/15 md:grid-cols-[1.2fr_0.8fr]"
                            style={{ '--glow': app.accent }}
                        >
                            <div
                                className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                                style={{ background: app.accent }}
                            />
                            <div className="relative p-8 md:p-10">
                                <div className="flex items-center gap-4">
                                    <AppIcon app={app} className="h-16 w-16" />
                                    <div>
                                        <StatusBadge app={app} />
                                        <div className="mt-2 font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/35">{app.category}</div>
                                    </div>
                                </div>
                                <h2 className="mt-7 font-display text-4xl font-bold text-white">{app.name}</h2>
                                <p className="mt-1 text-white/60">{app.subtitle}</p>
                                <p className="mt-5 max-w-md text-white/50">{app.description}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {app.highlights.map((h) => (
                                        <span key={h} className="rounded-md border border-white/10 px-2.5 py-1 font-mono-ui text-[10px] tracking-[0.15em] uppercase text-white/50">{h}</span>
                                    ))}
                                </div>
                                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: app.accent }}>
                                    Detayları gör <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                            <div
                                className="relative flex items-end justify-center overflow-hidden border-t border-white/[0.06] px-8 pt-10 md:border-l md:border-t-0"
                                style={{ background: `linear-gradient(180deg, ${app.accent}22, transparent 70%)` }}
                            >
                                <Tilt className="translate-y-10 transition-transform duration-500 group-hover:translate-y-4">
                                    <PhoneMockup app={app} className="w-52" />
                                </Tilt>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </PageShell>
    );
};

export default AppsPage;
