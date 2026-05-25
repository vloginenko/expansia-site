"use client";
import Link from "next/link";
import Logo from "./Logo";

const nav = [
  { href: "#problem", label: "Рынок" },
  { href: "#solution", label: "Решение" },
  { href: "#pipeline", label: "Фабрика" },
  { href: "#cases", label: "Цифры" },
  { href: "#faq", label: "Вопросы" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 hairline-b bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" aria-label="Экспансия">
          <Logo size={36} />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="ulink text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-acid hidden px-4 py-2.5 text-[12px] uppercase tracking-[0.1em] md:inline-block"
        >
          Обсудить →
        </a>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:hidden">
          Меню
        </span>
      </div>
      <div className="hairline-t flex items-center justify-between px-6 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted lg:px-10">
        <span className="flex items-center gap-2">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-glow rounded-full bg-acid" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-acid" />
          </span>
          Принимаем 4 клиента в Q3
        </span>
        <span className="hidden sm:inline">
          Москва · Алматы · удалённо
        </span>
        <span>гарантия по&nbsp;договору</span>
      </div>
    </header>
  );
}
