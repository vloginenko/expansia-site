"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const stats = [
  { k: "Цена клика в рекламе", v: "+38%", note: "год к году" },
];

export default function Problem() {
  return (
    <Section id="problem" number="02" label="РЫНОК">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
              положение дел
            </div>
            <h2 className="mt-4 font-display text-[40px] font-bold leading-[0.95] tracking-tighter2 lg:text-[64px]">
              Реклама дорожает.
              <br />
              Эффективность <span className="text-grad">падает.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-[1.6] text-ink/90 lg:text-[19px]">
              <p className="text-ink">
                Платный трафик перестал окупаться. Клик дорожает, покупатель — нет.
              </p>
              <p>
                Контент-маркетинг работает, но классическая команда —
                это <span className="bg-acid/15 px-1 text-ink">5–8 человек и&nbsp;от&nbsp;400к&nbsp;₽ в&nbsp;месяц</span>.
                Полгода до результата. Постоянный контроль.
              </p>
              <p className="text-muted">
                Бизнес знает, что контент нужен. Но&nbsp;содержать такую команду не&nbsp;готов.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="sticky top-32 grid grid-cols-1 gap-px bg-line">
            {stats.map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-bg p-6 transition-colors hover:bg-panel"
              >
                <div className="font-sans text-[15px] font-semibold uppercase tracking-[0.08em] text-ink lg:text-[17px]">
                  {s.k}
                </div>
                <div className="mt-4 bignum font-display text-[72px] font-bold leading-none tracking-tighter2 lg:text-[110px]">
                  {s.v}
                </div>
                <div className="mt-3 text-[14px] text-ink/85 lg:text-[15px]">
                  {s.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
