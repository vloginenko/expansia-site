import { cn } from "@/lib/utils";

type Props = {
  id: string;
  number: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, number, label, children, className }: Props) {
  return (
    <section id={id} className={cn("relative", className)}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-[44px_1fr] gap-4 px-2 lg:grid-cols-[80px_1fr] lg:px-10">
        <div className="hairline-t hairline-b relative flex items-start justify-center pt-10 lg:pt-16">
          <span className="vlabel font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            § {number} / {label}
          </span>
        </div>
        <div className="hairline-t hairline-b py-16 lg:py-24">{children}</div>
      </div>
    </section>
  );
}
