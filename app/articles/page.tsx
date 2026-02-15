import DC95Window from '../components/DC95Window'
import ArticleTeaser from '../components/ArticleTeaser'
import ErrorBoundary from '../components/ErrorBoundary'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_ARTICLE_TEASERS } from '@/lib/queries'
import { ArticleTeaserData } from '@/lib/types'
import { Metadata } from 'next'

export const revalidate = 1800

export const metadata: Metadata = {
  title: 'My Articles',
  description: 'C:\\My Documents\\Articles',
}

async function getArticles(apolloClient: ReturnType<typeof getServerApolloClient>): Promise<ArticleTeaserData | null> {
  try {
    const { data } = await apolloClient.query<ArticleTeaserData>({
      query: GET_ARTICLE_TEASERS,
      variables: { first: 12 },
      fetchPolicy: 'cache-first',
    })
    return data
  } catch (error) {
    console.error('Error fetching articles:', error)
    return null
  }
}

export default async function Articles() {
  const requestHeaders = await headers()
  const apolloClient = getServerApolloClient(requestHeaders)
  const data = await getArticles(apolloClient)

  if (!data) {
    return (
      <DC95Window title="C:\My Documents\Articles" menuItems={['File', 'Edit', 'View', 'Favorites', 'Help']}>
        <div className="p-5 font-['Tahoma',_'Arial',_sans-serif] text-[14px]">
          <div className="flex items-center gap-3 p-4 bg-[#FFFFCC] border border-[#808080]">
            <span className="text-2xl">⚠️</span>
            <span>Error: Failed to load articles from the server.</span>
          </div>
        </div>
      </DC95Window>
    )
  }

  const articles = data.nodeArticles?.nodes || []

  return (
    <DC95Window title="C:\My Documents\Articles" menuItems={['File', 'Edit', 'View', 'Favorites', 'Help']}>
      <div className="p-5 font-['Tahoma',_'Arial',_sans-serif] text-[14px]">
        {/* Address bar */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[14px] font-bold">Address</span>
          <div
            className="flex-1 bg-white px-3 py-1 text-[14px]"
            style={{
              border: '2px solid',
              borderColor: '#808080 #ffffff #ffffff #808080',
              boxShadow: 'inset 1px 1px 0 #000000',
            }}
          >
            C:\My Documents\Articles
          </div>
        </div>

        {/* Toolbar */}
        <div
          className="flex items-center gap-1 mb-3 px-1 py-1 bg-[#c0c0c0]"
          style={{ borderBottom: '1px solid #808080' }}
        >
          <span className="text-[12px] text-[#808080] mr-2">{articles.length} object(s)</span>
          <div className="ml-auto flex gap-1">
            <button className="dc95-button text-[12px] px-2 py-0">
              <span className="mr-1">📋</span>Details
            </button>
          </div>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-[16px] mb-2">This folder is empty.</p>
            <p className="text-[14px] text-[#808080]">
              Import starter content to see sample articles.
            </p>
          </div>
        ) : (
          <ErrorBoundary>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {articles.map((article) => (
                <ErrorBoundary key={article.id}>
                  <ArticleTeaser article={article} />
                </ErrorBoundary>
              ))}
            </div>
          </ErrorBoundary>
        )}
      </div>
    </DC95Window>
  )
}
