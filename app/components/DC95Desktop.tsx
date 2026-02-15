'use client'

import Link from 'next/link'

interface DesktopIcon {
  label: string
  href: string
  icon: React.ReactNode
}

const desktopIcons: DesktopIcon[] = [
  {
    label: 'My Articles',
    href: '/articles',
    icon: (
      <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
        <path d="M2 8H13L15 6H30V28H2V8Z" fill="#FFFF00" stroke="#808000" strokeWidth="1" />
        <path d="M2 8H30V28H2V8Z" fill="#FFF8DC" />
        <path d="M2 8H30V10H2V8Z" fill="#FFFF00" />
        <rect x="5" y="13" width="16" height="1" fill="#808080" />
        <rect x="5" y="16" width="20" height="1" fill="#808080" />
        <rect x="5" y="19" width="18" height="1" fill="#808080" />
        <rect x="5" y="22" width="14" height="1" fill="#808080" />
      </svg>
    ),
  },
  {
    label: 'About.txt',
    href: '/about',
    icon: (
      <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="2" width="24" height="28" fill="white" stroke="#000080" strokeWidth="1" />
        <rect x="4" y="2" width="24" height="4" fill="#000080" />
        <rect x="7" y="9" width="18" height="1" fill="#808080" />
        <rect x="7" y="12" width="16" height="1" fill="#808080" />
        <rect x="7" y="15" width="18" height="1" fill="#808080" />
        <rect x="7" y="18" width="12" height="1" fill="#808080" />
        <rect x="7" y="21" width="18" height="1" fill="#808080" />
        <rect x="7" y="24" width="14" height="1" fill="#808080" />
      </svg>
    ),
  },
  {
    label: 'Contact Us',
    href: '/contact',
    icon: (
      <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" fill="#FFF8DC" stroke="#808000" strokeWidth="1" />
        <path d="M2 6L16 18L30 6" stroke="#808000" strokeWidth="1" fill="none" />
        <path d="M2 26L12 16" stroke="#808000" strokeWidth="1" />
        <path d="M30 26L20 16" stroke="#808000" strokeWidth="1" />
      </svg>
    ),
  },
  {
    label: 'Internet',
    href: '/browser',
    icon: (
      <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#4169E1" stroke="#000080" strokeWidth="1" />
        <ellipse cx="16" cy="16" rx="8" ry="14" stroke="white" strokeWidth="1" fill="none" />
        <line x1="2" y1="12" x2="30" y2="12" stroke="white" strokeWidth="1" />
        <line x1="2" y1="20" x2="30" y2="20" stroke="white" strokeWidth="1" />
        <line x1="16" y1="2" x2="16" y2="30" stroke="white" strokeWidth="1" />
        <path d="M6 8 Q16 6 26 16" stroke="#FFD700" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    label: 'Trash',
    href: '/trash',
    icon: (
      <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="6" width="16" height="2" fill="#808080" stroke="#000000" strokeWidth="0.5" />
        <rect x="13" y="4" width="6" height="2" fill="#808080" stroke="#000000" strokeWidth="0.5" />
        <path d="M7 8H25L23 30H9L7 8Z" fill="#c0c0c0" stroke="#000000" strokeWidth="0.5" />
        <line x1="12" y1="11" x2="12" y2="27" stroke="#808080" strokeWidth="1" />
        <line x1="16" y1="11" x2="16" y2="27" stroke="#808080" strokeWidth="1" />
        <line x1="20" y1="11" x2="20" y2="27" stroke="#808080" strokeWidth="1" />
      </svg>
    ),
  },
]

export default function DC95Desktop() {
  return (
    <div
      className="fixed inset-0 bottom-[40px] overflow-hidden p-6"
      style={{ background: '#008080' }}
    >
      <div className="flex flex-col flex-wrap gap-8 h-full content-start">
        {desktopIcons.map((icon) => (
          <Link
            key={icon.label}
            href={icon.href}
            className="dc95-desktop-icon no-underline"
            tabIndex={0}
          >
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              {icon.icon}
            </div>
            <span className="dc95-icon-label">{icon.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
