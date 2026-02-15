'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface DC95WindowProps {
  title: string
  children: React.ReactNode
  menuItems?: string[]
  showMenuBar?: boolean
  className?: string
  onClose?: () => void
}

export default function DC95Window({
  title,
  children,
  menuItems = ['File', 'Edit', 'View', 'Help'],
  showMenuBar = true,
  className = '',
  onClose,
}: DC95WindowProps) {
  const router = useRouter()
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div
      className={`bg-[#c0c0c0] flex flex-col ${
        isMaximized
          ? 'fixed inset-0 bottom-[40px] z-50'
          : 'fixed z-50 shadow-[4px_4px_0px_rgba(0,0,0,0.3)]'
      } ${className}`}
      style={{
        border: '2px solid',
        borderColor: '#ffffff #000000 #000000 #ffffff',
        boxShadow: isMaximized || isMobile
          ? 'none'
          : 'inset -1px -1px 0 #808080, inset 1px 1px 0 #ffffff, 6px 6px 0 rgba(0,0,0,0.25)',
        ...(isMaximized
          ? {}
          : isMobile
            ? { top: 0, left: 0, right: 0, bottom: '40px' }
            : {
                top: '30px',
                left: '60px',
                right: '60px',
                bottom: '70px',
              }),
      }}
    >
      {/* Title Bar */}
      <div className="dc95-titlebar flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className="truncate">{title}</span>
        </div>
        <div className="flex gap-[2px] flex-shrink-0">
          <button
            className="dc95-title-btn"
            onClick={() => router.push('/')}
            title="Minimize"
          >
            <svg width="8" height="3" viewBox="0 0 8 3" fill="none">
              <rect width="8" height="3" fill="black" />
            </svg>
          </button>
          <button
            className="dc95-title-btn"
            onClick={() => setIsMaximized(!isMaximized)}
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="2" y="0" width="8" height="8" stroke="black" strokeWidth="1" fill="none" />
                <line x1="2" y1="1.5" x2="10" y2="1.5" stroke="black" strokeWidth="1.5" />
                <rect x="0" y="2" width="8" height="8" stroke="black" strokeWidth="1" fill="#c0c0c0" />
                <line x1="0" y1="3.5" x2="8" y2="3.5" stroke="black" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
                <rect x="0" y="0" width="10" height="9" stroke="black" strokeWidth="1" fill="none" />
                <line x1="0" y1="1.5" x2="10" y2="1.5" stroke="black" strokeWidth="1.5" />
              </svg>
            )}
          </button>
          <button
            className="dc95-title-btn"
            onClick={handleClose}
            title="Close"
          >
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
              <line x1="0" y1="0" x2="10" y2="9" stroke="black" strokeWidth="1.8" />
              <line x1="10" y1="0" x2="0" y2="9" stroke="black" strokeWidth="1.8" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      {showMenuBar && (
        <div className="dc95-menubar flex-shrink-0">
          {menuItems.map((item) => (
            <button key={item}>
              <span className="underline">{item[0]}</span>
              {item.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Content Area */}
      <div
        className="flex-1 overflow-auto bg-white dc95-scrollbar"
        style={{
          margin: '3px',
          border: '2px solid',
          borderColor: '#808080 #ffffff #ffffff #808080',
          boxShadow: 'inset 1px 1px 0 #000000, inset -1px -1px 0 #ffffff',
        }}
      >
        {children}
      </div>

      {/* Status Bar */}
      <div
        className="flex-shrink-0 px-3 py-1 text-[13px] font-['Tahoma',_'Arial',_sans-serif]"
        style={{
          margin: '0 3px 3px 3px',
          border: '1px solid',
          borderColor: '#808080 #ffffff #ffffff #808080',
        }}
      >
        Ready
      </div>
    </div>
  )
}
