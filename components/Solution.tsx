"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const cards = [
  {
    n: "01",
    big: "8 → 1",
    title: "Редакция в одном продюсере",
    body: "Сценарист, монтажёр, SMM и таргетолог — заменены пайплайном CG Pro. Сверху остаётся один человек, который следит, чтобы фабрика не уезжала в посредственность.",
  },
  {
    n: "02",
    big: "до 900",
    title: "Уникальных видео в месяц",
    body: "Не копии и не нарезки. Каждый ролик — отдельный сценарий, хук, монтажный ритм и музыка. Алгоритмы видят разный контент, охваты не режутся, аккаунты не уходят в shadowban.",
  },
  {
    n: "03",
    big: "₽190",
    title: "Себестоимость ролика",
    body: "Один ролик в нашем конвейере стоит как обед, а не как съёмочный день. На сэкономленные деньги работает воронка и A/B-тесты, а не зарплаты.",
  },
  {
    n: "04",
    big: "→ заявка",
    title: "Каждое видео ведёт к шагу",
    body: "Контент не висит «для красивой ленты». Каждый ролик зашит в маршрут: лид-магнит, DM-сценарий, бот, CRM. Просмотр без действия для нас — брак.",
  },
];

export default function Solution() {
  return (
    <Section id="solution" number="03" label="РЕШЕНИЕ">
      <div className="mb-14">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          что предлагаем
        </div>
        <h2 className="mt-4 max-w-[920px] font-display text-[40px] leading-[1] tracking-tighter2 lg:text-[72px]">
          Не редакция. <span className="italic">Конвейер.</span>
          <br />
          С продюсером сверху и воронкой снизу.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
        {cards.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="bg-bg p-8 lg:p-10"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                /{c.n}
              </span>
              <span className="font-display text-[60px] leading-none tracking-tighter2 text-ink lg:text-[80px]">
                {c.big}
              </span>
            </div>
            <h3 className="mt-6 font-display text-[26px] leading-tight tracking-tightish lg:text-[30px]">
              {c.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.55] text-ink/90 lg:text-[16px]">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
