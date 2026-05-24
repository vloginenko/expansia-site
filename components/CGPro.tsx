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
        className="relative overflow-hidden bg-acid p-8 text-bg lg:p-16"
      >
        <div className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bg/70">
          / self-serve версия
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bg/70">
              хотите сами
            </div>
            <h2 className="mt-3 font-display text-[44px] leading-[0.96] tracking-tighter2 lg:text-[80px]">
              CG&nbsp;Pro — <span className="italic">наш&nbsp;инструмент.</span>
              <br />
              По подписке.
            </h2>
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.55] text-bg/85 lg:text-[18px]">
              Если у вас есть человек, который вытянет контент — берите тот же
              движок, на котором мы делаем для агентских клиентов. AI-сценарии,
              нейроаватар, монтаж, субтитры, постинг. Без воронки и продюсера —
              цена сильно ниже.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://congen.pro"
                className="inline-block bg-bg px-5 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-acid transition-transform hover:-translate-y-1"
              >
                Открыть CG Pro →
              </a>
              <a
                href="#contact"
                className="inline-block hairline px-5 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-bg hover:bg-bg/10"
                style={{ boxShadow: "inset 0 0 0 1px #0B0B0A" }}
              >
                Не уверен — обсудить
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { k: "от 2 990 ₽", v: "подписка / мес" },
              { k: "8 минут", v: "от идеи до готового Reels" },
              { k: "1 клик", v: "публикация в TikTok / Reels / Shorts" },
            ].map((s) => (
              <div
                key={s.k}
                className="flex items-baseline justify-between border-b border-bg/20 pb-3"
              >
                <span className="font-display text-[26px] leading-none lg:text-[32px]">
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
