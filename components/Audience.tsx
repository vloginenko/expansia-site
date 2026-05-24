"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const groups = [
  {
    h: "Эксперты и публичные персоны",
    sub: "коучи, юристы, врачи, инвестконсультанты, бьюти-доктора",
    note: "Бренд строится на лице. Мы вытаскиваем эксперта из камеры — снимаемся один раз в квартал, фабрика делает остальное.",
  },
  {
    h: "Локальный и онлайн-бизнес",
    sub: "клиники, школы, e-commerce, SaaS, агентства, франшизы",
    note: "Сложный продукт нужно объяснять часто и по-разному. 60 видео в месяц — это 60 углов одной идеи.",
  },
  {
    h: "Инфопродукты и онлайн-школы",
    sub: "курсы, наставники, продюсерские центры",
    note: "Воронка важнее съёмок. Мы соединяем контент с прогревом и автоматическим запуском, а не лепим Reels отдельно от продаж.",
  },
  {
    h: "Личные бренды основателей",
    sub: "владельцы бизнеса, у которых нет времени на блог",
    note: "Снимаем 2–3 часа в квартал. На выходе — 90 единиц контента и канал, который растёт сам.",
  },
];

export default function Audience() {
  return (
    <Section id="audience" number="06" label="ДЛЯ КОГО">
      <div className="mb-14">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          с кем работаем
        </div>
        <h2 className="mt-4 max-w-[920px] font-display text-[40px] leading-[1] tracking-tighter2 lg:text-[60px]">
          Берём тех, кому контент нужен <span className="italic">в продажах</span>, а не в красивой ленте.
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
