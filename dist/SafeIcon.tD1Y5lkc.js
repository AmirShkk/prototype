import { jsx } from "react/jsx-runtime";
import * as LucideIcons from "lucide-react";
import { Circle } from "lucide-react";
function SafeIcon({
  name,
  ...props
}) {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) {
    console.warn(`SafeIcon: icon "${name}" not found in lucide-react, using fallback`);
    return /* @__PURE__ */ jsx(Circle, { ...props, "data-source-file": "src/components/common/SafeIcon.tsx", "data-source-line-start": "12", "data-source-line-end": "12" });
  }
  return /* @__PURE__ */ jsx(IconComponent, { ...props, "data-source-file": "src/components/common/SafeIcon.tsx", "data-source-line-start": "14", "data-source-line-end": "14" });
}
export {
  SafeIcon as S
};
