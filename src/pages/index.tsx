import Head from 'next/head'
import Landing from '../components/Landing'
import OurTeam from '@/components/OurTeam'


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
