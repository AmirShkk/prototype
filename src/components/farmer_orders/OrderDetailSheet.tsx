
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { StatusBadge } from '@/components/common/StatusBadge';
import SafeIcon from '@/components/common/SafeIcon';
import OrderTimeline from '@/components/common/OrderTimeline';
import type { OrderData } from '@/data/OrderData';
import type { OrderItemData } from '@/data/OrderItemData';
import * as ProductService from '@/data/ProductService';

interface OrderDetailSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: OrderData;
  items: OrderItemData[];
}

export default function OrderDetailSheet({
  open,
  onOpenChange,
  order,
  items,
}: OrderDetailSheetProps) {
  const getStatusBadgeVariant = (status: string): 'pending' | 'packed' | 'dispatched' | 'received' | 'completed' | 'cancelled' | 'available' | 'out_of_stock' => {
    switch (status) {
      case 'Pending':
        return 'pending';
      case 'Packed':
        return 'packed';
      case 'Dispatched':
        return 'dispatched';
      case 'Arrived at Hub':
        return 'received';
      case 'Completed':
        return 'completed';
      default:
        return 'pending';
    }
  };

  const timelineStages = [
    {
      id: 'ordered',
      label: 'Ordered',
      status: 'completed' as const,
      timestamp: new Date(order.placedAt).toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 'packed',
      label: 'At Farm',
      status:
        order.status === 'Pending'
          ? ('active' as const)
          : order.status === 'Packed' || order.status === 'Dispatched' || order.status === 'Arrived at Hub' || order.status === 'Completed'
            ? ('completed' as const)
            : ('pending' as const),
      timestamp: order.packedAt
        ? new Date(order.packedAt).toLocaleDateString('en-IN', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : undefined,
    },
    {
      id: 'dispatched',
      label: 'Dispatched',
      status:
        order.status === 'Dispatched' || order.status === 'Arrived at Hub' || order.status === 'Completed'
          ? ('completed' as const)
          : order.status === 'Packed'
            ? ('active'as const)
            : ('pending' as const),
      timestamp: order.dispatchedAt
        ? new Date(order.dispatchedAt).toLocaleDateString('en-IN', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : undefined,
    },
    {
      id: 'hub',
      label: 'Arrived at Hub',
      status:
        order.status === 'Arrived at Hub' || order.status === 'Completed'
          ? ('completed' as const)
          : order.status === 'Dispatched'
            ? ('active' as const)
            : ('pending' as const),
      timestamp: order.receivedAt
        ? new Date(order.receivedAt).toLocaleDateString('en-IN', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : undefined,
    },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col max-w-2xl max-h-[80vh] overflow-y-auto">
        <SheetHeader className="flex-shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <SheetTitle className="text-2xl">Order Details</SheetTitle>
              <SheetDescription className="mt-1">{order.orderNumber}</SheetDescription>
            </div>
            <StatusBadge status={getStatusBadgeVariant(order.status)} size="md" />
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto min-h-0 space-y-6 py-4">
          {/* Order Timeline */}
          <Card className="surface-base border-none shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Fulfillment Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <OrderTimeline stages={timelineStages} />
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card className="surface-base border-none shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-caption text-muted-foreground mb-1">Order ID</p>
                  <p className="font-mono text-sm font-semibold">{order.id}</p>
                </div>
                <div>
                  <p className="text-caption text-muted-foreground mb-1">Order Number</p>
                  <p className="font-semibold">{order.orderNumber}</p>
                </div>
                <div>
                  <p className="text-caption text-muted-foreground mb-1">Placed At</p>
                  <p className="text-sm">
                    {new Date(order.placedAt).toLocaleDateString('en-IN', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-caption text-muted-foreground mb-1">Payment Status</p>
                  <Badge variant={order.paymentStatus === 'Paid' ? 'default' : 'outline'}>
                    {order.paymentStatus}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Items in Order */}
          <Card className="surface-base border-none shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Items ({items.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {items.map((item) => {
                  const product = ProductService.getById(item.productId);
                  return (
                    <div
                      key={item.id}
                      className="flex items-start justify-between p-3 bg-muted/30 rounded-lg border border-border/50"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{product?.name || 'Unknown Product'}</p>
                        <p className="text-caption text-muted-foreground mt-0.5">
                          {item.quantity} × ₹{item.unitPrice}
                        </p>
                      </div>
                      <div className="text-right ml-4 shrink-0">
                        <p className="font-semibold text-primary">₹{item.lineTotal}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Pricing Breakdown */}
          <Card className="surface-base border-none shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">₹{order.subtotalAmount}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Platform Fee</span>
                <span className="font-medium">₹{order.platformFee}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-medium">₹{order.deliveryFee}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between items-center font-semibold text-base">
                <span>Total</span>
                <span className="text-primary">₹{order.totalAmount}</span>
              </div>
            </CardContent>
          </Card>

          {/* Fulfillment Notes */}
          {order.fulfillmentNote && (
            <Card className="surface-base border-none shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Fulfillment Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground leading-relaxed">{order.fulfillmentNote}</p>
              </CardContent>
            </Card>
          )}

          {/* Pickup Code */}
          <Card className="surface-base border-none shadow-sm bg-primary/5 border-primary/20">
            <CardContent className="card-padding">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <SafeIcon name="QrCode" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-caption text-muted-foreground mb-0.5">Consumer Pickup Code</p>
                  <p className="font-mono font-bold text-lg text-primary">{order.pickupCode}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  );
}
