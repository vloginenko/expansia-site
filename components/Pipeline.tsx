"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const steps = [
  {
    n: "01",
    title: "Аудит и стратегия",
    body: "Разбираем нишу, конкурентов, продукт. Собираем контент-векторы.",
    tag: "3 дня",
  },
  {
    n: "02",
    title: "Сборка фабрики",
    body: "Делаем аватара, подбираем голос и стиль монтажа под ваш бренд.",
    tag: "4 дня",
  },
  {
    n: "03",
    title: "Производство",
    body: "AI пишет сценарии, монтирует и публикует. От 3 аккаунтов на платформу. Продюсер докручивает.",
    tag: "ежедневно",
  },
  {
    n: "04",
    title: "Воронка",
    body: "Лид-магнит, чат-бот, CRM, ретаргет. Зритель идёт от ролика до заявки без потерь.",
    tag: "под ключ",
  },
  {
    n: "05",
    title: "Аналитика",
    body: "Недельный отчёт с цифрами, не со слайдами. Что работает — масштабируем.",
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
        <h2 className="mt-4 max-w-[920px] font-display text-[40px] font-bold leading-[0.95] tracking-tighter2 lg:text-[64px]">
          От ниши — до&nbsp;заявки в&nbsp;CRM.{" "}
          <span className="text-grad">Пять шагов.</span>
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
              <p className="mt-2 max-w-[640px] text-[15px] leading-[1.55] text-ink/90 lg:text-[16px]">
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
