import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2, Instagram, Twitter } from 'lucide-react';
import { Eyebrow, NavPill, SiteFooter } from '@/components/SiteChrome';
import ThemeControls from '@/components/ThemeControls';

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | done | error
    const [error, setError] = useState('');

    const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setError('');
        try {
            await pocketbaseClient.collection('contact_messages').create(form);
            setStatus('done');
            setForm({ name: '', email: '', message: '' });
        } catch (err) {
            setStatus('error');
            setError('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
        }
    };

    return (
        <div className="min-h-screen grain-bg">
            <ThemeControls />
            <div className="mx-auto max-w-4xl px-6 pt-10 pb-8 md:pt-16">
                <NavPill />

                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-14">
                    <Eyebrow>// İletişim</Eyebrow>
                    <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white">Bize Ulaşın</h1>
                    <p className="mt-5 text-lg text-white/50">Proje, iş birliği veya geri bildirimleriniz için mesaj bırakın.</p>
                </motion.div>

                {status === 'done' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                        className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-12 text-center"
                    >
                        <CheckCircle2 className="h-12 w-12 text-emerald-400" strokeWidth={1.5} />
                        <h2 className="font-display text-2xl font-bold text-white">Mesajınız alındı</h2>
                        <p className="text-white/50">En kısa sürede geri dönüş yapacağız.</p>
                        <button onClick={() => setStatus('idle')} className="mt-2 font-mono-ui text-xs tracking-[0.2em] uppercase text-white/50 hover:text-white">
                            Yeni mesaj gönder
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={submit}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-12 space-y-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10"
                    >
                        <Field label="Ad">
                            <input required value={form.name} onChange={update('name')} type="text" placeholder="Adınız" className={inputCls} />
                        </Field>
                        <Field label="E-posta">
                            <input required value={form.email} onChange={update('email')} type="email" placeholder="ornek@eposta.com" className={inputCls} />
                        </Field>
                        <Field label="Mesaj">
                            <textarea required value={form.message} onChange={update('message')} rows={5} placeholder="Mesajınızı yazın..." className={`${inputCls} resize-none`} />
                        </Field>

                        {status === 'error' && <p className="text-sm text-red-400">{error}</p>}

                        <button
                            type="submit" disabled={status === 'loading'}
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60"
                        >
                            {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                            {status === 'loading' ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                        </button>
                    </motion.form>
                )}

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    <span className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/40">Sosyal Medya</span>
                    <a href="https://www.instagram.com/a_topkir/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 hover:border-white/15 hover:text-white transition-colors">
                        <Instagram className="h-4 w-4" /> Instagram
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 hover:border-white/15 hover:text-white transition-colors">
                        <Twitter className="h-4 w-4" /> Twitter / X
                    </a>
                </div>

                <SiteFooter />
            </div>
        </div>
    );
};

const inputCls =
  'w-full rounded-xl border border-black/10 bg-black px-4 py-3 !text-white placeholder:text-gray-500 outline-none';

function Field({ label, children }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-mono-ui text-[11px] tracking-[0.2em] uppercase text-white/45">{label}</label>
            {children}
        </div>
    );
}

export default ContactPage;
