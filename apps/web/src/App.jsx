import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AppsPage from './pages/AppsPage';
import AppDetailPage from './pages/AppDetailPage';
import LegalPage from './pages/LegalPage';
import ContactPage from './pages/ContactPage';
import SupportPage from './pages/SupportPage';
import PressPage from './pages/PressPage';
import NotFoundPage from './pages/NotFoundPage';
import { apps } from './data/apps';

// Adı değişen uygulamanın eski adreslerini yenisine taşır (/uygulamalar/tabula/... → /uygulamalar/anlatsana/...).
function RenamedApp({ from, to }) {
    const { pathname, search, hash } = useLocation();
    return <Navigate replace to={pathname.replace(`/uygulamalar/${from}`, `/uygulamalar/${to}`) + search + hash} />;
}

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <MotionConfig reducedMotion="user">
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/uygulamalar" element={<AppsPage />} />
                    <Route path="/uygulamalar/:slug" element={<AppDetailPage />} />
                    <Route path="/uygulamalar/:slug/gizlilik" element={<LegalPage kind="privacy" />} />
                    <Route path="/uygulamalar/:slug/kullanim-sartlari" element={<LegalPage kind="terms" />} />
                    <Route path="/uygulamalar/:slug/destek" element={<SupportPage />} />
                    <Route path="/en/apps/:slug" element={<AppDetailPage />} />
                    <Route path="/en/apps/:slug/privacy" element={<LegalPage kind="privacy" />} />
                    <Route path="/en/apps/:slug/terms" element={<LegalPage kind="terms" />} />
                    <Route path="/en/apps/:slug/support" element={<SupportPage />} />
                    <Route path="/basin" element={<PressPage />} />
                    <Route path="/gizlilik" element={<LegalPage docKey="site-privacy" />} />
                    <Route path="/cerez-politikasi" element={<LegalPage docKey="cookies" />} />
                    <Route path="/iletisim" element={<ContactPage />} />
                    {apps.flatMap((a) => (a.formerSlugs ?? []).map((old) => (
                        <Route key={old} path={`/uygulamalar/${old}/*`} element={<RenamedApp from={old} to={a.slug} />} />
                    )))}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
            </MotionConfig>
        </ThemeProvider>
    );
}

export default App;
