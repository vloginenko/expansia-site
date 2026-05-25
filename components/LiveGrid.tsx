"use client";
import { motion } from "framer-motion";

type Reel = {
  fill: string;
  hook: string;
  views: string;
  ctr: string;
  niche: string;
  date: string;
};

const reels: Reel[] = [
  { fill: "reel-fill-2", hook: "«Зачем платят за рекламу, если можно так»", views: "2.1M", ctr: "8.4%", niche: "недвижимость", date: "05/04" },
  { fill: "reel-fill-3", hook: "Три ошибки, из-за которых клиенту дороже", views: "847K", ctr: "11.2%", niche: "юристы", date: "05/05" },
  { fill: "reel-fill-1", hook: "Я уволил отдел маркетинга. Вот что вышло", views: "1.4M", ctr: "9.1%", niche: "e-com", date: "05/05" },
  { fill: "reel-fill-4", hook: "Так выглядит честная клиника изнутри", views: "623K", ctr: "7.7%", niche: "медицина", date: "05/06" },
  { fill: "reel-fill-2", hook: "Если вы тоже теряете деньги — посмотрите", views: "1.8M", ctr: "10.4%", niche: "финансы", date: "05/06" },
  { fill: "reel-fill-3", hook: "Что делает курс хорошим, а не «как у всех»", views: "412K", ctr: "6.9%", niche: "онлайн-школа", date: "05/07" },
  { fill: "reel-fill-4", hook: "Снято за 4 минуты. Принесло встречу за 30к", views: "956K", ctr: "8.8%", niche: "SaaS", date: "05/07" },
  { fill: "reel-fill-1", hook: "Эта франшиза окупается не там, где обещают", views: "1.2M", ctr: "9.6%", niche: "франшизы", date: "05/08" },
  { fill: "reel-fill-3", hook: "Почему клиника на 3 врача растёт быстрее сетки", views: "534K", ctr: "7.4%", niche: "медицина", date: "05/08" },
  { fill: "reel-fill-2", hook: "Я думал, что вырос. Цифры показали обратное", views: "2.6M", ctr: "12.1%", niche: "бизнес", date: "05/09" },
];

export default function LiveGrid() {
  // Дублирую массив для бесшовной marquee-ленты
  const row = [...reels, ...reels];

  return (
    <section className="hairline-t hairline-b relative overflow-hidden bg-panel py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
              ● live · что в эфире на этой неделе
            </div>
            <h3 className="mt-3 font-display text-[32px] font-bold leading-[0.95] tracking-tighter2 lg:text-[48px]">
              Что сейчас работает <span className="text-grad">на&nbsp;клиентов.</span>
            </h3>
          </div>
          <div className="hairline px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            обновлено: пн 09:14 · 38 роликов / нед
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Левый и правый fade, чтобы плёночное «исчезновение» */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-panel to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-panel to-transparent" />

        <div className="flex animate-ticker-slow gap-4 will-change-transform">
          {row.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.25 }}
              className={`${r.fill} hairline relative h-[320px] w-[180px] flex-shrink-0 overflow-hidden lg:h-[360px] lg:w-[202px]`}
            >
              {/* top meta */}
              <div className="absolute left-2 right-2 top-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-ink/80">
                <span>{r.date}</span>
                <span className="bg-bg/70 px-1.5 py-0.5 text-acid">● live</span>
              </div>

              {/* niche tag */}
              <div className="absolute left-2 top-9 hairline bg-bg/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/85">
                {r.niche}
              </div>

              {/* hook + metrics */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-display text-[17px] leading-[1.1] text-ink lg:text-[19px]">
                  {r.hook}
                </p>
                <div className="mt-3 h-px bg-ink/30" />
                <div className="mt-2 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-ink">
                    {r.views} <span className="text-muted">просмотров</span>
                  </span>
                  <span className="text-acid">ctr {r.ctr}</span>
                </div>
              </div>

              {/* timecode bar */}
              <div className="absolute right-2 top-9 font-mono text-[9px] uppercase tracking-[0.18em] text-ink/60">
                00:{14 + (i % 12)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {[
            { v: "8.4M", l: "просмотров за месяц / по всем клиентам" },
            { v: "9.1%", l: "средний CTR" },
            { v: "₽184", l: "цена 1 000 просмотров" },
            { v: "₽340", l: "средняя цена заявки" },
          ].map((s) => (
            <div key={s.l} className="bg-panel p-5 lg:p-6">
              <div className="bignum font-display text-[36px] leading-none tracking-tighter2 lg:text-[44px]">
                {s.v}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
