
import React ,{useState,useEffect,useMemo}from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import SafeIcon from '@/components/common/SafeIcon';
import FilterBar from '@/components/common/FilterBar';
import EmptyState from '@/components/common/EmptyState';
import { StatusBadge } from '@/components/common/StatusBadge';
import OrderDetailSheet from '@/components/farmer_orders/OrderDetailSheet';
import ConfirmDialog from '@/components/common/ConfirmDialog';
import { toast } from 'sonner';
import * as OrderService from '@/data/OrderService';
import * as OrderItemService from '@/data/OrderItemService';
import { cn } from '@/lib/utils';

interface OrderWithItems {
  order: typeof OrderService.orderDataList[0];
  items: typeof OrderItemService.orderItemDataList;
}

export default function FarmerOrdersContent() {
  const farmerId = 'far-001';
  
  const [orders, setOrders] = useState(() => OrderService.getByFarmerId(farmerId));
  const [isClient, setIsClient] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [selectedOrder, setSelectedOrder] = useState<OrderWithItems | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    orderId: string;
    action: 'packed' | 'dispatched';
  }>({ open: false, orderId: '', action: 'packed' });

  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const filterParam = params.get('statusFilter');
      const orderIdParam = params.get('orderId');
      
      if (filterParam) {
        setStatusFilter(filterParam);
      }
      
      if (orderIdParam) {
        const order = orders.find((o) => o.id === orderIdParam);
        if (order) {
          const items = OrderItemService.getByOrderId(order.id);
          setSelectedOrder({ order, items });
          setIsDetailOpen(true);
        }
      }
      
      setIsClient(true);
    });
  }, []);

  const filteredOrders = useMemo(() => {
    let result = orders;
    
    if (statusFilter && statusFilter !== 'all') {
      result = result.filter((o) => o.status === statusFilter);
    }
    
    return result.sort((a, b) => new Date(b.placedAt).getTime() - new Date(a.placedAt).getTime());
  }, [orders, statusFilter]);

  const handleStatusUpdate = (orderId: string, newStatus: 'Packed' | 'Dispatched') => {
    const updatedOrders = orders.map((o) =>
      o.id === orderId
        ? {
            ...o,
            status: newStatus,
            packedAt: newStatus === 'Packed' ? new Date().toISOString() : o.packedAt,
            dispatchedAt: newStatus === 'Dispatched' ? new Date().toISOString() : o.dispatchedAt,
          }
        : o
    );
    
    setOrders(updatedOrders);
    OrderService.savePersisted(updatedOrders);
    
    toast.success(`Order marked as ${newStatus}`, {
      description: `Order ${orderId} status updated successfully.`,
    });
    
    setConfirmDialog({ open: false, orderId: '', action: 'packed' });
  };

  const handleViewDetails = (orderId: string) => {
    const order = orders.find((o) => o.id === orderId);
    if (order) {
      const items = OrderItemService.getByOrderId(order.id);
      setSelectedOrder({ order, items });
      setIsDetailOpen(true);
    }
  };

  const handleBackClick = () => {
    window.location.href = './farmer-dashboard.html';
  };

  const statusOptions = [
    { value: 'all', label: 'All Orders' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Packed', label: 'Packed' },
    { value: 'Dispatched', label: 'Dispatched' },
  ];

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

  const canMarkAsPacked = (order: typeof OrderService.orderDataList[0]) => {
    return order.status === 'Pending';
  };

  const canMarkAsDispatched = (order: typeof OrderService.orderDataList[0]) => {
    return order.status === 'Packed';
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="page-body space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBackClick}
              className="h-10 w-10"
              aria-label="Go back to dashboard"
            >
              <SafeIcon name="ArrowLeft" size={20} strokeWidth={2} />
            </Button>
            <div>
              <h1 className="text-page-title">Pending Deliveries</h1>
              <p className="text-caption mt-1">Manage orders ready for dispatch to hub</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{filteredOrders.length}</div>
            <p className="text-caption">Orders to fulfill</p>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar
          filters={[
            {
              id: 'status',
              label: 'Status',
              options: statusOptions,
              value: statusFilter || 'all',
              onChange: (val) => setStatusFilter(val === 'all' ? '' : val),
            },
          ]}
          onReset={() => setStatusFilter('')}
        />

        {/* Orders Table */}
        {filteredOrders.length === 0 ? (
          <EmptyState
            iconName="Package"
            title="No Orders Found"
            description={
              statusFilter
                ? `No orders with status "${statusFilter}". Try adjusting your filters.`
                : 'No pending orders at the moment. Check back soon!'
            }
            actionLabel={statusFilter ? 'Clear Filters' : undefined}
            onAction={statusFilter ? () => setStatusFilter('') : undefined}
          />
        ) : (
          <Card className="surface-base border-none shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border hover:bg-transparent">
                    <TableHead className="w-32 whitespace-nowrap font-semibold">Order ID</TableHead>
                    <TableHead className="w-28 whitespace-nowrap font-semibold">Order #</TableHead>
                    <TableHead className="w-24 whitespace-nowrap font-semibold">Items</TableHead>
                    <TableHead className="w-24 whitespace-nowrap font-semibold">Amount</TableHead>
                    <TableHead className="w-28 whitespace-nowrap font-semibold">Status</TableHead>
                    <TableHead className="w-40 whitespace-nowrap font-semibold">Placed At</TableHead>
                    <TableHead className="w-32 whitespace-nowrap font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow
                      key={order.id}
                      className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="font-mono text-sm text-muted-foreground">
                        {order.id}
                      </TableCell>
                      <TableCell className="font-semibold">{order.orderNumber}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="bg-muted/50">
                          {order.quantityTotal}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-primary">
                        ₹{order.totalAmount}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={getStatusBadgeVariant(order.status)} size="sm" />
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(order.placedAt).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewDetails(order.id)}
                            className="h-8 px-2 text-xs"
                          >
                            <SafeIcon name="Eye" size={14} className="mr-1" />
                            Details
                          </Button>
                          {canMarkAsPacked(order) && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setConfirmDialog({
                                  open: true,
                                  orderId: order.id,
                                  action: 'packed',
                                })
                              }
                              className="h-8 px-2 text-xs border-primary/30 hover:bg-primary/5"
                            >
                              <SafeIcon name="CheckCircle2" size={14} className="mr-1" />
                              Pack
                            </Button>
                          )}
                          {canMarkAsDispatched(order) && (
                            <Button
                              variant="default"
                              size="sm"
                              onClick={() =>
                                setConfirmDialog({
                                  open: true,
                                  orderId: order.id,
                                  action: 'dispatched',
                                })
                              }
                              className="h-8 px-2 text-xs"
                            >
                              <SafeIcon name="Truck" size={14} className="mr-1" />
                              Dispatch
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        )}
      </div>

      {/* Order Detail Sheet */}
      {selectedOrder && (
        <OrderDetailSheet
          open={isDetailOpen}
          onOpenChange={setIsDetailOpen}
          order={selectedOrder.order}
          items={selectedOrder.items}
        />
      )}

      {/* Confirm Status Update Dialog */}
      <ConfirmDialog
        open={confirmDialog.open}
        onOpenChange={(open) =>
          setConfirmDialog((prev) => ({ ...prev, open }))
        }
        title={
          confirmDialog.action === 'packed'
            ? 'Mark Order as Packed?'
            : 'Dispatch Order to Hub?'
        }
        description={
          confirmDialog.action === 'packed'
            ? 'Once packed, the order will be ready for dispatch. You can still update the status.'
            : 'The hub and consumer will be notified immediately. This action cannot be undone.'
        }
        confirmLabel={confirmDialog.action === 'packed' ? 'Mark as Packed' : 'Dispatch Now'}
        variant="default"
        onConfirm={() => {
          const statusMap = {
            packed: 'Packed' as const,
            dispatched: 'Dispatched' as const,
          };
          handleStatusUpdate(confirmDialog.orderId, statusMap[confirmDialog.action]);
        }}
      />
    </>
  );
}
