
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

export interface Activity {
  id: string;
  type: 'delivery_received' | 'consumer_pickup' | 'delivery_pending' | 'consumer_pickup_pending';
  title: string;
  description: string;
  timestamp: string;
  status: 'completed' | 'pending';
  farmerName?: string;
  consumerName?: string;
  productName?: string;
  orderId?: string;
  quantity?: string;
}

interface HubActivityLogProps {
  activities: Activity[];
}

export default function HubActivityLog({ activities = [] }: HubActivityLogProps) {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'delivery_received':
        return 'CheckCircle2';
      case 'delivery_pending':
        return 'Clock';
      case 'consumer_pickup':
        return 'Users';
      case 'consumer_pickup_pending':
        return 'AlertCircle';
      default:
        return 'Circle';
    }
  };

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'delivery_received':
        return 'text-success';
      case 'delivery_pending':
        return 'text-warning';
      case 'consumer_pickup':
        return 'text-accent';
      case 'consumer_pickup_pending':
        return 'text-warning';
      default:
        return 'text-muted-foreground';
    }
  };

  if (!activities || activities.length === 0) {
    return (
      <Card className="surface-base">
        <CardContent className="card-padding text-center py-12">
          <p className="text-muted-foreground">No recent activities</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="surface-base overflow-hidden">
      <div className="divide-y divide-border">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="card-padding flex items-start gap-4 hover:bg-muted/30 transition-colors"
          >
            <div className={cn(
              'mt-1 shrink-0',
              getActivityColor(activity.type)
            )}>
              <SafeIcon name={getActivityIcon(activity.type)} size={20} strokeWidth={2} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-semibold text-foreground">{activity.title}</h4>
                <Badge 
                  variant={activity.status === 'completed' ? 'default' : 'secondary'}
                  className="shrink-0 text-xs"
                >
                  {activity.status === 'completed' ? 'Done' : 'Pending'}
                </Badge>
              </div>

              <p className="text-caption mb-2">{activity.description}</p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                {activity.farmerName && (
                  <div className="flex items-center gap-1">
                    <SafeIcon name="User" size={14} />
                    <span>{activity.farmerName}</span>
                  </div>
                )}
                {activity.consumerName && (
                  <div className="flex items-center gap-1">
                    <SafeIcon name="User" size={14} />
                    <span>{activity.consumerName}</span>
                  </div>
                )}
                {activity.quantity && (
                  <div className="flex items-center gap-1">
                    <SafeIcon name="Package" size={14} />
                    <span>{activity.quantity}</span>
                  </div>
                )}
                <div className="flex items-center gap-1 ml-auto">
                  <SafeIcon name="Clock" size={14} />
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
