
import type { LedgerEntryData } from './LedgerEntryData'

export type LedgerEntryFilterKey = 'hubId' | 'entityType' | 'actionType' | 'actorRole'

export const ledgerEntryDataList: LedgerEntryData[] = [
  {
    id: 'led-001',
    hubId: 'hub-001',
    entityType: 'Delivery',
    entityId: 'del-001',
    actionType: 'Dispatched',
    actorRole: 'Farmer',
    actorId: 'far-001',
    occurredAt: '2026-09-05T13:00:00',
    note: 'Farmer dispatched spinach and tomatoes to central hub.',
    referenceCode: 'GLH-01-DEL-001'
  },
  {
    id: 'led-002',
    hubId: 'hub-002',
    entityType: 'Pickup',
    entityId: 'pup-001',
    actionType: 'Verified',
    actorRole: 'Hub',
    actorId: 'hub-002',
    occurredAt: '2026-09-04T18:15:00',
    note: 'OTP verification completed for consumer pickup.',
    referenceCode: 'HGH-02-PUP-001'
  },
  {
    id: 'led-003',
    hubId: 'hub-003',
    entityType: 'Payment',
    entityId: 'pay-003',
    actionType: 'Created',
    actorRole: 'Consumer',
    actorId: 'con-003',
    occurredAt: '2026-09-05T08:41:00',
    note: 'Payment recorded successfully for bulk grain order.',
    referenceCode: 'FRE-03-PAY-003'
  },
  {
    id: 'led-004',
    hubId: 'hub-004',
    entityType: 'Order',
    entityId: 'ord-1004',
    actionType: 'Completed',
    actorRole: 'System',
    actorId: 'system',
    occurredAt: '2026-09-04T09:05:00',
    note: 'Pickup completion logged after QR verification.',
    referenceCode: 'FBH-04-ORD-1004'
  }
]

export function getAll(): LedgerEntryData[] {
  return ledgerEntryDataList
}

export function getById(id: string): LedgerEntryData | undefined {
  return ledgerEntryDataList.find((item) => item.id === id)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<LedgerEntryFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): LedgerEntryData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  return ledgerEntryDataList
    .filter((item) => {
      const matchKeyword =
        keyword.length === 0 ||
        item.note.toLowerCase().includes(keyword) ||
        item.referenceCode.toLowerCase().includes(keyword) ||
        item.entityId.toLowerCase().includes(keyword)
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
      if (!sortKey) return b.occurredAt.localeCompare(a.occurredAt) * direction
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      return av > bv ? direction : -direction
    })
}

export function loadPersisted(): LedgerEntryData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('ledgerEntryDataList')
  if (!raw) return null
  return JSON.parse(raw) as LedgerEntryData[]
}

export function savePersisted(items: LedgerEntryData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('ledgerEntryDataList', JSON.stringify(items))
}

export const LedgerEntryService = {
  getAll,
  getById,
  query,
  loadPersisted,
  savePersisted
}
