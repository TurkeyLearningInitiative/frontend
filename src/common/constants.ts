export const navigation = [
  { name: 'Biz kimiz', href: '#' },
  { name: 'Hedefimiz?', href: '#' },
  { name: 'Takımımız', href: '#our-team' },
  { name: 'Destek ol', href: '#destek-ol' },
  { name: 'Giriş', href: '#' },
]

export const socialLinks = {
  discord: 'https://discord.gg/G3uEnacM',
  twitter: 'https://twitter.com/hashtag/TurkeyLearningInitiative',
  github:
    'https://github.com/ayyucedemirbas/TurkeyLearningInitiative/network/members',
  githubOrganization: 'https://github.com/TurkeyLearningInitiative',
}

export const repositories = {
  frontend: {
    repo: 'frontend',
    owner: 'TurkeyLearningInitiative',
  },
  backend: {
    repo: 'api',
    owner: 'TurkeyLearningInitiative',
  },
}
export type GithubRepositories = keyof typeof repositories
