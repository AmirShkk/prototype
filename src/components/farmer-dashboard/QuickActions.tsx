import { cn } from '@/lib/utils'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'

export default function QuickActions() {
  const actions = [
    {
      id: 'add-product',
      title: 'Add New Product',
      description: 'List a new farm product for sale',
      icon: 'PlusCircle',
      action: () => {
        window.location.href = './add-product.html'
      },
      variant: 'primary' as const,
    },
    {
      id: 'view-inventory',
      title: 'View All Stocks',
      description: 'Manage your inventory and stock levels',
      icon: 'BarChart3',
      action: () => {
        window.location.href = './inventory-management.html'
      },
      variant: 'secondary' as const,
    },
    {
      id: 'pending-orders',
      title: 'Pending Deliveries',
      description: 'Orders awaiting packing and dispatch',
      icon: 'Truck',
      action: () => {
        window.location.href = './farmer-orders.html'
      },
      variant: 'accent' as const,
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-section-title">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {actions.map((action) => (
          <Card
            key={action.id}
            className="surface-base card-lift cursor-pointer overflow-hidden hover:shadow-card transition-all duration-200 border-2 hover:border-primary/30"
            onClick={action.action}
          >
            <CardContent className="card-padding flex flex-col items-start gap-4">
              <div
                className={cn(
                  'p-3 rounded-lg',
                  action.variant === 'primary' && 'bg-primary/10 text-primary',
                  action.variant === 'secondary' && 'bg-secondary/10 text-secondary',
                  action.variant === 'accent' && 'bg-accent/10 text-accent'
                )}
              >
                <SafeIcon name={action.icon} size={28} strokeWidth={2} />
              </div>
              <div className="space-y-1">
                <h3 className="text-item-title font-semibold">{action.title}</h3>
                <p className="text-caption">{action.description}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-2 self-start text-primary hover:text-primary hover:bg-primary/10 px-0"
                onClick={(e) => {
                  e.stopPropagation()
                  action.action()
                }}
              >
                Go to {action.title}
                <SafeIcon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
