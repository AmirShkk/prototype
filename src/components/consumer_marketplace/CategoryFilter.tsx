
import React, { useState, useEffect } from 'react';
import type { CategoryData } from '@/data/CategoryData';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: CategoryData[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 w-24 bg-muted rounded-full animate-pulse flex-shrink-0" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-label uppercase tracking-wider text-xs text-muted-foreground">
        Filter by Category
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 border',
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground border-primary shadow-md'
              : 'bg-card border-border text-foreground hover:border-primary/50 hover:bg-muted/50'
          )}
        >
          <SafeIcon name="Grid3x3" size={16} />
          All Products
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 border',
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground border-primary shadow-md'
                : 'bg-card border-border text-foreground hover:border-primary/50 hover:bg-muted/50'
            )}
          >
            <SafeIcon name={category.iconName} size={16} />
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
