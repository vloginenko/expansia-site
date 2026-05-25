const items = [
  "CPM в таргете ↑ 38% год к году",
  "Reels: 2.3 млрд просмотров в сутки",
  "Органический CTR коротких видео × 4.2 vs пост",
  "Цена редакции in-house: 380–720к ₽/мес",
  "Окно внимания пользователя — 1.7 сек",
  "TikTok-аудитория в РФ — 79 млн",
  "Алгоритмы поощряют постинг 30+/мес",
  "Reels-комментарий → DM: конверсия 6–9%",
];

export default function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="hairline-t hairline-b overflow-hidden bg-panel py-3">
      <div className="flex animate-ticker whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/90"
          >
            <span className="text-acid">●</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
