
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SafeIcon from '@/components/common/SafeIcon'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import OrderSummary from '@/components/payment_gateway/OrderSummary'
import PaymentMethodSelector from '@/components/payment_gateway/PaymentMethodSelector'
import { getByIdVO as getOrderByIdVO } from '@/data/OrderService'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface PaymentFormData {
  method: 'upi' | 'card' | 'netbanking'
  upiId?: string
  cardNumber?: string
  cardHolder?: string
  expiryDate?: string
  cvv?: string
  bankName?: string
  accountNumber?: string
}

export default function PaymentGateway() {
  const [isClient, setIsClient] = useState(true)
  const [orderId, setOrderId] = useState<string>('')
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const [order, setOrder] = useState<any>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [discountApplied, setDiscountApplied] = useState(0)
  const [formData, setFormData] = useState<PaymentFormData>({
    method: 'upi',
  })

  useEffect(() => {
    setIsClient(false)
    const raf = requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search)
      const paramOrderId = params.get('orderId')
      const paramAmount = params.get('totalAmount')

      let finalOrderId = paramOrderId || ''
      let finalAmount = paramAmount ? parseFloat(paramAmount) : 0

      if (!finalOrderId) {
        const allOrders = getOrderByIdVO('ord-1001')
        if (allOrders) {
          finalOrderId = allOrders.id
          finalAmount = allOrders.totalAmount
        }
      }

      setOrderId(finalOrderId)
      setTotalAmount(finalAmount)

      if (finalOrderId) {
        const orderData = getOrderByIdVO(finalOrderId)
        if (orderData) {
          setOrder(orderData)
          setTotalAmount(orderData.totalAmount)
        }
      }

      setIsClient(true)
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  const handlePaymentMethodChange = (method: 'upi' | 'card' | 'netbanking') => {
    setFormData({ method })
  }

  const handleFormChange = (field: keyof PaymentFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const validatePaymentForm = (): boolean => {
    if (formData.method === 'upi') {
      if (!formData.upiId || !formData.upiId.includes('@')) {
        toast.error('Please enter a valid UPI ID (e.g., user@upi)')
        return false
      }
    } else if (formData.method === 'card') {
      if (!formData.cardNumber || formData.cardNumber.length < 13) {
        toast.error('Please enter a valid card number')
        return false
      }
      if (!formData.cardHolder) {
        toast.error('Please enter cardholder name')
        return false
      }
      if (!formData.expiryDate || !formData.expiryDate.match(/^\d{2}\/\d{2}$/)) {
        toast.error('Please enter expiry date in MM/YY format')
        return false
      }
      if (!formData.cvv || formData.cvv.length < 3) {
        toast.error('Please enter a valid CVV')
        return false
      }
    } else if (formData.method === 'netbanking') {
      if (!formData.bankName) {
        toast.error('Please select a bank')
        return false
      }
      if (!formData.accountNumber) {
        toast.error('Please enter account number')
        return false
      }
    }
    return true
  }

  const applyCoupon = () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code')
      return
    }

    const validCoupons: Record<string, number> = {
      'FARM10': 10,
      'FRESH15': 15,
      'SAVE20': 20,
    }

    const discount = validCoupons[couponCode.toUpperCase()]
    if (discount) {
      setDiscountApplied(discount)
      toast.success(`Coupon applied! ${discount}% discount`)
    } else {
      toast.error('Invalid coupon code')
      setDiscountApplied(0)
    }
  }

  const handlePayment = async () => {
    if (!validatePaymentForm()) {
      return
    }

    setIsProcessing(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const transactionRef = `TXN-${Math.floor(Math.random() * 1000000)}`
    
    toast.success(`Payment successful! Transaction: ${transactionRef}`)

    setTimeout(() => {
      window.location.href = `./order-success.html?orderId=${orderId}`
    }, 1500)
  }

  const handleCancel = () => {
    window.location.href = './cart-page.html'
  }

  if (!isClient || !order) {
    return (
      <div className="page-body flex items-center justify-center min-h-[60vh]">
        <LoadingSpinner size="lg" text="Loading payment details..." />
      </div>
    )
  }

  const finalAmount = totalAmount - (totalAmount * discountApplied) / 100

  return (
    <div className="page-body max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-page-title mb-2">Secure Payment</h1>
        <p className="text-caption">Complete your purchase securely</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Order Summary Card */}
          <OrderSummary 
            order={order}
            subtotal={order.subtotalAmount}
            platformFee={order.platformFee}
            deliveryFee={order.deliveryFee}
            discountPercent={discountApplied}
            finalAmount={finalAmount}
          />

          {/* Coupon Code Section */}
          <Card className="surface-base">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <SafeIcon name="Gift" size={20} className="text-secondary" />
                Apply Coupon Code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter coupon code (e.g., FARM10, FRESH15)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1"
                  disabled={isProcessing}
                />
                <Button
                  onClick={applyCoupon}
                  variant="outline"
                  disabled={isProcessing}
                  className="px-6"
                >
                  Apply
                </Button>
              </div>
              {discountApplied > 0 && (
                <div className="p-3 bg-success/10 border border-success/30 rounded-lg flex items-center gap-2 text-success">
                  <SafeIcon name="CheckCircle2" size={18} />
                  <span className="text-sm font-medium">{discountApplied}% discount applied!</span>
                </div>
              )}
              <p className="text-xs text-muted-foreground">
                Try codes: FARM10, FRESH15, SAVE20
              </p>
            </CardContent>
          </Card>

          {/* Payment Method Selection */}
          <Card className="surface-base">
            <CardHeader>
              <CardTitle className="text-lg">Select Payment Method</CardTitle>
              <CardDescription>Choose how you'd like to pay</CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentMethodSelector
                selectedMethod={formData.method}
                onMethodChange={handlePaymentMethodChange}
                disabled={isProcessing}
              />
            </CardContent>
          </Card>

          {/* Payment Details Form */}
          <Card className="surface-base">
            <CardHeader>
              <CardTitle className="text-lg">Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={formData.method} onValueChange={(val:string) => handlePaymentMethodChange(val as any)} className="w-full">
                {/* UPI Tab */}
                <TabsContent value="upi" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="upi-id" className="text-label">UPI ID</Label>
                    <Input
                      id="upi-id"
                      placeholder="yourname@upi"
                      value={formData.upiId || ''}
                      onChange={(e) => handleFormChange('upiId', e.target.value)}
                      disabled={isProcessing}
                      className="h-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Enter your UPI ID to complete the payment. You'll receive a confirmation on your registered mobile number.
                  </p>
                </TabsContent>

                {/* Card Tab */}
                <TabsContent value="card" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number" className="text-label">Card Number</Label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber || ''}
                      onChange={(e) => handleFormChange('cardNumber', e.target.value.replace(/\s/g, ''))}
                      disabled={isProcessing}
                      maxLength={16}
                      className="h-10 font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card-holder" className="text-label">Cardholder Name</Label>
                    <Input
                      id="card-holder"
                      placeholder="John Doe"
                      value={formData.cardHolder || ''}
                      onChange={(e) => handleFormChange('cardHolder', e.target.value)}
                      disabled={isProcessing}
                      className="h-10"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="text-label">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        value={formData.expiryDate || ''}
                        onChange={(e) => handleFormChange('expiryDate', e.target.value)}
                        disabled={isProcessing}
                        maxLength={5}
                        className="h-10 font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-label">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv || ''}
                        onChange={(e) => handleFormChange('cvv', e.target.value)}
                        disabled={isProcessing}
                        maxLength={4}
                        type="password"
                        className="h-10 font-mono"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Net Banking Tab */}
                <TabsContent value="netbanking" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="bank-name" className="text-label">Select Bank</Label>
                    <select
                      id="bank-name"
                      value={formData.bankName || ''}
                      onChange={(e) => handleFormChange('bankName', e.target.value)}
                      disabled={isProcessing}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                    >
                      <option value="">Choose your bank...</option>
                      <option value="HDFC">HDFC Bank</option>
                      <option value="ICICI">ICICI Bank</option>
                      <option value="SBI">State Bank of India</option>
                      <option value="AXIS">Axis Bank</option>
                      <option value="KOTAK">Kotak Mahindra Bank</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="account-number" className="text-label">Account Number</Label>
                    <Input
                      id="account-number"
                      placeholder="Your account number"
                      value={formData.accountNumber || ''}
                      onChange={(e) => handleFormChange('accountNumber', e.target.value)}
                      disabled={isProcessing}
                      className="h-10"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={handleCancel}
              disabled={isProcessing}
              className="flex-1"
            >
              Cancel Payment
            </Button>
            <Button
              onClick={handlePayment}
              disabled={isProcessing}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isProcessing ? (
                <>
                  <LoadingSpinner size="sm" />
                  <span className="ml-2">Processing...</span>
                </>
              ) : (
                <>
                  <SafeIcon name="Lock" size={18} className="mr-2" />
                  Pay ₹{finalAmount.toFixed(2)}
                </>
              )}
            </Button>
          </div>

          {/* Security Notice */}
          <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg flex items-start gap-3">
            <SafeIcon name="Shield" size={20} className="text-accent mt-0.5 shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Your payment is secure</p>
              <p>All transactions are encrypted and processed through secure payment gateways. Your financial information is never stored on our servers.</p>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <Card className="surface-raised sticky top-24">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 pb-4 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Order ID</span>
                  <span className="font-mono font-semibold">{order.orderNumber}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Items</span>
                  <span className="font-semibold">{order.quantityTotal} items</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{order.subtotalAmount.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2 pb-4 border-b border-border text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Platform Fee</span>
                  <span>₹{order.platformFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>₹{order.deliveryFee.toFixed(2)}</span>
                </div>
                {discountApplied > 0 && (
                  <div className="flex justify-between text-success">
                    <span>Discount ({discountApplied}%)</span>
                    <span>-₹{((order.subtotalAmount + order.platformFee + order.deliveryFee) * discountApplied / 100).toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="font-semibold text-foreground">Total Amount</span>
                <span className="text-2xl font-bold text-primary">₹{finalAmount.toFixed(2)}</span>
              </div>

              <div className="pt-4 space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <SafeIcon name="MapPin" size={14} />
                  <span>Pickup at {order.hub?.name || 'Hub'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <SafeIcon name="User" size={14} />
                  <span>From {order.farmer?.name || 'Farmer'}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
