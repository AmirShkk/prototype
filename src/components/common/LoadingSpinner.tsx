
import React from 'react';
import { cn } from '@/lib/utils';
import SafeIcon from '@/components/common/SafeIcon';

interface LoadingSpinnerProps {
  /**
   * Size of the spinner icon
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Optional text to display below the spinner
   */
  text?: string;
  /**
   * Additional classes for the container
   */
  className?: string;
}

/**
 * Animated spinner for loading states. 
 * Used during data fetching and payment processing across the application.
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text,
  className,
}) => {
  const sizeMap = {
    sm: { icon: 16, text: 'text-xs' },
    md: { icon: 24, text: 'text-sm' },
    lg: { icon: 40, text: 'text-base' },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 animate-in fade-in duration-500',
        className
      )}
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-center justify-center">
        {/* Animated outer ring */}
        <div 
          className={cn(
            "animate-spin text-primary",
            size === 'sm' && "h-4 w-4",
            size === 'md' && "h-6 w-6",
            size === 'lg' && "h-10 w-10"
          )}
        >
          <SafeIcon 
            name="Loader2" 
            size={currentSize.icon} 
            strokeWidth={2.5} 
          />
        </div>
        
        {/* Subtle background pulse for larger spinners */}
        {size === 'lg' && (
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
        )}
      </div>

      {text && (
        <p 
          className={cn(
            "text-muted-foreground font-medium animate-pulse",
            currentSize.text
          )}
        >
          {text}
        </p>
      )}
      
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
