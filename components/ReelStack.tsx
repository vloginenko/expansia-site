"use client";
import { motion } from "framer-motion";

type Reel = {
  fill: string;
  label: string;
  views: string;
  hook: string;
  rotate: number;
  z: number;
};

const reels: Reel[] = [
  { fill: "reel-fill-2", label: "REEL_041", views: "1.2M", hook: "«Я уволил отдел маркетинга»", rotate: -8, z: 1 },
  { fill: "reel-fill-3", label: "REEL_042", views: "847K", hook: "3 вопроса перед покупкой франшизы", rotate: 4, z: 3 },
  { fill: "reel-fill-1", label: "REEL_043", views: "２.1M", hook: "Так делают, когда нет рекламы", rotate: -2, z: 2 },
  { fill: "reel-fill-4", label: "REEL_044", views: "523K", hook: "Клиника, которая выросла без таргета", rotate: 10, z: 0 },
];

export default function ReelStack() {
  return (
    <div className="relative h-[520px] w-full lg:h-[640px]">
      {reels.map((r, i) => (
        <motion.div
          key={r.label}
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: r.rotate }}
          transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8, rotate: r.rotate * 0.4, scale: 1.03 }}
          className="absolute"
          style={{
            top: `${20 + i * 24}px`,
            left: `${i % 2 === 0 ? 8 + i * 14 : 80 + i * 6}px`,
            zIndex: r.z + 1,
          }}
        >
          <div
            className={`${r.fill} hairline relative h-[300px] w-[170px] overflow-hidden lg:h-[380px] lg:w-[214px]`}
          >
            <div className="absolute left-2 top-2 right-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-ink/90">
              <span>{r.label}</span>
              <span className="bg-bg/60 px-1.5 py-0.5">{r.views}</span>
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="mb-2 h-px bg-ink/30" />
              <p className="font-display text-[18px] leading-[1.05] text-ink lg:text-[22px]">
                {r.hook}
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="h-1 w-6 bg-acid" />
                <span className="h-1 w-2 bg-ink/40" />
                <span className="h-1 w-3 bg-ink/40" />
                <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.2em] text-ink/60">
                  00:14
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Floating metric chips */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute -right-2 top-8 hairline bg-bg px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] lg:right-4"
      >
        <div className="text-muted">cpl ↓ 4.2×</div>
        <div className="text-acid">органика 71%</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-0 hairline bg-bg px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em]"
      >
        <div className="text-muted">за 30 дней</div>
        <div className="text-ink">8.4M плеев</div>
      </motion.div>
    </div>
  );
}
