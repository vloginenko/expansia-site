"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const tiers = [
  {
    name: "START",
    n: "01",
    price: "от 180 000 ₽",
    period: "в месяц",
    perUnit: "₽6 000 / ролик",
    headline: "Запуск фабрики",
    kpi: "≥ 1.5M просмотров",
    body: "Базовая конфигурация: 30 видео в месяц, один контент-вектор, базовая воронка (лид-магнит + DM-сценарий).",
    items: [
      "30 вертикальных видео / мес",
      "1 нейроаватар + 1 голос",
      "1 контент-вектор",
      "Лид-магнит + DM-сценарий",
      "Еженедельный отчёт",
    ],
  },
  {
    name: "GROWTH",
    n: "02",
    price: "от 380 000 ₽",
    period: "в месяц",
    perUnit: "₽6 333 / ролик",
    headline: "Объём и тесты",
    kpi: "≥ 4M просмотров",
    body: "Рабочий тариф для бизнеса в активной фазе. Много контента, мультиплатформенность, A/B на хуках, продвинутая воронка.",
    items: [
      "60 видео / мес · 2 платформы",
      "До 3 аватаров / спикеров",
      "3 контент-вектора",
      "Полная воронка + чат-бот",
      "A/B тесты на хуках и обложках",
      "CRM-интеграция",
    ],
    featured: true,
  },
  {
    name: "ENTERPRISE",
    n: "03",
    price: "от 690 000 ₽",
    period: "в месяц",
    perUnit: "₽5 750 / ролик",
    headline: "Несколько брендов",
    kpi: "от 10M просмотров",
    body: "Для холдингов, сеток клиник и компаний с несколькими спикерами. Несколько аватаров, отдельная команда, отдел продаж под ключ.",
    items: [
      "120+ видео / мес",
      "Без лимита аватаров",
      "Отдельный продюсер 24/7",
      "Отдел продаж под ключ",
      "Кастомные интеграции",
      "SLA по реакции 2 часа",
    ],
  },
];

export default function Pricing() {
  return (
    <Section id="pricing" number="09" label="ТАРИФЫ">
      <div className="mb-14">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          сколько стоит
        </div>
        <h2 className="mt-4 max-w-[920px] font-display text-[40px] leading-[1] tracking-tighter2 lg:text-[64px]">
          Три уровня. <span className="italic">Гарантия по&nbsp;просмотрам</span> в каждом.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px bg-line lg:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className={`relative flex flex-col p-8 lg:p-10 ${
              t.featured ? "bg-acid text-bg" : "bg-bg"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <div>
                <div
                  className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                    t.featured ? "text-bg/70" : "text-muted"
                  }`}
                >
                  /{t.n}
                </div>
                <h3
                  className={`mt-1 font-mono text-[14px] uppercase tracking-[0.2em] ${
                    t.featured ? "text-bg" : "text-ink"
                  }`}
                >
                  {t.name}
                </h3>
              </div>
              {t.featured && (
                <span className="bg-bg px-2 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-acid">
                  выбирают 7 из 10
                </span>
              )}
            </div>

            <div className="mt-8">
              <div className="font-display text-[40px] leading-none tracking-tighter2 lg:text-[52px]">
                {t.price}
              </div>
              <div
                className={`mt-2 font-mono text-[11px] uppercase tracking-[0.22em] ${
                  t.featured ? "text-bg/70" : "text-muted"
                }`}
              >
                {t.period} · <span className={t.featured ? "text-bg" : "text-acid"}>{t.perUnit}</span>
              </div>
            </div>

            <div className="mt-6 font-display text-[24px] italic leading-tight lg:text-[28px]">
              {t.headline}
            </div>
            <p
              className={`mt-3 text-[14px] leading-[1.55] ${
                t.featured ? "text-bg/80" : "text-ink/90"
              }`}
            >
              {t.body}
            </p>

            <ul className="mt-6 space-y-2.5 border-t pt-5"
                style={{ borderColor: t.featured ? "rgba(11,11,10,0.2)" : "#1F1E1B" }}>
              {t.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-2 text-[14px] leading-snug"
                >
                  <span
                    className={`mt-1.5 inline-block h-1 w-2 flex-shrink-0 ${
                      t.featured ? "bg-bg" : "bg-acid"
                    }`}
                  />
                  <span className={t.featured ? "text-bg/90" : "text-ink/85"}>{it}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-end justify-between gap-3 border-t pt-4"
                 style={{ borderColor: t.featured ? "rgba(11,11,10,0.2)" : "#1F1E1B" }}>
              <div>
                <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${t.featured ? "text-bg/70" : "text-muted"}`}>
                  KPI / договор
                </div>
                <div className="mt-1 font-display text-[22px] leading-none lg:text-[26px]">
                  {t.kpi}
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className={`mt-8 inline-block px-4 py-3 text-center font-mono text-[11px] uppercase tracking-[0.18em] transition-transform hover:-translate-y-1 ${
                t.featured
                  ? "bg-bg text-acid"
                  : "btn-acid"
              }`}
            >
              Запросить расчёт →
            </a>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 max-w-[640px] font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-muted">
        Цены — стартовые. Финал считается под нишу: сложность съёмок, нужны ли
        живые спикеры, какая воронка, какие интеграции. На созвоне даём цифру
        в течение часа.
      </p>
    </Section>
  );
}
