
export interface DeliveryData {
  id: string
  orderId: string
  farmerId: string
  hubId: string
  status: 'Prepared' | 'In Transit' | 'Received at Hub' | 'Rejected'
  dispatchedAt: string
  receivedAt: string
  authMethod: 'QR' | 'OTP' | 'Manual Check'
  authReference: string
  vehicleLabel: string
  handledBy: string
}
