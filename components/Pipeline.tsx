"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const steps = [
  {
    n: "01",
    title: "Аудит и стратегия",
    body: "Разбираем нишу, конкурентов, продукт клиента. Собираем 3–5 контент-векторов, по которым будем работать первые два месяца.",
    tag: "5–7 дней",
  },
  {
    n: "02",
    title: "Сборка фабрики",
    body: "Подгоняем CG Pro под бренд: нейроаватар (или донор-актёр), голос, шрифты, плашки, B-roll-библиотека, тон-оф-войс.",
    tag: "7–10 дней",
  },
  {
    n: "03",
    title: "Производство",
    body: "AI пишет сценарии → нейроаватар + B-roll + субтитры word-by-word → автомонтаж → постинг по сетке. Продюсер фильтрует и докручивает.",
    tag: "ежедневно",
  },
  {
    n: "04",
    title: "Конверсионный слой",
    body: "Каждое видео ведёт в маршрут: лид-магнит, прогрев в DM, чат-бот, CRM, ретаргет. Зритель не теряется между постом и заявкой.",
    tag: "под ключ",
  },
  {
    n: "05",
    title: "Аналитика и тесты",
    body: "Недельный отчёт с цифрами, не со слайдами. A/B на хуках и обложках. Что не работает — снимаем с эфира на следующей неделе.",
    tag: "weekly",
  },
];

export default function Pipeline() {
  return (
    <Section id="pipeline" number="04" label="ФАБРИКА">
      <div className="mb-14">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          как устроено
        </div>
        <h2 className="mt-4 max-w-[920px] font-display text-[40px] leading-[1] tracking-tighter2 lg:text-[64px]">
          От ниши клиента — до заявки в&nbsp;CRM. <span className="italic">Пять шагов.</span>
        </h2>
      </div>

      <ol className="relative space-y-px bg-line">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="group grid grid-cols-[60px_1fr] items-start gap-6 bg-bg p-6 transition-colors hover:bg-panel lg:grid-cols-[100px_1fr_240px] lg:gap-10 lg:p-10"
          >
            <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-acid">
              {s.n}
            </div>
            <div>
              <h3 className="font-display text-[24px] leading-tight tracking-tightish lg:text-[34px]">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[640px] text-[15px] leading-[1.55] text-ink/70 lg:text-[16px]">
                {s.body}
              </p>
            </div>
            <div className="lg:text-right">
              <span className="inline-block hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {s.tag}
              </span>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
