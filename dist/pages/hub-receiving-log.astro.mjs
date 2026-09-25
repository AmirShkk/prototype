import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { toast } from "sonner";
import { D as DeliveryService } from "../DeliveryService.F3UzbMk9.js";
import { O as OrderService } from "../OrderService.DlXVTjI7.js";
import { F as FarmerService } from "../FarmerService.BuornUJX.js";
import { H as HubService } from "../HubService.B31WKdJX.js";
import { B as Button, c as cn } from "../button.CEA35CrV.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { S as StatusBadge } from "../StatusBadge.CWDBgqR0.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../card.CNTisMc0.js";
import { I as Input } from "../input.DT93Plg7.js";
import { L as Label } from "../label.DvS5qdQt.js";
import { R as RadioGroup, a as RadioGroupItem } from "../radio-group.CSkhEvSl.js";
import { E as EmptyState } from "../EmptyState.DgJ8Yi6C.js";
import { T as Tabs, a as TabsList, b as TabsTrigger } from "../tabs.xtS8QLDJ.js";
import { S as SearchBar } from "../SearchBar.ZrgBQj3h.js";
import { renderers } from "../renderers.mjs";
function ReceivingLogHeader({
  hubName
}) {
  const handleBack = () => {
    window.location.href = "./hub-logistics.html";
  };
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/hub_receiving_log/ReceivingLogHeader.tsx", "data-source-line-start": "15", "data-source-line-end": "31", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/hub_receiving_log/ReceivingLogHeader.tsx", "data-source-line-start": "16", "data-source-line-end": "30", children: [
    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: handleBack, className: "text-muted-foreground hover:text-foreground", "aria-label": "Go back to hub logistics", "data-source-file": "src/components/hub_receiving_log/ReceivingLogHeader.tsx", "data-source-line-start": "17", "data-source-line-end": "25", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 20, strokeWidth: 2, "data-source-file": "src/components/hub_receiving_log/ReceivingLogHeader.tsx", "data-source-line-start": "24", "data-source-line-end": "24" }) }),
    /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_receiving_log/ReceivingLogHeader.tsx", "data-source-line-start": "26", "data-source-line-end": "29", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-page-title", "data-source-file": "src/components/hub_receiving_log/ReceivingLogHeader.tsx", "data-source-line-start": "27", "data-source-line-end": "27", children: "Farmer Delivery Log" }),
      /* @__PURE__ */ jsxs("p", { className: "text-caption mt-1", "data-source-file": "src/components/hub_receiving_log/ReceivingLogHeader.tsx", "data-source-line-start": "28", "data-source-line-end": "28", children: [
        hubName,
        " • Receiving & Verification"
      ] })
    ] })
  ] }) });
}
function DeliveryListItem({
  delivery,
  isSelected,
  onSelect
}) {
  const handleClick = () => {
    onSelect(delivery.id);
  };
  const statusMap = {
    "Prepared": "pending",
    "In Transit": "dispatched",
    "Received at Hub": "received",
    "Rejected": "cancelled"
  };
  return /* @__PURE__ */ jsx("div", { onClick: handleClick, className: cn("p-4 cursor-pointer transition-all duration-200 hover:bg-muted/50 border-l-4", isSelected ? "bg-primary/5 border-primary" : "border-transparent"), "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "32", "data-source-line-end": "69", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "39", "data-source-line-end": "68", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "40", "data-source-line-end": "49", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "41", "data-source-line-end": "47", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "42", "data-source-line-end": "45", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground truncate", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "43", "data-source-line-end": "43", children: delivery.id }),
          /* @__PURE__ */ jsx(StatusBadge, { status: statusMap[delivery.status] || "pending", size: "sm", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "44", "data-source-line-end": "44" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-caption truncate", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "46", "data-source-line-end": "46", children: delivery.vehicleLabel })
      ] }),
      /* @__PURE__ */ jsx(SafeIcon, { name: "ChevronRight", size: 18, className: "text-muted-foreground shrink-0 mt-1", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "48", "data-source-line-end": "48" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "51", "data-source-line-end": "60", children: [
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "52", "data-source-line-end": "55", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "53", "data-source-line-end": "53", children: "Farmer" }),
        /* @__PURE__ */ jsx("p", { className: "font-medium truncate", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "54", "data-source-line-end": "54", children: delivery.farmerName })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "56", "data-source-line-end": "59", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "57", "data-source-line-end": "57", children: "Order" }),
        /* @__PURE__ */ jsx("p", { className: "font-medium truncate", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: delivery.orderNumber })
      ] })
    ] }),
    delivery.dispatchedAt && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "63", "data-source-line-end": "66", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Clock", size: 14, "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "64", "data-source-line-end": "64" }),
      /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/hub_receiving_log/DeliveryListItem.tsx", "data-source-line-start": "65", "data-source-line-end": "65", children: [
        "Dispatched: ",
        new Date(delivery.dispatchedAt).toLocaleString()
      ] })
    ] })
  ] }) });
}
function DeliveryReceiptForm({
  delivery,
  onSubmit,
  onCancel
}) {
  const [authMethod, setAuthMethod] = useState("QR");
  const [authReference, setAuthReference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authReference.trim()) {
      toast.error(`Please enter the ${authMethod} reference`);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      onSubmit(authMethod, authReference);
      setAuthReference("");
      setIsSubmitting(false);
    }, 500);
  };
  const handleReset = () => {
    setAuthReference("");
    setAuthMethod("QR");
  };
  return /* @__PURE__ */ jsxs(Card, { className: "surface-base h-full flex flex-col overflow-hidden", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "49", "data-source-line-end": "179", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "border-b border-border pb-4", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "50", "data-source-line-end": "53", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "51", "data-source-line-end": "51", children: "Receipt Verification" }),
      /* @__PURE__ */ jsxs("p", { className: "text-caption mt-1", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "52", "data-source-line-end": "52", children: [
        "Delivery ",
        delivery.id
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "flex-1 overflow-y-auto min-h-0 p-4 space-y-6", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "55", "data-source-line-end": "178", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 p-3 bg-muted/30 rounded-lg border border-border", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "57", "data-source-line-end": "76", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between gap-2", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "58", "data-source-line-end": "63", children: /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "59", "data-source-line-end": "62", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: "Vehicle" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "61", "data-source-line-end": "61", children: delivery.vehicleLabel })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between gap-2", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "64", "data-source-line-end": "69", children: /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "65", "data-source-line-end": "68", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "66", "data-source-line-end": "66", children: "Farmer" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "67", "data-source-line-end": "67", children: delivery.farmerName })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between gap-2", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "70", "data-source-line-end": "75", children: /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "71", "data-source-line-end": "74", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "72", "data-source-line-end": "72", children: "Order" }),
          /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "73", "data-source-line-end": "73", children: delivery.orderNumber })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "79", "data-source-line-end": "110", children: [
        /* @__PURE__ */ jsx(Label, { className: "text-label", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "80", "data-source-line-end": "80", children: "Authentication Method" }),
        /* @__PURE__ */ jsxs(RadioGroup, { value: authMethod, onValueChange: (val) => setAuthMethod(val), "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "81", "data-source-line-end": "109", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 p-2 rounded hover:bg-muted/30 cursor-pointer", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "82", "data-source-line-end": "90", children: [
            /* @__PURE__ */ jsx(RadioGroupItem, { value: "QR", id: "qr-method", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "83", "data-source-line-end": "83" }),
            /* @__PURE__ */ jsx(Label, { htmlFor: "qr-method", className: "cursor-pointer flex-1 font-normal", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "84", "data-source-line-end": "89", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "85", "data-source-line-end": "88", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "QrCode", size: 16, "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "86", "data-source-line-end": "86" }),
              /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "87", "data-source-line-end": "87", children: "QR Code Scan" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 p-2 rounded hover:bg-muted/30 cursor-pointer", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "91", "data-source-line-end": "99", children: [
            /* @__PURE__ */ jsx(RadioGroupItem, { value: "OTP", id: "otp-method", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "92", "data-source-line-end": "92" }),
            /* @__PURE__ */ jsx(Label, { htmlFor: "otp-method", className: "cursor-pointer flex-1 font-normal", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "93", "data-source-line-end": "98", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "94", "data-source-line-end": "97", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "Lock", size: 16, "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "95", "data-source-line-end": "95" }),
              /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "96", "data-source-line-end": "96", children: "OTP Verification" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 p-2 rounded hover:bg-muted/30 cursor-pointer", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "100", "data-source-line-end": "108", children: [
            /* @__PURE__ */ jsx(RadioGroupItem, { value: "Manual Check", id: "manual-method", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "101", "data-source-line-end": "101" }),
            /* @__PURE__ */ jsx(Label, { htmlFor: "manual-method", className: "cursor-pointer flex-1 font-normal", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "102", "data-source-line-end": "107", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "103", "data-source-line-end": "106", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "CheckSquare", size: 16, "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "104", "data-source-line-end": "104" }),
              /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "105", "data-source-line-end": "105", children: "Manual Verification" })
            ] }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "113", "data-source-line-end": "177", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "114", "data-source-line-end": "134", children: [
          /* @__PURE__ */ jsxs(Label, { htmlFor: "auth-ref", className: "text-label", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "115", "data-source-line-end": "119", children: [
            authMethod === "QR" && "Scan QR Code",
            authMethod === "OTP" && "Enter OTP",
            authMethod === "Manual Check" && "Reference Number"
          ] }),
          /* @__PURE__ */ jsx(Input, { id: "auth-ref", type: "text", placeholder: authMethod === "QR" ? "Scan QR code here..." : authMethod === "OTP" ? "Enter 6-digit OTP" : "Enter reference number", value: authReference, onChange: (e) => setAuthReference(e.target.value), className: "h-10 font-mono text-center text-lg tracking-widest", disabled: isSubmitting, autoFocus: true, "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "120", "data-source-line-end": "133" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 pt-4", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "137", "data-source-line-end": "155", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: "flex-1 font-semibold", disabled: isSubmitting || !authReference.trim(), "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "138", "data-source-line-end": "154", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 16, className: "mr-2 animate-spin", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "145", "data-source-line-end": "145" }),
          "Processing..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 16, className: "mr-2", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "150", "data-source-line-end": "150" }),
          "Mark as Received"
        ] }) }) }),
        /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", className: "w-full", onClick: handleReset, disabled: isSubmitting, "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "157", "data-source-line-end": "166", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "RotateCcw", size: 16, className: "mr-2", "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "164", "data-source-line-end": "164" }),
          "Reset Form"
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", className: "w-full text-muted-foreground", onClick: onCancel, disabled: isSubmitting, "data-source-file": "src/components/hub_receiving_log/DeliveryReceiptForm.tsx", "data-source-line-start": "168", "data-source-line-end": "176", children: "Cancel" })
      ] })
    ] })
  ] });
}
function HubReceivingLogContent() {
  const [isClient, setIsClient] = useState(true);
  const [hubId, setHubId] = useState("hub-001");
  const [deliveries, setDeliveries] = useState(() => {
    return DeliveryService.getByHubId("hub-001");
  });
  const [selectedDeliveryId, setSelectedDeliveryId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const paramHubId = params.get("hubId");
      const paramDeliveryId = params.get("deliveryId");
      if (paramHubId) {
        setHubId(paramHubId);
        const hubDeliveries = DeliveryService.getByHubId(paramHubId);
        setDeliveries(hubDeliveries);
        if (paramDeliveryId && hubDeliveries.some((d) => d.id === paramDeliveryId)) {
          setSelectedDeliveryId(paramDeliveryId);
        }
      }
      setIsClient(true);
    });
  }, []);
  const enrichedDeliveries = useMemo(() => {
    return deliveries.map((delivery) => ({
      ...delivery,
      farmerName: FarmerService.getById(delivery.farmerId)?.name || "Unknown Farmer",
      orderNumber: OrderService.getById(delivery.orderId)?.orderNumber || "N/A"
    }));
  }, [deliveries]);
  const filteredDeliveries = useMemo(() => {
    return enrichedDeliveries.filter((delivery) => {
      const matchesSearch = searchQuery.length === 0 || delivery.id.toLowerCase().includes(searchQuery.toLowerCase()) || delivery.vehicleLabel.toLowerCase().includes(searchQuery.toLowerCase()) || delivery.farmerName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || delivery.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [enrichedDeliveries, searchQuery, statusFilter]);
  const selectedDelivery = selectedDeliveryId ? enrichedDeliveries.find((d) => d.id === selectedDeliveryId) : null;
  const handleDeliverySelect = (deliveryId) => {
    setSelectedDeliveryId(deliveryId);
  };
  const handleMarkAsReceived = (deliveryId, authMethod, authReference) => {
    const updatedDeliveries = deliveries.map((d) => {
      if (d.id === deliveryId) {
        return {
          ...d,
          status: "Received at Hub",
          receivedAt: (/* @__PURE__ */ new Date()).toISOString(),
          authMethod,
          authReference
        };
      }
      return d;
    });
    setDeliveries(updatedDeliveries);
    DeliveryService.savePersisted(updatedDeliveries);
    toast.success(`Delivery ${deliveryId} marked as received at hub`);
    setSelectedDeliveryId(null);
  };
  const hub = HubService.getById(hubId);
  return /* @__PURE__ */ jsxs("div", { className: "page-body flex flex-col gap-6 h-full overflow-y-auto min-h-0", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "102", "data-source-line-end": "176", children: [
    /* @__PURE__ */ jsx(ReceivingLogHeader, { hubName: hub?.name || "Hub", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "103", "data-source-line-end": "103" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "105", "data-source-line-end": "175", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 flex flex-col gap-4 min-h-0", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "107", "data-source-line-end": "155", children: /* @__PURE__ */ jsxs(Card, { className: "surface-base flex-1 flex flex-col min-h-0 overflow-hidden", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "108", "data-source-line-end": "154", children: [
        /* @__PURE__ */ jsxs("div", { className: "card-padding border-b border-border space-y-3", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "109", "data-source-line-end": "130", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "110", "data-source-line-end": "115", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-section-title", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "111", "data-source-line-end": "111", children: "Incoming Deliveries" }),
            /* @__PURE__ */ jsxs("span", { className: "text-caption bg-muted px-2 py-1 rounded-full", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "112", "data-source-line-end": "114", children: [
              filteredDeliveries.length,
              " pending"
            ] })
          ] }),
          /* @__PURE__ */ jsx(SearchBar, { placeholder: "Search by delivery ID, vehicle, or farmer...", onSearch: setSearchQuery, "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "117", "data-source-line-end": "120" }),
          /* @__PURE__ */ jsx(Tabs, { value: statusFilter, onValueChange: (val) => setStatusFilter(val), className: "w-full", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "122", "data-source-line-end": "129", children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4 h-8 bg-muted/30 p-0.5", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "123", "data-source-line-end": "128", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "all", className: "text-xs", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "124", "data-source-line-end": "124", children: "All" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "Prepared", className: "text-xs", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "125", "data-source-line-end": "125", children: "Prepared" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "In Transit", className: "text-xs", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "126", "data-source-line-end": "126", children: "In Transit" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "Received at Hub", className: "text-xs", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "127", "data-source-line-end": "127", children: "Received" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto min-h-0", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "132", "data-source-line-end": "153", children: filteredDeliveries.length === 0 ? /* @__PURE__ */ jsx("div", { className: "p-6", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "134", "data-source-line-end": "140", children: /* @__PURE__ */ jsx(EmptyState, { iconName: "Package", title: "No Deliveries Found", description: searchQuery ? "No deliveries match your search. Try adjusting your filters." : "No incoming deliveries at this time.", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "135", "data-source-line-end": "139" }) }) : /* @__PURE__ */ jsx("div", { className: "divide-y divide-border", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "142", "data-source-line-end": "151", children: filteredDeliveries.map((delivery) => /* @__PURE__ */ jsx(DeliveryListItem, { delivery, isSelected: selectedDeliveryId === delivery.id, onSelect: handleDeliverySelect, "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "144", "data-source-line-end": "149" }, delivery.id)) }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1 flex flex-col min-h-0", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "158", "data-source-line-end": "174", children: selectedDelivery ? /* @__PURE__ */ jsx(DeliveryReceiptForm, { delivery: selectedDelivery, onSubmit: (authMethod, authReference) => {
        handleMarkAsReceived(selectedDelivery.id, authMethod, authReference);
      }, onCancel: () => setSelectedDeliveryId(null), "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "160", "data-source-line-end": "166" }) : /* @__PURE__ */ jsx(Card, { className: "surface-base flex items-center justify-center p-8 text-center", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "168", "data-source-line-end": "172", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "169", "data-source-line-end": "171", children: /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/hub_receiving_log/HubReceivingLogContent.tsx", "data-source-line-start": "170", "data-source-line-end": "170", children: "Select a delivery from the list to begin receipt verification." }) }) }) })
    ] })
  ] });
}
const $$HubReceivingLog = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Farmer Delivery Log - FarmHub Connect", userRole: "hub", userName: "Imran Ali", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/cbab3368-4eb0-4683-b061-0313fc1e4cba.png" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "HubReceivingLogContent", HubReceivingLogContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/hub_receiving_log/HubReceivingLogContent", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/hub-receiving-log.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/hub-receiving-log.astro";
const $$url = "/hub-receiving-log.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$HubReceivingLog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
