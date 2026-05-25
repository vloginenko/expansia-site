"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const faq = [
  {
    q: "Чем вы отличаетесь от SMM-агентства?",
    a: "SMM продаёт время сотрудников. Мы — результат в просмотрах и заявках, закреплённый в договоре. Внутри не команда из людей, а AI-конвейер с продюсером сверху. Поэтому объёма в 5–10 раз больше при цене в 5–7 раз ниже.",
  },
  {
    q: "Почему вертикальное видео?",
    a: "Алгоритмы Reels, Shorts и TikTok раздают органический охват щедрее всех остальных форматов. Мы работаем там, где площадка сама платит за нас вниманием аудитории.",
  },
  {
    q: "Что если контент не залетит?",
    a: "В договоре — минимальный KPI по просмотрам. Не добрали — следующий месяц работаем бесплатно, пока цифру не закроем.",
  },
  {
    q: "Кому принадлежит контент и аккаунты?",
    a: "Всё клиенту. Аккаунты, исходники, права на аватара — ваши. После окончания работы можете продолжить через CG Pro самостоятельно.",
  },
  {
    q: "Сколько занимает запуск?",
    a: "От договора до первого ролика — 7 дней. Стабильные результаты по KPI — с третьего месяца: первые два уходят на разгон алгоритмов.",
  },
  {
    q: "Что входит в воронку?",
    a: "Лид-магнит, DM-сценарии, чат-бот, интеграция с CRM (amoCRM / Bitrix24 / кастом), ретаргетинг, скрипты для отдела продаж. Если что-то у вас уже есть — подключаемся к существующему.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" number="09" label="ВОПРОСЫ">
      <div className="mb-12">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          частые вопросы
        </div>
        <h2 className="mt-4 max-w-[820px] font-display text-[40px] font-bold leading-[0.95] tracking-tighter2 lg:text-[60px]">
          Что спрашивают <span className="text-grad">перед&nbsp;подписанием.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-px bg-line">
        {faq.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="bg-bg">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-start justify-between gap-6 p-6 text-left transition-colors hover:bg-panel lg:p-8"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-acid">
                    Q.0{i + 1}
                  </span>
                  <span className="font-display text-[22px] leading-tight tracking-tightish lg:text-[28px]">
                    {f.q}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1 inline-block font-mono text-[24px] leading-none text-acid"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-[80px_1fr] gap-6 px-6 pb-8 lg:px-8">
                      <div />
                      <p className="max-w-[700px] text-[15px] leading-[1.65] text-ink/90 lg:text-[16px]">
                        {f.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
