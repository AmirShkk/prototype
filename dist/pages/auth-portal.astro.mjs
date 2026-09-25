import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as renderSlot } from "../astro/server.ANrUSrte.js";
/* empty css                               */
import { $ as $$BaseLayout } from "../BaseLayout.DCTiS0RD.js";
import { C as Card, c as CardContent } from "../card.CNTisMc0.js";
/* empty css                               */
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "../tabs.xtS8QLDJ.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { c as cn, B as Button } from "../button.CEA35CrV.js";
import { I as Input } from "../input.DT93Plg7.js";
import { L as Label } from "../label.DvS5qdQt.js";
import { C as Checkbox } from "../checkbox.ZTpEGdUa.js";
import { renderers } from "../renderers.mjs";
const $$Astro = createAstro();
const $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$AuthLayout;
  const { title } = Astro.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title, "data-astro-cid-3qlrnpww": true }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="15" data-source-line-end="82" class="min-h-screen flex flex-col md:flex-row bg-background" data-astro-cid-3qlrnpww>
    
    <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="17" data-source-line-end="52" class="hidden md:flex md:w-1/2 lg:w-3/5 bg-primary relative overflow-hidden items-center justify-center p-12" data-astro-cid-3qlrnpww>
      <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="18" data-source-line-end="24" class="absolute inset-0 opacity-20" data-astro-cid-3qlrnpww>
        <img data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="19" data-source-line-end="20" src="https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/36444c99-147c-48fe-8a3a-f5d51bcbcefe.png" alt="Farm Landscape" class="w-full h-full object-cover" data-astro-cid-3qlrnpww>
      </div>
      <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="25" data-source-line-end="51" class="relative z-10 max-w-lg text-primary-foreground space-y-6" data-astro-cid-3qlrnpww>
        <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="26" data-source-line-end="34" class="flex items-center gap-3" data-astro-cid-3qlrnpww>
          <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="27" data-source-line-end="32" class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg" data-astro-cid-3qlrnpww>
            <svg data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="28" data-source-line-end="31" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-primary" data-astro-cid-3qlrnpww>
              <path data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="29" data-source-line-end="29" d="M12 3L2 12h3v8h14v-8h3L12 3z" data-astro-cid-3qlrnpww></path>
              <path data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="30" data-source-line-end="30" d="M9 20v-5h6v5" data-astro-cid-3qlrnpww></path>
            </svg>
          </div>
          <h1 data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="33" data-source-line-end="33" class="text-4xl font-black tracking-tight uppercase" data-astro-cid-3qlrnpww>KrishiLink</h1>
        </div>
        <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="35" data-source-line-end="40" class="space-y-4" data-astro-cid-3qlrnpww>
          <h2 data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="36" data-source-line-end="36" class="text-5xl font-bold leading-tight" data-astro-cid-3qlrnpww>Connecting Farms to Your Table.</h2>
          <p data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="37" data-source-line-end="39" class="text-xl text-primary-foreground/90 font-medium leading-relaxed" data-astro-cid-3qlrnpww>
            The direct digital bridge between hard-working farmers, local distribution hubs, and conscious consumers.
          </p>
        </div>
        <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="41" data-source-line-end="50" class="grid grid-cols-2 gap-6 pt-8" data-astro-cid-3qlrnpww>
          <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="42" data-source-line-end="45" class="space-y-2" data-astro-cid-3qlrnpww>
            <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="43" data-source-line-end="43" class="text-3xl font-bold" data-astro-cid-3qlrnpww>100%</div>
            <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="44" data-source-line-end="44" class="text-sm uppercase tracking-wider opacity-80" data-astro-cid-3qlrnpww>Fresh Produce</div>
          </div>
          <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="46" data-source-line-end="49" class="space-y-2" data-astro-cid-3qlrnpww>
            <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="47" data-source-line-end="47" class="text-3xl font-bold" data-astro-cid-3qlrnpww>Direct</div>
            <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="48" data-source-line-end="48" class="text-sm uppercase tracking-wider opacity-80" data-astro-cid-3qlrnpww>Farmer Sourcing</div>
          </div>
        </div>
      </div>
    </div>

    
    <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="55" data-source-line-end="81" class="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-20 hero-gradient" data-astro-cid-3qlrnpww>
      <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="56" data-source-line-end="80" class="w-full max-w-md" data-astro-cid-3qlrnpww>
        <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="57" data-source-line-end="65" class="md:hidden flex items-center justify-center gap-2 mb-8" data-astro-cid-3qlrnpww>
          <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="58" data-source-line-end="63" class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-md" data-astro-cid-3qlrnpww>
            <svg data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="59" data-source-line-end="62" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-white" data-astro-cid-3qlrnpww>
              <path data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="60" data-source-line-end="60" d="M12 3L2 12h3v8h14v-8h3L12 3z" data-astro-cid-3qlrnpww></path>
              <path data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="61" data-source-line-end="61" d="M9 20v-5h6v5" data-astro-cid-3qlrnpww></path>
            </svg>
          </div>
          <span data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="64" data-source-line-end="64" class="text-xl font-bold text-foreground tracking-tight" data-astro-cid-3qlrnpww>KrishiLink</span>
        </div>

        ${renderComponent($$result2, "Card", Card, { className: "surface-raised border-none shadow-2xl overflow-hidden", "data-astro-cid-3qlrnpww": true }, { default: ($$result3) => renderTemplate`
          <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="68" data-source-line-end="70" class="card-padding" data-astro-cid-3qlrnpww>
            ${renderSlot($$result3, $$slots.default)}
          </div>
        ` })}
        
        <div data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="73" data-source-line-end="79" class="mt-8 text-center" data-astro-cid-3qlrnpww>
          <p data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="74" data-source-line-end="78" class="text-caption" data-astro-cid-3qlrnpww>
            &copy; 2026 KrishiLink Platform. All rights reserved. 
            <br data-source-file="src/layouts/AuthLayout.astro" data-source-line-start="76" data-source-line-end="76" data-astro-cid-3qlrnpww>
            Empowering regional agriculture through technology.
          </p>
        </div>
      </div>
    </div>
  </div>
