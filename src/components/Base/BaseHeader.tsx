import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../Logo'
import Link from 'next/link'
const navigation = [
  { name: 'Biz Kimiz', href: '#', current: true },
  { name: 'Hedefimiz', href: '#', current: false },
  { name: 'Takımımız', href: '#', current: false },
  { name: 'Giriş', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function BaseHeader() {
  return (
    <header className="container mx-auto base-header flex justify-between items-center p-4">
      <div className="logo-container">
        <Logo></Logo>
      </div>
      <nav>
        <ul className='flex items-center justify-center'>
          {navigation.map((navItem) => (
            <li key={navItem.name}>
              <Link className='base-link hover:text-purple-500' href={navItem.href}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
