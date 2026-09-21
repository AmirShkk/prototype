
import React from 'react'
import StatsCard from '@/components/common/StatsCard'

interface StatsOverviewProps {
  stats: {
    totalProducts: number
    outOfStock: number
    lowStock: number
    totalRevenue: number
    pendingOrders: number
    completedOrders: number
  }
}

export default function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatsCard
        title="Total Products"
        value={stats.totalProducts}
        iconName="Package"
        variant="primary"
      />
      <StatsCard
        title="Low Stock Alert"
        value={stats.lowStock}
        iconName="AlertTriangle"
        variant="accent"
        trend={{ value: stats.outOfStock, direction: 'down' }}
      />
      <StatsCard
        title="Total Revenue"
        value={`₹${stats.totalRevenue.toLocaleString()}`}
        iconName="IndianRupee"
        variant="secondary"
        trend={{ value: 12, direction: 'up' }}
      />
      <StatsCard
        title="Pending Orders"
        value={stats.pendingOrders}
        iconName="Clock"
        variant="accent"
      />
      <StatsCard
        title="Completed Orders"
        value={stats.completedOrders}
        iconName="CheckCircle2"
        variant="primary"
      />
      <StatsCard
        title="Verification Status"
        value="Verified"
        iconName="BadgeCheck"
        variant="secondary"
      />
    </div>
  )
}
