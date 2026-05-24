"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const items = [
  {
    n: "§5.1",
    title: "Объём публикаций",
    body: "Закрепляем количество роликов в месяц. Цифра в приложении к договору, не «постараемся».",
  },
  {
    n: "§5.2",
    title: "Минимальные просмотры",
    body: "Гарантируем нижнюю планку охватов по тарифу. Считаем по сырым данным площадок, не по скриншотам.",
  },
  {
    n: "§5.3",
    title: "Не добили — доснимем",
    body: "Если KPI месяца не закрыт — следующий месяц работаем без оплаты, пока не выйдем на план. Это в договоре, не в обещаниях.",
  },
  {
    n: "§5.4",
    title: "Прозрачный дашборд",
    body: "Доступ к рабочему окну 24/7: что в работе, что опубликовано, какие цифры. Без отчётов в PDF на 40 слайдов.",
  },
];

export default function Guarantees() {
  return (
    <Section id="guarantees" number="05" label="ГАРАНТИИ">
      <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
            что подписываем
          </div>
          <h2 className="mt-4 font-display text-[40px] leading-[1] tracking-tighter2 lg:text-[64px]">
            Гарантия по&nbsp;просмотрам.
            <br />
            <span className="italic">В договоре.</span> Не на сайте.
          </h2>
        </div>
        <div className="flex items-end">
          <p className="max-w-[480px] text-[16px] leading-[1.6] text-ink/75 lg:text-[18px]">
            Мы работаем по договору с фиксированным KPI. Если не добираем —
            догоняем за свой счёт. Так у клиента нет риска платить за «процесс»,
            а у нас нет соблазна снимать ради красоты.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={it.n}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative bg-bg p-8 lg:p-10"
          >
            <div className="absolute right-6 top-6 hairline px-2 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-acid">
              {it.n}
            </div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center hairline">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D6FF3B" strokeWidth="1.5">
                <path d="M3 12l5 5L21 4" />
              </svg>
            </div>
            <h3 className="font-display text-[26px] leading-tight tracking-tightish lg:text-[32px]">
              {it.title}
            </h3>
            <p className="mt-3 max-w-[440px] text-[15px] leading-[1.55] text-ink/70 lg:text-[16px]">
              {it.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
