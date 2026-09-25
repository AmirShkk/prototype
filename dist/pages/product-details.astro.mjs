import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback, B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { c as cn, B as Button } from "../button.CEA35CrV.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../card.CNTisMc0.js";
import { S as Separator } from "../separator.Bl_sPyh_.js";
import { I as Input } from "../input.DT93Plg7.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { S as StatusBadge } from "../StatusBadge.CWDBgqR0.js";
import { c as getAll, d as getByIdVO } from "../ProductService.CADRtByu.js";
import { g as getById } from "../FarmerService.BuornUJX.js";
import { toast } from "sonner";
import { renderers } from "../renderers.mjs";
function FarmerCard({
  farmer
}) {
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "14", "data-source-line-end": "67", children: [
    /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "15", "data-source-line-end": "17", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "16", "data-source-line-end": "16", children: "About the Farmer" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "18", "data-source-line-end": "66", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "19", "data-source-line-end": "47", children: [
        /* @__PURE__ */ jsxs(Avatar, { className: "h-16 w-16 border-2 border-primary/20 shadow-sm", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "20", "data-source-line-end": "25", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: farmer.avatarUrl, alt: farmer.name, "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "21", "data-source-line-end": "21" }),
          /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10 text-primary font-bold text-lg", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "22", "data-source-line-end": "24", children: farmer.name.charAt(0) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "26", "data-source-line-end": "46", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "27", "data-source-line-end": "27", children: farmer.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "28", "data-source-line-end": "41", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "29", "data-source-line-end": "39", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(SafeIcon, { name: "Star", size: 14, className: i < Math.floor(farmer.rating) ? "fill-warning text-warning" : "text-muted", strokeWidth: 1.5, "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "31", "data-source-line-end": "37" }, i)) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "40", "data-source-line-end": "40", children: farmer.rating })
          ] }),
          /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "w-fit", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "42", "data-source-line-end": "45", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 12, className: "mr-1 text-success", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "43", "data-source-line-end": "43" }),
            farmer.verificationStatus
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-2 border-t border-border", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "49", "data-source-line-end": "61", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "50", "data-source-line-end": "56", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 16, className: "text-primary mt-0.5 shrink-0", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "51", "data-source-line-end": "51" }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "52", "data-source-line-end": "55", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "53", "data-source-line-end": "53", children: farmer.village }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "54", "data-source-line-end": "54", children: farmer.region })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "57", "data-source-line-end": "60", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Phone", size: 16, className: "text-primary mt-0.5 shrink-0", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "58", "data-source-line-end": "58" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "59", "data-source-line-end": "59", children: farmer.phone })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border", "data-source-file": "src/components/product_details/FarmerCard.tsx", "data-source-line-start": "63", "data-source-line-end": "65", children: farmer.bio })
    ] })
  ] });
}
function ReviewsSection({
  productId
}) {
  const mockReviews = [{
    id: "rev-001",
    author: "Priya Sharma",
    avatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png",
    rating: 5,
    date: "2 days ago",
    text: "Excellent quality! The spinach was fresh and delivered on time. Will definitely order again."
  }, {
    id: "rev-002",
    author: "Vikram Patel",
    avatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png",
    rating: 4,
    date: "1 week ago",
    text: "Good quality produce. Packaging could be improved to prevent wilting during transit."
  }, {
    id: "rev-003",
    author: "Anjali Desai",
    avatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png",
    rating: 5,
    date: "2 weeks ago",
    text: "Fresh from the farm! Best quality I've found. Supporting local farmers has never been easier."
  }];
  const avgRating = (mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length).toFixed(1);
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "50", "data-source-line-end": "127", children: [
    /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "51", "data-source-line-end": "53", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "52", "data-source-line-end": "52", children: "Customer Reviews" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "54", "data-source-line-end": "126", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 pb-4 border-b border-border", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "56", "data-source-line-end": "91", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "57", "data-source-line-end": "71", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-foreground", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: avgRating }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-0.5 mt-1", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "59", "data-source-line-end": "69", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(SafeIcon, { name: "Star", size: 16, className: i < Math.round(parseFloat(avgRating)) ? "fill-warning text-warning" : "text-muted", strokeWidth: 1.5, "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "61", "data-source-line-end": "67" }, i)) }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-2", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "70", "data-source-line-end": "70", children: [
            mockReviews.length,
            " reviews"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 space-y-2", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "73", "data-source-line-end": "90", children: [5, 4, 3, 2, 1].map((rating) => {
          const count = mockReviews.filter((r) => r.rating === rating).length;
          const percentage = count / mockReviews.length * 100;
          return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "78", "data-source-line-end": "87", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground w-6", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "79", "data-source-line-end": "79", children: [
              rating,
              "★"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 h-1.5 bg-muted rounded-full overflow-hidden", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "80", "data-source-line-end": "85", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-warning transition-all duration-300", style: {
              width: `${percentage}%`
            }, "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "81", "data-source-line-end": "84" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground w-6 text-right", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "86", "data-source-line-end": "86", children: count })
          ] }, rating);
        }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "94", "data-source-line-end": "125", children: mockReviews.map((review) => /* @__PURE__ */ jsx("div", { className: "pb-4 border-b border-border last:border-0 last:pb-0", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "96", "data-source-line-end": "123", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "97", "data-source-line-end": "122", children: [
        /* @__PURE__ */ jsxs(Avatar, { className: "h-10 w-10 border border-border", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "98", "data-source-line-end": "103", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: review.avatar, alt: review.author, "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "99", "data-source-line-end": "99" }),
          /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10 text-primary text-xs font-bold", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "100", "data-source-line-end": "102", children: review.author.charAt(0) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "104", "data-source-line-end": "121", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "105", "data-source-line-end": "108", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-foreground", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "106", "data-source-line-end": "106", children: review.author }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "107", "data-source-line-end": "107", children: review.date })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "109", "data-source-line-end": "119", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(SafeIcon, { name: "Star", size: 12, className: i < review.rating ? "fill-warning text-warning" : "text-muted", strokeWidth: 1.5, "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "111", "data-source-line-end": "117" }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", "data-source-file": "src/components/product_details/ReviewsSection.tsx", "data-source-line-start": "120", "data-source-line-end": "120", children: review.text })
        ] })
      ] }) }, review.id)) })
    ] })
  ] });
}
function RelatedProducts({
  currentProductId,
  categoryId
}) {
  const [relatedProducts] = useState(() => {
    const allProducts = getAll();
    return allProducts.filter((p) => p.categoryId === categoryId && p.id !== currentProductId).slice(0, 4);
  });
  if (relatedProducts.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Card, { className: "surface-raised sticky top-24", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "28", "data-source-line-end": "84", children: [
    /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "29", "data-source-line-end": "31", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "30", "data-source-line-end": "30", children: "Related Products" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "32", "data-source-line-end": "83", children: [
      relatedProducts.map((product) => {
        const farmer = getById(product.farmerId);
        return /* @__PURE__ */ jsx("button", { onClick: () => window.location.href = `./product-details.html?productId=${product.id}`, className: "w-full text-left group", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "36", "data-source-line-end": "71", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-200", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "41", "data-source-line-end": "70", children: [
          /* @__PURE__ */ jsx("div", { className: "relative w-16 h-16 rounded overflow-hidden shrink-0 bg-muted", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "42", "data-source-line-end": "48", children: /* @__PURE__ */ jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "43", "data-source-line-end": "47" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "49", "data-source-line-end": "69", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "50", "data-source-line-end": "52", children: product.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "53", "data-source-line-end": "55", children: farmer?.name || "Unknown Farmer" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-1.5", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "56", "data-source-line-end": "68", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-primary", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "57", "data-source-line-end": "59", children: [
                "₹",
                product.pricePerUnit
              ] }),
              /* @__PURE__ */ jsx("span", { className: cn("text-xs font-medium px-1.5 py-0.5 rounded", product.stockQty > 0 ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"), "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "60", "data-source-line-end": "67", children: product.stockQty > 0 ? `${product.stockQty} left` : "Out" })
            ] })
          ] })
        ] }) }, product.id);
      }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full mt-4", onClick: () => window.location.href = `./consumer-marketplace.html?category=${categoryId}`, "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "75", "data-source-line-end": "82", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowRight", size: 16, className: "mr-2", "data-source-file": "src/components/product_details/RelatedProducts.tsx", "data-source-line-start": "80", "data-source-line-end": "80" }),
        "View All in Category"
      ] })
    ] })
  ] });
}
function ProductDetailsContent() {
  const [isClient, setIsClient] = useState(true);
  const [product, setProduct] = useState(() => {
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    const productId = params.get("productId");
    if (productId) {
      return getByIdVO(productId) ?? getByIdVO(getAll()[0]?.id || "") ?? null;
    }
    const firstProduct = getAll()[0];
    return firstProduct ? getByIdVO(firstProduct.id) : null;
  });
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");
    if (productId) {
      const foundProduct = getByIdVO(productId);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  if (!product) {
    return /* @__PURE__ */ jsx("div", { className: "page-body flex items-center justify-center min-h-[60vh]", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "54", "data-source-line-end": "63", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "55", "data-source-line-end": "62", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 48, className: "mx-auto text-destructive", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "56", "data-source-line-end": "56" }),
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "57", "data-source-line-end": "57", children: "Product Not Found" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "58", "data-source-line-end": "58", children: "The product you're looking for is no longer available." }),
      /* @__PURE__ */ jsx(Button, { onClick: () => window.location.href = "./consumer-marketplace.html", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "59", "data-source-line-end": "61", children: "Back to Marketplace" })
    ] }) });
  }
  const isOutOfStock = product.status === "Out of Stock" || product.stockQty <= 0;
  Math.min(quantity + product.stockQty - 1, product.stockQty);
  const handleAddToCart = async () => {
    if (isOutOfStock) return;
    setIsAddingToCart(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success(`${quantity} × ${product.name} added to cart`, {
      description: `₹${(product.pricePerUnit * quantity).toLocaleString("en-IN")} total`
    });
    setIsAddingToCart(false);
    setQuantity(1);
  };
  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}?productId=${product.id}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Product link copied to clipboard");
    }).catch(() => {
      toast.error("Failed to copy link");
    });
  };
  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0 && val <= product.stockQty) {
      setQuantity(val);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "page-body space-y-8", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "101", "data-source-line-end": "314", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "103", "data-source-line-end": "113", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => window.location.href = "./consumer-marketplace.html", className: "hover:text-foreground transition-colors flex items-center gap-1", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "104", "data-source-line-end": "110", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 16, "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "108", "data-source-line-end": "108" }),
        "Marketplace"
      ] }),
      /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "111", "data-source-line-end": "111", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium truncate", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "112", "data-source-line-end": "112", children: product.name })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "115", "data-source-line-end": "313", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "117", "data-source-line-end": "307", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-square overflow-hidden rounded-lg border border-border bg-muted/30 shadow-sm", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "118", "data-source-line-end": "138", children: [
          /* @__PURE__ */ jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-full object-cover", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "119", "data-source-line-end": "123" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 flex gap-2", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "124", "data-source-line-end": "134", children: [
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-white/90 backdrop-blur-sm border-none shadow-sm", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "125", "data-source-line-end": "127", children: product.category?.name || "Product" }),
            product.organicCertified && /* @__PURE__ */ jsxs(Badge, { className: "bg-success/20 text-success border-success/30 shadow-sm", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "129", "data-source-line-end": "132", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "Leaf", size: 12, className: "mr-1", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "130", "data-source-line-end": "130" }),
              "Organic"
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "135", "data-source-line-end": "137", children: /* @__PURE__ */ jsx(StatusBadge, { status: product.status === "Available" ? "available" : "out_of_stock", size: "md", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "136", "data-source-line-end": "136" }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "surface-raised", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "141", "data-source-line-end": "298", children: [
          /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "142", "data-source-line-end": "194", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "143", "data-source-line-end": "193", children: [
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "144", "data-source-line-end": "151", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight text-foreground mb-2", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "145", "data-source-line-end": "147", children: product.name }),
              /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "148", "data-source-line-end": "150", children: product.description })
            ] }),
            /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "153", "data-source-line-end": "153" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "155", "data-source-line-end": "172", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "156", "data-source-line-end": "165", children: [
                /* @__PURE__ */ jsx("span", { className: "text-caption uppercase tracking-wider", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "157", "data-source-line-end": "157", children: "Harvest Date" }),
                /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-foreground", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "158", "data-source-line-end": "164", children: new Date(product.harvestDate).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "166", "data-source-line-end": "171", children: [
                /* @__PURE__ */ jsx("span", { className: "text-caption uppercase tracking-wider", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "167", "data-source-line-end": "167", children: "Unit" }),
                /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-foreground capitalize", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "168", "data-source-line-end": "170", children: product.unit })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Separator, { "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "174", "data-source-line-end": "174" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "176", "data-source-line-end": "192", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "177", "data-source-line-end": "184", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-4xl font-bold text-primary", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "178", "data-source-line-end": "180", children: [
                  "₹",
                  product.pricePerUnit
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "text-lg text-muted-foreground", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "181", "data-source-line-end": "183", children: [
                  "/ ",
                  product.unit
                ] })
              ] }),
              quantity > 1 && /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "186", "data-source-line-end": "190", children: [
                "Total: ",
                /* @__PURE__ */ jsxs("span", { className: "font-semibold text-foreground", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "187", "data-source-line-end": "189", children: [
                  "₹",
                  (product.pricePerUnit * quantity).toLocaleString("en-IN")
                ] })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "196", "data-source-line-end": "297", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "198", "data-source-line-end": "219", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "199", "data-source-line-end": "209", children: [
                /* @__PURE__ */ jsx("span", { className: "text-caption font-medium uppercase tracking-wider", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "200", "data-source-line-end": "202", children: "Stock Available" }),
                /* @__PURE__ */ jsxs("span", { className: cn("text-sm font-semibold", product.stockQty > 10 ? "text-success" : product.stockQty > 0 ? "text-warning" : "text-destructive"), "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "203", "data-source-line-end": "208", children: [
                  product.stockQty,
                  " ",
                  product.unit
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-muted h-2 rounded-full overflow-hidden", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "210", "data-source-line-end": "218", children: /* @__PURE__ */ jsx("div", { className: cn("h-full rounded-full transition-all duration-300", product.stockQty > 10 ? "bg-success" : product.stockQty > 0 ? "bg-warning" : "bg-destructive"), style: {
                width: `${Math.min(product.stockQty / 50 * 100, 100)}%`
              }, "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "211", "data-source-line-end": "217" }) })
            ] }),
            !isOutOfStock && /* @__PURE__ */ jsxs("div", { className: "space-y-3", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "223", "data-source-line-end": "258", children: [
              /* @__PURE__ */ jsx("label", { className: "text-caption font-medium uppercase tracking-wider block", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "224", "data-source-line-end": "226", children: "Quantity" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "227", "data-source-line-end": "257", children: [
                /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: () => setQuantity(Math.max(1, quantity - 1)), disabled: quantity <= 1, className: "h-10 w-10", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "228", "data-source-line-end": "236", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Minus", size: 18, "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "235", "data-source-line-end": "235" }) }),
                /* @__PURE__ */ jsx(Input, { type: "number", min: "1", max: product.stockQty, value: quantity, onChange: handleQuantityChange, className: "h-10 w-20 text-center font-semibold", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "237", "data-source-line-end": "244" }),
                /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: () => setQuantity(Math.min(product.stockQty, quantity + 1)), disabled: quantity >= product.stockQty, className: "h-10 w-10", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "245", "data-source-line-end": "253", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Plus", size: 18, "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "252", "data-source-line-end": "252" }) }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground ml-auto", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "254", "data-source-line-end": "256", children: [
                  "Max: ",
                  product.stockQty
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-4", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "262", "data-source-line-end": "289", children: [
              /* @__PURE__ */ jsx(Button, { size: "lg", className: "flex-1 font-semibold shadow-sm", disabled: isOutOfStock || isAddingToCart, onClick: handleAddToCart, "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "263", "data-source-line-end": "280", children: isAddingToCart ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 18, className: "mr-2 animate-spin", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "271", "data-source-line-end": "271" }),
                "Adding..."
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(SafeIcon, { name: "ShoppingCart", size: 18, className: "mr-2", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "276", "data-source-line-end": "276" }),
                isOutOfStock ? "Out of Stock" : "Add to Cart"
              ] }) }),
              /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", onClick: handleShare, className: "px-4", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "281", "data-source-line-end": "288", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Share2", size: 18, "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "287", "data-source-line-end": "287" }) })
            ] }),
            product.minOrderQty > 1 && /* @__PURE__ */ jsxs("div", { className: "p-3 bg-accent/10 border border-accent/20 rounded-lg text-sm text-accent", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "292", "data-source-line-end": "295", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 14, className: "inline mr-2", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "293", "data-source-line-end": "293" }),
              "Minimum order: ",
              product.minOrderQty,
              " ",
              product.unit
            ] })
          ] })
        ] }),
        product.farmer && /* @__PURE__ */ jsx(FarmerCard, { farmer: product.farmer, "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "302", "data-source-line-end": "302" }),
        /* @__PURE__ */ jsx(ReviewsSection, { productId: product.id, "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "306", "data-source-line-end": "306" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "310", "data-source-line-end": "312", children: /* @__PURE__ */ jsx(RelatedProducts, { currentProductId: product.id, categoryId: product.categoryId, "data-source-file": "src/components/product_details/ProductDetailsContent.tsx", "data-source-line-start": "311", "data-source-line-end": "311" }) })
    ] })
  ] });
}
const $$ProductDetails = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Product Details | FarmConnect", userRole: "consumer", userName: "Rajesh Kumar", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png", cartCount: 3 }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "ProductDetailsContent", ProductDetailsContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/product_details/ProductDetailsContent", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/product-details.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/product-details.astro";
const $$url = "/product-details.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ProductDetails,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
