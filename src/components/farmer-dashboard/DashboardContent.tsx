
import React, { useEffect,useState,useMemo } from 'react'
import { toast } from 'sonner'
import * as FarmerService from '@/data/FarmerService'
import * as ProductService from '@/data/ProductService'
import * as OrderService from '@/data/OrderService'
import * as NotificationService from '@/data/NotificationService'
import StatsOverview from './StatsOverview'
import QuickActions from './QuickActions'
import RecentOrders from './RecentOrders'
import DemandAlerts from './DemandAlerts'

interface DashboardContentProps {
  farmerId: string
}

export default function DashboardContent({ farmerId }: DashboardContentProps) {
  const [isClient, setIsClient] = useState(true)

  const farmer = useState(() => FarmerService.getById(farmerId) || FarmerService.getAll()[0])
  const products = useState(() => ProductService.getByFarmerId(farmerId))
  const orders = useState(() => OrderService.getByFarmerId(farmerId))
  const notifications = useState(() => NotificationService.getByRecipient('Farmer', farmerId))

  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    setIsClient(false)
    requestAnimationFrame(() => {
      setIsClient(true)
    })
  }, [])

  useEffect(() => {
    const unread = (notifications[0] || []).filter((n) => !n.isRead).length
    setUnreadCount(unread)
  }, [notifications])

  const [farmerData] = farmer
  const [productList] = products
  const [orderList] = orders
  const [notificationList] = notifications

  const stats = useMemo(() => {
    const totalProducts = productList.length
    const outOfStock = productList.filter((p) => p.status === 'Out of Stock').length
    const lowStock = productList.filter((p) => p.status === 'Low Stock').length
    const totalRevenue = orderList
      .filter((o) => o.paymentStatus === 'Paid')
      .reduce((sum, o) => sum + o.totalAmount, 0)
    const pendingOrders = orderList.filter((o) => o.status === 'Pending' || o.status === 'Packed').length
    const completedOrders = orderList.filter((o) => o.status === 'Completed').length

    return {
      totalProducts,
      outOfStock,
      lowStock,
      totalRevenue,
      pendingOrders,
      completedOrders,
    }
  }, [productList, orderList])

  const highDemandProducts = useMemo(() => {
    return productList
      .filter((p) => p.status === 'Low Stock' || p.stockQty < 10)
      .sort((a, b) => a.stockQty - b.stockQty)
      .slice(0, 3)
  }, [productList])

  const recentOrders = useMemo(() => {
    return orderList
      .sort((a, b) => new Date(b.placedAt).getTime() - new Date(a.placedAt).getTime())
      .slice(0, 5)
  }, [orderList])

  if (!farmerData || !isClient) {
    return null
  }

  return (
    <div className="page-body space-y-8">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-page-title">Welcome back, {farmerData.name}!</h1>
        <p className="text-caption">
          Manage your products, track orders, and monitor demand in real-time.
        </p>
      </div>

      {/* Stats Overview */}
      <StatsOverview stats={stats} />

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Orders Section */}
      <RecentOrders orders={recentOrders} />

      {/* High-Demand Alerts */}
      <DemandAlerts products={highDemandProducts} />
    </div>
  )
}
