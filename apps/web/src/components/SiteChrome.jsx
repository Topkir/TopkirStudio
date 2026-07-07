import React from 'react';
import { Link } from 'react-router-dom';
export function Eyebrow({
  children
}) {
  return <div className="font-mono-ui text-xs tracking-[0.3em] text-white/40 uppercase mb-6">
            {children}
        </div>;
}
export function NavPill() {
  return <nav className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 font-mono-ui text-[11px] tracking-[0.15em] uppercase text-white/50 backdrop-blur-sm">
            <Link to="/" className="rounded-full px-3 py-1.5 text-white/80 hover:bg-white/5 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-white/10 text-[9px] text-white">T</span>
                Topkir Studio
            </Link>
            <span className="text-white/20">·</span>
            <Link to="/uygulamalar" className="rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-white/80 transition-colors">Uygulamalar</Link>
            <span className="text-white/20">·</span>
            <Link to="/techstack" className="rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-white/80 transition-colors">Güncellemeler</Link>
            <span className="text-white/20">·</span>
            <Link to="/iletisim" className="rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-white/80 transition-colors">İletişim</Link>
            <span className="text-white/20">·</span>
            <Link to="/yayinlar" className="rounded-full px-3 py-1.5 hover:bg-white/5 hover:text-white/80 transition-colors">Sıfırdan Yayına</Link>
        </nav>;
}
export function SiteFooter() {
  return <footer className="mt-24 border-t border-white/5 py-10 text-center">
            <p className="font-mono-ui text-[11px] tracking-[0.25em] uppercase text-white/35">
                Topkir Studio · {new Date().getFullYear()}
            </p>
        </footer>;
}
