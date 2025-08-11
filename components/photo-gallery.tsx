"use client"

import { Badge } from "@/components/ui/badge"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Camera, Mail } from "lucide-react" // Mailアイコンをインポート

interface Photo {
  id: number
  src: string
  alt: string
}

const photos: Photo[] = [
  { id: 1, src: "/gallery-image-1.png", alt: "旅の風景1" },
  { id: 2, src: "/gallery-image-2.png", alt: "旅の風景2" },
  { id: 3, src: "/gallery-image-3.png", alt: "旅の風景3" },
  { id: 4, src: "/gallery-image-4.png", alt: "旅の風景4" },
  { id: 5, src: "/gallery-image-5.png", alt: "旅の風景5" },
  { id: 6, src: "/gallery-image-6.png", alt: "旅の風景6" },
]

export function PhotoGallery() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold text-gray-800">だいきのギャラリー</h4>
        <Badge variant="secondary" className="bg-orange-100 text-orange-700">
          <Camera className="w-3 h-3 mr-1" />
          写真作品
        </Badge>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
        {photos.map((photo) => (
          <div key={photo.id} className="relative w-full aspect-square overflow-hidden rounded-lg group">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <Button
          asChild
          variant="outline"
          className="border-vanlife-orange-500 text-vanlife-orange-600 hover:bg-vanlife-orange-500/10 bg-transparent px-8 py-4 text-base font-semibold"
        >
          <Link href="/gallery" rel="noopener noreferrer">
            {" "}
            {/* 将来的に専用ギャラリーページへ */}
            <ExternalLink className="w-4 h-4 mr-2" />
            全ての写真を見る
          </Link>
        </Button>
      </div>

      {/* 撮影依頼への導線を追加 */}
      <div className="text-center bg-vanlife-beige-100 p-8 rounded-lg border border-vanlife-beige-200">
        <h5 className="text-xl font-bold text-vanlife-brown-700 mb-4">写真撮影のご依頼はこちらから</h5>
        <p className="text-vanlife-brown-600 mb-6 leading-relaxed text-sm">
          だいきがあなたの旅やイベント、商品などの撮影を承ります。
          <br />
          お気軽にお問い合わせください。
        </p>
        <Button
          asChild
          className="bg-vanlife-green-500 hover:bg-vanlife-green-600 text-white font-bold text-base py-3 px-8"
        >
          <Link href="#contact">
            <Mail className="w-4 h-4 mr-2" />
            撮影依頼・お問い合わせ
          </Link>
        </Button>
      </div>
    </div>
  )
}
