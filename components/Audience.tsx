"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const groups = [
  {
    h: "Эксперты и публичные персоны",
    sub: "коучи, юристы, врачи, инвестконсультанты",
    note: "Бренд строится на лице. Один созвон в квартал — фабрика делает остальное.",
  },
  {
    h: "Локальный и онлайн-бизнес",
    sub: "клиники, школы, e-commerce, SaaS, франшизы",
    note: "Сложный продукт нужно объяснять часто. 60 видео в месяц — 60 углов одной идеи.",
  },
  {
    h: "Инфопродукты и онлайн-школы",
    sub: "курсы, наставники, продюсерские центры",
    note: "Воронка важнее съёмок. Соединяем контент с прогревом и запуском.",
  },
  {
    h: "Личные бренды основателей",
    sub: "владельцы бизнеса без времени на блог",
    note: "2–3 часа съёмок в квартал → 90 единиц контента и канал, который растёт сам.",
  },
];

export default function Audience() {
  return (
    <Section id="audience" number="06" label="ДЛЯ КОГО">
      <div className="mb-14">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          с кем работаем
        </div>
        <h2 className="mt-4 max-w-[920px] font-display text-[40px] font-bold leading-[0.95] tracking-tighter2 lg:text-[60px]">
          Контент нужен <span className="text-grad">в&nbsp;продажах</span>, а не в&nbsp;ленте.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-px bg-line lg:grid-cols-2">
        {groups.map((g, i) => (
          <motion.div
            key={g.h}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-bg p-8 lg:p-10"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              0{i + 1} · сегмент
            </div>
            <h3 className="mt-3 font-display text-[28px] leading-tight tracking-tightish lg:text-[36px]">
              {g.h}
            </h3>
            <div className="mt-2 text-[13px] leading-snug text-ink/75">
              {g.sub}
            </div>
            <p className="mt-5 max-w-[480px] text-[15px] leading-[1.55] text-ink/90 lg:text-[16px]">
              {g.note}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
