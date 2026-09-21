
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'

interface QuickActionPanelProps {
  onReceiveDelivery: () => void
  onConsumerPickup: () => void
  onTrackRecord: () => void
}

export default function QuickActionPanel({
  onReceiveDelivery,
  onConsumerPickup,
  onTrackRecord,
}: QuickActionPanelProps) {
  return (
    <Card className="surface-raised border-primary/20 bg-primary/5">
      <CardContent className="card-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            onClick={onReceiveDelivery}
            className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <SafeIcon name="Package" size={24} />
            <span>Receive Delivery</span>
          </Button>

          <Button
            onClick={onConsumerPickup}
            className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <SafeIcon name="Users" size={24} />
            <span>Consumer Pickup</span>
          </Button>

          <Button
            onClick={onTrackRecord}
            variant="outline"
            className="h-auto py-4 flex flex-col items-center justify-center gap-2 border-2 border-accent text-accent hover:bg-accent/10 font-semibold transition-all"
          >
            <SafeIcon name="FileText" size={24} />
            <span>Track Record</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
