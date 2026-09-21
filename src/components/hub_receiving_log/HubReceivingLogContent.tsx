
import { useState, useEffect, useMemo } from 'react'
import { toast } from 'sonner'
import { DeliveryService } from '@/data/DeliveryService'
import { OrderService } from '@/data/OrderService'
import { FarmerService } from '@/data/FarmerService'
import { HubService } from '@/data/HubService'
import type { DeliveryData } from '@/data/DeliveryData'
import ReceivingLogHeader from './ReceivingLogHeader'
import DeliveryListItem from './DeliveryListItem'
import DeliveryReceiptForm from './DeliveryReceiptForm'
import EmptyState from '@/components/common/EmptyState'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SearchBar from '@/components/common/SearchBar'

interface DeliveryWithDetails extends DeliveryData {
  farmerName: string
  orderNumber: string
}

export default function HubReceivingLogContent() {
  const [isClient, setIsClient] = useState(true)
  const [hubId, setHubId] = useState('hub-001')
  const [deliveries, setDeliveries] = useState<DeliveryData[]>(() => {
    return DeliveryService.getByHubId('hub-001')
  })
  const [selectedDeliveryId, setSelectedDeliveryId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'Prepared' | 'In Transit' | 'Received at Hub'>('all')

  useEffect(() => {
    setIsClient(false)
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search)
      const paramHubId = params.get('hubId')
      const paramDeliveryId = params.get('deliveryId')

      if (paramHubId) {
        setHubId(paramHubId)
        const hubDeliveries = DeliveryService.getByHubId(paramHubId)
        setDeliveries(hubDeliveries)
        if (paramDeliveryId && hubDeliveries.some(d => d.id === paramDeliveryId)) {
          setSelectedDeliveryId(paramDeliveryId)
        }
      }
      setIsClient(true)
    })
  }, [])

  const enrichedDeliveries = useMemo(() => {
    return deliveries.map(delivery => ({
      ...delivery,
      farmerName: FarmerService.getById(delivery.farmerId)?.name || 'Unknown Farmer',
      orderNumber: OrderService.getById(delivery.orderId)?.orderNumber || 'N/A'
    }))
  }, [deliveries])

  const filteredDeliveries = useMemo(() => {
    return enrichedDeliveries.filter(delivery => {
      const matchesSearch = searchQuery.length === 0 ||
        delivery.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        delivery.vehicleLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        delivery.farmerName.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesStatus = statusFilter === 'all' || delivery.status === statusFilter
      
      return matchesSearch && matchesStatus
    })
  }, [enrichedDeliveries, searchQuery, statusFilter])

  const selectedDelivery = selectedDeliveryId 
    ? enrichedDeliveries.find(d => d.id === selectedDeliveryId) 
    : null

  const handleDeliverySelect = (deliveryId: string) => {
    setSelectedDeliveryId(deliveryId)
  }

  const handleMarkAsReceived = (deliveryId: string, authMethod: string, authReference: string) => {
    const updatedDeliveries = deliveries.map(d => {
      if (d.id === deliveryId) {
        return {
          ...d,
          status: 'Received at Hub' as const,
          receivedAt: new Date().toISOString(),
          authMethod: authMethod as 'QR' | 'OTP' | 'Manual Check',
          authReference
        }
      }
      return d
    })
    setDeliveries(updatedDeliveries)
    DeliveryService.savePersisted(updatedDeliveries)
    toast.success(`Delivery ${deliveryId} marked as received at hub`)
    setSelectedDeliveryId(null)
  }

  const hub = HubService.getById(hubId)

  return (
    <div className="page-body flex flex-col gap-6 h-full overflow-y-auto min-h-0">
      <ReceivingLogHeader hubName={hub?.name || 'Hub'} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
        {/* Left: Delivery List */}
        <div className="lg:col-span-2 flex flex-col gap-4 min-h-0">
          <Card className="surface-base flex-1 flex flex-col min-h-0 overflow-hidden">
            <div className="card-padding border-b border-border space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-section-title">Incoming Deliveries</h3>
                <span className="text-caption bg-muted px-2 py-1 rounded-full">
                  {filteredDeliveries.length} pending
                </span>
              </div>

              <SearchBar
                placeholder="Search by delivery ID, vehicle, or farmer..."
                onSearch={setSearchQuery}
              />

              <Tabs value={statusFilter} onValueChange={(val:string) => setStatusFilter(val as any)} className="w-full">
                <TabsList className="grid w-full grid-cols-4 h-8 bg-muted/30 p-0.5">
                  <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
                  <TabsTrigger value="Prepared" className="text-xs">Prepared</TabsTrigger>
                  <TabsTrigger value="In Transit" className="text-xs">In Transit</TabsTrigger>
                  <TabsTrigger value="Received at Hub" className="text-xs">Received</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex-1 overflow-y-auto min-h-0">
              {filteredDeliveries.length === 0 ? (
                <div className="p-6">
                  <EmptyState
                    iconName="Package"
                    title="No Deliveries Found"
                    description={searchQuery ? "No deliveries match your search. Try adjusting your filters." : "No incoming deliveries at this time."}
                  />
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {filteredDeliveries.map(delivery => (
                    <DeliveryListItem
                      key={delivery.id}
                      delivery={delivery}
                      isSelected={selectedDeliveryId === delivery.id}
                      onSelect={handleDeliverySelect}
                    />
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Right: Receipt Form */}
        <div className="lg:col-span-1 flex flex-col min-h-0">
          {selectedDelivery ? (
            <DeliveryReceiptForm
              delivery={selectedDelivery}
              onSubmit={(authMethod, authReference) => {
                handleMarkAsReceived(selectedDelivery.id, authMethod, authReference)
              }}
              onCancel={() => setSelectedDeliveryId(null)}
            />
          ) : (
            <Card className="surface-base flex items-center justify-center p-8 text-center">
              <div className="space-y-3">
                <p className="text-caption">Select a delivery from the list to begin receipt verification.</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
