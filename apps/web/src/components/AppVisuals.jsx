import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  BellRing, BookOpen, CircleDot, Clock, History, LayoutGrid, ShieldCheck, Sparkles, Timer, Users,
} from 'lucide-react';
import { t } from '@/i18n';

export const iconMap = { BellRing, BookOpen, CircleDot, Clock, History, LayoutGrid, ShieldCheck, Sparkles, Timer, Users };

export function AppIcon({ app, className = 'h-14 w-14' }) {
  if (app.icon) {
    return <img src={app.icon} alt={`${app.name} simgesi`} width={112} height={112} className={`${className} rounded-[22%] shadow-lg shadow-black/40`} />;
  }
  return (
    <span
      className={`${className} inline-flex items-center justify-center rounded-[22%] font-display text-2xl font-bold text-white shadow-lg shadow-black/40`}
      style={{ background: `linear-gradient(135deg, ${app.accent}, ${app.accent2})` }}
      aria-hidden="true"
    >
      {app.name[0]}
    </span>
  );
}

export function StatusBadge({ app, lang = 'tr' }) {
  const live = app.status === 'yayinda';
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono-ui text-[10px] tracking-[0.18em] uppercase ${live ? 'border-emerald-400/30 text-emerald-300' : 'border-amber-300/30 text-amber-200'}`}>
      <span className={`h-1.5 w-1.5 rounded-full pulse-dot ${live ? 'bg-emerald-400 text-emerald-400' : 'bg-amber-300 text-amber-300'}`} />
      {live ? t(lang).live : t(lang).soon}
    </span>
  );
}

const AppleLogo = (p) => (
  <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);
const PlayLogo = (p) => (
  <svg viewBox="0 0 512 512" aria-hidden="true" {...p}>
    <path fill="#34A853" d="M48 59.5v393c0 9 9.8 14.6 17.6 10l215-196.5-215-216.5C57.8 45 48 50.6 48 59.5z" />
    <path fill="#FBBC04" d="M352.7 194.6 280.6 266l72.1 71.4 84.6-48.4c18.2-10.4 18.2-36.6 0-47z" />
    <path fill="#4285F4" d="M65.6 462.5c4.6 2.6 10.3 2.8 15.4 0l271.7-125.1-72.1-71.4z" />
    <path fill="#EA4335" d="M81 49.5c-5.1-2.8-10.8-2.6-15.4 0l215 216.5 72.1-71.4z" />
  </svg>
);

export const TikTokLogo = (p) => (
  <svg viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M448 209.9a210.1 210.1 0 0 1-122.8-39.3v178.8A162.6 162.6 0 1 1 185 188.3v89.9a74.6 74.6 0 1 0 52.2 71.2V0h88a121 121 0 0 0 1.9 22.2A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
  </svg>
);

export function SocialLinks({ app, lang = 'tr' }) {
  if (!app.socials?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {app.socials.map((s) => (
        <a
          key={s.url} href={s.url} target="_blank" rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-4 text-sm text-white/70 transition-all hover:-translate-y-0.5 hover:border-white/15 hover:text-white"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black text-white shadow-[2px_2px_0_#25F4EE,-2px_-2px_0_#FE2C55] transition-shadow group-hover:shadow-[3px_3px_0_#25F4EE,-3px_-3px_0_#FE2C55]">
            <TikTokLogo className="h-3.5 w-3.5" />
          </span>
          {t(lang).followTikTok} <span className="font-semibold text-white">{s.handle}</span>
        </a>
      ))}
    </div>
  );
}

function StoreButton({ href, logo: Logo, top, bottom, soon }) {
  const base = 'inline-flex min-w-[168px] items-center gap-3 rounded-2xl px-4 py-2.5 transition-all';
  if (!href) {
    return (
      <span className={`${base} cursor-not-allowed border border-dashed border-white/15 bg-white/[0.02] text-white/45`} aria-disabled="true" title={soon}>
        <Logo className="h-6 w-6 opacity-50 grayscale" />
        <span className="leading-tight">
          <span className="block font-mono-ui text-[9px] tracking-[0.2em] uppercase">{soon}</span>
          <span className="block text-sm font-semibold">{bottom}</span>
        </span>
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} shine-btn bg-white text-black hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10 active:scale-[0.98]`}>
      <Logo className="h-6 w-6" />
      <span className="leading-tight">
        <span className="block text-[10px] opacity-70">{top}</span>
        <span className="block text-sm font-semibold">{bottom}</span>
      </span>
    </a>
  );
}

export function StoreButtons({ app, lang = 'tr' }) {
  const s = t(lang);
  return (
    <div className="flex flex-wrap gap-3">
      <StoreButton href={app.stores.appStore} logo={AppleLogo} top={s.download} bottom="App Store" soon={s.soon} />
      <StoreButton href={app.stores.googlePlay} logo={PlayLogo} top={s.getItOn} bottom="Google Play" soon={s.soon} />
    </div>
  );
}

