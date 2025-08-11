import { NextResponse } from "next/server"

// noteのRSSフィードから記事を取得する関数
async function fetchNoteArticles() {
  try {
    // noteのRSSフィードURL（ユーザー名を実際のものに変更）
    const rssUrl = "https://note.com/sonechomu0914/rss"

    const response = await fetch(rssUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; VanLifeBlog/1.0)",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed")
    }

    const rssText = await response.text()

    // 簡単なXMLパースing（実際のプロジェクトではxml2jsなどを使用）
    const articles = parseRSSFeed(rssText)

    return articles
  } catch (error) {
    console.error("Error fetching note articles:", error)
    return []
  }
}

// 簡単なRSSパーサー
function parseRSSFeed(rssText: string) {
  const articles = []

  // itemタグを抽出
  const itemMatches = rssText.match(/<item[^>]*>([\s\S]*?)<\/item>/g) || []

  for (const item of itemMatches.slice(0, 6)) {
    // 最新6件を取得
    const title = extractTag(item, "title")
    const link = extractTag(item, "link")
    const description = extractTag(item, "description")
    const pubDate = extractTag(item, "pubDate")

    if (title && link) {
      articles.push({
        title: cleanText(title),
        link,
        description: cleanText(description || ""),
        pubDate: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
        source: "note",
      })
    }
  }

  return articles
}

function extractTag(text: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i")
  const match = text.match(regex)
  return match ? match[1] : null
}

function cleanText(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]*>/g, "")
    .trim()
}

export async function GET() {
  const articles = await fetchNoteArticles()

  return NextResponse.json({
    articles,
    success: true,
    timestamp: new Date().toISOString(),
  })
}
