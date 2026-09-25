import { c as createComponent, r as renderComponent, a as renderTemplate } from "../astro/server.ANrUSrte.js";
import { $ as $$BaseLayout } from "../BaseLayout.DCTiS0RD.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { l as languageLabels, s as setLanguage } from "../index.ChZhA2Wb.js";
import { renderers } from "../renderers.mjs";
function LanguageLanding() {
  const [selected, setSelected] = useState(null);
  const continueToAuth = () => {
    if (!selected) return;
    setLanguage(selected);
    window.location.href = "./auth-portal.html";
  };
  return /* @__PURE__ */ jsx("main", { className: "min-h-screen flex items-center justify-center bg-background px-6 py-12", "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "15", "data-source-line-end": "37", children: /* @__PURE__ */ jsxs("section", { className: "w-full max-w-md space-y-8 text-center", "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "16", "data-source-line-end": "36", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "17", "data-source-line-end": "25", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg", "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "18", "data-source-line-end": "20", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Sprout", size: 34, "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "19", "data-source-line-end": "19" }) }),
      /* @__PURE__ */ jsxs("div", { "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "21", "data-source-line-end": "24", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-black tracking-tight text-foreground", "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "22", "data-source-line-end": "22", children: "KrishiLink" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "23", "data-source-line-end": "23", children: "Choose your preferred language" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-3", "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "26", "data-source-line-end": "32", children: Object.entries(languageLabels).map(([value, label]) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setSelected(value), className: `rounded-xl border px-5 py-4 text-left text-lg font-semibold transition-colors ${selected === value ? "border-primary bg-primary/10 text-primary" : "border-border bg-card hover:border-primary/50 hover:bg-muted/40"}`, "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "28", "data-source-line-end": "30", children: label }, value)) }),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: continueToAuth, disabled: !selected, className: "w-full rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-50", "data-source-file": "src/components/common/LanguageLanding.tsx", "data-source-line-start": "33", "data-source-line-end": "35", children: "Continue" })
  ] }) });
}
const $$Index = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "KrishiLink - Choose Language", description: "Choose your preferred language for KrishiLink" }, { default: ($$result2) => renderTemplate`
  ${renderComponent($$result2, "LanguageLanding", LanguageLanding, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/LanguageLanding", "client:component-export": "default" })}
` })}`, "/vercel/share/v0-project/src/pages/index.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
