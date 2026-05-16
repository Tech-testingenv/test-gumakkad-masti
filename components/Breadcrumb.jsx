'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChevronRight, FaHome } from 'react-icons/fa'

export default function Breadcrumb() {
  const pathname = usePathname()
  const pathNodes = pathname.split('/').filter(p => p)

  // Don't show on homepage
  if (pathname === '/') return null

  return (
    <div className="w-full bg-gray-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-xs sm:text-sm font-medium text-gray-600 hover:text-purple-900 transition">
              <FaHome className="mr-2 text-purple-900" />
              Home
            </Link>
          </li>
          {pathNodes.map((node, index) => {
            const href = `/${pathNodes.slice(0, index + 1).join('/')}`
            const isLast = index === pathNodes.length - 1
            const label = node.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

            return (
              <li key={index}>
                <div className="flex items-center">
                  <FaChevronRight className="text-gray-400 text-[10px] sm:text-xs mx-1" />
                  {isLast ? (
                    <span className="ml-1 text-xs sm:text-sm font-bold text-purple-900 md:ml-2 uppercase">
                      {label}
                    </span>
                  ) : (
                    <Link href={href} className="ml-1 text-xs sm:text-sm font-medium text-gray-600 hover:text-purple-900 md:ml-2 transition">
                      {label}
                    </Link>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </nav>
    </div>
  )
}
