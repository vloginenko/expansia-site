"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const faq = [
  {
    q: "Чем вы отличаетесь от обычного SMM-агентства?",
    a: "SMM-агентство продаёт время сотрудников. Мы продаём результат в просмотрах и заявках, закреплённый в договоре. Внутри — не редакция из людей, а AI-конвейер с продюсером сверху. Поэтому объём в 5–10 раз выше, а цена в 5–7 раз ниже.",
  },
  {
    q: "Почему именно вертикальное видео?",
    a: "Алгоритмы Reels, Shorts и TikTok сейчас раздают органический охват щедрее всех остальных форматов. Карусели и сторис стоят больше усилий и приносят меньше внимания. Мы фокусируемся там, где площадка платит за нас.",
  },
  {
    q: "Что если контент не залетит?",
    a: "У нас в договоре стоит минимальный KPI по просмотрам. Если в конце месяца его не добрали — следующий месяц работаем без оплаты, пока цифру не закроем. Это не маркетинг, это пункт договора, юристы у нас неплохие.",
  },
  {
    q: "Кому принадлежит контент и аккаунты?",
    a: "Всё клиенту. Аккаунты ваши, исходники видео — ваши, права на аватара — ваши. Мы оформляем доступы, но владелец один — клиент. После окончания работы вы можете продолжить вести фабрику самостоятельно через CG Pro.",
  },
  {
    q: "Сколько занимает запуск?",
    a: "От подписания договора до первого опубликованного ролика — 7 дней. Это твёрдый срок, прописан в договоре, за просрочку по нашей вине компенсируем неделю работы. Первые два месяца — фаза разгона: алгоритмам нужно собрать сигнал. Стабильные результаты по KPI — с третьего месяца, и это мы тоже предупреждаем сразу, чтобы не было сюрпризов.",
  },
  {
    q: "Что входит в воронку?",
    a: "Лид-магнит под продукт, DM-сценарии прогрева, чат-бот в Telegram/WhatsApp, интеграция с CRM (amoCRM, Bitrix24, кастом — по согласованию), ретаргетинговые сегменты, скрипты для отдела продаж. Что-то из этого у клиента может уже быть — тогда подключаемся к существующему.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" number="10" label="ВОПРОСЫ">
      <div className="mb-12">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
          частые вопросы
        </div>
        <h2 className="mt-4 max-w-[820px] font-display text-[40px] leading-[1] tracking-tighter2 lg:text-[60px]">
          Что обычно спрашивают <span className="italic">перед&nbsp;подписанием.</span>
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
