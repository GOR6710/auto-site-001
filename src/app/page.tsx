import Link from 'next/link'
import { categories, tools } from '@/lib/data'
import { Star, Search, ArrowRight, Zap } from 'lucide-react'

export const metadata = {
  title: 'AI工具汇 - 发现最佳AI工具与生产力软件',
  description: 'AI SaaS工具对比与推荐平台。详细对比、真实评测、场景化推荐，帮你找到最适合的AI工具。',
}

export default function Home() {
  const topTools = tools.slice(0, 6)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            发现最佳 AI 工具与生产力软件
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            提供详细对比、真实评测和场景化推荐，帮你找到最适合的AI工具
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/search"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              <Search size={20} />
              搜索工具
            </Link>
            <Link 
              href="/compare"
              className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-400 transition"
            >
              <Zap size={20} />
              开始对比
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">按类别浏览</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-slate-200 text-center"
            >
              <h3 className="font-semibold text-slate-800 mb-1">{cat.name}</h3>
              <p className="text-sm text-slate-500">{cat.toolCount} 个工具</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Tools */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">编辑推荐</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topTools.map(tool => (
            <Link
              key={tool.id}
              href={`/tool/${tool.slug}`}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-slate-800 group-hover:text-indigo-600 transition">{tool.name}</h3>
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
      </section>

      {/* SEO Footer Info */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">为什么选择 AI工具汇？</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">详细对比</h3>
            <p className="text-slate-600 text-sm">功能、定价、评分多维度对比，帮你做出最佳选择</p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">真实评测</h3>
            <p className="text-slate-600 text-sm">基于真实使用体验的优缺点分析，不吹不黑</p>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">场景推荐</h3>
            <p className="text-slate-600 text-sm">根据你的角色和需求，推荐最合适的工具</p>
          </div>
        </div>
      </section>
    </div>
  )
}
