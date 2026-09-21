
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import SafeIcon from '@/components/common/SafeIcon';
import type { FarmerData } from '@/data/FarmerData';

interface FarmerCardProps {
  farmer: FarmerData;
}

export default function FarmerCard({ farmer }: FarmerCardProps) {
  return (
    <Card className="surface-raised">
      <CardHeader>
        <CardTitle className="text-lg">About the Farmer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary/20 shadow-sm">
            <AvatarImage src={farmer.avatarUrl} alt={farmer.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
              {farmer.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold text-foreground">{farmer.name}</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <SafeIcon
                    key={i}
                    name="Star"
                    size={14}
                    className={i < Math.floor(farmer.rating) ? "fill-warning text-warning" : "text-muted"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">{farmer.rating}</span>
            </div>
            <Badge variant="outline" className="w-fit">
              <SafeIcon name="CheckCircle2" size={12} className="mr-1 text-success" />
              {farmer.verificationStatus}
            </Badge>
          </div>
        </div>

        <div className="space-y-3 pt-2 border-t border-border">
          <div className="flex items-start gap-2">
            <SafeIcon name="MapPin" size={16} className="text-primary mt-0.5 shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-foreground">{farmer.village}</p>
              <p className="text-muted-foreground text-xs">{farmer.region}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <SafeIcon name="Phone" size={16} className="text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-foreground">{farmer.phone}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border">
          {farmer.bio}
        </p>
      </CardContent>
    </Card>
  );
}
