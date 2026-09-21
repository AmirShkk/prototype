import { cn } from '@/lib/utils'
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/common/ProductCard';
import SafeIcon from '@/components/common/SafeIcon';
import * as ProductService from '@/data/ProductService';
import * as FarmerService from '@/data/FarmerService';

interface RelatedProductsProps {
  currentProductId: string;
  categoryId: string;
}

export default function RelatedProducts({ currentProductId, categoryId }: RelatedProductsProps) {
  const [relatedProducts] = useState(() => {
    const allProducts = ProductService.getAll();
    return allProducts
      .filter(p => p.categoryId === categoryId && p.id !== currentProductId)
      .slice(0, 4);
  });

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <Card className="surface-raised sticky top-24">
      <CardHeader>
        <CardTitle className="text-lg">Related Products</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {relatedProducts.map((product) => {
          const farmer = FarmerService.getById(product.farmerId);
          return (
            <button
              key={product.id}
              onClick={() => window.location.href = `./product-details.html?productId=${product.id}`}
              className="w-full text-left group"
            >
              <div className="flex gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-200">
                <div className="relative w-16 h-16 rounded overflow-hidden shrink-0 bg-muted">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {farmer?.name || 'Unknown Farmer'}
                  </p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-sm font-bold text-primary">
                      ₹{product.pricePerUnit}
                    </span>
                    <span className={cn(
                      "text-xs font-medium px-1.5 py-0.5 rounded",
                      product.stockQty > 0
                        ? "bg-success/10 text-success"
                        : "bg-destructive/10 text-destructive"
                    )}>
                      {product.stockQty > 0 ? `${product.stockQty} left` : 'Out'}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}

        <Button
          variant="outline"
          className="w-full mt-4"
          onClick={() => window.location.href = `./consumer-marketplace.html?category=${categoryId}`}
        >
          <SafeIcon name="ArrowRight" size={16} className="mr-2" />
          View All in Category
        </Button>
      </CardContent>
    </Card>
  );
}
