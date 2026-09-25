import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, e as CardDescription } from "../card.CNTisMc0.js";
import { c as cn, B as Button } from "../button.CEA35CrV.js";
import { I as Input } from "../input.DT93Plg7.js";
import { L as Label } from "../label.DvS5qdQt.js";
import { T as Tabs, c as TabsContent } from "../tabs.xtS8QLDJ.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { L as LoadingSpinner } from "../LoadingSpinner.D1-awNdt.js";
import { R as RadioGroup, a as RadioGroupItem } from "../radio-group.CSkhEvSl.js";
import { c as getByIdVO } from "../OrderService.DlXVTjI7.js";
import { toast } from "sonner";
import { renderers } from "../renderers.mjs";
function OrderSummary({
  order,
  subtotal,
  platformFee,
  deliveryFee,
  discountPercent,
  finalAmount
}) {
  const discountAmount = (subtotal + platformFee + deliveryFee) * (discountPercent / 100);
  return /* @__PURE__ */ jsxs(Card, { className: "surface-base border-primary/20 bg-primary/5", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "27", "data-source-line-end": "88", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "28", "data-source-line-end": "35", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "29", "data-source-line-end": "34", children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "30", "data-source-line-end": "30", children: "Order Details" }),
      /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-primary/20 text-primary border-primary/30", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "31", "data-source-line-end": "33", children: order.orderNumber })
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "36", "data-source-line-end": "87", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 pb-4 border-b border-border", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "38", "data-source-line-end": "57", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "39", "data-source-line-end": "49", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "40", "data-source-line-end": "40", children: "From Farmer" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "41", "data-source-line-end": "48", children: [
            /* @__PURE__ */ jsx("img", { src: order.farmer?.avatarUrl || "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/f9e7fe03-9319-49e5-ac2f-98f3fb2b9b98.png", alt: order.farmer?.name, className: "w-6 h-6 rounded-full object-cover", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "42", "data-source-line-end": "46" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "47", "data-source-line-end": "47", children: order.farmer?.name })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "50", "data-source-line-end": "56", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "51", "data-source-line-end": "51", children: "Pickup Hub" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "52", "data-source-line-end": "55", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Warehouse", size: 16, className: "text-primary", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "53", "data-source-line-end": "53" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "54", "data-source-line-end": "54", children: order.hub?.name })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "60", "data-source-line-end": "80", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "61", "data-source-line-end": "64", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "62", "data-source-line-end": "62", children: [
            "Subtotal (",
            order.quantityTotal,
            " items)"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "63", "data-source-line-end": "63", children: [
            "₹",
            subtotal.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "65", "data-source-line-end": "68", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "66", "data-source-line-end": "66", children: "Platform Fee" }),
          /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "67", "data-source-line-end": "67", children: [
            "₹",
            platformFee.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "69", "data-source-line-end": "72", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "70", "data-source-line-end": "70", children: "Delivery Fee" }),
          /* @__PURE__ */ jsxs("span", { className: "font-medium", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "71", "data-source-line-end": "71", children: [
            "₹",
            deliveryFee.toFixed(2)
          ] })
        ] }),
        discountPercent > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-success pt-2 border-t border-border", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "75", "data-source-line-end": "78", children: [
          /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "76", "data-source-line-end": "76", children: [
            "Discount (",
            discountPercent,
            "%)"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "font-semibold", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "77", "data-source-line-end": "77", children: [
            "-₹",
            discountAmount.toFixed(2)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-border flex justify-between items-center", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "83", "data-source-line-end": "86", children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "84", "data-source-line-end": "84", children: "Total to Pay" }),
        /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-primary", "data-source-file": "src/components/payment_gateway/OrderSummary.tsx", "data-source-line-start": "85", "data-source-line-end": "85", children: [
          "₹",
          finalAmount.toFixed(2)
        ] })
      ] })
    ] })
  ] });
}
const methods = [{
  id: "upi",
  label: "UPI",
  description: "Google Pay, PhonePe, Paytm",
  icon: "Smartphone"
}, {
  id: "card",
  label: "Debit / Credit Card",
  description: "Visa, Mastercard, RuPay",
  icon: "CreditCard"
}, {
  id: "netbanking",
  label: "Net Banking",
  description: "Direct bank transfer",
  icon: "Building2"
}];
function PaymentMethodSelector({
  selectedMethod,
  onMethodChange,
  disabled = false
}) {
  return /* @__PURE__ */ jsx(RadioGroup, { value: selectedMethod, onValueChange: (val) => onMethodChange(val), "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "40", "data-source-line-end": "71", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "41", "data-source-line-end": "70", children: methods.map((method) => /* @__PURE__ */ jsx("div", { "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "43", "data-source-line-end": "68", children: /* @__PURE__ */ jsxs(Label, { htmlFor: method.id, className: cn("flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all", selectedMethod === method.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-muted/20", disabled && "opacity-50 cursor-not-allowed"), "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "44", "data-source-line-end": "67", children: [
    /* @__PURE__ */ jsx(RadioGroupItem, { value: method.id, id: method.id, disabled, className: "mt-1", "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "54", "data-source-line-end": "59" }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "60", "data-source-line-end": "66", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "61", "data-source-line-end": "64", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: method.icon, size: 18, className: "text-primary shrink-0", "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "62", "data-source-line-end": "62" }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "63", "data-source-line-end": "63", children: method.label })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentMethodSelector.tsx", "data-source-line-start": "65", "data-source-line-end": "65", children: method.description })
    ] })
  ] }) }, method.id)) }) });
}
function PaymentGateway() {
  const [isClient, setIsClient] = useState(true);
  const [orderId, setOrderId] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [order, setOrder] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(0);
  const [formData, setFormData] = useState({
    method: "upi"
  });
  useEffect(() => {
    setIsClient(false);
    const raf = requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const paramOrderId = params.get("orderId");
      const paramAmount = params.get("totalAmount");
      let finalOrderId = paramOrderId || "";
      let finalAmount2 = paramAmount ? parseFloat(paramAmount) : 0;
      if (!finalOrderId) {
        const allOrders = getByIdVO("ord-1001");
        if (allOrders) {
          finalOrderId = allOrders.id;
          finalAmount2 = allOrders.totalAmount;
        }
      }
      setOrderId(finalOrderId);
      setTotalAmount(finalAmount2);
      if (finalOrderId) {
        const orderData = getByIdVO(finalOrderId);
        if (orderData) {
          setOrder(orderData);
          setTotalAmount(orderData.totalAmount);
        }
      }
      setIsClient(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  const handlePaymentMethodChange = (method) => {
    setFormData({
      method
    });
  };
  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const validatePaymentForm = () => {
    if (formData.method === "upi") {
      if (!formData.upiId || !formData.upiId.includes("@")) {
        toast.error("Please enter a valid UPI ID (e.g., user@upi)");
        return false;
      }
    } else if (formData.method === "card") {
      if (!formData.cardNumber || formData.cardNumber.length < 13) {
        toast.error("Please enter a valid card number");
        return false;
      }
      if (!formData.cardHolder) {
        toast.error("Please enter cardholder name");
        return false;
      }
      if (!formData.expiryDate || !formData.expiryDate.match(/^\d{2}\/\d{2}$/)) {
        toast.error("Please enter expiry date in MM/YY format");
        return false;
      }
      if (!formData.cvv || formData.cvv.length < 3) {
        toast.error("Please enter a valid CVV");
        return false;
      }
    } else if (formData.method === "netbanking") {
      if (!formData.bankName) {
        toast.error("Please select a bank");
        return false;
      }
      if (!formData.accountNumber) {
        toast.error("Please enter account number");
        return false;
      }
    }
    return true;
  };
  const applyCoupon = () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }
    const validCoupons = {
      "FARM10": 10,
      "FRESH15": 15,
      "SAVE20": 20
    };
    const discount = validCoupons[couponCode.toUpperCase()];
    if (discount) {
      setDiscountApplied(discount);
      toast.success(`Coupon applied! ${discount}% discount`);
    } else {
      toast.error("Invalid coupon code");
      setDiscountApplied(0);
    }
  };
  const handlePayment = async () => {
    if (!validatePaymentForm()) {
      return;
    }
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    const transactionRef = `TXN-${Math.floor(Math.random() * 1e6)}`;
    toast.success(`Payment successful! Transaction: ${transactionRef}`);
    setTimeout(() => {
      window.location.href = `./order-success.html?orderId=${orderId}`;
    }, 1500);
  };
  const handleCancel = () => {
    window.location.href = "./cart-page.html";
  };
  if (!isClient || !order) {
    return /* @__PURE__ */ jsx("div", { className: "page-body flex items-center justify-center min-h-[60vh]", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "168", "data-source-line-end": "170", children: /* @__PURE__ */ jsx(LoadingSpinner, { size: "lg", text: "Loading payment details...", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "169", "data-source-line-end": "169" }) });
  }
  const finalAmount = totalAmount - totalAmount * discountApplied / 100;
  return /* @__PURE__ */ jsxs("div", { className: "page-body max-w-6xl mx-auto", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "177", "data-source-line-end": "463", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "178", "data-source-line-end": "181", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-page-title mb-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "179", "data-source-line-end": "179", children: "Secure Payment" }),
      /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "180", "data-source-line-end": "180", children: "Complete your purchase securely" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "183", "data-source-line-end": "462", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "185", "data-source-line-end": "403", children: [
        /* @__PURE__ */ jsx(OrderSummary, { order, subtotal: order.subtotalAmount, platformFee: order.platformFee, deliveryFee: order.deliveryFee, discountPercent: discountApplied, finalAmount, "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "187", "data-source-line-end": "194" }),
        /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "197", "data-source-line-end": "232", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "198", "data-source-line-end": "203", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "199", "data-source-line-end": "202", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Gift", size: 20, className: "text-secondary", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "200", "data-source-line-end": "200" }),
            "Apply Coupon Code"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "204", "data-source-line-end": "231", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "205", "data-source-line-end": "221", children: [
              /* @__PURE__ */ jsx(Input, { placeholder: "Enter coupon code (e.g., FARM10, FRESH15)", value: couponCode, onChange: (e) => setCouponCode(e.target.value), className: "flex-1", disabled: isProcessing, "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "206", "data-source-line-end": "212" }),
              /* @__PURE__ */ jsx(Button, { onClick: applyCoupon, variant: "outline", disabled: isProcessing, className: "px-6", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "213", "data-source-line-end": "220", children: "Apply" })
            ] }),
            discountApplied > 0 && /* @__PURE__ */ jsxs("div", { className: "p-3 bg-success/10 border border-success/30 rounded-lg flex items-center gap-2 text-success", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "223", "data-source-line-end": "226", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 18, "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "224", "data-source-line-end": "224" }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "225", "data-source-line-end": "225", children: [
                discountApplied,
                "% discount applied!"
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "228", "data-source-line-end": "230", children: "Try codes: FARM10, FRESH15, SAVE20" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "235", "data-source-line-end": "247", children: [
          /* @__PURE__ */ jsxs(CardHeader, { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "236", "data-source-line-end": "239", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "237", "data-source-line-end": "237", children: "Select Payment Method" }),
            /* @__PURE__ */ jsx(CardDescription, { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "238", "data-source-line-end": "238", children: "Choose how you'd like to pay" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "240", "data-source-line-end": "246", children: /* @__PURE__ */ jsx(PaymentMethodSelector, { selectedMethod: formData.method, onMethodChange: handlePaymentMethodChange, disabled: isProcessing, "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "241", "data-source-line-end": "245" }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "250", "data-source-line-end": "364", children: [
          /* @__PURE__ */ jsx(CardHeader, { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "251", "data-source-line-end": "253", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "252", "data-source-line-end": "252", children: "Payment Details" }) }),
          /* @__PURE__ */ jsx(CardContent, { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "254", "data-source-line-end": "363", children: /* @__PURE__ */ jsxs(Tabs, { value: formData.method, onValueChange: (val) => handlePaymentMethodChange(val), className: "w-full", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "255", "data-source-line-end": "362", children: [
            /* @__PURE__ */ jsxs(TabsContent, { value: "upi", className: "space-y-4 mt-4", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "257", "data-source-line-end": "272", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "258", "data-source-line-end": "268", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "upi-id", className: "text-label", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "259", "data-source-line-end": "259", children: "UPI ID" }),
                /* @__PURE__ */ jsx(Input, { id: "upi-id", placeholder: "yourname@upi", value: formData.upiId || "", onChange: (e) => handleFormChange("upiId", e.target.value), disabled: isProcessing, className: "h-10", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "260", "data-source-line-end": "267" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "269", "data-source-line-end": "271", children: "Enter your UPI ID to complete the payment. You'll receive a confirmation on your registered mobile number." })
            ] }),
            /* @__PURE__ */ jsxs(TabsContent, { value: "card", className: "space-y-4 mt-4", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "275", "data-source-line-end": "328", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "276", "data-source-line-end": "287", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "card-number", className: "text-label", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "277", "data-source-line-end": "277", children: "Card Number" }),
                /* @__PURE__ */ jsx(Input, { id: "card-number", placeholder: "1234 5678 9012 3456", value: formData.cardNumber || "", onChange: (e) => handleFormChange("cardNumber", e.target.value.replace(/\s/g, "")), disabled: isProcessing, maxLength: 16, className: "h-10 font-mono", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "278", "data-source-line-end": "286" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "289", "data-source-line-end": "299", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "card-holder", className: "text-label", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "290", "data-source-line-end": "290", children: "Cardholder Name" }),
                /* @__PURE__ */ jsx(Input, { id: "card-holder", placeholder: "John Doe", value: formData.cardHolder || "", onChange: (e) => handleFormChange("cardHolder", e.target.value), disabled: isProcessing, className: "h-10", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "291", "data-source-line-end": "298" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "301", "data-source-line-end": "327", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "302", "data-source-line-end": "313", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "expiry", className: "text-label", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "303", "data-source-line-end": "303", children: "Expiry Date" }),
                  /* @__PURE__ */ jsx(Input, { id: "expiry", placeholder: "MM/YY", value: formData.expiryDate || "", onChange: (e) => handleFormChange("expiryDate", e.target.value), disabled: isProcessing, maxLength: 5, className: "h-10 font-mono", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "304", "data-source-line-end": "312" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "314", "data-source-line-end": "326", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "cvv", className: "text-label", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "315", "data-source-line-end": "315", children: "CVV" }),
                  /* @__PURE__ */ jsx(Input, { id: "cvv", placeholder: "123", value: formData.cvv || "", onChange: (e) => handleFormChange("cvv", e.target.value), disabled: isProcessing, maxLength: 4, type: "password", className: "h-10 font-mono", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "316", "data-source-line-end": "325" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(TabsContent, { value: "netbanking", className: "space-y-4 mt-4", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "331", "data-source-line-end": "361", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "332", "data-source-line-end": "348", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "bank-name", className: "text-label", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "333", "data-source-line-end": "333", children: "Select Bank" }),
                /* @__PURE__ */ jsxs("select", { id: "bank-name", value: formData.bankName || "", onChange: (e) => handleFormChange("bankName", e.target.value), disabled: isProcessing, className: "w-full h-10 px-3 rounded-md border border-input bg-background text-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "334", "data-source-line-end": "347", children: [
                  /* @__PURE__ */ jsx("option", { value: "", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "341", "data-source-line-end": "341", children: "Choose your bank..." }),
                  /* @__PURE__ */ jsx("option", { value: "HDFC", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "342", "data-source-line-end": "342", children: "HDFC Bank" }),
                  /* @__PURE__ */ jsx("option", { value: "ICICI", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "343", "data-source-line-end": "343", children: "ICICI Bank" }),
                  /* @__PURE__ */ jsx("option", { value: "SBI", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "344", "data-source-line-end": "344", children: "State Bank of India" }),
                  /* @__PURE__ */ jsx("option", { value: "AXIS", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "345", "data-source-line-end": "345", children: "Axis Bank" }),
                  /* @__PURE__ */ jsx("option", { value: "KOTAK", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "346", "data-source-line-end": "346", children: "Kotak Mahindra Bank" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "350", "data-source-line-end": "360", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "account-number", className: "text-label", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "351", "data-source-line-end": "351", children: "Account Number" }),
                /* @__PURE__ */ jsx(Input, { id: "account-number", placeholder: "Your account number", value: formData.accountNumber || "", onChange: (e) => handleFormChange("accountNumber", e.target.value), disabled: isProcessing, className: "h-10", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "352", "data-source-line-end": "359" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-4", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "367", "data-source-line-end": "393", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleCancel, disabled: isProcessing, className: "flex-1", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "368", "data-source-line-end": "375", children: "Cancel Payment" }),
          /* @__PURE__ */ jsx(Button, { onClick: handlePayment, disabled: isProcessing, className: "flex-1 bg-primary text-primary-foreground hover:bg-primary/90", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "376", "data-source-line-end": "392", children: isProcessing ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(LoadingSpinner, { size: "sm", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "383", "data-source-line-end": "383" }),
            /* @__PURE__ */ jsx("span", { className: "ml-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "384", "data-source-line-end": "384", children: "Processing..." })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Lock", size: 18, className: "mr-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "388", "data-source-line-end": "388" }),
            "Pay ₹",
            finalAmount.toFixed(2)
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-accent/5 border border-accent/20 rounded-lg flex items-start gap-3", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "396", "data-source-line-end": "402", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Shield", size: 20, className: "text-accent mt-0.5 shrink-0", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "397", "data-source-line-end": "397" }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "398", "data-source-line-end": "401", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground mb-1", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "399", "data-source-line-end": "399", children: "Your payment is secure" }),
            /* @__PURE__ */ jsx("p", { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "400", "data-source-line-end": "400", children: "All transactions are encrypted and processed through secure payment gateways. Your financial information is never stored on our servers." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "406", "data-source-line-end": "461", children: /* @__PURE__ */ jsxs(Card, { className: "surface-raised sticky top-24", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "407", "data-source-line-end": "460", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "408", "data-source-line-end": "410", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "409", "data-source-line-end": "409", children: "Order Summary" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "411", "data-source-line-end": "459", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 pb-4 border-b border-border", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "412", "data-source-line-end": "425", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "413", "data-source-line-end": "416", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "414", "data-source-line-end": "414", children: "Order ID" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono font-semibold", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "415", "data-source-line-end": "415", children: order.orderNumber })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "417", "data-source-line-end": "420", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "418", "data-source-line-end": "418", children: "Items" }),
              /* @__PURE__ */ jsxs("span", { className: "font-semibold", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "419", "data-source-line-end": "419", children: [
                order.quantityTotal,
                " items"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "421", "data-source-line-end": "424", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "422", "data-source-line-end": "422", children: "Subtotal" }),
              /* @__PURE__ */ jsxs("span", { className: "font-semibold", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "423", "data-source-line-end": "423", children: [
                "₹",
                order.subtotalAmount.toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 pb-4 border-b border-border text-sm", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "427", "data-source-line-end": "442", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "428", "data-source-line-end": "431", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "429", "data-source-line-end": "429", children: "Platform Fee" }),
              /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "430", "data-source-line-end": "430", children: [
                "₹",
                order.platformFee.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "432", "data-source-line-end": "435", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "433", "data-source-line-end": "433", children: "Delivery Fee" }),
              /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "434", "data-source-line-end": "434", children: [
                "₹",
                order.deliveryFee.toFixed(2)
              ] })
            ] }),
            discountApplied > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-success", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "437", "data-source-line-end": "440", children: [
              /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "438", "data-source-line-end": "438", children: [
                "Discount (",
                discountApplied,
                "%)"
              ] }),
              /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "439", "data-source-line-end": "439", children: [
                "-₹",
                ((order.subtotalAmount + order.platformFee + order.deliveryFee) * discountApplied / 100).toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "444", "data-source-line-end": "447", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "445", "data-source-line-end": "445", children: "Total Amount" }),
            /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-primary", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "446", "data-source-line-end": "446", children: [
              "₹",
              finalAmount.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-4 space-y-2 text-xs text-muted-foreground", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "449", "data-source-line-end": "458", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "450", "data-source-line-end": "453", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 14, "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "451", "data-source-line-end": "451" }),
              /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "452", "data-source-line-end": "452", children: [
                "Pickup at ",
                order.hub?.name || "Hub"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "454", "data-source-line-end": "457", children: [
              /* @__PURE__ */ jsx(SafeIcon, { name: "User", size: 14, "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "455", "data-source-line-end": "455" }),
              /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/payment_gateway/PaymentGateway.tsx", "data-source-line-start": "456", "data-source-line-end": "456", children: [
                "From ",
                order.farmer?.name || "Farmer"
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
const $$PaymentGateway = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Secure Payment - FarmConnect", userRole: "consumer", userName: "Ananya Roy", userAvatar: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/34f3115a-ee53-4b16-9931-b4c23479c5ee.png", cartCount: 0 }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "PaymentGateway", PaymentGateway, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/payment_gateway/PaymentGateway", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/payment-gateway.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/payment-gateway.astro";
const $$url = "/payment-gateway.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$PaymentGateway,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
