import { NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(2, "Слишком короткое имя").max(120),
  niche: z.string().min(2).max(200),
  mrr: z.string().max(200).optional().default(""),
  goal: z.string().max(200).optional().default(""),
  contact: z.string().min(3, "Нужен способ связи").max(200),
  comment: z.string().max(2000).optional().default(""),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = LeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Неверные данные" },
        { status: 400 }
      );
    }

    // TODO: интеграция с CRM / Telegram-уведомлением / БД
    // Заглушка: логируем в консоль сервера
    console.log("[lead]", new Date().toISOString(), parsed.data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Не удалось обработать запрос" },
      { status: 500 }
    );
  }
}
