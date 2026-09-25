import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { c as cn, b as buttonVariants } from "./button.CREkWhZp.js";
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogPortal = AlertDialogPrimitive.Portal;
const AlertDialogOverlay = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Overlay, { className: cn("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref }));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { "data-source-file": "src/components/ui/alert-dialog.tsx", "data-source-line-start": "32", "data-source-line-end": "42", children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, { "data-source-file": "src/components/ui/alert-dialog.tsx", "data-source-line-start": "33", "data-source-line-end": "33" }),
  /* @__PURE__ */ jsx(AlertDialogPrimitive.Content, { ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props })
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props, "data-source-file": "src/components/ui/alert-dialog.tsx", "data-source-line-start": "50", "data-source-line-end": "56" });
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props, "data-source-file": "src/components/ui/alert-dialog.tsx", "data-source-line-start": "64", "data-source-line-end": "70" });
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Title, { ref, className: cn("text-lg font-semibold", className), ...props }));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, { ref, className: cn(buttonVariants(), className), ...props }));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Cancel, { ref, className: cn(buttonVariants({
  variant: "outline"
}), "mt-2 sm:mt-0", className), ...props }));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  variant = "default"
}) {
  const handleConfirm = (e) => {
    e.stopPropagation();
    onConfirm();
  };
  return /* @__PURE__ */ jsx(AlertDialog, { open, onOpenChange, "data-source-file": "src/components/common/ConfirmDialog.tsx", "data-source-line-start": "75", "data-source-line-end": "101", children: /* @__PURE__ */ jsxs(AlertDialogContent, { className: "max-w-[400px]", "data-source-file": "src/components/common/ConfirmDialog.tsx", "data-source-line-start": "76", "data-source-line-end": "100", children: [
    /* @__PURE__ */ jsxs(AlertDialogHeader, { "data-source-file": "src/components/common/ConfirmDialog.tsx", "data-source-line-start": "77", "data-source-line-end": "84", children: [
      /* @__PURE__ */ jsx(AlertDialogTitle, { className: "text-item-title", "data-source-file": "src/components/common/ConfirmDialog.tsx", "data-source-line-start": "78", "data-source-line-end": "80", children: title }),
      /* @__PURE__ */ jsx(AlertDialogDescription, { className: "text-caption", "data-source-file": "src/components/common/ConfirmDialog.tsx", "data-source-line-start": "81", "data-source-line-end": "83", children: description })
    ] }),
    /* @__PURE__ */ jsxs(AlertDialogFooter, { className: "mt-4 gap-2 sm:gap-0", "data-source-file": "src/components/common/ConfirmDialog.tsx", "data-source-line-start": "85", "data-source-line-end": "99", children: [
      /* @__PURE__ */ jsx(AlertDialogCancel, { className: cn(buttonVariants({
        variant: "outline"
      }), "mt-0"), "data-source-file": "src/components/common/ConfirmDialog.tsx", "data-source-line-start": "86", "data-source-line-end": "88", children: cancelLabel }),
      /* @__PURE__ */ jsx(AlertDialogAction, { onClick: handleConfirm, className: cn(variant === "destructive" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : "bg-primary text-primary-foreground hover:bg-primary/90"), "data-source-file": "src/components/common/ConfirmDialog.tsx", "data-source-line-start": "89", "data-source-line-end": "98", children: confirmLabel })
    ] })
  ] }) });
}
export {
  ConfirmDialog as C
};
