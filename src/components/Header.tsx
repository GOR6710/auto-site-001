import Link from 'next/link'
import { Search, GitCompare } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-700">
          AI工具汇
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/search" className="text-slate-600 hover:text-indigo-600 transition">
            <Search size={20} />
          </Link>
          <Link href="/compare" className="text-slate-600 hover:text-indigo-600 transition">
            <GitCompare size={20} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
