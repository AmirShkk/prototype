import type { Activity } from '@/components/hub_dashboard/HubActivityLog';
import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';
import StatsCard from '@/components/common/StatsCard';
import HubActionCard from '@/components/hub_dashboard/HubActionCard';
import HubActivityLog from '@/components/hub_dashboard/HubActivityLog';
import * as HubService from '@/data/HubService';
import * as NotificationService from '@/data/NotificationService';

export default function HubDashboardContent() {
  const [isClient, setIsClient] = useState(true);

  // Initialize data synchronously at component top
  const hubData = useMemo(() => HubService.getAll()[0] || null, []);
  const notifications = useMemo(
    () => hubData ? NotificationService.getByRecipient('Hub', hubData.id) : [],
    [hubData]
  );

  // Mock activity log data (L3 strategy - no service exists yet)
  const activityLog:Activity[] = useMemo(() => [
    {
      id: 'act-001',
      type: 'delivery_received',
      title: 'Delivery Received from Farmer',
      description: 'Fresh Spinach Bundle from Sushila Devi',
      timestamp: '2026-09-06 09:30 AM',
      status: 'completed',
      farmerName: 'Sushila Devi',
      productName: 'Fresh Spinach Bundle',
      quantity: '25 kg',
    },
    {
      id: 'act-002',
      type: 'consumer_pickup',
      title: 'Consumer Pickup Completed',
      description: 'Order FGC-2026-1003 picked up by Ananya Roy',
      timestamp: '2026-09-06 08:15 AM',
      status: 'completed',
      consumerName: 'Ananya Roy',
      orderId: 'FGC-2026-1003',
    },
    {
      id: 'act-003',
      type: 'delivery_pending',
      title: 'Delivery Pending',
      description: 'Tomato Crate from Rajesh Kumar - Expected 10:00 AM',
      timestamp: '2026-09-06 09:45 AM',
      status: 'pending',
      farmerName: 'Rajesh Kumar',
      productName: 'Tomato Crate',
      quantity: '40 kg',
    },
    {
      id: 'act-004',
      type: 'consumer_pickup',
      title: 'Consumer Pickup Pending',
      description: 'Order FGC-2026-1004 awaiting pickup by Vikram Singh',
      timestamp: '2026-09-06 10:20 AM',
      status: 'pending',
      consumerName: 'Vikram Singh',
      orderId: 'FGC-2026-1004',
    },
  ], []);

  // 1→0→1 hydration process
  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);

  if (!hubData) {
    return (
      <div className="page-body">
        <div className="text-center py-16">
          <p className="text-muted-foreground">Hub data not available</p>
        </div>
      </div>
    );
  }

  const unreadNotifications = notifications.filter(n => !n.isRead).length;
  const pendingDeliveries = activityLog.filter(a => a.type === 'delivery_pending').length;
  const pendingPickups = activityLog.filter(a => a.type === 'consumer_pickup' && a.status === 'pending').length;

  return (
    <div className="page-body space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-page-title">Hub Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {hubData.managerName}. Manage incoming deliveries and consumer pickups.
        </p>
      </div>

      {/* Hub Info Card */}
      <Card className="surface-raised border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{hubData.name}</CardTitle>
              <CardDescription className="mt-1">{hubData.code}</CardDescription>
            </div>
            <div className="text-right space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success border border-success/20">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-semibold">Operational</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1">
              <p className="text-caption">Location</p>
              <p className="font-semibold text-foreground">{hubData.city}, {hubData.region}</p>
            </div>
            <div className="space-y-1">
              <p className="text-caption">Manager</p>
              <p className="font-semibold text-foreground">{hubData.managerName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-caption">Contact</p>
              <p className="font-semibold text-foreground">{hubData.phone}</p>
            </div>
            <div className="space-y-1">
              <p className="text-caption">Operating Hours</p>
              <p className="font-semibold text-foreground">{hubData.operatingHours}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Pending Deliveries"
          value={pendingDeliveries}
          iconName="Inbox"
          variant="primary"
        />
        <StatsCard
          title="Pending Pickups"
          value={pendingPickups}
          iconName="ShoppingCart"
          variant="secondary"
        />
        <StatsCard
          title="Unread Alerts"
          value={unreadNotifications}
          iconName="Bell"
          variant="accent"
        />
        <StatsCard
          title="Total Transactions"
          value={activityLog.length}
          iconName="BarChart3"
          variant="muted"
        />
      </div>

      {/* Action Cards Grid */}
      <div className="space-y-4">
        <h2 className="text-section-title">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <HubActionCard
            title="Incoming Logs"
            description="Track farmer deliveries and verify receipts"
            iconName="TrendingDown"
            actionLabel="View Logs"
            onClick={() => window.location.href = './hub-logistics.html'}
          />
          <HubActionCard
            title="Receive Delivery"
            description="Check-in new products from farmers"
            iconName="Truck"
            actionLabel="Receive"
            onClick={() => window.location.href = './hub-receiving-log.html'}
          />
          <HubActionCard
            title="Consumer Pickup"
            description="Verify and process consumer pickups"
            iconName="Users"
            actionLabel="Verify"
            onClick={() => window.location.href = './hub-pickup-verification.html'}
          />
          <HubActionCard
            title="Track Record"
            description="View complete audit trail and ledger"
            iconName="FileText"
            actionLabel="View Ledger"
            onClick={() => window.location.href = './hub-ledger.html'}
          />
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-section-title">Recent Activity</h2>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
            View All
            <SafeIcon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
        <HubActivityLog activities={activityLog.slice(0, 5)} />
      </div>
    </div>
  );
}
