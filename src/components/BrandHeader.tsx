import Logo from './Logo'
import Link from 'next/link'
import { useState } from 'react'
const navigation = [
  { name: 'Biz Kimiz', href: '#', current: true },
  { name: 'Hedefimiz', href: '#', current: false },
  { name: 'Takımımız', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function BaseHeader() {
  const [mobileMenu, setmobileMenu] = useState(false)

  return (
    <header className="container px-2 mx-auto base-header flex justify-between items-center">
      <div className="logo-container">
        <Logo></Logo>
      </div>
      <nav>
        <ul className="items-center justify-center space-x-6 hidden md:flex">
          {navigation.map((navItem) => (
            <li key={navItem.name}>
              <Link className="base-link p-2" href={navItem.href}>
                {navItem.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="base-btn base-btn-success base-btn-sm"
              href="/login"
            >
              Giriş
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setmobileMenu(!mobileMenu)}
          type="button"
          className="md:hidden inline-flex base-btn base-btn-success base-btn-sm"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>

          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className={mobileMenu ? 'block' : 'hidden'}>
          <div
            className="absolute right-1 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-primary-500 ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            tabIndex={-1}
          >
            <nav className="p-8">
              <ul className="space-y-6">
                {navigation.map((navItem) => (
                  <li key={navItem.name}>
                    <Link className="base-link p-2" href={navItem.href}>
                      {navItem.name}
                    </Link>
                  </li>
                ))}
                <li className="w-full">
                  <Link
                    className="base-btn inline-block text-center base-btn-success w-full base-btn-sm"
                    href="/login"
                  >
                    Giriş
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  )
}
