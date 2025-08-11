import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // 新しいベージュ系のカスタムカラー
        "vanlife-beige-50": "#FDFBF8", // 非常に明るいベージュ
        "vanlife-beige-100": "#F8F5F0", // 明るいベージュ
        "vanlife-beige-200": "#F0EBE3", // やや明るいベージュ
        "vanlife-beige-300": "#E8E2D9", // 中間ベージュ
        "vanlife-beige-400": "#DBCFC0", // やや濃いベージュ
        "vanlife-beige-500": "#C4B7A6", // 落ち着いたベージュ
        "vanlife-brown-600": "#8B7D6D", // 落ち着いたブラウン
        "vanlife-brown-700": "#6F6255", // 濃いブラウン
        "vanlife-green-500": "#82A38A", // 落ち着いたグリーン
        "vanlife-green-600": "#6B8C73", // 濃いグリーン
        "vanlife-orange-500": "#D99B6B", // 落ち着いたオレンジ
        "vanlife-orange-600": "#C28A5F", // 濃いオレンジ
        "vanlife-pink-500": "#D98C9A", // 落ち着いたピンク
        "vanlife-pink-600": "#C27B87", // 濃いピンク
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
