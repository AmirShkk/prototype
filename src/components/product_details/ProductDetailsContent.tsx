
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import SafeIcon from '@/components/common/SafeIcon';
import { StatusBadge } from '@/components/common/StatusBadge';
import FarmerCard from '@/components/product_details/FarmerCard';
import ReviewsSection from '@/components/product_details/ReviewsSection';
import RelatedProducts from '@/components/product_details/RelatedProducts';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import * as ProductService from '@/data/ProductService';
import type { ProductVO } from '@/data/ProductService';

export default function ProductDetailsContent() {
  const [isClient, setIsClient] = useState(true);
  const [product, setProduct] = useState<ProductVO | null>(() => {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const productId = params.get('productId');
    
    if (productId) {
      return ProductService.getByIdVO(productId) ?? ProductService.getByIdVO(ProductService.getAll()[0]?.id || '') ?? null;
    }
    
    const firstProduct = ProductService.getAll()[0];
    return firstProduct ? ProductService.getByIdVO(firstProduct.id) : null;
  });

  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('productId');
    
    if (productId) {
      const foundProduct = ProductService.getByIdVO(productId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }

    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);

  if (!product) {
    return (
      <div className="page-body flex items-center justify-center min-h-[60vh]">
        <div className="text-center space-y-4">
          <SafeIcon name="AlertCircle" size={48} className="mx-auto text-destructive" />
          <h2 className="text-xl font-semibold">Product Not Found</h2>
          <p className="text-muted-foreground">The product you're looking for is no longer available.</p>
          <Button onClick={() => window.location.href = './consumer-marketplace.html'}>
            Back to Marketplace
          </Button>
        </div>
      </div>
    );
  }

  const isOutOfStock = product.status === 'Out of Stock' || product.stockQty <= 0;
  const maxQuantity = Math.min(quantity + product.stockQty - 1, product.stockQty);

  const handleAddToCart = async () => {
    if (isOutOfStock) return;
    
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    toast.success(`${quantity} × ${product.name} added to cart`, {
      description: `₹${(product.pricePerUnit * quantity).toLocaleString('en-IN')} total`,
    });
    
    setIsAddingToCart(false);
    setQuantity(1);
  };

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}?productId=${product.id}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success('Product link copied to clipboard');
    }).catch(() => {
      toast.error('Failed to copy link');
    });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0 && val <= product.stockQty) {
      setQuantity(val);
    }
  };

  return (
    <div className="page-body space-y-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <button 
          onClick={() => window.location.href = './consumer-marketplace.html'}
          className="hover:text-foreground transition-colors flex items-center gap-1"
        >
          <SafeIcon name="ArrowLeft" size={16} />
          Marketplace
        </button>
        <span>/</span>
        <span className="text-foreground font-medium truncate">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Product Image */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-muted/30 shadow-sm">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm border-none shadow-sm">
                {product.category?.name || 'Product'}
              </Badge>
              {product.organicCertified && (
                <Badge className="bg-success/20 text-success border-success/30 shadow-sm">
                  <SafeIcon name="Leaf" size={12} className="mr-1" />
                  Organic
                </Badge>
              )}
            </div>
            <div className="absolute top-4 right-4">
              <StatusBadge status={product.status === 'Available' ? 'available' : 'out_of_stock'} size="md" />
            </div>
          </div>

          {/* Product Info Card */}
          <Card className="surface-raised">
            <CardHeader>
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                    {product.name}
                  </h1>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-caption uppercase tracking-wider">Harvest Date</span>
                    <p className="text-lg font-semibold text-foreground">
                      {new Date(product.harvestDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-caption uppercase tracking-wider">Unit</span>
                    <p className="text-lg font-semibold text-foreground capitalize">
                      {product.unit}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      ₹{product.pricePerUnit}
                    </span>
                    <span className="text-lg text-muted-foreground">
                      / {product.unit}
                    </span>
                  </div>
                  {quantity > 1 && (
                    <div className="text-sm text-muted-foreground">
                      Total: <span className="font-semibold text-foreground">
                        ₹{(product.pricePerUnit * quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Stock Status */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-caption font-medium uppercase tracking-wider">
                    Stock Available
                  </span>
                  <span className={cn(
                    "text-sm font-semibold",
                    product.stockQty > 10 ? "text-success" : product.stockQty > 0 ? "text-warning" : "text-destructive"
                  )}>
                    {product.stockQty} {product.unit}
                  </span>
                </div>
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-300",
                      product.stockQty > 10 ? "bg-success" : product.stockQty > 0 ? "bg-warning" : "bg-destructive"
                    )}
                    style={{ width: `${Math.min((product.stockQty / 50) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Quantity Selector */}
              {!isOutOfStock && (
                <div className="space-y-3">
                  <label className="text-caption font-medium uppercase tracking-wider block">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="h-10 w-10"
                    >
                      <SafeIcon name="Minus" size={18} />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      max={product.stockQty}
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="h-10 w-20 text-center font-semibold"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.min(product.stockQty, quantity + 1))}
                      disabled={quantity >= product.stockQty}
                      className="h-10 w-10"
                    >
                      <SafeIcon name="Plus" size={18} />
                    </Button>
                    <span className="text-sm text-muted-foreground ml-auto">
                      Max: {product.stockQty}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  size="lg"
                  className="flex-1 font-semibold shadow-sm"
                  disabled={isOutOfStock || isAddingToCart}
                  onClick={handleAddToCart}
                >
                  {isAddingToCart ? (
                    <>
                      <SafeIcon name="Loader2" size={18} className="mr-2 animate-spin" />
                      Adding...
                    </>
                  ) : (
                    <>
                      <SafeIcon name="ShoppingCart" size={18} className="mr-2" />
                      {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleShare}
                  className="px-4"
                >
                  <SafeIcon name="Share2" size={18} />
                </Button>
              </div>

              {product.minOrderQty > 1 && (
                <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg text-sm text-accent">
                  <SafeIcon name="Info" size={14} className="inline mr-2" />
                  Minimum order: {product.minOrderQty} {product.unit}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Farmer Card */}
          {product.farmer && (
            <FarmerCard farmer={product.farmer} />
          )}

          {/* Reviews Section */}
          <ReviewsSection productId={product.id} />
        </div>

        {/* Right: Related Products */}
        <div className="lg:col-span-1">
          <RelatedProducts currentProductId={product.id} categoryId={product.categoryId} />
        </div>
      </div>
    </div>
  );
}
