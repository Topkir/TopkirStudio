import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Mail, Shield } from 'lucide-react';
import { NavPill, PageShell, usePageMeta } from '@/components/SiteChrome';
import { AppIcon, PhoneMockup, StatusBadge, StoreButtons, Tilt, iconMap } from '@/components/AppVisuals';
import { CONTACT_EMAIL, appPath, getApp, privacyPath, termsPath } from '@/data/apps';
import NotFoundPage from '@/pages/NotFoundPage';

const AppDetailPage = () => {
    const { slug } = useParams();
    const app = getApp(slug);
    usePageMeta(app && `${app.name} — ${app.subtitle}`, app?.description, app && appPath(app));
    if (!app) return <NotFoundPage />;

    return (
        <PageShell>
            <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-[680px] ${app.slug === 'firuze' ? 'star-pattern' : ''}`}
                style={{ maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)', opacity: 0.5 }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] max-w-full -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
                style={{ background: `radial-gradient(circle, ${app.accent}, ${app.accent2} 60%, transparent 70%)` }}
                aria-hidden="true"
            />

            <div className="relative">
                <NavPill />
                <Link to="/uygulamalar" className="mt-8 flex w-fit items-center gap-2 font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white/80 transition-colors">
                    <ArrowLeft className="h-3.5 w-3.5" /> Tüm uygulamalar
                </Link>

                <section className="mt-8 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-4">
                            <AppIcon app={app} className="h-20 w-20" />
                            <div>
                                <StatusBadge app={app} />
                                <div className="mt-2 font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/40">{app.category} · <span lang="en">{app.platforms.join(' & ')}</span></div>
                            </div>
                        </div>
                        <h1 className="mt-8 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] text-white">{app.name}</h1>
                        <p className="mt-2 text-xl text-white/60">{app.subtitle}</p>
                        <p className="mt-6 text-2xl font-display font-semibold leading-snug" style={{ color: app.accent }}>{app.tagline}</p>
                        <p className="mt-5 max-w-lg text-white/55 leading-relaxed">{app.longDescription}</p>
                        <div className="mt-8"><StoreButtons app={app} /></div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {app.highlights.map((h) => (
                                <span key={h} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">✓ {h}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="flex justify-center"
                    >
                        <div className="float-slow">
                            <Tilt><PhoneMockup app={app} className="w-60 sm:w-64" /></Tilt>
                        </div>
                    </motion.div>
                </section>

                <section className="mt-28">
                    <div className="font-mono-ui text-xs tracking-[0.3em] text-white/40 uppercase">// Özellikler</div>
                    <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white">Neler sunuyor?</h2>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {app.features.map((f, i) => {
                            const Icon = iconMap[f.icon];
                            return (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                                    className="glow-border rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
                                    style={{ '--glow': app.accent }}
                                >
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${app.accent}1f`, color: app.accent }}>
                                        {Icon && <Icon className="h-5 w-5" strokeWidth={1.75} />}
                                    </span>
                                    <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/50">{f.text}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                <section
                    className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/[0.08] p-8 md:p-12"
                    style={{ background: `linear-gradient(135deg, ${app.accent}26, transparent 60%), linear-gradient(315deg, ${app.accent2}1f, transparent 60%)` }}
                >
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="font-display text-3xl font-bold text-white">{app.status === 'yayinda' ? `${app.name} — hemen indir` : `${app.name} çok yakında`}</h2>
                            <p className="mt-2 text-white/55">{app.status === 'yayinda' ? 'App Store ve Google Play\'de ücretsiz.' : 'App Store ve Google Play\'e geliyor. Mağaza bağlantıları burada yayınlanacak.'}</p>
                        </div>
                        <StoreButtons app={app} />
                    </div>
                </section>

                <section className="mt-12 grid gap-3 sm:grid-cols-3">
                    {[
                        { to: privacyPath(app), icon: Shield, label: 'Gizlilik Politikası' },
                        { to: termsPath(app), icon: FileText, label: 'Kullanım Şartları' },
                    ].map(({ to, icon: Icon, label }) => (
                        <Link key={to} to={to} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-sm text-white/70 transition-colors hover:border-white/15 hover:text-white">
                            <Icon className="h-4 w-4" /> {label}
                        </Link>
                    ))}
                    <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${app.name} destek`)}`} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-sm text-white/70 transition-colors hover:border-white/15 hover:text-white">
                        <Mail className="h-4 w-4" /> Destek
                    </a>
                </section>
            </div>
        </PageShell>
    );
};

export default AppDetailPage;
