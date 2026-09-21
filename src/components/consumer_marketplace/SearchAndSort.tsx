
import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/common/SearchBar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SafeIcon from '@/components/common/SafeIcon';

interface SearchAndSortProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: 'price-asc' | 'price-desc' | 'newest';
  onSortChange: (value: string) => void;
}

export default function SearchAndSort({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: SearchAndSortProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="filter-bar flex flex-wrap gap-3 items-center">
        <div className="h-10 w-64 bg-muted rounded animate-pulse" />
        <div className="h-10 w-40 bg-muted rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="filter-bar flex flex-wrap gap-3 items-center">
      <div className="flex-1 min-w-[250px]">
        <SearchBar
          placeholder="Search products by name..."
          defaultValue={searchQuery}
          onSearch={onSearchChange}
        />
      </div>

      <div className="flex items-center gap-2">
        <SafeIcon name="ArrowUpDown" size={16} className="text-muted-foreground" />
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[160px] h-10 bg-card border-input">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
