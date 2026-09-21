
import React, { useMemo } from 'react';
import { toast } from 'sonner';
import * as ProductService from '@/data/ProductService';
import * as CategoryService from '@/data/CategoryService';
import { ProductCard } from '@/components/common/ProductCard';
import SearchAndSort from '@/components/consumer_marketplace/SearchAndSort';
import CategoryFilter from '@/components/consumer_marketplace/CategoryFilter';
import EmptyState from '@/components/common/EmptyState';
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface CartItem {
  productId: string;
  quantity: number;
}

export default function MarketplaceContent() {
  const [isClient, setIsClient] = React.useState(true);
  const [allProducts] = React.useState(() => ProductService.getAll());
  const [allCategories] = React.useState(() => CategoryService.getAll());
  
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [sortBy, setSortBy] = React.useState<'price-asc' | 'price-desc' | 'newest'>('newest');
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    setIsClient(false);
    
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    const searchParam = params.get('searchQuery');

    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(decodeURIComponent(searchParam));
    }

    const savedCart = window.localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }

    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);

  const filteredProducts = useMemo(() => {
    let result = allProducts;

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.categoryId === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.pricePerUnit - b.pricePerUnit);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.pricePerUnit - a.pricePerUnit);
    } else if (sortBy === 'newest') {
      result = [...result].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    }

    return result;
  }, [allProducts, activeCategory, searchQuery, sortBy]);

  const handleAddToCart = (productId: string) => {
    const product = allProducts.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find((item) => item.productId === productId);
    let updatedCart: CartItem[];

    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cartItems, { productId, quantity: 1 }];
    }

    setCartItems(updatedCart);
    window.localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(`${product.name} added to cart!`);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    const newUrl = categoryId === 'all'
      ? './consumer-marketplace.html'
      : `./consumer-marketplace.html?category=${categoryId}`;
    window.history.replaceState({}, '', newUrl);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const params = new URLSearchParams();
    if (activeCategory !== 'all') {
      params.set('category', activeCategory);
    }
    if (query.trim()) {
      params.set('searchQuery', encodeURIComponent(query));
    }
    const newUrl = params.toString()
      ? `./consumer-marketplace.html?${params.toString()}`
      : './consumer-marketplace.html';
    window.history.replaceState({}, '', newUrl);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value as 'price-asc' | 'price-desc' | 'newest');
  };

  return (
    <div className="page-body space-y-8">
      <div className="space-y-2">
        <h1 className="text-page-title">Fresh Farm Marketplace</h1>
        <p className="text-body text-muted-foreground">
          Browse fresh, organic produce directly from local farmers. Fair prices, quality guaranteed.
        </p>
      </div>

      {isClient && (
        <>
          <SearchAndSort
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            sortBy={sortBy}
            onSortChange={handleSortChange}
          />

          <CategoryFilter
            categories={allCategories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </>
      )}

      {filteredProducts.length === 0 ? (
        <EmptyState
          iconName="Search"
          title="No Products Found"
          description={
            searchQuery
              ? `No products match "${searchQuery}". Try adjusting your search or filters.`
              : 'No products available in this category at the moment.'
          }
          actionLabel="Clear Filters"
          onAction={() => {
            setActiveCategory('all');
            setSearchQuery('');
            window.location.href = './consumer-marketplace.html';
          }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const farmer = ProductService.getByIdVO(product.id)?.farmer;
            return (
              <ProductCard
                key={product.id}
                productId={product.id}
                name={product.name}
                category={ProductService.getByIdVO(product.id)?.category?.name || 'Unknown'}
                price={product.pricePerUnit}
                unit={product.unit}
                stock={product.stockQty}
                imageUrl={product.imageUrl}
                farmerName={farmer?.name || 'Unknown Farmer'}
                status={product.status === 'Available' && product.stockQty > 0 ? 'available' : 'out_of_stock'}
                onAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      )}

      <div className="py-8 text-center border-t border-border">
        <p className="text-caption">
          Showing {filteredProducts.length} of {allProducts.length} products
        </p>
      </div>
    </div>
  );
}
