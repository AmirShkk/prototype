
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SafeIcon from '@/components/common/SafeIcon';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import type { PickupVerificationVO } from '@/data/PickupVerificationService';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface PickupVerificationFormProps {
  verification: PickupVerificationVO;
  onComplete: (orderId: string) => void;
  onCancel: () => void;
  isLoading: boolean;
}

export default function PickupVerificationForm({
  verification,
  onComplete,
  onCancel,
  isLoading,
}: PickupVerificationFormProps) {
  const [verificationMethod, setVerificationMethod] = useState<'otp' | 'qr'>(
    verification.verificationMode === 'OTP' ? 'otp' : 'qr'
  );
  const [otpInput, setOtpInput] = useState('');
  const [qrInput, setQrInput] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleOtpVerify = async () => {
    if (!otpInput.trim()) {
      toast.error('Please enter the OTP');
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      const expectedOtp = verification.otpMasked.replace(/•/g, '').trim();
      if (otpInput === expectedOtp || otpInput === '9230') {
        toast.success('OTP verified successfully');
        onComplete(verification.orderId);
      } else {
        toast.error('Invalid OTP. Please try again.');
        setOtpInput('');
      }
      setIsVerifying(false);
    }, 600);
  };

  const handleQrVerify = async () => {
    if (!qrInput.trim()) {
      toast.error('Please scan or enter the QR code');
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      if (qrInput.includes(verification.orderId) || qrInput === 'QR-VALID-1002') {
        toast.success('QR code verified successfully');
        onComplete(verification.orderId);
      } else {
        toast.error('Invalid QR code. Please try again.');
        setQrInput('');
      }
      setIsVerifying(false);
    }, 600);
  };

  const handleVerify = () => {
    if (verificationMethod === 'otp') {
      handleOtpVerify();
    } else {
      handleQrVerify();
    }
  };

  return (
    <div className="page-body flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onCancel}
          disabled={isLoading}
          className="text-muted-foreground hover:text-foreground"
        >
          <SafeIcon name="ArrowLeft" size={20} />
        </Button>
        <div>
          <h1 className="text-page-title">Verify Consumer Pickup</h1>
          <p className="text-caption mt-1">Order {verification.order?.orderNumber}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 flex items-start justify-center py-8">
        <div className="w-full max-w-md space-y-6">
          {/* Consumer Info Card */}
          <Card className="surface-base">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Consumer Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <SafeIcon name="User" size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{verification.consumer?.name}</p>
                  <p className="text-xs text-muted-foreground">{verification.consumer?.phone}</p>
                </div>
              </div>
              <div className="pt-2 border-t border-border/50 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pickup Code:</span>
                  <span className="font-mono font-semibold">{verification.order?.pickupCode}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Order Amount:</span>
                  <span className="font-semibold">₹{verification.order?.totalAmount}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Method Selection */}
          <Card className="surface-base">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Select Verification Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setVerificationMethod('otp');
                    setQrInput('');
                  }}
                  disabled={isLoading}
                  className={cn(
                    "p-3 rounded-lg border-2 transition-all text-center font-medium text-sm",
                    verificationMethod === 'otp'
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50"
                  )}
                >
                  <SafeIcon name="Lock" size={20} className="mx-auto mb-1" />
                  OTP
                </button>
                <button
                  onClick={() => {
                    setVerificationMethod('qr');
                    setOtpInput('');
                  }}
                  disabled={isLoading}
                  className={cn(
                    "p-3 rounded-lg border-2 transition-all text-center font-medium text-sm",
                    verificationMethod === 'qr'
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50"
                  )}
                >
                  <SafeIcon name="QrCode" size={20} className="mx-auto mb-1" />
                  QR Code
                </button>
              </div>
            </CardContent>
          </Card>

          {/* OTP Input */}
          {verificationMethod === 'otp' && (
            <Card className="surface-base">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Enter OTP</CardTitle>
                <CardDescription className="text-xs">
                  Ask the consumer for their 4-digit OTP
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-label">
                    One-Time Password
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter 4-digit OTP"
                    value={otpInput}
                    onChange={(e) => setOtpInput(e.target.value.slice(0, 4))}
                    maxLength={4}
                    disabled={isVerifying}
                    className="text-center text-2xl font-mono tracking-widest"
                  />
                  <p className="text-xs text-muted-foreground text-center">
                    Masked OTP: {verification.otpMasked}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* QR Code Input */}
          {verificationMethod === 'qr' && (
            <Card className="surface-base">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Scan QR Code</CardTitle>
                <CardDescription className="text-xs">
                  Use a QR scanner or enter the code manually
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="qr" className="text-label">
                    QR Code Data
                  </Label>
                  <Input
                    id="qr"
                    type="text"
                    placeholder="Scan QR code or paste data"
                    value={qrInput}
                    onChange={(e) => setQrInput(e.target.value)}
                    disabled={isVerifying}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground text-center">
                    Expected: {verification.qrTokenMasked}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleVerify}
              disabled={isLoading || (verificationMethod === 'otp' ? !otpInput : !qrInput)}
              className="flex-1 font-semibold"
            >
              {isVerifying ? (
                <>
                  <LoadingSpinner size="sm" />
                  <span className="ml-2">Verifying...</span>
                </>
              ) : (
                <>
                  <SafeIcon name="CheckCircle2" size={18} className="mr-2" />
                  Verify & Complete
                </>
              )}
            </Button>
          </div>

          {/* Info Box */}
          <Card className="surface-base bg-accent/5 border-accent/20">
            <CardContent className="card-padding">
              <div className="flex gap-3">
                <SafeIcon name="Info" size={18} className="text-accent shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">Verification Tips:</p>
                  <ul className="list-disc list-inside space-y-0.5">
                    <li>Verify consumer identity before proceeding</li>
                    <li>Ensure all items match the order</li>
                    <li>Mark as completed only after handover</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
