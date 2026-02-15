import DC95Desktop from './components/DC95Desktop'
import { Metadata } from 'next'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Desktop - Decoupled95',
    description: 'Welcome to Decoupled95. Where do you want to go today?',
  }
}

export default function Home() {
  return <DC95Desktop />
}
