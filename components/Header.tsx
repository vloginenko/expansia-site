"use client";
import Link from "next/link";

const nav = [
  { href: "#problem", label: "§02 Рынок" },
  { href: "#solution", label: "§03 Решение" },
  { href: "#cases", label: "§08 Цифры" },
  { href: "#pricing", label: "§09 Тарифы" },
  { href: "#contact", label: "§11 Заявка" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 hairline-b bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] tracking-[0.25em] text-acid">[E]</span>
          <span className="font-display text-2xl tracking-tightish">
            эксп<span className="italic">а</span>нсия
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="ulink font-mono text-[11px] uppercase tracking-[0.18em] text-ink/90 hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-acid hidden px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] md:inline-block"
        >
          Получить расчёт →
        </a>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:hidden">
          Меню
        </span>
      </div>
      <div className="hairline-t flex items-center justify-between px-6 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted lg:px-10">
        <span>
          <span className="text-acid">●</span> Q3-2026 / принимаем 4 клиента
        </span>
        <span className="hidden sm:inline">
          Москва · Алматы · удалённо · {new Date().getFullYear()}
        </span>
        <span>с гарантией по&nbsp;договору</span>
      </div>
    </header>
  );
}
