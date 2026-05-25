import type { Metadata } from "next";
import { JetBrains_Mono, Unbounded, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Экспансия — контент-фабрика с гарантией просмотров",
  description:
    "Строим контент-фабрики на базе AI-сервиса CG Pro. Вертикальное видео и воронка под ключ. По договору, с гарантией просмотров.",
  openGraph: {
    title: "Экспансия — контент-фабрика с гарантией просмотров",
    description:
      "AI-производство вертикального контента плюс воронка продаж. Не пакет постов, а поток заявок.",
    type: "website",
    locale: "ru_RU",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${jetbrains.variable} ${unbounded.variable}`}
    >
      <body className="font-sans antialiased">
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
                  "Производство 30–900 вертикальных видео в месяц с гарантией просмотров по договору.",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
