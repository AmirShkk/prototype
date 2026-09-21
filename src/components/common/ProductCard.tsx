
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StatusBadge } from '@/components/common/StatusBadge';
import SafeIcon from '@/components/common/SafeIcon';
import { toast } from 'sonner';
import { cn } from '@/lib/utils'

export interface ProductCardProps {
  productId: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  imageUrl: string;
  farmerName: string;
  status: 'available' | 'out_of_stock';
  onAddToCart?: (productId: string) => void;
}

export function ProductCard({
  productId,
  name,
  category,
  price,
  unit,
  stock,
  imageUrl,
  farmerName,
  status,
  onAddToCart,
}: ProductCardProps) {
  const isOutOfStock = status === 'out_of_stock' || stock <= 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOutOfStock) return;
    
    if (onAddToCart) {
      onAddToCart(productId);
    } else {
      toast.success(`${name} added to cart`);
    }
  };

  const handleCardClick = () => {
    window.location.href = `./product-details.html?productId=${productId}`;
  };

  return (
    <Card 
      className="group relative h-full flex flex-col surface-base card-lift cursor-pointer overflow-hidden"
      onClick={handleCardClick}
    >
      {/* Product Image Wrapper */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <StatusBadge status={status} size="sm" />
        </div>
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur-sm border-none shadow-sm">
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-4 pb-0 space-y-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-item-title font-bold truncate">{name}</h3>
        </div>
        <div className="flex items-center text-caption gap-1">
          <SafeIcon name="User" size={14} className="text-primary" />
          <span className="truncate">{farmerName}</span>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-bold text-primary">₹{price}</span>
          <span className="text-caption">/ {unit}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <div className="flex-1 bg-muted h-1.5 rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full transition-all duration-300",
                stock > 10 ? "bg-success" : stock > 0 ? "bg-warning" : "bg-destructive"
              )}
              style={{ width: `${Math.min((stock / 50) * 100, 100)}%` }}
            />
          </div>
          <span className={cn(
            "text-xs font-medium whitespace-nowrap",
            stock === 0 ? "text-destructive" : "text-muted-foreground"
          )}>
            {stock > 0 ? `${stock} ${unit} left` : 'Sold out'}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full font-semibold shadow-sm" 
          disabled={isOutOfStock}
          onClick={handleAddToCart}
          variant={isOutOfStock ? "outline" : "default"}
        >
          {isOutOfStock ? (
            'Unavailable'
          ) : (
            <>
              <SafeIcon name="ShoppingCart" size={18} className="mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
