import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { I as Input } from "./input.e2farbgP.js";
import { S as SafeIcon, B as Button } from "./button.CREkWhZp.js";
function SearchBar({
  placeholder,
  defaultValue = "",
  onSearch
}) {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [value, onSearch]);
  const handleClear = () => {
    setValue("");
    onSearch("");
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex items-center w-full max-w-md", "data-source-file": "src/components/common/SearchBar.tsx", "data-source-line-start": "36", "data-source-line-end": "66", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-3 flex items-center pointer-events-none", "data-source-file": "src/components/common/SearchBar.tsx", "data-source-line-start": "37", "data-source-line-end": "44", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Search", size: 18, className: "text-muted-foreground", strokeWidth: 2, "data-source-file": "src/components/common/SearchBar.tsx", "data-source-line-start": "38", "data-source-line-end": "43" }) }),
    /* @__PURE__ */ jsx(Input, { type: "text", className: "pl-10 pr-10 h-10 w-full bg-background border-input focus:ring-primary/20", placeholder, value, onChange: (e) => setValue(e.target.value), "data-source-file": "src/components/common/SearchBar.tsx", "data-source-line-start": "46", "data-source-line-end": "52" }),
    value && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "absolute right-1 h-8 w-8 text-muted-foreground hover:text-foreground", onClick: handleClear, type: "button", "aria-label": "Clear search", "data-source-file": "src/components/common/SearchBar.tsx", "data-source-line-start": "55", "data-source-line-end": "64", children: /* @__PURE__ */ jsx(SafeIcon, { name: "X", size: 16, strokeWidth: 2.5, "data-source-file": "src/components/common/SearchBar.tsx", "data-source-line-start": "63", "data-source-line-end": "63" }) })
  ] });
}
export {
  SearchBar as S
};
