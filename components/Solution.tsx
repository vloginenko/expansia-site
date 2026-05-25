"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const cards = [
  {
    n: "01",
    big: "8 → 1",
    title: "Редакция в одном продюсере",
    body: "Сценарист, монтажёр, SMM, таргетолог — заменены AI-конвейером. Сверху — один продюсер.",
  },
  {
    n: "02",
    big: "900",
    title: "Видео в месяц",
    body: "Столько контента, сколько любят алгоритмы. Постим ежедневно, тестируем хуки пачками.",
  },
  {
    n: "03",
    big: "₽190",
    title: "Себестоимость ролика",
    body: "Ролик у нас стоит как обед, а не как съёмочный день. Бюджет уходит в воронку, а не в зарплаты.",
  },
  {
    n: "04",
    big: "→",
    title: "Контент = заявки",
    body: "Каждое видео ведёт к шагу: лид-магнит, бот, CRM. Просмотр без действия для нас — брак.",
  },
];

export default function Solution() {
  return (
    <Section id="solution" number="03" label="РЕШЕНИЕ">
      <div className="mb-14">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          что предлагаем
        </div>
        <h2 className="mt-4 max-w-[1000px] font-display text-[40px] font-bold leading-[0.95] tracking-tighter2 lg:text-[72px]">
          Делаем за&nbsp;вас.
          <br />
          <span className="text-grad">Платите за&nbsp;заявки.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="card-glow group flex flex-col gap-5 bg-bg p-7 lg:p-8"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-acid">
              /{c.n}
            </span>
            <div className="bignum font-display text-[64px] font-bold leading-none tracking-tighter2 lg:text-[88px]">
              {c.big}
            </div>
            <h3 className="font-display text-[22px] font-semibold leading-tight tracking-tightish lg:text-[26px]">
              {c.title}
            </h3>
            <p className="text-[14px] leading-[1.55] text-ink/85 lg:text-[15px]">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
