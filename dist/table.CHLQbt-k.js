import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { c as cn } from "./button.CREkWhZp.js";
const Table = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", "data-source-file": "src/components/ui/table.tsx", "data-source-line-start": "9", "data-source-line-end": "15", children: /* @__PURE__ */ jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props, "data-source-file": "src/components/ui/table.tsx", "data-source-line-start": "10", "data-source-line-end": "14" }) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props, "data-source-file": "src/components/ui/table.tsx", "data-source-line-start": "23", "data-source-line-end": "23" }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props, "data-source-file": "src/components/ui/table.tsx", "data-source-line-start": "31", "data-source-line-end": "35" }));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("tfoot", { ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props, "data-source-file": "src/components/ui/table.tsx", "data-source-line-start": "43", "data-source-line-end": "50" }));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("tr", { ref, className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className), ...props, "data-source-file": "src/components/ui/table.tsx", "data-source-line-start": "58", "data-source-line-end": "65" }));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("th", { ref, className: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props, "data-source-file": "src/components/ui/table.tsx", "data-source-line-start": "73", "data-source-line-end": "80" }));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("td", { ref, className: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props, "data-source-file": "src/components/ui/table.tsx", "data-source-line-start": "88", "data-source-line-end": "95" }));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props, "data-source-file": "src/components/ui/table.tsx", "data-source-line-start": "103", "data-source-line-end": "107" }));
TableCaption.displayName = "TableCaption";
export {
  Table as T,
  TableHeader as a,
  TableRow as b,
  TableHead as c,
  TableBody as d,
  TableCell as e
};
