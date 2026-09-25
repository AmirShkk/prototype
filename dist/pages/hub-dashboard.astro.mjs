import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { C as Card, a as CardHeader, b as CardTitle, e as CardDescription, c as CardContent } from "../card.CNTisMc0.js";
import { c as cn, B as Button } from "../button.CEA35CrV.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { S as StatsCard } from "../StatsCard.Cb53PoCZ.js";
import { g as getAll } from "../HubService.B31WKdJX.js";
import { g as getByRecipient } from "../NotificationService.DJipxL0J.js";
import { renderers } from "../renderers.mjs";
function HubActionCard({
  title,
  description,
  iconName,
  actionLabel,
  onClick,
  variant = "primary"
}) {
  const variantClasses = {
    primary: "stat-card-primary",
    secondary: "stat-card-secondary",
    accent: "stat-card-accent"
  };
  const iconColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent"
  };
  return /* @__PURE__ */ jsxs(Card, { className: cn("surface-base card-lift border transition-all duration-200 cursor-pointer flex flex-col h-full", variantClasses[variant]), "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "37", "data-source-line-end": "66", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "41", "data-source-line-end": "54", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "42", "data-source-line-end": "53", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "43", "data-source-line-end": "46", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "44", "data-source-line-end": "44", children: title }),
        /* @__PURE__ */ jsx(CardDescription, { className: "mt-1.5 text-xs", "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "45", "data-source-line-end": "45", children: description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: cn("p-2.5 rounded-lg bg-background border border-border/50 shrink-0", iconColors[variant]), "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "47", "data-source-line-end": "52", children: /* @__PURE__ */ jsx(SafeIcon, { name: iconName, size: 20, strokeWidth: 2, "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "51", "data-source-line-end": "51" }) })
    ] }) }),
    /* @__PURE__ */ jsx(CardContent, { className: "flex-1 flex items-end pt-0", "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "55", "data-source-line-end": "65", children: /* @__PURE__ */ jsxs(Button, { onClick, variant: "default", size: "sm", className: "w-full font-semibold shadow-sm hover:shadow-md transition-shadow", "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "56", "data-source-line-end": "64", children: [
      actionLabel,
      /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowRight", size: 16, className: "ml-2", "data-source-file": "src/components/hub_dashboard/HubActionCard.tsx", "data-source-line-start": "63", "data-source-line-end": "63" })
    ] }) })
  ] });
}
function HubActivityLog({
  activities = []
}) {
  const getActivityIcon = (type) => {
    switch (type) {
      case "delivery_received":
        return "CheckCircle2";
      case "delivery_pending":
        return "Clock";
      case "consumer_pickup":
        return "Users";
      case "consumer_pickup_pending":
        return "AlertCircle";
      default:
        return "Circle";
    }
  };
  const getActivityColor = (type) => {
    switch (type) {
      case "delivery_received":
        return "text-success";
      case "delivery_pending":
        return "text-warning";
      case "consumer_pickup":
        return "text-accent";
      case "consumer_pickup_pending":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };
  if (!activities || activities.length === 0) {
    return /* @__PURE__ */ jsx(Card, { className: "surface-base", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "58", "data-source-line-end": "62", children: /* @__PURE__ */ jsx(CardContent, { className: "card-padding text-center py-12", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "59", "data-source-line-end": "61", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: "No recent activities" }) }) });
  }
  return /* @__PURE__ */ jsx(Card, { className: "surface-base overflow-hidden", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "67", "data-source-line-end": "122", children: /* @__PURE__ */ jsx("div", { className: "divide-y divide-border", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "68", "data-source-line-end": "121", children: activities.map((activity) => /* @__PURE__ */ jsxs("div", { className: "card-padding flex items-start gap-4 hover:bg-muted/30 transition-colors", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "70", "data-source-line-end": "119", children: [
    /* @__PURE__ */ jsx("div", { className: cn("mt-1 shrink-0", getActivityColor(activity.type)), "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "74", "data-source-line-end": "79", children: /* @__PURE__ */ jsx(SafeIcon, { name: getActivityIcon(activity.type), size: 20, strokeWidth: 2, "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "78", "data-source-line-end": "78" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "81", "data-source-line-end": "118", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2 mb-1", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "82", "data-source-line-end": "90", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-foreground", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "83", "data-source-line-end": "83", children: activity.title }),
        /* @__PURE__ */ jsx(Badge, { variant: activity.status === "completed" ? "default" : "secondary", className: "shrink-0 text-xs", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "84", "data-source-line-end": "89", children: activity.status === "completed" ? "Done" : "Pending" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-caption mb-2", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "92", "data-source-line-end": "92", children: activity.description }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs text-muted-foreground", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "94", "data-source-line-end": "117", children: [
        activity.farmerName && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "96", "data-source-line-end": "99", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "User", size: 14, "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "97", "data-source-line-end": "97" }),
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "98", "data-source-line-end": "98", children: activity.farmerName })
        ] }),
        activity.consumerName && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "102", "data-source-line-end": "105", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "User", size: 14, "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "103", "data-source-line-end": "103" }),
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "104", "data-source-line-end": "104", children: activity.consumerName })
        ] }),
        activity.quantity && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "108", "data-source-line-end": "111", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Package", size: 14, "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "109", "data-source-line-end": "109" }),
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "110", "data-source-line-end": "110", children: activity.quantity })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 ml-auto", "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "113", "data-source-line-end": "116", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 14, "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "114", "data-source-line-end": "114" }),
          /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_dashboard/HubActivityLog.tsx", "data-source-line-start": "115", "data-source-line-end": "115", children: activity.timestamp })
        ] })
      ] })
    ] })
  ] }, activity.id)) }) });
}
function HubDashboardContent() {
  const [isClient, setIsClient] = useState(true);
  const hubData = useMemo(() => getAll()[0] || null, []);
  const notifications = useMemo(() => hubData ? getByRecipient("Hub", hubData.id) : [], [hubData]);
  const activityLog = useMemo(() => [{
    id: "act-001",
    type: "delivery_received",
    title: "Delivery Received from Farmer",
    description: "Fresh Spinach Bundle from Sushila Devi",
    timestamp: "2026-09-06 09:30 AM",
    status: "completed",
    farmerName: "Sushila Devi",
    productName: "Fresh Spinach Bundle",
    quantity: "25 kg"
  }, {
    id: "act-002",
    type: "consumer_pickup",
    title: "Consumer Pickup Completed",
    description: "Order FGC-2026-1003 picked up by Ananya Roy",
    timestamp: "2026-09-06 08:15 AM",
    status: "completed",
    consumerName: "Ananya Roy",
    orderId: "FGC-2026-1003"
  }, {
    id: "act-003",
    type: "delivery_pending",
    title: "Delivery Pending",
    description: "Tomato Crate from Rajesh Kumar - Expected 10:00 AM",
    timestamp: "2026-09-06 09:45 AM",
    status: "pending",
    farmerName: "Rajesh Kumar",
    productName: "Tomato Crate",
    quantity: "40 kg"
  }, {
    id: "act-004",
    type: "consumer_pickup",
    title: "Consumer Pickup Pending",
    description: "Order FGC-2026-1004 awaiting pickup by Vikram Singh",
    timestamp: "2026-09-06 10:20 AM",
    status: "pending",
    consumerName: "Vikram Singh",
    orderId: "FGC-2026-1004"
  }], []);
  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  if (!hubData) {
    return /* @__PURE__ */ jsx("div", { className: "page-body", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "78", "data-source-line-end": "82", children: /* @__PURE__ */ jsx("div", { className: "text-center py-16", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "79", "data-source-line-end": "81", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "80", "data-source-line-end": "80", children: "Hub data not available" }) }) });
  }
  const unreadNotifications = notifications.filter((n) => !n.isRead).length;
  const pendingDeliveries = activityLog.filter((a) => a.type === "delivery_pending").length;
  const pendingPickups = activityLog.filter((a) => a.type === "consumer_pickup" && a.status === "pending").length;
  return /* @__PURE__ */ jsxs("div", { className: "page-body space-y-8", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "91", "data-source-line-end": "212", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "93", "data-source-line-end": "98", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-page-title", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "94", "data-source-line-end": "94", children: "Hub Dashboard" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "95", "data-source-line-end": "97", children: [
        "Welcome back, ",
        hubData.managerName,
        ". Manage incoming deliveries and consumer pickups."
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "surface-raised border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "101", "data-source-line-end": "136", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "102", "data-source-line-end": "115", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "103", "data-source-line-end": "114", children: [
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "104", "data-source-line-end": "107", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "105", "data-source-line-end": "105", children: hubData.name }),
          /* @__PURE__ */ jsx(CardDescription, { className: "mt-1", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "106", "data-source-line-end": "106", children: hubData.code })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-right space-y-1", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "108", "data-source-line-end": "113", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success border border-success/20", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "109", "data-source-line-end": "112", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-success animate-pulse", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "110", "data-source-line-end": "110" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "111", "data-source-line-end": "111", children: "Operational" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "116", "data-source-line-end": "135", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "117", "data-source-line-end": "134", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "118", "data-source-line-end": "121", children: [
          /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "119", "data-source-line-end": "119", children: "Location" }),
          /* @__PURE__ */ jsxs("p", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "120", "data-source-line-end": "120", children: [
            hubData.city,
            ", ",
            hubData.region
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "122", "data-source-line-end": "125", children: [
          /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "123", "data-source-line-end": "123", children: "Manager" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "124", "data-source-line-end": "124", children: hubData.managerName })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "126", "data-source-line-end": "129", children: [
          /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "127", "data-source-line-end": "127", children: "Contact" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "128", "data-source-line-end": "128", children: hubData.phone })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "130", "data-source-line-end": "133", children: [
          /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "131", "data-source-line-end": "131", children: "Operating Hours" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "132", "data-source-line-end": "132", children: hubData.operatingHours })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "139", "data-source-line-end": "164", children: [
      /* @__PURE__ */ jsx(StatsCard, { title: "Pending Deliveries", value: pendingDeliveries, iconName: "Inbox", variant: "primary", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "140", "data-source-line-end": "145" }),
      /* @__PURE__ */ jsx(StatsCard, { title: "Pending Pickups", value: pendingPickups, iconName: "ShoppingCart", variant: "secondary", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "146", "data-source-line-end": "151" }),
      /* @__PURE__ */ jsx(StatsCard, { title: "Unread Alerts", value: unreadNotifications, iconName: "Bell", variant: "accent", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "152", "data-source-line-end": "157" }),
      /* @__PURE__ */ jsx(StatsCard, { title: "Total Transactions", value: activityLog.length, iconName: "BarChart3", variant: "muted", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "158", "data-source-line-end": "163" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "167", "data-source-line-end": "199", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-section-title", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "168", "data-source-line-end": "168", children: "Quick Actions" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "169", "data-source-line-end": "198", children: [
        /* @__PURE__ */ jsx(HubActionCard, { title: "Incoming Logs", description: "Track farmer deliveries and verify receipts", iconName: "TrendingDown", actionLabel: "View Logs", onClick: () => window.location.href = "./hub-logistics.html", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "170", "data-source-line-end": "176" }),
        /* @__PURE__ */ jsx(HubActionCard, { title: "Receive Delivery", description: "Check-in new products from farmers", iconName: "Truck", actionLabel: "Receive", onClick: () => window.location.href = "./hub-receiving-log.html", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "177", "data-source-line-end": "183" }),
        /* @__PURE__ */ jsx(HubActionCard, { title: "Consumer Pickup", description: "Verify and process consumer pickups", iconName: "Users", actionLabel: "Verify", onClick: () => window.location.href = "./hub-pickup-verification.html", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "184", "data-source-line-end": "190" }),
        /* @__PURE__ */ jsx(HubActionCard, { title: "Track Record", description: "View complete audit trail and ledger", iconName: "FileText", actionLabel: "View Ledger", onClick: () => window.location.href = "./hub-ledger.html", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "191", "data-source-line-end": "197" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "202", "data-source-line-end": "211", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "203", "data-source-line-end": "209", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-section-title", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "204", "data-source-line-end": "204", children: "Recent Activity" }),
        /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "text-primary hover:text-primary/80", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "205", "data-source-line-end": "208", children: [
          "View All",
          /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowRight", size: 16, className: "ml-2", "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "207", "data-source-line-end": "207" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(HubActivityLog, { activities: activityLog.slice(0, 5), "data-source-file": "src/components/hub_dashboard/HubDashboardContent.tsx", "data-source-line-start": "210", "data-source-line-end": "210" })
    ] })
  ] });
}
const $$HubDashboard = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Hub Dashboard - FarmHub Connect", userRole: "hub", userName: "Neha Shah", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/954e42f5-6563-482e-b5d4-63897dba9a27.png", cartCount: 0 }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "HubDashboardContent", HubDashboardContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/hub_dashboard/HubDashboardContent", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/hub-dashboard.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/hub-dashboard.astro";
const $$url = "/hub-dashboard.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$HubDashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
