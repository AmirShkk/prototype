
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import SafeIcon from '@/components/common/SafeIcon'
import type { OrderVO } from '@/data/OrderService'
import type { OrderItemData } from '@/data/OrderItemData'
import type { PaymentData } from '@/data/PaymentData'

interface OrderSummaryCardProps {
  order: OrderVO
  orderItems: OrderItemData[]
  payment: PaymentData | undefined
}

export default function OrderSummaryCard({
  order,
  orderItems,
  payment,
}: OrderSummaryCardProps) {
  return (
    <Card className="surface-raised border-none shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
        <CardTitle className="flex items-center gap-2">
          <SafeIcon name="ShoppingBag" size={20} className="text-primary" />
          Order Summary
        </CardTitle>
      </CardHeader>
      
      <CardContent className="card-padding">
        {/* Items Table */}
        <div className="overflow-x-auto mb-6">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border hover:bg-transparent">
                <TableHead className="w-40 whitespace-nowrap font-semibold">Product</TableHead>
                <TableHead className="w-20 text-center whitespace-nowrap font-semibold">Qty</TableHead>
                <TableHead className="w-24 text-right whitespace-nowrap font-semibold">Unit Price</TableHead>
                <TableHead className="w-24 text-right whitespace-nowrap font-semibold">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderItems.map((item) => (
                <TableRow key={item.id} className="border-b border-border/50 hover:bg-muted/30">
                  <TableCell className="font-medium text-foreground truncate">
                    Product #{item.productId}
                  </TableCell>
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell className="text-right">₹{item.unitPrice}</TableCell>
                  <TableCell className="text-right font-semibold">₹{item.lineTotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Cost Breakdown */}
        <div className="space-y-2 border-t border-border pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">₹{order.subtotalAmount}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Platform Fee</span>
            <span className="font-medium">₹{order.platformFee}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery Fee</span>
            <span className="font-medium">₹{order.deliveryFee}</span>
          </div>
          <div className="flex justify-between text-base font-bold border-t border-border pt-3 mt-3">
            <span>Total Amount</span>
            <span className="text-primary">₹{order.totalAmount}</span>
          </div>
        </div>

        {/* Payment Info */}
        {payment && (
          <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-success font-semibold">
              <SafeIcon name="BadgeCheck" size={18} />
              Payment Confirmed
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <div className="flex justify-between">
                <span>Method:</span>
                <span className="font-medium text-foreground">{payment.method}</span>
              </div>
              <div className="flex justify-between">
                <span>Reference:</span>
                <span className="font-mono text-foreground">{payment.transactionRef}</span>
              </div>
              <div className="flex justify-between">
                <span>Paid At:</span>
                <span className="text-foreground">
                  {new Date(payment.paidAt).toLocaleString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
