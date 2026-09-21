
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

interface HubActionCardProps {
  title: string;
  description: string;
  iconName: string;
  actionLabel: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function HubActionCard({
  title,
  description,
  iconName,
  actionLabel,
  onClick,
  variant = 'primary',
}: HubActionCardProps) {
  const variantClasses = {
    primary: 'stat-card-primary',
    secondary: 'stat-card-secondary',
    accent: 'stat-card-accent',
  };

  const iconColors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
  };

  return (
    <Card className={cn(
      'surface-base card-lift border transition-all duration-200 cursor-pointer flex flex-col h-full',
      variantClasses[variant]
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="mt-1.5 text-xs">{description}</CardDescription>
          </div>
          <div className={cn(
            'p-2.5 rounded-lg bg-background border border-border/50 shrink-0',
            iconColors[variant]
          )}>
            <SafeIcon name={iconName} size={20} strokeWidth={2} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex items-end pt-0">
        <Button
          onClick={onClick}
          variant="default"
          size="sm"
          className="w-full font-semibold shadow-sm hover:shadow-md transition-shadow"
        >
          {actionLabel}
          <SafeIcon name="ArrowRight" size={16} className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
