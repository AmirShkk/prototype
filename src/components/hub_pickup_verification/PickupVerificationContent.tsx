
import React, { useState, useEffect } from 'react';
import { PickupVerificationService } from '@/data/PickupVerificationService';
import { OrderService } from '@/data/OrderService';
import type { PickupVerificationVO } from '@/data/PickupVerificationService';
import PickupVerificationList from './PickupVerificationList';
import PickupVerificationForm from './PickupVerificationForm';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';
import { toast } from 'sonner';

interface PickupVerificationContentProps {
  hubId: string;
}

export default function PickupVerificationContent({ hubId }: PickupVerificationContentProps) {
  const [isClient, setIsClient] = useState(true);
  const [verifications, setVerifications] = useState<PickupVerificationVO[]>(() => {
    const allVerifications = PickupVerificationService.query({
      filter: { hubId }
    });
    return allVerifications.map(v => PickupVerificationService.getByOrderIdVO(v.orderId)).filter(Boolean) as PickupVerificationVO[];
  });
  
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(() => {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    return params.get('orderId');
  });
  
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get('orderId');
      if (orderId) {
        setSelectedOrderId(orderId);
      }
      setIsClient(true);
    });
  }, []);

  const handleVerifyClick = (orderId: string) => {
    setSelectedOrderId(orderId);
  };

  const handleVerificationComplete = (orderId: string) => {
    setIsVerifying(true);
    setTimeout(() => {
      const verification = PickupVerificationService.getByOrderId(orderId);
      if (verification) {
        const updated = { ...verification, status: 'Completed' as const };
        const allVerifications = PickupVerificationService.getAll();
        const idx = allVerifications.findIndex(v => v.id === verification.id);
        if (idx >= 0) {
          allVerifications[idx] = updated;
          PickupVerificationService.savePersisted(allVerifications);
        }
      }
      
      setVerifications(prev => 
        prev.map(v => v.orderId === orderId ? { ...v, status: 'Completed' } : v)
      );
      
      toast.success('Pickup verified and completed successfully');
      setSelectedOrderId(null);
      setIsVerifying(false);
    }, 800);
  };

  const handleCancel = () => {
    setSelectedOrderId(null);
  };

  const handleBackToHub = () => {
    window.location.href = './hub-logistics.html';
  };

  const pendingVerifications = verifications.filter(v => v.status === 'Pending');

  if (!isClient) {
    return null;
  }

  if (selectedOrderId && isClient) {
    const selectedVerification = verifications.find(v => v.orderId === selectedOrderId);
    if (selectedVerification) {
      return (
        <PickupVerificationForm
          verification={selectedVerification}
          onComplete={handleVerificationComplete}
          onCancel={handleCancel}
          isLoading={isVerifying}
        />
      );
    }
  }

  return (
    <div className="page-body flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBackToHub}
            className="text-muted-foreground hover:text-foreground"
          >
            <SafeIcon name="ArrowLeft" size={20} />
          </Button>
          <div>
            <h1 className="text-page-title">Consumer Pickup Verification</h1>
            <p className="text-caption mt-1">Verify and complete consumer pickups</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0">
        <PickupVerificationList
          verifications={pendingVerifications}
          onVerifyClick={handleVerifyClick}
        />
      </div>
    </div>
  );
}
