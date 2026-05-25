const items = [
  "CPM в таргете ↑ 38% год к году",
  "Reels: 2.3 млрд просмотров в сутки",
  "CTR коротких видео × 4.2 vs пост",
  "Окно внимания — 1.7 секунды",
  "TikTok-аудитория в РФ — 79 млн",
  "Алгоритмы любят 30+ публикаций в месяц",
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
