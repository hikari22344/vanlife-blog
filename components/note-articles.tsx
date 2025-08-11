"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, FileText } from "lucide-react"
import Link from "next/link"

interface NoteArticle {
  title: string
  link: string
  description: string
  pubDate: string
  source: string
}

export function NoteArticles() {
  const [articles, setArticles] = useState<NoteArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchNoteArticles()
  }, [])

  const fetchNoteArticles = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/note-articles")
      const data = await response.json()

      if (data.success) {
        setArticles(data.articles)
      } else {
        setError("記事の取得に失敗しました")
      }
    } catch (err) {
      setError("記事の取得中にエラーが発生しました")
      console.error("Error fetching note articles:", err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6 text-center">
          <FileText className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <p className="text-red-600 mb-4">{error}</p>
          <Button
            onClick={fetchNoteArticles}
            variant="outline"
            className="border-red-500 text-red-600 hover:bg-red-500/10 bg-transparent font-semibold"
          >
            再試行
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (articles.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">note記事が見つかりませんでした</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold text-gray-800">noteからの記事</h4>
        <Badge variant="secondary" className="bg-green-100 text-green-700">
          <FileText className="w-3 h-3 mr-1" />
          note連携
        </Badge>
      </div>

      <div className="grid gap-4">
        {articles.map((article, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300 border-l-4 border-l-green-400">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.pubDate).toLocaleDateString("ja-JP")}
                <Badge variant="outline" className="ml-auto text-xs">
                  note
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight">
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition-colors flex items-start gap-2"
                >
                  {article.title}
                  <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                </Link>
              </CardTitle>
            </CardHeader>
            {article.description && (
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 line-clamp-2">{article.description}</CardDescription>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button
          asChild
          variant="outline"
          className="border-vanlife-green-500 text-vanlife-green-600 hover:bg-vanlife-green-500/10 bg-transparent px-8 py-4 text-base font-semibold"
        >
          <Link href="https://note.com/sonechomu0914" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            noteで全ての記事を見る
          </Link>
        </Button>
      </div>
    </div>
  )
}
