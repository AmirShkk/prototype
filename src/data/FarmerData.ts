
export interface FarmerData {
  id: string
  name: string
  village: string
  region: string
  language: string
  phone: string
  avatarUrl: string
  bio: string
  rating: number
  verificationStatus: 'Verified' | 'Pending' | 'Suspended'
}
