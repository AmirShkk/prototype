
import React, { useState, useEffect, useMemo } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import { toast } from 'sonner'
import { HubService } from '@/data/HubService'
import { DeliveryService } from '@/data/DeliveryService'
import { PickupVerificationService } from '@/data/PickupVerificationService'
import type { HubData } from '@/data/HubData'
import type { DeliveryData } from '@/data/DeliveryData'
import type { PickupVerificationData } from '@/data/PickupVerificationData'
import LogisticsOverview from './LogisticsOverview'
import IncomingDeliveries from './IncomingDeliveries'
import OutgoingPickups from './OutgoingPickups'
import QuickActionPanel from './QuickActionPanel'

export default function HubLogisticsContent() {
  const [hub, setHub] = useState<HubData | null>(() => {
    const defaultHub = HubService.getById('hub-001')
    return defaultHub || null
  })

  const [deliveries, setDeliveries] = useState<DeliveryData[]>(() => {
    return hub ? DeliveryService.getByHubId(hub.id) : []
  })

  const [pickups, setPickups] = useState<PickupVerificationData[]>(() => {
    return PickupVerificationService.query({})
  })

  const [activeTab, setActiveTab] = useState<'incoming' | 'outgoing'>('incoming')
  const [isClient, setIsClient] = useState(true)

  useEffect(() => {
    setIsClient(false)
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search)
      const hubId = params.get('hubId') || 'hub-001'
      const view = (params.get('view') as 'incoming' | 'outgoing') || 'incoming'

      const fetchedHub = HubService.getById(hubId)
      if (fetchedHub) {
        setHub(fetchedHub)
        setDeliveries(DeliveryService.getByHubId(fetchedHub.id))
      }

      setActiveTab(view)
      setIsClient(true)
    })
  }, [])

  const incomingCount = useMemo(() => {
    return deliveries.filter(d => d.status === 'Prepared' || d.status === 'In Transit').length
  }, [deliveries])

  const outgoingCount = useMemo(() => {
    return pickups.filter(p => p.status === 'Pending' || p.status === 'Verified').length
  }, [pickups])

  const handleExitHub = () => {
    if (hub) {
      window.location.href = `./hub-dashboard.html?hubId=${hub.id}`
    }
  }

  const handleReceiveDelivery = () => {
    if (hub) {
      window.location.href = `./hub-receiving-log.html?hubId=${hub.id}`
    }
  }

  const handleConsumerPickup = () => {
    if (hub) {
      window.location.href = `./hub-pickup-verification.html?hubId=${hub.id}`
    }
  }

  const handleTrackRecord = () => {
    if (hub) {
      window.location.href = `./hub-ledger.html?hubId=${hub.id}`
    }
  }

  if (!hub || !isClient) {
    return (
      <div className="page-body flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <SafeIcon name="Loader2" size={40} className="animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading hub logistics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-body space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-page-title mb-2">{hub.name}</h1>
          <p className="text-caption">
            <span className="font-medium text-foreground">{hub.code}</span> • {hub.city}, {hub.region}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={handleExitHub}
          className="w-full md:w-auto"
        >
          <SafeIcon name="LogOut" size={16} className="mr-2" />
          Exit Hub
        </Button>
      </div>

      {/* Quick Action Panel */}
      <QuickActionPanel
        onReceiveDelivery={handleReceiveDelivery}
        onConsumerPickup={handleConsumerPickup}
        onTrackRecord={handleTrackRecord}
      />

      {/* Overview Stats */}
      <LogisticsOverview
        incomingCount={incomingCount}
        outgoingCount={outgoingCount}
        hubId={hub.id}
      />

      {/* Logistics Tabs */}
      <Tabs value={activeTab} onValueChange={(val:string) => setActiveTab(val as 'incoming' | 'outgoing')} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="incoming" className="flex items-center gap-2">
            <SafeIcon name="TrendingDown" size={16} />
            <span>Incoming Deliveries</span>
            {incomingCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                {incomingCount}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="outgoing" className="flex items-center gap-2">
            <SafeIcon name="TrendingUp" size={16} />
            <span>Outgoing Pickups</span>
            {outgoingCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                {outgoingCount}
              </span>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="incoming" className="space-y-4">
          <IncomingDeliveries
            deliveries={deliveries}
            hubId={hub.id}
            onStatusChange={(deliveryId, newStatus) => {
              const updated = deliveries.map(d =>
                d.id === deliveryId ? { ...d, status: newStatus as any } : d
              )
              setDeliveries(updated)
              DeliveryService.savePersisted(updated)
              toast.success('Delivery status updated')
            }}
          />
        </TabsContent>

        <TabsContent value="outgoing" className="space-y-4">
          <OutgoingPickups
            pickups={pickups}
            hubId={hub.id}
            onVerificationChange={(pickupId, newStatus) => {
              const updated = pickups.map(p =>
                p.id === pickupId ? { ...p, status: newStatus as any } : p
              )
              setPickups(updated)
              PickupVerificationService.savePersisted(updated)
              toast.success('Pickup status updated')
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
