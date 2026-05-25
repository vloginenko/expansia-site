"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const cases = [
  {
    tag: "флагман · мы сами",
    title: "Обкатали фабрику на себе",
    before: "1 200 подписчиков в Telegram. Цель — 80 заявок в месяц без таргета.",
    did: "Запустили на себя свою же фабрику: 90 видео/мес, аватар основателя, воронка через лид-магнит.",
    result: "За 4 месяца — 6.8M просмотров, 412 заявок, 71 договор. 80% входящих теперь из контента.",
    featured: true,
  },
  {
    tag: "недвижимость · РФ",
    title: "12 млн просмотров за квартал",
    before: "Эксперт по новостройкам, 800 подписчиков, без блога.",
    did: "Сняли 2 часа интервью → 84 ролика за 3 месяца. Подключили DM-бот.",
    result: "12.4M просмотров, 1 470 заявок, 38 сделок. Окупились на 2-м месяце.",
  },
  {
    tag: "инвестиции · СНГ",
    title: "Заявка за 340 ₽ вместо 2 100 ₽",
    before: "Канал держался на таргете, CPL рос каждый месяц.",
    did: "70% бюджета — в фабрику. 5 контент-векторов, аватар для рутины.",
    result: "CPL упал в 6.1 раза за 4 месяца. Таргет — только на ретаргет.",
  },
  {
    tag: "косметология · клиника",
    title: "ROI ×4.8 за полгода",
    before: "Сетка из 3 клиник, поток только из карт и таргета.",
    did: "Аккаунт под главврача, 60 видео/мес, лид-магнит «разбор пациента».",
    result: "612 новых пациентов за 6 месяцев. ROI ×4.8.",
  },
];

export default function Cases() {
  return (
    <Section id="cases" number="08" label="ЦИФРЫ">
      <div className="mb-12">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          что получилось
        </div>
        <h2 className="mt-4 max-w-[920px] font-display text-[40px] font-bold leading-[0.95] tracking-tighter2 lg:text-[64px]">
          Не отзывы. <span className="text-grad">Цифры из&nbsp;CRM.</span>
        </h2>
      </div>

      <div className="space-y-px bg-line">
        {cases.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`grid grid-cols-1 gap-6 p-8 lg:grid-cols-[220px_1fr_1fr_1fr] lg:gap-10 lg:p-10 ${
              c.featured ? "bg-acid text-bg" : "bg-bg"
            }`}
          >
            <div>
              <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${c.featured ? "text-bg" : "text-acid"}`}>
                {c.featured ? "флагман · мы сами" : `кейс / 0${i + 1}`}
              </div>
              <div className={`mt-1 font-mono text-[10px] uppercase tracking-[0.22em] ${c.featured ? "text-bg/80" : "text-muted"}`}>
                {c.tag}
              </div>
              <h3 className="mt-4 font-display text-[24px] leading-tight tracking-tightish lg:text-[28px]">
                {c.title}
              </h3>
            </div>
            <div>
              <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${c.featured ? "text-bg/70" : "text-muted"}`}>
                / было
              </div>
              <p className={`mt-2 text-[14px] leading-[1.55] ${c.featured ? "text-bg/90" : "text-ink/90"}`}>{c.before}</p>
            </div>
            <div>
              <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${c.featured ? "text-bg/70" : "text-muted"}`}>
                / сделали
              </div>
              <p className={`mt-2 text-[14px] leading-[1.55] ${c.featured ? "text-bg/90" : "text-ink/90"}`}>{c.did}</p>
            </div>
            <div>
              <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${c.featured ? "text-bg" : "text-acid"}`}>
                / результат
              </div>
              <p className={`mt-2 text-[14px] leading-[1.55] ${c.featured ? "text-bg" : "text-ink"}`}>{c.result}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
