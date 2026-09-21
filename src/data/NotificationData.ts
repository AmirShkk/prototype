
export interface NotificationData {
  id: string
  recipientRole: 'Farmer' | 'Hub' | 'Consumer'
  recipientId: string
  type: 'Order' | 'Delivery' | 'Payment' | 'Pickup' | 'Alert'
  title: string
  message: string
  relatedEntityType: string
  relatedEntityId: string
  isRead: boolean
  createdAt: string
  priority: 'Low' | 'Medium' | 'High'
  iconName: string
}
