import type { Metadata } from "next";
import { JetBrains_Mono, Cormorant_Garamond, Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Экспансия — контент-фабрика с гарантией просмотров",
  description:
    "Строим контент-фабрики на базе AI-сервиса CG Pro. Вертикальное видео + конверсионная воронка. По договору. С гарантией просмотров.",
  openGraph: {
    title: "Экспансия — контент-фабрика с гарантией просмотров",
    description:
      "AI-производство вертикального контента + воронка продаж. Не пакет постов, а поток заявок.",
    type: "website",
    locale: "ru_RU",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${onest.variable} ${jetbrains.variable} ${cormorant.variable}`}
    >
      <body className="grain font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Экспансия",
              url: "https://expansia.agency",
              description:
                "Контент-агентство полного цикла: AI-производство вертикального видео и конверсионные воронки.",
              makesOffer: {
                "@type": "Service",
                name: "Контент-фабрика под ключ",
                description:
                  "Производство 30–120 вертикальных видео в месяц с гарантией просмотров по договору.",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
