import DC95Window from '../components/DC95Window'
import ErrorBoundary from '../components/ErrorBoundary'
import HomepageRenderer from '../components/HomepageRenderer'
import ResponsiveImage from '../components/ResponsiveImage'
import { headers } from 'next/headers'
import { Metadata } from 'next'
import { GET_NODE_BY_PATH } from '@/lib/queries'
import { getServerApolloClient } from '@/lib/apollo-client'

export const revalidate = 300

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params
  const path = `/${(resolvedParams.slug || []).join('/')}`
  try {
    const apollo = getServerApolloClient(await headers())
    const { data } = await apollo.query({ query: GET_NODE_BY_PATH, variables: { path } })
    const title = data?.route?.entity?.title || 'Page'
    return { title }
  } catch {
    return { title: 'Page' }
  }
}

function PageNotFound({ path }: { path: string }) {
  return (
    <div className="p-8 text-center font-['Tahoma',_'Arial',_sans-serif]">
      <div className="flex items-center justify-center gap-3 mb-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#FF0000" stroke="#800000" strokeWidth="1" />
          <text x="16" y="22" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">X</text>
        </svg>
        <span className="text-[16px] font-bold">The page cannot be displayed</span>
      </div>
      <div
        className="text-[14px] text-left max-w-md mx-auto p-4 bg-white"
        style={{
          border: '2px solid',
          borderColor: '#808080 #ffffff #ffffff #808080',
        }}
      >
        <p className="mb-2">The page you are looking for is currently unavailable. The Web site might be experiencing technical difficulties, or you may need to adjust your browser settings.</p>
        <p className="mb-2 text-[#808080]">HTTP 404 - File not found</p>
        <p className="text-[#808080]">Path: {path}</p>
      </div>
      <div className="mt-4">
        <button
          className="dc95-button text-[14px] px-4"
          onClick={() => window.history.back()}
        >
          &lt; Back
        </button>
      </div>
    </div>
  )
}

export default async function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params
  const path = `/${(resolvedParams.slug || []).join('/')}`
  const apollo = getServerApolloClient(await headers())

  try {
    const result = await apollo.query({ query: GET_NODE_BY_PATH, variables: { path }, fetchPolicy: 'no-cache' })
    const { data } = result
    const entity = data?.route?.entity

    if (!entity) {
      return (
        <DC95Window title={`${path} - DC Browser`}>
          <PageNotFound path={path} />
        </DC95Window>
      )
    }

    // Handle homepage nodes
    if (entity.__typename === 'NodeHomepage') {
      return <HomepageRenderer homepageContent={entity} />
    }

    // Handle regular page and article nodes
    const title = entity.title || 'Untitled'
    const bodyHtml = entity?.body?.processed || ''
    const image = entity?.image

    return (
      <DC95Window
        title={`${title} - DC Editor`}
        menuItems={['File', 'Edit', 'Search', 'Help']}
      >
        <ErrorBoundary>
          <div className="font-['Tahoma',_'Arial',_sans-serif]">
            {image && (
              <div
                className="m-3 overflow-hidden"
                style={{
                  border: '2px solid',
                  borderColor: '#808080 #ffffff #ffffff #808080',
                  boxShadow: 'inset 1px 1px 0 #000000',
                }}
              >
                <ResponsiveImage
                  image={image}
                  alt={image.alt || title}
                  context="hero"
                  maxHeight="50vh"
                  priority={true}
                />
              </div>
            )}
            <div className="px-4 pb-4 pt-2">
              <h1 className="text-[22px] font-bold text-[#000080] mb-1">{title}</h1>
              <div
                className="text-[12px] text-[#808080] mb-3 pb-2"
                style={{ borderBottom: '1px solid #808080' }}
              >
                {entity.created?.timestamp && (
                  <span>
                    Modified: {new Date(entity.created.timestamp * 1000).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
                    {' '}
                    {new Date(entity.created.timestamp * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                  </span>
                )}
              </div>
              <div className="text-[14px] leading-relaxed prose max-w-none" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
            </div>
          </div>
        </ErrorBoundary>
      </DC95Window>
    )
  } catch (error) {
    console.error('Error loading page by path:', error)
    return (
      <DC95Window title={`Error - DC Browser`}>
        <PageNotFound path={path} />
      </DC95Window>
    )
  }
}
