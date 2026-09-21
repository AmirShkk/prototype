
export interface ProductData {
  id: string
  farmerId: string
  categoryId: string
  name: string
  description: string
  unit: string
  pricePerUnit: number
  stockQty: number
  status: 'Available' | 'Out of Stock' | 'Low Stock'
  harvestDate: string
  createdAt: string
  updatedAt: string
  imageUrl: string
  organicCertified: boolean
  minOrderQty: number
}
