import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as renderSlot } from "./astro/server.pHTpn1D4.js";
import { $ as $$BaseLayout } from "./BaseLayout.CQ4I5Z1p.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { c as cn, S as SafeIcon, B as Button } from "./button.CREkWhZp.js";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRight, Check, Circle } from "lucide-react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
/* empty css                              */
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({
  className,
  inset,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.SubTrigger, { ref, className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className), ...props, children: [
  children,
  /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "37", "data-source-line-end": "37" })
] }));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.SubContent, { ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className), ...props }));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({
  className,
  sideOffset = 4,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, { ref, sideOffset, className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", className), ...props }) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, { ref, className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className), ...props }));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({
  className,
  children,
  checked,
  ...props
}, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.CheckboxItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked, ...props, children: [
  /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "109", "data-source-line-end": "113", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "111", "data-source-line-end": "111" }) }) }),
  children
] }));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(DropdownMenuPrimitive.RadioItem, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [
  /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "132", "data-source-line-end": "136", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current", "data-source-file": "src/components/ui/dropdown-menu.tsx", "data-source-line-start": "134", "data-source-line-end": "134" }) }) }),
  children
] }));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({
  className,
  inset,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Label, { ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props }));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const Avatar = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Root, { ref, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props }));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(AvatarPrimitive.Fallback, { ref, className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className), ...props }));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
const badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Badge({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({
    variant
  }), className), ...props, "data-source-file": "src/components/ui/badge.tsx", "data-source-line-start": "32", "data-source-line-end": "32" });
}
const AppHeader = ({
  userRole,
  userName,
  userAvatar,
  currentPath,
  onSignOut,
  cartCount = 0
}) => {
  const getRoleLabel = () => {
    switch (userRole) {
      case "farmer":
        return "Farmer";
      case "hub":
        return "Hub Manager";
      case "consumer":
        return "Consumer";
      default:
        return "";
    }
  };
  const navLinks = {
    farmer: [{
      label: "Dashboard",
      url: "./farmer-dashboard.html"
    }, {
      label: "Inventory",
      url: "./inventory-management.html"
    }, {
      label: "Orders",
      url: "./farmer-orders.html"
    }],
    hub: [{
      label: "Overview",
      url: "./hub-dashboard.html"
    }, {
      label: "Logistics",
      url: "./hub-logistics.html"
    }, {
      label: "Ledger",
      url: "./hub-ledger.html"
    }],
    consumer: [{
      label: "Marketplace",
      url: "./consumer-marketplace.html"
    }, {
      label: "My Orders",
      url: "./order-tracking.html"
    }]
  };
  const activeLinks = navLinks[userRole] || [];
  const handleLogoClick = () => {
    const homeUrl = userRole === "farmer" ? "./farmer-dashboard.html" : userRole === "hub" ? "./hub-dashboard.html" : "./consumer-marketplace.html";
    window.location.href = homeUrl;
  };
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "75", "data-source-line-end": "172", children: /* @__PURE__ */ jsxs("div", { className: "container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "76", "data-source-line-end": "171", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "77", "data-source-line-end": "107", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 cursor-pointer group", onClick: handleLogoClick, "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "78", "data-source-line-end": "88", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary p-1.5 rounded-lg text-primary-foreground group-hover:scale-105 transition-transform", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "82", "data-source-line-end": "84", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Sprout", size: 24, "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "83", "data-source-line-end": "83" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-bold tracking-tight text-foreground hidden sm:inline-block", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "85", "data-source-line-end": "87", children: "FarmConnect" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-6", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "90", "data-source-line-end": "106", children: activeLinks.map((link) => {
        const isActive = currentPath.includes(link.url.replace("./", ""));
        return /* @__PURE__ */ jsx("a", { href: link.url, className: cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-muted-foreground"), "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "94", "data-source-line-end": "103", children: link.label }, link.url);
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 md:gap-4", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "109", "data-source-line-end": "170", children: [
      userRole === "consumer" && /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", className: "relative mr-2", onClick: () => window.location.href = "./cart-page.html", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "111", "data-source-line-end": "125", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "ShoppingCart", size: 20, "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "117", "data-source-line-end": "117" }),
        cartCount > 0 && /* @__PURE__ */ jsx(Badge, { className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-secondary-foreground border-2 border-card cart-badge-pulse", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "119", "data-source-line-end": "123", children: cartCount })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex flex-col items-end mr-2", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "128", "data-source-line-end": "133", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold leading-none", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "129", "data-source-line-end": "129", children: userName }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-1 px-1.5 py-0.5 rounded border border-border bg-muted/50", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "130", "data-source-line-end": "132", children: getRoleLabel() })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenu, { "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "135", "data-source-line-end": "169", children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "136", "data-source-line-end": "145", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "relative h-10 w-10 rounded-full", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "137", "data-source-line-end": "144", children: /* @__PURE__ */ jsxs(Avatar, { className: "h-10 w-10 border border-border", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "138", "data-source-line-end": "143", children: [
          /* @__PURE__ */ jsx(AvatarImage, { src: userAvatar || `https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png`, alt: userName, "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "139", "data-source-line-end": "139" }),
          /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10 text-primary", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "140", "data-source-line-end": "142", children: userName.charAt(0) })
        ] }) }) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "146", "data-source-line-end": "168", children: [
          /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "font-normal", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "147", "data-source-line-end": "154", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "148", "data-source-line-end": "153", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "149", "data-source-line-end": "149", children: userName }),
            /* @__PURE__ */ jsx("p", { className: "text-xs leading-none text-muted-foreground", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "150", "data-source-line-end": "152", children: getRoleLabel() })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, { "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "155", "data-source-line-end": "155" }),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => window.location.href = "./auth-portal.html", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "156", "data-source-line-end": "159", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "User", className: "mr-2 h-4 w-4", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "157", "data-source-line-end": "157" }),
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "158", "data-source-line-end": "158", children: "Sign Out" })
          ] }),
          userRole === "farmer" && /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: () => window.location.href = "./add-product.html", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "161", "data-source-line-end": "165", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "LogOut", className: "mr-2 h-4 w-4", "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "162", "data-source-line-end": "162" }),
            /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "164", "data-source-line-end": "164", children: "Add Product" })
          ] }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, { "data-source-file": "src/components/common/AppHeader.tsx", "data-source-line-start": "167", "data-source-line-end": "167" })
        ] })
      ] })
    ] })
  ] }) });
};
const $$Astro = createAstro();
const $$StandardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$StandardLayout;
  const { title, userRole, userName, userAvatar, cartCount = 0 } = Astro.props, currentPath = Astro.url.pathname;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/layouts/StandardLayout.astro" data-source-line-start="19" data-source-line-end="38" class="flex flex-col h-screen overflow-hidden bg-background">
    ${renderComponent($$result2, "AppHeader", AppHeader, { "client:load": true, userRole, userName, userAvatar, currentPath, cartCount, onSignOut: (() => {
    window.location.href = "./auth-portal.html";
  }), "client:component-hydration": "load", "client:component-path": "@/components/common/AppHeader", "client:component-export": "default" })}
    
    <main data-source-file="src/layouts/StandardLayout.astro" data-source-line-start="33" data-source-line-end="37" class="flex-1 overflow-y-auto min-h-0">
      <div data-source-file="src/layouts/StandardLayout.astro" data-source-line-start="34" data-source-line-end="36" class="page-container w-full h-full">
        ${renderSlot($$result2, $$slots.default)}
      </div>
    </main>
  </div>
` })}`;
}, "/vercel/share/v0-project/src/layouts/StandardLayout.astro", void 0);
export {
  $$StandardLayout as $,
  Avatar as A,
  Badge as B,
  AvatarImage as a,
  AvatarFallback as b
};
