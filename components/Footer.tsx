export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="hairline-t bg-bg">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-[44px] leading-none tracking-tighter2 lg:text-[64px]">
              эксп<span className="italic">а</span>нсия
            </div>
            <p className="mt-4 max-w-[360px] text-[14px] leading-[1.55] text-ink/85">
              Контент-агентство полного цикла. Строим фабрики на CG Pro.
              Работаем по договору с гарантией просмотров.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              <span className="h-1.5 w-1.5 bg-acid" />
              принимаем 4 клиента в Q3
            </div>
          </div>

          <Col title="Навигация" links={[
            ["§02 Рынок", "#problem"],
            ["§03 Решение", "#solution"],
            ["§04 Фабрика", "#pipeline"],
            ["§05 Гарантии", "#guarantees"],
            ["§09 FAQ", "#faq"],
          ]} />

          <Col title="Продукты" links={[
            ["CG Pro / подписка", "https://congen.pro"],
            ["Экспансия / агентство", "#contact"],
            ["Кейсы", "#cases"],
            ["Партнёрка · 25%", "#contact"],
          ]} />

          <Col title="Контакты" links={[
            ["Telegram", "https://t.me/expansia"],
            ["hello@expansia.agency", "mailto:hello@expansia.agency"],
          ]} />
        </div>

        <div className="mt-14 hairline-t pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <span>© {year} Экспансия · все права у клиентов</span>
            <span>колофон · набрано в Cormorant Garamond & Onest</span>
            <span>сделано на CG Pro · v.2026.05</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-acid">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="ulink text-[14px] leading-snug text-ink/90 hover:text-ink"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
