import Head from 'next/head'
import { Inter } from '@next/font/google'
import Landing from '../components/Landing'
import OurTeam from '@/components/OurTeam'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Turkey Learning Initiative</title>
        <meta name="description" content="TurkeyLearningInitiative" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Landing />
        <OurTeam />
      </main>
    </>
  )
}
