
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon'
import type { OrderVO } from '@/data/OrderService'

interface OrderSummaryProps {
  order: OrderVO
  subtotal: number
  platformFee: number
  deliveryFee: number
  discountPercent: number
  finalAmount: number
}

export default function OrderSummary({
  order,
  subtotal,
  platformFee,
  deliveryFee,
  discountPercent,
  finalAmount,
}: OrderSummaryProps) {
  const discountAmount = (subtotal + platformFee + deliveryFee) * (discountPercent / 100)

  return (
    <Card className="surface-base border-primary/20 bg-primary/5">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Order Details</CardTitle>
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
            {order.orderNumber}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Farmer & Hub Info */}
        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-border">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">From Farmer</p>
            <div className="flex items-center gap-2">
              <img
                src={order.farmer?.avatarUrl || 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/f9e7fe03-9319-49e5-ac2f-98f3fb2b9b98.png'}
                alt={order.farmer?.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm font-semibold">{order.farmer?.name}</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Pickup Hub</p>
            <div className="flex items-center gap-2">
              <SafeIcon name="Warehouse" size={16} className="text-primary" />
              <span className="text-sm font-semibold">{order.hub?.name}</span>
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal ({order.quantityTotal} items)</span>
            <span className="font-medium">₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Platform Fee</span>
            <span className="font-medium">₹{platformFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Delivery Fee</span>
            <span className="font-medium">₹{deliveryFee.toFixed(2)}</span>
          </div>

          {discountPercent > 0 && (
            <div className="flex justify-between text-success pt-2 border-t border-border">
              <span>Discount ({discountPercent}%)</span>
              <span className="font-semibold">-₹{discountAmount.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Final Amount */}
        <div className="pt-4 border-t border-border flex justify-between items-center">
          <span className="font-semibold text-foreground">Total to Pay</span>
          <span className="text-2xl font-bold text-primary">₹{finalAmount.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  )
}
