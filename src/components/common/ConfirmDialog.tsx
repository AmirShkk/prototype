
import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ConfirmDialogProps {
  /**
   * Controlled open state of the dialog
   */
  open: boolean;
  /**
   * Callback fired when the open state changes
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Main heading text for the dialog
   */
  title: string;
  /**
   * Supportive descriptive text explaining the consequences of the action
   */
  description: string;
  /**
   * Text for the confirmation button. Defaults to 'Confirm'
   */
  confirmLabel?: string;
  /**
   * Text for the cancellation button. Defaults to 'Cancel'
   */
  cancelLabel?: string;
  /**
   * Callback fired when the confirmation button is clicked
   */
  onConfirm: () => void;
  /**
   * Visual style of the confirmation button.
   * 'destructive' uses the theme's destructive colors (red).
   * 'default' uses the primary theme color (green).
   */
  variant?: 'default' | 'destructive';
}

/**
 * Reusable confirmation modal for destructive or important actions.
 * Built using shadcn/ui AlertDialog components.
 */
export default function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  variant = 'default',
}: ConfirmDialogProps) {
  
  const handleConfirm = (e: React.MouseEvent) => {
    // Prevent event bubbling if necessary
    e.stopPropagation();
    onConfirm();
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-[400px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-item-title">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-caption">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4 gap-2 sm:gap-0">
          <AlertDialogCancel className={cn(buttonVariants({ variant: "outline" }), "mt-0")}>
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            className={cn(
              variant === 'destructive' 
                ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" 
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
