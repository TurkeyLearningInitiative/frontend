import { socialLinks } from '@/common/constants'
import { Contributer } from '@/common/services/contributer.interface'
import { fetchContributers } from '@/common/services/github.service'
import { unionBy } from 'lodash-es'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function OurTeam() {
  const [contributers, setContributers] = useState<Contributer[]>([])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    Promise.all([
      fetchContributers({
        repository: 'backend',
      }),
      fetchContributers({
        repository: 'frontend',
      }),
    ])
      .then((values) => {
        const mergedContributers = unionBy(values[0], values[1], 'id')
        setContributers(mergedContributers as Contributer[])
      })
      .catch((err) => {
        setError(err)
      })
  }, [])

  if (error || !contributers.length) {
    return <div>Something went wrong</div>
  }

  return (
    <div className="bg-white py-24 sm:py-32" id="our-team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Come closer and meet the people behind the project. We are a small
            team of developers and designers who are volunteering their time to
            make this project happen. We are always looking for new people to
            join our team. If you are interested in joining us please contact
            us.{'   '}
            <a
              href={socialLinks.githubOrganization}
              className="font-semibold text-indigo-600 whitespace-nowrap"
            >
              Github
            </a>
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {contributers.map((person) => (
            <ContributerCard person={person} key={person.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

const ContributerCard = ({ person }: { person: Contributer }) => {
  return (
    <a key={person.id} href={person.html_url} target="_blank" rel="noreferrer">
      <Image
        className="mx-auto h-24 w-24 rounded-full"
        src={person.avatar_url}
        alt={person.login}
        width={96}
        height={96}
      />
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
        {person.login}
      </h3>
    </a>
  )
}
