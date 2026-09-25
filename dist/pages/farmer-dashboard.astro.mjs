import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { g as getById, a as getAll } from "../FarmerService.BuornUJX.js";
import { e as getByFarmerId } from "../ProductService.CADRtByu.js";
import { g as getByFarmerId$1 } from "../OrderService.DlXVTjI7.js";
import { g as getByRecipient } from "../NotificationService.DJipxL0J.js";
import { S as StatsCard } from "../StatsCard.Cb53PoCZ.js";
import { c as cn, B as Button } from "../button.CEA35CrV.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "../card.CNTisMc0.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "../table.Ckl45E3q.js";
import { S as StatusBadge } from "../StatusBadge.CWDBgqR0.js";
import { E as EmptyState } from "../EmptyState.DgJ8Yi6C.js";
import { renderers } from "../renderers.mjs";
function StatsOverview({
  stats
}) {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", "data-source-file": "src/components/farmer-dashboard/StatsOverview.tsx", "data-source-line-start": "18", "data-source-line-end": "57", children: [
    /* @__PURE__ */ jsx(StatsCard, { title: "Total Products", value: stats.totalProducts, iconName: "Package", variant: "primary", "data-source-file": "src/components/farmer-dashboard/StatsOverview.tsx", "data-source-line-start": "19", "data-source-line-end": "24" }),
    /* @__PURE__ */ jsx(StatsCard, { title: "Low Stock Alert", value: stats.lowStock, iconName: "AlertTriangle", variant: "accent", trend: {
      value: stats.outOfStock,
      direction: "down"
    }, "data-source-file": "src/components/farmer-dashboard/StatsOverview.tsx", "data-source-line-start": "25", "data-source-line-end": "31" }),
    /* @__PURE__ */ jsx(StatsCard, { title: "Total Revenue", value: `₹${stats.totalRevenue.toLocaleString()}`, iconName: "IndianRupee", variant: "secondary", trend: {
      value: 12,
      direction: "up"
    }, "data-source-file": "src/components/farmer-dashboard/StatsOverview.tsx", "data-source-line-start": "32", "data-source-line-end": "38" }),
    /* @__PURE__ */ jsx(StatsCard, { title: "Pending Orders", value: stats.pendingOrders, iconName: "Clock", variant: "accent", "data-source-file": "src/components/farmer-dashboard/StatsOverview.tsx", "data-source-line-start": "39", "data-source-line-end": "44" }),
    /* @__PURE__ */ jsx(StatsCard, { title: "Completed Orders", value: stats.completedOrders, iconName: "CheckCircle2", variant: "primary", "data-source-file": "src/components/farmer-dashboard/StatsOverview.tsx", "data-source-line-start": "45", "data-source-line-end": "50" }),
    /* @__PURE__ */ jsx(StatsCard, { title: "Verification Status", value: "Verified", iconName: "BadgeCheck", variant: "secondary", "data-source-file": "src/components/farmer-dashboard/StatsOverview.tsx", "data-source-line-start": "51", "data-source-line-end": "56" })
  ] });
}
function QuickActions() {
  const actions = [{
    id: "add-product",
    title: "Add New Product",
    description: "List a new farm product for sale",
    icon: "PlusCircle",
    action: () => {
      window.location.href = "./add-product.html";
    },
    variant: "primary"
  }, {
    id: "view-inventory",
    title: "View All Stocks",
    description: "Manage your inventory and stock levels",
    icon: "BarChart3",
    action: () => {
      window.location.href = "./inventory-management.html";
    },
    variant: "secondary"
  }, {
    id: "pending-orders",
    title: "Pending Deliveries",
    description: "Orders awaiting packing and dispatch",
    icon: "Truck",
    action: () => {
      window.location.href = "./farmer-orders.html";
    },
    variant: "accent"
  }];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "42", "data-source-line-end": "82", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-section-title", "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "43", "data-source-line-end": "43", children: "Quick Actions" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "44", "data-source-line-end": "81", children: actions.map((action) => /* @__PURE__ */ jsx(Card, { className: "surface-base card-lift cursor-pointer overflow-hidden hover:shadow-card transition-all duration-200 border-2 hover:border-primary/30", onClick: action.action, "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "46", "data-source-line-end": "79", children: /* @__PURE__ */ jsxs(CardContent, { className: "card-padding flex flex-col items-start gap-4", "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "51", "data-source-line-end": "78", children: [
      /* @__PURE__ */ jsx("div", { className: cn("p-3 rounded-lg", action.variant === "primary" && "bg-primary/10 text-primary", action.variant === "secondary" && "bg-secondary/10 text-secondary", action.variant === "accent" && "bg-accent/10 text-accent"), "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "52", "data-source-line-end": "61", children: /* @__PURE__ */ jsx(SafeIcon, { name: action.icon, size: 28, strokeWidth: 2, "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "60", "data-source-line-end": "60" }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "62", "data-source-line-end": "65", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-item-title font-semibold", "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "63", "data-source-line-end": "63", children: action.title }),
        /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "64", "data-source-line-end": "64", children: action.description })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "mt-2 self-start text-primary hover:text-primary hover:bg-primary/10 px-0", onClick: (e) => {
        e.stopPropagation();
        action.action();
      }, "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "66", "data-source-line-end": "77", children: [
        "Go to ",
        action.title,
        /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowRight", size: 16, className: "ml-2", "data-source-file": "src/components/farmer-dashboard/QuickActions.tsx", "data-source-line-start": "76", "data-source-line-end": "76" })
      ] })
    ] }) }, action.id)) })
  ] });
}
function RecentOrders({
  orders
}) {
  const handleViewAll = () => {
    window.location.href = "./farmer-orders.html";
  };
  if (!orders || orders.length === 0) {
    return /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "22", "data-source-line-end": "35", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "card-padding pb-0", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "23", "data-source-line-end": "25", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-section-title", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "24", "data-source-line-end": "24", children: "Recent Orders" }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "card-padding", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "26", "data-source-line-end": "34", children: /* @__PURE__ */ jsx(EmptyState, { iconName: "ShoppingCart", title: "No Orders Yet", description: "Your orders will appear here once consumers start purchasing your products.", actionLabel: "View All Orders", onAction: handleViewAll, "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "27", "data-source-line-end": "33" }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(Card, { className: "surface-base overflow-hidden", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "40", "data-source-line-end": "113", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "card-padding pb-4 border-b border-border flex flex-row items-center justify-between", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "41", "data-source-line-end": "52", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-section-title", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "42", "data-source-line-end": "42", children: "Recent Orders" }),
      /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: handleViewAll, className: "text-primary hover:text-primary hover:bg-primary/10", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "43", "data-source-line-end": "51", children: [
        "View All",
        /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowRight", size: 16, className: "ml-2", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "50", "data-source-line-end": "50" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "p-0", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "53", "data-source-line-end": "112", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "54", "data-source-line-end": "111", children: /* @__PURE__ */ jsxs(Table, { "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "55", "data-source-line-end": "110", children: [
      /* @__PURE__ */ jsx(TableHeader, { "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "56", "data-source-line-end": "65", children: /* @__PURE__ */ jsxs(TableRow, { className: "hover:bg-transparent border-b border-border", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "57", "data-source-line-end": "64", children: [
        /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: "Order ID" }),
        /* @__PURE__ */ jsx(TableHead, { className: "w-40 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "59", "data-source-line-end": "59", children: "Quantity" }),
        /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: "Amount" }),
        /* @__PURE__ */ jsx(TableHead, { className: "w-40 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "61", "data-source-line-end": "61", children: "Status" }),
        /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap font-semibold", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "62", "data-source-line-end": "62", children: "Payment" }),
        /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap font-semibold text-right", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "63", "data-source-line-end": "63", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "66", "data-source-line-end": "109", children: orders.map((order) => /* @__PURE__ */ jsxs(TableRow, { className: "table-row-hover border-b border-border last:border-0", onClick: () => window.location.href = "./farmer-orders.html", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "68", "data-source-line-end": "107", children: [
        /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-sm font-medium text-primary", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "73", "data-source-line-end": "75", children: order.orderNumber }),
        /* @__PURE__ */ jsxs(TableCell, { className: "text-sm", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "76", "data-source-line-end": "78", children: [
          order.quantityTotal,
          " items"
        ] }),
        /* @__PURE__ */ jsxs(TableCell, { className: "font-semibold text-foreground", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "79", "data-source-line-end": "81", children: [
          "₹",
          order.totalAmount
        ] }),
        /* @__PURE__ */ jsx(TableCell, { "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "82", "data-source-line-end": "87", children: /* @__PURE__ */ jsx(StatusBadge, { status: order.status.toLowerCase().replace(" ", "_"), size: "sm", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "83", "data-source-line-end": "86" }) }),
        /* @__PURE__ */ jsx(TableCell, { "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "88", "data-source-line-end": "93", children: /* @__PURE__ */ jsx(StatusBadge, { status: order.paymentStatus === "Paid" ? "completed" : "pending", size: "sm", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "89", "data-source-line-end": "92" }) }),
        /* @__PURE__ */ jsx(TableCell, { className: "text-right", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "94", "data-source-line-end": "106", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: (e) => {
          e.stopPropagation();
          window.location.href = "./farmer-orders.html";
        }, className: "text-primary hover:text-primary hover:bg-primary/10", "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "95", "data-source-line-end": "105", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Eye", size: 16, "data-source-file": "src/components/farmer-dashboard/RecentOrders.tsx", "data-source-line-start": "104", "data-source-line-end": "104" }) }) })
      ] }, order.id)) })
    ] }) }) })
  ] });
}
function DemandAlerts({
  products
}) {
  const handleManageInventory = () => {
    window.location.href = "./inventory-management.html";
  };
  if (!products || products.length === 0) {
    return /* @__PURE__ */ jsxs(Card, { className: "surface-base border-accent/20 bg-accent/5", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "21", "data-source-line-end": "35", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "card-padding pb-0", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "22", "data-source-line-end": "27", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-section-title flex items-center gap-2", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "23", "data-source-line-end": "26", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Zap", size: 24, className: "text-accent", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "24", "data-source-line-end": "24" }),
        "High-Demand Alerts"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "card-padding", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "28", "data-source-line-end": "34", children: /* @__PURE__ */ jsxs("div", { className: "text-center py-8", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "29", "data-source-line-end": "33", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 48, className: "mx-auto mb-4 text-success", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "30", "data-source-line-end": "30" }),
        /* @__PURE__ */ jsx("h3", { className: "text-item-title font-semibold mb-1", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "31", "data-source-line-end": "31", children: "All Stocked!" }),
        /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "32", "data-source-line-end": "32", children: "Your inventory levels are healthy. No restocking alerts at this time." })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(Card, { className: "surface-base border-accent/20 bg-accent/5 overflow-hidden", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "40", "data-source-line-end": "96", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "card-padding pb-4 border-b border-accent/20 flex flex-row items-center justify-between", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "41", "data-source-line-end": "55", children: [
      /* @__PURE__ */ jsxs(CardTitle, { className: "text-section-title flex items-center gap-2", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "42", "data-source-line-end": "45", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "AlertTriangle", size: 24, className: "text-accent", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "43", "data-source-line-end": "43" }),
        "High-Demand Alerts"
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: handleManageInventory, className: "text-accent hover:text-accent hover:bg-accent/10", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "46", "data-source-line-end": "54", children: [
        "Manage Stock",
        /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowRight", size: 16, className: "ml-2", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "53", "data-source-line-end": "53" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "card-padding space-y-4", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "56", "data-source-line-end": "95", children: products.map((product) => /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between p-4 rounded-lg bg-background border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer group", onClick: () => window.location.href = "./inventory-management.html", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "58", "data-source-line-end": "93", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "63", "data-source-line-end": "75", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "64", "data-source-line-end": "71", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-item-title font-semibold group-hover:text-accent transition-colors", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "65", "data-source-line-end": "67", children: product.name }),
          /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-accent/10 text-accent border-accent/30", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "68", "data-source-line-end": "70", children: [
            product.stockQty,
            " ",
            product.unit,
            " left"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-caption", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "72", "data-source-line-end": "74", children: [
          "Category: ",
          /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "73", "data-source-line-end": "73", children: product.categoryId })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-2 ml-4", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "76", "data-source-line-end": "92", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-right", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "77", "data-source-line-end": "80", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-foreground", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "78", "data-source-line-end": "78", children: [
            "₹",
            product.pricePerUnit
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-caption", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "79", "data-source-line-end": "79", children: [
            "per ",
            product.unit
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: (e) => {
          e.stopPropagation();
          window.location.href = "./inventory-management.html";
        }, className: "text-accent hover:text-accent hover:bg-accent/10", "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "81", "data-source-line-end": "91", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Edit", size: 16, "data-source-file": "src/components/farmer-dashboard/DemandAlerts.tsx", "data-source-line-start": "90", "data-source-line-end": "90" }) })
      ] })
    ] }, product.id)) })
  ] });
}
const MARKET_DATA = {
  onion: {
    label: "Onion",
    avg: 20,
    history: [18, 19, 21, 20, 22, 19, 20]
  },
  tomato: {
    label: "Tomato",
    avg: 18,
    history: [16, 17, 18, 19, 18, 17, 18]
  },
  potato: {
    label: "Potato",
    avg: 24,
    history: [22, 23, 24, 25, 24, 23, 24]
  },
  carrot: {
    label: "Carrot",
    avg: 30,
    history: [28, 29, 31, 30, 32, 29, 30]
  },
  cabbage: {
    label: "Cabbage",
    avg: 16,
    history: [15, 16, 17, 16, 15, 16, 16]
  },
  cauliflower: {
    label: "Cauliflower",
    avg: 28,
    history: [26, 27, 29, 28, 30, 27, 28]
  },
  spinach: {
    label: "Spinach",
    avg: 22,
    history: [20, 21, 23, 22, 24, 21, 22]
  },
  wheat: {
    label: "Wheat",
    avg: 22,
    history: [21, 22, 22, 23, 22, 21, 22]
  }
};
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function getFairRange(avg) {
  return {
    min: Math.round(avg * 0.85),
    max: Math.round(avg * 1.15)
  };
}
function buildChartPoints(history, width, height) {
  const min = Math.min(...history) - 1;
  const max = Math.max(...history) + 1;
  return history.map((price, index) => {
    const x = index / (history.length - 1) * width;
    const y = height - (price - min) / (max - min) * height;
    return {
      x,
      y
    };
  });
}
function WholesaleMarketPrice() {
  const [crop, setCrop] = useState("onion");
  const [listingPrice, setListingPrice] = useState(MARKET_DATA.onion.avg);
  const market = MARKET_DATA[crop];
  const fairRange = useMemo(() => getFairRange(market.avg), [market.avg]);
  const chartWidth = 640;
  const chartHeight = 150;
  const points = buildChartPoints(market.history, chartWidth, chartHeight);
  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaPath = `${linePath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;
  const isAboveAverage = listingPrice > market.avg;
  const handleCropChange = (nextCrop) => {
    setCrop(nextCrop);
    setListingPrice(MARKET_DATA[nextCrop].avg);
  };
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised overflow-hidden", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "54", "data-source-line-end": "119", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border pb-4", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "55", "data-source-line-end": "82", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "56", "data-source-line-end": "81", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-section-title", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "57", "data-source-line-end": "57", children: "Wholesale Market Price" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "58", "data-source-line-end": "80", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "market-crop", className: "sr-only", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "59", "data-source-line-end": "59", children: "Select crop" }),
        /* @__PURE__ */ jsx("select", { id: "market-crop", value: crop, onChange: (event) => handleCropChange(event.target.value), className: "h-9 rounded-[--radius] border border-input bg-background px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "60", "data-source-line-end": "69", children: Object.entries(MARKET_DATA).map(([value, data]) => /* @__PURE__ */ jsx("option", { value, "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "67", "data-source-line-end": "67", children: data.label }, value)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-right", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "70", "data-source-line-end": "79", children: [
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "71", "data-source-line-end": "74", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "72", "data-source-line-end": "72", children: "Wholesale price" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-foreground", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "73", "data-source-line-end": "73", children: [
              "₹",
              market.avg,
              "/kg"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "75", "data-source-line-end": "78", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "76", "data-source-line-end": "76", children: "Fair range" }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-foreground", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "77", "data-source-line-end": "77", children: [
              "₹",
              fairRange.min,
              "–",
              fairRange.max
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "card-padding space-y-6", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "83", "data-source-line-end": "118", children: [
      /* @__PURE__ */ jsx("div", { "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "84", "data-source-line-end": "93", children: /* @__PURE__ */ jsx("div", { className: "h-44 w-full", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "85", "data-source-line-end": "92", children: /* @__PURE__ */ jsxs("svg", { viewBox: `0 0 ${chartWidth} ${chartHeight + 24}`, className: "h-full w-full", role: "img", "aria-label": `${market.label} wholesale price trend for the last seven days`, preserveAspectRatio: "none", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "86", "data-source-line-end": "91", children: [
        /* @__PURE__ */ jsx("path", { d: areaPath, fill: "hsl(var(--primary) / 0.12)", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "87", "data-source-line-end": "87" }),
        /* @__PURE__ */ jsx("path", { d: linePath, fill: "none", stroke: "hsl(var(--primary))", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "88", "data-source-line-end": "88" }),
        points.map((point, index) => /* @__PURE__ */ jsx("circle", { cx: point.x, cy: point.y, r: "4", fill: "hsl(var(--card))", stroke: "hsl(var(--primary))", strokeWidth: "2", vectorEffect: "non-scaling-stroke", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "89", "data-source-line-end": "89" }, DAYS[index])),
        DAYS.map((day, index) => /* @__PURE__ */ jsx("text", { x: points[index].x, y: chartHeight + 18, textAnchor: "middle", className: "fill-muted-foreground text-[11px]", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "90", "data-source-line-end": "90", children: day }, day))
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "95", "data-source-line-end": "117", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "96", "data-source-line-end": "99", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "listing-price", className: "text-label", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "97", "data-source-line-end": "97", children: "Your listing price" }),
          /* @__PURE__ */ jsxs("span", { className: "text-lg font-semibold text-primary", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "98", "data-source-line-end": "98", children: [
            "₹",
            listingPrice,
            "/kg"
          ] })
        ] }),
        /* @__PURE__ */ jsx("input", { id: "listing-price", type: "range", min: "10", max: "35", step: "1", value: listingPrice, onChange: (event) => setListingPrice(Number(event.target.value)), className: "w-full accent-primary", "aria-valuetext": `₹${listingPrice} per kilogram`, "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "100", "data-source-line-end": "110" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "111", "data-source-line-end": "116", children: [
          /* @__PURE__ */ jsx("span", { className: `rounded-full border px-3 py-1 text-xs font-medium ${isAboveAverage ? "border-[hsl(var(--warning)/0.3)] bg-[hsl(var(--warning)/0.1)] text-[hsl(var(--warning))]" : "border-[hsl(var(--success)/0.3)] bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))]"}`, "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "112", "data-source-line-end": "114", children: isAboveAverage ? "Above market average" : "Within fair range" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/farmer-dashboard/WholesaleMarketPrice.tsx", "data-source-line-start": "115", "data-source-line-end": "115", children: "Soft guidance only" })
        ] })
      ] })
    ] })
  ] });
}
function DashboardContent({
  farmerId
}) {
  const [isClient, setIsClient] = useState(true);
  const farmer = useState(() => getById(farmerId) || getAll()[0]);
  const products = useState(() => getByFarmerId(farmerId));
  const orders = useState(() => getByFarmerId$1(farmerId));
  const notifications = useState(() => getByRecipient("Farmer", farmerId));
  const [unreadCount, setUnreadCount] = useState(0);
  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  useEffect(() => {
    const unread = (notifications[0] || []).filter((n) => !n.isRead).length;
    setUnreadCount(unread);
  }, [notifications]);
  const [farmerData] = farmer;
  const [productList] = products;
  const [orderList] = orders;
  const [notificationList] = notifications;
  const stats = useMemo(() => {
    const totalProducts = productList.length;
    const outOfStock = productList.filter((p) => p.status === "Out of Stock").length;
    const lowStock = productList.filter((p) => p.status === "Low Stock").length;
    const totalRevenue = orderList.filter((o) => o.paymentStatus === "Paid").reduce((sum, o) => sum + o.totalAmount, 0);
    const pendingOrders = orderList.filter((o) => o.status === "Pending" || o.status === "Packed").length;
    const completedOrders = orderList.filter((o) => o.status === "Completed").length;
    return {
      totalProducts,
      outOfStock,
      lowStock,
      totalRevenue,
      pendingOrders,
      completedOrders
    };
  }, [productList, orderList]);
  const highDemandProducts = useMemo(() => {
    return productList.filter((p) => p.status === "Low Stock" || p.stockQty < 10).sort((a, b) => a.stockQty - b.stockQty).slice(0, 3);
  }, [productList]);
  const recentOrders = useMemo(() => {
    return orderList.sort((a, b) => new Date(b.placedAt).getTime() - new Date(a.placedAt).getTime()).slice(0, 5);
  }, [orderList]);
  if (!farmerData || !isClient) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "page-body space-y-8", "data-source-file": "src/components/farmer-dashboard/DashboardContent.tsx", "data-source-line-start": "84", "data-source-line-end": "107", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/farmer-dashboard/DashboardContent.tsx", "data-source-line-start": "86", "data-source-line-end": "91", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-page-title", "data-source-file": "src/components/farmer-dashboard/DashboardContent.tsx", "data-source-line-start": "87", "data-source-line-end": "87", children: [
        "Welcome back, ",
        farmerData.name,
        "!"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/farmer-dashboard/DashboardContent.tsx", "data-source-line-start": "88", "data-source-line-end": "90", children: "Manage your products, track orders, and monitor demand in real-time." })
    ] }),
    /* @__PURE__ */ jsx(WholesaleMarketPrice, { "data-source-file": "src/components/farmer-dashboard/DashboardContent.tsx", "data-source-line-start": "94", "data-source-line-end": "94" }),
    /* @__PURE__ */ jsx(StatsOverview, { stats, "data-source-file": "src/components/farmer-dashboard/DashboardContent.tsx", "data-source-line-start": "97", "data-source-line-end": "97" }),
    /* @__PURE__ */ jsx(QuickActions, { "data-source-file": "src/components/farmer-dashboard/DashboardContent.tsx", "data-source-line-start": "100", "data-source-line-end": "100" }),
    /* @__PURE__ */ jsx(RecentOrders, { orders: recentOrders, "data-source-file": "src/components/farmer-dashboard/DashboardContent.tsx", "data-source-line-start": "103", "data-source-line-end": "103" }),
    /* @__PURE__ */ jsx(DemandAlerts, { products: highDemandProducts, "data-source-file": "src/components/farmer-dashboard/DashboardContent.tsx", "data-source-line-start": "106", "data-source-line-end": "106" })
  ] });
}
const $$FarmerDashboard = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Farmer Dashboard - FarmHub Connect", userRole: "farmer", userName: "Ramesh Patel", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/dbb06f55-15b4-4b3a-acc7-fa8abf85f624.png", cartCount: 0 }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "DashboardContent", DashboardContent, { "client:load": true, farmerId: "far-001", "client:component-hydration": "load", "client:component-path": "@/components/farmer-dashboard/DashboardContent", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/farmer-dashboard.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/farmer-dashboard.astro";
const $$url = "/farmer-dashboard.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$FarmerDashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
