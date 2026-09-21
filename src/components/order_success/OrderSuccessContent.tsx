import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { useSearchParams } from '@/lib/useSearchParams'
import * as OrderService from '@/data/OrderService'
import * as OrderItemService from '@/data/OrderItemService'
import * as PaymentService from '@/data/PaymentService'
import type { OrderVO } from '@/data/OrderService'
import type { OrderItemData } from '@/data/OrderItemData'
import type { PaymentData } from '@/data/PaymentData'
import OrderSummaryCard from './OrderSummaryCard'
import OrderTimelineSection from './OrderTimelineSection'
import HubLocationCard from './HubLocationCard'
import OrderActionButtons from './OrderActionButtons'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { toast } from 'sonner'

interface OrderSuccessState {
  order: OrderVO | undefined
  orderItems: OrderItemData[]
  payment: PaymentData | undefined
  isLoading: boolean
}

export default function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId') || ''

  const [state, setState] = useState<OrderSuccessState>(() => {
    const fallbackOrder = OrderService.getAll()[0]
    const targetOrderId = orderId || fallbackOrder?.id || ''
    
    const order = OrderService.getByIdVO(targetOrderId)
    const orderItems = order ? OrderItemService.getByOrderId(order.id) : []
    const payments = order ? PaymentService.getByOrderId(order.id) : []
    const payment = payments.length > 0 ? payments[0] : undefined

    return {
      order,
      orderItems,
      payment,
      isLoading: false,
    }
  })

  const [isClient, setIsClient] = useState(true)

  useEffect(() => {
    setIsClient(false)
    const raf = requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search)
      const paramOrderId = params.get('orderId')
      
      if (paramOrderId && paramOrderId !== state.order?.id) {
        const order = OrderService.getByIdVO(paramOrderId)
        if (order) {
          const orderItems = OrderItemService.getByOrderId(order.id)
          const payments = PaymentService.getByOrderId(order.id)
          const payment = payments.length > 0 ? payments[0] : undefined
          
          setState({
            order,
            orderItems,
            payment,
            isLoading: false,
          })
        }
      }
      
      setIsClient(true)
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  if (!state.order) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <LoadingSpinner size="lg" text="Loading order details..." />
      </div>
    )
  }

  return (
    <div className="page-body flex flex-col gap-8 max-w-4xl mx-auto">
      {/* Success Header */}
      <div className="text-center space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-success/20 rounded-full blur-xl" />
            <div className="relative bg-success/10 border border-success/30 rounded-full p-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-success animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <h1 className="text-page-title text-success">Order Confirmed!</h1>
        <p className="text-body text-muted-foreground max-w-xl mx-auto">
          Your order has been successfully placed. Your farmer is preparing your fresh produce, and it will arrive at your designated hub soon.
        </p>
      </div>

      {/* Order Number & Key Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="surface-base card-padding text-center">
          <p className="text-caption uppercase tracking-wider mb-1">Order Number</p>
          <p className="text-xl font-bold text-primary">{state.order.orderNumber}</p>
        </div>
        <div className="surface-base card-padding text-center">
          <p className="text-caption uppercase tracking-wider mb-1">Total Amount</p>
          <p className="text-xl font-bold">₹{state.order.totalAmount}</p>
        </div>
        <div className="surface-base card-padding text-center">
          <p className="text-caption uppercase tracking-wider mb-1">Payment Status</p>
          <p className={cn(
            "text-lg font-bold",
            state.payment?.status === 'Success' ? "text-success" : "text-warning"
          )}>
            {state.payment?.status || 'Pending'}
          </p>
        </div>
      </div>

      {/* Order Summary */}
      <OrderSummaryCard 
        order={state.order}
        orderItems={state.orderItems}
        payment={state.payment}
      />

      {/* Timeline */}
      <OrderTimelineSection order={state.order} />

      {/* Hub Location */}
      {state.order.hub && (
        <HubLocationCard hub={state.order.hub} pickupCode={state.order.pickupCode} />
      )}

      {/* Action Buttons */}
      <OrderActionButtons orderId={state.order.id} />

      {/* Additional Info */}
      <div className="surface-base card-padding bg-accent/5 border-accent/20">
        <p className="text-sm text-foreground leading-relaxed">
          <strong>Next Steps:</strong> Your farmer will pack and dispatch your order within 2-4 hours. You'll receive a notification when it arrives at the hub. Visit the hub during operating hours with your pickup code <strong>{state.order.pickupCode}</strong> to collect your order.
        </p>
      </div>
    </div>
  )
}
