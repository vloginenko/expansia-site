"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const cases = [
  {
    tag: "сами на себе · флагман",
    title: "Фабрику обкатали на собственном агентстве",
    before: "В январе у нас был один Telegram-канал на 1 200 человек и сарафан. Хотели вырастить входящий поток до 80 квалифицированных заявок в месяц без таргета.",
    did: "Включили на себя ту же фабрику, что продаём клиентам. 90 видео в месяц, нейроаватар основателя, B-roll из старых эфиров. Воронка: лид-магнит «как мы делаем 60 видео без съёмок» → DM-бот → созвон.",
    result: "За 4 месяца — 6.8M просмотров, 412 заявок, 71 договор. Сейчас 80% входящих — из контента, а не с рекомендаций. Если не работает на нас — не имеем права продавать.",
    featured: true,
  },
  {
    tag: "недвижимость · РФ",
    title: "Из 0 в 12 млн просмотров за квартал",
    before: "Эксперт по новостройкам без блога. Один аккаунт, 800 подписчиков.",
    did: "Сняли два часа интервью. Из них собрали 84 ролика за 3 месяца. Подключили DM-бот, который квалифицирует и записывает на встречу.",
    result: "12.4M просмотров, 1 470 заявок, 38 закрытых сделок. Окупились на втором месяце.",
  },
  {
    tag: "инвестиции · СНГ",
    title: "Заявка за 340 ₽ вместо 2 100 ₽",
    before: "Платный канал держался на таргете. CPL рос каждый месяц, к маю стало нерентабельно.",
    did: "Перенесли 70% бюджета в фабрику. Сделали 5 контент-векторов, нейроаватар для рутины, живые съёмки — только под кейсы.",
    result: "CPL упал в 6.1 раза за 4 месяца. Платный канал оставили на ретаргет.",
  },
  {
    tag: "косметология · клиника",
    title: "ROI ×4.8 на горизонте полугода",
    before: "Сетка из 3 клиник, общий блог в запущенном состоянии, поток только из карт и таргета.",
    did: "Подняли отдельный аккаунт под главврача, 60 видео/мес, воронка через лид-магнит «разбор пациента». CRM-интеграция с записью.",
    result: "В клинику пришло 612 новых пациентов за 6 месяцев. ROI ×4.8 без учёта повторных визитов.",
  },
];

export default function Cases() {
  return (
    <Section id="cases" number="08" label="ЦИФРЫ">
      <div className="mb-12">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          что получилось
        </div>
        <h2 className="mt-4 max-w-[920px] font-display text-[40px] leading-[1] tracking-tighter2 lg:text-[64px]">
          Не «отзывы», а <span className="italic">цифры из&nbsp;CRM.</span>
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
                {c.featured ? "★ флагман · мы сами" : `кейс / 0${i + 1}`}
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
