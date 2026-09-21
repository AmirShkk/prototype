
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

interface LiveTrackingMapProps {
  orderStatus: string;
  hubName: string;
  hubAddress: string;
  isClient: boolean;
}

export default function LiveTrackingMap({
  orderStatus,
  hubName,
  hubAddress,
  isClient,
}: LiveTrackingMapProps) {
  const [animateMarker, setAnimateMarker] = useState(false);

  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setAnimateMarker(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isClient]);

  const isInTransit = ['Packed', 'Dispatched'].includes(orderStatus);
  const isDelivered = ['Arrived at Hub', 'Completed'].includes(orderStatus);

  return (
    <Card className="surface-raised overflow-hidden">
      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center gap-2">
          <SafeIcon name="Map" size={20} className="text-accent" />
          Live Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="card-padding p-0">
        {/* Mock Map Container */}
        <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-muted/50 to-muted/30 border-b border-border overflow-hidden">
          {/* Static Map Background Image */}
          <img
            src="https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/1a8b4e7e-697c-4944-bd25-e6734173cb3c.png"
            alt="Delivery Route Map"
            className="w-full h-full object-cover"
          />

          {/* Overlay: Route Path (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
          >
            {/* Dashed route line */}
            <line
              x1="100"
              y1="300"
              x2="700"
              y2="100"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeDasharray="8,4"
              opacity="0.6"
            />
          </svg>

          {/* Farm Marker (Start) */}
          <div className="absolute bottom-12 left-12 flex flex-col items-center">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg border-4 border-card">
              <SafeIcon name="Sprout" size={20} strokeWidth={2} />
            </div>
            <div className="mt-2 bg-card px-2 py-1 rounded shadow-md border border-border whitespace-nowrap text-xs font-medium">
              Farm Location
            </div>
          </div>

          {/* Hub Marker (Destination) */}
          <div className="absolute top-8 right-12 flex flex-col items-center">
            <div
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-card transition-all duration-500',
                isDelivered || isInTransit
                  ? 'bg-success text-white scale-110'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              <SafeIcon name="Warehouse" size={20} strokeWidth={2} />
            </div>
            <div className="mt-2 bg-card px-2 py-1 rounded shadow-md border border-border whitespace-nowrap text-xs font-medium">
              {hubName}
            </div>
          </div>

          {/* Animated Delivery Vehicle (if in transit) */}
          {isInTransit && (
            <div
              className={cn(
                'absolute w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg border-2 border-card transition-all duration-1000',
                animateMarker ? 'opacity-100' : 'opacity-0'
              )}
              style={{
                left: animateMarker ? 'calc(87.5% - 16px)' : 'calc(12.5% - 16px)',
                top: animateMarker ? 'calc(25% - 16px)' : 'calc(75% - 16px)',
              }}
            >
              <SafeIcon name="Truck" size={16} strokeWidth={2.5} />
            </div>
          )}

          {/* Status Overlay Badge */}
          <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-border shadow-md">
            <p className="text-xs font-semibold text-foreground">
              {isInTransit && '🚚 In Transit'}
              {isDelivered && '✓ Arrived at Hub'}
              {!isInTransit && !isDelivered && '📦 Preparing'}
            </p>
          </div>
        </div>

        {/* Map Info Footer */}
        <div className="card-padding space-y-2 bg-muted/20">
          <div className="flex items-start gap-2">
            <SafeIcon
              name="MapPin"
              size={16}
              className="text-primary mt-0.5 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{hubName}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {hubAddress}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
            <SafeIcon name="Clock" size={14} />
            <span>
              {isInTransit && 'Estimated arrival: Today'}
              {isDelivered && 'Ready for pickup'}
              {!isInTransit && !isDelivered && 'Preparing for dispatch'}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
