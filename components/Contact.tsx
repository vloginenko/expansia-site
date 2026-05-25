"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";

type Status = "idle" | "loading" | "ok" | "err";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Ошибка отправки");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("err");
      setErrMsg(err instanceof Error ? err.message : "Что-то пошло не так");
    }
  }

  return (
    <Section id="contact" number="10" label="ЗАЯВКА">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-acid">
            давайте посчитаем
          </div>
          <h2 className="mt-4 font-display text-[40px] font-bold leading-[0.95] tracking-tighter2 lg:text-[72px]">
            Напишите. <span className="text-grad">Обсудим.</span>
          </h2>
          <p className="mt-7 max-w-[480px] text-[16px] leading-[1.6] text-ink/90 lg:text-[18px]">
            Поговорим, чем можем быть полезны, и накидаем план работы под вашу
            задачу. Без давления и обязательств.
          </p>

          <div className="mt-10 space-y-3 font-mono text-[12px] uppercase tracking-[0.18em] text-ink/90">
            <div>
              <span className="text-muted">tg ·</span>{" "}
              <a className="ulink" href="https://t.me/expansia">
                @expansia
              </a>
            </div>
            <div>
              <span className="text-muted">mail ·</span>{" "}
              <a className="ulink" href="mailto:hello@expansia.agency">
                hello@expansia.agency
              </a>
            </div>
            <div className="text-muted">пн–пт · 10:00–19:00 мск</div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hairline bg-panel p-6 lg:p-8"
        >
          <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            <span>форма / лид / v.2</span>
            <span className="text-acid">● защищено</span>
          </div>

          <div className="space-y-5">
            <Field name="name" label="Имя" placeholder="Как к вам обращаться" required />
            <Field name="niche" label="Ниша / бизнес" placeholder="Клиника, инфобиз, e-com…" required />
            <Field name="mrr" label="Текущий оборот / MRR" placeholder="₽ в месяц, примерно" />
            <Field name="goal" label="Желаемый объём заявок" placeholder="Сколько лидов хочется в месяц" />
            <Field name="contact" label="Контакт" placeholder="Telegram / e-mail / телефон" required />
            <Textarea name="comment" label="Комментарий" placeholder="Если есть что добавить" />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-acid mt-8 w-full px-5 py-4 font-mono text-[12px] uppercase tracking-[0.18em] disabled:opacity-60"
          >
            {status === "loading"
              ? "Отправляем…"
              : status === "ok"
              ? "Получили. Свяжемся."
              : "Получить план и расчёт →"}
          </button>

          {status === "err" && (
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
              {errMsg}
            </p>
          )}
          {status === "ok" && (
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-acid">
              Заявка принята. Напишем в течение рабочего дня.
            </p>
          )}

          <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted">
            Нажимая, вы соглашаетесь с обработкой персональных данных.
            Не передаём третьим лицам, не шлём рассылок.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  placeholder,
  required,
}: {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        <span>{label}</span>
        {required && <span className="text-acid">*</span>}
      </span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-line bg-transparent py-3 text-[15px] text-ink placeholder:text-ink/30 focus:border-acid focus:outline-none"
      />
    </label>
  );
}

function Textarea({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        {label}
      </span>
      <textarea
        name={name}
        rows={3}
        placeholder={placeholder}
        className="w-full resize-none border-b border-line bg-transparent py-3 text-[15px] text-ink placeholder:text-ink/30 focus:border-acid focus:outline-none"
      />
    </label>
  );
}
