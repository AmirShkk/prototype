
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import SafeIcon from '@/components/common/SafeIcon'
import { toast } from 'sonner'
import type { DeliveryData } from '@/data/DeliveryData'

interface DeliveryReceiptFormProps {
  delivery: DeliveryData & { farmerName: string; orderNumber: string }
  onSubmit: (authMethod: string, authReference: string) => void
  onCancel: () => void
}

export default function DeliveryReceiptForm({
  delivery,
  onSubmit,
  onCancel
}: DeliveryReceiptFormProps) {
  const [authMethod, setAuthMethod] = useState<'QR' | 'OTP' | 'Manual Check'>('QR')
  const [authReference, setAuthReference] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!authReference.trim()) {
      toast.error(`Please enter the ${authMethod} reference`)
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      onSubmit(authMethod, authReference)
      setAuthReference('')
      setIsSubmitting(false)
    }, 500)
  }

  const handleReset = () => {
    setAuthReference('')
    setAuthMethod('QR')
  }

  return (
    <Card className="surface-base h-full flex flex-col overflow-hidden">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="text-lg">Receipt Verification</CardTitle>
        <p className="text-caption mt-1">Delivery {delivery.id}</p>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto min-h-0 p-4 space-y-6">
        {/* Delivery Summary */}
        <div className="space-y-3 p-3 bg-muted/30 rounded-lg border border-border">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Vehicle</p>
              <p className="font-semibold text-foreground">{delivery.vehicleLabel}</p>
            </div>
          </div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Farmer</p>
              <p className="font-semibold text-foreground">{delivery.farmerName}</p>
            </div>
          </div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Order</p>
              <p className="font-semibold text-foreground">{delivery.orderNumber}</p>
            </div>
          </div>
        </div>

        {/* Authentication Method Selection */}
        <div className="space-y-3">
          <Label className="text-label">Authentication Method</Label>
          <RadioGroup value={authMethod} onValueChange={(val:string) => setAuthMethod(val as any)}>
            <div className="flex items-center space-x-2 p-2 rounded hover:bg-muted/30 cursor-pointer">
              <RadioGroupItem value="QR" id="qr-method" />
              <Label htmlFor="qr-method" className="cursor-pointer flex-1 font-normal">
                <div className="flex items-center gap-2">
                  <SafeIcon name="QrCode" size={16} />
                  <span>QR Code Scan</span>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-2 rounded hover:bg-muted/30 cursor-pointer">
              <RadioGroupItem value="OTP" id="otp-method" />
              <Label htmlFor="otp-method" className="cursor-pointer flex-1 font-normal">
                <div className="flex items-center gap-2">
                  <SafeIcon name="Lock" size={16} />
                  <span>OTP Verification</span>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-2 rounded hover:bg-muted/30 cursor-pointer">
              <RadioGroupItem value="Manual Check" id="manual-method" />
              <Label htmlFor="manual-method" className="cursor-pointer flex-1 font-normal">
                <div className="flex items-center gap-2">
                  <SafeIcon name="CheckSquare" size={16} />
                  <span>Manual Verification</span>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Reference Input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="auth-ref" className="text-label">
              {authMethod === 'QR' && 'Scan QR Code'}
              {authMethod === 'OTP' && 'Enter OTP'}
              {authMethod === 'Manual Check' && 'Reference Number'}
            </Label>
            <Input
              id="auth-ref"
              type="text"
              placeholder={
                authMethod === 'QR' ? 'Scan QR code here...' :
                authMethod === 'OTP' ? 'Enter 6-digit OTP' :
                'Enter reference number'
              }
              value={authReference}
              onChange={(e) => setAuthReference(e.target.value)}
              className="h-10 font-mono text-center text-lg tracking-widest"
              disabled={isSubmitting}
              autoFocus
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button
              type="submit"
              className="flex-1 font-semibold"
              disabled={isSubmitting || !authReference.trim()}
            >
              {isSubmitting ? (
                <>
                  <SafeIcon name="Loader2" size={16} className="mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <SafeIcon name="CheckCircle2" size={16} className="mr-2" />
                  Mark as Received
                </>
              )}
            </Button>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleReset}
            disabled={isSubmitting}
          >
            <SafeIcon name="RotateCcw" size={16} className="mr-2" />
            Reset Form
          </Button>

          <Button
            type="button"
            variant="ghost"
            className="w-full text-muted-foreground"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
