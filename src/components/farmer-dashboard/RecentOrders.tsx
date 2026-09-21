
import React from 'react'
import type { OrderData } from '@/data/OrderData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/common/StatusBadge'
import SafeIcon from '@/components/common/SafeIcon'
import EmptyState from '@/components/common/EmptyState'

interface RecentOrdersProps {
  orders: OrderData[]
}

export default function RecentOrders({ orders }: RecentOrdersProps) {
  const handleViewAll = () => {
    window.location.href = './farmer-orders.html'
  }

  if (!orders || orders.length === 0) {
    return (
      <Card className="surface-base">
        <CardHeader className="card-padding pb-0">
          <CardTitle className="text-section-title">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent className="card-padding">
          <EmptyState
            iconName="ShoppingCart"
            title="No Orders Yet"
            description="Your orders will appear here once consumers start purchasing your products."
            actionLabel="View All Orders"
            onAction={handleViewAll}
          />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="surface-base overflow-hidden">
      <CardHeader className="card-padding pb-4 border-b border-border flex flex-row items-center justify-between">
        <CardTitle className="text-section-title">Recent Orders</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleViewAll}
          className="text-primary hover:text-primary hover:bg-primary/10"
        >
          View All
          <SafeIcon name="ArrowRight" size={16} className="ml-2" />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-border">
                <TableHead className="w-32 whitespace-nowrap font-semibold">Order ID</TableHead>
                <TableHead className="w-40 whitespace-nowrap font-semibold">Quantity</TableHead>
                <TableHead className="w-32 whitespace-nowrap font-semibold">Amount</TableHead>
                <TableHead className="w-40 whitespace-nowrap font-semibold">Status</TableHead>
                <TableHead className="w-32 whitespace-nowrap font-semibold">Payment</TableHead>
                <TableHead className="w-24 whitespace-nowrap font-semibold text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  className="table-row-hover border-b border-border last:border-0"
                  onClick={() => window.location.href = './farmer-orders.html'}
                >
                  <TableCell className="font-mono text-sm font-medium text-primary">
                    {order.orderNumber}
                  </TableCell>
                  <TableCell className="text-sm">
                    {order.quantityTotal} items
                  </TableCell>
                  <TableCell className="font-semibold text-foreground">
                    ₹{order.totalAmount}
                  </TableCell>
                  <TableCell>
                    <StatusBadge
                      status={order.status.toLowerCase().replace(' ', '_') as any}
                      size="sm"
                    />
                  </TableCell>
                  <TableCell>
                    <StatusBadge
                      status={order.paymentStatus === 'Paid' ? 'completed' : 'pending'}
                      size="sm"
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.location.href = './farmer-orders.html'
                      }}
                      className="text-primary hover:text-primary hover:bg-primary/10"
                    >
                      <SafeIcon name="Eye" size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
