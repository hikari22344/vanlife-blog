import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface AffiliateProductCardProps {
  productName: string
  imageUrl: string
  productUrl: string
  buttonText: string
}

export function AffiliateProductCard({ productName, imageUrl, productUrl, buttonText }: AffiliateProductCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border border-vanlife-beige-200 bg-white transition-all duration-300 hover:border-vanlife-orange-500">
      <div className="relative h-52 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={productName} fill className="object-contain p-4" />
      </div>
      <CardHeader className="p-6 pb-4">
        <CardTitle className="text-lg font-semibold text-vanlife-brown-700 line-clamp-2">{productName}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Button
          asChild
          className="w-full bg-vanlife-orange-500 hover:bg-vanlife-orange-600 text-white font-bold text-base py-3"
        >
          <Link href={productUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
