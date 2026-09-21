
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import SafeIcon from '@/components/common/SafeIcon';

interface InventoryFiltersProps {
  filterStatus: string;
  onFilterStatusChange: (status: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function InventoryFilters({
  filterStatus,
  onFilterStatusChange,
  searchQuery,
  onSearchChange,
}: InventoryFiltersProps) {
  const [localSearch, setLocalSearch] = React.useState(searchQuery);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(localSearch);
    }, 300);

    return () => clearTimeout(timer);
  }, [localSearch, onSearchChange]);

  return (
    <div className="flex flex-wrap gap-3 items-center p-4 bg-muted/20 rounded-lg border border-border">
      {/* Search Input */}
      <div className="relative flex-1 min-w-[200px]">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <SafeIcon name="Search" size={16} strokeWidth={2} />
        </div>
        <Input
          type="text"
          placeholder="Search by product name or ID..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="pl-9 h-9 bg-card border-input"
        />
      </div>

      {/* Status Filter */}
      <Select value={filterStatus || 'all'} onValueChange={onFilterStatusChange}>
        <SelectTrigger className="w-[160px] h-9 bg-card border-input">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="Available">Available</SelectItem>
          <SelectItem value="Out of Stock">Out of Stock</SelectItem>
          <SelectItem value="Low Stock">Low Stock</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
