import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { Eyebrow, NavPill, PageShell, usePageMeta } from '@/components/SiteChrome';
import { AppIcon } from '@/components/AppVisuals';
import { legalDocs } from '@/content/legal';
import { CONTACT_EMAIL, appPath, getApp } from '@/data/apps';
import { t, useLang } from '@/i18n';
import NotFoundPage from '@/pages/NotFoundPage';

const slugify = (str) => str.toLocaleLowerCase('tr').replace(/[^a-z0-9çğıöşü]+/g, '-').replace(/(^-|-$)/g, '');

// **kalın** işaretlerini <strong>'a çevirir; başka biçimlendirme yok.
function Rich({ text }) {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
    );
}

function Block({ block }) {
    if (typeof block === 'string') return <p><Rich text={block} /></p>;
    return <ul>{block.ul.map((li) => <li key={li}><Rich text={li} /></li>)}</ul>;
}

// `docKey` doğrudan verilir (site belgeleri) veya rota parametresinden
// uygulama + tür birleştirilerek bulunur (/uygulamalar/:slug/gizlilik).
const LegalPage = ({ docKey, kind }) => {
    const { slug } = useParams();
    const lang = useLang();
    const s = t(lang);
    const app = slug ? getApp(slug) : null;
    const key = docKey ?? (app && `${app.slug}-${kind}${lang === 'en' ? '-en' : ''}`);
    const doc = key && legalDocs[key];
    const path = typeof window !== 'undefined' ? window.location.pathname : undefined;
    usePageMeta(doc?.title, doc && doc.intro[0].slice(0, 155), path);
    if (!doc) return <NotFoundPage />;

    const sections = doc.sections.map((sec) => ({ ...sec, id: slugify(sec.heading) }));

    return (
        <PageShell width="max-w-5xl">
            <NavPill />
            {app && (
                <Link to={appPath(app, lang)} className="mt-8 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-sm text-white/60 hover:text-white transition-colors">
                    <AppIcon app={app} className="h-7 w-7" />
                    <ArrowLeft className="h-3.5 w-3.5" /> {app.name}
                </Link>
            )}

            <header className="mt-10">
                <Eyebrow>{s.legalEyebrow}</Eyebrow>
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">{doc.title}</h1>
                <p className="mt-4 font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/40">{s.lastUpdated} · {doc.updated}</p>
            </header>

            <div className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr]">
                <aside className="hidden lg:block">
                    <nav className="sticky top-8 space-y-1 border-l border-white/10 pl-4 text-sm">
                        <div className="mb-3 font-mono-ui text-[10px] tracking-[0.2em] uppercase text-white/35">{s.toc}</div>
                        {sections.map((sec) => (
                            <a key={sec.id} href={`#${sec.id}`} className="block py-1 text-white/45 hover:text-white transition-colors">{sec.heading}</a>
                        ))}
                    </nav>
                </aside>

                <article className="prose-legal max-w-2xl text-white">
                    {doc.intro.map((p) => <p key={p} className="text-lg"><Rich text={p} /></p>)}
                    {sections.map((sec) => (
                        <section key={sec.id}>
                            <h2 id={sec.id}>{sec.heading}</h2>
                            {sec.body.map((b, i) => <Block key={i} block={b} />)}
                        </section>
                    ))}

                    <section>
                        <h2 id="iletisim">{s.contact}</h2>
                        <p>{s.contactBody}</p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 !no-underline text-white/80 hover:text-white">
                            <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
                        </a>
                    </section>
                </article>
            </div>
        </PageShell>
    );
};

export default LegalPage;
