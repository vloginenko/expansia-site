"use client";
import { motion } from "framer-motion";
import ReelStack from "./ReelStack";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative dot-grid">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 pt-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10 lg:pt-24">
        <div className="relative">
          <motion.div
            {...fade(0)}
            className="mb-6 inline-flex items-center gap-2 hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            <span className="h-1.5 w-1.5 bg-acid" />
            Агентство Экспансия · §01 / манифест
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="font-display text-[44px] leading-[0.96] tracking-tighter2 sm:text-[64px] lg:text-[88px]"
          >
            Контент-фабрика,
            <br />
            которая приводит{" "}
            <span className="italic text-acid">клиентов.</span>
          </motion.h1>

          <motion.p
            {...fade(0.25)}
            className="mt-7 max-w-[600px] text-[17px] leading-[1.6] text-ink lg:text-[19px]"
          >
            До <span className="bg-acid/15 px-1 text-ink">900&nbsp;уникальных видео</span> в&nbsp;месяц на одного клиента. Не копии,
            не нарезки — каждый ролик уникален по сценарию, хуку, монтажу
            и&nbsp;музыке, чтобы алгоритмы не понижали и не банили.
          </motion.p>

          <motion.p
            {...fade(0.32)}
            className="mt-4 max-w-[600px] text-[15px] leading-[1.55] text-ink/85 lg:text-[16px]"
          >
            Сверху — воронка, которая превращает просмотры в заявки в&nbsp;CRM.
            Снизу — наша инфраструктура: прогретые аккаунты, прокси, антибан.
            Объём и&nbsp;просмотры — цифрой в&nbsp;договоре.
          </motion.p>

          <motion.div
            {...fade(0.4)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="btn-acid px-5 py-3 font-mono text-[12px] uppercase tracking-[0.18em]"
            >
              Получить расчёт →
            </a>
            <a
              href="#pipeline"
              className="btn-ghost px-5 py-3 font-mono text-[12px] uppercase tracking-[0.18em]"
            >
              Как работает фабрика
            </a>
          </motion.div>

          <motion.div
            {...fade(0.55)}
            className="mt-12 grid max-w-[640px] grid-cols-2 gap-px bg-line lg:grid-cols-4"
          >
            {[
              { v: "до 900", l: "уникальных видео / мес" },
              { v: "от ₽190", l: "стоимость 1 ролика" },
              { v: "14 дней", l: "до первого выхода" },
              { v: "≥ 8M", l: "просмотров по договору" },
            ].map((s) => (
              <div key={s.l} className="bg-bg p-4">
                <div className="font-display text-[28px] leading-none lg:text-[34px]">
                  {s.v}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <ReelStack />
        </div>
      </div>
    </section>
  );
}
