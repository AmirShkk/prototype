import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { B as Button, c as cn } from "../button.CEA35CrV.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../card.CNTisMc0.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "../table.Ckl45E3q.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "../select.CmN5dfe2.js";
import { E as EmptyState } from "../EmptyState.DgJ8Yi6C.js";
import { S as StatusBadge } from "../StatusBadge.CWDBgqR0.js";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { S as Separator } from "../separator.Bl_sPyh_.js";
import { O as OrderTimeline } from "../OrderTimeline.24JFbvnM.js";
import { a as getById } from "../ProductService.CADRtByu.js";
import { C as ConfirmDialog } from "../ConfirmDialog.j5DdCoeh.js";
import { toast } from "sonner";
import { g as getByFarmerId, s as savePersisted } from "../OrderService.DlXVTjI7.js";
import { g as getByOrderId } from "../OrderItemService.D9ko_rx0.js";
import { renderers } from "../renderers.mjs";
const FilterBar = ({
  filters,
  onReset,
  className
}) => {
  return /* @__PURE__ */ jsxs("div", { className: cn("filter-bar flex flex-wrap gap-2 items-center", className), "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "41", "data-source-line-end": "86", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-2 flex-1 min-w-0", "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "42", "data-source-line-end": "73", children: (filters || []).map((filter) => /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1.5", "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "44", "data-source-line-end": "71", children: /* @__PURE__ */ jsxs(Select, { value: filter.value || "all", onValueChange: (val) => filter.onChange(val), "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "45", "data-source-line-end": "70", children: [
      /* @__PURE__ */ jsx(SelectTrigger, { className: "h-9 w-[160px] bg-card border-input hover:bg-muted/50 transition-colors whitespace-nowrap", "aria-label": filter.label, "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "49", "data-source-line-end": "59", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 truncate", "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "53", "data-source-line-end": "58", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground font-normal shrink-0", "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "54", "data-source-line-end": "56", children: [
          filter.label,
          ":"
        ] }),
        /* @__PURE__ */ jsx(SelectValue, { placeholder: filter.label, "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "57", "data-source-line-end": "57" })
      ] }) }),
      /* @__PURE__ */ jsx(SelectContent, { "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "60", "data-source-line-end": "69", children: (filter.options || []).map((option) => /* @__PURE__ */ jsx(SelectItem, { value: option.value || "all", "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "62", "data-source-line-end": "67", children: option.label }, option.value)) })
    ] }) }, filter.id)) }),
    onReset && /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: onReset, className: "h-9 px-3 text-muted-foreground hover:text-foreground shrink-0", "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "76", "data-source-line-end": "84", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "RotateCcw", size: 14, className: "mr-2", "data-source-file": "src/components/common/FilterBar.tsx", "data-source-line-start": "82", "data-source-line-end": "82" }),
      "Reset Filters"
    ] })
  ] });
};
const Sheet = SheetPrimitive.Root;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Overlay, { className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref }));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
    }
  },
  defaultVariants: {
    side: "right"
  }
});
const SheetContent = React.forwardRef(({
  side = "right",
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(SheetPortal, { "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "60", "data-source-line-end": "73", children: [
  /* @__PURE__ */ jsx(SheetOverlay, { "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "61", "data-source-line-end": "61" }),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({
    side
  }), className), ...props, children: [
    /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsx(X, { className: "h-4 w-4", "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "68", "data-source-line-end": "68" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "69", "data-source-line-end": "69", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props, "data-source-file": "src/components/ui/sheet.tsx", "data-source-line-start": "81", "data-source-line-end": "87" });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
function OrderDetailSheet({
  open,
  onOpenChange,
  order,
  items
}) {
  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case "Pending":
        return "pending";
      case "Packed":
        return "packed";
      case "Dispatched":
        return "dispatched";
      case "Arrived at Hub":
        return "received";
      case "Completed":
        return "completed";
      default:
        return "pending";
    }
  };
  const timelineStages = [{
    id: "ordered",
    label: "Ordered",
    status: "completed",
    timestamp: new Date(order.placedAt).toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }, {
    id: "packed",
    label: "At Farm",
    status: order.status === "Pending" ? "active" : order.status === "Packed" || order.status === "Dispatched" || order.status === "Arrived at Hub" || order.status === "Completed" ? "completed" : "pending",
    timestamp: order.packedAt ? new Date(order.packedAt).toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }) : void 0
  }, {
    id: "dispatched",
    label: "Dispatched",
    status: order.status === "Dispatched" || order.status === "Arrived at Hub" || order.status === "Completed" ? "completed" : order.status === "Packed" ? "active" : "pending",
    timestamp: order.dispatchedAt ? new Date(order.dispatchedAt).toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }) : void 0
  }, {
    id: "hub",
    label: "Arrived at Hub",
    status: order.status === "Arrived at Hub" || order.status === "Completed" ? "completed" : order.status === "Dispatched" ? "active" : "pending",
    timestamp: order.receivedAt ? new Date(order.receivedAt).toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }) : void 0
  }];
  return /* @__PURE__ */ jsx(Sheet, { open, onOpenChange, "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "119", "data-source-line-end": "263", children: /* @__PURE__ */ jsxs(SheetContent, { className: "flex flex-col max-w-2xl max-h-[80vh] overflow-y-auto", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "120", "data-source-line-end": "262", children: [
    /* @__PURE__ */ jsx(SheetHeader, { className: "flex-shrink-0", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "121", "data-source-line-end": "129", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "122", "data-source-line-end": "128", children: [
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "123", "data-source-line-end": "126", children: [
        /* @__PURE__ */ jsx(SheetTitle, { className: "text-2xl", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "124", "data-source-line-end": "124", children: "Order Details" }),
        /* @__PURE__ */ jsx(SheetDescription, { className: "mt-1", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "125", "data-source-line-end": "125", children: order.orderNumber })
      ] }),
      /* @__PURE__ */ jsx(StatusBadge, { status: getStatusBadgeVariant(order.status), size: "md", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "127", "data-source-line-end": "127" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto min-h-0 space-y-6 py-4", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "131", "data-source-line-end": "261", children: [
      /* @__PURE__ */ jsxs(Card, { className: "surface-base border-none shadow-sm", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "133", "data-source-line-end": "140", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "134", "data-source-line-end": "136", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "135", "data-source-line-end": "135", children: "Fulfillment Progress" }) }),
        /* @__PURE__ */ jsx(CardContent, { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "137", "data-source-line-end": "139", children: /* @__PURE__ */ jsx(OrderTimeline, { stages: timelineStages, "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "138", "data-source-line-end": "138" }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "surface-base border-none shadow-sm", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "143", "data-source-line-end": "177", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "144", "data-source-line-end": "146", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "145", "data-source-line-end": "145", children: "Order Summary" }) }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "147", "data-source-line-end": "176", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "148", "data-source-line-end": "175", children: [
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "149", "data-source-line-end": "152", children: [
            /* @__PURE__ */ jsx("p", { className: "text-caption text-muted-foreground mb-1", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "150", "data-source-line-end": "150", children: "Order ID" }),
            /* @__PURE__ */ jsx("p", { className: "font-mono text-sm font-semibold", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "151", "data-source-line-end": "151", children: order.id })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "153", "data-source-line-end": "156", children: [
            /* @__PURE__ */ jsx("p", { className: "text-caption text-muted-foreground mb-1", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "154", "data-source-line-end": "154", children: "Order Number" }),
            /* @__PURE__ */ jsx("p", { className: "font-semibold", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "155", "data-source-line-end": "155", children: order.orderNumber })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "157", "data-source-line-end": "168", children: [
            /* @__PURE__ */ jsx("p", { className: "text-caption text-muted-foreground mb-1", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "158", "data-source-line-end": "158", children: "Placed At" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "159", "data-source-line-end": "167", children: new Date(order.placedAt).toLocaleDateString("en-IN", {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "169", "data-source-line-end": "174", children: [
            /* @__PURE__ */ jsx("p", { className: "text-caption text-muted-foreground mb-1", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "170", "data-source-line-end": "170", children: "Payment Status" }),
            /* @__PURE__ */ jsx(Badge, { variant: order.paymentStatus === "Paid" ? "default" : "outline", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "171", "data-source-line-end": "173", children: order.paymentStatus })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "surface-base border-none shadow-sm", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "180", "data-source-line-end": "207", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "181", "data-source-line-end": "183", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-base", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "182", "data-source-line-end": "182", children: [
          "Items (",
          items.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "184", "data-source-line-end": "206", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "185", "data-source-line-end": "205", children: items.map((item) => {
          const product = getById(item.productId);
          return /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between p-3 bg-muted/30 rounded-lg border border-border/50", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "189", "data-source-line-end": "202", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "193", "data-source-line-end": "198", children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-sm truncate", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "194", "data-source-line-end": "194", children: product?.name || "Unknown Product" }),
              /* @__PURE__ */ jsxs("p", { className: "text-caption text-muted-foreground mt-0.5", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "195", "data-source-line-end": "197", children: [
                item.quantity,
                " × ₹",
                item.unitPrice
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-right ml-4 shrink-0", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "199", "data-source-line-end": "201", children: /* @__PURE__ */ jsxs("p", { className: "font-semibold text-primary", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "200", "data-source-line-end": "200", children: [
              "₹",
              item.lineTotal
            ] }) })
          ] }, item.id);
        }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "surface-base border-none shadow-sm", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "210", "data-source-line-end": "233", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "211", "data-source-line-end": "213", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "212", "data-source-line-end": "212", children: "Pricing" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "214", "data-source-line-end": "232", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "215", "data-source-line-end": "218", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "216", "data-source-line-end": "216", children: "Subtotal" }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "217", "data-source-line-end": "217", children: [
              "₹",
              order.subtotalAmount
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "219", "data-source-line-end": "222", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "220", "data-source-line-end": "220", children: "Platform Fee" }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "221", "data-source-line-end": "221", children: [
              "₹",
              order.platformFee
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "223", "data-source-line-end": "226", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "224", "data-source-line-end": "224", children: "Delivery Fee" }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "225", "data-source-line-end": "225", children: [
              "₹",
              order.deliveryFee
            ] })
          ] }),
          /* @__PURE__ */ jsx(Separator, { className: "my-2", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "227", "data-source-line-end": "227" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center font-semibold text-base", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "228", "data-source-line-end": "231", children: [
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "229", "data-source-line-end": "229", children: "Total" }),
            /* @__PURE__ */ jsxs("span", { className: "text-primary", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "230", "data-source-line-end": "230", children: [
              "₹",
              order.totalAmount
            ] })
          ] })
        ] })
      ] }),
      order.fulfillmentNote && /* @__PURE__ */ jsxs(Card, { className: "surface-base border-none shadow-sm", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "237", "data-source-line-end": "244", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "238", "data-source-line-end": "240", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "239", "data-source-line-end": "239", children: "Fulfillment Notes" }) }),
        /* @__PURE__ */ jsx(CardContent, { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "241", "data-source-line-end": "243", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground leading-relaxed", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "242", "data-source-line-end": "242", children: order.fulfillmentNote }) })
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "surface-base border-none shadow-sm bg-primary/5 border-primary/20", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "248", "data-source-line-end": "260", children: /* @__PURE__ */ jsx(CardContent, { className: "card-padding", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "249", "data-source-line-end": "259", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "250", "data-source-line-end": "258", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 bg-primary/10 rounded-lg", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "251", "data-source-line-end": "253", children: /* @__PURE__ */ jsx(SafeIcon, { name: "QrCode", size: 24, className: "text-primary", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "252", "data-source-line-end": "252" }) }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "254", "data-source-line-end": "257", children: [
          /* @__PURE__ */ jsx("p", { className: "text-caption text-muted-foreground mb-0.5", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "255", "data-source-line-end": "255", children: "Consumer Pickup Code" }),
          /* @__PURE__ */ jsx("p", { className: "font-mono font-bold text-lg text-primary", "data-source-file": "src/components/farmer_orders/OrderDetailSheet.tsx", "data-source-line-start": "256", "data-source-line-end": "256", children: order.pickupCode })
        ] })
      ] }) }) })
    ] })
  ] }) });
}
function FarmerOrdersContent() {
  const farmerId = "far-001";
  const [orders, setOrders] = useState(() => getByFarmerId(farmerId));
  const [isClient, setIsClient] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    open: false,
    orderId: "",
    action: "packed"
  });
  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const filterParam = params.get("statusFilter");
      const orderIdParam = params.get("orderId");
      if (filterParam) {
        setStatusFilter(filterParam);
      }
      if (orderIdParam) {
        const order = orders.find((o) => o.id === orderIdParam);
        if (order) {
          const items = getByOrderId(order.id);
          setSelectedOrder({
            order,
            items
          });
          setIsDetailOpen(true);
        }
      }
      setIsClient(true);
    });
  }, []);
  const filteredOrders = useMemo(() => {
    let result = orders;
    if (statusFilter && statusFilter !== "all") {
      result = result.filter((o) => o.status === statusFilter);
    }
    return result.sort((a, b) => new Date(b.placedAt).getTime() - new Date(a.placedAt).getTime());
  }, [orders, statusFilter]);
  const handleStatusUpdate = (orderId, newStatus) => {
    const updatedOrders = orders.map((o) => o.id === orderId ? {
      ...o,
      status: newStatus,
      packedAt: newStatus === "Packed" ? (/* @__PURE__ */ new Date()).toISOString() : o.packedAt,
      dispatchedAt: newStatus === "Dispatched" ? (/* @__PURE__ */ new Date()).toISOString() : o.dispatchedAt
    } : o);
    setOrders(updatedOrders);
    savePersisted(updatedOrders);
    toast.success(`Order marked as ${newStatus}`, {
      description: `Order ${orderId} status updated successfully.`
    });
    setConfirmDialog({
      open: false,
      orderId: "",
      action: "packed"
    });
  };
  const handleViewDetails = (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    if (order) {
      const items = getByOrderId(order.id);
      setSelectedOrder({
        order,
        items
      });
      setIsDetailOpen(true);
    }
  };
  const handleBackClick = () => {
    window.location.href = "./farmer-dashboard.html";
  };
  const statusOptions = [{
    value: "all",
    label: "All Orders"
  }, {
    value: "Pending",
    label: "Pending"
  }, {
    value: "Packed",
    label: "Packed"
  }, {
    value: "Dispatched",
    label: "Dispatched"
  }];
  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case "Pending":
        return "pending";
      case "Packed":
        return "packed";
      case "Dispatched":
        return "dispatched";
      case "Arrived at Hub":
        return "received";
      case "Completed":
        return "completed";
      default:
        return "pending";
    }
  };
  const canMarkAsPacked = (order) => {
    return order.status === "Pending";
  };
  const canMarkAsDispatched = (order) => {
    return order.status === "Packed";
  };
  if (!isClient) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "page-body space-y-6", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "151", "data-source-line-end": "300", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "153", "data-source-line-end": "173", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "154", "data-source-line-end": "168", children: [
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: handleBackClick, className: "h-10 w-10", "aria-label": "Go back to dashboard", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "155", "data-source-line-end": "163", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 20, strokeWidth: 2, "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "162", "data-source-line-end": "162" }) }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "164", "data-source-line-end": "167", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-page-title", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "165", "data-source-line-end": "165", children: "Pending Deliveries" }),
            /* @__PURE__ */ jsx("p", { className: "text-caption mt-1", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "166", "data-source-line-end": "166", children: "Manage orders ready for dispatch to hub" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "169", "data-source-line-end": "172", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "170", "data-source-line-end": "170", children: filteredOrders.length }),
          /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "171", "data-source-line-end": "171", children: "Orders to fulfill" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FilterBar, { filters: [{
        id: "status",
        label: "Status",
        options: statusOptions,
        value: statusFilter || "all",
        onChange: (val) => setStatusFilter(val === "all" ? "" : val)
      }], onReset: () => setStatusFilter(""), "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "176", "data-source-line-end": "187" }),
      filteredOrders.length === 0 ? /* @__PURE__ */ jsx(EmptyState, { iconName: "Package", title: "No Orders Found", description: statusFilter ? `No orders with status "${statusFilter}". Try adjusting your filters.` : "No pending orders at the moment. Check back soon!", actionLabel: statusFilter ? "Clear Filters" : void 0, onAction: statusFilter ? () => setStatusFilter("") : void 0, "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "191", "data-source-line-end": "201" }) : /* @__PURE__ */ jsx(Card, { className: "surface-base border-none shadow-sm overflow-hidden", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "203", "data-source-line-end": "298", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "204", "data-source-line-end": "297", children: /* @__PURE__ */ jsxs(Table, { "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "205", "data-source-line-end": "296", children: [
        /* @__PURE__ */ jsx(TableHeader, { "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "206", "data-source-line-end": "216", children: /* @__PURE__ */ jsxs(TableRow, { className: "border-b border-border hover:bg-transparent", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "207", "data-source-line-end": "215", children: [
          /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "208", "data-source-line-end": "208", children: "Order ID" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-28 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "209", "data-source-line-end": "209", children: "Order #" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "210", "data-source-line-end": "210", children: "Items" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "211", "data-source-line-end": "211", children: "Amount" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-28 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "212", "data-source-line-end": "212", children: "Status" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-40 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "213", "data-source-line-end": "213", children: "Placed At" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "214", "data-source-line-end": "214", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "217", "data-source-line-end": "295", children: filteredOrders.map((order) => /* @__PURE__ */ jsxs(TableRow, { className: "border-b border-border/50 hover:bg-muted/30 transition-colors", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "219", "data-source-line-end": "293", children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-sm text-muted-foreground", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "223", "data-source-line-end": "225", children: order.id }),
          /* @__PURE__ */ jsx(TableCell, { className: "font-semibold", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "226", "data-source-line-end": "226", children: order.orderNumber }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-center", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "227", "data-source-line-end": "231", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "bg-muted/50", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "228", "data-source-line-end": "230", children: order.quantityTotal }) }),
          /* @__PURE__ */ jsxs(TableCell, { className: "font-semibold text-primary", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "232", "data-source-line-end": "234", children: [
            "₹",
            order.totalAmount
          ] }),
          /* @__PURE__ */ jsx(TableCell, { "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "235", "data-source-line-end": "237", children: /* @__PURE__ */ jsx(StatusBadge, { status: getStatusBadgeVariant(order.status), size: "sm", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "236", "data-source-line-end": "236" }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-sm text-muted-foreground", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "238", "data-source-line-end": "245", children: new Date(order.placedAt).toLocaleDateString("en-IN", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) }),
          /* @__PURE__ */ jsx(TableCell, { "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "246", "data-source-line-end": "292", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "247", "data-source-line-end": "291", children: [
            /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: () => handleViewDetails(order.id), className: "h-8 px-2 text-xs", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "248", "data-source-line-end": "256", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "Eye", size: 14, className: "mr-1", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "254", "data-source-line-end": "254" }),
              "Details"
            ] }),
            canMarkAsPacked(order) && /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: () => setConfirmDialog({
              open: true,
              orderId: order.id,
              action: "packed"
            }), className: "h-8 px-2 text-xs border-primary/30 hover:bg-primary/5", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "258", "data-source-line-end": "272", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 14, className: "mr-1", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "270", "data-source-line-end": "270" }),
              "Pack"
            ] }),
            canMarkAsDispatched(order) && /* @__PURE__ */ jsxs(Button, { variant: "default", size: "sm", onClick: () => setConfirmDialog({
              open: true,
              orderId: order.id,
              action: "dispatched"
            }), className: "h-8 px-2 text-xs", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "275", "data-source-line-end": "289", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "Truck", size: 14, className: "mr-1", "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "287", "data-source-line-end": "287" }),
              "Dispatch"
            ] })
          ] }) })
        ] }, order.id)) })
      ] }) }) })
    ] }),
    selectedOrder && /* @__PURE__ */ jsx(OrderDetailSheet, { open: isDetailOpen, onOpenChange: setIsDetailOpen, order: selectedOrder.order, items: selectedOrder.items, "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "304", "data-source-line-end": "309" }),
    /* @__PURE__ */ jsx(ConfirmDialog, { open: confirmDialog.open, onOpenChange: (open) => setConfirmDialog((prev) => ({
      ...prev,
      open
    })), title: confirmDialog.action === "packed" ? "Mark Order as Packed?" : "Dispatch Order to Hub?", description: confirmDialog.action === "packed" ? "Once packed, the order will be ready for dispatch. You can still update the status." : "The hub and consumer will be notified immediately. This action cannot be undone.", confirmLabel: confirmDialog.action === "packed" ? "Mark as Packed" : "Dispatch Now", variant: "default", onConfirm: () => {
      const statusMap = {
        packed: "Packed",
        dispatched: "Dispatched"
      };
      handleStatusUpdate(confirmDialog.orderId, statusMap[confirmDialog.action]);
    }, "data-source-file": "src/components/farmer_orders/FarmerOrdersContent.tsx", "data-source-line-start": "313", "data-source-line-end": "337" })
  ] });
}
const $$FarmerOrders = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Farmer Order Fulfillment | FarmHub Connect", userRole: "farmer", userName: "Ramesh Patel", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/f9e7fe03-9319-49e5-ac2f-98f3fb2b9b98.png", cartCount: 0 }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "FarmerOrdersContent", FarmerOrdersContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/farmer_orders/FarmerOrdersContent", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/farmer-orders.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/farmer-orders.astro";
const $$url = "/farmer-orders.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$FarmerOrders,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
