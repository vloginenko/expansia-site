"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const blocks = [
  {
    code: "01 / антибан",
    title: "Уникализация на уровне ДНК",
    metric: "+47%",
    metricLabel: "к охватам vs копии",
    body: "Каждый ролик собирается из своего набора компонент: хук, темп монтажа, B-roll, голос, музыка, цвет субтитров. Алгоритмы Reels и TikTok видят это как 900 разных видео, а не одно, перепощенное 900 раз. Аккаунты не уходят в shadowban.",
    keys: ["12 вариантов хука", "8 темпов монтажа", "сотни треков", "разные шрифты"],
  },
  {
    code: "02 / аккаунты",
    title: "Сеть прогретых аккаунтов",
    metric: "30–120",
    metricLabel: "профилей на клиента",
    body: "Перед публикацией каждый аккаунт прогревается 7–10 дней: смотрит свою нишу, лайкает, комментирует. Площадка видит живого пользователя, а не свежесозданный спам. После прогрева — постинг с белого IP.",
    keys: ["7–10 дней прогрева", "белые мобильные IP", "анти-detect профили", "своя ферма"],
  },
  {
    code: "03 / прокси",
    title: "Резидентские IP под каждый аккаунт",
    metric: "0",
    metricLabel: "блокировок за квартал",
    body: "Мобильные и резидентские прокси из нужного гео. Никаких датацентровых IP, на которых площадки сразу режут трафик. Каждый аккаунт сидит на своём фиксированном узле и не «прыгает» по странам.",
    keys: ["мобильные / резидентские", "фиксированный IP / аккаунт", "гео под целевую аудиторию"],
  },
  {
    code: "04 / постинг",
    title: "Автопостинг по сетке",
    metric: "24/7",
    metricLabel: "без участия клиента",
    body: "Расписание считается под аудиторию: в каких часах смотрят, в какие дни лучше залетает. Перекрёстная публикация в Reels / TikTok / Shorts. Один ролик — три площадки. Без копипасты руками.",
    keys: ["3 платформы из коробки", "оптимальное окно", "перекрёстная публикация"],
  },
  {
    code: "05 / стек",
    title: "Свой пайплайн CG Pro",
    metric: "<8 мин",
    metricLabel: "идея → готовый ролик",
    body: "Не Canva и не публичные TikTok-AI. Свой движок на DeepSeek + нейроаватаре HeyGen + автомонтажном слое. От сценария до публикации — без человека в середине, но с продюсером на ключевых точках.",
    keys: ["DeepSeek для сценариев", "HeyGen для аватаров", "ASS-субтитры word-by-word", "B-roll из 4 источников"],
  },
  {
    code: "06 / контроль",
    title: "Дашборд в реальном времени",
    metric: "weekly",
    metricLabel: "отчёт с цифрами",
    body: "В рабочем окне видно: что в очереди, что вышло, какие просмотры, какие хуки сработали, какие пора снимать с эфира. Не PDF на 40 слайдов, а живой стол. Доступ у клиента и у продюсера — обоим.",
    keys: ["live-метрики", "очередь публикаций", "A/B-результаты", "история ротаций"],
  },
];

export default function Infrastructure() {
  return (
    <Section id="infrastructure" number="04" label="ВНУТРИ">
      <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
            что под капотом
          </div>
          <h2 className="mt-4 font-display text-[40px] leading-[1] tracking-tighter2 lg:text-[68px]">
            Не «нейросеть нагенерила».
            <br />
            <span className="italic">Инженерная фабрика.</span>
          </h2>
        </div>
        <div className="flex items-end">
          <p className="max-w-[500px] text-[16px] leading-[1.6] text-ink/90 lg:text-[18px]">
            Шесть слоёв, которые делают конвейер устойчивым. Без них «сделаем
            видосы нейронкой» превращается в банхаммер от площадки на второй
            неделе и обнуляет всё, что снято.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <motion.article
            key={b.code}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
            className="group relative flex flex-col gap-5 bg-bg p-7 transition-colors hover:bg-panel lg:p-8"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-acid">
                {b.code}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                / {String(i + 1).padStart(2, "0")} из 06
              </span>
            </div>

            <div>
              <div className="bignum font-display text-[56px] leading-none tracking-tighter2 lg:text-[68px]">
                {b.metric}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {b.metricLabel}
              </div>
            </div>

            <h3 className="font-display text-[24px] leading-tight tracking-tightish lg:text-[28px]">
              {b.title}
            </h3>

            <p className="text-[14px] leading-[1.55] text-ink/90 lg:text-[15px]">
              {b.body}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 border-t border-line pt-4">
              {b.keys.map((k) => (
                <span
                  key={k}
                  className="hairline px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/85"
                >
                  {k}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
