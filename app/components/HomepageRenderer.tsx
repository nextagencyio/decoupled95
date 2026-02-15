'use client'

import DC95Window from './DC95Window'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'

interface HomepageContent extends DrupalHomepage {}

interface HomepageRendererProps {
  homepageContent: HomepageContent | null | undefined
}

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <DC95Window title="Welcome to Decoupled Drupal - DC Browser" menuItems={['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help']}>
      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <FeaturesSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>
    </DC95Window>
  )
}