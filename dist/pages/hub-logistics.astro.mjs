import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsxs, jsx } from "react/jsx-runtime";
import React__default, { useState, useEffect, useMemo } from "react";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "../tabs.xtS8QLDJ.js";
import { B as Button } from "../button.CEA35CrV.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { toast } from "sonner";
import { H as HubService } from "../HubService.B31WKdJX.js";
import { D as DeliveryService } from "../DeliveryService.F3UzbMk9.js";
import { P as PickupVerificationService } from "../PickupVerificationService.DeNY_FJP.js";
import { S as StatsCard } from "../StatsCard.Cb53PoCZ.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "../table.Ckl45E3q.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "../select.CmN5dfe2.js";
import { S as StatusBadge } from "../StatusBadge.CWDBgqR0.js";
import { E as EmptyState } from "../EmptyState.DgJ8Yi6C.js";
import { F as FarmerService } from "../FarmerService.BuornUJX.js";
import { O as OrderService, C as ConsumerService } from "../OrderService.DlXVTjI7.js";
import { C as Card, c as CardContent } from "../card.CNTisMc0.js";
import { renderers } from "../renderers.mjs";
function LogisticsOverview({
  incomingCount,
  outgoingCount,
  hubId
}) {
  const allDeliveries = DeliveryService.getByHubId(hubId);
  const allPickups = PickupVerificationService.query({
    filter: {
      hubId
    }
  });
  const receivedCount = allDeliveries.filter((d) => d.status === "Received at Hub").length;
  const completedPickups = allPickups.filter((p) => p.status === "Completed").length;
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", "data-source-file": "src/components/hub_logistics/LogisticsOverview.tsx", "data-source-line-start": "25", "data-source-line-end": "50", children: [
    /* @__PURE__ */ jsx(StatsCard, { title: "Pending Deliveries", value: incomingCount, iconName: "Package", variant: "primary", "data-source-file": "src/components/hub_logistics/LogisticsOverview.tsx", "data-source-line-start": "26", "data-source-line-end": "31" }),
    /* @__PURE__ */ jsx(StatsCard, { title: "Received Today", value: receivedCount, iconName: "CheckCircle2", variant: "secondary", "data-source-file": "src/components/hub_logistics/LogisticsOverview.tsx", "data-source-line-start": "32", "data-source-line-end": "37" }),
    /* @__PURE__ */ jsx(StatsCard, { title: "Pending Pickups", value: outgoingCount, iconName: "Users", variant: "accent", "data-source-file": "src/components/hub_logistics/LogisticsOverview.tsx", "data-source-line-start": "38", "data-source-line-end": "43" }),
    /* @__PURE__ */ jsx(StatsCard, { title: "Completed Pickups", value: completedPickups, iconName: "TrendingUp", variant: "muted", "data-source-file": "src/components/hub_logistics/LogisticsOverview.tsx", "data-source-line-start": "44", "data-source-line-end": "49" })
  ] });
}
function IncomingDeliveries({
  deliveries,
  hubId,
  onStatusChange
}) {
  const [expandedId, setExpandedId] = useState(null);
  if (!deliveries || deliveries.length === 0) {
    return /* @__PURE__ */ jsx(EmptyState, { iconName: "Package", title: "No Incoming Deliveries", description: "There are currently no deliveries scheduled for this hub. Check back soon!", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "42", "data-source-line-end": "46" });
  }
  const statusOptions = [{
    value: "Prepared",
    label: "Prepared"
  }, {
    value: "In Transit",
    label: "In Transit"
  }, {
    value: "Received at Hub",
    label: "Received at Hub"
  }, {
    value: "Rejected",
    label: "Rejected"
  }];
  return /* @__PURE__ */ jsx("div", { className: "surface-raised border overflow-hidden", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "58", "data-source-line-end": "180", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "59", "data-source-line-end": "179", children: /* @__PURE__ */ jsxs(Table, { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "60", "data-source-line-end": "178", children: [
    /* @__PURE__ */ jsx(TableHeader, { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "61", "data-source-line-end": "72", children: /* @__PURE__ */ jsxs(TableRow, { className: "bg-muted/50 hover:bg-muted/50", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "62", "data-source-line-end": "71", children: [
      /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "63", "data-source-line-end": "63", children: "Delivery ID" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "64", "data-source-line-end": "64", children: "Farmer" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-28 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "65", "data-source-line-end": "65", children: "Order ID" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "66", "data-source-line-end": "66", children: "Vehicle" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "67", "data-source-line-end": "67", children: "Auth Method" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-28 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "68", "data-source-line-end": "68", children: "Status" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "69", "data-source-line-end": "69", children: "Dispatched" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-20 whitespace-nowrap text-right", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "70", "data-source-line-end": "70", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "73", "data-source-line-end": "177", children: deliveries.map((delivery) => {
      const farmer = FarmerService.getById(delivery.farmerId);
      OrderService.getById(delivery.orderId);
      const isExpanded = expandedId === delivery.id;
      return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
        /* @__PURE__ */ jsxs(TableRow, { className: "table-row-hover", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "81", "data-source-line-end": "123", children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-sm", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "82", "data-source-line-end": "82", children: delivery.id }),
          /* @__PURE__ */ jsx(TableCell, { className: "truncate", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "83", "data-source-line-end": "83", children: farmer?.name || "Unknown" }),
          /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-sm", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "84", "data-source-line-end": "84", children: delivery.orderId }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-sm", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "85", "data-source-line-end": "85", children: delivery.vehicleLabel }),
          /* @__PURE__ */ jsx(TableCell, { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "86", "data-source-line-end": "90", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "87", "data-source-line-end": "89", children: delivery.authMethod }) }),
          /* @__PURE__ */ jsx(TableCell, { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "91", "data-source-line-end": "104", children: /* @__PURE__ */ jsx(StatusBadge, { status: delivery.status === "Prepared" ? "pending" : delivery.status === "In Transit" ? "dispatched" : delivery.status === "Received at Hub" ? "received" : "cancelled", size: "sm", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "92", "data-source-line-end": "103" }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-sm text-muted-foreground", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "105", "data-source-line-end": "109", children: delivery.dispatchedAt ? new Date(delivery.dispatchedAt).toLocaleDateString() : "—" }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-right", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "110", "data-source-line-end": "122", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: () => setExpandedId(isExpanded ? null : delivery.id), className: "h-8 w-8 p-0", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "111", "data-source-line-end": "121", children: /* @__PURE__ */ jsx(SafeIcon, { name: isExpanded ? "ChevronUp" : "ChevronDown", size: 16, "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "117", "data-source-line-end": "120" }) }) })
        ] }),
        isExpanded && /* @__PURE__ */ jsx(TableRow, { className: "bg-muted/30 hover:bg-muted/30", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "126", "data-source-line-end": "172", children: /* @__PURE__ */ jsx(TableCell, { colSpan: 8, className: "p-4", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "127", "data-source-line-end": "171", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "128", "data-source-line-end": "170", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "129", "data-source-line-end": "169", children: [
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "130", "data-source-line-end": "136", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "131", "data-source-line-end": "133", children: "Farmer Details" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "134", "data-source-line-end": "134", children: farmer?.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "135", "data-source-line-end": "135", children: farmer?.village })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "137", "data-source-line-end": "142", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "138", "data-source-line-end": "140", children: "Auth Reference" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-mono", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "141", "data-source-line-end": "141", children: delivery.authReference })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "143", "data-source-line-end": "148", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "144", "data-source-line-end": "146", children: "Handled By" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "147", "data-source-line-end": "147", children: delivery.handledBy })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "149", "data-source-line-end": "168", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "150", "data-source-line-end": "152", children: "Update Status" }),
            /* @__PURE__ */ jsxs(Select, { value: delivery.status, onValueChange: (val) => onStatusChange(delivery.id, val), "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "153", "data-source-line-end": "167", children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "h-8 text-sm", "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "157", "data-source-line-end": "159", children: /* @__PURE__ */ jsx(SelectValue, { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "158", "data-source-line-end": "158" }) }),
              /* @__PURE__ */ jsx(SelectContent, { "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "160", "data-source-line-end": "166", children: statusOptions.map((opt) => /* @__PURE__ */ jsx(SelectItem, { value: opt.value, "data-source-file": "src/components/hub_logistics/IncomingDeliveries.tsx", "data-source-line-start": "162", "data-source-line-end": "164", children: opt.label }, opt.value)) })
            ] })
          ] })
        ] }) }) }) })
      ] }, delivery.id);
    }) })
  ] }) }) });
}
function OutgoingPickups({
  pickups,
  hubId,
  onVerificationChange
}) {
  const [expandedId, setExpandedId] = useState(null);
  const filteredPickups = pickups.filter((p) => p.hubId === hubId);
  if (!filteredPickups || filteredPickups.length === 0) {
    return /* @__PURE__ */ jsx(EmptyState, { iconName: "Users", title: "No Pending Pickups", description: "All consumer pickups are up to date. Great work!", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "44", "data-source-line-end": "48" });
  }
  const statusOptions = [{
    value: "Pending",
    label: "Pending"
  }, {
    value: "Verified",
    label: "Verified"
  }, {
    value: "Completed",
    label: "Completed"
  }, {
    value: "Rejected",
    label: "Rejected"
  }];
  return /* @__PURE__ */ jsx("div", { className: "surface-raised border overflow-hidden", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "60", "data-source-line-end": "184", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "61", "data-source-line-end": "183", children: /* @__PURE__ */ jsxs(Table, { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "62", "data-source-line-end": "182", children: [
    /* @__PURE__ */ jsx(TableHeader, { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "63", "data-source-line-end": "73", children: /* @__PURE__ */ jsxs(TableRow, { className: "bg-muted/50 hover:bg-muted/50", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "64", "data-source-line-end": "72", children: [
      /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "65", "data-source-line-end": "65", children: "Pickup ID" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "66", "data-source-line-end": "66", children: "Consumer" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-28 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "67", "data-source-line-end": "67", children: "Order ID" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "68", "data-source-line-end": "68", children: "Verification" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-28 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "69", "data-source-line-end": "69", children: "Status" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "70", "data-source-line-end": "70", children: "Verified At" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-20 whitespace-nowrap text-right", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "71", "data-source-line-end": "71", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "74", "data-source-line-end": "181", children: filteredPickups.map((pickup) => {
      const consumer = ConsumerService.getById(pickup.consumerId);
      OrderService.getById(pickup.orderId);
      const isExpanded = expandedId === pickup.id;
      return /* @__PURE__ */ jsxs(React__default.Fragment, { children: [
        /* @__PURE__ */ jsxs(TableRow, { className: "table-row-hover", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "82", "data-source-line-end": "123", children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-sm", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "83", "data-source-line-end": "83", children: pickup.id }),
          /* @__PURE__ */ jsx(TableCell, { className: "truncate", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "84", "data-source-line-end": "84", children: consumer?.name || "Unknown" }),
          /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-sm", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "85", "data-source-line-end": "85", children: pickup.orderId }),
          /* @__PURE__ */ jsx(TableCell, { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "86", "data-source-line-end": "90", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "87", "data-source-line-end": "89", children: pickup.verificationMode }) }),
          /* @__PURE__ */ jsx(TableCell, { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "91", "data-source-line-end": "104", children: /* @__PURE__ */ jsx(StatusBadge, { status: pickup.status === "Pending" ? "pending" : pickup.status === "Verified" ? "packed" : pickup.status === "Completed" ? "completed" : "cancelled", size: "sm", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "92", "data-source-line-end": "103" }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-sm text-muted-foreground", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "105", "data-source-line-end": "109", children: pickup.verifiedAt ? new Date(pickup.verifiedAt).toLocaleDateString() : "—" }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-right", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "110", "data-source-line-end": "122", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: () => setExpandedId(isExpanded ? null : pickup.id), className: "h-8 w-8 p-0", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "111", "data-source-line-end": "121", children: /* @__PURE__ */ jsx(SafeIcon, { name: isExpanded ? "ChevronUp" : "ChevronDown", size: 16, "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "117", "data-source-line-end": "120" }) }) })
        ] }),
        isExpanded && /* @__PURE__ */ jsx(TableRow, { className: "bg-muted/30 hover:bg-muted/30", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "126", "data-source-line-end": "176", children: /* @__PURE__ */ jsx(TableCell, { colSpan: 7, className: "p-4", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "127", "data-source-line-end": "175", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "128", "data-source-line-end": "174", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "129", "data-source-line-end": "173", children: [
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "130", "data-source-line-end": "136", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "131", "data-source-line-end": "133", children: "Consumer Details" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "134", "data-source-line-end": "134", children: consumer?.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "135", "data-source-line-end": "135", children: consumer?.city })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "137", "data-source-line-end": "146", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "138", "data-source-line-end": "140", children: pickup.verificationMode === "OTP" ? "OTP" : "QR Token" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-mono", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "141", "data-source-line-end": "145", children: pickup.verificationMode === "OTP" ? pickup.otpMasked : pickup.qrTokenMasked })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "147", "data-source-line-end": "152", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "148", "data-source-line-end": "150", children: "Verified By" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "151", "data-source-line-end": "151", children: pickup.verifiedBy || "—" })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "153", "data-source-line-end": "172", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "154", "data-source-line-end": "156", children: "Update Status" }),
            /* @__PURE__ */ jsxs(Select, { value: pickup.status, onValueChange: (val) => onVerificationChange(pickup.id, val), "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "157", "data-source-line-end": "171", children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "h-8 text-sm", "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "161", "data-source-line-end": "163", children: /* @__PURE__ */ jsx(SelectValue, { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "162", "data-source-line-end": "162" }) }),
              /* @__PURE__ */ jsx(SelectContent, { "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "164", "data-source-line-end": "170", children: statusOptions.map((opt) => /* @__PURE__ */ jsx(SelectItem, { value: opt.value, "data-source-file": "src/components/hub_logistics/OutgoingPickups.tsx", "data-source-line-start": "166", "data-source-line-end": "168", children: opt.label }, opt.value)) })
            ] })
          ] })
        ] }) }) }) })
      ] }, pickup.id);
    }) })
  ] }) }) });
}
function QuickActionPanel({
  onReceiveDelivery,
  onConsumerPickup,
  onTrackRecord
}) {
  return /* @__PURE__ */ jsx(Card, { className: "surface-raised border-primary/20 bg-primary/5", "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "19", "data-source-line-end": "48", children: /* @__PURE__ */ jsx(CardContent, { className: "card-padding", "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "20", "data-source-line-end": "47", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "21", "data-source-line-end": "46", children: [
    /* @__PURE__ */ jsxs(Button, { onClick: onReceiveDelivery, className: "h-auto py-4 flex flex-col items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all", "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "22", "data-source-line-end": "28", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Package", size: 24, "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "26", "data-source-line-end": "26" }),
      /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "27", "data-source-line-end": "27", children: "Receive Delivery" })
    ] }),
    /* @__PURE__ */ jsxs(Button, { onClick: onConsumerPickup, className: "h-auto py-4 flex flex-col items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-md hover:shadow-lg transition-all", "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "30", "data-source-line-end": "36", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Users", size: 24, "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "34", "data-source-line-end": "34" }),
      /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "35", "data-source-line-end": "35", children: "Consumer Pickup" })
    ] }),
    /* @__PURE__ */ jsxs(Button, { onClick: onTrackRecord, variant: "outline", className: "h-auto py-4 flex flex-col items-center justify-center gap-2 border-2 border-accent text-accent hover:bg-accent/10 font-semibold transition-all", "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "38", "data-source-line-end": "45", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "FileText", size: 24, "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "43", "data-source-line-end": "43" }),
      /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_logistics/QuickActionPanel.tsx", "data-source-line-start": "44", "data-source-line-end": "44", children: "Track Record" })
    ] })
  ] }) }) });
}
function HubLogisticsContent() {
  const [hub, setHub] = useState(() => {
    const defaultHub = HubService.getById("hub-001");
    return defaultHub || null;
  });
  const [deliveries, setDeliveries] = useState(() => {
    return hub ? DeliveryService.getByHubId(hub.id) : [];
  });
  const [pickups, setPickups] = useState(() => {
    return PickupVerificationService.query({});
  });
  const [activeTab, setActiveTab] = useState("incoming");
  const [isClient, setIsClient] = useState(true);
  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const hubId = params.get("hubId") || "hub-001";
      const view = params.get("view") || "incoming";
      const fetchedHub = HubService.getById(hubId);
      if (fetchedHub) {
        setHub(fetchedHub);
        setDeliveries(DeliveryService.getByHubId(fetchedHub.id));
      }
      setActiveTab(view);
      setIsClient(true);
    });
  }, []);
  const incomingCount = useMemo(() => {
    return deliveries.filter((d) => d.status === "Prepared" || d.status === "In Transit").length;
  }, [deliveries]);
  const outgoingCount = useMemo(() => {
    return pickups.filter((p) => p.status === "Pending" || p.status === "Verified").length;
  }, [pickups]);
  const handleExitHub = () => {
    if (hub) {
      window.location.href = `./hub-dashboard.html?hubId=${hub.id}`;
    }
  };
  const handleReceiveDelivery = () => {
    if (hub) {
      window.location.href = `./hub-receiving-log.html?hubId=${hub.id}`;
    }
  };
  const handleConsumerPickup = () => {
    if (hub) {
      window.location.href = `./hub-pickup-verification.html?hubId=${hub.id}`;
    }
  };
  const handleTrackRecord = () => {
    if (hub) {
      window.location.href = `./hub-ledger.html?hubId=${hub.id}`;
    }
  };
  if (!hub || !isClient) {
    return /* @__PURE__ */ jsx("div", { className: "page-body flex items-center justify-center min-h-[60vh]", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "87", "data-source-line-end": "92", children: /* @__PURE__ */ jsxs("div", { className: "text-center", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "88", "data-source-line-end": "91", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 40, className: "animate-spin text-primary mx-auto mb-4", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "89", "data-source-line-end": "89" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "90", "data-source-line-end": "90", children: "Loading hub logistics..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "page-body space-y-8", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "97", "data-source-line-end": "183", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "99", "data-source-line-end": "114", children: [
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "100", "data-source-line-end": "105", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-page-title mb-2", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "101", "data-source-line-end": "101", children: hub.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-caption", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "102", "data-source-line-end": "104", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "103", "data-source-line-end": "103", children: hub.code }),
          " • ",
          hub.city,
          ", ",
          hub.region
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: handleExitHub, className: "w-full md:w-auto", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "106", "data-source-line-end": "113", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "LogOut", size: 16, className: "mr-2", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "111", "data-source-line-end": "111" }),
        "Exit Hub"
      ] })
    ] }),
    /* @__PURE__ */ jsx(QuickActionPanel, { onReceiveDelivery: handleReceiveDelivery, onConsumerPickup: handleConsumerPickup, onTrackRecord: handleTrackRecord, "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "117", "data-source-line-end": "121" }),
    /* @__PURE__ */ jsx(LogisticsOverview, { incomingCount, outgoingCount, hubId: hub.id, "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "124", "data-source-line-end": "128" }),
    /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: (val) => setActiveTab(val), className: "w-full", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "131", "data-source-line-end": "182", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 mb-6", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "132", "data-source-line-end": "151", children: [
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "incoming", className: "flex items-center gap-2", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "133", "data-source-line-end": "141", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "TrendingDown", size: 16, "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "134", "data-source-line-end": "134" }),
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "135", "data-source-line-end": "135", children: "Incoming Deliveries" }),
          incomingCount > 0 && /* @__PURE__ */ jsx("span", { className: "ml-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-bold", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "137", "data-source-line-end": "139", children: incomingCount })
        ] }),
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "outgoing", className: "flex items-center gap-2", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "142", "data-source-line-end": "150", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "TrendingUp", size: 16, "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "143", "data-source-line-end": "143" }),
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "144", "data-source-line-end": "144", children: "Outgoing Pickups" }),
          outgoingCount > 0 && /* @__PURE__ */ jsx("span", { className: "ml-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "146", "data-source-line-end": "148", children: outgoingCount })
        ] })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "incoming", className: "space-y-4", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "153", "data-source-line-end": "166", children: /* @__PURE__ */ jsx(IncomingDeliveries, { deliveries, hubId: hub.id, onStatusChange: (deliveryId, newStatus) => {
        const updated = deliveries.map((d) => d.id === deliveryId ? {
          ...d,
          status: newStatus
        } : d);
        setDeliveries(updated);
        DeliveryService.savePersisted(updated);
        toast.success("Delivery status updated");
      }, "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "154", "data-source-line-end": "165" }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "outgoing", className: "space-y-4", "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "168", "data-source-line-end": "181", children: /* @__PURE__ */ jsx(OutgoingPickups, { pickups, hubId: hub.id, onVerificationChange: (pickupId, newStatus) => {
        const updated = pickups.map((p) => p.id === pickupId ? {
          ...p,
          status: newStatus
        } : p);
        setPickups(updated);
        PickupVerificationService.savePersisted(updated);
        toast.success("Pickup status updated");
      }, "data-source-file": "src/components/hub_logistics/HubLogisticsContent.tsx", "data-source-line-start": "169", "data-source-line-end": "180" }) })
    ] })
  ] });
}
const $$HubLogistics = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Hub Logistics & Inventory | FarmHub Connect", userRole: "hub", userName: "Neha Shah", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/34f3115a-ee53-4b16-9931-b4c23479c5ee.png" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "HubLogisticsContent", HubLogisticsContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/hub_logistics/HubLogisticsContent", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/hub-logistics.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/hub-logistics.astro";
const $$url = "/hub-logistics.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$HubLogistics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
