import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { games } from "@/data/games";
import { GameIcon, Nav, Footer } from "@/components/site";

const GameCard = ({ game, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, delay: (index % 2) * 0.06 }}
  >
    <Link
      to={`/oyun/${game.id}`}
      className="group relative flex flex-col rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-border hover:bg-secondary/40"
    >
      <div className="flex items-start justify-between">
        <span
          className="grid h-12 w-12 place-items-center rounded-xl"
          style={{ background: `${game.accent}1a` }}
        >
          <GameIcon name={game.icon} accent={game.accent} />
        </span>
        <span className="font-mono text-xs text-muted-foreground/60">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
        {game.category} · {game.metaLabel}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-foreground">
        {game.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {game.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {game.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border/70 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  </motion.div>
);

const HomePage = () => (
  <div className="min-h-[100dvh] bg-background text-foreground">
    <main className="mx-auto max-w-[64rem] px-6 pt-24 pb-8">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground"
      >
        // Topkir Studio
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl"
      >
        Oyun Rafı
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-4 max-w-md text-lg text-muted-foreground"
      >
        Mağazada yayınladığım oyunlar — hepsi burada, özgürce erişilebilir.
      </motion.p>
      <div className="mt-6">
        <Nav />
      </div>

      <section id="games" className="mt-14 grid gap-5 sm:grid-cols-2">
        {games.map((g, i) => (
          <GameCard key={g.id} game={g} index={i} />
        ))}
      </section>

      <section
        id="about"
        className="mt-14 rounded-2xl border border-border/70 bg-card p-8"
      >
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          Hakkında
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">
          Bağımsız bir oyun stüdyosu.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Topkir Studio olarak küçük, tuhaf ve keyifli oyunlar geliştiriyoruz.
          Mağazalarda yayınladığımız oyunları burada da herkesin erişebileceği
          şekilde topluyoruz. İyi eğlenceler.
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default HomePage;
