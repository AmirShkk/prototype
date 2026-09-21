
import type { DeliveryData } from './DeliveryData'
import type { FarmerData } from './FarmerData'
import type { HubData } from './HubData'
import type { OrderData } from './OrderData'
import { getById as getFarmerById } from './FarmerService'
import { getById as getHubById } from './HubService'
import { getById as getOrderById } from './OrderService'

export type DeliveryFilterKey = 'farmerId' | 'hubId' | 'status' | 'authMethod'

export interface DeliveryVO extends DeliveryData {
  farmer: FarmerData | undefined
  hub: HubData | undefined
  order: OrderData | undefined
}

export const deliveryDataList: DeliveryData[] = [
  {
    id: 'del-001',
    orderId: 'ord-1001',
    farmerId: 'far-001',
    hubId: 'hub-001',
    status: 'In Transit',
    dispatchedAt: '2026-09-05T13:00:00',
    receivedAt: '',
    authMethod: 'QR',
    authReference: 'QR-9021',
    vehicleLabel: 'Mini Van GJ-01-AR-2201',
    handledBy: 'Suresh'
  },
  {
    id: 'del-002',
    orderId: 'ord-1002',
    farmerId: 'far-002',
    hubId: 'hub-002',
    status: 'Received at Hub',
    dispatchedAt: '2026-09-04T16:40:00',
    receivedAt: '2026-09-04T18:10:00',
    authMethod: 'OTP',
    authReference: 'OTP-7712',
    vehicleLabel: 'Pickup BR-11-BB-1122',
    handledBy: 'Aman'
  },
  {
    id: 'del-003',
    orderId: 'ord-1003',
    farmerId: 'far-003',
    hubId: 'hub-003',
    status: 'Prepared',
    dispatchedAt: '',
    receivedAt: '',
    authMethod: 'Manual Check',
    authReference: 'MC-3301',
    vehicleLabel: 'Cargo Truck PB-10-CC-4411',
    handledBy: 'Harpreet'
  },
  {
    id: 'del-004',
    orderId: 'ord-1004',
    farmerId: 'far-004',
    hubId: 'hub-004',
    status: 'Received at Hub',
    dispatchedAt: '2026-09-03T15:00:00',
    receivedAt: '2026-09-03T17:15:00',
    authMethod: 'QR',
    authReference: 'QR-7744',
    vehicleLabel: 'Tempo KA-09-DD-9033',
    handledBy: 'Meena'
  }
]

export function getAll(): DeliveryData[] {
  return deliveryDataList
}

export function getById(id: string): DeliveryData | undefined {
  return deliveryDataList.find((item) => item.id === id)
}

export function getByHubId(hubId: string): DeliveryData[] {
  return deliveryDataList.filter((item) => item.hubId === hubId)
}

export function getByIdVO(deliveryId: string): DeliveryVO | undefined {
  const delivery = getById(deliveryId)
  if (!delivery) return undefined
  return {
    ...delivery,
    farmer: getFarmerById(delivery.farmerId),
    hub: getHubById(delivery.hubId),
    order: getOrderById(delivery.orderId)
  }
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<DeliveryFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): DeliveryData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  return deliveryDataList
    .filter((item) => {
      const matchKeyword =
        keyword.length === 0 ||
        item.id.toLowerCase().includes(keyword) ||
        item.vehicleLabel.toLowerCase().includes(keyword) ||
        item.authReference.toLowerCase().includes(keyword)
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
      if (!sortKey) return b.dispatchedAt.localeCompare(a.dispatchedAt) * direction
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      return av > bv ? direction : -direction
    })
}

export function loadPersisted(): DeliveryData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('deliveryDataList')
  if (!raw) return null
  return JSON.parse(raw) as DeliveryData[]
}

export function savePersisted(items: DeliveryData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('deliveryDataList', JSON.stringify(items))
}

export const DeliveryService = {
  getAll,
  getById,
  getByHubId,
  getByIdVO,
  query,
  loadPersisted,
  savePersisted
}
