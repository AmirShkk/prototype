
import React from 'react';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

interface TimelineStage {
  id: string;
  label: string;
  status: 'completed' | 'active' | 'pending';
  timestamp?: string;
}

interface OrderTimelineProps {
  stages: TimelineStage[];
}

/**
 * OrderTimeline component visualizes the fulfillment stages of an order.
 * It uses the brand primary color for active/completed states and muted for pending.
 */
export default function OrderTimeline({ stages = [] }: OrderTimelineProps) {
  // Map stage labels to appropriate icons for visual context
  const getIconForStage = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('ordered')) return 'ClipboardCheck';
    if (l.includes('farm')) return 'Sprout';
    if (l.includes('dispatched')) return 'Truck';
    if (l.includes('hub')) return 'Warehouse';
    if (l.includes('completed') || l.includes('arrived')) return 'CheckCircle2';
    return 'Circle';
  };

  if (!stages || stages.length === 0) {
    return null;
  }

  return (
    <div className="relative space-y-0 py-2">
      {(stages || []).map((stage, index) => {
        const isLast = index === stages.length - 1;
        const isCompleted = stage.status === 'completed';
        const isActive = stage.status === 'active';
        const isPending = stage.status === 'pending';

        return (
          <div key={stage.id} className="relative flex gap-4 pb-8 last:pb-0 group">
            {/* Connector Line */}
            {!isLast && (
              <div
                className={cn(
                  "absolute left-[19px] top-10 bottom-0 w-0.5 transition-colors duration-300",
                  isCompleted ? "bg-primary" : "bg-muted"
                )}
                aria-hidden="true"
              />
            )}

            {/* Stage Indicator (Icon) */}
            <div
              className={cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
                isCompleted && "bg-primary border-primary text-primary-foreground",
                isActive && "bg-background border-primary text-primary ring-4 ring-primary/10",
                isPending && "bg-muted border-muted text-muted-foreground"
              )}
            >
              <SafeIcon 
                name={getIconForStage(stage.label)} 
                size={20} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              
              {/* Pulsing effect for active stage */}
              {isActive && (
                <span className="absolute inset-0 rounded-full animate-ping bg-primary/20 -z-10" />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col pt-1.5">
              <span
                className={cn(
                  "text-base font-medium transition-colors",
                  isCompleted && "text-foreground",
                  isActive && "text-primary font-semibold",
                  isPending && "text-muted-foreground"
                )}
              >
                {stage.label}
              </span>
              
              {stage.timestamp && (
                <span className="text-caption mt-0.5">
                  {stage.timestamp}
                </span>
              )}
              
              {isActive && (
                <span className="text-xs font-medium text-primary mt-1 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  In Progress
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