// İmleci izleyen hafif 3B eğim. Dokunmatik cihazlarda sabit kalır.
export function Tilt({ children, className = '', max = 10 }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rx = useSpring(useTransform(y, [0, 1], [max, -max]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(x, [0, 1], [-max, max]), { stiffness: 150, damping: 18 });
  return (
    <motion.div
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width);
        y.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => { x.set(0.5); y.set(0.5); }}
    >
      {children}
    </motion.div>
  );
}

const prayers = [
  ['İmsak', '06:12'], ['Güneş', '07:38'], ['Öğle', '13:05'],
  ['İkindi', '16:08'], ['Akşam', '18:23'], ['Yatsı', '19:43'],
];

function FiruzeScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0B1530] px-4 pt-10 text-[#F6F1E7]">
      <div className="star-pattern absolute inset-0 opacity-40" />
      <div className="absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#2BB3A8]/30 blur-3xl" />
      <div className="relative text-center">
        <div className="text-[9px] tracking-[0.25em] uppercase text-[#F6F1E7]/50">İstanbul</div>
        <div className="mt-3 text-[10px] text-[#D4AF6A]">İkindi vaktine</div>
        <div className="font-display text-[26px] font-bold leading-tight">1 sa 24 dk</div>
        <svg viewBox="0 0 200 70" className="mx-auto mt-1 w-[68%]" aria-hidden="true">
          <path d="M10 65 A90 90 0 0 1 190 65" fill="none" stroke="#F6F1E7" strokeOpacity=".12" strokeWidth="3" />
          <path d="M10 65 A90 90 0 0 1 128 14" fill="none" stroke="#2BB3A8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="128" cy="14" r="5" fill="#D4AF6A" />
        </svg>
      </div>
      <div className="relative mt-2 space-y-1">
        {prayers.map(([n, t]) => {
          const active = n === 'Öğle';
          return (
            <div key={n} className={`flex items-center justify-between rounded-xl px-3 py-1.5 text-[11px] ${active ? 'bg-[#2BB3A8]/20 ring-1 ring-[#2BB3A8]/60' : 'bg-[#14213F]'}`}>
              <span className={active ? 'text-[#9be7df]' : 'text-[#F6F1E7]/70'}>{n}</span>
              <span className="font-mono-ui">{t}</span>
            </div>
          );
        })}
      </div>
      <div className="relative mt-2 flex items-center justify-between rounded-xl bg-gradient-to-r from-[#1B6F6A] to-[#0C2B33] px-3 py-2.5">
        <div>
          <div className="text-[9px] text-[#D4AF6A]">Zikir</div>
          <div className="text-[11px]">Sübhanallah</div>
        </div>
        <div className="font-display text-lg font-bold">27<span className="text-[10px] text-[#F6F1E7]/50">/33</span></div>
      </div>
    </div>
  );
}

function TabulaScreen() {
  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#2a1512] via-[#1A1210] to-[#120c0b] px-4 pt-10 text-white">
      <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-[#FB923C]/30 blur-3xl" />
      <div className="relative flex items-center justify-between text-[10px]">
        <span className="rounded-full bg-white/10 px-2 py-1 whitespace-nowrap">A · 12</span>
        <span className="font-display text-xl font-bold text-[#FB923C]">0:42</span>
        <span className="rounded-full bg-white/10 px-2 py-1 whitespace-nowrap">9 · B</span>
      </div>
      <div className="relative mt-5 rounded-2xl bg-white p-4 text-center text-black shadow-xl">
        <div className="font-display text-2xl font-bold tracking-tight">KAHVE</div>
        <div className="mx-auto my-3 h-px w-2/3 bg-black/10" />
        {['Fincan', 'Türk', 'Köpük', 'Çay', 'Sabah'].map((w) => (
          <div key={w} className="py-0.5 text-[12px] font-medium text-rose-500">{w}</div>
        ))}
      </div>
      <div className="relative mt-auto mb-6 grid grid-cols-3 gap-1.5 text-[10px] font-semibold">
        <span className="rounded-xl bg-white/10 py-2.5 text-center">Pas</span>
        <span className="rounded-xl bg-rose-500 py-2.5 text-center">Tabu</span>
        <span className="rounded-xl bg-emerald-500 py-2.5 text-center">Doğru</span>
      </div>
    </div>
  );
}

const screens = { firuze: FiruzeScreen, tabula: TabulaScreen };

export function PhoneMockup({ app, className = 'w-56' }) {
  const Screen = screens[app.mockup];
  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        <div className="phone-notch" />
        {app.screenshots[0]
          ? <img src={app.screenshots[0]} alt={`${app.name} ekran görüntüsü`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          : Screen && <Screen />}
      </div>
    </div>
  );
}
