
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SafeIcon from '@/components/common/SafeIcon'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { CartItemVO } from '@/data/CartItemService'

interface CartItemRowProps {
  cartItem: CartItemVO
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void
  onRemove: (cartItemId: string) => void
}

export default function CartItemRow({
  cartItem,
  onUpdateQuantity,
  onRemove,
}: CartItemRowProps) {
  const [quantity, setQuantity] = useState(cartItem.quantity)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10)
    if (!isNaN(val) && val > 0) {
      setQuantity(val)
      onUpdateQuantity(cartItem.id, val)
    }
  }

  const handleIncrement = () => {
    const newQty = quantity + 1
    setQuantity(newQty)
    onUpdateQuantity(cartItem.id, newQty)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1
      setQuantity(newQty)
      onUpdateQuantity(cartItem.id, newQty)
    }
  }

  const product = cartItem.product
  const farmer = cartItem.farmer
  const category = cartItem.category

  if (!product) {
    return null
  }

  return (
    <div className="surface-base card-padding rounded-lg border border-border hover:border-primary/30 transition-colors">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden bg-muted flex-shrink-0 border border-border">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {category && (
            <Badge className="absolute top-2 left-2 bg-white/90 text-foreground border-none shadow-sm text-xs">
              {category.name}
            </Badge>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div className="space-y-1">
            <h3 className="text-item-title font-bold truncate">{product.name}</h3>
            <p className="text-caption text-muted-foreground truncate">
              {farmer ? `From ${farmer.name}` : 'Unknown farmer'}
            </p>
            <p className="text-sm font-medium text-primary">
              ₹{product.pricePerUnit} / {product.unit}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 mt-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleDecrement}
              disabled={quantity <= 1}
            >
              <SafeIcon name="Minus" size={16} />
            </Button>

            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="h-8 w-12 text-center p-0 border-input"
            />

            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleIncrement}
            >
              <SafeIcon name="Plus" size={16} />
            </Button>

            <span className="text-caption text-muted-foreground ml-2">
              {product.unit}
            </span>
          </div>
        </div>

        {/* Price & Remove */}
        <div className="flex flex-col items-end justify-between flex-shrink-0">
          <div className="text-right">
            <p className="text-2xl font-bold text-foreground">
              ₹{cartItem.lineTotal}
            </p>
            <p className="text-caption text-muted-foreground">
              {quantity} × ₹{product.pricePerUnit}
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-destructive hover:text-destructive hover:bg-destructive/5"
            onClick={() => onRemove(cartItem.id)}
          >
            <SafeIcon name="Trash2" size={16} className="mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}
