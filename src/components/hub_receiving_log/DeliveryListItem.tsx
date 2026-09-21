
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/common/StatusBadge'
import SafeIcon from '@/components/common/SafeIcon'
import { cn } from '@/lib/utils'
import type { DeliveryData } from '@/data/DeliveryData'

interface DeliveryListItemProps {
  delivery: DeliveryData & { farmerName: string; orderNumber: string }
  isSelected: boolean
  onSelect: (deliveryId: string) => void
}

export default function DeliveryListItem({
  delivery,
  isSelected,
  onSelect
}: DeliveryListItemProps) {
  const handleClick = () => {
    onSelect(delivery.id)
  }

  const statusMap: Record<string, 'pending' | 'packed' | 'dispatched' | 'received' | 'cancelled'> = {
    'Prepared': 'pending',
    'In Transit': 'dispatched',
    'Received at Hub': 'received',
    'Rejected': 'cancelled'
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "p-4 cursor-pointer transition-all duration-200 hover:bg-muted/50 border-l-4",
        isSelected ? "bg-primary/5 border-primary" : "border-transparent"
      )}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-foreground truncate">{delivery.id}</span>
              <StatusBadge status={statusMap[delivery.status] || 'pending'} size="sm" />
            </div>
            <p className="text-caption truncate">{delivery.vehicleLabel}</p>
          </div>
          <SafeIcon name="ChevronRight" size={18} className="text-muted-foreground shrink-0 mt-1" />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-muted-foreground">Farmer</p>
            <p className="font-medium truncate">{delivery.farmerName}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Order</p>
            <p className="font-medium truncate">{delivery.orderNumber}</p>
          </div>
        </div>

        {delivery.dispatchedAt && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <SafeIcon name="Clock" size={14} />
            <span>Dispatched: {new Date(delivery.dispatchedAt).toLocaleString()}</span>
          </div>
        )}
      </div>
    </div>
  )
}
