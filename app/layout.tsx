import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// SEO対策のためのメタデータ
export const metadata: Metadata = {
  title: "◯ - だいきとひかりのバンライフ物語",
  description:
    "だいきとひかりが紡ぐ、まるで夢のような旅の記録。季節と出会いをめぐるバンライフの物語。日本全国の美しい風景、心温まる出会い、車中泊スポット、装備レビュー、そして日々の小さな感動を綴るブログ。",
  keywords: [
    "◯",
    "まるでめぐる",
    "バンライフ",
    "日本一周",
    "車中泊",
    "旅",
    "ブログ",
    "だいき",
    "ひかり",
    "夫婦旅",
    "アウトドア",
    "絶景",
    "出会い",
    "夢のような旅",
  ],
  openGraph: {
    title: "◯ - だいきとひかりのバンライフ物語",
    description:
      "だいきとひかりが紡ぐ、まるで夢のような旅の記録。季節と出会いをめぐるバンライフの物語。日本全国の美しい風景、心温まる出会い、車中泊スポット、装備レビュー、そして日々の小さな感動を綴るブログ。",
    url: "https://your-vanlife-blog.com", // 実際のドメインに置き換えてください
    siteName: "◯ - だいきとひかりのバンライフ物語",
    images: [
      {
        url: "https://your-vanlife-blog.com/hero-top-image.jpg", // 実際のOGP画像URLに置き換えてください
        width: 1200,
        height: 630,
        alt: "だいきとひかりのバンライフ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "◯ - だいきとひかりのバンライフ物語",
    description:
      "だいきとひかりが紡ぐ、まるで夢のような旅の記録。季節と出会いをめぐるバンライフの物語。日本全国の美しい風景、心温まる出会い、車中泊スポット、装備レビュー、そして日々の小さな感動を綴るブログ。",
    images: ["https://your-vanlife-blog.com/hero-top-image.jpg"], // 実際のTwitterカード画像URLに置き換えてください
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // canonical: "https://your-vanlife-blog.com", // 実際の正規URLに置き換えてください
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
