import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro } from "../astro/server.ANrUSrte.js";
import { $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { B as Button, c as cn } from "../button.CEA35CrV.js";
import { I as Input } from "../input.DT93Plg7.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "../select.CmN5dfe2.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "../table.Ckl45E3q.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "../card.CNTisMc0.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { E as EmptyState } from "../EmptyState.DgJ8Yi6C.js";
import { L as LoadingSpinner } from "../LoadingSpinner.D1-awNdt.js";
import { H as HubService } from "../HubService.B31WKdJX.js";
import { toast } from "sonner";
import { renderers } from "../renderers.mjs";
const ledgerEntryDataList = [{
  id: "led-001",
  hubId: "hub-001",
  entityType: "Delivery",
  entityId: "del-001",
  actionType: "Dispatched",
  actorRole: "Farmer",
  actorId: "far-001",
  occurredAt: "2026-09-05T13:00:00",
  note: "Farmer dispatched spinach and tomatoes to central hub.",
  referenceCode: "GLH-01-DEL-001"
}, {
  id: "led-002",
  hubId: "hub-002",
  entityType: "Pickup",
  entityId: "pup-001",
  actionType: "Verified",
  actorRole: "Hub",
  actorId: "hub-002",
  occurredAt: "2026-09-04T18:15:00",
  note: "OTP verification completed for consumer pickup.",
  referenceCode: "HGH-02-PUP-001"
}, {
  id: "led-003",
  hubId: "hub-003",
  entityType: "Payment",
  entityId: "pay-003",
  actionType: "Created",
  actorRole: "Consumer",
  actorId: "con-003",
  occurredAt: "2026-09-05T08:41:00",
  note: "Payment recorded successfully for bulk grain order.",
  referenceCode: "FRE-03-PAY-003"
}, {
  id: "led-004",
  hubId: "hub-004",
  entityType: "Order",
  entityId: "ord-1004",
  actionType: "Completed",
  actorRole: "System",
  actorId: "system",
  occurredAt: "2026-09-04T09:05:00",
  note: "Pickup completion logged after QR verification.",
  referenceCode: "FBH-04-ORD-1004"
}];
function getAll() {
  return ledgerEntryDataList;
}
function getById(id) {
  return ledgerEntryDataList.find((item) => item.id === id);
}
function query(params) {
  const keyword = params.keyword?.trim().toLowerCase() ?? "";
  const filter = params.filter ?? {};
  return ledgerEntryDataList.filter((item) => {
    const matchKeyword = keyword.length === 0 || item.note.toLowerCase().includes(keyword) || item.referenceCode.toLowerCase().includes(keyword) || item.entityId.toLowerCase().includes(keyword);
    const matchFilter = Object.entries(filter).every(([key, val]) => {
      if (val === void 0) return true;
      const itemVal = item[key];
      return Array.isArray(val) ? val.includes(itemVal) : itemVal === val;
    });
    return matchKeyword && matchFilter;
  }).sort((a, b) => {
    const direction = params.sortDirection === "desc" ? -1 : 1;
    const sortKey = params.sortKey;
    if (!sortKey) return b.occurredAt.localeCompare(a.occurredAt) * direction;
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av === bv) return 0;
    return av > bv ? direction : -direction;
  });
}
function loadPersisted() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("ledgerEntryDataList");
  if (!raw) return null;
  return JSON.parse(raw);
}
function savePersisted(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("ledgerEntryDataList", JSON.stringify(items));
}
const LedgerEntryService = {
  getAll,
  getById,
  query,
  loadPersisted,
  savePersisted
};
function HubLedgerContent() {
  const [isClient, setIsClient] = useState(true);
  const [hubId, setHubId] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [entityTypeFilter, setEntityTypeFilter] = useState("all");
  const [actionTypeFilter, setActionTypeFilter] = useState("all");
  const [actorRoleFilter, setActorRoleFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const allLedgerEntries = useMemo(() => LedgerEntryService.getAll(), []);
  const allHubs = useMemo(() => HubService.getAll(), []);
  const currentHub = useMemo(() => {
    if (!hubId) return allHubs[0];
    return HubService.getById(hubId) || allHubs[0];
  }, [hubId, allHubs]);
  const filteredEntries = useMemo(() => {
    let result = allLedgerEntries.filter((entry) => entry.hubId === currentHub?.id);
    if (searchKeyword.trim()) {
      const kw = searchKeyword.toLowerCase();
      result = result.filter((entry) => entry.note.toLowerCase().includes(kw) || entry.referenceCode.toLowerCase().includes(kw) || entry.entityId.toLowerCase().includes(kw));
    }
    if (entityTypeFilter !== "all") {
      result = result.filter((entry) => entry.entityType === entityTypeFilter);
    }
    if (actionTypeFilter !== "all") {
      result = result.filter((entry) => entry.actionType === actionTypeFilter);
    }
    if (actorRoleFilter !== "all") {
      result = result.filter((entry) => entry.actorRole === actorRoleFilter);
    }
    if (startDate) {
      const start = new Date(startDate).getTime();
      result = result.filter((entry) => new Date(entry.occurredAt).getTime() >= start);
    }
    if (endDate) {
      const end = new Date(endDate).getTime();
      result = result.filter((entry) => new Date(entry.occurredAt).getTime() <= end);
    }
    return result.sort((a, b) => new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime());
  }, [allLedgerEntries, currentHub?.id, searchKeyword, entityTypeFilter, actionTypeFilter, actorRoleFilter, startDate, endDate]);
  useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const urlHubId = params.get("hubId");
    const urlStartDate = params.get("startDate");
    const urlEndDate = params.get("endDate");
    if (urlHubId) setHubId(urlHubId);
    if (urlStartDate) setStartDate(urlStartDate);
    if (urlEndDate) setEndDate(urlEndDate);
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  const handleResetFilters = () => {
    setSearchKeyword("");
    setEntityTypeFilter("all");
    setActionTypeFilter("all");
    setActorRoleFilter("all");
    setStartDate("");
    setEndDate("");
    toast.success("Filters reset");
  };
  const handleExport = () => {
    setIsLoading(true);
    setTimeout(() => {
      const csv = [["Reference Code", "Entity Type", "Action Type", "Actor Role", "Occurred At", "Note"].join(","), ...filteredEntries.map((entry) => [entry.referenceCode, entry.entityType, entry.actionType, entry.actorRole, entry.occurredAt, `"${entry.note}"`].join(","))].join("\n");
      const blob = new Blob([csv], {
        type: "text/csv"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ledger-${currentHub?.code || "hub"}-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      setIsLoading(false);
      toast.success("Ledger exported successfully");
    }, 800);
  };
  const handleBackToLogistics = () => {
    window.location.href = `./hub-logistics.html?hubId=${currentHub?.id}`;
  };
  const getEntityTypeIcon = (type) => {
    switch (type) {
      case "Delivery":
        return "Truck";
      case "Pickup":
        return "ShoppingBag";
      case "Payment":
        return "CreditCard";
      case "Order":
        return "ClipboardList";
      default:
        return "Circle";
    }
  };
  const getActionTypeColor = (action) => {
    switch (action) {
      case "Created":
        return "text-blue-600";
      case "Updated":
        return "text-amber-600";
      case "Received":
        return "text-green-600";
      case "Dispatched":
        return "text-purple-600";
      case "Verified":
        return "text-teal-600";
      case "Completed":
        return "text-emerald-600";
      default:
        return "text-gray-600";
    }
  };
  if (!isClient) {
    return /* @__PURE__ */ jsx("div", { className: "page-body", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "182", "data-source-line-end": "186", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-96", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "183", "data-source-line-end": "185", children: /* @__PURE__ */ jsx(LoadingSpinner, { size: "md", text: "Loading ledger...", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "184", "data-source-line-end": "184" }) }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "page-body space-y-6", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "191", "data-source-line-end": "492", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "193", "data-source-line-end": "228", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "194", "data-source-line-end": "210", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "195", "data-source-line-end": "205", children: [
          /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: handleBackToLogistics, className: "h-9 w-9 -ml-2", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "196", "data-source-line-end": "203", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 20, "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "202", "data-source-line-end": "202" }) }),
          /* @__PURE__ */ jsx("h1", { className: "text-page-title", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "204", "data-source-line-end": "204", children: "Inventory & Track Record" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-caption ml-11", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "206", "data-source-line-end": "209", children: [
          "Complete audit trail of all deliveries, pickups, and transactions for",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "208", "data-source-line-end": "208", children: currentHub?.name })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { onClick: handleExport, disabled: isLoading || filteredEntries.length === 0, className: "shadow-sm", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "211", "data-source-line-end": "227", children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 16, className: "mr-2 animate-spin", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "218", "data-source-line-end": "218" }),
        "Exporting..."
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Download", size: 16, className: "mr-2", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "223", "data-source-line-end": "223" }),
        "Export CSV"
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Card, { className: "surface-base border-primary/20 bg-primary/5", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "231", "data-source-line-end": "254", children: /* @__PURE__ */ jsx(CardContent, { className: "card-padding", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "232", "data-source-line-end": "253", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "233", "data-source-line-end": "252", children: [
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "234", "data-source-line-end": "237", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption font-medium uppercase tracking-wider", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "235", "data-source-line-end": "235", children: "Hub Name" }),
        /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-foreground mt-1", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "236", "data-source-line-end": "236", children: currentHub?.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "238", "data-source-line-end": "241", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption font-medium uppercase tracking-wider", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "239", "data-source-line-end": "239", children: "Hub Code" }),
        /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-primary mt-1", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "240", "data-source-line-end": "240", children: currentHub?.code })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "242", "data-source-line-end": "247", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption font-medium uppercase tracking-wider", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "243", "data-source-line-end": "243", children: "Location" }),
        /* @__PURE__ */ jsxs("p", { className: "text-base font-semibold text-foreground mt-1", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "244", "data-source-line-end": "246", children: [
          currentHub?.city,
          ", ",
          currentHub?.region
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "248", "data-source-line-end": "251", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption font-medium uppercase tracking-wider", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "249", "data-source-line-end": "249", children: "Total Entries" }),
        /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-accent mt-1", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "250", "data-source-line-end": "250", children: filteredEntries.length })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "257", "data-source-line-end": "364", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "258", "data-source-line-end": "260", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "259", "data-source-line-end": "259", children: "Filter Ledger" }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "261", "data-source-line-end": "363", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "262", "data-source-line-end": "362", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "264", "data-source-line-end": "273", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Search", size: 18, className: "text-muted-foreground", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "265", "data-source-line-end": "265" }),
          /* @__PURE__ */ jsx(Input, { type: "text", placeholder: "Search by reference code, note, or entity ID...", value: searchKeyword, onChange: (e) => setSearchKeyword(e.target.value), className: "flex-1 h-9", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "266", "data-source-line-end": "272" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "276", "data-source-line-end": "295", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "277", "data-source-line-end": "285", children: [
            /* @__PURE__ */ jsx("label", { className: "text-label", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "278", "data-source-line-end": "278", children: "Start Date" }),
            /* @__PURE__ */ jsx(Input, { type: "date", value: startDate, onChange: (e) => setStartDate(e.target.value), className: "h-9", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "279", "data-source-line-end": "284" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "286", "data-source-line-end": "294", children: [
            /* @__PURE__ */ jsx("label", { className: "text-label", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "287", "data-source-line-end": "287", children: "End Date" }),
            /* @__PURE__ */ jsx(Input, { type: "date", value: endDate, onChange: (e) => setEndDate(e.target.value), className: "h-9", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "288", "data-source-line-end": "293" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "298", "data-source-line-end": "348", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "299", "data-source-line-end": "313", children: [
            /* @__PURE__ */ jsx("label", { className: "text-label", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "300", "data-source-line-end": "300", children: "Entity Type" }),
            /* @__PURE__ */ jsxs(Select, { value: entityTypeFilter, onValueChange: setEntityTypeFilter, "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "301", "data-source-line-end": "312", children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "h-9", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "302", "data-source-line-end": "304", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Types", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "303", "data-source-line-end": "303" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "305", "data-source-line-end": "311", children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "306", "data-source-line-end": "306", children: "All Types" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Delivery", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "307", "data-source-line-end": "307", children: "Delivery" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Pickup", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "308", "data-source-line-end": "308", children: "Pickup" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Payment", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "309", "data-source-line-end": "309", children: "Payment" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Order", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "310", "data-source-line-end": "310", children: "Order" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "315", "data-source-line-end": "331", children: [
            /* @__PURE__ */ jsx("label", { className: "text-label", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "316", "data-source-line-end": "316", children: "Action Type" }),
            /* @__PURE__ */ jsxs(Select, { value: actionTypeFilter, onValueChange: setActionTypeFilter, "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "317", "data-source-line-end": "330", children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "h-9", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "318", "data-source-line-end": "320", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Actions", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "319", "data-source-line-end": "319" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "321", "data-source-line-end": "329", children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "322", "data-source-line-end": "322", children: "All Actions" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Created", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "323", "data-source-line-end": "323", children: "Created" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Updated", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "324", "data-source-line-end": "324", children: "Updated" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Received", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "325", "data-source-line-end": "325", children: "Received" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Dispatched", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "326", "data-source-line-end": "326", children: "Dispatched" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Verified", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "327", "data-source-line-end": "327", children: "Verified" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Completed", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "328", "data-source-line-end": "328", children: "Completed" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "333", "data-source-line-end": "347", children: [
            /* @__PURE__ */ jsx("label", { className: "text-label", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "334", "data-source-line-end": "334", children: "Actor Role" }),
            /* @__PURE__ */ jsxs(Select, { value: actorRoleFilter, onValueChange: setActorRoleFilter, "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "335", "data-source-line-end": "346", children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "h-9", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "336", "data-source-line-end": "338", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Roles", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "337", "data-source-line-end": "337" }) }),
              /* @__PURE__ */ jsxs(SelectContent, { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "339", "data-source-line-end": "345", children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "all", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "340", "data-source-line-end": "340", children: "All Roles" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Farmer", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "341", "data-source-line-end": "341", children: "Farmer" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Hub", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "342", "data-source-line-end": "342", children: "Hub" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "Consumer", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "343", "data-source-line-end": "343", children: "Consumer" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "System", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "344", "data-source-line-end": "344", children: "System" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-2", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "351", "data-source-line-end": "361", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: handleResetFilters, className: "text-muted-foreground", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "352", "data-source-line-end": "360", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "RotateCcw", size: 14, className: "mr-2", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "358", "data-source-line-end": "358" }),
          "Reset Filters"
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "367", "data-source-line-end": "459", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "368", "data-source-line-end": "372", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-base", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "369", "data-source-line-end": "371", children: [
        "Ledger Entries (",
        filteredEntries.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "p-0", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "373", "data-source-line-end": "458", children: filteredEntries.length === 0 ? /* @__PURE__ */ jsx("div", { className: "p-8", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "375", "data-source-line-end": "383", children: /* @__PURE__ */ jsx(EmptyState, { iconName: "FileText", title: "No Ledger Entries", description: "No transactions match your current filters. Try adjusting your date range or filter criteria.", actionLabel: "Reset Filters", onAction: handleResetFilters, "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "376", "data-source-line-end": "382" }) }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "385", "data-source-line-end": "456", children: /* @__PURE__ */ jsxs(Table, { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "386", "data-source-line-end": "455", children: [
        /* @__PURE__ */ jsx(TableHeader, { className: "bg-muted/30 sticky top-0", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "387", "data-source-line-end": "406", children: /* @__PURE__ */ jsxs(TableRow, { className: "hover:bg-muted/30 border-b", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "388", "data-source-line-end": "405", children: [
          /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap font-semibold", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "389", "data-source-line-end": "391", children: "Reference Code" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap font-semibold", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "392", "data-source-line-end": "394", children: "Entity Type" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-28 whitespace-nowrap font-semibold", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "395", "data-source-line-end": "397", children: "Action Type" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap font-semibold", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "398", "data-source-line-end": "400", children: "Actor Role" }),
          /* @__PURE__ */ jsx(TableHead, { className: "w-40 whitespace-nowrap font-semibold", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "401", "data-source-line-end": "403", children: "Occurred At" }),
          /* @__PURE__ */ jsx(TableHead, { className: "min-w-64 font-semibold", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "404", "data-source-line-end": "404", children: "Note" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "407", "data-source-line-end": "454", children: filteredEntries.map((entry) => /* @__PURE__ */ jsxs(TableRow, { className: "table-row-hover border-b hover:bg-muted/20", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "409", "data-source-line-end": "452", children: [
          /* @__PURE__ */ jsx(TableCell, { className: "w-32 whitespace-nowrap", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "413", "data-source-line-end": "417", children: /* @__PURE__ */ jsx("span", { className: "font-mono text-sm font-semibold text-primary", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "414", "data-source-line-end": "416", children: entry.referenceCode }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "w-24 whitespace-nowrap", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "418", "data-source-line-end": "427", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "419", "data-source-line-end": "426", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: getEntityTypeIcon(entry.entityType), size: 16, className: "text-muted-foreground", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "420", "data-source-line-end": "424" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "425", "data-source-line-end": "425", children: entry.entityType })
          ] }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "w-28 whitespace-nowrap", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "428", "data-source-line-end": "432", children: /* @__PURE__ */ jsx("span", { className: cn("text-sm font-semibold", getActionTypeColor(entry.actionType)), "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "429", "data-source-line-end": "431", children: entry.actionType }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "w-24 whitespace-nowrap", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "433", "data-source-line-end": "435", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "434", "data-source-line-end": "434", children: entry.actorRole }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "w-40 whitespace-nowrap", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "436", "data-source-line-end": "446", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "437", "data-source-line-end": "445", children: new Date(entry.occurredAt).toLocaleString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) }) }),
          /* @__PURE__ */ jsx(TableCell, { className: "min-w-64", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "447", "data-source-line-end": "451", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground line-clamp-2", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "448", "data-source-line-end": "450", children: entry.note }) })
        ] }, entry.id)) })
      ] }) }) })
    ] }),
    filteredEntries.length > 0 && /* @__PURE__ */ jsx(Card, { className: "surface-base bg-muted/20 border-muted", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "463", "data-source-line-end": "490", children: /* @__PURE__ */ jsx(CardContent, { className: "card-padding", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "464", "data-source-line-end": "489", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "465", "data-source-line-end": "488", children: [
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "466", "data-source-line-end": "469", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption font-medium uppercase tracking-wider", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "467", "data-source-line-end": "467", children: "Total Entries" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-foreground mt-1", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "468", "data-source-line-end": "468", children: filteredEntries.length })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "470", "data-source-line-end": "475", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption font-medium uppercase tracking-wider", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "471", "data-source-line-end": "471", children: "Deliveries" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-primary mt-1", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "472", "data-source-line-end": "474", children: filteredEntries.filter((e) => e.entityType === "Delivery").length })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "476", "data-source-line-end": "481", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption font-medium uppercase tracking-wider", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "477", "data-source-line-end": "477", children: "Pickups" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-accent mt-1", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "478", "data-source-line-end": "480", children: filteredEntries.filter((e) => e.entityType === "Pickup").length })
      ] }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "482", "data-source-line-end": "487", children: [
        /* @__PURE__ */ jsx("p", { className: "text-caption font-medium uppercase tracking-wider", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "483", "data-source-line-end": "483", children: "Completed" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-success mt-1", "data-source-file": "src/components/hub_ledger/HubLedgerContent.tsx", "data-source-line-start": "484", "data-source-line-end": "486", children: filteredEntries.filter((e) => e.actionType === "Completed").length })
      ] })
    ] }) }) })
  ] });
}
const $$Astro = createAstro();
const $$HubLedger = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$HubLedger;
  const userRole = "hub", userName = "Neha Shah", userAvatar = "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png", currentPath = Astro.url.pathname;
  return renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Hub Ledger - FarmHub Connect", userRole, userName, userAvatar, currentPath }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "HubLedgerContent", HubLedgerContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/hub_ledger/HubLedgerContent", "client:component-export": "default" })}
` })}`;
}, "/vercel/share/v0-project/src/pages/hub-ledger.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/hub-ledger.astro";
const $$url = "/hub-ledger.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$HubLedger,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
