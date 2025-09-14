import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Mail,
  Instagram,
  Twitter,
  Youtube,
  Menu,
  ExternalLink,
  ShoppingBag,
  Shirt,
  Car,
  MessageSquare,
  Hand,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NoteArticles } from "@/components/note-articles"
import { PhotoGallery } from "@/components/photo-gallery"
import { AffiliateProductCard } from "@/components/affiliate-product-card" // 新しいコンポーネントをインポート

// 仮のブログ記事データ
const blogPosts = [
  {
    id: 1,
    title: "北海道一周の旅 - 美瑛の絶景ポイント",
    excerpt: "美瑛の丘陵地帯で出会った息をのむような絶景。朝霧に包まれた風景は一生忘れられない思い出になりました。",
    date: "2024-01-15",
    location: "北海道美瑛町",
    image: "/gallery-image-1.png", // 実際の画像パスに更新
    tags: ["北海道", "絶景", "朝霧"],
    link: "/blog/hokkaido-trip", // 実際の記事スラッグに更新
  },
  {
    id: 2,
    title: "バンライフ初心者のための装備リスト",
    excerpt: "これからバンライフを始める方に向けて、実際に使ってみて本当に必要だった装備をまとめました。",
    date: "2024-01-10",
    location: "全国",
    image: "/gallery-image-2.png", // 実際の画像パスに更新
    tags: ["装備", "初心者", "ガイド"],
    link: "/blog/vanlife-gear", // 実際の記事スラッグに更新
  },
  {
    id: 3,
    title: "九州温泉巡りの旅 - 秘湯発見記",
    excerpt: "九州の隠れた名湯を求めて山奥へ。地元の人だけが知る秘湯で心も体もリフレッシュできました。",
    date: "2024-01-05",
    location: "九州各地",
    image: "/gallery-image-3.png", // 実際の画像パスに更新
    tags: ["温泉", "九州", "秘湯"],
    link: "/blog/kyushu-onsen", // 実際の記事スラッグに更新
  },
  {
    id: 4,
    title: "九州温泉巡りの旅 - 秘湯発見記",
    excerpt: "九州の隠れた名湯を求めて山奥へ。地元の人だけが知る秘湯で心も体もリフレッシュできました。",
    date: "2024-01-05",
    location: "九州各地",
    image: "/gallery-image-3.png", // 実際の画像パスに更新
    tags: ["温泉", "九州"],
    link: "/blog/kyushu-onsen", // 実際の記事スラッグに更新
  }
]

// Instagram投稿データ（新しい写真を追加）
const instagramPosts = [
  { id: 1, image: "/instagram-post-1.jpg", alt: "キャンプ場でリラックスするバンライフ" },
  { id: 2, image: "/placeholder.svg?height=300&width=300", alt: "バンライフの風景2" },
  { id: 3, image: "/placeholder.svg?height=300&width=300", alt: "バンライフの風景3" },
  { id: 4, image: "/placeholder.svg?height=300&width=300", alt: "バンライフの風景4" },
  { id: 5, image: "/placeholder.svg?height=300&width=300", alt: "バンライフの風景5" },
  { id: 6, image: "/placeholder.svg?height=300&width=300", alt: "バンライフの風景6" },
]

// 提供されたアフィリエイト商品のデータ (炊飯器に更新)
const featuredProduct = {
  productName:
    "炊飯器 1.5合炊き 一人暮らし 1合 マイコン式炊飯器 ミニ炊飯器 小型 YJG-M150 0.5合-1.5合 学生 夫婦 単身 単身赴任 新生活 マイコン炊飯器 炊飯ジャー おかゆ 保温 予約山善 YAMAZEN 【送料無料】",
  imageUrl:
    "https://hbb.afl.rakuten.co.jp/hgb/4a52d4e0.c5e73c83.4a52d4e1.58258f8d/?me_id=1205937&item_id=10036688&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fe-kurashi%2Fcabinet%2Fmain-img%2F011%2Fmain-70243.jpg%3F_ex%3D240x240&s=240x240&t=picttext",
  productUrl:
    "https://hb.afl.rakuten.co.jp/ichiba/4a52d4e0.c5e73c83.4a52d4e1.58258f8d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fe-kurashi%2F70243%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
  buttonText: "楽天市場で見る",
}

