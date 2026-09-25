import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn } from "./button.CEA35CrV.js";
import { S as SafeIcon } from "./SafeIcon.tD1Y5lkc.js";
const LoadingSpinner = ({
  size = "md",
  text,
  className
}) => {
  const sizeMap = {
    sm: {
      icon: 16,
      text: "text-xs"
    },
    md: {
      icon: 24,
      text: "text-sm"
    },
    lg: {
      icon: 40,
      text: "text-base"
    }
  };
  const currentSize = sizeMap[size];
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col items-center justify-center gap-3 animate-in fade-in duration-500", className), role: "status", "aria-live": "polite", "data-source-file": "src/components/common/LoadingSpinner.tsx", "data-source-line-start": "40", "data-source-line-end": "83", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center", "data-source-file": "src/components/common/LoadingSpinner.tsx", "data-source-line-start": "48", "data-source-line-end": "69", children: [
      /* @__PURE__ */ jsx("div", { className: cn("animate-spin text-primary", size === "sm" && "h-4 w-4", size === "md" && "h-6 w-6", size === "lg" && "h-10 w-10"), "data-source-file": "src/components/common/LoadingSpinner.tsx", "data-source-line-start": "50", "data-source-line-end": "63", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: currentSize.icon, strokeWidth: 2.5, "data-source-file": "src/components/common/LoadingSpinner.tsx", "data-source-line-start": "58", "data-source-line-end": "62" }) }),
      size === "lg" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-ping rounded-full bg-primary/20", "data-source-file": "src/components/common/LoadingSpinner.tsx", "data-source-line-start": "67", "data-source-line-end": "67" })
    ] }),
    text && /* @__PURE__ */ jsx("p", { className: cn("text-muted-foreground font-medium animate-pulse", currentSize.text), "data-source-file": "src/components/common/LoadingSpinner.tsx", "data-source-line-start": "72", "data-source-line-end": "79", children: text }),
    /* @__PURE__ */ jsx("span", { className: "sr-only", "data-source-file": "src/components/common/LoadingSpinner.tsx", "data-source-line-start": "82", "data-source-line-end": "82", children: "Loading..." })
  ] });
};
export {
  LoadingSpinner as L
};
