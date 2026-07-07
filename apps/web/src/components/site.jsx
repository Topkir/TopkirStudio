import React from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Blocks,
  Sprout,
  Zap,
  Waves,
  Shapes,
  Gamepad2,
  Heart,
} from "lucide-react";

export const iconMap = {
  MessageSquare,
  Blocks,
  Sprout,
  Zap,
  Waves,
  Shapes,
};

export const GameIcon = ({ name, accent, className = "h-6 w-6" }) => {
  const Icon = iconMap[name] || Gamepad2;
  return <Icon className={className} style={{ color: accent }} strokeWidth={1.75} />;
};

export const Nav = () => (
  <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-muted-foreground">
    <Link
      to="/"
      className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
    >
      <Gamepad2 className="h-3.5 w-3.5" strokeWidth={2} /> Topkir Studio
    </Link>
    <span className="text-border">·</span>
    <a href="#games" className="hover:text-foreground transition-colors">
      Oyunlar
    </a>
    <span className="text-border">·</span>
    <a href="#about" className="hover:text-foreground transition-colors">
      Hakkında
    </a>
    <span className="text-border">·</span>
    <Link to="/iletisim" className="hover:text-foreground transition-colors">
      İletişim
    </Link>
  </nav>
);

export const Footer = () => (
  <footer className="mt-24 border-t border-border/60">
    <div className="mx-auto max-w-[64rem] px-6 py-10 text-center">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
        Yapıldı{" "}
        <Heart className="inline h-3 w-3 -translate-y-px text-primary" fill="currentColor" />{" "}
        Topkir Studio · iletisim@topkirstudio.com
      </p>
      <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/60">
        © {new Date().getFullYear()} — Tüm oyunlar ücretsizdir
      </p>
    </div>
  </footer>
);