'use client'

import { useState } from 'react'
import { tools } from '@/lib/data'
import Link from 'next/link'
import { Check, X, Star, Trash2 } from 'lucide-react'

export const metadata = {
  title: '工具对比 - AI工具汇',
  description: '选择多个AI工具进行横向对比，功能、定价、评分一目了然。',
}

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([])

  const selectedTools = tools.filter(t => selected.includes(t.slug))

  const toggleTool = (slug: string) => {
    if (selected.includes(slug)) {
      setSelected(selected.filter(s => s !== slug))
    } else if (selected.length < 4) {
      setSelected([...selected, slug])
    }
  }

  const allFeatures = [...new Set(tools.flatMap(t => t.features))]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800">工具对比</h1>
          <p className="text-slate-600 mt-2">最多选择 4 个工具进行横向对比</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Tool Selector */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">选择工具（{selected.length}/4）</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {tools.map(tool => (
              <button
                key={tool.id}
                onClick={() => toggleTool(tool.slug)}
                className={`p-3 rounded-lg border text-left text-sm transition ${
                  selected.includes(tool.slug)
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="font-semibold">{tool.name}</div>
                <div className="text-xs opacity-70">{tool.category}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedTools.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left p-4 font-semibold text-slate-600">对比维度</th>
                    {selectedTools.map(tool => (
                      <th key={tool.id} className="p-4 text-center min-w-[160px]">
                        <Link href={`/tool/${tool.slug}`} className="font-bold text-indigo-600 hover:underline">
                          {tool.name}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium text-slate-700">评分</td>
                    {selectedTools.map(tool => (
                      <td key={tool.id} className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1 text-amber-500">
                          <Star size={16} fill="currentColor" />
                          <span className="font-semibold">{tool.rating}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium text-slate-700">定价</td>
                    {selectedTools.map(tool => (
                      <td key={tool.id} className="p-4 text-center text-sm text-slate-600">{tool.pricing}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium text-slate-700">免费版</td>
                    {selectedTools.map(tool => (
                      <td key={tool.id} className="p-4 text-center">
                        {tool.hasFreeTier ? (
                          <Check size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <X size={20} className="text-red-400 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                  {allFeatures.slice(0, 8).map(feature => (
                    <tr key={feature} className="border-b border-slate-100">
                      <td className="p-4 font-medium text-slate-700 text-sm">{feature}</td>
                      {selectedTools.map(tool => (
                        <td key={tool.id} className="p-4 text-center">
                          {tool.features.includes(feature) ? (
                            <Check size={18} className="text-green-500 mx-auto" />
                          ) : (
                            <X size={18} className="text-slate-300 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-50 flex gap-2 flex-wrap">
              {selectedTools.map(tool => (
                <button
                  key={tool.id}
                  onClick={() => toggleTool(tool.slug)}
                  className="inline-flex items-center gap-1 bg-white border border-slate-300 px-3 py-1 rounded-full text-sm hover:bg-red-50 hover:border-red-300 transition"
                >
                  {tool.name}
                  <Trash2 size={12} className="text-red-400" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
