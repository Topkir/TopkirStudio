import React from 'react';
import { Link } from 'react-router-dom';
import { NavPill, PageShell, usePageMeta } from '@/components/SiteChrome';

const NotFoundPage = () => {
    usePageMeta('Sayfa bulunamadı');
    return (
        <PageShell aurora>
            <NavPill />
            <div className="mt-24 text-center">
                <div className="font-display text-[8rem] font-bold leading-none text-gradient">404</div>
                <p className="mt-4 text-lg text-white/55">Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.</p>
                <Link to="/" className="mt-8 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black">Ana sayfaya dön</Link>
            </div>
        </PageShell>
    );
};

export default NotFoundPage;
