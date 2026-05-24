# Экспансия — лендинг

Одностраничный сайт агентства «Экспансия». Контент-фабрика на базе CG Pro с гарантией просмотров по договору.

## Стек

- Next.js 14 (App Router, output: standalone) + TypeScript strict
- Tailwind CSS
- Шрифты с полной кириллицей: **Cormorant Garamond** (display italic), **Onest** (sans), **JetBrains Mono** (mono)
- Framer Motion для скролл-анимаций
- Zod на серверной валидации `/api/lead`

## Локальный запуск

```bash
cd expansia-site
npm install
npm run dev
```

Открыть `http://localhost:3000`.

## Деплой

### Вариант 1 — Timeweb Cloud Apps (ближайший русский аналог Vercel)

Самый быстрый путь. Git-push → автобилд → preview-URL, поддержка Next.js из коробки, серверные роуты (`/api/lead`) работают.

1. Залить проект в Git (Gitflic / GitHub / GitVerse).
2. В панели Timeweb Cloud: **Apps → Создать приложение → Frontend → Next.js**.
3. Подключить репозиторий, указать корень: `expansia-site`.
4. Build command: `npm run build`. Run command: `npm start`. Node ≥ 20.
5. Привязать домен в разделе «Домены», SSL автоматически.

Альтернативы того же класса:

- **Yandex Cloud Serverless Containers** — деплой через тот же `Dockerfile` (см. ниже), управление через `yc`.
- **VK Cloud Apps** — аналогично Timeweb, есть нативная поддержка Next.js.
- **Selectel Container Registry + Managed Kubernetes** — для тех, кому нужен k8s.

### Вариант 2 — собственный VPS (Docker)

```bash
# на сервере
git clone <repo>
cd expansia-site
docker compose up -d --build
```

Сайт поднимется на `:3000`. Перед ним вешаем nginx с SSL:

```nginx
server {
    listen 443 ssl http2;
    server_name expansia.agency;

    ssl_certificate     /etc/letsencrypt/live/expansia.agency/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/expansia.agency/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Образ — multi-stage, финальный слой ~120 МБ на `node:20-alpine` с непривилегированным юзером.

## Структура

```
expansia-site/
├── app/
│   ├── layout.tsx        # шрифты с кириллицей, метаданные, schema.org
│   ├── page.tsx
│   ├── globals.css       # дизайн-токены, grain, hairline, marquee
│   └── api/lead/route.ts # серверная валидация формы (Zod)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx          # §01 — манифест + стек Reels
│   ├── Ticker.tsx        # бегущая строка рыночных данных
│   ├── Problem.tsx       # §02 — состояние рынка
│   ├── Solution.tsx      # §03 — что предлагаем
│   ├── Pipeline.tsx      # §04 — как работает фабрика
│   ├── Guarantees.tsx    # §05 — пункты договора
│   ├── Audience.tsx      # §06 — для кого
│   ├── CGPro.tsx         # §07 — self-serve блок
│   ├── Cases.tsx         # §08 — цифры и кейсы
│   ├── Pricing.tsx       # §09 — тарифы
│   ├── FAQ.tsx           # §10 — вопросы
│   ├── Contact.tsx       # §11 — форма заявки
│   ├── Footer.tsx
│   ├── ReelStack.tsx
│   └── Section.tsx
├── Dockerfile
├── docker-compose.yml
└── lib/utils.ts
```

## Дизайн-направление

Индустриально-редакционная эстетика. Бумажно-кремовый текст `#F2EDE4` на тёплом near-black `#0B0B0A`, кислотно-жёлтый акцент `#D6FF3B` как hi-vis на производстве. Нумерованные секции `§NN / ЯРЛЫК` как в манифесте, мокапы Reels стопкой под наклоном, мономаркеры с данными в полях, плёночный шум поверх страницы, hairline-границы вместо карточек с тенями.

Шрифты — все с полной поддержкой кириллицы:

- **Cormorant Garamond** italic — display, акценты в заголовках
- **Onest** — основной текст (российский гротеск)
- **JetBrains Mono** — данные, мета, теги

## Принципы текстов

Тон — «основатель пишет в свой телеграм-канал, а не пресс-релиз». Нет канцелярита, маркетинговых штампов, AI-конструкций, эмодзи. Везде, где можно — конкретные цифры, а не эпитеты. Ритм фраз рваный, разговорный.

## Что подключить перед боем

- `app/api/lead/route.ts` — заменить `console.log` на боевое: Telegram-бот для уведомлений, CRM (amoCRM / Bitrix24 / кастом), запись в БД.
- Реальные кейсы и цифры — заменить плейсхолдеры в `components/Cases.tsx`.
- OG-картинку (1200×630), favicon, продакшен-домен в `app/layout.tsx`.

## SEO

- `schema.org/Organization` + `Service` встроены в `layout.tsx`.
- Мета-теги OG, language `ru`.
- Один H1, корректная иерархия H2/H3.
- Семантические `section`, `article`, `ol`, `nav`, `footer`.

## Производительность

- `output: standalone` — рантайм-образ без `node_modules` в финальной стадии.
- Шрифты через `next/font/google` с `display: swap` — нулевой CLS, нет внешних запросов на runtime.
- `optimizePackageImports` для framer-motion и lucide-react.
- Анимации триггерятся через `whileInView` с `once: true` — без повторных перерисовок.
