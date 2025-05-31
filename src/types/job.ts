export type Job = {
  slug: string
  title: string
  company: string
  logoUrl?: string
  location: string
  type: string
  postedAt: string
  experience: string
  salary?: string
  isRemote?: boolean
  tags?: string[]
  source?: string
  description: string
  requirements?: string[]
  applyUrl: string
}
