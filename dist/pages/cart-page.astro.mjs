import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { B as Button } from "../button.CEA35CrV.js";
import { S as Separator } from "../separator.Bl_sPyh_.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { E as EmptyState } from "../EmptyState.DgJ8Yi6C.js";
import { toast } from "sonner";
import { I as Input } from "../input.DT93Plg7.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../card.CNTisMc0.js";
import { a as getById, b as getById$1 } from "../ProductService.CADRtByu.js";
import { g as getById$2 } from "../FarmerService.BuornUJX.js";
import { renderers } from "../renderers.mjs";
function CartItemRow({
  cartItem,
  onUpdateQuantity,
  onRemove
}) {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) {
      setQuantity(val);
      onUpdateQuantity(cartItem.id, val);
    }
  };
  const handleIncrement = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onUpdateQuantity(cartItem.id, newQty);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onUpdateQuantity(cartItem.id, newQty);
    }
  };
  const product = cartItem.product;
  const farmer = cartItem.farmer;
  const category = cartItem.category;
  if (!product) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "surface-base card-padding rounded-lg border border-border hover:border-primary/30 transition-colors", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "54", "data-source-line-end": "139", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "55", "data-source-line-end": "138", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden bg-muted flex-shrink-0 border border-border", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "57", "data-source-line-end": "68", children: [
      /* @__PURE__ */ jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-full object-cover", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "58", "data-source-line-end": "62" }),
      category && /* @__PURE__ */ jsx(Badge, { className: "absolute top-2 left-2 bg-white/90 text-foreground border-none shadow-sm text-xs", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "64", "data-source-line-end": "66", children: category.name })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col justify-between min-w-0", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "71", "data-source-line-end": "115", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "72", "data-source-line-end": "80", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-item-title font-bold truncate", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "73", "data-source-line-end": "73", children: product.name }),
        /* @__PURE__ */ jsx("p", { className: "text-caption text-muted-foreground truncate", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "74", "data-source-line-end": "76", children: farmer ? `From ${farmer.name}` : "Unknown farmer" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-primary", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "77", "data-source-line-end": "79", children: [
          "₹",
          product.pricePerUnit,
          " / ",
          product.unit
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-2", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "83", "data-source-line-end": "114", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", className: "h-8 w-8", onClick: handleDecrement, disabled: quantity <= 1, "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "84", "data-source-line-end": "92", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Minus", size: 16, "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "91", "data-source-line-end": "91" }) }),
        /* @__PURE__ */ jsx(Input, { type: "number", min: "1", value: quantity, onChange: handleQuantityChange, className: "h-8 w-12 text-center p-0 border-input", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "94", "data-source-line-end": "100" }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", className: "h-8 w-8", onClick: handleIncrement, "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "102", "data-source-line-end": "109", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Plus", size: 16, "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "108", "data-source-line-end": "108" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-caption text-muted-foreground ml-2", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "111", "data-source-line-end": "113", children: product.unit })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end justify-between flex-shrink-0", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "118", "data-source-line-end": "137", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-right", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "119", "data-source-line-end": "126", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-foreground", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "120", "data-source-line-end": "122", children: [
          "₹",
          cartItem.lineTotal
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-caption text-muted-foreground", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "123", "data-source-line-end": "125", children: [
          quantity,
          " × ₹",
          product.pricePerUnit
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", className: "text-destructive hover:text-destructive hover:bg-destructive/5", onClick: () => onRemove(cartItem.id), "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "128", "data-source-line-end": "136", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Trash2", size: 16, className: "mr-1", "data-source-file": "src/components/cart_page/CartItemRow.tsx", "data-source-line-start": "134", "data-source-line-end": "134" }),
        "Remove"
      ] })
    ] })
  ] }) });
}
function OrderSummary({
  subtotal,
  platformFee,
  deliveryFee,
  total,
  itemCount
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised border-border overflow-hidden", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "23", "data-source-line-end": "77", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "24", "data-source-line-end": "26", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "25", "data-source-line-end": "25", children: "Order Summary" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "28", "data-source-line-end": "76", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "30", "data-source-line-end": "35", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "31", "data-source-line-end": "33", children: [
          "Subtotal (",
          itemCount,
          " ",
          itemCount === 1 ? "item" : "items",
          ")"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "34", "data-source-line-end": "34", children: [
          "₹",
          subtotal
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "38", "data-source-line-end": "53", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "39", "data-source-line-end": "51", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "40", "data-source-line-end": "40", children: "Platform Fee" }),
          /* @__PURE__ */ jsxs("div", { className: "group relative", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "41", "data-source-line-end": "50", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 14, className: "text-muted-foreground cursor-help", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "42", "data-source-line-end": "46" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-foreground text-background text-xs rounded px-2 py-1 whitespace-nowrap z-10 shadow-lg", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "47", "data-source-line-end": "49", children: "3% service charge" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "font-medium text-muted-foreground", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "52", "data-source-line-end": "52", children: [
          "₹",
          platformFee
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "56", "data-source-line-end": "59", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "57", "data-source-line-end": "57", children: "Delivery to Hub" }),
        /* @__PURE__ */ jsxs("span", { className: "font-medium text-muted-foreground", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: [
          "₹",
          deliveryFee
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-2", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "61", "data-source-line-end": "61" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "64", "data-source-line-end": "67", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-base", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "65", "data-source-line-end": "65", children: "Total Amount" }),
        /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-primary", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "66", "data-source-line-end": "66", children: [
          "₹",
          total
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "70", "data-source-line-end": "75", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-foreground leading-relaxed", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "71", "data-source-line-end": "74", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 14, className: "inline mr-1 text-primary align-text-bottom", "data-source-file": "src/components/cart_page/OrderSummary.tsx", "data-source-line-start": "72", "data-source-line-end": "72" }),
        "Your payment supports fair prices for farmers. Thank you for supporting local agriculture!"
      ] }) })
    ] })
  ] });
}
const cartItemDataList = [{
  id: "cart-001",
  consumerId: "con-001",
  productId: "prd-001",
  quantity: 2,
  unitPriceSnapshot: 28,
  addedAt: "2026-09-05T10:05:00"
}, {
  id: "cart-002",
  consumerId: "con-001",
  productId: "prd-003",
  quantity: 1,
  unitPriceSnapshot: 220,
  addedAt: "2026-09-05T10:08:00"
}, {
  id: "cart-003",
  consumerId: "con-002",
  productId: "prd-004",
  quantity: 3,
  unitPriceSnapshot: 42,
  addedAt: "2026-09-04T18:00:00"
}, {
  id: "cart-004",
  consumerId: "con-003",
  productId: "prd-005",
  quantity: 1,
  unitPriceSnapshot: 980,
  addedAt: "2026-09-05T08:10:00"
}];
function getByConsumerId(consumerId) {
  return cartItemDataList.filter((item) => item.consumerId === consumerId);
}
function getByConsumerIdVO(consumerId) {
  return getByConsumerId(consumerId).map((item) => {
    const product = getById(item.productId);
    return {
      ...item,
      product,
      farmer: product ? getById$2(product.farmerId) : void 0,
      category: product ? getById$1(product.categoryId) : void 0,
      lineTotal: item.quantity * item.unitPriceSnapshot
    };
  });
}
function savePersisted(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("cartItemDataList", JSON.stringify(items));
}
function CartPageContent({
  consumerId
}) {
  const [cartItems, setCartItems] = useState(() => getByConsumerIdVO(consumerId));
  const [isClient, setIsClient] = useState(true);
  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  const handleUpdateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) => {
      const updated = prev.map((item) => item.id === cartItemId ? {
        ...item,
        quantity: newQuantity,
        lineTotal: newQuantity * item.unitPriceSnapshot
      } : item);
      savePersisted(updated.map(({
        product,
        farmer,
        category,
        lineTotal,
        ...rest
      }) => rest));
      return updated;
    });
  };
  const handleRemoveItem = (cartItemId) => {
    setCartItems((prev) => {
      const updated = prev.filter((item) => item.id !== cartItemId);
      savePersisted(updated.map(({
        product,
        farmer,
        category,
        lineTotal,
        ...rest
      }) => rest));
      toast.success("Item removed from cart");
      return updated;
    });
  };
  const handleContinueShopping = () => {
    window.location.href = "./consumer-marketplace.html";
  };
  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    const orderId = `ord-${Date.now()}`;
    const totalAmount = calculateTotal();
    window.location.href = `./payment-gateway.html?orderId=${orderId}&totalAmount=${totalAmount}`;
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.lineTotal, 0);
  };
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const platformFee = Math.round(subtotal * 0.03);
    const deliveryFee = 10;
    return subtotal + platformFee + deliveryFee;
  };
  const isEmpty = !isClient || cartItems.length === 0;
  return /* @__PURE__ */ jsxs("div", { className: "page-body flex flex-col gap-8 h-full", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "94", "data-source-line-end": "168", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "95", "data-source-line-end": "102", children: /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "96", "data-source-line-end": "101", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-page-title", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "97", "data-source-line-end": "97", children: "Shopping Cart" }),
      /* @__PURE__ */ jsxs("p", { className: "text-caption mt-2", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "98", "data-source-line-end": "100", children: [
        cartItems.length,
        " ",
        cartItems.length === 1 ? "item" : "items",
        " in your cart"
      ] })
    ] }) }),
    isEmpty ? /* @__PURE__ */ jsx("div", { className: "flex-1 flex items-center justify-center", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "105", "data-source-line-end": "113", children: /* @__PURE__ */ jsx(EmptyState, { iconName: "ShoppingCart", title: "Your cart is empty", description: "Start shopping for fresh farm produce from local farmers. Browse our marketplace to add items to your cart.", actionLabel: "Continue Shopping", onAction: handleContinueShopping, "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "106", "data-source-line-end": "112" }) }) : /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "115", "data-source-line-end": "166", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 flex flex-col gap-4 min-h-0", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "117", "data-source-line-end": "141", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto min-h-0 pr-2 space-y-3", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "118", "data-source-line-end": "129", children: cartItems.map((item, index) => /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "120", "data-source-line-end": "127", children: [
          /* @__PURE__ */ jsx(CartItemRow, { cartItem: item, onUpdateQuantity: handleUpdateQuantity, onRemove: handleRemoveItem, "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "121", "data-source-line-end": "125" }),
          index < cartItems.length - 1 && /* @__PURE__ */ jsx(Separator, { className: "mt-3", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "126", "data-source-line-end": "126" })
        ] }, item.id)) }),
        /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-border", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "131", "data-source-line-end": "140", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "text-primary hover:text-primary hover:bg-primary/5 font-medium", onClick: handleContinueShopping, "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "132", "data-source-line-end": "139", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 16, className: "mr-2", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "137", "data-source-line-end": "137" }),
          "Continue Shopping"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1 flex flex-col gap-4 h-fit sticky top-20", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "144", "data-source-line-end": "165", children: [
        /* @__PURE__ */ jsx(OrderSummary, { subtotal: calculateSubtotal(), platformFee: Math.round(calculateSubtotal() * 0.03), deliveryFee: 10, total: calculateTotal(), itemCount: cartItems.length, "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "145", "data-source-line-end": "151" }),
        /* @__PURE__ */ jsxs(Button, { size: "lg", className: "w-full font-semibold shadow-md hover:shadow-lg transition-shadow", onClick: handleProceedToCheckout, "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "153", "data-source-line-end": "160", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Lock", size: 18, className: "mr-2", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "158", "data-source-line-end": "158" }),
          "Proceed to Checkout"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-caption text-center text-muted-foreground", "data-source-file": "src/components/cart_page/CartPageContent.tsx", "data-source-line-start": "162", "data-source-line-end": "164", children: "Secure payment powered by encrypted gateway" })
      ] })
    ] })
  ] });
}
const $$CartPage = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Shopping Cart | FarmHub Connect", userRole: "consumer", userName: "Ananya Roy", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/34f3115a-ee53-4b16-9931-b4c23479c5ee.png", cartCount: 2 }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "CartPageContent", CartPageContent, { "client:load": true, consumerId: "con-001", "client:component-hydration": "load", "client:component-path": "@/components/cart_page/CartPageContent", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/cart-page.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/cart-page.astro";
const $$url = "/cart-page.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CartPage,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
