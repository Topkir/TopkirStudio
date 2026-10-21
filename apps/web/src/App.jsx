import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
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
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
            </MotionConfig>
        </ThemeProvider>
    );
}

export default App;
