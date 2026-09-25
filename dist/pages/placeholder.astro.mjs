import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.ANrUSrte.js";
import { $ as $$BaseLayout } from "../BaseLayout.DCTiS0RD.js";
import { renderers } from "../renderers.mjs";
const $$Placeholder = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "Under Construction — FarmHub Connect" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/placeholder.astro" data-source-line-start="6" data-source-line-end="29" class="min-h-screen flex items-center justify-center page-body bg-gradient-to-b from-background to-muted/20">
    <div data-source-file="src/pages/placeholder.astro" data-source-line-start="7" data-source-line-end="28" class="empty-state max-w-md">
      <div data-source-file="src/pages/placeholder.astro" data-source-line-start="8" data-source-line-end="23" class="mb-8 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
        <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      </div>
      <h1 data-source-file="src/pages/placeholder.astro" data-source-line-start="24" data-source-line-end="24" class="text-page-title text-foreground mb-4">Page Under Construction</h1>
      <p data-source-file="src/pages/placeholder.astro" data-source-line-start="25" data-source-line-end="27" class="text-body text-muted-foreground">
        We're working on bringing this feature to FarmHub Connect. Check back soon!
      </p>
    </div>
  </div>
` })}`, "/vercel/share/v0-project/src/pages/placeholder.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/placeholder.astro";
const $$url = "/placeholder.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Placeholder,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
