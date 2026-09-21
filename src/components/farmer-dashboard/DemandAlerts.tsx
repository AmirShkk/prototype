
import React from 'react'
import type { ProductData } from '@/data/ProductData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import SafeIcon from '@/components/common/SafeIcon'
import EmptyState from '@/components/common/EmptyState'

interface DemandAlertsProps {
  products: ProductData[]
}

export default function DemandAlerts({ products }: DemandAlertsProps) {
  const handleManageInventory = () => {
    window.location.href = './inventory-management.html'
  }

  if (!products || products.length === 0) {
    return (
      <Card className="surface-base border-accent/20 bg-accent/5">
        <CardHeader className="card-padding pb-0">
          <CardTitle className="text-section-title flex items-center gap-2">
            <SafeIcon name="Zap" size={24} className="text-accent" />
            High-Demand Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="card-padding">
          <div className="text-center py-8">
            <SafeIcon name="CheckCircle2" size={48} className="mx-auto mb-4 text-success" />
            <h3 className="text-item-title font-semibold mb-1">All Stocked!</h3>
            <p className="text-caption">Your inventory levels are healthy. No restocking alerts at this time.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="surface-base border-accent/20 bg-accent/5 overflow-hidden">
      <CardHeader className="card-padding pb-4 border-b border-accent/20 flex flex-row items-center justify-between">
        <CardTitle className="text-section-title flex items-center gap-2">
          <SafeIcon name="AlertTriangle" size={24} className="text-accent" />
          High-Demand Alerts
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleManageInventory}
          className="text-accent hover:text-accent hover:bg-accent/10"
        >
          Manage Stock
          <SafeIcon name="ArrowRight" size={16} className="ml-2" />
        </Button>
      </CardHeader>
      <CardContent className="card-padding space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-start justify-between p-4 rounded-lg bg-background border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer group"
            onClick={() => window.location.href = './inventory-management.html'}
          >
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <h4 className="text-item-title font-semibold group-hover:text-accent transition-colors">
                  {product.name}
                </h4>
                <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                  {product.stockQty} {product.unit} left
                </Badge>
              </div>
              <p className="text-caption">
                Category: <span className="font-medium text-foreground">{product.categoryId}</span>
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 ml-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">₹{product.pricePerUnit}</p>
                <p className="text-caption">per {product.unit}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  window.location.href = './inventory-management.html'
                }}
                className="text-accent hover:text-accent hover:bg-accent/10"
              >
                <SafeIcon name="Edit" size={16} />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
