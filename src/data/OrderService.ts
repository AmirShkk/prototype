
import type { OrderData } from './OrderData'
import type { FarmerData } from './FarmerData'
import type { HubData } from './HubData'
import type { ConsumerData } from './ConsumerData'
import { getById as getFarmerById } from './FarmerService'
import { getById as getHubById } from './HubService'
import { getById as getConsumerById } from './ConsumerService'

export type OrderFilterKey = 'consumerId' | 'farmerId' | 'hubId' | 'status' | 'paymentStatus'

export interface OrderVO extends OrderData {
  farmer: FarmerData | undefined
  hub: HubData | undefined
  consumer: ConsumerData | undefined
}

export const orderDataList: OrderData[] = [
  {
    id: 'ord-1001',
    consumerId: 'con-001',
    farmerId: 'far-001',
    hubId: 'hub-001',
    orderNumber: 'FGC-2026-1001',
    status: 'Dispatched',
    paymentStatus: 'Paid',
    totalAmount: 238,
    subtotalAmount: 220,
    platformFee: 8,
    deliveryFee: 10,
    quantityTotal: 8,
    placedAt: '2026-09-05T09:15:00',
    paidAt: '2026-09-05T09:16:00',
    packedAt: '2026-09-05T12:10:00',
    dispatchedAt: '2026-09-05T13:00:00',
    receivedAt: '',
    completedAt: '',
    pickupCode: 'PQ-4812',
    fulfillmentNote: 'Packed in recyclable crates for morning hub dispatch.'
  },
  {
    id: 'ord-1002',
    consumerId: 'con-002',
    farmerId: 'far-002',
    hubId: 'hub-002',
    orderNumber: 'FGC-2026-1002',
    status: 'Arrived at Hub',
    paymentStatus: 'Paid',
    totalAmount: 456,
    subtotalAmount: 430,
    platformFee: 11,
    deliveryFee: 15,
    quantityTotal: 3,
    placedAt: '2026-09-04T11:20:00',
    paidAt: '2026-09-04T11:21:00',
    packedAt: '2026-09-04T15:05:00',
    dispatchedAt: '2026-09-04T16:40:00',
    receivedAt: '2026-09-04T18:10:00',
    completedAt: '',
    pickupCode: 'PQ-9230',
    fulfillmentNote: 'Awaiting consumer pickup verification at hub desk.'
  },
  {
    id: 'ord-1003',
    consumerId: 'con-003',
    farmerId: 'far-003',
    hubId: 'hub-003',
    orderNumber: 'FGC-2026-1003',
    status: 'Packed',
    paymentStatus: 'Paid',
    totalAmount: 1190,
    subtotalAmount: 1170,
    platformFee: 10,
    deliveryFee: 10,
    quantityTotal: 12,
    placedAt: '2026-09-05T08:40:00',
    paidAt: '2026-09-05T08:41:00',
    packedAt: '2026-09-05T14:25:00',
    dispatchedAt: '',
    receivedAt: '',
    completedAt: '',
    pickupCode: 'PQ-1044',
    fulfillmentNote: 'Bulk grain order staged for afternoon dispatch.'
  },
  {
    id: 'ord-1004',
    consumerId: 'con-004',
    farmerId: 'far-004',
    hubId: 'hub-004',
    orderNumber: 'FGC-2026-1004',
    status: 'Completed',
    paymentStatus: 'Paid',
    totalAmount: 274,
    subtotalAmount: 260,
    platformFee: 4,
    deliveryFee: 10,
    quantityTotal: 5,
    placedAt: '2026-09-03T10:00:00',
    paidAt: '2026-09-03T10:01:00',
    packedAt: '2026-09-03T13:20:00',
    dispatchedAt: '2026-09-03T15:00:00',
    receivedAt: '2026-09-03T17:15:00',
    completedAt: '2026-09-04T09:05:00',
    pickupCode: 'PQ-7788',
    fulfillmentNote: 'Pickup completed successfully after OTP verification.'
  }
]

export function getAll(): OrderData[] {
  return orderDataList
}

export function getById(id: string): OrderData | undefined {
  return orderDataList.find((item) => item.id === id)
}

export function getByConsumerId(consumerId: string): OrderData[] {
  return orderDataList.filter((item) => item.consumerId === consumerId)
}

export function getByFarmerId(farmerId: string): OrderData[] {
  return orderDataList.filter((item) => item.farmerId === farmerId)
}

export function getByHubId(hubId: string): OrderData[] {
  return orderDataList.filter((item) => item.hubId === hubId)
}

export function getByIdVO(orderId: string): OrderVO | undefined {
  const order = getById(orderId)
  if (!order) return undefined
  return {
    ...order,
    farmer: getFarmerById(order.farmerId),
    hub: getHubById(order.hubId),
    consumer: getConsumerById(order.consumerId)
  }
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<OrderFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): OrderData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  return orderDataList
    .filter((item) => {
      const matchKeyword =
        keyword.length === 0 ||
        item.orderNumber.toLowerCase().includes(keyword) ||
        item.id.toLowerCase().includes(keyword) ||
        item.fulfillmentNote.toLowerCase().includes(keyword)
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
      if (!sortKey) return b.placedAt.localeCompare(a.placedAt) * direction
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      return av > bv ? direction : -direction
    })
}

export function loadPersisted(): OrderData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('orderDataList')
  if (!raw) return null
  return JSON.parse(raw) as OrderData[]
}

export function savePersisted(items: OrderData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('orderDataList', JSON.stringify(items))
}

export const OrderService = {
  getAll,
  getById,
  getByConsumerId,
  getByFarmerId,
  getByHubId,
  getByIdVO,
  query,
  loadPersisted,
  savePersisted
}
