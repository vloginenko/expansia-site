"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const stats = [
  { k: "CPM в Meta/VK", v: "+38%", note: "год к году, по нашим клиентам" },
  { k: "Выгорание креативов", v: "5–7 дней", note: "против 3–4 недель в 2022" },
  { k: "Цена редакции in-house", v: "380–720к ₽", note: "в месяц, без гарантий" },
  { k: "Время до первых результатов", v: "3–6 мес", note: "при классической команде" },
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
            <h2 className="mt-4 font-display text-[40px] leading-[1] tracking-tighter2 lg:text-[64px]">
              Реклама дорожает.
              <br />
              Внимание <span className="italic">не покупается.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.6] text-ink/90 lg:text-[18px]">
              <p className="text-ink">
                Экономика платного трафика перестала сходиться. Клик дорожает,
                покупатель — нет. Считаешь юнит-экономику в конце квартала и
                видишь: чтобы остаться в плюсе, нужно либо поднимать чек, либо
                менять канал.
              </p>
              <p>
                Каждый квартал клиент стоит дороже. Аудитории выгорают за неделю.
                Площадки режут охваты у тех, кто платит, и поднимают у тех, кто
                делает контент. Это не временно — это новая норма.
              </p>
              <p>
                Короткое вертикальное видео сейчас — единственный канал, где
                органика работает в плюс. Алгоритмы любят тех, кто публикуется
                каждый день и пробует гипотезы пачками.
              </p>
              <p className="text-ink">
                Беда в том, что собрать редакцию под такой ритм — это{" "}
                <span className="bg-acid/15 px-1 text-ink">
                  команда из 5–8 человек и операционка от 400к ₽
                </span>
                . Сценарист, оператор, монтажёр, SMM, таргетолог, продюсер.
                Полгода до первого ощутимого результата. Постоянный контроль.
              </p>
              <p className="text-muted">
                Бизнес знает, что контент нужен. Но содержать редакцию
                не&nbsp;готов. И мы его понимаем.
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
                <div className="flex items-start justify-between gap-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {s.k}
                  </div>
                  <div className="font-mono text-[9px] text-muted">
                    0{i + 1}/04
                  </div>
                </div>
                <div className="mt-3 bignum font-display text-[56px] leading-none tracking-tighter2 lg:text-[80px]">
                  {s.v}
                </div>
                <div className="mt-3 text-[13px] leading-snug text-ink/90">
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
