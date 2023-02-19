import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Logo({}: Props) {
  return (
    <Link href="#" className='p-2'>
      <Image
        alt="TurkeyLearningInitiative"
        className="h-12 w-auto"
        height={48}
        width={48}
        src="/logo-transparent.png"
      />
    </Link>
  )
}

export default Logo
