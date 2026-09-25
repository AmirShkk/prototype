import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro } from "../astro/server.ANrUSrte.js";
import { $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { c as cn, B as Button } from "../button.CEA35CrV.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../card.CNTisMc0.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { c as getByIdVO, a as getById, d as getAll } from "../OrderService.DlXVTjI7.js";
import { g as getByOrderId } from "../OrderItemService.D9ko_rx0.js";
import { S as StatusBadge } from "../StatusBadge.CWDBgqR0.js";
import { L as LoadingSpinner } from "../LoadingSpinner.D1-awNdt.js";
import { renderers } from "../renderers.mjs";
const getIconForStage = (id) => {
  const iconMap = {
    "ordered": "ClipboardCheck",
    "at-farm": "Sprout",
    "dispatched": "Truck",
    "arrived-hub": "Warehouse",
    "completed": "CheckCircle2"
  };
  return iconMap[id] || "Circle";
};
function OrderStatusTimeline({
  stages = []
}) {
  if (!stages || stages.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "relative space-y-0 py-2", "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "34", "data-source-line-end": "102", children: stages.map((stage, index) => {
    const isLast = index === stages.length - 1;
    const isCompleted = stage.status === "completed";
    const isActive = stage.status === "active";
    const isPending = stage.status === "pending";
    return /* @__PURE__ */ jsxs("div", { className: "relative flex gap-4 pb-8 last:pb-0 group", "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "42", "data-source-line-end": "99", children: [
      !isLast && /* @__PURE__ */ jsx("div", { className: cn("absolute left-[19px] top-10 bottom-0 w-0.5 transition-colors duration-300", isCompleted ? "bg-primary" : "bg-muted"), "aria-hidden": "true", "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "45", "data-source-line-end": "51" }),
      /* @__PURE__ */ jsxs("div", { className: cn("relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300", isCompleted && "bg-primary border-primary text-primary-foreground", isActive && "bg-background border-primary text-primary ring-4 ring-primary/10", isPending && "bg-muted border-muted text-muted-foreground"), "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "55", "data-source-line-end": "73", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: getIconForStage(stage.id), size: 20, strokeWidth: isActive ? 2.5 : 2, "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "63", "data-source-line-end": "67" }),
        isActive && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full animate-ping bg-primary/20 -z-10", "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "71", "data-source-line-end": "71" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col pt-1.5", "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "76", "data-source-line-end": "98", children: [
        /* @__PURE__ */ jsx("span", { className: cn("text-base font-medium transition-colors", isCompleted && "text-foreground", isActive && "text-primary font-semibold", isPending && "text-muted-foreground"), "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "77", "data-source-line-end": "86", children: stage.label }),
        stage.timestamp && /* @__PURE__ */ jsx("span", { className: "text-caption mt-0.5", "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "89", "data-source-line-end": "89", children: stage.timestamp }),
        isActive && /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-primary mt-1 flex items-center gap-1", "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "93", "data-source-line-end": "96", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse", "data-source-file": "src/components/order_tracking/OrderStatusTimeline.tsx", "data-source-line-start": "94", "data-source-line-end": "94" }),
          "In Progress"
        ] })
      ] })
    ] }, stage.id);
  }) });
}
function OrderDetailCard({
  orderNumber,
  totalAmount,
  status,
  pickupCode,
  farmer,
  hub
}) {
  const statusMap = {
    "Pending": "pending",
    "Packed": "packed",
    "Dispatched": "dispatched",
    "Arrived at Hub": "received",
    "Completed": "completed",
    "Cancelled": "cancelled"
  };
  const displayStatus = statusMap[status] || "pending";
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "39", "data-source-line-end": "124", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "40", "data-source-line-end": "42", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "41", "data-source-line-end": "41", children: "Order Summary" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "card-padding space-y-4", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "43", "data-source-line-end": "123", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "45", "data-source-line-end": "52", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "46", "data-source-line-end": "48", children: "Order Number" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-foreground font-mono", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "49", "data-source-line-end": "51", children: orderNumber })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "55", "data-source-line-end": "60", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "56", "data-source-line-end": "58", children: "Status" }),
        /* @__PURE__ */ jsx(StatusBadge, { status: displayStatus, size: "md", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "59", "data-source-line-end": "59" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1 p-3 bg-muted/30 rounded-lg border border-border", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "63", "data-source-line-end": "73", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "64", "data-source-line-end": "66", children: "Pickup Code" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-primary font-mono tracking-widest", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "67", "data-source-line-end": "69", children: pickupCode }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "70", "data-source-line-end": "72", children: "Show this code at the hub desk" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1 pt-2 border-t border-border", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "76", "data-source-line-end": "83", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "77", "data-source-line-end": "79", children: "Total Amount" }),
        /* @__PURE__ */ jsxs("p", { className: "text-3xl font-bold text-primary", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "80", "data-source-line-end": "82", children: [
          "₹",
          totalAmount
        ] })
      ] }),
      farmer && /* @__PURE__ */ jsxs("div", { className: "space-y-2 pt-2 border-t border-border", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "87", "data-source-line-end": "107", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "88", "data-source-line-end": "91", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Sprout", size: 12, "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "89", "data-source-line-end": "89" }),
          "From Farmer"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "92", "data-source-line-end": "106", children: [
          /* @__PURE__ */ jsx("img", { src: farmer.avatarUrl, alt: farmer.name, className: "w-8 h-8 rounded-full object-cover border border-border", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "93", "data-source-line-end": "97" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "98", "data-source-line-end": "105", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground truncate", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "99", "data-source-line-end": "101", children: farmer.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground truncate", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "102", "data-source-line-end": "104", children: [
              farmer.village,
              ", ",
              farmer.region
            ] })
          ] })
        ] })
      ] }),
      hub && /* @__PURE__ */ jsxs("div", { className: "space-y-2 pt-2 border-t border-border", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "112", "data-source-line-end": "121", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "113", "data-source-line-end": "116", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Warehouse", size: 12, "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "114", "data-source-line-end": "114" }),
          "Pickup Hub"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "117", "data-source-line-end": "120", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "118", "data-source-line-end": "118", children: hub.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/order_tracking/OrderDetailCard.tsx", "data-source-line-start": "119", "data-source-line-end": "119", children: hub.code })
        ] })
      ] })
    ] })
  ] });
}
function LiveTrackingMap({
  orderStatus,
  hubName,
  hubAddress,
  isClient
}) {
  const [animateMarker, setAnimateMarker] = useState(false);
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setAnimateMarker(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isClient]);
  const isInTransit = ["Packed", "Dispatched"].includes(orderStatus);
  const isDelivered = ["Arrived at Hub", "Completed"].includes(orderStatus);
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised overflow-hidden", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "35", "data-source-line-end": "149", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "36", "data-source-line-end": "41", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "37", "data-source-line-end": "40", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Map", size: 20, className: "text-accent", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "38", "data-source-line-end": "38" }),
      "Live Tracking"
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "card-padding p-0", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "42", "data-source-line-end": "148", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full h-64 md:h-80 bg-gradient-to-br from-muted/50 to-muted/30 border-b border-border overflow-hidden", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "44", "data-source-line-end": "122", children: [
        /* @__PURE__ */ jsx("img", { src: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/1a8b4e7e-697c-4944-bd25-e6734173cb3c.png", alt: "Delivery Route Map", className: "w-full h-full object-cover", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "46", "data-source-line-end": "50" }),
        /* @__PURE__ */ jsx("svg", { className: "absolute inset-0 w-full h-full", viewBox: "0 0 800 400", preserveAspectRatio: "none", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "53", "data-source-line-end": "69", children: /* @__PURE__ */ jsx("line", { x1: "100", y1: "300", x2: "700", y2: "100", stroke: "hsl(var(--primary))", strokeWidth: "3", strokeDasharray: "8,4", opacity: "0.6", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "59", "data-source-line-end": "68" }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-12 left-12 flex flex-col items-center", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "72", "data-source-line-end": "79", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg border-4 border-card", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "73", "data-source-line-end": "75", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Sprout", size: 20, strokeWidth: 2, "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "74", "data-source-line-end": "74" }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 bg-card px-2 py-1 rounded shadow-md border border-border whitespace-nowrap text-xs font-medium", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "76", "data-source-line-end": "78", children: "Farm Location" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-8 right-12 flex flex-col items-center", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "82", "data-source-line-end": "96", children: [
          /* @__PURE__ */ jsx("div", { className: cn("w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-card transition-all duration-500", isDelivered || isInTransit ? "bg-success text-white scale-110" : "bg-muted text-muted-foreground"), "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "83", "data-source-line-end": "92", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Warehouse", size: 20, strokeWidth: 2, "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "91", "data-source-line-end": "91" }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 bg-card px-2 py-1 rounded shadow-md border border-border whitespace-nowrap text-xs font-medium", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "93", "data-source-line-end": "95", children: hubName })
        ] }),
        isInTransit && /* @__PURE__ */ jsx("div", { className: cn("absolute w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg border-2 border-card transition-all duration-1000", animateMarker ? "opacity-100" : "opacity-0"), style: {
          left: animateMarker ? "calc(87.5% - 16px)" : "calc(12.5% - 16px)",
          top: animateMarker ? "calc(25% - 16px)" : "calc(75% - 16px)"
        }, "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "100", "data-source-line-end": "111", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Truck", size: 16, strokeWidth: 2.5, "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "110", "data-source-line-end": "110" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-card/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-border shadow-md", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "115", "data-source-line-end": "121", children: /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold text-foreground", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "116", "data-source-line-end": "120", children: [
          isInTransit && "🚚 In Transit",
          isDelivered && "✓ Arrived at Hub",
          !isInTransit && !isDelivered && "📦 Preparing"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card-padding space-y-2 bg-muted/20", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "125", "data-source-line-end": "147", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "126", "data-source-line-end": "138", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 16, className: "text-primary mt-0.5 flex-shrink-0", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "127", "data-source-line-end": "131" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "132", "data-source-line-end": "137", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "133", "data-source-line-end": "133", children: hubName }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "134", "data-source-line-end": "136", children: hubAddress })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border", "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "139", "data-source-line-end": "146", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 14, "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "140", "data-source-line-end": "140" }),
          /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/order_tracking/LiveTrackingMap.tsx", "data-source-line-start": "141", "data-source-line-end": "145", children: [
            isInTransit && "Estimated arrival: Today",
            isDelivered && "Ready for pickup",
            !isInTransit && !isDelivered && "Preparing for dispatch"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function OrderTrackingContent({
  currentPath
}) {
  const [isClient, setIsClient] = useState(true);
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(() => {
    const allOrders = getAll();
    return allOrders.length > 0 ? allOrders[0] : null;
  });
  const [orderVO, setOrderVO] = useState(() => {
    const allOrders = getAll();
    const defaultOrder = allOrders.length > 0 ? allOrders[0] : null;
    return defaultOrder ? getByIdVO(defaultOrder.id) : null;
  });
  const [orderItems, setOrderItems] = useState(() => {
    const allOrders = getAll();
    const defaultOrder = allOrders.length > 0 ? allOrders[0] : null;
    return defaultOrder ? getByOrderId(defaultOrder.id) : [];
  });
  useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const paramOrderId = params.get("orderId");
    if (paramOrderId) {
      const fetchedOrder = getById(paramOrderId);
      if (fetchedOrder) {
        setOrderId(paramOrderId);
        setOrder(fetchedOrder);
        const vo = getByIdVO(paramOrderId);
        setOrderVO(vo || null);
        const items = getByOrderId(paramOrderId);
        setOrderItems(items);
      } else {
        const allOrders = getAll();
        if (allOrders.length > 0) {
          const fallbackOrder = allOrders[0];
          setOrderId(fallbackOrder.id);
          setOrder(fallbackOrder);
          const vo = getByIdVO(fallbackOrder.id);
          setOrderVO(vo || null);
          const items = getByOrderId(fallbackOrder.id);
          setOrderItems(items);
        }
      }
    }
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  const timelineStages = useMemo(() => {
    if (!order) return [];
    const stages = [{
      id: "ordered",
      label: "Order Placed",
      status: order.status !== "Pending" ? "completed" : "active",
      timestamp: order.placedAt ? new Date(order.placedAt).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : ""
    }, {
      id: "at-farm",
      label: "At Farm",
      status: order.status === "Packed" || order.status === "Dispatched" || order.status === "Arrived at Hub" || order.status === "Completed" ? "completed" : order.status === "Pending" ? "pending" : "active",
      timestamp: order.packedAt ? new Date(order.packedAt).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : ""
    }, {
      id: "dispatched",
      label: "Dispatched",
      status: order.status === "Dispatched" || order.status === "Arrived at Hub" || order.status === "Completed" ? order.status === "Dispatched" ? "active" : "completed" : "pending",
      timestamp: order.dispatchedAt ? new Date(order.dispatchedAt).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : ""
    }, {
      id: "arrived-hub",
      label: "Arrived at Hub",
      status: order.status === "Arrived at Hub" || order.status === "Completed" ? order.status === "Arrived at Hub" ? "active" : "completed" : "pending",
      timestamp: order.receivedAt ? new Date(order.receivedAt).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : ""
    }, {
      id: "completed",
      label: "Picked Up",
      status: order.status === "Completed" ? "completed" : "pending",
      timestamp: order.completedAt ? new Date(order.completedAt).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }) : ""
    }];
    return stages;
  }, [order]);
  const handleContinueShopping = () => {
    window.location.href = "./consumer-marketplace.html";
  };
  if (!order || !orderVO) {
    return /* @__PURE__ */ jsx("div", { className: "page-body flex items-center justify-center min-h-[60vh]", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "164", "data-source-line-end": "166", children: /* @__PURE__ */ jsx(LoadingSpinner, { size: "lg", text: "Loading order details...", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "165", "data-source-line-end": "165" }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "page-body space-y-8", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "171", "data-source-line-end": "323", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "173", "data-source-line-end": "188", children: [
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "174", "data-source-line-end": "179", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-page-title mb-2", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "175", "data-source-line-end": "175", children: "Order Tracking" }),
        /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "176", "data-source-line-end": "178", children: "Track your order from farm to hub pickup in real-time" })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleContinueShopping, variant: "outline", className: "w-full md:w-auto", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "180", "data-source-line-end": "187", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 16, className: "mr-2", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "185", "data-source-line-end": "185" }),
        "Continue Shopping"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "190", "data-source-line-end": "322", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "192", "data-source-line-end": "217", children: [
        /* @__PURE__ */ jsxs(Card, { className: "surface-raised", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "194", "data-source-line-end": "206", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "195", "data-source-line-end": "200", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "196", "data-source-line-end": "199", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 20, className: "text-primary", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "197", "data-source-line-end": "197" }),
            "Delivery Progress"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "card-padding", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "201", "data-source-line-end": "205", children: (isClient || !isClient) && /* @__PURE__ */ jsx(OrderStatusTimeline, { stages: timelineStages, "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "203", "data-source-line-end": "203" }) })
        ] }),
        (isClient || !isClient) && /* @__PURE__ */ jsx(LiveTrackingMap, { orderStatus: order.status, hubName: orderVO.hub?.name || "Hub", hubAddress: orderVO.hub?.address || "", isClient, "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "210", "data-source-line-end": "215" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "220", "data-source-line-end": "321", children: [
        /* @__PURE__ */ jsx(OrderDetailCard, { orderNumber: order.orderNumber, totalAmount: order.totalAmount, status: order.status, pickupCode: order.pickupCode, farmer: orderVO.farmer, hub: orderVO.hub, "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "222", "data-source-line-end": "229" }),
        /* @__PURE__ */ jsxs(Card, { className: "surface-raised", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "232", "data-source-line-end": "265", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "233", "data-source-line-end": "238", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-base flex items-center gap-2", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "234", "data-source-line-end": "237", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "ShoppingBag", size: 18, className: "text-secondary", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "235", "data-source-line-end": "235" }),
            "Items (",
            orderItems.length,
            ")"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "card-padding space-y-3", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "239", "data-source-line-end": "264", children: orderItems.length > 0 ? orderItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pb-3 border-b border-border last:border-0 last:pb-0", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "242", "data-source-line-end": "257", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "246", "data-source-line-end": "253", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "247", "data-source-line-end": "249", children: item.productId }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "250", "data-source-line-end": "252", children: [
                "Qty: ",
                item.quantity
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-primary", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "254", "data-source-line-end": "256", children: [
              "₹",
              item.lineTotal
            ] })
          ] }, item.id)) : /* @__PURE__ */ jsx("p", { className: "text-caption text-muted-foreground", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "260", "data-source-line-end": "262", children: "No items in this order" }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "surface-raised", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "268", "data-source-line-end": "320", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "269", "data-source-line-end": "274", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-base flex items-center gap-2", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "270", "data-source-line-end": "273", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 18, className: "text-accent", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "271", "data-source-line-end": "271" }),
            "Contact Info"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "card-padding space-y-4", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "275", "data-source-line-end": "319", children: [
            orderVO.farmer && /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "277", "data-source-line-end": "291", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "278", "data-source-line-end": "280", children: "Farmer" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "281", "data-source-line-end": "283", children: orderVO.farmer.name }),
              /* @__PURE__ */ jsxs("a", { href: `tel:${orderVO.farmer.phone}`, className: "text-sm text-primary hover:underline flex items-center gap-1", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "284", "data-source-line-end": "290", children: [
                /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 14, "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "288", "data-source-line-end": "288" }),
                orderVO.farmer.phone
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border-t border-border pt-3", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "294", "data-source-line-end": "318", children: orderVO.hub && /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "296", "data-source-line-end": "316", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-semibold", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "297", "data-source-line-end": "299", children: "Hub Location" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "300", "data-source-line-end": "302", children: orderVO.hub.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "303", "data-source-line-end": "305", children: orderVO.hub.address }),
              /* @__PURE__ */ jsxs("a", { href: `tel:${orderVO.hub.phone}`, className: "text-sm text-primary hover:underline flex items-center gap-1 mt-2", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "306", "data-source-line-end": "312", children: [
                /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 14, "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "310", "data-source-line-end": "310" }),
                orderVO.hub.phone
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-2", "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "313", "data-source-line-end": "315", children: [
                /* @__PURE__ */ jsx("strong", { "data-source-file": "src/components/order_tracking/OrderTrackingContent.tsx", "data-source-line-start": "314", "data-source-line-end": "314", children: "Hours:" }),
                " ",
                orderVO.hub.operatingHours
              ] })
            ] }) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const $$Astro = createAstro();
const $$OrderTracking = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$OrderTracking;
  const currentPath = Astro.url.pathname;
  return renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Order Tracking", userRole: "consumer", userName: "Ananya Roy", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/34f3115a-ee53-4b16-9931-b4c23479c5ee.png", cartCount: 2 }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "OrderTrackingContent", OrderTrackingContent, { "client:load": true, currentPath, "client:component-hydration": "load", "client:component-path": "@/components/order_tracking/OrderTrackingContent", "client:component-export": "default" })}
` })}`;
}, "/vercel/share/v0-project/src/pages/order-tracking.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/order-tracking.astro";
const $$url = "/order-tracking.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$OrderTracking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
