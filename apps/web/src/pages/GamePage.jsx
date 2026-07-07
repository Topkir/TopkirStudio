import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Play } from "lucide-react";
import { getGame } from "@/data/games";
import { GameIcon, Nav, Footer } from "@/components/site";

const isExternal = (url) => /^https?:/i.test(url);

const GamePage = () => {
  const { id } = useParams();
  const game = getGame(id);

  if (!game) {
    return (
      <div className="min-h-[100dvh] bg-background text-foreground grid place-items-center px-6">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold">Oyun bulunamadı</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-1.5 text-primary">
            <ArrowLeft className="h-4 w-4" /> Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  const playable = isExternal(game.playUrl);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <main className="mx-auto max-w-[64rem] px-6 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Geri
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-10 md:grid-cols-[1fr_minmax(0,20rem)] md:items-start"
        >
          <div>
            <span
              className="grid h-16 w-16 place-items-center rounded-2xl"
              style={{ background: `${game.accent}1a` }}
            >
              <GameIcon name={game.icon} accent={game.accent} className="h-8 w-8" />
            </span>
            <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              {game.category} · {game.metaLabel}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {game.title}
            </h1>
            <p
              className="mt-2 text-lg font-medium"
              style={{ color: game.accent }}
            >
              {game.subtitle}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {game.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {game.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border/70 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-8 space-y-2.5">
              {game.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: game.accent }}
                    strokeWidth={2.5}
                  />
                  {f}
                </li>
              ))}
            </ul>

            {playable ? (
              <a
                href={game.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
              >
                <Play className="h-4 w-4" fill="currentColor" /> Google Play'de oyna
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 font-semibold text-muted-foreground">
                Yakında
              </span>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
            <img
              src={game.image}
              alt={game.title}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="mt-14">
          <Nav />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GamePage;
