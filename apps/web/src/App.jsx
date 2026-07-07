import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AppsPage from './pages/AppsPage';
import ContactPage from './pages/ContactPage';
import TechStackPage from './pages/TechStackPage';
import YayinlarPage from './pages/YayinlarPage';

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/uygulamalar" element={<AppsPage />} />
                    <Route path="/techstack" element={<TechStackPage />} />
                    <Route path="/iletisim" element={<ContactPage />} />
                    <Route path="/yayinlar" element={<YayinlarPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
