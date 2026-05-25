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
    <section className="relative overflow-hidden">
      {/* gradient mesh + animated rings — отсылка к логотипу */}
      <div className="absolute inset-0 mesh dot-grid pointer-events-none" />
      <div className="pointer-events-none absolute left-[-10%] top-[10%] hidden lg:block">
        <div className="relative h-[600px] w-[600px]">
          <span className="ring-pulse left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-ring" />
          <span className="ring-pulse left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-ring-d" />
          <span className="ring-pulse left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-ring-d2" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 pt-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-10 lg:pt-24">
        <div className="relative">
          <motion.div
            {...fade(0)}
            className="mb-6 inline-flex items-center gap-2 hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-acid" />
            Агентство Экспансия
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="font-display text-[44px] font-bold leading-[0.95] tracking-tighter2 sm:text-[60px] lg:text-[88px]"
          >
            Контент,
            <br />
            который <span className="text-grad">приводит клиентов.</span>
          </motion.h1>

          <motion.p
            {...fade(0.25)}
            className="mt-7 max-w-[540px] text-[17px] font-medium leading-[1.55] text-ink/90 lg:text-[20px]"
          >
            До 900&nbsp;видео в&nbsp;месяц под ключ. Сценарии, монтаж, постинг
            и&nbsp;воронка. Платите за&nbsp;результат, а не за&nbsp;процесс.
          </motion.p>

          <motion.div
            {...fade(0.4)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="btn-acid px-6 py-3.5 text-[13px] uppercase tracking-[0.12em]"
            >
              Обсудить проект →
            </a>
            <a
              href="#pipeline"
              className="btn-ghost px-6 py-3.5 text-[13px] uppercase tracking-[0.12em]"
            >
              Как мы работаем
            </a>
          </motion.div>

          <motion.div
            {...fade(0.55)}
            className="mt-12 grid max-w-[600px] grid-cols-3 gap-px bg-line"
          >
            {[
              { v: "до 900", l: "видео в месяц" },
              { v: "₽340", l: "средняя цена заявки" },
              { v: "7 дней", l: "до первого ролика" },
            ].map((s) => (
              <div key={s.l} className="bg-bg p-4 lg:p-5">
                <div className="bignum font-display text-[30px] font-bold leading-none tracking-tighter2 lg:text-[40px]">
                  {s.v}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
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
