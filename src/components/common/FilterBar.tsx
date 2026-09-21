
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterItem {
  id: string;
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

interface FilterBarProps {
  filters: FilterItem[];
  onReset?: () => void;
  className?: string;
}

/**
 * FilterBar Component
 * 
 * A flexible, responsive filter bar containing multiple select dropdowns and a reset action.
 * Adheres to "Filter Immediate Effect" rule: onChange is triggered immediately.
 */
const FilterBar: React.FC<FilterBarProps> = ({ filters, onReset, className }) => {
  return (
    <div className={cn("filter-bar flex flex-wrap gap-2 items-center", className)}>
      <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
        {(filters || []).map((filter) => (
          <div key={filter.id} className="flex flex-col gap-1.5">
            <Select
              value={filter.value || "all"}
              onValueChange={(val) => filter.onChange(val)}
            >
              <SelectTrigger 
                className="h-9 w-[160px] bg-card border-input hover:bg-muted/50 transition-colors whitespace-nowrap"
                aria-label={filter.label}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-muted-foreground font-normal shrink-0">
                    {filter.label}:
                  </span>
                  <SelectValue placeholder={filter.label} />
                </div>
              </SelectTrigger>
              <SelectContent>
                {(filter.options || []).map((option) => (
                  <SelectItem 
                    key={option.value} 
                    value={option.value || "all"}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      {onReset && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="h-9 px-3 text-muted-foreground hover:text-foreground shrink-0"
        >
          <SafeIcon name="RotateCcw" size={14} className="mr-2" />
          Reset Filters
        </Button>
      )}
    </div>
  );
};

export default FilterBar;
