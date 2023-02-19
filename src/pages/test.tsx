import Hero from '@/components/Hero'
import BaseLayout from '@/components/Layouts/BaseLayout'
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
      {/* <Hero /> */}
      <div>
        {' '}
        <h1>Hero Section</h1>
      </div>
      <div>
        {' '}
        <h1>Stats Section</h1>
      </div>
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
