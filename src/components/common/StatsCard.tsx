
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  iconName: string;
  trend?: {
    value: number;
    direction: 'up' | 'down';
  };
  variant?: 'primary' | 'secondary' | 'accent' | 'muted';
}

/**
 * StatsCard Component
 * A KPI card used for dashboards to display key metrics like sales, inventory, or orders.
 */
export default function StatsCard({
  title,
  value,
  iconName,
  trend,
  variant = 'primary',
}: StatsCardProps) {
  // Mapping variants to global.css specific styles
  const variantClasses = {
    primary: 'stat-card-primary',
    secondary: 'stat-card-secondary',
    accent: 'stat-card-accent',
    muted: 'bg-muted/30 border-muted',
  };

  const iconColors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    muted: 'text-muted-foreground',
  };

  return (
    <Card className={cn(
      "surface-base card-lift border transition-all duration-200 overflow-hidden",
      variantClasses[variant]
    )}>
      <CardContent className="card-padding relative">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-caption font-medium uppercase tracking-wider text-xs">
              {title}
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              {value}
            </h3>
            
            {trend && (
              <div className={cn(
                "flex items-center gap-1 text-sm font-medium mt-1",
                trend.direction === 'up' ? "text-success" : "text-destructive"
              )}>
                <SafeIcon 
                  name={trend.direction === 'up' ? "TrendingUp" : "TrendingDown"} 
                  size={14} 
                  strokeWidth={2.5}
                />
                <span>{trend.value}%</span>
                <span className="text-muted-foreground font-normal text-xs ml-0.5">
                  vs last month
                </span>
              </div>
            )}
          </div>

          <div className={cn(
            "p-3 rounded-full bg-background shadow-sm border border-border/50",
            iconColors[variant]
          )}>
            <SafeIcon name={iconName} size={24} strokeWidth={2} />
          </div>
        </div>
        
        {/* Subtle background decorative element */}
        <div className="absolute -right-4 -bottom-4 opacity-[0.03] pointer-events-none">
          <SafeIcon name={iconName} size={100} strokeWidth={1} />
        </div>
      </CardContent>
    </Card>
  );
}
