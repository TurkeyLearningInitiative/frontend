import React from 'react'
import Image from 'next/image'

type Props = {}

function Logo({}: Props) {
  return (
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Turkey Learning Initiative</span>
      <Image
        alt="TurkeyLearningInitiative"
        className="h-12 w-auto"
        height={48}
        width={48}
        src="/logo-transparent.png"
      />
    </a>
  )
}

export default Logo
