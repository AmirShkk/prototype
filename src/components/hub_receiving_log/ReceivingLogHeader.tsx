
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'

interface ReceivingLogHeaderProps {
  hubName: string
}

export default function ReceivingLogHeader({ hubName }: ReceivingLogHeaderProps) {
  const handleBack = () => {
    window.location.href = './hub-logistics.html'
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBack}
          className="text-muted-foreground hover:text-foreground"
          aria-label="Go back to hub logistics"
        >
          <SafeIcon name="ArrowLeft" size={20} strokeWidth={2} />
        </Button>
        <div>
          <h1 className="text-page-title">Farmer Delivery Log</h1>
          <p className="text-caption mt-1">{hubName} • Receiving & Verification</p>
        </div>
      </div>
    </div>
  )
}
