
import type { CategoryData } from './CategoryData'

export type CategoryFilterKey = 'isActive'

export const categoryDataList: CategoryData[] = [
  { id: 'cat-veg', name: 'Vegetables', iconName: 'Carrot', sortOrder: 1, isActive: true },
  { id: 'cat-fruit', name: 'Fruits', iconName: 'Apple', sortOrder: 2, isActive: true },
  { id: 'cat-grain', name: 'Grains', iconName: 'Wheat', sortOrder: 3, isActive: true },
  { id: 'cat-dairy', name: 'Dairy', iconName: 'Milk', sortOrder: 4, isActive: true },
  { id: 'cat-pulse', name: 'Pulses', iconName: 'Sprout', sortOrder: 5, isActive: true },
  { id: 'cat-spice', name: 'Spices', iconName: 'Flame', sortOrder: 6, isActive: true }
]

export function getAll(): CategoryData[] {
  return categoryDataList
}

export function getById(id: string): CategoryData | undefined {
  return categoryDataList.find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<CategoryFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): CategoryData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  return categoryDataList
    .filter((item) => {
      const matchKeyword =
        keyword.length === 0 ||
        item.name.toLowerCase().includes(keyword) ||
        item.id.toLowerCase().includes(keyword)
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
      if (!sortKey) return a.sortOrder - b.sortOrder
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      return av > bv ? direction : -direction
    })
}

export function loadPersisted(): CategoryData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('categoryDataList')
  if (!raw) return null
  return JSON.parse(raw) as CategoryData[]
}

export function savePersisted(items: CategoryData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('categoryDataList', JSON.stringify(items))
}
