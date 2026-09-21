
import type { PaymentData } from './PaymentData'

export type PaymentFilterKey = 'orderId' | 'consumerId' | 'method' | 'status'

export const paymentDataList: PaymentData[] = [
  {
    id: 'pay-001',
    orderId: 'ord-1001',
    consumerId: 'con-001',
    method: 'UPI',
    status: 'Success',
    transactionRef: 'TXN-889101',
    amount: 238,
    paidAt: '2026-09-05T09:16:00',
    providerName: 'RazorPay Mock'
  },
  {
    id: 'pay-002',
    orderId: 'ord-1002',
    consumerId: 'con-002',
    method: 'Card',
    status: 'Success',
    transactionRef: 'TXN-889102',
    amount: 456,
    paidAt: '2026-09-04T11:21:00',
    providerName: 'RazorPay Mock'
  },
  {
    id: 'pay-003',
    orderId: 'ord-1003',
    consumerId: 'con-003',
    method: 'Net Banking',
    status: 'Success',
    transactionRef: 'TXN-889103',
    amount: 1190,
    paidAt: '2026-09-05T08:41:00',
    providerName: 'RazorPay Mock'
  },
  {
    id: 'pay-004',
    orderId: 'ord-1004',
    consumerId: 'con-004',
    method: 'UPI',
    status: 'Success',
    transactionRef: 'TXN-889104',
    amount: 274,
    paidAt: '2026-09-03T10:01:00',
    providerName: 'RazorPay Mock'
  }
]

export function getAll(): PaymentData[] {
  return paymentDataList
}

export function getById(id: string): PaymentData | undefined {
  return paymentDataList.find((item) => item.id === id)
}

export function getByOrderId(orderId: string): PaymentData[] {
  return paymentDataList.filter((item) => item.orderId === orderId)
}

export function query(params: {
  keyword?: string
  filter?: Partial<Record<PaymentFilterKey, string | string[]>>
  sortKey?: string
  sortDirection?: 'asc' | 'desc'
}): PaymentData[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const filter = params.filter ?? {}
  return paymentDataList
    .filter((item) => {
      const matchKeyword =
        keyword.length === 0 ||
        item.transactionRef.toLowerCase().includes(keyword) ||
        item.providerName.toLowerCase().includes(keyword)
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
      if (!sortKey) return b.paidAt.localeCompare(a.paidAt) * direction
      const av = (a as any)[sortKey]
      const bv = (b as any)[sortKey]
      if (av === bv) return 0
      return av > bv ? direction : -direction
    })
}

export function loadPersisted(): PaymentData[] | null {
  if (typeof window === 'undefined') return null
  const raw = window.localStorage.getItem('paymentDataList')
  if (!raw) return null
  return JSON.parse(raw) as PaymentData[]
}

export function savePersisted(items: PaymentData[]): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('paymentDataList', JSON.stringify(items))
}
