import {
  BookmarkSquareIcon,
  AcademicCapIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline'

export const navigation = [
  { name: 'Biz kimiz', href: '#' },
  { name: 'Hedefimiz?', href: '#' },
  { name: 'Takımımız', href: '#' },
  { name: 'Destek ol', href: '#destek-ol' },
  { name: 'Giriş', href: '#' },
]

export const sideNavigation = [
  {
    name: 'Ders Notları',
    href: '/admin',
    current: true,
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Fakülteler',
    current: false,
    icon: ClipboardDocumentIcon,
    children: [
      { name: 'X Fakülte', href: '#' },
      { name: 'Y Fakülte', href: '#' },
      { name: 'Z Fakülte', href: '#' },
      { name: 'A Fakülte', href: '#' },
    ],
  },
  {
    name: 'Üniversiteler',
    current: false,
    icon: AcademicCapIcon,
    children: [
      { name: 'X Üniversite', href: '#' },
      { name: 'Y Üniversite', href: '#' },
      { name: 'Z Üniversite', href: '#' },
    ],
  },
]
export const socialLinks = {
  discord: 'https://discord.gg/G3uEnacM',
  twitter: 'https://twitter.com/hashtag/TurkeyLearningInitiative',
  github:
    'https://github.com/ayyucedemirbas/TurkeyLearningInitiative/network/members',
}
