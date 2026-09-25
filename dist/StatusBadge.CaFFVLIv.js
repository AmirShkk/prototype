import { jsx } from "react/jsx-runtime";
import { c as cn } from "./button.CREkWhZp.js";
const statusConfig = {
  pending: {
    label: "Pending",
    className: "status-pending"
  },
  packed: {
    label: "Packed",
    className: "status-active"
  },
  dispatched: {
    label: "Dispatched",
    className: "status-active"
  },
  received: {
    label: "Received",
    className: "status-completed"
  },
  completed: {
    label: "Completed",
    className: "status-completed"
  },
  cancelled: {
    label: "Cancelled",
    className: "status-cancelled"
  },
  available: {
    label: "Available",
    className: "status-completed"
  },
  out_of_stock: {
    label: "Out of Stock",
    className: "status-cancelled"
  }
};
const sizeStyles = {
  sm: "px-2 py-0.5 text-xs font-semibold",
  md: "px-2.5 py-1 text-sm font-semibold",
  lg: "px-3 py-1.5 text-base font-bold"
};
function StatusBadge({
  status,
  size = "md"
}) {
  const config = statusConfig[status];
  return /* @__PURE__ */ jsx("span", { className: cn("inline-flex items-center rounded-full border transition-colors duration-200 whitespace-nowrap", config.className, sizeStyles[size]), "data-source-file": "src/components/common/StatusBadge.tsx", "data-source-line-start": "30", "data-source-line-end": "38", children: config.label });
}
export {
  StatusBadge as S
};
