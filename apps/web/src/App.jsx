import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/oyun/:id" element={<GamePage />} />
                <Route path="/iletisim" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;