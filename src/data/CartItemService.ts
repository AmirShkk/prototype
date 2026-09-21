
import type { CartItemData } from './CartItemData'
import type { ProductData } from './ProductData'
import type { FarmerData } from './FarmerData'
import type { CategoryData } from './CategoryData'
import { getById as getProductById } from './ProductService'
import { getById as getFarmerById } from './FarmerService'
import { getById as getCategoryById } from './CategoryService'

export type CartItemFilterKey = 'consumerId' | 'productId'

export interface CartItemVO extends CartItemData {
  product: ProductData | undefined
  farmer: FarmerData | undefined
  category: CategoryData | undefined
  lineTotal: number
}

export const cartItemDataList: CartItemData[] = [
  { id: 'cart-001', consumerId: 'con-001', productId: 'prd-001', quantity: 2, unitPriceSnapshot: 28, addedAt: '2026-09-05T10:05:00' },
  { id: 'cart-002', consumerId: 'con-001', productId: 'prd-003', quantity: 1, unitPriceSnapshot: 220, addedAt: '2026-09-05T10:08:00' },
  { id: 'cart-003', consumerId: 'con-002', productId: 'prd-004', quantity: 3, unitPriceSnapshot: 42, addedAt: '2026-09-04T18:00:00' },
  { id: 'cart-004', consumerId: 'con-003', productId: 'prd-005', quantity: 1, unitPriceSnapshot: 980, addedAt: '2026-09-05T08:10:00' }
]

export function getAll(): CartItemData[] {
  return cartItemDataList
}

export function getById(id: string): CartItemData | undefined {
  return cartItemDataList.find((item) => item.id === id)
}

export function getByConsumerId(consumerId: string): CartItemData[] {
  return cartItemDataList.filter((item) => item.consumerId === consumerId)
}

export function getByConsumerIdVO(consumerId: string): CartItemVO[] {
  return getByConsumerId(consumerId).map((item) => {
    const product = getProductById(item.productId)
    return {
      ...item,
      product,
      farmer: product ? getFarmerById(product.farmerId) : undefined,
      category: product ? getCategoryById(product.categoryId) : undefined,
      lineTotal: item.quantity * item.unitPriceSnapshot
    }
  })
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<CartItemFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): CartItemData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  return cartItemDataList
    .filter((item) => {
      const matchKeyword =
        keyword.length === 0 ||
        item.id.toLowerCase().includes(keyword) ||
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
      if (!sortKey) return a.addedAt.localeCompare(b.addedAt) * direction
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      return av > bv ? direction : -direction
    })
}

export function loadPersisted(): CartItemData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('cartItemDataList')
  if (!raw) return null
  return JSON.parse(raw) as CartItemData[]
}

export function savePersisted(items: CartItemData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('cartItemDataList', JSON.stringify(items))
}
