
import type { NotificationData } from './NotificationData'

export type NotificationFilterKey = 'recipientRole' | 'recipientId' | 'type' | 'isRead' | 'priority'

export const notificationDataList: NotificationData[] = [
  {
    id: 'not-001',
    recipientRole: 'Farmer',
    recipientId: 'far-001',
    type: 'Order',
    title: 'New order received',
    message: 'Consumer Ananya Roy placed an order for Fresh Spinach Bundle.',
    relatedEntityType: 'Order',
    relatedEntityId: 'ord-1001',
    isRead: false,
    createdAt: '2026-09-05T09:16:30',
    priority: 'High',
    iconName: 'ShoppingCart'
  },
  {
    id: 'not-002',
    recipientRole: 'Hub',
    recipientId: 'hub-002',
    type: 'Delivery',
    title: 'Delivery arrived at hub',
    message: 'Harvest Gate Hub received a parcel from farmer Sushila Devi.',
    relatedEntityType: 'Delivery',
    relatedEntityId: 'del-002',
    isRead: false,
    createdAt: '2026-09-04T18:10:30',
    priority: 'High',
    iconName: 'Truck'
  },
  {
    id: 'not-003',
    recipientRole: 'Consumer',
    recipientId: 'con-003',
    type: 'Payment',
    title: 'Payment confirmed',
    message: 'Your payment for order FGC-2026-1003 has been confirmed successfully.',
    relatedEntityType: 'Payment',
    relatedEntityId: 'pay-003',
    isRead: true,
    createdAt: '2026-09-05T08:41:10',
    priority: 'Medium',
    iconName: 'BadgeCheck'
  },
  {
    id: 'not-004',
    recipientRole: 'Farmer',
    recipientId: 'far-004',
    type: 'Alert',
    title: 'Low stock warning',
    message: 'Black Pepper Pack is moving quickly. Consider restocking soon.',
    relatedEntityType: 'Product',
    relatedEntityId: 'prd-007',
    isRead: false,
    createdAt: '2026-09-05T11:15:00',
    priority: 'Medium',
    iconName: 'Bell'
  }
]

export function getAll(): NotificationData[] {
  return notificationDataList
}

export function getById(id: string): NotificationData | undefined {
  return notificationDataList.find((item) => item.id === id)
}

export function getByRecipient(role: string, recipientId: string): NotificationData[] {
  return notificationDataList.filter((item) => item.recipientRole === role && item.recipientId === recipientId)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<NotificationFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): NotificationData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  return notificationDataList
    .filter((item) => {
      const matchKeyword =
        keyword.length === 0 ||
        item.title.toLowerCase().includes(keyword) ||
        item.message.toLowerCase().includes(keyword)
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
      if (!sortKey) return b.createdAt.localeCompare(a.createdAt) * direction
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      return av > bv ? direction : -direction
    })
}

export function loadPersisted(): NotificationData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('notificationDataList')
  if (!raw) return null
  return JSON.parse(raw) as NotificationData[]
}

export function savePersisted(items: NotificationData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('notificationDataList', JSON.stringify(items))
}
