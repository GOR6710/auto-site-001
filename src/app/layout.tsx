import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'AI工具汇 - AI SaaS工具对比与推荐平台',
  description: '发现最适合你的AI工具和生产力软件。提供详细对比、真实评测和场景化推荐。涵盖AI写作、编程、设计、项目管理等全类别。',
  keywords: 'AI工具, SaaS工具, AI写作, AI编程, 生产力工具, 工具对比, Cursor, ChatGPT, Notion',
  openGraph: {
    title: 'AI工具汇 - AI SaaS工具对比与推荐平台',
    description: '发现最适合你的AI工具和生产力软件',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI工具汇 - AI SaaS工具对比与推荐平台',
    description: '发现最适合你的AI工具和生产力软件',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <footer className="bg-slate-800 text-slate-300 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm">AI工具汇 - 专业的AI SaaS工具对比与推荐平台</p>
            <p className="text-xs mt-2 opacity-60"> 2026 AI工具汇. 数据仅供参考，请以各工具官方信息为准。</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
