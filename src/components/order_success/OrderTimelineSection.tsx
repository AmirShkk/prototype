
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import OrderTimeline from '@/components/common/OrderTimeline'
import SafeIcon from '@/components/common/SafeIcon'
import type { OrderVO } from '@/data/OrderService'

interface OrderTimelineSectionProps {
  order: OrderVO
}

export default function OrderTimelineSection({ order }: OrderTimelineSectionProps) {
  const getTimelineStages = () => {
    const stages = [
      {
        id: 'ordered',
        label: 'Order Placed',
        status: 'completed' as const,
        timestamp: new Date(order.placedAt).toLocaleString('en-IN', {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      },
      {
        id: 'packed',
        label: 'Being Packed',
        status: order.packedAt ? ('completed' as const) : order.status === 'Packed' ? ('active' as const) : ('pending' as const),
        timestamp: order.packedAt
          ? new Date(order.packedAt).toLocaleString('en-IN', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : undefined,
      },
      {
        id: 'dispatched',
        label: 'Dispatched to Hub',
        status: order.dispatchedAt ? ('completed' as const) : order.status === 'Dispatched' ? ('active' as const) : ('pending' as const),
        timestamp: order.dispatchedAt
          ? new Date(order.dispatchedAt).toLocaleString('en-IN', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : undefined,
      },
      {
        id: 'arrived',
        label: 'Arrived at Hub',
        status: order.receivedAt ? ('completed' as const) : order.status === 'Arrived at Hub' ? ('active' as const) : ('pending' as const),
        timestamp: order.receivedAt
          ? new Date(order.receivedAt).toLocaleString('en-IN', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : undefined,
      },
    ]

    return stages
  }

  return (
    <Card className="surface-raised border-none shadow-lg">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
        <CardTitle className="flex items-center gap-2">
          <SafeIcon name="Clock" size={20} className="text-primary" />
          Fulfillment Status
        </CardTitle>
      </CardHeader>
      
      <CardContent className="card-padding">
        <OrderTimeline stages={getTimelineStages()} />
        
        <div className="mt-6 p-4 bg-muted/30 border border-border rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Current Status:</strong> {order.status}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {order.fulfillmentNote}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
