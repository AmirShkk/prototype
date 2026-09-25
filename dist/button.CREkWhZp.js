import { jsx } from "react/jsx-runtime";
import * as LucideIcons from "lucide-react";
import { Circle } from "lucide-react";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
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
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = React.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ref, ...props, "data-source-file": "src/components/ui/button.tsx", "data-source-line-start": "47", "data-source-line-end": "51" });
});
Button.displayName = "Button";
export {
  Button as B,
  SafeIcon as S,
  buttonVariants as b,
  cn as c
};
