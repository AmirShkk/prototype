
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
import { ConsumerService } from '@/data/ConsumerService'
import { OrderService } from '@/data/OrderService'
import type { PickupVerificationData } from '@/data/PickupVerificationData'

interface OutgoingPickupsProps {
  pickups: PickupVerificationData[]
  hubId: string
  onVerificationChange: (pickupId: string, newStatus: string) => void
}

export default function OutgoingPickups({
  pickups,
  hubId,
  onVerificationChange,
}: OutgoingPickupsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredPickups = pickups.filter((p) => p.hubId === hubId)

  if (!filteredPickups || filteredPickups.length === 0) {
    return (
      <EmptyState
        iconName="Users"
        title="No Pending Pickups"
        description="All consumer pickups are up to date. Great work!"
      />
    )
  }

  const statusOptions = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Verified', label: 'Verified' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Rejected', label: 'Rejected' },
  ]

  return (
    <div className="surface-raised border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="w-24 whitespace-nowrap">Pickup ID</TableHead>
              <TableHead className="w-32 whitespace-nowrap">Consumer</TableHead>
              <TableHead className="w-28 whitespace-nowrap">Order ID</TableHead>
              <TableHead className="w-24 whitespace-nowrap">Verification</TableHead>
              <TableHead className="w-28 whitespace-nowrap">Status</TableHead>
              <TableHead className="w-32 whitespace-nowrap">Verified At</TableHead>
              <TableHead className="w-20 whitespace-nowrap text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPickups.map((pickup) => {
              const consumer = ConsumerService.getById(pickup.consumerId)
              const order = OrderService.getById(pickup.orderId)
              const isExpanded = expandedId === pickup.id

              return (
                <React.Fragment key={pickup.id}>
                  <TableRow className="table-row-hover">
                    <TableCell className="font-mono text-sm">{pickup.id}</TableCell>
                    <TableCell className="truncate">{consumer?.name || 'Unknown'}</TableCell>
                    <TableCell className="font-mono text-sm">{pickup.orderId}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {pickup.verificationMode}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <StatusBadge
                        status={
                          pickup.status === 'Pending'
                            ? 'pending'
                            : pickup.status === 'Verified'
                              ? 'packed'
                              : pickup.status === 'Completed'
                                ? 'completed'
                                : 'cancelled'
                        }
                        size="sm"
                      />
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {pickup.verifiedAt
                        ? new Date(pickup.verifiedAt).toLocaleDateString()
                        : '—'}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedId(isExpanded ? null : pickup.id)}
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
                      <TableCell colSpan={7} className="p-4">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                Consumer Details
                              </p>
                              <p className="text-sm font-medium">{consumer?.name}</p>
                              <p className="text-xs text-muted-foreground">{consumer?.city}</p>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                {pickup.verificationMode === 'OTP' ? 'OTP' : 'QR Token'}
                              </p>
                              <p className="text-sm font-mono">
                                {pickup.verificationMode === 'OTP'
                                  ? pickup.otpMasked
                                  : pickup.qrTokenMasked}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                Verified By
                              </p>
                              <p className="text-sm">{pickup.verifiedBy || '—'}</p>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                Update Status
                              </p>
                              <Select
                                value={pickup.status}
                                onValueChange={(val) => onVerificationChange(pickup.id, val)}
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
