import Hero from '@/components/BrandHero'
import BaseLayout from '@/components/BaseLayout'
import OurTeam from '@/components/OurTeam'
import { Statistics } from '@/components/Statistics'
import { FunctionComponent } from 'react'

interface ILectureNote {
  _id: string
  title: string
  description: string
  author: string
  uploader: string
  heroImageUrl: string
  tags: string[]
  searchText: string
  classId: string
  majorId: string
  contentUrl: string
  isVerified: boolean
  createdAt: Date
  updatedAt: Date
}
const Home: FunctionComponent<{ lectures: ILectureNote[] }> = ({
  lectures,
}) => {
  return (
    <BaseLayout>
      <Hero />
      <Statistics />
      <OurTeam />
      <div>
        {' '}
        <h1>Recent Lectures Section</h1>
      </div>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api-production-7e9a.up.railway.app/v1/lecture-notes'
  )
  const lectures = await res.json()

  return {
    props: {
      lectures,
    },
  }
}
export default Home
