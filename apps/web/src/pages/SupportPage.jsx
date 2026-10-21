import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, FileText, Mail, Shield } from 'lucide-react';
import { Eyebrow, NavPill, PageShell, usePageMeta } from '@/components/SiteChrome';
import { AppIcon, SocialLinks } from '@/components/AppVisuals';
import EmailButton from '@/components/EmailButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CONTACT_EMAIL, appPath, getApp, localize, privacyPath, supportPath, termsPath } from '@/data/apps';
import { t, useLang } from '@/i18n';
import NotFoundPage from '@/pages/NotFoundPage';

const SupportPage = () => {
    const { slug } = useParams();
    const lang = useLang();
    const raw = getApp(slug);
    const app = raw && (lang === 'tr' || raw.en) ? localize(raw, lang) : null;
    const s = t(lang);
    usePageMeta(app && s.supportTitle(app.name), app && s.supportLead, app && supportPath(app, lang));
    if (!app) return <NotFoundPage />;

    return (
        <PageShell width="max-w-4xl">
            <div
                className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] max-w-full -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
                style={{ background: `radial-gradient(circle, ${app.accent}, transparent 70%)` }}
                aria-hidden="true"
            />
            <div className="relative">
                <NavPill />
                <Link to={appPath(app, lang)} className="mt-8 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-sm text-white/60 hover:text-white transition-colors">
                    <AppIcon app={app} className="h-7 w-7" />
                    <ArrowLeft className="h-3.5 w-3.5" /> {app.name}
                </Link>

                <header className="mt-10">
                    <Eyebrow>{s.supportEyebrow}</Eyebrow>
                    <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">{s.supportTitle(app.name)}</h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/55">{s.supportLead}</p>
                </header>

                <section
                    className="glow-border mt-10 rounded-[2rem] border border-white/[0.08] p-7 md:p-8"
                    style={{ '--glow': app.accent, background: `linear-gradient(135deg, ${app.accent}1f, transparent 60%)` }}
                >
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="font-display text-2xl font-bold text-white">{s.writeUs}</h2>
                            <p className="mt-2 max-w-md text-sm text-white/55">{s.writeUsHint}</p>
                        </div>
                        <EmailButton subject={s.supportSubject(app.name)} lang={lang} className="shine-btn inline-flex max-w-full items-center gap-2 break-all rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5">
                            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
                        </EmailButton>
                    </div>
                    {app.socials?.length > 0 && <div className="mt-6"><SocialLinks app={app} lang={lang} /></div>}
                </section>

                <section className="mt-14">
                    <h2 className="font-display text-2xl font-bold text-white">{s.faq}</h2>
                    <Accordion type="single" collapsible className="mt-6 space-y-3">
                        {app.faq.map((f, i) => (
                            <AccordionItem key={f.q} value={`q${i}`} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 transition-colors data-[state=open]:border-white/15 data-[state=open]:bg-white/[0.04]">
                                <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline [&>svg]:text-white/50">
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-white/60">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                <section className="mt-12 grid gap-3 sm:grid-cols-2">
                    {[
                        { to: privacyPath(app, lang), icon: Shield, label: s.privacy },
                        { to: termsPath(app, lang), icon: FileText, label: s.terms },
                    ].map(({ to, icon: Icon, label }) => (
                        <Link key={to} to={to} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-sm text-white/70 transition-colors hover:border-white/15 hover:text-white">
                            <Icon className="h-4 w-4" /> {label}
                        </Link>
                    ))}
                </section>
            </div>
        </PageShell>
    );
};

export default SupportPage;
