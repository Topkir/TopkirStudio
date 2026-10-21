import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy, Mail, MonitorSmartphone } from 'lucide-react';
import { CONTACT_EMAIL } from '@/data/apps';
import { t } from '@/i18n';

// Düz bir mailto bağlantısı, cihazda tanımlı bir e-posta uygulaması yoksa
// hiçbir şey yapmaz. Bu buton Gmail / Outlook web, e-posta uygulaması ve
// adresi kopyalama seçeneklerini birlikte sunar.
export default function EmailButton({ subject = '', lang = 'tr', className, children }) {
    const s = t(lang);
    const [copied, setCopied] = useState(false);
    const [open, setOpen] = useState(false);
    const root = useRef(null);

    // Dışarı tıklayınca veya Esc ile kapanır.
    useEffect(() => {
        if (!open) return undefined;
        const onDown = (e) => { if (!root.current?.contains(e.target)) setOpen(false); };
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('mousedown', onDown);
        document.addEventListener('touchstart', onDown);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('touchstart', onDown);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);
    const q = encodeURIComponent(subject);
    const to = encodeURIComponent(CONTACT_EMAIL);

    const options = [
        { label: 'Gmail', href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${q}`, external: true, icon: Mail },
        { label: 'Outlook', href: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${q}`, external: true, icon: Mail },
        { label: s.mailApp, href: `mailto:${CONTACT_EMAIL}${subject ? `?subject=${q}` : ''}`, icon: MonitorSmartphone },
    ];

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // Pano erişimi yoksa adres menüde zaten seçilebilir hâlde görünüyor.
        }
    };

    const item = 'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white';

    return (
        <span ref={root} className="relative inline-block max-w-full">
            <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} className={className}>{children}</button>
            {open && (
                <div role="menu" className="email-menu absolute left-0 top-full z-50 mt-2 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-white/10 bg-[#16161a] p-2 text-white shadow-2xl shadow-black/50">
                    <div className="select-all break-all px-3 pb-2 pt-1.5 font-mono-ui text-[11px] text-white/45">{CONTACT_EMAIL}</div>
                    {options.map(({ label, href, external, icon: Icon }) => (
                        <a key={label} role="menuitem" href={href} onClick={() => setOpen(false)} className={item} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                            <Icon className="h-4 w-4 text-white/50" /> {label}
                        </a>
                    ))}
                    <button type="button" role="menuitem" onClick={copy} className={item}>
                        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-white/50" />}
                        {copied ? s.copied : s.copyAddress}
                    </button>
                </div>
            )}
        </span>
    );
}
