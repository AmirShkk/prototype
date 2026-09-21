
export interface LedgerEntryData {
  id: string
  hubId: string
  entityType: 'Delivery' | 'Pickup' | 'Payment' | 'Order'
  entityId: string
  actionType: 'Created' | 'Updated' | 'Received' | 'Dispatched' | 'Verified' | 'Completed'
  actorRole: 'Farmer' | 'Hub' | 'Consumer' | 'System'
  actorId: string
  occurredAt: string
  note: string
  referenceCode: string
}
