import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button, c as cn } from "../button.CEA35CrV.js";
import { useState, useEffect } from "react";
import { c as getByIdVO, d as getAll } from "../OrderService.DlXVTjI7.js";
import { g as getByOrderId$1 } from "../OrderItemService.D9ko_rx0.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../card.CNTisMc0.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "../table.Ckl45E3q.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { O as OrderTimeline } from "../OrderTimeline.24JFbvnM.js";
import { toast } from "sonner";
import { L as LoadingSpinner } from "../LoadingSpinner.D1-awNdt.js";
import { renderers } from "../renderers.mjs";
function useSearchParams() {
  if (typeof window === "undefined") {
    return new URLSearchParams();
  }
  return new URLSearchParams(window.location.search);
}
const paymentDataList = [{
  id: "pay-001",
  orderId: "ord-1001",
  consumerId: "con-001",
  method: "UPI",
  status: "Success",
  transactionRef: "TXN-889101",
  amount: 238,
  paidAt: "2026-09-05T09:16:00",
  providerName: "RazorPay Mock"
}, {
  id: "pay-002",
  orderId: "ord-1002",
  consumerId: "con-002",
  method: "Card",
  status: "Success",
  transactionRef: "TXN-889102",
  amount: 456,
  paidAt: "2026-09-04T11:21:00",
  providerName: "RazorPay Mock"
}, {
  id: "pay-003",
  orderId: "ord-1003",
  consumerId: "con-003",
  method: "Net Banking",
  status: "Success",
  transactionRef: "TXN-889103",
  amount: 1190,
  paidAt: "2026-09-05T08:41:00",
  providerName: "RazorPay Mock"
}, {
  id: "pay-004",
  orderId: "ord-1004",
  consumerId: "con-004",
  method: "UPI",
  status: "Success",
  transactionRef: "TXN-889104",
  amount: 274,
  paidAt: "2026-09-03T10:01:00",
  providerName: "RazorPay Mock"
}];
function getByOrderId(orderId) {
  return paymentDataList.filter((item) => item.orderId === orderId);
}
function OrderSummaryCard({
  order,
  orderItems,
  payment
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised border-none shadow-lg overflow-hidden", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "21", "data-source-line-end": "108", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-primary/5 to-accent/5 border-b", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "22", "data-source-line-end": "27", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "23", "data-source-line-end": "26", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "ShoppingBag", size: 20, className: "text-primary", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "24", "data-source-line-end": "24" }),
      "Order Summary"
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "card-padding", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "29", "data-source-line-end": "107", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto mb-6", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "31", "data-source-line-end": "54", children: /* @__PURE__ */ jsxs(Table, { "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "32", "data-source-line-end": "53", children: [
        /* @__PURE__ */ jsx(TableHeader, { "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "33", "data-source-line-end": "40", children: /* @__PURE__ */ jsxs(TableRow, { className: "border-b border-border hover:bg-transparent", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "34", "data-source-line-end": "39", children: [
          /* @__PURE__ */ jsx(TableHead, { className: "w-40 whitespace-nowrap font-semibold", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "35", "data-source-line-end": "35", children: "Product" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-20 text-center whitespace-nowrap font-semibold", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "36", "data-source-line-end": "36", children: "Qty" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-24 text-right whitespace-nowrap font-semibold", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "37", "data-source-line-end": "37", children: "Unit Price" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-24 text-right whitespace-nowrap font-semibold", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "38", "data-source-line-end": "38", children: "Total" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "41", "data-source-line-end": "52", children: orderItems.map((item) => /* @__PURE__ */ jsxs(TableRow, { className: "border-b border-border/50 hover:bg-muted/30", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "43", "data-source-line-end": "50", children: [
          /* @__PURE__ */ jsxs(TableCell, { className: "font-medium text-foreground truncate", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "44", "data-source-line-end": "46", children: [
            "Product #",
            item.productId
          ] }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-center", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "47", "data-source-line-end": "47", children: item.quantity }),
          /* @__PURE__ */ jsxs(TableCell, { className: "text-right", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "48", "data-source-line-end": "48", children: [
            "₹",
            item.unitPrice
          ] }),
          /* @__PURE__ */ jsxs(TableCell, { className: "text-right font-semibold", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "49", "data-source-line-end": "49", children: [
            "₹",
            item.lineTotal
          ] })
        ] }, item.id)) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 border-t border-border pt-4", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "57", "data-source-line-end": "74", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "58", "data-source-line-end": "61", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "59", "data-source-line-end": "59", children: "Subtotal" }),
          /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: [
            "₹",
            order.subtotalAmount
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "62", "data-source-line-end": "65", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "63", "data-source-line-end": "63", children: "Platform Fee" }),
          /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "64", "data-source-line-end": "64", children: [
            "₹",
            order.platformFee
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "66", "data-source-line-end": "69", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "67", "data-source-line-end": "67", children: "Delivery Fee" }),
          /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "68", "data-source-line-end": "68", children: [
            "₹",
            order.deliveryFee
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-base font-bold border-t border-border pt-3 mt-3", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "70", "data-source-line-end": "73", children: [
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "71", "data-source-line-end": "71", children: "Total Amount" }),
          /* @__PURE__ */ jsxs("span", { className: "text-primary", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "72", "data-source-line-end": "72", children: [
            "₹",
            order.totalAmount
          ] })
        ] })
      ] }),
      payment && /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-success/5 border border-success/20 rounded-lg space-y-2", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "78", "data-source-line-end": "105", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-success font-semibold", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "79", "data-source-line-end": "82", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "BadgeCheck", size: 18, "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "80", "data-source-line-end": "80" }),
          "Payment Confirmed"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground space-y-1", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "83", "data-source-line-end": "104", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "84", "data-source-line-end": "87", children: [
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "85", "data-source-line-end": "85", children: "Method:" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "86", "data-source-line-end": "86", children: payment.method })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "88", "data-source-line-end": "91", children: [
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "89", "data-source-line-end": "89", children: "Reference:" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-foreground", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "90", "data-source-line-end": "90", children: payment.transactionRef })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "92", "data-source-line-end": "103", children: [
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "93", "data-source-line-end": "93", children: "Paid At:" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", "data-source-file": "src/components/order_success/OrderSummaryCard.tsx", "data-source-line-start": "94", "data-source-line-end": "102", children: new Date(payment.paidAt).toLocaleString("en-IN", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function OrderTimelineSection({
  order
}) {
  const getTimelineStages = () => {
    const stages = [{
      id: "ordered",
      label: "Order Placed",
      status: "completed",
      timestamp: new Date(order.placedAt).toLocaleString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    }, {
      id: "packed",
      label: "Being Packed",
      status: order.packedAt ? "completed" : order.status === "Packed" ? "active" : "pending",
      timestamp: order.packedAt ? new Date(order.packedAt).toLocaleString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : void 0
    }, {
      id: "dispatched",
      label: "Dispatched to Hub",
      status: order.dispatchedAt ? "completed" : order.status === "Dispatched" ? "active" : "pending",
      timestamp: order.dispatchedAt ? new Date(order.dispatchedAt).toLocaleString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : void 0
    }, {
      id: "arrived",
      label: "Arrived at Hub",
      status: order.receivedAt ? "completed" : order.status === "Arrived at Hub" ? "active" : "pending",
      timestamp: order.receivedAt ? new Date(order.receivedAt).toLocaleString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : void 0
    }];
    return stages;
  };
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised border-none shadow-lg", "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "70", "data-source-line-end": "90", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-primary/5 to-accent/5 border-b", "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "71", "data-source-line-end": "76", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "72", "data-source-line-end": "75", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 20, className: "text-primary", "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "73", "data-source-line-end": "73" }),
      "Fulfillment Status"
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "card-padding", "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "78", "data-source-line-end": "89", children: [
      /* @__PURE__ */ jsx(OrderTimeline, { stages: getTimelineStages(), "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "79", "data-source-line-end": "79" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-muted/30 border border-border rounded-lg", "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "81", "data-source-line-end": "88", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "82", "data-source-line-end": "84", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "83", "data-source-line-end": "83", children: "Current Status:" }),
          " ",
          order.status
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-2", "data-source-file": "src/components/order_success/OrderTimelineSection.tsx", "data-source-line-start": "85", "data-source-line-end": "87", children: order.fulfillmentNote })
      ] })
    ] })
  ] });
}
function HubLocationCard({
  hub,
  pickupCode
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised border-none shadow-lg overflow-hidden", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "14", "data-source-line-end": "90", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-accent/5 to-primary/5 border-b", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "15", "data-source-line-end": "20", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "16", "data-source-line-end": "19", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 20, className: "text-accent", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "17", "data-source-line-end": "17" }),
      "Pickup Location"
    ] }) }),
    /* @__PURE__ */ jsx(CardContent, { className: "card-padding", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "22", "data-source-line-end": "89", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "23", "data-source-line-end": "88", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "25", "data-source-line-end": "64", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "26", "data-source-line-end": "29", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-item-title font-bold mb-1", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "27", "data-source-line-end": "27", children: hub.name }),
          /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "mb-3", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "28", "data-source-line-end": "28", children: hub.code })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "31", "data-source-line-end": "63", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "32", "data-source-line-end": "38", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 16, className: "text-primary mt-0.5 shrink-0", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "33", "data-source-line-end": "33" }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "34", "data-source-line-end": "37", children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs uppercase tracking-wider mb-0.5", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "35", "data-source-line-end": "35", children: "Address" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "36", "data-source-line-end": "36", children: hub.address })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "40", "data-source-line-end": "46", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 16, className: "text-primary mt-0.5 shrink-0", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "41", "data-source-line-end": "41" }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "42", "data-source-line-end": "45", children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs uppercase tracking-wider mb-0.5", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "43", "data-source-line-end": "43", children: "Operating Hours" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "44", "data-source-line-end": "44", children: hub.operatingHours })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "48", "data-source-line-end": "54", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 16, className: "text-primary mt-0.5 shrink-0", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "49", "data-source-line-end": "49" }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "50", "data-source-line-end": "53", children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs uppercase tracking-wider mb-0.5", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "51", "data-source-line-end": "51", children: "Contact" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "52", "data-source-line-end": "52", children: hub.phone })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "56", "data-source-line-end": "62", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "User", size: 16, className: "text-primary mt-0.5 shrink-0", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "57", "data-source-line-end": "57" }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "58", "data-source-line-end": "61", children: [
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs uppercase tracking-wider mb-0.5", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "59", "data-source-line-end": "59", children: "Manager" }),
              /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: hub.managerName })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center space-y-4", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "67", "data-source-line-end": "87", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-primary/10 border-2 border-dashed border-primary rounded-lg text-center space-y-2", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "68", "data-source-line-end": "74", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground font-semibold", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "69", "data-source-line-end": "69", children: "Your Pickup Code" }),
          /* @__PURE__ */ jsx("p", { className: "text-4xl font-black text-primary tracking-wider", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "70", "data-source-line-end": "70", children: pickupCode }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "71", "data-source-line-end": "73", children: "Show this code at the hub desk to collect your order" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-accent/5 border border-accent/20 rounded-lg space-y-2", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "76", "data-source-line-end": "86", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-foreground flex items-center gap-2", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "77", "data-source-line-end": "80", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 16, className: "text-accent", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "78", "data-source-line-end": "78" }),
            "Important"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "text-xs text-muted-foreground space-y-1 list-disc list-inside", "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "81", "data-source-line-end": "85", children: [
            /* @__PURE__ */ jsx("li", { "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "82", "data-source-line-end": "82", children: "Bring a valid ID for verification" }),
            /* @__PURE__ */ jsx("li", { "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "83", "data-source-line-end": "83", children: "Pickup available during operating hours only" }),
            /* @__PURE__ */ jsx("li", { "data-source-file": "src/components/order_success/HubLocationCard.tsx", "data-source-line-start": "84", "data-source-line-end": "84", children: "Order valid for 48 hours from arrival" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function OrderActionButtons({
  orderId
}) {
  const handleTrackOrder = () => {
    window.location.href = `./order-tracking.html?orderId=${orderId}`;
  };
  const handleContinueShopping = () => {
    window.location.href = "./consumer-marketplace.html";
  };
  const handleDownloadInvoice = () => {
    toast.success("Invoice downloaded successfully", {
      description: `Order ${orderId} invoice has been saved to your device.`
    });
  };
  const handleShareOrder = () => {
    const shareText = `I just ordered fresh produce from FarmConnect! Order #${orderId}. Join me on the platform to get fresh farm products delivered to your hub.`;
    if (navigator.share) {
      navigator.share({
        title: "FarmConnect Order",
        text: shareText,
        url: window.location.href
      }).catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Share failed:", err);
        }
      });
    } else {
      navigator.clipboard.writeText(shareText);
      toast.success("Order link copied to clipboard", {
        description: "Share it with your friends!"
      });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", "data-source-file": "src/components/order_success/OrderActionButtons.tsx", "data-source-line-start": "47", "data-source-line-end": "86", children: [
    /* @__PURE__ */ jsxs(Button, { size: "lg", onClick: handleTrackOrder, className: "font-semibold shadow-md hover:shadow-lg transition-shadow", "data-source-file": "src/components/order_success/OrderActionButtons.tsx", "data-source-line-start": "48", "data-source-line-end": "55", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 18, className: "mr-2", "data-source-file": "src/components/order_success/OrderActionButtons.tsx", "data-source-line-start": "53", "data-source-line-end": "53" }),
      "Track Order"
    ] }),
    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "secondary", onClick: handleContinueShopping, className: "font-semibold shadow-md hover:shadow-lg transition-shadow", "data-source-file": "src/components/order_success/OrderActionButtons.tsx", "data-source-line-start": "57", "data-source-line-end": "65", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "ShoppingCart", size: 18, className: "mr-2", "data-source-file": "src/components/order_success/OrderActionButtons.tsx", "data-source-line-start": "63", "data-source-line-end": "63" }),
      "Continue Shopping"
    ] }),
    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", onClick: handleDownloadInvoice, className: "font-semibold", "data-source-file": "src/components/order_success/OrderActionButtons.tsx", "data-source-line-start": "67", "data-source-line-end": "75", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Download", size: 18, className: "mr-2", "data-source-file": "src/components/order_success/OrderActionButtons.tsx", "data-source-line-start": "73", "data-source-line-end": "73" }),
      "Download Invoice"
    ] }),
    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", onClick: handleShareOrder, className: "font-semibold", "data-source-file": "src/components/order_success/OrderActionButtons.tsx", "data-source-line-start": "77", "data-source-line-end": "85", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Share2", size: 18, className: "mr-2", "data-source-file": "src/components/order_success/OrderActionButtons.tsx", "data-source-line-start": "83", "data-source-line-end": "83" }),
      "Share Order"
    ] })
  ] });
}
function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "";
  const [state, setState] = useState(() => {
    const fallbackOrder = getAll()[0];
    const targetOrderId = orderId || fallbackOrder?.id || "";
    const order = getByIdVO(targetOrderId);
    const orderItems = order ? getByOrderId$1(order.id) : [];
    const payments = order ? getByOrderId(order.id) : [];
    const payment = payments.length > 0 ? payments[0] : void 0;
    return {
      order,
      orderItems,
      payment,
      isLoading: false
    };
  });
  const [isClient, setIsClient] = useState(true);
  useEffect(() => {
    setIsClient(false);
    const raf = requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const paramOrderId = params.get("orderId");
      if (paramOrderId && paramOrderId !== state.order?.id) {
        const order = getByIdVO(paramOrderId);
        if (order) {
          const orderItems = getByOrderId$1(order.id);
          const payments = getByOrderId(order.id);
          const payment = payments.length > 0 ? payments[0] : void 0;
          setState({
            order,
            orderItems,
            payment,
            isLoading: false
          });
        }
      }
      setIsClient(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  if (!state.order) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-[60vh]", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "77", "data-source-line-end": "79", children: /* @__PURE__ */ jsx(LoadingSpinner, { size: "lg", text: "Loading order details...", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "78", "data-source-line-end": "78" }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "page-body flex flex-col gap-8 max-w-4xl mx-auto", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "84", "data-source-line-end": "159", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "86", "data-source-line-end": "112", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "87", "data-source-line-end": "106", children: /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "88", "data-source-line-end": "105", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-success/20 rounded-full blur-xl", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "89", "data-source-line-end": "89" }),
        /* @__PURE__ */ jsx("div", { className: "relative bg-success/10 border border-success/30 rounded-full p-4 flex items-center justify-center", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "90", "data-source-line-end": "104", children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8 text-success animate-pulse", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "91", "data-source-line-end": "103", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M5 13l4 4L19 7", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "97", "data-source-line-end": "102" }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-page-title text-success", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "108", "data-source-line-end": "108", children: "Order Confirmed!" }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-muted-foreground max-w-xl mx-auto", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "109", "data-source-line-end": "111", children: "Your order has been successfully placed. Your farmer is preparing your fresh produce, and it will arrive at your designated hub soon." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "115", "data-source-line-end": "133", children: [
      /* @__PURE__ */ jsxs("div", { className: "surface-base card-padding text-center", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "116", "data-source-line-end": "119", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption uppercase tracking-wider mb-1", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "117", "data-source-line-end": "117", children: "Order Number" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-primary", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "118", "data-source-line-end": "118", children: state.order.orderNumber })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "surface-base card-padding text-center", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "120", "data-source-line-end": "123", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption uppercase tracking-wider mb-1", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "121", "data-source-line-end": "121", children: "Total Amount" }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl font-bold", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "122", "data-source-line-end": "122", children: [
          "₹",
          state.order.totalAmount
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "surface-base card-padding text-center", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "124", "data-source-line-end": "132", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption uppercase tracking-wider mb-1", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "125", "data-source-line-end": "125", children: "Payment Status" }),
        /* @__PURE__ */ jsx("p", { className: cn("text-lg font-bold", state.payment?.status === "Success" ? "text-success" : "text-warning"), "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "126", "data-source-line-end": "131", children: state.payment?.status || "Pending" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(OrderSummaryCard, { order: state.order, orderItems: state.orderItems, payment: state.payment, "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "136", "data-source-line-end": "140" }),
    /* @__PURE__ */ jsx(OrderTimelineSection, { order: state.order, "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "143", "data-source-line-end": "143" }),
    state.order.hub && /* @__PURE__ */ jsx(HubLocationCard, { hub: state.order.hub, pickupCode: state.order.pickupCode, "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "147", "data-source-line-end": "147" }),
    /* @__PURE__ */ jsx(OrderActionButtons, { orderId: state.order.id, "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "151", "data-source-line-end": "151" }),
    /* @__PURE__ */ jsx("div", { className: "surface-base card-padding bg-accent/5 border-accent/20", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "154", "data-source-line-end": "158", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-foreground leading-relaxed", "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "155", "data-source-line-end": "157", children: [
      /* @__PURE__ */ jsx("strong", { "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "156", "data-source-line-end": "156", children: "Next Steps:" }),
      " Your farmer will pack and dispatch your order within 2-4 hours. You'll receive a notification when it arrives at the hub. Visit the hub during operating hours with your pickup code ",
      /* @__PURE__ */ jsx("strong", { "data-source-file": "src/components/order_success/OrderSuccessContent.tsx", "data-source-line-start": "156", "data-source-line-end": "156", children: state.order.pickupCode }),
      " to collect your order."
    ] }) })
  ] });
}
const $$Astro = createAstro();
const $$OrderSuccess = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$OrderSuccess;
  const currentPath = Astro.url.pathname;
  return renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Order Confirmation - FarmConnect", userRole: "consumer", userName: "Consumer", currentPath }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "OrderSuccessContent", OrderSuccessContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/order_success/OrderSuccessContent", "client:component-export": "default" })}
` })}`;
}, "/vercel/share/v0-project/src/pages/order-success.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/order-success.astro";
const $$url = "/order-success.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$OrderSuccess,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
