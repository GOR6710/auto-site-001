import { getCategoryBySlug, getToolsByCategory, categories } from '@/lib/data'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'

export function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug)
  return {
    title: `${category?.name || '分类'} - 2026最佳推荐 | AI工具汇`,
    description: `探索${category?.name || ''}类别下的顶级工具，含详细对比、定价信息和用户评分。`,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug)
  const tools = getToolsByCategory(params.slug)

  if (!category) return <div>分类不存在</div>

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-slate-500 mb-2">
            <Link href="/" className="hover:text-indigo-600">首页</Link>
            <span className="mx-2">/</span>
            <span>{category.name}</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-800">最佳 {category.name} 工具</h1>
          <p className="text-slate-600 mt-2">{category.description}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <Link
              key={tool.id}
              href={`/tool/${tool.slug}`}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-lg text-slate-800">{tool.name}</h2>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <span className="font-semibold text-sm">{tool.rating}</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-3">{tool.tagline}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{tool.pricing}</span>
                <span className="text-indigo-600 font-medium flex items-center gap-1">
                  查看详情 <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
