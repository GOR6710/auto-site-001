import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '搜索工具 - AI工具汇',
  description: '输入关键词查找AI工具和生产力软件，快速找到最适合你的工具。',
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
