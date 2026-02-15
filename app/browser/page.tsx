'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BrowserPage() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push('/')
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [router])

  return (
    <div className="fixed inset-0 bottom-[40px] z-50 flex items-center justify-center">
      <div
        className="bg-[#c0c0c0] min-w-[360px] max-w-[440px]"
        style={{
          border: '2px solid',
          borderColor: '#ffffff #000000 #000000 #ffffff',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #ffffff, 4px 4px 0 rgba(0,0,0,0.3)',
        }}
      >
        {/* Dialog title bar */}
        <div className="dc95-titlebar flex-shrink-0">
          <span className="truncate text-[14px]">DCBROWSE.DLL</span>
          <button
            className="dc95-title-btn"
            onClick={() => router.push('/')}
          >
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
              <line x1="0" y1="0" x2="10" y2="9" stroke="black" strokeWidth="1.8" />
              <line x1="10" y1="0" x2="0" y2="9" stroke="black" strokeWidth="1.8" />
            </svg>
          </button>
        </div>

        {/* Dialog content */}
        <div className="p-5 flex gap-4">
          <div className="flex-shrink-0 pt-1">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" fill="#FF0000" stroke="#800000" strokeWidth="1" />
              <text x="16" y="22" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">X</text>
            </svg>
          </div>
          <p className="text-[14px] font-['Tahoma',_'Arial',_sans-serif] whitespace-pre-line leading-[1.4]">
            DCBROWSE caused an invalid page fault in module KERNEL32.DLL at 0187:BFF9DB61.{'\n\n'}This program has performed an illegal operation and will be shut down.{'\n\n'}If the problem persists, please insert your Decoupled95 installation floppy disk.
          </p>
        </div>

        {/* Dialog buttons */}
        <div className="flex justify-center gap-2 pb-4 px-4">
          <button
            className="dc95-button text-[14px] min-w-[80px]"
            onClick={() => router.push('/')}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
