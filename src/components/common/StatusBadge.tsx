
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils'
export interface StatusBadgeProps {
  status: 'pending' | 'packed' | 'dispatched' | 'received' | 'completed' | 'cancelled' | 'available' | 'out_of_stock';
  size?: 'sm' | 'md' | 'lg';
}

const statusConfig: Record<StatusBadgeProps['status'], { label: string; className: string }> = {
  pending: { label: 'Pending', className: 'status-pending' },
  packed: { label: 'Packed', className: 'status-active' },
  dispatched: { label: 'Dispatched', className: 'status-active' },
  received: { label: 'Received', className: 'status-completed' },
  completed: { label: 'Completed', className: 'status-completed' },
  cancelled: { label: 'Cancelled', className: 'status-cancelled' },
  available: { label: 'Available', className: 'status-completed' },
  out_of_stock: { label: 'Out of Stock', className: 'status-cancelled' },
};

const sizeStyles: Record<NonNullable<StatusBadgeProps['size']>, string> = {
  sm: 'px-2 py-0.5 text-xs font-semibold',
  md: 'px-2.5 py-1 text-sm font-semibold',
  lg: 'px-3 py-1.5 text-base font-bold',
};

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border transition-colors duration-200 whitespace-nowrap",
        config.className,
        sizeStyles[size]
      )}
    >
      {config.label}
    </span>
  );
}
