import { getToolBySlug, tools } from '@/lib/data'
import Link from 'next/link'
import { Star, Check, X, ExternalLink, ArrowRight } from 'lucide-react'

export function generateStaticParams() {
  return tools.map(t => ({ slug: t.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug)
  return {
    title: `${tool?.name || '工具'} 评测 - 功能、定价与替代品 | AI工具汇`,
    description: `${tool?.name || ''}完整评测：功能特性、定价方案、优缺点分析，以及最佳替代品推荐。`,
  }
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug)

  if (!tool) return <div>工具不存在</div>

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-slate-500 mb-2">
            <Link href="/" className="hover:text-indigo-600">首页</Link>
            <span className="mx-2">/</span>
            <Link href={`/category/${tool.categorySlug}`} className="hover:text-indigo-600">{tool.category}</Link>
            <span className="mx-2">/</span>
            <span>{tool.name}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-slate-800">{tool.name} 评测</h1>
            <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
              <Star size={16} fill="currentColor" />
              <span className="font-semibold">{tool.rating}</span>
              <span className="text-sm">({tool.reviewCount} 评价)</span>
            </div>
          </div>
          <p className="text-lg text-slate-600">{tool.tagline}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold mb-4">产品概述</h2>
              <p className="text-slate-600 leading-relaxed">{tool.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold mb-4">核心功能</h2>
              <div className="grid grid-cols-2 gap-3">
                {tool.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    <span className="text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-green-800 mb-3">优点</h3>
                <ul className="space-y-2">
                  {tool.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-green-900">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="font-bold text-red-800 mb-3">缺点</h3>
                <ul className="space-y-2">
                  {tool.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                      <span className="text-red-900">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h2 className="text-xl font-bold mb-4">常见问题</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{tool.name} 有免费版吗？</h3>
                  <p className="text-slate-600 text-sm">{tool.hasFreeTier ? '是的，提供免费版供个人使用。' : '不提供免费版，需要付费订阅。'}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{tool.name} 适合什么人群？</h3>
                  <p className="text-slate-600 text-sm">根据功能特点，适合{tool.category}领域的专业人士和团队使用。</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">{tool.name} 支持中文吗？</h3>
                  <p className="text-slate-600 text-sm">大部分功能支持中文界面和输入，具体中文支持程度请参考官方文档。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold mb-4">定价方案</h3>
              <p className="text-slate-600 text-sm">{tool.pricing}</p>
              <a
                href={tool.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                <ExternalLink size={16} />
                访问官网
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold mb-4">替代品推荐</h3>
              <div className="space-y-3">
                {tool.alternatives.map(alt => (
                  <Link
                    key={alt}
                    href={`/search?q=${encodeURIComponent(alt)}`}
                    className="flex items-center justify-between text-sm hover:text-indigo-600 transition"
                  >
                    <span>{alt}</span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
