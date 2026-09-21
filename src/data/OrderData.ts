
export interface OrderData {
  id: string
  consumerId: string
  farmerId: string
  hubId: string
  orderNumber: string
  status: 'Pending' | 'Packed' | 'Dispatched' | 'Arrived at Hub' | 'Completed' | 'Cancelled'
  paymentStatus: 'Pending' | 'Paid' | 'Failed' | 'Refunded'
  totalAmount: number
  subtotalAmount: number
  platformFee: number
  deliveryFee: number
  quantityTotal: number
  placedAt: string
  paidAt: string
  packedAt: string
  dispatchedAt: string
  receivedAt: string
  completedAt: string
  pickupCode: string
  fulfillmentNote: string
}