` })}`;
}, "/vercel/share/v0-project/src/layouts/AuthLayout.astro", void 0);
const roles = [{
  id: "farmer",
  label: "Farmer",
  description: "Manage products and inventory",
  icon: "Sprout",
  color: "bg-green-50 border-green-200 hover:border-green-400"
}, {
  id: "hub",
  label: "Hub Manager",
  description: "Track logistics and deliveries",
  icon: "Warehouse",
  color: "bg-blue-50 border-blue-200 hover:border-blue-400"
}, {
  id: "consumer",
  label: "Consumer",
  description: "Browse and purchase produce",
  icon: "ShoppingCart",
  color: "bg-orange-50 border-orange-200 hover:border-orange-400"
}];
function RoleSelector({
  selectedRole,
  onSelectRole
}) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4", "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "46", "data-source-line-end": "80", children: roles.map((role) => /* @__PURE__ */ jsx(Card, { className: cn("cursor-pointer transition-all duration-200 border-2", selectedRole === role.id ? "ring-2 ring-primary ring-offset-2 border-primary" : "border-border hover:border-primary/50", role.color), onClick: () => onSelectRole(role.id), "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "48", "data-source-line-end": "78", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4 flex items-center gap-4", "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "59", "data-source-line-end": "77", children: [
    /* @__PURE__ */ jsx("div", { className: "p-3 rounded-lg bg-white border border-border shadow-sm", "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "60", "data-source-line-end": "62", children: /* @__PURE__ */ jsx(SafeIcon, { name: role.icon, size: 28, className: "text-primary", "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "61", "data-source-line-end": "61" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "63", "data-source-line-end": "66", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "64", "data-source-line-end": "64", children: role.label }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "65", "data-source-line-end": "65", children: role.description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: cn("w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all", selectedRole === role.id ? "border-primary bg-primary" : "border-border"), "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "67", "data-source-line-end": "76", children: selectedRole === role.id && /* @__PURE__ */ jsx(SafeIcon, { name: "Check", size: 14, className: "text-primary-foreground", "data-source-file": "src/components/auth_portal/RoleSelector.tsx", "data-source-line-start": "74", "data-source-line-end": "74" }) })
  ] }) }, role.id)) });
}
function LoginForm({
  role
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const mockToken = `jwt_${role}_${Date.now()}`;
      localStorage.setItem("authToken", mockToken);
      localStorage.setItem("userRole", role);
      localStorage.setItem("userEmail", email);
      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
      }
      toast.success(`Welcome back! Logging in as ${role}...`);
      const dashboardUrls = {
        farmer: "./farmer-dashboard.html",
        hub: "./hub-dashboard.html",
        consumer: "./consumer-marketplace.html"
      };
      setTimeout(() => {
        window.location.href = dashboardUrls[role];
      }, 500);
    } catch (error) {
      toast.error("Login failed. Please try again.");
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "86", "data-source-line-end": "180", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "87", "data-source-line-end": "107", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "text-label", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "88", "data-source-line-end": "88", children: "Email Address" }),
      /* @__PURE__ */ jsx(Input, { id: "email", type: "email", placeholder: "you@example.com", value: email, onChange: (e) => {
        setEmail(e.target.value);
        if (errors.email) setErrors({
          ...errors,
          email: void 0
        });
      }, disabled: isLoading, className: errors.email ? "border-destructive focus:ring-destructive/20" : "", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "89", "data-source-line-end": "100" }),
      errors.email && /* @__PURE__ */ jsxs("p", { className: "text-xs text-destructive flex items-center gap-1 mt-1", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "102", "data-source-line-end": "105", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 12, "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "103", "data-source-line-end": "103" }),
        errors.email
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "109", "data-source-line-end": "138", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "110", "data-source-line-end": "119", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "password", className: "text-label", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "111", "data-source-line-end": "111", children: "Password" }),
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => toast.info("Password reset feature coming soon"), className: "text-xs text-primary hover:underline font-medium", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "112", "data-source-line-end": "118", children: "Forgot password?" })
      ] }),
      /* @__PURE__ */ jsx(Input, { id: "password", type: "password", placeholder: "••••••••", value: password, onChange: (e) => {
        setPassword(e.target.value);
        if (errors.password) setErrors({
          ...errors,
          password: void 0
        });
      }, disabled: isLoading, className: errors.password ? "border-destructive focus:ring-destructive/20" : "", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "120", "data-source-line-end": "131" }),
      errors.password && /* @__PURE__ */ jsxs("p", { className: "text-xs text-destructive flex items-center gap-1 mt-1", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "133", "data-source-line-end": "136", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 12, "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "134", "data-source-line-end": "134" }),
        errors.password
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 py-2", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "140", "data-source-line-end": "150", children: [
      /* @__PURE__ */ jsx(Checkbox, { id: "remember", checked: rememberMe, onCheckedChange: (checked) => setRememberMe(checked), disabled: isLoading, "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "141", "data-source-line-end": "146" }),
      /* @__PURE__ */ jsx(Label, { htmlFor: "remember", className: "text-xs font-normal cursor-pointer", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "147", "data-source-line-end": "149", children: "Remember me on this device" })
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full font-semibold h-10 shadow-sm", disabled: isLoading, "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "152", "data-source-line-end": "168", children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 16, className: "mr-2 animate-spin", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "159", "data-source-line-end": "159" }),
      "Logging in..."
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "LogIn", size: 16, className: "mr-2", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "164", "data-source-line-end": "164" }),
      "Login as ",
      role.charAt(0).toUpperCase() + role.slice(1)
    ] }) }),
    /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-muted-foreground", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "170", "data-source-line-end": "179", children: [
      "By logging in, you agree to our",
      " ",
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => toast.info("Terms of Service"), className: "text-primary hover:underline font-medium", "data-source-file": "src/components/auth_portal/LoginForm.tsx", "data-source-line-start": "172", "data-source-line-end": "178", children: "Terms of Service" })
    ] })
  ] });
}
function SignupForm({
  role
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!agreeTerms) {
      newErrors.terms = "You must agree to the terms";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      const mockToken = `jwt_${role}_${Date.now()}`;
      localStorage.setItem("authToken", mockToken);
      localStorage.setItem("userRole", role);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", fullName);
      toast.success(`Account created successfully! Welcome, ${fullName}!`);
      const dashboardUrls = {
        farmer: "./farmer-dashboard.html",
        hub: "./hub-dashboard.html",
        consumer: "./consumer-marketplace.html"
      };
      setTimeout(() => {
        window.location.href = dashboardUrls[role];
      }, 500);
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "100", "data-source-line-end": "254", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "101", "data-source-line-end": "121", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", className: "text-label", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "102", "data-source-line-end": "102", children: "Full Name" }),
      /* @__PURE__ */ jsx(Input, { id: "fullName", type: "text", placeholder: "John Doe", value: fullName, onChange: (e) => {
        setFullName(e.target.value);
        if (errors.fullName) setErrors({
          ...errors,
          fullName: void 0
        });
      }, disabled: isLoading, className: errors.fullName ? "border-destructive focus:ring-destructive/20" : "", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "103", "data-source-line-end": "114" }),
      errors.fullName && /* @__PURE__ */ jsxs("p", { className: "text-xs text-destructive flex items-center gap-1 mt-1", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "116", "data-source-line-end": "119", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 12, "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "117", "data-source-line-end": "117" }),
        errors.fullName
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "123", "data-source-line-end": "143", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "signup-email", className: "text-label", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "124", "data-source-line-end": "124", children: "Email Address" }),
      /* @__PURE__ */ jsx(Input, { id: "signup-email", type: "email", placeholder: "you@example.com", value: email, onChange: (e) => {
        setEmail(e.target.value);
        if (errors.email) setErrors({
          ...errors,
          email: void 0
        });
      }, disabled: isLoading, className: errors.email ? "border-destructive focus:ring-destructive/20" : "", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "125", "data-source-line-end": "136" }),
      errors.email && /* @__PURE__ */ jsxs("p", { className: "text-xs text-destructive flex items-center gap-1 mt-1", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "138", "data-source-line-end": "141", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 12, "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "139", "data-source-line-end": "139" }),
        errors.email
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "145", "data-source-line-end": "165", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "signup-password", className: "text-label", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "146", "data-source-line-end": "146", children: "Password" }),
      /* @__PURE__ */ jsx(Input, { id: "signup-password", type: "password", placeholder: "••••••••", value: password, onChange: (e) => {
        setPassword(e.target.value);
        if (errors.password) setErrors({
          ...errors,
          password: void 0
        });
      }, disabled: isLoading, className: errors.password ? "border-destructive focus:ring-destructive/20" : "", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "147", "data-source-line-end": "158" }),
      errors.password && /* @__PURE__ */ jsxs("p", { className: "text-xs text-destructive flex items-center gap-1 mt-1", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "160", "data-source-line-end": "163", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 12, "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "161", "data-source-line-end": "161" }),
        errors.password
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "167", "data-source-line-end": "187", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "confirm-password", className: "text-label", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "168", "data-source-line-end": "168", children: "Confirm Password" }),
      /* @__PURE__ */ jsx(Input, { id: "confirm-password", type: "password", placeholder: "••••••••", value: confirmPassword, onChange: (e) => {
        setConfirmPassword(e.target.value);
        if (errors.confirmPassword) setErrors({
          ...errors,
          confirmPassword: void 0
        });
      }, disabled: isLoading, className: errors.confirmPassword ? "border-destructive focus:ring-destructive/20" : "", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "169", "data-source-line-end": "180" }),
      errors.confirmPassword && /* @__PURE__ */ jsxs("p", { className: "text-xs text-destructive flex items-center gap-1 mt-1", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "182", "data-source-line-end": "185", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 12, "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "183", "data-source-line-end": "183" }),
        errors.confirmPassword
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2 py-2", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "189", "data-source-line-end": "218", children: [
      /* @__PURE__ */ jsx(Checkbox, { id: "terms", checked: agreeTerms, onCheckedChange: (checked) => {
        setAgreeTerms(checked);
        if (errors.terms) setErrors({
          ...errors,
          terms: void 0
        });
      }, disabled: isLoading, className: "mt-1", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "190", "data-source-line-end": "199" }),
      /* @__PURE__ */ jsxs(Label, { htmlFor: "terms", className: "text-xs font-normal cursor-pointer leading-relaxed", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "200", "data-source-line-end": "217", children: [
        "I agree to the",
        " ",
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => toast.info("Terms of Service"), className: "text-primary hover:underline font-medium", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "202", "data-source-line-end": "208", children: "Terms of Service" }),
        " ",
        "and",
        " ",
        /* @__PURE__ */ jsx("button", { type: "button", onClick: () => toast.info("Privacy Policy"), className: "text-primary hover:underline font-medium", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "210", "data-source-line-end": "216", children: "Privacy Policy" })
      ] })
    ] }),
    errors.terms && /* @__PURE__ */ jsxs("p", { className: "text-xs text-destructive flex items-center gap-1", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "220", "data-source-line-end": "223", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "AlertCircle", size: 12, "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "221", "data-source-line-end": "221" }),
      errors.terms
    ] }),
    /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full font-semibold h-10 shadow-sm", disabled: isLoading, "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "226", "data-source-line-end": "242", children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 16, className: "mr-2 animate-spin", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "233", "data-source-line-end": "233" }),
      "Creating account..."
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "UserPlus", size: 16, className: "mr-2", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "238", "data-source-line-end": "238" }),
      "Create Account"
    ] }) }),
    /* @__PURE__ */ jsxs("p", { className: "text-center text-xs text-muted-foreground", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "244", "data-source-line-end": "253", children: [
      "By signing up, you agree to our",
      " ",
      /* @__PURE__ */ jsx("button", { type: "button", onClick: () => toast.info("Terms of Service"), className: "text-primary hover:underline font-medium", "data-source-file": "src/components/auth_portal/SignupForm.tsx", "data-source-line-start": "246", "data-source-line-end": "252", children: "Terms of Service" })
    ] })
  ] });
}
function AuthPortal() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [activeTab, setActiveTab] = useState("login");
  const [isClient, setIsClient] = useState(true);
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang");
    if (langParam) {
      setLanguage(langParam);
    }
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  const getRoleLabel = (role) => {
    const labels = {
      farmer: "Farmer",
      hub: "Hub Manager",
      consumer: "Consumer"
    };
    return labels[role];
  };
  const getRoleDescription = (role) => {
    const descriptions = {
      farmer: "Manage your products and inventory",
      hub: "Track deliveries and logistics",
      consumer: "Browse and purchase fresh produce"
    };
    return descriptions[role];
  };
  if (!isClient) {
    return /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mx-auto space-y-6", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "53", "data-source-line-end": "62", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center mb-8", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "54", "data-source-line-end": "57", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "55", "data-source-line-end": "55", children: "Welcome to FarmHub" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "56", "data-source-line-end": "56", children: "Select your role to get started" })
      ] }),
      /* @__PURE__ */ jsx(RoleSelector, { selectedRole: null, onSelectRole: () => {
      }, "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "58", "data-source-line-end": "61" })
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-md mx-auto space-y-6 animate-in fade-in duration-500", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "67", "data-source-line-end": "137", children: !selectedRole ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center mb-8", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "70", "data-source-line-end": "73", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "71", "data-source-line-end": "71", children: "Welcome to FarmHub" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "72", "data-source-line-end": "72", children: "Select your role to get started" })
    ] }),
    /* @__PURE__ */ jsx(RoleSelector, { selectedRole, onSelectRole: setSelectedRole, "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "74", "data-source-line-end": "77" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "79", "data-source-line-end": "86", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "80", "data-source-line-end": "82", children: /* @__PURE__ */ jsx("div", { className: "w-full border-t border-border", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "81", "data-source-line-end": "81" }) }),
      /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-xs uppercase", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "83", "data-source-line-end": "85", children: /* @__PURE__ */ jsx("span", { className: "bg-background px-2 text-muted-foreground", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "84", "data-source-line-end": "84", children: "Or continue with" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex   justify-center", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "88", "data-source-line-end": "103", children: /* @__PURE__ */ jsxs("button", { onClick: () => {
      toast.info("Google login coming soon");
    }, className: "flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium text-sm", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "89", "data-source-line-end": "102", children: [
      /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", fill: "currentColor", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "95", "data-source-line-end": "100", children: [
        /* @__PURE__ */ jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", fill: "#4285F4", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "96", "data-source-line-end": "96" }),
        /* @__PURE__ */ jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "97", "data-source-line-end": "97" }),
        /* @__PURE__ */ jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "98", "data-source-line-end": "98" }),
        /* @__PURE__ */ jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "99", "data-source-line-end": "99" })
      ] }),
      "Google"
    ] }) })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "107", "data-source-line-end": "119", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setSelectedRole(null), className: "p-1.5 hover:bg-muted rounded-lg transition-colors", "aria-label": "Back to role selection", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "108", "data-source-line-end": "114", children: /* @__PURE__ */ jsx(SafeIcon, { name: "ArrowLeft", size: 20, className: "text-muted-foreground", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "113", "data-source-line-end": "113" }) }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "115", "data-source-line-end": "118", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "116", "data-source-line-end": "116", children: getRoleLabel(selectedRole) }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "117", "data-source-line-end": "117", children: getRoleDescription(selectedRole) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: (value) => setActiveTab(value), className: "w-full", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "121", "data-source-line-end": "134", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 mb-6", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "122", "data-source-line-end": "125", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "login", className: "font-semibold", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "123", "data-source-line-end": "123", children: "Login" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "signup", className: "font-semibold", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "124", "data-source-line-end": "124", children: "Sign Up" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "login", className: "space-y-4", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "127", "data-source-line-end": "129", children: /* @__PURE__ */ jsx(LoginForm, { role: selectedRole, "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "128", "data-source-line-end": "128" }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "signup", className: "space-y-4", "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "131", "data-source-line-end": "133", children: /* @__PURE__ */ jsx(SignupForm, { role: selectedRole, "data-source-file": "src/components/auth_portal/AuthPortal.tsx", "data-source-line-start": "132", "data-source-line-end": "132" }) })
    ] })
  ] }) });
}
const $$AuthPortal = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { title: "Authentication Portal - FarmHub Connect" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "AuthPortal", AuthPortal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/auth_portal/AuthPortal", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/auth-portal.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/auth-portal.astro";
const $$url = "/auth-portal.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$AuthPortal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
