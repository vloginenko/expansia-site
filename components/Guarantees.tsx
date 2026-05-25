"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const items = [
  {
    n: "§5.1",
    title: "Объём публикаций",
    body: "Количество роликов в месяц — цифрой в приложении к договору. Не «постараемся».",
  },
  {
    n: "§5.2",
    title: "Минимум просмотров",
    body: "Нижняя планка охватов прописана в договоре. Считаем по сырым данным площадок.",
  },
  {
    n: "§5.3",
    title: "Не вышли на KPI — догоняем бесплатно",
    body: "Не закрыли план — следующий месяц работаем без оплаты, пока не выведем цифру.",
  },
  {
    n: "§5.4",
    title: "Старт за 7 дней",
    body: "От договора до первого ролика — неделя. Задержимся по нашей вине — компенсируем работой.",
  },
  {
    n: "§5.5",
    title: "Прозрачный дашборд",
    body: "Видите 24/7: что в работе, что опубликовано, какие цифры. Без отчётов на 40 слайдов.",
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
          <h2 className="mt-4 font-display text-[40px] font-bold leading-[0.95] tracking-tighter2 lg:text-[64px]">
            Гарантия — <span className="text-grad">в&nbsp;договоре.</span>
            <br />
            Не на сайте.
          </h2>
        </div>
        <div className="flex items-end">
          <p className="max-w-[480px] text-[16px] leading-[1.6] text-ink/90 lg:text-[19px]">
            Работаем по договору с&nbsp;KPI. Не добрали — догоняем за&nbsp;свой счёт.
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
            <p className="mt-3 max-w-[440px] text-[15px] leading-[1.55] text-ink/90 lg:text-[16px]">
              {it.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
