
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SafeIcon from '@/components/common/SafeIcon';
import { StatusBadge } from '@/components/common/StatusBadge';
import type { FarmerData } from '@/data/FarmerData';
import type { HubData } from '@/data/HubData';

interface OrderDetailCardProps {
  orderNumber: string;
  totalAmount: number;
  status: string;
  pickupCode: string;
  farmer?: FarmerData;
  hub?: HubData;
}

export default function OrderDetailCard({
  orderNumber,
  totalAmount,
  status,
  pickupCode,
  farmer,
  hub,
}: OrderDetailCardProps) {
  const statusMap: Record<string, 'pending' | 'packed' | 'dispatched' | 'received' | 'completed' | 'cancelled'> = {
    'Pending': 'pending',
    'Packed': 'packed',
    'Dispatched': 'dispatched',
    'Arrived at Hub': 'received',
    'Completed': 'completed',
    'Cancelled': 'cancelled',
  };

  const displayStatus = statusMap[status] || 'pending';

  return (
    <Card className="surface-raised">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-base">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="card-padding space-y-4">
        {/* Order Number */}
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Order Number
          </p>
          <p className="text-lg font-bold text-foreground font-mono">
            {orderNumber}
          </p>
        </div>

        {/* Status */}
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Status
          </p>
          <StatusBadge status={displayStatus} size="md" />
        </div>

        {/* Pickup Code */}
        <div className="space-y-1 p-3 bg-muted/30 rounded-lg border border-border">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Pickup Code
          </p>
          <p className="text-2xl font-bold text-primary font-mono tracking-widest">
            {pickupCode}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Show this code at the hub desk
          </p>
        </div>

        {/* Total Amount */}
        <div className="space-y-1 pt-2 border-t border-border">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Total Amount
          </p>
          <p className="text-3xl font-bold text-primary">
            ₹{totalAmount}
          </p>
        </div>

        {/* Farmer Info */}
        {farmer && (
          <div className="space-y-2 pt-2 border-t border-border">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
              <SafeIcon name="Sprout" size={12} />
              From Farmer
            </p>
            <div className="flex items-center gap-2">
              <img
                src={farmer.avatarUrl}
                alt={farmer.name}
                className="w-8 h-8 rounded-full object-cover border border-border"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {farmer.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {farmer.village}, {farmer.region}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Hub Info */}
        {hub && (
          <div className="space-y-2 pt-2 border-t border-border">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
              <SafeIcon name="Warehouse" size={12} />
              Pickup Hub
            </p>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">{hub.name}</p>
              <p className="text-xs text-muted-foreground">{hub.code}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
