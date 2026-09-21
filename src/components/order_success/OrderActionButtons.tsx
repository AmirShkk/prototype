
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import { toast } from 'sonner'

interface OrderActionButtonsProps {
  orderId: string
}

export default function OrderActionButtons({ orderId }: OrderActionButtonsProps) {
  const handleTrackOrder = () => {
    window.location.href = `./order-tracking.html?orderId=${orderId}`
  }

  const handleContinueShopping = () => {
    window.location.href = './consumer-marketplace.html'
  }

  const handleDownloadInvoice = () => {
    toast.success('Invoice downloaded successfully', {
      description: `Order ${orderId} invoice has been saved to your device.`,
    })
  }

  const handleShareOrder = () => {
    const shareText = `I just ordered fresh produce from FarmConnect! Order #${orderId}. Join me on the platform to get fresh farm products delivered to your hub.`
    
    if (navigator.share) {
      navigator.share({
        title: 'FarmConnect Order',
        text: shareText,
        url: window.location.href,
      }).catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Share failed:', err)
        }
      })
    } else {
      navigator.clipboard.writeText(shareText)
      toast.success('Order link copied to clipboard', {
        description: 'Share it with your friends!',
      })
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button
        size="lg"
        onClick={handleTrackOrder}
        className="font-semibold shadow-md hover:shadow-lg transition-shadow"
      >
        <SafeIcon name="MapPin" size={18} className="mr-2" />
        Track Order
      </Button>

      <Button
        size="lg"
        variant="secondary"
        onClick={handleContinueShopping}
        className="font-semibold shadow-md hover:shadow-lg transition-shadow"
      >
        <SafeIcon name="ShoppingCart" size={18} className="mr-2" />
        Continue Shopping
      </Button>

      <Button
        size="lg"
        variant="outline"
        onClick={handleDownloadInvoice}
        className="font-semibold"
      >
        <SafeIcon name="Download" size={18} className="mr-2" />
        Download Invoice
      </Button>

      <Button
        size="lg"
        variant="outline"
        onClick={handleShareOrder}
        className="font-semibold"
      >
        <SafeIcon name="Share2" size={18} className="mr-2" />
        Share Order
      </Button>
    </div>
  )
}
