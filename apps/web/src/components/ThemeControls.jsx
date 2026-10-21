import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { alternatePath } from '@/data/apps';

export default function ThemeControls() {
    const navigate = useNavigate();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    const isDark = theme !== 'light';
    const { pathname } = useLocation();
    // Çevirisi olan sayfalarda TR / EN anahtarı.
    const alt = alternatePath(pathname);
    const isEn = pathname.startsWith('/en/');

    return (
        <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-1.5 py-1.5 backdrop-blur-md">
            <button
                onClick={() => navigate(-1)}
                aria-label="Geri"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:bg-white/5 hover:text-white transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
            </button>
            <span className="h-4 w-px bg-white/10" />
            {alt && (
                <>
                    <Link
                        to={alt}
                        aria-label={isEn ? 'Türkçe' : 'English'}
                        className="inline-flex h-8 items-center gap-1 rounded-full px-2 font-mono-ui text-[11px] tracking-[0.1em] text-white/45 hover:bg-white/5 transition-colors"
                    >
                        <span className={isEn ? '' : 'text-white'}>TR</span>
                        <span className="text-white/20">/</span>
                        <span className={isEn ? 'text-white' : ''}>EN</span>
                    </Link>
                    <span className="h-4 w-px bg-white/10" />
                </>
            )}
            <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                aria-label="Tema değiştir"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:bg-white/5 hover:text-white transition-colors"
            >
                {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
        </div>
    );
}
