'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const taskbarPages: Record<string, string> = {
  '/': 'Desktop',
  '/articles': 'Articles',
  '/about': 'About',
  '/contact': 'Contact Us',
}

interface StartMenuItem {
  label: string
  href: string
  icon: string
}

const startMenuItems: StartMenuItem[] = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Articles', href: '/articles', icon: '📰' },
  { label: 'About', href: '/about', icon: '📋' },
  { label: 'Contact', href: '/contact', icon: '📧' },
]

export default function DC95Taskbar() {
  const pathname = usePathname()
  const [startOpen, setStartOpen] = useState(false)
  const [shutdownOpen, setShutdownOpen] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Close start menu when clicking elsewhere
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.dc95-start-menu') && !target.closest('.dc95-start-btn')) {
        setStartOpen(false)
      }
    }
    if (startOpen) {
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [startOpen])

  // Close popups on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setStartOpen(false)
        setShutdownOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Close start menu on route change
  useEffect(() => {
    setStartOpen(false)
  }, [pathname])

  const currentPage = Object.entries(taskbarPages).find(
    ([path]) => path !== '/' && pathname.startsWith(path)
  )?.[1] || (pathname === '/' ? null : 'Page')

  return (
    <>
      {/* Start Menu */}
      {startOpen && (
        <div className="dc95-start-menu">
          <div className="dc95-start-menu-sidebar">
            <span>Decoupled95</span>
          </div>
          <div className="dc95-start-menu-items">
            {startMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="dc95-start-menu-item no-underline text-black"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="dc95-start-menu-divider" />
            <div className="dc95-start-menu-item" onClick={() => { setStartOpen(false); setShutdownOpen(true) }}>
              <span className="text-xl">🔌</span>
              <span>Shut Down...</span>
            </div>
          </div>
        </div>
      )}

      {/* Shut Down Dialog */}
      {shutdownOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/30">
          <div
            className="bg-[#c0c0c0] w-[90vw] max-w-[400px]"
            style={{
              border: '2px solid',
              borderColor: '#ffffff #000000 #000000 #ffffff',
              boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #ffffff, 4px 4px 0 rgba(0,0,0,0.3)',
            }}
          >
            <div className="dc95-titlebar flex-shrink-0">
              <span className="text-[14px]">Shut Down Decoupled95</span>
              <button
                className="dc95-title-btn"
                onClick={() => setShutdownOpen(false)}
              >
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none">
                  <line x1="0" y1="0" x2="10" y2="9" stroke="black" strokeWidth="1.8" />
                  <line x1="10" y1="0" x2="0" y2="9" stroke="black" strokeWidth="1.8" />
                </svg>
              </button>
            </div>
            <div className="p-5 flex gap-4">
              <div className="flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
                  <rect x="2" y="4" width="28" height="20" fill="#000080" stroke="#000000" strokeWidth="1" />
                  <rect x="4" y="6" width="24" height="16" fill="#008080" />
                  <rect x="10" y="26" width="12" height="2" fill="#808080" />
                  <rect x="8" y="28" width="16" height="1" fill="#808080" />
                </svg>
              </div>
              <div className="font-['Tahoma',_'Arial',_sans-serif] text-[14px]">
                <p className="font-bold mb-3">Are you sure you want to:</p>
                <div className="space-y-2 ml-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="shutdown" defaultChecked className="accent-[#000080]" />
                    <span>Shut down the computer?</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="shutdown" className="accent-[#000080]" />
                    <span>Restart the computer?</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="shutdown" className="accent-[#000080]" />
                    <span>Restart the computer in MS-DOS mode?</span>
                  </label>
                </div>
                <p className="mt-4 text-[12px] text-[#808080]">
                  Just kidding. This is a website. You can&apos;t shut it down.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2 pb-4 px-4">
              <button
                className="dc95-button text-[14px] min-w-[80px]"
                onClick={() => setShutdownOpen(false)}
              >
                OK
              </button>
              <button
                className="dc95-button text-[14px] min-w-[80px]"
                onClick={() => setShutdownOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="dc95-taskbar">
        <button
          className="dc95-start-btn"
          onClick={() => setStartOpen(!startOpen)}
        >
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
            <rect x="0" y="0" width="6" height="6" fill="#FF0000" />
            <rect x="7" y="0" width="6" height="6" fill="#00FF00" />
            <rect x="0" y="7" width="6" height="6" fill="#0000FF" />
            <rect x="7" y="7" width="6" height="6" fill="#FFFF00" />
          </svg>
          Start
        </button>

        {/* Divider */}
        <div
          className="h-[28px] w-0"
          style={{
            borderLeft: '1px solid #808080',
            borderRight: '1px solid #ffffff',
          }}
        />

        {/* Active window button */}
        {currentPage && (
          <button className="dc95-task-btn active">
            {currentPage}
          </button>
        )}

        {/* System Tray / Clock */}
        <div className="dc95-tray">
          {time}
        </div>
      </div>
    </>
  )
}
