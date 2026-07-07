import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, CheckCircle2, Mail, Loader2 } from "lucide-react";
import { Nav, Footer } from "@/components/site";

const fieldClass =
  "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/70 focus:bg-secondary/70";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await pocketbaseClient.collection("contact_messages").create({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[64rem] items-center justify-between px-6 py-4">
          <Nav />
        </div>
      </header>

      <main className="mx-auto max-w-[40rem] px-6 pt-14">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} /> Geri
        </Link>

        <div className="mt-8 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary">
          <Mail className="h-3.5 w-3.5" strokeWidth={2} /> İletişim
        </div>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Bize ulaşın
        </h1>
        <p className="mt-4 max-w-prose text-muted-foreground">
          Bir sorun, öneri veya iş birliği fikriniz mi var? Formu doldurun,
          en kısa sürede size geri dönelim.
        </p>

        {status === "success" ? (
          <div className="mt-10 rounded-2xl border border-primary/40 bg-primary/5 p-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-primary" strokeWidth={1.75} />
            <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
              Mesajınız gönderildi
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-xl border border-border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary/60"
            >
              Yeni mesaj gönder
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                Ad
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Adınız"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                E-posta
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="ornek@eposta.com"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                Mesaj
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={update("message")}
                placeholder="Mesajınızı buraya yazın..."
                className={`${fieldClass} resize-y`}
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-px active:scale-[0.98] disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} /> Gönderiliyor
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" strokeWidth={2} /> Gönder
                </>
              )}
            </button>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}
