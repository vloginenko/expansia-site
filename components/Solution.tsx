"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const cards = [
  {
    n: "01",
    big: "8 → 1",
    title: "Вся редакция — один человек",
    body: "Сценарист, монтажёр, SMM, таргетолог. Всё это делает наш сервис. С вашей стороны — один продюсер, который следит за качеством. Это мы.",
  },
  {
    n: "02",
    big: "до 900",
    title: "Видео в месяц",
    body: "Столько контента, сколько алгоритмы любят. Ежедневный постинг, разные форматы и хуки. Снимаем с вас всю рутину: придумывание, съёмки, монтаж, публикацию.",
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
    title: "Контент = заявки, а не лайки",
    body: "Каждое видео ведёт к следующему шагу — на лид-магнит, в чат-бот, в CRM. Зритель не теряется между постом и заявкой. Просмотр без действия для нас — брак.",
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
          Делаем за&nbsp;вас. <span className="italic">Платите за&nbsp;заявки,</span>
          <br />
          а не за процесс.
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
