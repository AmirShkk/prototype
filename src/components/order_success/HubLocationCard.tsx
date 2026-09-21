
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon'
import type { HubData } from '@/data/HubData'

interface HubLocationCardProps {
  hub: HubData
  pickupCode: string
}

export default function HubLocationCard({ hub, pickupCode }: HubLocationCardProps) {
  return (
    <Card className="surface-raised border-none shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5 border-b">
        <CardTitle className="flex items-center gap-2">
          <SafeIcon name="MapPin" size={20} className="text-accent" />
          Pickup Location
        </CardTitle>
      </CardHeader>
      
      <CardContent className="card-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hub Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-item-title font-bold mb-1">{hub.name}</h3>
              <Badge variant="secondary" className="mb-3">{hub.code}</Badge>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <SafeIcon name="MapPin" size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">Address</p>
                  <p className="text-foreground font-medium">{hub.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <SafeIcon name="Clock" size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">Operating Hours</p>
                  <p className="text-foreground font-medium">{hub.operatingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <SafeIcon name="Phone" size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">Contact</p>
                  <p className="text-foreground font-medium">{hub.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <SafeIcon name="User" size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">Manager</p>
                  <p className="text-foreground font-medium">{hub.managerName}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pickup Code & Instructions */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="p-6 bg-primary/10 border-2 border-dashed border-primary rounded-lg text-center space-y-2">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Your Pickup Code</p>
              <p className="text-4xl font-black text-primary tracking-wider">{pickupCode}</p>
              <p className="text-xs text-muted-foreground">
                Show this code at the hub desk to collect your order
              </p>
            </div>

            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg space-y-2">
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                <SafeIcon name="AlertCircle" size={16} className="text-accent" />
                Important
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                <li>Bring a valid ID for verification</li>
                <li>Pickup available during operating hours only</li>
                <li>Order valid for 48 hours from arrival</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
