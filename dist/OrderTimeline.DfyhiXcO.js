import { jsx, jsxs } from "react/jsx-runtime";
import { c as cn, S as SafeIcon } from "./button.CREkWhZp.js";
function OrderTimeline({
  stages = []
}) {
  const getIconForStage = (label) => {
    const l = label.toLowerCase();
    if (l.includes("ordered")) return "ClipboardCheck";
    if (l.includes("farm")) return "Sprout";
    if (l.includes("dispatched")) return "Truck";
    if (l.includes("hub")) return "Warehouse";
    if (l.includes("completed") || l.includes("arrived")) return "CheckCircle2";
    return "Circle";
  };
  if (!stages || stages.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "relative space-y-0 py-2", "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "38", "data-source-line-end": "108", children: (stages || []).map((stage, index) => {
    const isLast = index === stages.length - 1;
    const isCompleted = stage.status === "completed";
    const isActive = stage.status === "active";
    const isPending = stage.status === "pending";
    return /* @__PURE__ */ jsxs("div", { className: "relative flex gap-4 pb-8 last:pb-0 group", "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "46", "data-source-line-end": "105", children: [
      !isLast && /* @__PURE__ */ jsx("div", { className: cn("absolute left-[19px] top-10 bottom-0 w-0.5 transition-colors duration-300", isCompleted ? "bg-primary" : "bg-muted"), "aria-hidden": "true", "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "49", "data-source-line-end": "55" }),
      /* @__PURE__ */ jsxs("div", { className: cn("relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300", isCompleted && "bg-primary border-primary text-primary-foreground", isActive && "bg-background border-primary text-primary ring-4 ring-primary/10", isPending && "bg-muted border-muted text-muted-foreground"), "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "59", "data-source-line-end": "77", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: getIconForStage(stage.label), size: 20, strokeWidth: isActive ? 2.5 : 2, "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "67", "data-source-line-end": "71" }),
        isActive && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full animate-ping bg-primary/20 -z-10", "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "75", "data-source-line-end": "75" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col pt-1.5", "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "80", "data-source-line-end": "104", children: [
        /* @__PURE__ */ jsx("span", { className: cn("text-base font-medium transition-colors", isCompleted && "text-foreground", isActive && "text-primary font-semibold", isPending && "text-muted-foreground"), "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "81", "data-source-line-end": "90", children: stage.label }),
        stage.timestamp && /* @__PURE__ */ jsx("span", { className: "text-caption mt-0.5", "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "93", "data-source-line-end": "95", children: stage.timestamp }),
        isActive && /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-primary mt-1 flex items-center gap-1", "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "99", "data-source-line-end": "102", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse", "data-source-file": "src/components/common/OrderTimeline.tsx", "data-source-line-start": "100", "data-source-line-end": "100" }),
          "In Progress"
        ] })
      ] })
    ] }, stage.id);
  }) });
}
export {
  OrderTimeline as O
};
