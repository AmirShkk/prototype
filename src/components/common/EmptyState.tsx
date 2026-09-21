
import type { FC } from 'react';
import SafeIcon from '@/components/common/SafeIcon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
  /**
   * The name of the Lucide icon to display (PascalCase)
   */
  iconName: string;
  /**
   * Main heading for the empty state
   */
  title: string;
  /**
   * Supporting text providing more context or instructions
   */
  description: string;
  /**
   * Optional text for the Call to Action button
   */
  actionLabel?: string;
  /**
   * Optional click handler for the Call to Action button
   */
  onAction?: () => void;
  /**
   * Optional additional class names for the root container
   */
  className?: string;
}

/**
 * EmptyState component for providing feedback when no data is available.
 * Follows the visual patterns defined in global.css (.empty-state).
 */
const EmptyState: FC<EmptyStateProps> = ({
  iconName,
  title,
  description,
  actionLabel,
  onAction,
  className,
}) => {
  return (
    <div 
      className={cn(
        "empty-state flex flex-col items-center justify-center text-center py-16 px-6 max-w-md mx-auto animate-in fade-in duration-500", 
        className
      )}
    >
      <div className="mb-6 rounded-full bg-muted p-6 flex items-center justify-center text-muted-foreground/60 border border-border">
        <SafeIcon 
          name={iconName} 
          size={48} 
          strokeWidth={1.5} 
          color="currentColor" 
        />
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-[280px]">
        {description}
      </p>

      {actionLabel && onAction && (
        <Button 
          onClick={onAction}
          variant="secondary" 
          className="min-w-[140px] shadow-sm hover:shadow-md transition-shadow"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
