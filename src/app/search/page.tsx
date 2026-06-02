'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { searchTools } from '@/lib/data'
import { Star, Search, ArrowRight } from 'lucide-react'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState(searchTools(query))

  useEffect(() => {
    setResults(searchTools(query))
  }, [query])

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-700">
          {query ? `"${query}" 的搜索结果` : '所有工具'}
        </h2>
        <p className="text-slate-500 text-sm">找到 {results.length} 个相关工具</p>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          <Search size={48} className="mx-auto mb-4 opacity-30" />
          <p>未找到匹配的工具</p>
          <p className="text-sm mt-1">试试其他关键词</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map(tool => (
            <Link
              key={tool.id}
              href={`/tool/${tool.slug}`}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-slate-800">{tool.name}</h3>
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
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800">搜索工具</h1>
          <p className="text-slate-600 mt-2">输入关键词查找AI工具和生产力软件</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <Suspense fallback={<div className="text-center py-12">加载中...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  )
}
