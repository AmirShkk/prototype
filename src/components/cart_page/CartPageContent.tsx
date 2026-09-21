
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import EmptyState from '@/components/common/EmptyState'
import { toast } from 'sonner'
import CartItemRow from './CartItemRow'
import OrderSummary from './OrderSummary'
import type { CartItemVO } from '@/data/CartItemService'
import * as CartItemService from '@/data/CartItemService'

interface CartPageContentProps {
  consumerId: string
}

export default function CartPageContent({ consumerId }: CartPageContentProps) {
  const [cartItems, setCartItems] = useState<CartItemVO[]>(() => 
    CartItemService.getByConsumerIdVO(consumerId)
  )
  const [isClient, setIsClient] = useState(true)

  useEffect(() => {
    setIsClient(false)
    requestAnimationFrame(() => {
      setIsClient(true)
    })
  }, [])

  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveItem(cartItemId)
      return
    }

    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === cartItemId
          ? {
              ...item,
              quantity: newQuantity,
              lineTotal: newQuantity * item.unitPriceSnapshot,
            }
          : item
      )
      CartItemService.savePersisted(
        updated.map(({ product, farmer, category, lineTotal, ...rest }) => rest)
      )
      return updated
    })
  }

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== cartItemId)
      CartItemService.savePersisted(
        updated.map(({ product, farmer, category, lineTotal, ...rest }) => rest)
      )
      toast.success('Item removed from cart')
      return updated
    })
  }

  const handleContinueShopping = () => {
    window.location.href = './consumer-marketplace.html'
  }

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Cart is empty')
      return
    }

    const orderId = `ord-${Date.now()}`
    const totalAmount = calculateTotal()
    window.location.href = `./payment-gateway.html?orderId=${orderId}&totalAmount=${totalAmount}`
  }

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.lineTotal, 0)
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    const platformFee = Math.round(subtotal * 0.03)
    const deliveryFee = 10
    return subtotal + platformFee + deliveryFee
  }

  const isEmpty = !isClient || cartItems.length === 0

  return (
    <div className="page-body flex flex-col gap-8 h-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-page-title">Shopping Cart</h1>
          <p className="text-caption mt-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </div>

      {isEmpty ? (
        <div className="flex-1 flex items-center justify-center">
          <EmptyState
            iconName="ShoppingCart"
            title="Your cart is empty"
            description="Start shopping for fresh farm produce from local farmers. Browse our marketplace to add items to your cart."
            actionLabel="Continue Shopping"
            onAction={handleContinueShopping}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-h-0">
            <div className="flex-1 overflow-y-auto min-h-0 pr-2 space-y-3">
              {cartItems.map((item, index) => (
                <div key={item.id}>
                  <CartItemRow
                    cartItem={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                  />
                  {index < cartItems.length - 1 && <Separator className="mt-3" />}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/5 font-medium"
                onClick={handleContinueShopping}
              >
                <SafeIcon name="ArrowLeft" size={16} className="mr-2" />
                Continue Shopping
              </Button>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-4 h-fit sticky top-20">
            <OrderSummary
              subtotal={calculateSubtotal()}
              platformFee={Math.round(calculateSubtotal() * 0.03)}
              deliveryFee={10}
              total={calculateTotal()}
              itemCount={cartItems.length}
            />

            <Button
              size="lg"
              className="w-full font-semibold shadow-md hover:shadow-lg transition-shadow"
              onClick={handleProceedToCheckout}
            >
              <SafeIcon name="Lock" size={18} className="mr-2" />
              Proceed to Checkout
            </Button>

            <p className="text-caption text-center text-muted-foreground">
              Secure payment powered by encrypted gateway
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
