
import type { ConsumerData } from './ConsumerData'

export type ConsumerFilterKey = 'city' | 'preferredLanguage'

export const consumerDataList: ConsumerData[] = [
  {
    id: 'con-001',
    name: 'Ananya Roy',
    phone: '+91-98111-50001',
    email: 'ananya.roy@example.com',
    avatarUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/34f3115a-ee53-4b16-9931-b4c23479c5ee.png',
    city: 'Ahmedabad',
    addressLabel: 'Navrangpura, Ahmedabad',
    preferredLanguage: 'English'
  },
  {
    id: 'con-002',
    name: 'Rahul Mehta',
    phone: '+91-98111-50002',
    email: 'rahul.mehta@example.com',
    avatarUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/f3c500ff-fb6a-48f8-8d9b-8b41112d8c27.png',
    city: 'Patna',
    addressLabel: 'Boring Road, Patna',
    preferredLanguage: 'Hindi'
  },
  {
    id: 'con-003',
    name: 'Priya Nair',
    phone: '+91-98111-50003',
    email: 'priya.nair@example.com',
    avatarUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/10e4b7cb-323c-4c55-a3ad-42afc7d931cc.png',
    city: 'Ludhiana',
    addressLabel: 'Civil Lines, Ludhiana',
    preferredLanguage: 'English'
  },
  {
    id: 'con-004',
    name: 'Vikram Das',
    phone: '+91-98111-50004',
    email: 'vikram.das@example.com',
    avatarUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/060aec5d-1cf4-41d0-b60e-dfb8a2fbcccf.png',
    city: 'Mysuru',
    addressLabel: 'Vijayanagar, Mysuru',
    preferredLanguage: 'Kannada'
  }
]

export function getAll(): ConsumerData[] {
  return consumerDataList
}

export function getById(id: string): ConsumerData | undefined {
  return consumerDataList.find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<ConsumerFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): ConsumerData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  return consumerDataList
    .filter((item) => {
      const matchKeyword =
        keyword.length === 0 ||
        item.name.toLowerCase().includes(keyword) ||
        item.city.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword)
      const matchFilter = Object.entries(filter).every(([key, val]) => {
        if (val === undefined) return true
        const itemVal = (item as any)[key]
        return Array.isArray(val) ? val.includes(itemVal) : itemVal === val
      })
      return matchKeyword && matchFilter
    })
    .sort((a, b) => {
      const direction = params.sortDirection === 'desc' ? -1 : 1
      const sortKey = params.sortKey
      if (!sortKey) return a.name.localeCompare(b.name) * direction
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      return av > bv ? direction : -direction
    })
}

export function loadPersisted(): ConsumerData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('consumerDataList')
  if (!raw) return null
  return JSON.parse(raw) as ConsumerData[]
}

export function savePersisted(items: ConsumerData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('consumerDataList', JSON.stringify(items))
}

export const ConsumerService = {
  getAll,
  getById,
  query,
  loadPersisted,
  savePersisted
}
