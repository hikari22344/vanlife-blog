import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "◯ アパレル | Daiki & Hikari's Vanlife Story",
  description:
    "まるで夢の中をめぐるような旅のインスピレーションを込めた、だいきとひかりのオリジナルアパレルコレクション。",
}

export default function ApparelPage() {
  return (
    <div className="min-h-screen bg-vanlife-beige-50 text-vanlife-brown-700 flex flex-col">
      {/* ヘッダー（簡略版または共通ヘッダーをインポート） */}
      <header className="w-full bg-vanlife-beige-50/90 backdrop-blur-sm border-b border-vanlife-beige-100">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between max-w-6xl">
          <Link href="/" className="text-xl font-bold text-vanlife-brown-700 flex items-center gap-3">
            <span className="text-3xl text-vanlife-orange-500">◯</span>
            だいきとひかり
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/#blog" className="text-vanlife-brown-600 hover:text-vanlife-orange-500 transition-colors">
              旅日記
            </Link>
            <Link href="/#instagram" className="text-vanlife-brown-600 hover:text-vanlife-pink-500 transition-colors">
              Instagram
            </Link>
            <Link href="/#profile" className="text-vanlife-brown-600 hover:text-vanlife-green-500 transition-colors">
              Profile
            </Link>
            <Link href="/apparel" className="text-vanlife-brown-600 hover:text-vanlife-orange-500 transition-colors">
              Apparel
            </Link>
            <Link href="/#contact" className="text-vanlife-brown-600 hover:text-vanlife-orange-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden text-vanlife-brown-700">
            <ArrowLeft className="w-5 h-5" /> {/* モバイル用に戻るボタン */}
          </Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-24 max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <span className="text-8xl md:text-9xl text-vanlife-orange-500">◯</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-vanlife-brown-700 mb-8 leading-tight">Apparel</h1>
        <p className="text-xl md:text-2xl text-vanlife-brown-600 mb-12 leading-relaxed">
          まるで夢の中をめぐるような旅のインスピレーションを日常に。
          <br />
          だいきとひかりが紡ぐ、◯な想いを込めたオリジナルアパレルコレクションです。
        </p>

        <div className="space-y-6 mb-12">
          <p className="text-lg text-vanlife-brown-700">
            Our apparel store is currently under construction.
            <br />
            Please follow us on Instagram and check our blog for the latest updates!
          </p>
        </div>

        {/* 外部ストアへの誘導ボタン（準備ができたらここに実際のリンクを設定） */}
        <Button
          asChild
          size="lg"
          className="bg-vanlife-orange-500 hover:bg-vanlife-orange-600 text-white font-bold text-base py-3 px-8 rounded-full"
        >
          <Link href="https://your-apparel-store.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-5 h-5 mr-2" />
            Go to Apparel Store (Coming Soon)
          </Link>
        </Button>

        <div className="mt-16">
          <Button
            asChild
            variant="outline"
            className="border-vanlife-beige-300 text-vanlife-brown-600 hover:bg-vanlife-beige-100 bg-transparent rounded-full"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Top
            </Link>
          </Button>
        </div>
      </main>

      {/* フッター（共通フッターをインポート） */}
      <footer className="bg-vanlife-beige-100 text-vanlife-brown-700 py-12 mt-auto">
        <div className="container mx-auto px-4 max-w-6xl text-center text-sm text-vanlife-brown-600">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-vanlife-orange-500/50">◯</span>
            <span className="text-vanlife-pink-500/50">◯</span>
            <span className="text-vanlife-green-500/50">◯</span>
          </div>
          <p>&copy; 2024 Daiki & Hikari's Vanlife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
