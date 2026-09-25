import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React__default, { useState, useEffect, useMemo } from "react";
import { toast } from "sonner";
import { c as getAll, g as getAll$1, d as getByIdVO } from "../ProductService.CADRtByu.js";
import { c as cn, B as Button } from "../button.CEA35CrV.js";
import { C as Card, a as CardHeader, c as CardContent, d as CardFooter } from "../card.CNTisMc0.js";
import { S as StatusBadge } from "../StatusBadge.CWDBgqR0.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { S as SearchBar } from "../SearchBar.ZrgBQj3h.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "../select.CmN5dfe2.js";
import { E as EmptyState } from "../EmptyState.DgJ8Yi6C.js";
import { renderers } from "../renderers.mjs";
function ProductCard({
  productId,
  name,
  category,
  price,
  unit,
  stock,
  imageUrl,
  farmerName,
  status,
  onAddToCart
}) {
  const isOutOfStock = status === "out_of_stock" || stock <= 0;
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isOutOfStock) return;
    if (onAddToCart) {
      onAddToCart(productId);
    } else {
      toast.success(`${name} added to cart`);
    }
  };
  const handleCardClick = () => {
    window.location.href = `./product-details.html?productId=${productId}`;
  };
  return /* @__PURE__ */ jsxs(Card, { className: "group relative h-full flex flex-col surface-base card-lift cursor-pointer overflow-hidden", onClick: handleCardClick, "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "53", "data-source-line-end": "126", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "58", "data-source-line-end": "72", children: [
      /* @__PURE__ */ jsx("img", { src: imageUrl, alt: name, className: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-105", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "59", "data-source-line-end": "63" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "64", "data-source-line-end": "66", children: /* @__PURE__ */ jsx(StatusBadge, { status, size: "sm", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "65", "data-source-line-end": "65" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-2 left-2", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "67", "data-source-line-end": "71", children: /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-white/90 text-foreground backdrop-blur-sm border-none shadow-sm", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "68", "data-source-line-end": "70", children: category }) })
    ] }),
    /* @__PURE__ */ jsxs(CardHeader, { className: "p-4 pb-0 space-y-1", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "74", "data-source-line-end": "82", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start gap-2", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "75", "data-source-line-end": "77", children: /* @__PURE__ */ jsx("h3", { className: "text-item-title font-bold truncate", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "76", "data-source-line-end": "76", children: name }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center text-caption gap-1", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "78", "data-source-line-end": "81", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "User", size: 14, className: "text-primary", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "79", "data-source-line-end": "79" }),
        /* @__PURE__ */ jsx("span", { className: "truncate", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "80", "data-source-line-end": "80", children: farmerName })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "p-4 flex-1 flex flex-col justify-between space-y-3", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "84", "data-source-line-end": "107", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "85", "data-source-line-end": "88", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold text-primary", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "86", "data-source-line-end": "86", children: [
          "₹",
          price
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-caption", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "87", "data-source-line-end": "87", children: [
          "/ ",
          unit
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "90", "data-source-line-end": "106", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 bg-muted h-1.5 rounded-full overflow-hidden", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "91", "data-source-line-end": "99", children: /* @__PURE__ */ jsx("div", { className: cn("h-full rounded-full transition-all duration-300", stock > 10 ? "bg-success" : stock > 0 ? "bg-warning" : "bg-destructive"), style: {
          width: `${Math.min(stock / 50 * 100, 100)}%`
        }, "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "92", "data-source-line-end": "98" }) }),
        /* @__PURE__ */ jsx("span", { className: cn("text-xs font-medium whitespace-nowrap", stock === 0 ? "text-destructive" : "text-muted-foreground"), "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "100", "data-source-line-end": "105", children: stock > 0 ? `${stock} ${unit} left` : "Sold out" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardFooter, { className: "p-4 pt-0", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "109", "data-source-line-end": "125", children: /* @__PURE__ */ jsx(Button, { className: "w-full font-semibold shadow-sm", disabled: isOutOfStock, onClick: handleAddToCart, variant: isOutOfStock ? "outline" : "default", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "110", "data-source-line-end": "124", children: isOutOfStock ? "Unavailable" : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "ShoppingCart", size: 18, className: "mr-2", "data-source-file": "src/components/common/ProductCard.tsx", "data-source-line-start": "120", "data-source-line-end": "120" }),
      "Add to Cart"
    ] }) }) })
  ] });
}
function SearchAndSort({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return /* @__PURE__ */ jsxs("div", { className: "filter-bar flex flex-wrap gap-3 items-center", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "34", "data-source-line-end": "37", children: [
      /* @__PURE__ */ jsx("div", { className: "h-10 w-64 bg-muted rounded animate-pulse", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "35", "data-source-line-end": "35" }),
      /* @__PURE__ */ jsx("div", { className: "h-10 w-40 bg-muted rounded animate-pulse", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "36", "data-source-line-end": "36" })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "filter-bar flex flex-wrap gap-3 items-center", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "42", "data-source-line-end": "64", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-[250px]", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "43", "data-source-line-end": "49", children: /* @__PURE__ */ jsx(SearchBar, { placeholder: "Search products by name...", defaultValue: searchQuery, onSearch: onSearchChange, "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "44", "data-source-line-end": "48" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "51", "data-source-line-end": "63", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowUpDown", size: 16, className: "text-muted-foreground", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "52", "data-source-line-end": "52" }),
      /* @__PURE__ */ jsxs(Select, { value: sortBy, onValueChange: onSortChange, "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "53", "data-source-line-end": "62", children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[160px] h-10 bg-card border-input", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "54", "data-source-line-end": "56", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Sort by", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "55", "data-source-line-end": "55" }) }),
        /* @__PURE__ */ jsxs(SelectContent, { "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "57", "data-source-line-end": "61", children: [
          /* @__PURE__ */ jsx(SelectItem, { value: "newest", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: "Newest First" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "price-asc", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "59", "data-source-line-end": "59", children: "Price: Low to High" }),
          /* @__PURE__ */ jsx(SelectItem, { value: "price-desc", "data-source-file": "src/components/consumer_marketplace/SearchAndSort.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: "Price: High to Low" })
        ] })
      ] })
    ] })
  ] });
}
function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return /* @__PURE__ */ jsx("div", { className: "flex gap-2 overflow-x-auto pb-2", "data-source-file": "src/components/consumer_marketplace/CategoryFilter.tsx", "data-source-line-start": "26", "data-source-line-end": "30", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-10 w-24 bg-muted rounded-full animate-pulse flex-shrink-0", "data-source-file": "src/components/consumer_marketplace/CategoryFilter.tsx", "data-source-line-start": "28", "data-source-line-end": "28" }, i)) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/consumer_marketplace/CategoryFilter.tsx", "data-source-line-start": "35", "data-source-line-end": "69", children: [
    /* @__PURE__ */ jsx("p", { className: "text-label uppercase tracking-wider text-xs text-muted-foreground", "data-source-file": "src/components/consumer_marketplace/CategoryFilter.tsx", "data-source-line-start": "36", "data-source-line-end": "38", children: "Filter by Category" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", "data-source-file": "src/components/consumer_marketplace/CategoryFilter.tsx", "data-source-line-start": "39", "data-source-line-end": "68", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => onCategoryChange("all"), className: cn("inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 border", activeCategory === "all" ? "bg-primary text-primary-foreground border-primary shadow-md" : "bg-card border-border text-foreground hover:border-primary/50 hover:bg-muted/50"), "data-source-file": "src/components/consumer_marketplace/CategoryFilter.tsx", "data-source-line-start": "40", "data-source-line-end": "51", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Grid3x3", size: 16, "data-source-file": "src/components/consumer_marketplace/CategoryFilter.tsx", "data-source-line-start": "49", "data-source-line-end": "49" }),
        "All Products"
      ] }),
      categories.map((category) => /* @__PURE__ */ jsxs("button", { onClick: () => onCategoryChange(category.id), className: cn("inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 border", activeCategory === category.id ? "bg-primary text-primary-foreground border-primary shadow-md" : "bg-card border-border text-foreground hover:border-primary/50 hover:bg-muted/50"), "data-source-file": "src/components/consumer_marketplace/CategoryFilter.tsx", "data-source-line-start": "54", "data-source-line-end": "66", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: category.iconName, size: 16, "data-source-file": "src/components/consumer_marketplace/CategoryFilter.tsx", "data-source-line-start": "64", "data-source-line-end": "64" }),
        category.name
      ] }, category.id))
    ] })
  ] });
}
function MarketplaceContent() {
  const [isClient, setIsClient] = React__default.useState(true);
  const [allProducts] = React__default.useState(() => getAll());
  const [allCategories] = React__default.useState(() => getAll$1());
  const [activeCategory, setActiveCategory] = React__default.useState("all");
  const [searchQuery, setSearchQuery] = React__default.useState("");
  const [sortBy, setSortBy] = React__default.useState("newest");
  const [cartItems, setCartItems] = React__default.useState([]);
  React__default.useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    const searchParam = params.get("searchQuery");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
    if (searchParam) {
      setSearchQuery(decodeURIComponent(searchParam));
    }
    const savedCart = window.localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  const filteredProducts = useMemo(() => {
    let result = allProducts;
    if (activeCategory !== "all") {
      result = result.filter((p) => p.categoryId === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => a.pricePerUnit - b.pricePerUnit);
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => b.pricePerUnit - a.pricePerUnit);
    } else if (sortBy === "newest") {
      result = [...result].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    }
    return result;
  }, [allProducts, activeCategory, searchQuery, sortBy]);
  const handleAddToCart = (productId) => {
    const product = allProducts.find((p) => p.id === productId);
    if (!product) return;
    const existingItem = cartItems.find((item) => item.productId === productId);
    let updatedCart;
    if (existingItem) {
      updatedCart = cartItems.map((item) => item.productId === productId ? {
        ...item,
        quantity: item.quantity + 1
      } : item);
    } else {
      updatedCart = [...cartItems, {
        productId,
        quantity: 1
      }];
    }
    setCartItems(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success(`${product.name} added to cart!`);
  };
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const newUrl = categoryId === "all" ? "./consumer-marketplace.html" : `./consumer-marketplace.html?category=${categoryId}`;
    window.history.replaceState({}, "", newUrl);
  };
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const params = new URLSearchParams();
    if (activeCategory !== "all") {
      params.set("category", activeCategory);
    }
    if (query.trim()) {
      params.set("searchQuery", encodeURIComponent(query));
    }
    const newUrl = params.toString() ? `./consumer-marketplace.html?${params.toString()}` : "./consumer-marketplace.html";
    window.history.replaceState({}, "", newUrl);
  };
  const handleSortChange = (value) => {
    setSortBy(value);
  };
  return /* @__PURE__ */ jsxs("div", { className: "page-body space-y-8", "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "132", "data-source-line-end": "201", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "133", "data-source-line-end": "138", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-page-title", "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "134", "data-source-line-end": "134", children: "Fresh Farm Marketplace" }),
      /* @__PURE__ */ jsx("p", { className: "text-body text-muted-foreground", "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "135", "data-source-line-end": "137", children: "Browse fresh, organic produce directly from local farmers. Fair prices, quality guaranteed." })
    ] }),
    isClient && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SearchAndSort, { searchQuery, onSearchChange: handleSearchChange, sortBy, onSortChange: handleSortChange, "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "142", "data-source-line-end": "147" }),
      /* @__PURE__ */ jsx(CategoryFilter, { categories: allCategories, activeCategory, onCategoryChange: handleCategoryChange, "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "149", "data-source-line-end": "153" })
    ] }),
    filteredProducts.length === 0 ? /* @__PURE__ */ jsx(EmptyState, { iconName: "Search", title: "No Products Found", description: searchQuery ? `No products match "${searchQuery}". Try adjusting your search or filters.` : "No products available in this category at the moment.", actionLabel: "Clear Filters", onAction: () => {
      setActiveCategory("all");
      setSearchQuery("");
      window.location.href = "./consumer-marketplace.html";
    }, "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "158", "data-source-line-end": "172" }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "174", "data-source-line-end": "193", children: filteredProducts.map((product) => {
      const farmer = getByIdVO(product.id)?.farmer;
      return /* @__PURE__ */ jsx(ProductCard, { productId: product.id, name: product.name, category: getByIdVO(product.id)?.category?.name || "Unknown", price: product.pricePerUnit, unit: product.unit, stock: product.stockQty, imageUrl: product.imageUrl, farmerName: farmer?.name || "Unknown Farmer", status: product.status === "Available" && product.stockQty > 0 ? "available" : "out_of_stock", onAddToCart: handleAddToCart, "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "178", "data-source-line-end": "190" }, product.id);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "py-8 text-center border-t border-border", "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "196", "data-source-line-end": "200", children: /* @__PURE__ */ jsxs("p", { className: "text-caption", "data-source-file": "src/components/consumer_marketplace/MarketplaceContent.tsx", "data-source-line-start": "197", "data-source-line-end": "199", children: [
      "Showing ",
      filteredProducts.length,
      " of ",
      allProducts.length,
      " products"
    ] }) })
  ] });
}
const $$ConsumerMarketplace = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Consumer Marketplace | FarmConnect", userRole: "consumer", userName: "Ananya Roy", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/8d8e6e78-907a-4931-a9f4-44eec950ccf1.png", cartCount: 0 }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "MarketplaceContent", MarketplaceContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/consumer_marketplace/MarketplaceContent", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/consumer-marketplace.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/consumer-marketplace.astro";
const $$url = "/consumer-marketplace.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ConsumerMarketplace,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
