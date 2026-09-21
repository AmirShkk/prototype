
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SafeIcon from '@/components/common/SafeIcon';
import EmptyState from '@/components/common/EmptyState';
import type { PickupVerificationVO } from '@/data/PickupVerificationService';
import { cn } from '@/lib/utils';

interface PickupVerificationListProps {
  verifications: PickupVerificationVO[];
  onVerifyClick: (orderId: string) => void;
}

export default function PickupVerificationList({
  verifications,
  onVerifyClick,
}: PickupVerificationListProps) {
  if (!verifications || verifications.length === 0) {
    return (
      <EmptyState
        iconName="CheckCircle2"
        title="All Pickups Verified"
        description="No pending consumer pickups at this moment. All orders have been verified and completed."
        className="mt-12"
      />
    );
  }

  return (
    <div className="space-y-4 pr-4">
      {verifications.map((verification) => (
        <Card 
          key={verification.id} 
          className="surface-base card-lift overflow-hidden hover:shadow-card transition-all"
        >
          <CardHeader className="pb-3 border-b border-border/50">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-base font-semibold truncate">
                    Order {verification.order?.orderNumber || 'N/A'}
                  </CardTitle>
                  <Badge 
                    variant="outline" 
                    className="bg-warning/10 text-warning border-warning/30 shrink-0"
                  >
                    Pending
                  </Badge>
                </div>
                <p className="text-caption text-muted-foreground">
                  Pickup Code: <span className="font-mono font-semibold text-foreground">{verification.order?.pickupCode}</span>
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="card-padding space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Consumer Info */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Consumer
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <SafeIcon name="User" size={16} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">
                      {verification.consumer?.name || 'Unknown'}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {verification.consumer?.phone || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verification Mode */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Verification Method
                </p>
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    verification.verificationMode === 'OTP' 
                      ? "bg-accent/10" 
                      : "bg-secondary/10"
                  )}>
                    <SafeIcon 
                      name={verification.verificationMode === 'OTP' ? 'Lock' : 'QrCode'} 
                      size={16} 
                      className={verification.verificationMode === 'OTP' ? 'text-accent' : 'text-secondary'}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {verification.verificationMode === 'OTP' ? 'OTP Verification' : 'QR Code Scan'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {verification.verificationMode === 'OTP' 
                        ? verification.otpMasked 
                        : verification.qrTokenMasked}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items Summary */}
            <div className="pt-2 border-t border-border/50">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">
                Order Details
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Total Amount: <span className="font-semibold text-foreground">₹{verification.order?.totalAmount}</span>
                </span>
                <span className="text-muted-foreground">
                  Items: <span className="font-semibold text-foreground">{verification.order?.quantityTotal}</span>
                </span>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={() => onVerifyClick(verification.orderId)}
              className="w-full mt-2 font-semibold shadow-sm"
            >
              <SafeIcon name="CheckCircle2" size={18} className="mr-2" />
              Verify Pickup
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
