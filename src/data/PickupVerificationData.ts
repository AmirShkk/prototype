
export interface PickupVerificationData {
  id: string
  orderId: string
  hubId: string
  consumerId: string
  status: 'Pending' | 'Verified' | 'Completed' | 'Rejected'
  verificationMode: 'OTP' | 'QR'
  otpMasked: string
  qrTokenMasked: string
  verifiedAt: string
  verifiedBy: string
}
