import Link from 'next/link'
import { DrupalArticle } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'

interface ArticleTeaserProps {
  article: DrupalArticle
}

export default function ArticleTeaser({ article }: ArticleTeaserProps) {
  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp * 1000)
    return d.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    })
  }

  const formatTime = (timestamp: number) => {
    const d = new Date(timestamp * 1000)
    return d.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

  const summary = article.body?.summary

  return (
    <Link href={article.path} className="block h-full no-underline text-black">
      <article
        className="bg-[#c0c0c0] h-full flex flex-col font-['Tahoma',_'Arial',_sans-serif] text-[14px] cursor-pointer"
        style={{
          border: '2px solid',
          borderColor: '#ffffff #000000 #000000 #ffffff',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #ffffff',
        }}
      >
        {/* Mini title bar */}
        <div
          className="px-2 py-[2px] flex items-center justify-between flex-shrink-0"
          style={{
            background: 'linear-gradient(90deg, #000080, #1084d0)',
          }}
        >
          <span className="text-white text-[12px] font-bold truncate">
            📄 {article.title.substring(0, 30)}{article.title.length > 30 ? '...' : ''}.doc
          </span>
        </div>

        {/* Image in sunken frame */}
        {article.image?.url && (
          <div
            className="mx-2 mt-2 h-36 overflow-hidden"
            style={{
              border: '2px solid',
              borderColor: '#808080 #ffffff #ffffff #808080',
              boxShadow: 'inset 1px 1px 0 #000000',
            }}
          >
            <ResponsiveImage
              image={article.image}
              alt={article.image.alt || article.title}
              className="h-full"
              context="teaser"
              priority={false}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-2 flex-1 flex flex-col">
          <h2 className="text-[14px] font-bold text-[#000080] mb-1 line-clamp-2">
            {article.title}
          </h2>

          {/* File properties */}
          <div
            className="text-[12px] text-[#000000] mb-2 px-2 py-1 bg-white"
            style={{
              border: '2px solid',
              borderColor: '#808080 #ffffff #ffffff #808080',
            }}
          >
            <div className="flex justify-between">
              <span className="text-[#808080]">Modified:</span>
              <span>{formatDate(article.created.timestamp)} {formatTime(article.created.timestamp)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#808080]">Type:</span>
              <span>Article Document</span>
            </div>
          </div>

          {summary && (
            <p className="text-[12px] text-[#000000] line-clamp-3 mb-2">
              {summary}
            </p>
          )}

          <div className="mt-auto pt-1">
            <span className="dc95-button text-[12px] px-3 py-[2px] inline-block">
              Open &raquo;
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}