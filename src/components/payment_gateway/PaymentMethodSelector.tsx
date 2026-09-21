
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon'
import { cn } from '@/lib/utils'

interface PaymentMethodSelectorProps {
  selectedMethod: 'upi' | 'card' | 'netbanking'
  onMethodChange: (method: 'upi' | 'card' | 'netbanking') => void
  disabled?: boolean
}

const methods = [
  {
    id: 'upi',
    label: 'UPI',
    description: 'Google Pay, PhonePe, Paytm',
    icon: 'Smartphone',
  },
  {
    id: 'card',
    label: 'Debit / Credit Card',
    description: 'Visa, Mastercard, RuPay',
    icon: 'CreditCard',
  },
  {
    id: 'netbanking',
    label: 'Net Banking',
    description: 'Direct bank transfer',
    icon: 'Building2',
  },
]

export default function PaymentMethodSelector({
  selectedMethod,
  onMethodChange,
  disabled = false,
}: PaymentMethodSelectorProps) {
  return (
    <RadioGroup value={selectedMethod} onValueChange={(val) => onMethodChange(val as any)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {methods.map((method) => (
          <div key={method.id}>
            <Label
              htmlFor={method.id}
              className={cn(
                "flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all",
                selectedMethod === method.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50 bg-muted/20",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <RadioGroupItem
                value={method.id}
                id={method.id}
                disabled={disabled}
                className="mt-1"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <SafeIcon name={method.icon} size={18} className="text-primary shrink-0" />
                  <span className="font-semibold text-sm">{method.label}</span>
                </div>
                <p className="text-xs text-muted-foreground">{method.description}</p>
              </div>
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  )
}
