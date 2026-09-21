
import type { OrderItemData } from './OrderItemData'

export type OrderItemFilterKey = 'orderId' | 'farmerId' | 'productId'

export const orderItemDataList: OrderItemData[] = [
  { id: 'oli-001', orderId: 'ord-1001', productId: 'prd-001', farmerId: 'far-001', quantity: 4, unitPrice: 28, lineTotal: 112 },
  { id: 'oli-002', orderId: 'ord-1001', productId: 'prd-002', farmerId: 'far-001', quantity: 2, unitPrice: 34, lineTotal: 68 },
  { id: 'oli-003', orderId: 'ord-1001', productId: 'prd-001', farmerId: 'far-001', quantity: 2, unitPrice: 20, lineTotal: 40 },
  { id: 'oli-004', orderId: 'ord-1002', productId: 'prd-003', farmerId: 'far-002', quantity: 1, unitPrice: 220, lineTotal: 220 },
  { id: 'oli-005', orderId: 'ord-1002', productId: 'prd-004', farmerId: 'far-002', quantity: 2, unitPrice: 42, lineTotal: 84 },
  { id: 'oli-006', orderId: 'ord-1003', productId: 'prd-005', farmerId: 'far-003', quantity: 1, unitPrice: 980, lineTotal: 980 },
  { id: 'oli-007', orderId: 'ord-1003', productId: 'prd-006', farmerId: 'far-003', quantity: 1, unitPrice: 118, lineTotal: 118 },
  { id: 'oli-008', orderId: 'ord-1004', productId: 'prd-007', farmerId: 'far-004', quantity: 1, unitPrice: 160, lineTotal: 160 }
]

export function getAll(): OrderItemData[] {
  return orderItemDataList
}

export function getById(id: string): OrderItemData | undefined {
  return orderItemDataList.find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<OrderItemFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): OrderItemData[] {
  const filter = params.filter ?? {}
  return orderItemDataList
    .filter((item) => {
      const keyword = params.keyword?.trim().toLowerCase() ?? ''
      const matchKeyword =
        keyword.length === 0 ||
        item.id.toLowerCase().includes(keyword) ||
        item.orderId.toLowerCase().includes(keyword) ||
        item.productId.toLowerCase().includes(keyword)
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
      if (!sortKey) return a.id.localeCompare(b.id) * direction
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      return av > bv ? direction : -direction
    })
}

export function getByOrderId(orderId: string): OrderItemData[] {
  return orderItemDataList.filter((item) => item.orderId === orderId)
}

export function getByFarmerId(farmerId: string): OrderItemData[] {
  return orderItemDataList.filter((item) => item.farmerId === farmerId)
}

export function loadPersisted(): OrderItemData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('orderItemDataList')
  if (!raw) return null
  return JSON.parse(raw) as OrderItemData[]
}

export function savePersisted(items: OrderItemData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('orderItemDataList', JSON.stringify(items))
}
