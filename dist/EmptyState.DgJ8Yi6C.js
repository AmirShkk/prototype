import { jsxs, jsx } from "react/jsx-runtime";
import { S as SafeIcon } from "./SafeIcon.tD1Y5lkc.js";
import { B as Button, c as cn } from "./button.CEA35CrV.js";
const EmptyState = ({
  iconName,
  title,
  description,
  actionLabel,
  onAction,
  className
}) => {
  return /* @__PURE__ */ jsxs("div", { className: cn("empty-state flex flex-col items-center justify-center text-center py-16 px-6 max-w-md mx-auto animate-in fade-in duration-500", className), "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "47", "data-source-line-end": "79", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6 rounded-full bg-muted p-6 flex items-center justify-center text-muted-foreground/60 border border-border", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "53", "data-source-line-end": "60", children: /* @__PURE__ */ jsx(SafeIcon, { name: iconName, size: 48, strokeWidth: 1.5, color: "currentColor", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "54", "data-source-line-end": "59" }) }),
    /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold tracking-tight text-foreground mb-2", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "62", "data-source-line-end": "64", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-8 max-w-[280px]", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "66", "data-source-line-end": "68", children: description }),
    actionLabel && onAction && /* @__PURE__ */ jsx(Button, { onClick: onAction, variant: "secondary", className: "min-w-[140px] shadow-sm hover:shadow-md transition-shadow", "data-source-file": "src/components/common/EmptyState.tsx", "data-source-line-start": "71", "data-source-line-end": "77", children: actionLabel })
  ] });
};
export {
  EmptyState as E
};
