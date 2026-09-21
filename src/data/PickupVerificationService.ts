
import type { PickupVerificationData } from './PickupVerificationData'
import type { ConsumerData } from './ConsumerData'
import type { HubData } from './HubData'
import type { OrderData } from './OrderData'
import { getById as getConsumerById } from './ConsumerService'
import { getById as getHubById } from './HubService'
import { getById as getOrderById } from './OrderService'

export type PickupVerificationFilterKey = 'hubId' | 'consumerId' | 'status' | 'verificationMode'

export interface PickupVerificationVO extends PickupVerificationData {
  consumer: ConsumerData | undefined
  hub: HubData | undefined
  order: OrderData | undefined
}

export const pickupVerificationDataList: PickupVerificationData[] = [
  {
    id: 'pup-001',
    orderId: 'ord-1002',
    hubId: 'hub-002',
    consumerId: 'con-002',
    status: 'Pending',
    verificationMode: 'OTP',
    otpMasked: '•••• 9230',
    qrTokenMasked: 'QR-••••-1002',
    verifiedAt: '',
    verifiedBy: ''
  },
  {
    id: 'pup-002',
    orderId: 'ord-1004',
    hubId: 'hub-004',
    consumerId: 'con-004',
    status: 'Completed',
    verificationMode: 'QR',
    otpMasked: '•••• 7788',
    qrTokenMasked: 'QR-••••-1004',
    verifiedAt: '2026-09-04T09:05:00',
    verifiedBy: 'Meena'
  }
]

export function getAll(): PickupVerificationData[] {
  return pickupVerificationDataList
}

export function getById(id: string): PickupVerificationData | undefined {
  return pickupVerificationDataList.find((item) => item.id === id)
}

export function getByOrderId(orderId: string): PickupVerificationData | undefined {
  return pickupVerificationDataList.find((item) => item.orderId === orderId)
}

export function getByOrderIdVO(orderId: string): PickupVerificationVO | undefined {
  const item = getByOrderId(orderId)
  if (!item) return undefined
  return {
    ...item,
    consumer: getConsumerById(item.consumerId),
    hub: getHubById(item.hubId),
    order: getOrderById(item.orderId)
  }
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<PickupVerificationFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): PickupVerificationData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  return pickupVerificationDataList
    .filter((item) => {
      const matchKeyword =
        keyword.length === 0 ||
        item.id.toLowerCase().includes(keyword) ||
        item.otpMasked.toLowerCase().includes(keyword) ||
        item.qrTokenMasked.toLowerCase().includes(keyword)
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

export function loadPersisted(): PickupVerificationData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('pickupVerificationDataList')
  if (!raw) return null
  return JSON.parse(raw) as PickupVerificationData[]
}

export function savePersisted(items: PickupVerificationData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('pickupVerificationDataList', JSON.stringify(items))
}

export const PickupVerificationService = {
  getAll,
  getById,
  getByOrderId,
  getByOrderIdVO,
  query,
  loadPersisted,
  savePersisted
}
