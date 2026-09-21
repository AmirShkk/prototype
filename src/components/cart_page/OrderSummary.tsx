
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'

interface OrderSummaryProps {
  subtotal: number
  platformFee: number
  deliveryFee: number
  total: number
  itemCount: number
}

export default function OrderSummary({
  subtotal,
  platformFee,
  deliveryFee,
  total,
  itemCount,
}: OrderSummaryProps) {
  return (
    <Card className="surface-raised border-border overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">
            Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </span>
          <span className="font-medium">₹{subtotal}</span>
        </div>

        {/* Platform Fee */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Platform Fee</span>
            <div className="group relative">
              <SafeIcon
                name="Info"
                size={14}
                className="text-muted-foreground cursor-help"
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-foreground text-background text-xs rounded px-2 py-1 whitespace-nowrap z-10 shadow-lg">
                3% service charge
              </div>
            </div>
          </div>
          <span className="font-medium text-muted-foreground">₹{platformFee}</span>
        </div>

        {/* Delivery Fee */}
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Delivery to Hub</span>
          <span className="font-medium text-muted-foreground">₹{deliveryFee}</span>
        </div>

        <Separator className="my-2" />

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="font-semibold text-base">Total Amount</span>
          <span className="text-2xl font-bold text-primary">₹{total}</span>
        </div>

        {/* Info Box */}
        <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-xs text-foreground leading-relaxed">
            <SafeIcon name="CheckCircle2" size={14} className="inline mr-1 text-primary align-text-bottom" />
            Your payment supports fair prices for farmers. Thank you for supporting local agriculture!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
