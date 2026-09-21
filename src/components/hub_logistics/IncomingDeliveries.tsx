
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import { StatusBadge } from '@/components/common/StatusBadge'
import EmptyState from '@/components/common/EmptyState'
import { FarmerService } from '@/data/FarmerService'
import { OrderService } from '@/data/OrderService'
import type { DeliveryData } from '@/data/DeliveryData'

interface IncomingDeliveriesProps {
  deliveries: DeliveryData[]
  hubId: string
  onStatusChange: (deliveryId: string, newStatus: string) => void
}

export default function IncomingDeliveries({
  deliveries,
  hubId,
  onStatusChange,
}: IncomingDeliveriesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  if (!deliveries || deliveries.length === 0) {
    return (
      <EmptyState
        iconName="Package"
        title="No Incoming Deliveries"
        description="There are currently no deliveries scheduled for this hub. Check back soon!"
      />
    )
  }

  const statusOptions = [
    { value: 'Prepared', label: 'Prepared' },
    { value: 'In Transit', label: 'In Transit' },
    { value: 'Received at Hub', label: 'Received at Hub' },
    { value: 'Rejected', label: 'Rejected' },
  ]

  return (
    <div className="surface-raised border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="w-24 whitespace-nowrap">Delivery ID</TableHead>
              <TableHead className="w-32 whitespace-nowrap">Farmer</TableHead>
              <TableHead className="w-28 whitespace-nowrap">Order ID</TableHead>
              <TableHead className="w-32 whitespace-nowrap">Vehicle</TableHead>
              <TableHead className="w-24 whitespace-nowrap">Auth Method</TableHead>
              <TableHead className="w-28 whitespace-nowrap">Status</TableHead>
              <TableHead className="w-32 whitespace-nowrap">Dispatched</TableHead>
              <TableHead className="w-20 whitespace-nowrap text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliveries.map((delivery) => {
              const farmer = FarmerService.getById(delivery.farmerId)
              const order = OrderService.getById(delivery.orderId)
              const isExpanded = expandedId === delivery.id

              return (
                <React.Fragment key={delivery.id}>
                  <TableRow className="table-row-hover">
                    <TableCell className="font-mono text-sm">{delivery.id}</TableCell>
                    <TableCell className="truncate">{farmer?.name || 'Unknown'}</TableCell>
                    <TableCell className="font-mono text-sm">{delivery.orderId}</TableCell>
                    <TableCell className="text-sm">{delivery.vehicleLabel}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {delivery.authMethod}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <StatusBadge
                        status={
                          delivery.status === 'Prepared'
                            ? 'pending'
                            : delivery.status === 'In Transit'
                              ? 'dispatched'
                              : delivery.status === 'Received at Hub'
                                ? 'received'
                                : 'cancelled'
                        }
                        size="sm"
                      />
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {delivery.dispatchedAt
                        ? new Date(delivery.dispatchedAt).toLocaleDateString()
                        : '—'}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedId(isExpanded ? null : delivery.id)}
                        className="h-8 w-8 p-0"
                      >
                        <SafeIcon
                          name={isExpanded ? 'ChevronUp' : 'ChevronDown'}
                          size={16}
                        />
                      </Button>
                    </TableCell>
                  </TableRow>

                  {isExpanded && (
                    <TableRow className="bg-muted/30 hover:bg-muted/30">
                      <TableCell colSpan={8} className="p-4">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                Farmer Details
                              </p>
                              <p className="text-sm font-medium">{farmer?.name}</p>
                              <p className="text-xs text-muted-foreground">{farmer?.village}</p>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                Auth Reference
                              </p>
                              <p className="text-sm font-mono">{delivery.authReference}</p>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                Handled By
                              </p>
                              <p className="text-sm">{delivery.handledBy}</p>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                Update Status
                              </p>
                              <Select
                                value={delivery.status}
                                onValueChange={(val) => onStatusChange(delivery.id, val)}
                              >
                                <SelectTrigger className="h-8 text-sm">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {statusOptions.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
