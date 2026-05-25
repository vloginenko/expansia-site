"use client";
import { motion } from "framer-motion";
import Section from "./Section";

export default function CGPro() {
  return (
    <Section id="cgpro" number="07" label="CG PRO">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden p-8 lg:p-16"
        style={{
          background:
            "linear-gradient(120deg, #00D4FF 0%, #7C5CFF 60%, #B58CFF 100%)",
          color: "#0A0E1B",
        }}
      >
        <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bg/70">
          / self-serve
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bg/80">
              хотите сами
            </div>
            <h2 className="mt-3 font-display text-[44px] font-bold leading-[0.95] tracking-tighter2 lg:text-[80px]">
              CG&nbsp;Pro —
              <br />
              наш инструмент.
            </h2>
            <p className="mt-6 max-w-[520px] text-[16px] font-medium leading-[1.5] text-bg/90 lg:text-[19px]">
              Берите тот же движок, на котором мы делаем контент клиентам.
              Без воронки и продюсера — цена в&nbsp;разы ниже.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://congen.pro"
                className="inline-block bg-bg px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-acid transition-transform hover:-translate-y-1"
              >
                Открыть CG Pro →
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-bg hover:bg-bg/10"
                style={{ boxShadow: "inset 0 0 0 1px #0A0E1B" }}
              >
                Обсудить
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { k: "от 2 990 ₽", v: "в месяц" },
              { k: "8 минут", v: "от идеи до Reels" },
              { k: "1 клик", v: "публикация TikTok / Reels / Shorts" },
            ].map((s) => (
              <div
                key={s.k}
                className="flex items-baseline justify-between border-b border-bg/20 pb-3"
              >
                <span className="font-display text-[28px] font-bold leading-none lg:text-[34px]">
                  {s.k}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bg/70">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
