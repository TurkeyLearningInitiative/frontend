import Logo from '../Logo'
import Link from 'next/link'
const navigation = [
  { name: 'Biz Kimiz', href: '#', current: true },
  { name: 'Hedefimiz', href: '#', current: false },
  { name: 'Takımımız', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function BaseHeader() {
  return (
    <header className="container px-2 mx-auto base-header flex justify-between items-center">
      <div className="logo-container">
        <Logo></Logo>
      </div>
      <nav>
        <ul className='flex items-center justify-cente space-x-6'>
          {navigation.map((navItem) => (
            <li key={navItem.name}>
              <Link className='base-link p-2' href={navItem.href}>{navItem.name}</Link>
            </li>
          ))}
          <li><Link className='base-btn base-btn-success base-btn-sm' href='/login'>Giriş</Link></li>
        </ul>
      </nav>
    </header>
  )
}
