
export interface PaymentData {
  id: string
  orderId: string
  consumerId: string
  method: 'UPI' | 'Card' | 'Net Banking'
  status: 'Pending' | 'Success' | 'Failed'
  transactionRef: string
  amount: number
  paidAt: string
  providerName: string
}
