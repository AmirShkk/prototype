
import React from 'react'
import StatsCard from '@/components/common/StatsCard'
import { DeliveryService } from '@/data/DeliveryService'
import { PickupVerificationService } from '@/data/PickupVerificationService'

interface LogisticsOverviewProps {
  incomingCount: number
  outgoingCount: number
  hubId: string
}

export default function LogisticsOverview({
  incomingCount,
  outgoingCount,
  hubId,
}: LogisticsOverviewProps) {
  const allDeliveries = DeliveryService.getByHubId(hubId)
  const allPickups = PickupVerificationService.query({ filter: { hubId } })

  const receivedCount = allDeliveries.filter(d => d.status === 'Received at Hub').length
  const completedPickups = allPickups.filter(p => p.status === 'Completed').length

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="Pending Deliveries"
        value={incomingCount}
        iconName="Package"
        variant="primary"
      />
      <StatsCard
        title="Received Today"
        value={receivedCount}
        iconName="CheckCircle2"
        variant="secondary"
      />
      <StatsCard
        title="Pending Pickups"
        value={outgoingCount}
        iconName="Users"
        variant="accent"
      />
      <StatsCard
        title="Completed Pickups"
        value={completedPickups}
        iconName="TrendingUp"
        variant="muted"
      />
    </div>
  )
}
