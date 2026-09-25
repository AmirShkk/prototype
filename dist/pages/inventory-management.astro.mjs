import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsx, jsxs } from "react/jsx-runtime";
import React__default, { useState, useEffect, useMemo } from "react";
import { B as Button } from "../button.CEA35CrV.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { toast } from "sonner";
import { l as loadPersisted, e as getByFarmerId, s as savePersisted } from "../ProductService.CADRtByu.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "../table.Ckl45E3q.js";
import { I as Input } from "../input.DT93Plg7.js";
import { S as StatusBadge } from "../StatusBadge.CWDBgqR0.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "../select.CmN5dfe2.js";
import { E as EmptyState } from "../EmptyState.DgJ8Yi6C.js";
import { C as ConfirmDialog } from "../ConfirmDialog.j5DdCoeh.js";
import { renderers } from "../renderers.mjs";
function ProductInventoryTable({
  products,
  isClient,
  onStatusToggle,
  onStockUpdate,
  onEdit,
  onDelete
}) {
  const [editingStockId, setEditingStockId] = React__default.useState(null);
  const [editingStockValue, setEditingStockValue] = React__default.useState("");
  const handleStockEdit = (productId, currentQty) => {
    setEditingStockId(productId);
    setEditingStockValue(currentQty.toString());
  };
  const handleStockSave = (productId) => {
    const newQty = parseInt(editingStockValue, 10);
    if (!isNaN(newQty) && newQty >= 0) {
      onStockUpdate(productId, newQty);
    }
    setEditingStockId(null);
    setEditingStockValue("");
  };
  const handleStockCancel = () => {
    setEditingStockId(null);
    setEditingStockValue("");
  };
  return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto flex-1", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "59", "data-source-line-end": "204", children: /* @__PURE__ */ jsxs(Table, { "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "60", "data-source-line-end": "203", children: [
    /* @__PURE__ */ jsx(TableHeader, { className: "bg-muted/30 sticky top-0 z-10", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "61", "data-source-line-end": "70", children: /* @__PURE__ */ jsxs(TableRow, { className: "border-b border-border hover:bg-transparent", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "62", "data-source-line-end": "69", children: [
      /* @__PURE__ */ jsx(TableHead, { className: "w-32 whitespace-nowrap font-semibold", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "63", "data-source-line-end": "63", children: "Product Name" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-24 whitespace-nowrap font-semibold", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "64", "data-source-line-end": "64", children: "Category" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-20 text-right whitespace-nowrap font-semibold", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "65", "data-source-line-end": "65", children: "Price" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-24 text-center whitespace-nowrap font-semibold", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "66", "data-source-line-end": "66", children: "Stock" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-28 text-center whitespace-nowrap font-semibold", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "67", "data-source-line-end": "67", children: "Status" }),
      /* @__PURE__ */ jsx(TableHead, { className: "w-32 text-center whitespace-nowrap font-semibold", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "68", "data-source-line-end": "68", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsx(TableBody, { "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "71", "data-source-line-end": "202", children: (products || []).map((product) => /* @__PURE__ */ jsxs(TableRow, { className: "table-row-hover border-b border-border/50 last:border-b-0", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "73", "data-source-line-end": "200", children: [
      /* @__PURE__ */ jsx(TableCell, { className: "w-32 whitespace-nowrap", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "78", "data-source-line-end": "90", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "79", "data-source-line-end": "89", children: [
        /* @__PURE__ */ jsx("img", { src: product.imageUrl, alt: product.name, className: "w-8 h-8 rounded object-cover", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "80", "data-source-line-end": "84" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-w-0", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "85", "data-source-line-end": "88", children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium text-sm truncate", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "86", "data-source-line-end": "86", children: product.name }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "87", "data-source-line-end": "87", children: product.id })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(TableCell, { className: "w-24 whitespace-nowrap", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "93", "data-source-line-end": "97", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "94", "data-source-line-end": "96", children: product.categoryId }) }),
      /* @__PURE__ */ jsxs(TableCell, { className: "w-20 text-right whitespace-nowrap", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "100", "data-source-line-end": "103", children: [
        /* @__PURE__ */ jsxs("span", { className: "font-semibold text-primary", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "101", "data-source-line-end": "101", children: [
          "₹",
          product.pricePerUnit
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground ml-1", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "102", "data-source-line-end": "102", children: [
          "/",
          product.unit
        ] })
      ] }),
      /* @__PURE__ */ jsx(TableCell, { className: "w-24 text-center whitespace-nowrap", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "106", "data-source-line-end": "152", children: editingStockId === product.id ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-1", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "108", "data-source-line-end": "135", children: [
        /* @__PURE__ */ jsx(Input, { type: "number", min: "0", value: editingStockValue, onChange: (e) => setEditingStockValue(e.target.value), className: "w-16 h-8 text-center text-sm", autoFocus: true, "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "109", "data-source-line-end": "116" }),
        /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", className: "h-8 w-8 p-0", onClick: () => handleStockSave(product.id), "aria-label": "Save stock", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "117", "data-source-line-end": "125", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Check", size: 14, className: "text-success", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "124", "data-source-line-end": "124" }) }),
        /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", className: "h-8 w-8 p-0", onClick: handleStockCancel, "aria-label": "Cancel edit", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "126", "data-source-line-end": "134", children: /* @__PURE__ */ jsx(SafeIcon, { name: "X", size: 14, className: "text-destructive", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "133", "data-source-line-end": "133" }) })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 cursor-pointer group", onClick: () => handleStockEdit(product.id, product.stockQty), "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "137", "data-source-line-end": "150", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "141", "data-source-line-end": "141", children: product.stockQty }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "142", "data-source-line-end": "142", children: product.unit }),
        isClient && /* @__PURE__ */ jsx(SafeIcon, { name: "Edit2", size: 14, className: "text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "144", "data-source-line-end": "148" })
      ] }) }),
      /* @__PURE__ */ jsx(TableCell, { className: "w-28 text-center whitespace-nowrap", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "155", "data-source-line-end": "173", children: isClient ? /* @__PURE__ */ jsx("button", { onClick: () => onStatusToggle(product.id), className: "inline-block hover:scale-105 transition-transform", "aria-label": `Toggle status for ${product.name}`, "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "157", "data-source-line-end": "166", children: /* @__PURE__ */ jsx(StatusBadge, { status: product.status === "Available" ? "available" : "out_of_stock", size: "sm", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "162", "data-source-line-end": "165" }) }) : /* @__PURE__ */ jsx(StatusBadge, { status: product.status === "Available" ? "available" : "out_of_stock", size: "sm", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "168", "data-source-line-end": "171" }) }),
      /* @__PURE__ */ jsx(TableCell, { className: "w-32 text-center whitespace-nowrap", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "176", "data-source-line-end": "199", children: isClient && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-1", "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "178", "data-source-line-end": "197", children: [
        /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", className: "h-8 w-8 p-0 text-primary hover:bg-primary/10", onClick: () => onEdit(product.id), "aria-label": `Edit ${product.name}`, "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "179", "data-source-line-end": "187", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Edit", size: 16, "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "186", "data-source-line-end": "186" }) }),
        /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", className: "h-8 w-8 p-0 text-destructive hover:bg-destructive/10", onClick: () => onDelete(product.id), "aria-label": `Delete ${product.name}`, "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "188", "data-source-line-end": "196", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Trash2", size: 16, "data-source-file": "src/components/inventory_management/ProductInventoryTable.tsx", "data-source-line-start": "195", "data-source-line-end": "195" }) })
      ] }) })
    ] }, product.id)) })
  ] }) });
}
function InventoryFilters({
  filterStatus,
  onFilterStatusChange,
  searchQuery,
  onSearchChange
}) {
  const [localSearch, setLocalSearch] = React__default.useState(searchQuery);
  React__default.useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(localSearch);
    }, 300);
    return () => clearTimeout(timer);
  }, [localSearch, onSearchChange]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 items-center p-4 bg-muted/20 rounded-lg border border-border", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "37", "data-source-line-end": "64", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex-1 min-w-[200px]", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "39", "data-source-line-end": "50", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "40", "data-source-line-end": "42", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Search", size: 16, strokeWidth: 2, "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "41", "data-source-line-end": "41" }) }),
      /* @__PURE__ */ jsx(Input, { type: "text", placeholder: "Search by product name or ID...", value: localSearch, onChange: (e) => setLocalSearch(e.target.value), className: "pl-9 h-9 bg-card border-input", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "43", "data-source-line-end": "49" })
    ] }),
    /* @__PURE__ */ jsxs(Select, { value: filterStatus || "all", onValueChange: onFilterStatusChange, "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "53", "data-source-line-end": "63", children: [
      /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[160px] h-9 bg-card border-input", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "54", "data-source-line-end": "56", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "All Status", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "55", "data-source-line-end": "55" }) }),
      /* @__PURE__ */ jsxs(SelectContent, { "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "57", "data-source-line-end": "62", children: [
        /* @__PURE__ */ jsx(SelectItem, { value: "all", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: "All Status" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "Available", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "59", "data-source-line-end": "59", children: "Available" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "Out of Stock", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: "Out of Stock" }),
        /* @__PURE__ */ jsx(SelectItem, { value: "Low Stock", "data-source-file": "src/components/inventory_management/InventoryFilters.tsx", "data-source-line-start": "61", "data-source-line-end": "61", children: "Low Stock" })
      ] })
    ] })
  ] });
}
function InventoryContent() {
  const farmerId = "far-001";
  const [products, setProducts] = useState(() => {
    const persisted = loadPersisted();
    if (persisted) return persisted;
    return getByFarmerId(farmerId);
  });
  const [filterStatus, setFilterStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(true);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const status = params.get("filterStatus") || "";
    if (status) setFilterStatus(status);
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => p.farmerId === farmerId);
    if (filterStatus) {
      result = result.filter((p) => p.status === filterStatus);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return result.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }, [products, filterStatus, searchQuery]);
  const handleStatusToggle = (productId) => {
    setProducts((prev) => {
      const updated = prev.map((p) => {
        if (p.id === productId) {
          const newStatus = p.status === "Available" ? "Out of Stock" : "Available";
          return {
            ...p,
            status: newStatus,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          };
        }
        return p;
      });
      savePersisted(updated);
      toast.success("Product status updated");
      return updated;
    });
  };
  const handleStockUpdate = (productId, newQty) => {
    setProducts((prev) => {
      const updated = prev.map((p) => {
        if (p.id === productId) {
          const status = newQty === 0 ? "Out of Stock" : newQty < 10 ? "Low Stock" : "Available";
          return {
            ...p,
            stockQty: newQty,
            status,
            updatedAt: (/* @__PURE__ */ new Date()).toISOString()
          };
        }
        return p;
      });
      savePersisted(updated);
      toast.success("Stock quantity updated");
      return updated;
    });
  };
  const handleDeleteClick = (productId) => {
    setProductToDelete(productId);
    setDeleteConfirmOpen(true);
  };
  const handleConfirmDelete = () => {
    if (!productToDelete) return;
    setProducts((prev) => {
      const updated = prev.filter((p) => p.id !== productToDelete);
      savePersisted(updated);
      toast.success("Product deleted successfully");
      return updated;
    });
    setDeleteConfirmOpen(false);
    setProductToDelete(null);
  };
  const handleEditClick = (productId) => {
    window.location.href = `./add-product.html?productId=${productId}`;
  };
  const handleAddNew = () => {
    window.location.href = "./add-product.html";
  };
  const handleBackClick = () => {
    window.location.href = "./farmer-dashboard.html";
  };
  return /* @__PURE__ */ jsxs("div", { className: "page-body flex flex-col gap-6 h-full", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "131", "data-source-line-end": "208", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "133", "data-source-line-end": "159", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "134", "data-source-line-end": "158", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "135", "data-source-line-end": "149", children: [
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: handleBackClick, className: "text-muted-foreground hover:text-foreground", "aria-label": "Go back", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "136", "data-source-line-end": "144", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 20, "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "143", "data-source-line-end": "143" }) }),
        /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "145", "data-source-line-end": "148", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-page-title", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "146", "data-source-line-end": "146", children: "My Stocks & Inventory" }),
          /* @__PURE__ */ jsx("p", { className: "text-caption mt-1", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "147", "data-source-line-end": "147", children: "Manage your product listings and stock levels" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: handleAddNew, className: "gap-2 shadow-sm", size: "lg", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "150", "data-source-line-end": "157", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Plus", size: 18, "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "155", "data-source-line-end": "155" }),
        "Add New Product"
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(InventoryFilters, { filterStatus, onFilterStatusChange: setFilterStatus, searchQuery, onSearchChange: setSearchQuery, "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "162", "data-source-line-end": "167" }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 min-h-0 flex flex-col surface-base rounded-lg border overflow-hidden", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "170", "data-source-line-end": "195", children: filteredProducts.length > 0 ? /* @__PURE__ */ jsx(ProductInventoryTable, { products: filteredProducts, isClient, onStatusToggle: handleStatusToggle, onStockUpdate: handleStockUpdate, onEdit: handleEditClick, onDelete: handleDeleteClick, "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "172", "data-source-line-end": "179" }) : /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "181", "data-source-line-end": "193", children: /* @__PURE__ */ jsx(EmptyState, { iconName: "Package", title: searchQuery || filterStatus ? "No products found" : "No products yet", description: searchQuery || filterStatus ? "Try adjusting your search or filter criteria" : "Start by adding your first product to your inventory", actionLabel: "Add Product", onAction: handleAddNew, "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "182", "data-source-line-end": "192" }) }) }),
    /* @__PURE__ */ jsx(ConfirmDialog, { open: deleteConfirmOpen, onOpenChange: setDeleteConfirmOpen, title: "Delete Product", description: "Are you sure you want to delete this product? This action cannot be undone.", confirmLabel: "Delete", cancelLabel: "Cancel", variant: "destructive", onConfirm: handleConfirmDelete, "data-source-file": "src/components/inventory_management/InventoryContent.tsx", "data-source-line-start": "198", "data-source-line-end": "207" })
  ] });
}
const $$Astro = createAstro();
const $$InventoryManagement = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$InventoryManagement;
  const userRole = "farmer", userName = "Ramesh Patel", userAvatar = "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/f9e7fe03-9319-49e5-ac2f-98f3fb2b9b98.png", currentPath = Astro.url.pathname;
  return renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "My Stocks & Inventory | FarmHub Connect", userRole, userName, userAvatar, currentPath }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "InventoryContent", InventoryContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/inventory_management/InventoryContent", "client:component-export": "default" })}
` })}`;
}, "/vercel/share/v0-project/src/pages/inventory-management.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/inventory-management.astro";
const $$url = "/inventory-management.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$InventoryManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
