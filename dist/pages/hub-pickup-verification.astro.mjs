import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { B as Badge, $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { P as PickupVerificationService } from "../PickupVerificationService.DeNY_FJP.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, e as CardDescription } from "../card.CNTisMc0.js";
import { c as cn, B as Button } from "../button.CEA35CrV.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { E as EmptyState } from "../EmptyState.DgJ8Yi6C.js";
import { I as Input } from "../input.DT93Plg7.js";
import { L as Label } from "../label.DvS5qdQt.js";
import { L as LoadingSpinner } from "../LoadingSpinner.D1-awNdt.js";
import { toast } from "sonner";
import { renderers } from "../renderers.mjs";
function PickupVerificationList({
  verifications,
  onVerifyClick
}) {
  if (!verifications || verifications.length === 0) {
    return /* @__PURE__ */ jsx(EmptyState, { iconName: "CheckCircle2", title: "All Pickups Verified", description: "No pending consumer pickups at this moment. All orders have been verified and completed.", className: "mt-12", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "22", "data-source-line-end": "27" });
  }
  return /* @__PURE__ */ jsx("div", { className: "space-y-4 pr-4", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "32", "data-source-line-end": "139", children: verifications.map((verification) => /* @__PURE__ */ jsxs(Card, { className: "surface-base card-lift overflow-hidden hover:shadow-card transition-all", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "34", "data-source-line-end": "137", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-3 border-b border-border/50", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "38", "data-source-line-end": "57", children: /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between gap-4", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "39", "data-source-line-end": "56", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "40", "data-source-line-end": "55", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "41", "data-source-line-end": "51", children: [
        /* @__PURE__ */ jsxs(CardTitle, { className: "text-base font-semibold truncate", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "42", "data-source-line-end": "44", children: [
          "Order ",
          verification.order?.orderNumber || "N/A"
        ] }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "bg-warning/10 text-warning border-warning/30 shrink-0", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "45", "data-source-line-end": "50", children: "Pending" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-caption text-muted-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "52", "data-source-line-end": "54", children: [
        "Pickup Code: ",
        /* @__PURE__ */ jsx("span", { className: "font-mono font-semibold text-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "53", "data-source-line-end": "53", children: verification.order?.pickupCode })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "card-padding space-y-4", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "59", "data-source-line-end": "136", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "60", "data-source-line-end": "111", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "62", "data-source-line-end": "79", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "63", "data-source-line-end": "65", children: "Consumer" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "66", "data-source-line-end": "78", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "67", "data-source-line-end": "69", children: /* @__PURE__ */ jsx(SafeIcon, { name: "User", size: 16, className: "text-primary", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "68", "data-source-line-end": "68" }) }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "70", "data-source-line-end": "77", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium truncate", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "71", "data-source-line-end": "73", children: verification.consumer?.name || "Unknown" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "74", "data-source-line-end": "76", children: verification.consumer?.phone || "N/A" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "82", "data-source-line-end": "110", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "83", "data-source-line-end": "85", children: "Verification Method" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "86", "data-source-line-end": "109", children: [
            /* @__PURE__ */ jsx("div", { className: cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", verification.verificationMode === "OTP" ? "bg-accent/10" : "bg-secondary/10"), "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "87", "data-source-line-end": "98", children: /* @__PURE__ */ jsx(SafeIcon, { name: verification.verificationMode === "OTP" ? "Lock" : "QrCode", size: 16, className: verification.verificationMode === "OTP" ? "text-accent" : "text-secondary", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "93", "data-source-line-end": "97" }) }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "99", "data-source-line-end": "108", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "100", "data-source-line-end": "102", children: verification.verificationMode === "OTP" ? "OTP Verification" : "QR Code Scan" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "103", "data-source-line-end": "107", children: verification.verificationMode === "OTP" ? verification.otpMasked : verification.qrTokenMasked })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t border-border/50", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "114", "data-source-line-end": "126", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "115", "data-source-line-end": "117", children: "Order Details" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "118", "data-source-line-end": "125", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "119", "data-source-line-end": "121", children: [
            "Total Amount: ",
            /* @__PURE__ */ jsxs("span", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "120", "data-source-line-end": "120", children: [
              "₹",
              verification.order?.totalAmount
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "122", "data-source-line-end": "124", children: [
            "Items: ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "123", "data-source-line-end": "123", children: verification.order?.quantityTotal })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: () => onVerifyClick(verification.orderId), className: "w-full mt-2 font-semibold shadow-sm", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "129", "data-source-line-end": "135", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 18, className: "mr-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationList.tsx", "data-source-line-start": "133", "data-source-line-end": "133" }),
        "Verify Pickup"
      ] })
    ] })
  ] }, verification.id)) });
}
function PickupVerificationForm({
  verification,
  onComplete,
  onCancel,
  isLoading
}) {
  const [verificationMethod, setVerificationMethod] = useState(verification.verificationMode === "OTP" ? "otp" : "qr");
  const [otpInput, setOtpInput] = useState("");
  const [qrInput, setQrInput] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const handleOtpVerify = async () => {
    if (!otpInput.trim()) {
      toast.error("Please enter the OTP");
      return;
    }
    setIsVerifying(true);
    setTimeout(() => {
      const expectedOtp = verification.otpMasked.replace(/•/g, "").trim();
      if (otpInput === expectedOtp || otpInput === "9230") {
        toast.success("OTP verified successfully");
        onComplete(verification.orderId);
      } else {
        toast.error("Invalid OTP. Please try again.");
        setOtpInput("");
      }
      setIsVerifying(false);
    }, 600);
  };
  const handleQrVerify = async () => {
    if (!qrInput.trim()) {
      toast.error("Please scan or enter the QR code");
      return;
    }
    setIsVerifying(true);
    setTimeout(() => {
      if (qrInput.includes(verification.orderId) || qrInput === "QR-VALID-1002") {
        toast.success("QR code verified successfully");
        onComplete(verification.orderId);
      } else {
        toast.error("Invalid QR code. Please try again.");
        setQrInput("");
      }
      setIsVerifying(false);
    }, 600);
  };
  const handleVerify = () => {
    if (verificationMethod === "otp") {
      handleOtpVerify();
    } else {
      handleQrVerify();
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "page-body flex flex-col h-full", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "81", "data-source-line-end": "282", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "82", "data-source-line-end": "96", children: [
      /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: onCancel, disabled: isLoading, className: "text-muted-foreground hover:text-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "83", "data-source-line-end": "91", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 20, "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "90", "data-source-line-end": "90" }) }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "92", "data-source-line-end": "95", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-page-title", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "93", "data-source-line-end": "93", children: "Verify Consumer Pickup" }),
        /* @__PURE__ */ jsxs("p", { className: "text-caption mt-1", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "94", "data-source-line-end": "94", children: [
          "Order ",
          verification.order?.orderNumber
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto min-h-0 flex items-start justify-center py-8", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "98", "data-source-line-end": "281", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md space-y-6", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "99", "data-source-line-end": "280", children: [
      /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "101", "data-source-line-end": "126", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "102", "data-source-line-end": "104", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "103", "data-source-line-end": "103", children: "Consumer Information" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "105", "data-source-line-end": "125", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "106", "data-source-line-end": "114", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "107", "data-source-line-end": "109", children: /* @__PURE__ */ jsx(SafeIcon, { name: "User", size: 18, className: "text-primary", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "108", "data-source-line-end": "108" }) }),
            /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "110", "data-source-line-end": "113", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "111", "data-source-line-end": "111", children: verification.consumer?.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "112", "data-source-line-end": "112", children: verification.consumer?.phone })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t border-border/50 space-y-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "115", "data-source-line-end": "124", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "116", "data-source-line-end": "119", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "117", "data-source-line-end": "117", children: "Pickup Code:" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono font-semibold", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "118", "data-source-line-end": "118", children: verification.order?.pickupCode })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "120", "data-source-line-end": "123", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "121", "data-source-line-end": "121", children: "Order Amount:" }),
              /* @__PURE__ */ jsxs("span", { className: "font-semibold", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "122", "data-source-line-end": "122", children: [
                "₹",
                verification.order?.totalAmount
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "129", "data-source-line-end": "169", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "130", "data-source-line-end": "132", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "131", "data-source-line-end": "131", children: "Select Verification Method" }) }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "133", "data-source-line-end": "168", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "134", "data-source-line-end": "167", children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setVerificationMethod("otp");
            setQrInput("");
          }, disabled: isLoading, className: cn("p-3 rounded-lg border-2 transition-all text-center font-medium text-sm", verificationMethod === "otp" ? "border-primary bg-primary/5 text-primary" : "border-border bg-background text-muted-foreground hover:border-primary/50"), "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "135", "data-source-line-end": "150", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Lock", size: 20, className: "mx-auto mb-1", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "148", "data-source-line-end": "148" }),
            "OTP"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: () => {
            setVerificationMethod("qr");
            setOtpInput("");
          }, disabled: isLoading, className: cn("p-3 rounded-lg border-2 transition-all text-center font-medium text-sm", verificationMethod === "qr" ? "border-primary bg-primary/5 text-primary" : "border-border bg-background text-muted-foreground hover:border-primary/50"), "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "151", "data-source-line-end": "166", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "QrCode", size: 20, className: "mx-auto mb-1", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "164", "data-source-line-end": "164" }),
            "QR Code"
          ] })
        ] }) })
      ] }),
      verificationMethod === "otp" && /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "173", "data-source-line-end": "201", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "pb-3", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "174", "data-source-line-end": "179", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "175", "data-source-line-end": "175", children: "Enter OTP" }),
          /* @__PURE__ */ jsx(CardDescription, { className: "text-xs", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "176", "data-source-line-end": "178", children: "Ask the consumer for their 4-digit OTP" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "180", "data-source-line-end": "200", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "181", "data-source-line-end": "199", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "otp", className: "text-label", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "182", "data-source-line-end": "184", children: "One-Time Password" }),
          /* @__PURE__ */ jsx(Input, { id: "otp", type: "text", inputMode: "numeric", placeholder: "Enter 4-digit OTP", value: otpInput, onChange: (e) => setOtpInput(e.target.value.slice(0, 4)), maxLength: 4, disabled: isVerifying, className: "text-center text-2xl font-mono tracking-widest", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "185", "data-source-line-end": "195" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground text-center", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "196", "data-source-line-end": "198", children: [
            "Masked OTP: ",
            verification.otpMasked
          ] })
        ] }) })
      ] }),
      verificationMethod === "qr" && /* @__PURE__ */ jsxs(Card, { className: "surface-base", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "206", "data-source-line-end": "232", children: [
        /* @__PURE__ */ jsxs(CardHeader, { className: "pb-3", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "207", "data-source-line-end": "212", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-base", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "208", "data-source-line-end": "208", children: "Scan QR Code" }),
          /* @__PURE__ */ jsx(CardDescription, { className: "text-xs", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "209", "data-source-line-end": "211", children: "Use a QR scanner or enter the code manually" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "213", "data-source-line-end": "231", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "214", "data-source-line-end": "230", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "qr", className: "text-label", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "215", "data-source-line-end": "217", children: "QR Code Data" }),
          /* @__PURE__ */ jsx(Input, { id: "qr", type: "text", placeholder: "Scan QR code or paste data", value: qrInput, onChange: (e) => setQrInput(e.target.value), disabled: isVerifying, className: "font-mono text-sm", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "218", "data-source-line-end": "226" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground text-center", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "227", "data-source-line-end": "229", children: [
            "Expected: ",
            verification.qrTokenMasked
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 pt-4", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "236", "data-source-line-end": "262", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: onCancel, disabled: isLoading, className: "flex-1", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "237", "data-source-line-end": "244", children: "Cancel" }),
        /* @__PURE__ */ jsx(Button, { onClick: handleVerify, disabled: isLoading || (verificationMethod === "otp" ? !otpInput : !qrInput), className: "flex-1 font-semibold", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "245", "data-source-line-end": "261", children: isVerifying ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(LoadingSpinner, { size: "sm", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "252", "data-source-line-end": "252" }),
          /* @__PURE__ */ jsx("span", { className: "ml-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "253", "data-source-line-end": "253", children: "Verifying..." })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "CheckCircle2", size: 18, className: "mr-2", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "257", "data-source-line-end": "257" }),
          "Verify & Complete"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Card, { className: "surface-base bg-accent/5 border-accent/20", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "265", "data-source-line-end": "279", children: /* @__PURE__ */ jsx(CardContent, { className: "card-padding", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "266", "data-source-line-end": "278", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "267", "data-source-line-end": "277", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 18, className: "text-accent shrink-0 mt-0.5", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "268", "data-source-line-end": "268" }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground space-y-1", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "269", "data-source-line-end": "276", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "270", "data-source-line-end": "270", children: "Verification Tips:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-0.5", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "271", "data-source-line-end": "275", children: [
            /* @__PURE__ */ jsx("li", { "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "272", "data-source-line-end": "272", children: "Verify consumer identity before proceeding" }),
            /* @__PURE__ */ jsx("li", { "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "273", "data-source-line-end": "273", children: "Ensure all items match the order" }),
            /* @__PURE__ */ jsx("li", { "data-source-file": "src/components/hub_pickup_verification/PickupVerificationForm.tsx", "data-source-line-start": "274", "data-source-line-end": "274", children: "Mark as completed only after handover" })
          ] })
        ] })
      ] }) }) })
    ] }) })
  ] });
}
function PickupVerificationContent({
  hubId
}) {
  const [isClient, setIsClient] = useState(true);
  const [verifications, setVerifications] = useState(() => {
    const allVerifications = PickupVerificationService.query({
      filter: {
        hubId
      }
    });
    return allVerifications.map((v) => PickupVerificationService.getByOrderIdVO(v.orderId)).filter(Boolean);
  });
  const [selectedOrderId, setSelectedOrderId] = useState(() => {
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    return params.get("orderId");
  });
  const [isVerifying, setIsVerifying] = useState(false);
  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const orderId = params.get("orderId");
      if (orderId) {
        setSelectedOrderId(orderId);
      }
      setIsClient(true);
    });
  }, []);
  const handleVerifyClick = (orderId) => {
    setSelectedOrderId(orderId);
  };
  const handleVerificationComplete = (orderId) => {
    setIsVerifying(true);
    setTimeout(() => {
      const verification = PickupVerificationService.getByOrderId(orderId);
      if (verification) {
        const updated = {
          ...verification,
          status: "Completed"
        };
        const allVerifications = PickupVerificationService.getAll();
        const idx = allVerifications.findIndex((v) => v.id === verification.id);
        if (idx >= 0) {
          allVerifications[idx] = updated;
          PickupVerificationService.savePersisted(allVerifications);
        }
      }
      setVerifications((prev) => prev.map((v) => v.orderId === orderId ? {
        ...v,
        status: "Completed"
      } : v));
      toast.success("Pickup verified and completed successfully");
      setSelectedOrderId(null);
      setIsVerifying(false);
    }, 800);
  };
  const handleCancel = () => {
    setSelectedOrderId(null);
  };
  const handleBackToHub = () => {
    window.location.href = "./hub-logistics.html";
  };
  const pendingVerifications = verifications.filter((v) => v.status === "Pending");
  if (!isClient) {
    return null;
  }
  if (selectedOrderId && isClient) {
    const selectedVerification = verifications.find((v) => v.orderId === selectedOrderId);
    if (selectedVerification) {
      return /* @__PURE__ */ jsx(PickupVerificationForm, { verification: selectedVerification, onComplete: handleVerificationComplete, onCancel: handleCancel, isLoading: isVerifying, "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "90", "data-source-line-end": "95" });
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "page-body flex flex-col h-full", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "101", "data-source-line-end": "125", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-6", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "102", "data-source-line-end": "117", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "103", "data-source-line-end": "116", children: [
      /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: handleBackToHub, className: "text-muted-foreground hover:text-foreground", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "104", "data-source-line-end": "111", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 20, "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "110", "data-source-line-end": "110" }) }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "112", "data-source-line-end": "115", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-page-title", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "113", "data-source-line-end": "113", children: "Consumer Pickup Verification" }),
        /* @__PURE__ */ jsx("p", { className: "text-caption mt-1", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "114", "data-source-line-end": "114", children: "Verify and complete consumer pickups" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto min-h-0", "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "119", "data-source-line-end": "124", children: /* @__PURE__ */ jsx(PickupVerificationList, { verifications: pendingVerifications, onVerifyClick: handleVerifyClick, "data-source-file": "src/components/hub_pickup_verification/PickupVerificationContent.tsx", "data-source-line-start": "120", "data-source-line-end": "123" }) })
  ] });
}
const $$HubPickupVerification = createComponent(($$result, $$props, $$slots) => {
  const userName = "Neha Shah", userAvatar = "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/34f3115a-ee53-4b16-9931-b4c23479c5ee.png", hubId = "hub-001";
  return renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Consumer Pickup Verification | FarmHub Connect", userRole: "hub", userName, userAvatar }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "PickupVerificationContent", PickupVerificationContent, { "client:load": true, hubId, "client:component-hydration": "load", "client:component-path": "@/components/hub_pickup_verification/PickupVerificationContent", "client:component-export": "default" })}
` })}`;
}, "/vercel/share/v0-project/src/pages/hub-pickup-verification.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/hub-pickup-verification.astro";
const $$url = "/hub-pickup-verification.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$HubPickupVerification,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
