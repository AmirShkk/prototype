
import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SafeIcon from '@/components/common/SafeIcon';
import { toast } from 'sonner';
import * as OrderService from '@/data/OrderService';
import * as OrderItemService from '@/data/OrderItemService';
import OrderStatusTimeline from './OrderStatusTimeline';
import OrderDetailCard from './OrderDetailCard';
import LiveTrackingMap from './LiveTrackingMap';
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface OrderTrackingContentProps {
  currentPath: string;
}

export default function OrderTrackingContent({ currentPath }: OrderTrackingContentProps) {
  const [isClient, setIsClient] = useState(true);
  const [orderId, setOrderId] = useState<string>('');
  const [order, setOrder] = useState(() => {
    const allOrders = OrderService.getAll();
    return allOrders.length > 0 ? allOrders[0] : null;
  });
  const [orderVO, setOrderVO] = useState(() => {
    const allOrders = OrderService.getAll();
    const defaultOrder = allOrders.length > 0 ? allOrders[0] : null;
    return defaultOrder ? OrderService.getByIdVO(defaultOrder.id) : null;
  });
  const [orderItems, setOrderItems] = useState(() => {
    const allOrders = OrderService.getAll();
    const defaultOrder = allOrders.length > 0 ? allOrders[0] : null;
    return defaultOrder ? OrderItemService.getByOrderId(defaultOrder.id) : [];
  });

  useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const paramOrderId = params.get('orderId');

    if (paramOrderId) {
      const fetchedOrder = OrderService.getById(paramOrderId);
      if (fetchedOrder) {
        setOrderId(paramOrderId);
        setOrder(fetchedOrder);
        const vo = OrderService.getByIdVO(paramOrderId);
        setOrderVO(vo || null);
        const items = OrderItemService.getByOrderId(paramOrderId);
        setOrderItems(items);
      } else {
        const allOrders = OrderService.getAll();
        if (allOrders.length > 0) {
          const fallbackOrder = allOrders[0];
          setOrderId(fallbackOrder.id);
          setOrder(fallbackOrder);
          const vo = OrderService.getByIdVO(fallbackOrder.id);
          setOrderVO(vo || null);
          const items = OrderItemService.getByOrderId(fallbackOrder.id);
          setOrderItems(items);
        }
      }
    }

    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);

  const timelineStages = useMemo(() => {
    if (!order) return [];

    const stages = [
      {
        id: 'ordered',
        label: 'Order Placed',
        status: order.status !== 'Pending' ? ('completed' as const) : ('active' as const),
        timestamp: order.placedAt
          ? new Date(order.placedAt).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : '',
      },
      {
        id: 'at-farm',
        label: 'At Farm',
        status:
          order.status === 'Packed' || order.status === 'Dispatched' || order.status === 'Arrived at Hub' || order.status === 'Completed'
            ? ('completed' as const)
            : order.status === 'Pending'
              ? ('pending' as const)
              : ('active' as const),
        timestamp: order.packedAt
          ? new Date(order.packedAt).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : '',
      },
      {
        id: 'dispatched',
        label: 'Dispatched',
        status:
          order.status === 'Dispatched' || order.status === 'Arrived at Hub' || order.status === 'Completed'
            ? order.status === 'Dispatched'
              ? ('active' as const)
              : ('completed' as const)
            : ('pending' as const),
        timestamp: order.dispatchedAt
          ? new Date(order.dispatchedAt).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : '',
      },
      {
        id: 'arrived-hub',
        label: 'Arrived at Hub',
        status:
          order.status === 'Arrived at Hub' || order.status === 'Completed'
            ? order.status === 'Arrived at Hub'
              ? ('active' as const)
              : ('completed' as const)
            : ('pending' as const),
        timestamp: order.receivedAt
          ? new Date(order.receivedAt).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : '',
      },
      {
        id: 'completed',
        label: 'Picked Up',
        status: order.status === 'Completed' ? ('completed' as const) : ('pending' as const),
        timestamp: order.completedAt
          ? new Date(order.completedAt).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : '',
      },
    ];

    return stages;
  }, [order]);

  const handleContinueShopping = () => {
    window.location.href = './consumer-marketplace.html';
  };

  if (!order || !orderVO) {
    return (
      <div className="page-body flex items-center justify-center min-h-[60vh]">
        <LoadingSpinner size="lg" text="Loading order details..." />
      </div>
    );
  }

  return (
    <div className="page-body space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-page-title mb-2">Order Tracking</h1>
          <p className="text-caption">
            Track your order from farm to hub pickup in real-time
          </p>
        </div>
        <Button
          onClick={handleContinueShopping}
          variant="outline"
          className="w-full md:w-auto"
        >
          <SafeIcon name="ArrowLeft" size={16} className="mr-2" />
          Continue Shopping
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Timeline & Map */}
        <div className="lg:col-span-2 space-y-6">
          {/* Timeline Card */}
          <Card className="surface-raised">
            <CardHeader className="border-b border-border">
              <CardTitle className="flex items-center gap-2">
                <SafeIcon name="MapPin" size={20} className="text-primary" />
                Delivery Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="card-padding">
              {(isClient || !isClient) && (
                <OrderStatusTimeline stages={timelineStages} />
              )}
            </CardContent>
          </Card>

          {/* Live Tracking Map */}
          {(isClient || !isClient) && (
            <LiveTrackingMap
              orderStatus={order.status}
              hubName={orderVO.hub?.name || 'Hub'}
              hubAddress={orderVO.hub?.address || ''}
              isClient={isClient}
            />
          )}
        </div>

        {/* Sidebar - Order Details */}
        <div className="space-y-6">
          {/* Order Summary Card */}
          <OrderDetailCard
            orderNumber={order.orderNumber}
            totalAmount={order.totalAmount}
            status={order.status}
            pickupCode={order.pickupCode}
            farmer={orderVO.farmer}
            hub={orderVO.hub}
          />

          {/* Order Items Card */}
          <Card className="surface-raised">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-base flex items-center gap-2">
                <SafeIcon name="ShoppingBag" size={18} className="text-secondary" />
                Items ({orderItems.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="card-padding space-y-3">
              {orderItems.length > 0 ? (
                orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between pb-3 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {item.productId}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-primary">
                      ₹{item.lineTotal}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-caption text-muted-foreground">
                  No items in this order
                </p>
              )}
            </CardContent>
          </Card>

          {/* Contact Information Card */}
          <Card className="surface-raised">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-base flex items-center gap-2">
                <SafeIcon name="Phone" size={18} className="text-accent" />
                Contact Info
              </CardTitle>
            </CardHeader>
            <CardContent className="card-padding space-y-4">
              {orderVO.farmer && (
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Farmer
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {orderVO.farmer.name}
                  </p>
                  <a
                    href={`tel:${orderVO.farmer.phone}`}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    <SafeIcon name="Phone" size={14} />
                    {orderVO.farmer.phone}
                  </a>
                </div>
              )}

              <div className="border-t border-border pt-3">
                {orderVO.hub && (
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      Hub Location
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {orderVO.hub.name}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {orderVO.hub.address}
                    </p>
                    <a
                      href={`tel:${orderVO.hub.phone}`}
                      className="text-sm text-primary hover:underline flex items-center gap-1 mt-2"
                    >
                      <SafeIcon name="Phone" size={14} />
                      {orderVO.hub.phone}
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Hours:</strong> {orderVO.hub.operatingHours}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