export default function VanLifeBlog() {
  return (
    <div className="min-h-screen bg-vanlife-beige-50 text-vanlife-brown-700">
      {/* ヘッダーとナビゲーション */}
      <header className="sticky top-0 z-50 w-full bg-vanlife-beige-50/90 backdrop-blur-sm border-b border-vanlife-beige-100">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between max-w-6xl">
          <Link href="/" className="text-2xl font-bold text-vanlife-brown-700 flex items-center gap-3">
            {/* シンプルな◯記号 */}
            <span className="text-4xl text-vanlife-orange-500">◯</span>
            <span className="text-lg">Daiki & Hikari</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#blog" className="text-vanlife-brown-600 hover:text-vanlife-orange-500 transition-colors">
              Travel Diary
            </Link>
            <Link href="#instagram" className="text-vanlife-brown-600 hover:text-vanlife-pink-500 transition-colors">
              Instagram
            </Link>
            <Link href="#gallery" className="text-vanlife-brown-600 hover:text-vanlife-orange-500 transition-colors">
              Gallery
            </Link>
            <Link href="#seikotsu" className="text-vanlife-brown-600 hover:text-vanlife-green-500 transition-colors">
              整体サービス
            </Link>
            <Link href="#products" className="text-vanlife-brown-600 hover:text-vanlife-orange-500 transition-colors">
              おすすめ商品
            </Link>
            <Link href="#profile" className="text-vanlife-brown-600 hover:text-vanlife-green-500 transition-colors">
              Profile
            </Link>
            <Link href="/apparel" className="text-vanlife-brown-600 hover:text-vanlife-orange-500 transition-colors">
              Apparel
            </Link>
            <Link href="#contact" className="text-vanlife-brown-600 hover:text-vanlife-orange-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden text-vanlife-brown-700">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* メインヒーローセクション */}
      <section className="relative h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center text-center px-4">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image src="/hero-top-image.jpg" alt="バンライフの仲間たち" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/10"></div> {/* オーバーレイをより薄く */}
        </div>

        {/* 装飾的な丸い要素 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-vanlife-orange-500/10 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-vanlife-pink-500/10 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-vanlife-green-500/10 animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 rounded-full bg-vanlife-beige-200/20 animate-pulse delay-3000"></div>
        </div>

        {/* メインタイトル */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            {/* 大きな◯記号 */}
            <span className="text-9xl md:text-[12rem] font-light text-white drop-shadow-2xl">◯</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            <span className="block">バンライフ物語</span>
          </h1>
          <p className="text-xl md:text-2xl text-vanlife-beige-100 drop-shadow-md font-light">
            だいきとひかりが紡ぐ、まるで夢のような旅の記録。
          </p>

          {/* 小さな◯装飾要素 */}
          <div className="mt-8 flex justify-center gap-4">
            <span className="text-2xl text-vanlife-orange-500/70">◯</span>
            <span className="text-xl text-vanlife-pink-500/70">◯</span>
            <span className="text-2xl text-vanlife-green-500/70">◯</span>
          </div>
        </div>
      </section>

      {/* メインコンテンツエリア */}
      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* メインコンテンツ */}
          <div className="lg:col-span-2 space-y-20">
            {/* 広告スペース (メインコンテンツ上部) */}
            <div className="w-full h-32 bg-vanlife-beige-100 border border-vanlife-beige-200 rounded-full flex items-center justify-center text-vanlife-brown-600 text-lg font-semibold">
              広告スペース (728x90)
            </div>

            {/* ブログセクション */}
            <section id="blog">
              <div className="mb-12 text-center">
                <div className="flex justify-center mb-6">
                  <span className="text-6xl text-vanlife-orange-500">◯</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-vanlife-brown-700 mb-4">旅日記</h2>
                <p className="text-vanlife-brown-600 max-w-2xl mx-auto text-lg">
                  まるで夢の中をめぐるように。季節をめぐり、人をめぐり、風景をめぐる。バンライフの日々で出会った美しい瞬間と心温まる交流を綴っています。よろしく。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden rounded-3xl border border-vanlife-beige-200 bg-white transition-all duration-300 hover:border-vanlife-orange-500 hover:shadow-xl"
                  >
                    <div className="relative h-52">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      {/* ◯装飾 */}
                      <div className="absolute top-4 right-4 text-2xl text-white/80">◯</div>
                    </div>
                    <CardHeader className="p-6 pb-4">
                      <div className="flex items-center gap-2 text-sm text-vanlife-brown-600 mb-2">
                        <span className="text-vanlife-green-500">◯</span>
                        <Calendar className="w-4 h-4 text-vanlife-green-500" />
                        {new Date(post.date).toLocaleDateString("ja-JP")}
                        <span className="text-vanlife-green-500 ml-2">◯</span>
                        <MapPin className="w-4 h-4 text-vanlife-green-500" />
                        {post.location}
                      </div>
                      <CardTitle className="text-xl font-semibold text-vanlife-brown-700 hover:text-vanlife-orange-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-vanlife-brown-600 text-sm mt-2 line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-vanlife-beige-200 text-vanlife-brown-600 font-medium text-xs px-3 py-1 rounded-full"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      {post.link && (
                        <Button
                          asChild
                          className="w-full bg-vanlife-green-500 hover:bg-vanlife-green-600 text-white font-bold text-base py-3 rounded-full"
                        >
                          <Link href={post.link}>
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            記事を読む
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* note記事セクション */}
            <section id="note" className="bg-white p-12 rounded-3xl border border-vanlife-beige-200">
              <div className="mb-12 text-center">
                <div className="flex justify-center mb-6">
                  <span className="text-6xl text-vanlife-green-600">◯</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-vanlife-brown-700 mb-4">
                  <span className="text-vanlife-green-600">note</span>
                  からの記事
                </h2>
                <p className="text-vanlife-brown-600 max-w-2xl mx-auto text-lg">
                  noteで◯な想いや体験を発信しています。日々の気づきや、旅路で感じた小さな感動をお届けします。
                </p>
              </div>
              <NoteArticles />
            </section>

            {/* Instagramセクション */}
            <section id="instagram" className="bg-white p-12 rounded-3xl border border-vanlife-beige-200">
              <div className="mb-12 text-center">
                <div className="flex justify-center mb-6">
                  <span className="text-6xl text-vanlife-pink-600">◯</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-vanlife-brown-700 mb-4">
                  <span className="text-vanlife-pink-600">Instagram</span>
                  での旅の様子
                </h2>
                <p className="text-vanlife-brown-600 max-w-2xl mx-auto text-lg">
                  まるで絵本のような日々をめぐる風景や瞬間を、Instagramでリアルタイムにお届けしています。
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="relative w-full aspect-square overflow-hidden rounded-full group">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                      <Instagram className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-vanlife-pink-500 text-vanlife-pink-600 hover:bg-vanlife-pink-500/10 bg-transparent px-8 py-4 text-base font-semibold rounded-full"
                >
                  <Link
                    href="https://www.instagram.com/banlife__2?igsh=MXB0YTg1bWU4amFx&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Instagramで全て見る
                  </Link>
                </Button>
              </div>
            </section>

            {/* 写真ギャラリーセクションの追加 */}
            <section id="gallery" className="bg-white p-12 rounded-3xl border border-vanlife-beige-200">
              <div className="mb-12 text-center">
                <div className="flex justify-center mb-6">
                  <span className="text-6xl text-vanlife-orange-500">◯</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-vanlife-brown-700 mb-4">
                  <span className="text-vanlife-orange-500">Photo</span>
                  Gallery
                </h2>
                <p className="text-vanlife-brown-600 max-w-2xl mx-auto text-lg">
                  だいきが切り取った、◯な旅路で出会った美しい瞬間や風景の数々です。
                </p>
              </div>
              <PhotoGallery />
            </section>

            {/* アパレルセクションの追加 */}
            <section id="apparel" className="bg-white p-12 rounded-3xl border border-vanlife-beige-200 text-center">
              <div className="mb-12">
                <div className="flex justify-center mb-6">
                  <span className="text-6xl text-vanlife-orange-500">◯</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-vanlife-brown-700 mb-4">
                  <span className="text-vanlife-orange-500">Vanlife</span>
                  Apparel
                </h2>
                <p className="text-vanlife-brown-600 max-w-2xl mx-auto text-lg">
                  旅のインスピレーションを日常に。バンライフの精神を込めた、私たちオリジナルのアパレルコレクションです。
                </p>
              </div>
              <Button
                asChild
                className="bg-vanlife-orange-500 hover:bg-vanlife-orange-600 text-white font-bold text-base py-3 px-8 rounded-full"
              >
                <Link href="/apparel">
                  <Shirt className="w-5 h-5 mr-2" />
                  View Apparel
                </Link>
              </Button>
            </section>

            {/* Carstayセクションの追加 */}
            <section id="carstay" className="bg-white p-12 rounded-3xl border border-vanlife-beige-200 text-center">
              <div className="mb-12">
                <div className="flex justify-center mb-6">
                  <span className="text-6xl text-vanlife-green-500">◯</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-vanlife-brown-700 mb-4">
                  <span className="text-vanlife-green-500">Carstay</span>
                  でバンをシェア
                </h2>
                <p className="text-vanlife-brown-600 max-w-2xl mx-auto text-lg">
                  私たちのバンをCarstayでシェアしています。旅の拠点として、または新しい冒険のために、ぜひご利用ください。
                  <br />
                  Carstayで私たちのバンを予約して、自由な旅を始めましょう。
                </p>
              </div>
              <Button
                asChild
                className="bg-vanlife-green-500 hover:bg-vanlife-green-600 text-white font-bold text-base py-3 px-8 rounded-full"
              >
                <Link href="https://carstay.jp/ja/holder/" target="_blank" rel="noopener noreferrer">
                  <Car className="w-5 h-5 mr-2" />
                  Carstayでバンを予約する
                </Link>
              </Button>
            </section>

            {/* 新しい整体サービスセクションの追加 */}
            <section id="seikotsu" className="bg-white p-12 rounded-3xl border border-vanlife-beige-200 text-center">
              <div className="mb-12">
                <div className="flex justify-center mb-6">
                  <span className="text-6xl text-vanlife-green-500">◯</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-vanlife-brown-700 mb-4">
                  <span className="text-vanlife-green-500">バンで</span>
                  整体サービス
                </h2>
                <p className="text-vanlife-brown-600 max-w-2xl mx-auto text-lg">
                  ◯な旅路で疲れた体に癒しを。首肩まわりに特化した整体サービスを、私たちのバンで提供しています。
                  <br />
                  移動式なので、ご希望の場所まで伺うことも可能です。
                </p>
              </div>
              <Button
                asChild
                className="bg-vanlife-green-500 hover:bg-vanlife-green-600 text-white font-bold text-base py-3 px-8 rounded-full"
              >
                <Link href="#contact">
                  <Hand className="w-5 h-5 mr-2" />
                  整体サービスを予約する
                </Link>
              </Button>
            </section>

            {/* おすすめ商品セクションの追加 */}
            <section id="products" className="bg-white p-12 rounded-3xl border border-vanlife-beige-200">
              <div className="mb-12 text-center">
                <div className="flex justify-center mb-6">
                  <span className="text-6xl text-vanlife-orange-500">◯</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-vanlife-brown-700 mb-4">
                  <span className="text-vanlife-orange-500">おすすめ</span>
                  商品
                </h2>
                <p className="text-vanlife-brown-600 max-w-2xl mx-auto text-lg">
                  バンライフで実際に使って良かった、おすすめのアイテムをご紹介します。
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <AffiliateProductCard {...featuredProduct} />
                {/* 他のおすすめ商品もここに追加できます */}
              </div>
            </section>
          </div>

          {/* サイドバー */}
          <div className="space-y-16">
            {/* プロフィールカード */}
            <Card id="profile" className="overflow-hidden rounded-3xl border border-vanlife-beige-200 bg-white">
              <CardHeader className="text-center bg-vanlife-beige-100 p-8 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="/hero-top-image.jpg" // プロフィール画像もトップ画と同じに設定
                        alt="だいきとひかり"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    {/* ◯装飾 */}
                    <div className="absolute -top-2 -right-2 text-2xl text-vanlife-orange-500">◯</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-vanlife-brown-700 mb-2">Profile</h3>
                <div className="bg-white rounded-2xl p-4 mx-2 border border-vanlife-beige-100">
                  <p className="font-bold text-lg text-vanlife-brown-700 mb-2">Daiki & Hikari</p>
                  <p className="text-sm text-vanlife-brown-600 leading-relaxed">
                    だいき：動画作家、写真家
                    <br />
                    ひかり：鍼灸師、ライター
                    <br />
                    2027年4月〜バンライフで◯な日本をめぐる旅🇯🇵
                    <br />
                    休日バンライフをしながら思索🌿自由に働きながら◯に季節を感じられるよう準備中！
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-vanlife-brown-600 mb-8 leading-relaxed text-sm"> </p>
                <div className="flex flex-col gap-4">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-vanlife-pink-500 text-vanlife-pink-600 hover:bg-vanlife-pink-500/10 font-semibold text-base py-3 bg-transparent rounded-full"
                  >
                    <Link
                      href="https://www.instagram.com/skdik.creative?igsh=djdueHN3cmpjZXB5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Daiki&apos;s Instagram
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-vanlife-pink-500 text-vanlife-pink-600 hover:bg-vanlife-pink-500/10 font-semibold text-base py-3 bg-transparent rounded-full"
                  >
                    <Link
                      href="https://www.instagram.com/hikacho__2?igsh=OGVvcGs5bjBybHY2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Hikari&apos;s Instagram
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* お仕事依頼カードの追加 */}
            <Card className="rounded-3xl border border-vanlife-beige-200 bg-white text-center">
              <CardHeader className="p-8 pb-6">
                <div className="flex justify-center mb-4">
                  <span className="text-4xl text-vanlife-green-500">◯</span>
                </div>
                <CardTitle className="text-xl font-bold text-vanlife-brown-700">お仕事のご依頼</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-vanlife-brown-600 mb-6 leading-relaxed text-sm">
                  ライター、動画編集、写真撮影など、私たちへのお仕事のご依頼はこちらからお気軽にお問い合わせください。
                </p>
                <Button
                  asChild
                  className="w-full bg-vanlife-green-500 hover:bg-vanlife-green-600 text-white font-bold text-base py-3 rounded-full"
                >
                  <Link href="#contact">
                    <Mail className="w-4 h-4 mr-2" />
                    お問い合わせフォームへ
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* 人気記事カード */}
            <Card className="rounded-3xl border border-vanlife-beige-200 bg-white">
              <CardHeader className="p-8 pb-6">
                <CardTitle className="text-xl font-bold text-vanlife-brown-700 flex items-center gap-2">
                  🔥 人気記事ランキング
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-4">
                  {[
                    "バンライフ初心者必見！最初に揃えるべき装備10選",
                    "全国おすすめ車中泊スポット【関東編】",
                    "ポータブル電源の選び方完全ガイド",
                  ].map((title, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-white rounded-2xl hover:bg-vanlife-beige-50 transition-colors cursor-pointer text-vanlife-brown-600 border border-vanlife-beige-100"
                    >
                      <span className="text-vanlife-orange-500/80 font-bold text-lg flex-shrink-0">◯</span>
                      <p className="text-sm font-medium leading-tight">{title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 広告スペース (サイドバー) */}
            <div className="w-full h-64 bg-vanlife-beige-100 border border-vanlife-beige-200 rounded-3xl flex items-center justify-center text-vanlife-brown-600 text-lg font-semibold">
              広告スペース (300x250)
            </div>

            {/* お問い合わせカード */}
            <Card id="contact" className="rounded-3xl border border-vanlife-beige-200 bg-white">
              <CardHeader className="p-8 pb-6">
                <div className="flex justify-center mb-4">
                  <span className="text-4xl text-vanlife-orange-500">◯</span>
                </div>
                <CardTitle className="text-xl font-bold text-vanlife-brown-700 text-center">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-vanlife-brown-600 mb-6 leading-relaxed text-sm text-center">
                  お問い合わせは、以下のフォームまたは公式LINEからお気軽にご連絡ください。
                </p>
                <div className="flex flex-col gap-4 mb-6">
                  <Button
                    asChild
                    className="w-full bg-[#00C300] hover:bg-[#00A800] text-white font-bold text-base py-3 rounded-full" // LINEのブランドカラー
                  >
                    <Link href="https://line.me/R/ti/p/@your_line_id" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      公式LINEで問い合わせる
                    </Link>
                  </Button>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-vanlife-brown-600">または</span>
                  </div>
                </div>
                <form className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="border border-vanlife-beige-200 bg-white text-vanlife-brown-700 focus:border-vanlife-green-500 rounded-full"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border border-vanlife-beige-200 bg-white text-vanlife-brown-700 focus:border-vanlife-green-500 rounded-full"
                  />
                  <Textarea
                    placeholder="Message"
                    rows={5}
                    className="border border-vanlife-beige-200 bg-white text-vanlife-brown-700 focus:border-vanlife-green-500 rounded-2xl"
                  />
                  <Button className="w-full bg-vanlife-green-500 hover:bg-vanlife-green-600 text-white font-bold text-base py-3 rounded-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer className="bg-vanlife-beige-100 text-vanlife-brown-700 py-16 mt-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl text-vanlife-orange-500">◯</span>
                <h4 className="text-xl font-bold text-vanlife-brown-700">だいきとひかり</h4>
              </div>
              <p className="text-vanlife-brown-600 text-sm leading-relaxed">
                まるで夢の中をめぐるように。季節をめぐり、人をめぐり、風景をめぐる。バンと共に紡ぐ、出会いと感動の物語をお届けします。
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-5 text-vanlife-brown-700">カテゴリー</h5>
              <ul className="space-y-3 text-sm text-vanlife-brown-600">
                <li className="flex items-center gap-2">
                  <span className="text-vanlife-orange-500">◯</span>
                  <Link href="#" className="hover:text-vanlife-orange-500 transition-colors">
                    車中泊スポット
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-vanlife-pink-500">◯</span>
                  <Link href="#" className="hover:text-vanlife-orange-500 transition-colors">
                    装備・グッズ
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-vanlife-green-500">◯</span>
                  <Link href="#" className="hover:text-vanlife-orange-500 transition-colors">
                    DIY・改造
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-vanlife-beige-400">◯</span>
                  <Link href="#" className="hover:text-vanlife-orange-500 transition-colors">
                    旅日記
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-5 text-vanlife-brown-700">リンク</h5>
              <ul className="space-y-3 text-sm text-vanlife-brown-600">
                <li className="flex items-center gap-2">
                  <span className="text-vanlife-orange-500">◯</span>
                  <Link href="#" className="hover:text-vanlife-orange-500 transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-vanlife-pink-500">◯</span>
                  <Link href="#contact" className="hover:text-vanlife-orange-500 transition-colors">
                    Contact
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-vanlife-green-500">◯</span>
                  <Link href="#" className="hover:text-vanlife-orange-500 transition-colors">
                    サイトマップ
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-vanlife-beige-400">◯</span>
                  <Link
                    href="https://carstay.jp/ja/holder/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-vanlife-orange-500 transition-colors"
                  >
                    Carstay
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-vanlife-orange-500">◯</span>
                  <Link
                    href="https://room.rakuten.co.jp/room_cd5a0b6c99/items" // 楽天ルームのURLをここに設定
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-vanlife-orange-500 transition-colors"
                  >
                    楽天ルーム
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-5 text-vanlife-brown-700">フォローする</h5>
              <div className="flex gap-3">
                <Button
                  asChild
                  size="icon"
                  variant="outline"
                  className="border-vanlife-pink-500 text-vanlife-pink-600 hover:bg-vanlife-pink-500/10 bg-transparent rounded-full"
                >
                  <Link
                    href="https://www.instagram.com/banlife__2?igsh=MXB0YTg1bWU4amFx&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild // asChildを追加してLinkコンポーネントを子として渡せるようにする
                  size="icon"
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-500/10 bg-transparent rounded-full"
                >
                  <Link
                    href="https://x.com/chomu0914?s=21&t=-5YSiSI3aYe7A13fV5ro8A" // ひかりさんのXアカウントのURL
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-500/10 bg-transparent rounded-full"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-vanlife-beige-200 mt-12 pt-8 text-center text-vanlife-brown-600">
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="text-vanlife-orange-500/50">◯</span>
              <span className="text-vanlife-pink-500/50">◯</span>
              <span className="text-vanlife-green-500/50">◯</span>
            </div>
            <p>&copy; 2024 Daiki & Hikari's Vanlife. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
