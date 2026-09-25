import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from "../astro/server.ANrUSrte.js";
import { $ as $$StandardLayout } from "../StandardLayout.D0JbZlop.js";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c as cn, B as Button } from "../button.CEA35CrV.js";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { I as Input } from "../input.DT93Plg7.js";
import { L as Label } from "../label.DvS5qdQt.js";
import { C as Checkbox } from "../checkbox.ZTpEGdUa.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "../select.CmN5dfe2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "../card.CNTisMc0.js";
import { S as SafeIcon } from "../SafeIcon.tD1Y5lkc.js";
import { toast } from "sonner";
import { g as getAll, p as productDataList, s as savePersisted } from "../ProductService.CADRtByu.js";
import { L as LoadingSpinner } from "../LoadingSpinner.D1-awNdt.js";
import { renderers } from "../renderers.mjs";
const Textarea = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx("textarea", { className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ref, ...props, "data-source-file": "src/components/ui/textarea.tsx", "data-source-line-start": "10", "data-source-line-end": "17" });
});
Textarea.displayName = "Textarea";
function ProductImageUpload({
  onImageUpload
}) {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const handleFileSelect = (file) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result;
      setPreview(dataUrl);
      onImageUpload(dataUrl);
    };
    reader.readAsDataURL(file);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };
  const handleFileInputChange = (e) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };
  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setPreview(null);
    onImageUpload("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };
  if (preview) {
    return /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "83", "data-source-line-end": "106", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative group", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "84", "data-source-line-end": "102", children: [
        /* @__PURE__ */ jsx("img", { src: preview, alt: "Product preview", className: "w-full h-64 object-cover rounded-lg border-2 border-border shadow-md", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "85", "data-source-line-end": "89" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "90", "data-source-line-end": "101", children: /* @__PURE__ */ jsxs(Button, { type: "button", variant: "secondary", size: "sm", onClick: handleRemoveImage, className: "shadow-lg", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "91", "data-source-line-end": "100", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "Trash2", size: 16, className: "mr-1", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "98", "data-source-line-end": "98" }),
          "Remove"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-caption text-center text-muted-foreground", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "103", "data-source-line-end": "105", children: "Image uploaded successfully. Hover to remove and upload a different image." })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: handleClickUpload, className: cn("relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200", isDragging ? "border-primary bg-primary/5 scale-[1.02]" : "border-border bg-muted/20 hover:bg-muted/40"), "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "111", "data-source-line-end": "150", children: [
    /* @__PURE__ */ jsx("input", { ref: fileInputRef, type: "file", accept: "image/*", onChange: handleFileInputChange, className: "hidden", "aria-label": "Upload product image", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "123", "data-source-line-end": "130" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "132", "data-source-line-end": "149", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-full bg-primary/10 text-primary", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "133", "data-source-line-end": "135", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Upload", size: 32, strokeWidth: 1.5, "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "134", "data-source-line-end": "134" }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-1", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "137", "data-source-line-end": "144", children: [
        /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-foreground", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "138", "data-source-line-end": "140", children: isDragging ? "Drop your image here" : "Upload Product Image" }),
        /* @__PURE__ */ jsx("p", { className: "text-caption text-muted-foreground", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "141", "data-source-line-end": "143", children: "Drag and drop or click to select (Max 5MB)" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-2", "data-source-file": "src/components/add-product/ProductImageUpload.tsx", "data-source-line-start": "146", "data-source-line-end": "148", children: "Supported formats: JPG, PNG, WebP" })
    ] })
  ] });
}
const MANDI_AVERAGE_PRICES = {
  onion: 20,
  tomato: 18,
  wheat: 22,
  potato: 15
};
const UNIT_OPTIONS = [{
  value: "kg",
  label: "Kilogram (kg)"
}, {
  value: "bundle",
  label: "Bundle"
}, {
  value: "box",
  label: "Box"
}, {
  value: "pack",
  label: "Pack"
}, {
  value: "sack",
  label: "Sack"
}, {
  value: "litre",
  label: "Litre (L)"
}, {
  value: "piece",
  label: "Piece"
}];
function AddProductForm() {
  const [categories] = useState(() => getAll());
  const [isClient, setIsClient] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categoryId: "",
    unit: "kg",
    pricePerUnit: "",
    stockQty: "",
    harvestDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    organicCertified: false,
    imageUrl: "",
    minOrderQty: 1
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setIsClient(false);
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!formData.categoryId) {
      newErrors.categoryId = "Category is required";
    }
    if (!formData.pricePerUnit || formData.pricePerUnit <= 0) {
      newErrors.pricePerUnit = "Price must be greater than 0";
    }
    if (!formData.stockQty || formData.stockQty <= 0) {
      newErrors.stockQty = "Stock quantity must be greater than 0";
    }
    if (!formData.harvestDate) {
      newErrors.harvestDate = "Harvest date is required";
    }
    if (!formData.imageUrl) {
      newErrors.imageUrl = "Product image is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInputChange = (e) => {
    const {
      name,
      value,
      type
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? value === "" ? "" : parseFloat(value) : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: void 0
      }));
    }
  };
  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: void 0
      }));
    }
  };
  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      organicCertified: checked
    }));
  };
  const handleImageUpload = (imageUrl) => {
    setFormData((prev) => ({
      ...prev,
      imageUrl
    }));
    if (errors.imageUrl) {
      setErrors((prev) => ({
        ...prev,
        imageUrl: void 0
      }));
    }
  };
  const mandiAverage = MANDI_AVERAGE_PRICES[formData.name.trim().toLowerCase()];
  const fairPriceMin = mandiAverage ? mandiAverage * 0.85 : 0;
  const fairPriceMax = mandiAverage ? mandiAverage * 1.15 : 0;
  const hasEnteredPrice = typeof formData.pricePerUnit === "number" && formData.pricePerUnit > 0;
  const isPriceAboveMandi = hasEnteredPrice && mandiAverage ? formData.pricePerUnit > mandiAverage : false;
  hasEnteredPrice && mandiAverage ? formData.pricePerUnit >= fairPriceMin && formData.pricePerUnit <= fairPriceMax : false;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }
    setIsSubmitting(true);
    try {
      const newProduct = {
        id: `prd-${Date.now()}`,
        farmerId: "far-001",
        categoryId: formData.categoryId,
        name: formData.name.trim(),
        description: formData.description.trim(),
        unit: formData.unit,
        pricePerUnit: formData.pricePerUnit,
        stockQty: formData.stockQty,
        status: "Available",
        harvestDate: formData.harvestDate,
        createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        updatedAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
        imageUrl: formData.imageUrl,
        organicCertified: formData.organicCertified,
        minOrderQty: formData.minOrderQty || 1
      };
      productDataList.push(newProduct);
      savePersisted(productDataList);
      toast.success("Product added successfully!");
      setTimeout(() => {
        window.location.href = "./inventory-management.html";
      }, 500);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product. Please try again.");
      setIsSubmitting(false);
    }
  };
  const handleCancel = () => {
    window.location.href = "./farmer-dashboard.html";
  };
  if (!isClient) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-16", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "222", "data-source-line-end": "224", children: /* @__PURE__ */ jsx(LoadingSpinner, { size: "md", text: "Loading form...", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "223", "data-source-line-end": "223" }) });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "229", "data-source-line-end": "547", children: [
    /* @__PURE__ */ jsxs(Card, { className: "surface-base border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "231", "data-source-line-end": "244", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "232", "data-source-line-end": "237", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "233", "data-source-line-end": "236", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Image", size: 20, className: "text-primary", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "234", "data-source-line-end": "234" }),
        "Product Image"
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "card-padding", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "238", "data-source-line-end": "243", children: [
        /* @__PURE__ */ jsx(ProductImageUpload, { onImageUpload: handleImageUpload, "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "239", "data-source-line-end": "239" }),
        errors.imageUrl && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive mt-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "241", "data-source-line-end": "241", children: errors.imageUrl })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "surface-base border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "247", "data-source-line-end": "354", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "248", "data-source-line-end": "253", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "249", "data-source-line-end": "252", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Info", size: 20, className: "text-primary", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "250", "data-source-line-end": "250" }),
        "Basic Information"
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "card-padding space-y-5", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "254", "data-source-line-end": "353", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "256", "data-source-line-end": "275", children: [
          /* @__PURE__ */ jsxs(Label, { htmlFor: "name", className: "text-label", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "257", "data-source-line-end": "259", children: [
            "Product Name ",
            /* @__PURE__ */ jsx("span", { className: "text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "258", "data-source-line-end": "258", children: "*" })
          ] }),
          /* @__PURE__ */ jsx(Input, { id: "name", name: "name", type: "text", placeholder: "e.g., Fresh Spinach Bundle", value: formData.name, onChange: handleInputChange, className: cn("h-10 bg-background border-input focus:ring-primary/20", errors.name && "border-destructive"), "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "260", "data-source-line-end": "271" }),
          errors.name && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "273", "data-source-line-end": "273", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "278", "data-source-line-end": "296", children: [
          /* @__PURE__ */ jsxs(Label, { htmlFor: "description", className: "text-label", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "279", "data-source-line-end": "281", children: [
            "Description ",
            /* @__PURE__ */ jsx("span", { className: "text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "280", "data-source-line-end": "280", children: "*" })
          ] }),
          /* @__PURE__ */ jsx(Textarea, { id: "description", name: "description", placeholder: "Describe your product, harvesting method, quality details...", value: formData.description, onChange: handleInputChange, className: cn("min-h-[100px] bg-background border-input focus:ring-primary/20 resize-none", errors.description && "border-destructive"), "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "282", "data-source-line-end": "292" }),
          errors.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "294", "data-source-line-end": "294", children: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "299", "data-source-line-end": "352", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "300", "data-source-line-end": "330", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "categoryId", className: "text-label", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "301", "data-source-line-end": "303", children: [
              "Category ",
              /* @__PURE__ */ jsx("span", { className: "text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "302", "data-source-line-end": "302", children: "*" })
            ] }),
            /* @__PURE__ */ jsxs(Select, { value: formData.categoryId, onValueChange: (value) => handleSelectChange("categoryId", value), "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "304", "data-source-line-end": "326", children: [
              /* @__PURE__ */ jsx(SelectTrigger, { id: "categoryId", className: cn("h-10 bg-background border-input focus:ring-primary/20", errors.categoryId && "border-destructive"), "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "310", "data-source-line-end": "318", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select category", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "317", "data-source-line-end": "317" }) }),
              /* @__PURE__ */ jsx(SelectContent, { "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "319", "data-source-line-end": "325", children: (categories || []).map((cat) => /* @__PURE__ */ jsx(SelectItem, { value: cat.id, "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "321", "data-source-line-end": "323", children: cat.name }, cat.id)) })
            ] }),
            errors.categoryId && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "328", "data-source-line-end": "328", children: errors.categoryId })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "332", "data-source-line-end": "351", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "unit", className: "text-label", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "333", "data-source-line-end": "335", children: [
              "Unit ",
              /* @__PURE__ */ jsx("span", { className: "text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "334", "data-source-line-end": "334", children: "*" })
            ] }),
            /* @__PURE__ */ jsxs(Select, { value: formData.unit, onValueChange: (value) => handleSelectChange("unit", value), "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "336", "data-source-line-end": "350", children: [
              /* @__PURE__ */ jsx(SelectTrigger, { id: "unit", className: "h-10 bg-background border-input focus:ring-primary/20", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "340", "data-source-line-end": "342", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select unit", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "341", "data-source-line-end": "341" }) }),
              /* @__PURE__ */ jsx(SelectContent, { "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "343", "data-source-line-end": "349", children: UNIT_OPTIONS.map((opt) => /* @__PURE__ */ jsx(SelectItem, { value: opt.value, "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "345", "data-source-line-end": "347", children: opt.label }, opt.value)) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "surface-base border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "357", "data-source-line-end": "462", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "358", "data-source-line-end": "363", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "359", "data-source-line-end": "362", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "DollarSign", size: 20, className: "text-primary", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "360", "data-source-line-end": "360" }),
        "Pricing & Inventory"
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "card-padding space-y-5", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "364", "data-source-line-end": "461", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "366", "data-source-line-end": "439", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "367", "data-source-line-end": "415", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "pricePerUnit", className: "text-label", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "368", "data-source-line-end": "370", children: [
              "Price per Unit (₹) ",
              /* @__PURE__ */ jsx("span", { className: "text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "369", "data-source-line-end": "369", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(Input, { id: "pricePerUnit", name: "pricePerUnit", type: "number", placeholder: "0", min: "0", step: "0.01", value: formData.pricePerUnit, onChange: handleInputChange, className: cn("h-10 bg-background border-input focus:ring-primary/20", errors.pricePerUnit && "border-destructive"), "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "371", "data-source-line-end": "384" }),
            errors.pricePerUnit && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "386", "data-source-line-end": "386", children: errors.pricePerUnit }),
            mandiAverage && hasEnteredPrice && isPriceAboveMandi && /* @__PURE__ */ jsxs("div", { className: "rounded-[--radius] border border-[hsl(var(--warning)/0.3)] bg-[hsl(var(--warning)/0.1)] p-3 text-sm text-[hsl(var(--warning))] transition-all duration-150", "aria-live": "polite", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "390", "data-source-line-end": "413", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-medium", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "394", "data-source-line-end": "400", children: [
                /* @__PURE__ */ jsx(SafeIcon, { name: isPriceAboveMandi ? "AlertTriangle" : "CheckCircle2", size: 16, "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "395", "data-source-line-end": "398" }),
                /* @__PURE__ */ jsx("span", { "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "399", "data-source-line-end": "399", children: "Mandi price guidance" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 grid grid-cols-2 gap-2 text-xs", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "401", "data-source-line-end": "404", children: [
                /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "402", "data-source-line-end": "402", children: [
                  "Mandi average: ₹",
                  mandiAverage.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxs("span", { "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "403", "data-source-line-end": "403", children: [
                  "Fair range: ₹",
                  fairPriceMin.toFixed(2),
                  "–₹",
                  fairPriceMax.toFixed(2)
                ] })
              ] }),
              hasEnteredPrice && isPriceAboveMandi && /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs font-medium", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "406", "data-source-line-end": "408", children: "This price is higher than the mandi average. You can still submit this listing." }),
              hasEnteredPrice && !isPriceAboveMandi && /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs font-medium", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "411", "data-source-line-end": "411", children: "Your price is at or below the mandi average." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "417", "data-source-line-end": "438", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "stockQty", className: "text-label", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "418", "data-source-line-end": "420", children: [
              "Stock Quantity ",
              /* @__PURE__ */ jsx("span", { className: "text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "419", "data-source-line-end": "419", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(Input, { id: "stockQty", name: "stockQty", type: "number", placeholder: "0", min: "0", step: "1", value: formData.stockQty, onChange: handleInputChange, className: cn("h-10 bg-background border-input focus:ring-primary/20", errors.stockQty && "border-destructive"), "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "421", "data-source-line-end": "434" }),
            errors.stockQty && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "436", "data-source-line-end": "436", children: errors.stockQty })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "442", "data-source-line-end": "460", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "minOrderQty", className: "text-label", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "443", "data-source-line-end": "445", children: "Minimum Order Quantity" }),
          /* @__PURE__ */ jsx(Input, { id: "minOrderQty", name: "minOrderQty", type: "number", placeholder: "1", min: "1", step: "1", value: formData.minOrderQty, onChange: handleInputChange, className: "h-10 bg-background border-input focus:ring-primary/20", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "446", "data-source-line-end": "456" }),
          /* @__PURE__ */ jsx("p", { className: "text-caption", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "457", "data-source-line-end": "459", children: "Consumers must order at least this quantity per purchase." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "surface-base border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "465", "data-source-line-end": "516", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "border-b border-border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "466", "data-source-line-end": "471", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "467", "data-source-line-end": "470", children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Leaf", size: 20, className: "text-primary", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "468", "data-source-line-end": "468" }),
        "Harvest & Certification"
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "card-padding space-y-5", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "472", "data-source-line-end": "515", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "474", "data-source-line-end": "492", children: [
          /* @__PURE__ */ jsxs(Label, { htmlFor: "harvestDate", className: "text-label", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "475", "data-source-line-end": "477", children: [
            "Harvest Date ",
            /* @__PURE__ */ jsx("span", { className: "text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "476", "data-source-line-end": "476", children: "*" })
          ] }),
          /* @__PURE__ */ jsx(Input, { id: "harvestDate", name: "harvestDate", type: "date", value: formData.harvestDate, onChange: handleInputChange, className: cn("h-10 bg-background border-input focus:ring-primary/20", errors.harvestDate && "border-destructive"), "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "478", "data-source-line-end": "488" }),
          errors.harvestDate && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "490", "data-source-line-end": "490", children: errors.harvestDate })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 bg-muted/20 rounded-lg border border-border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "495", "data-source-line-end": "514", children: [
          /* @__PURE__ */ jsx(Checkbox, { id: "organicCertified", checked: formData.organicCertified, onCheckedChange: handleCheckboxChange, className: "h-5 w-5", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "496", "data-source-line-end": "501" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "502", "data-source-line-end": "513", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "organicCertified", className: "text-label font-medium cursor-pointer", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "503", "data-source-line-end": "508", children: "Organic Certified" }),
            /* @__PURE__ */ jsx("p", { className: "text-caption mt-0.5", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "509", "data-source-line-end": "512", children: "Check this if your product is certified organic. This will be highlighted to consumers." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 justify-end pt-4 border-t border-border", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "519", "data-source-line-end": "546", children: [
      /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: handleCancel, disabled: isSubmitting, className: "min-w-[120px]", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "520", "data-source-line-end": "528", children: "Cancel" }),
      /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, className: "min-w-[140px] shadow-sm", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "529", "data-source-line-end": "545", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Loader2", size: 16, className: "mr-2 animate-spin", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "536", "data-source-line-end": "536" }),
        "Adding..."
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(SafeIcon, { name: "Plus", size: 16, className: "mr-2", "data-source-file": "src/components/add-product/AddProductForm.tsx", "data-source-line-start": "541", "data-source-line-end": "541" }),
        "Add Product"
      ] }) })
    ] })
  ] });
}
const $$Astro = createAstro();
const $$AddProduct = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$AddProduct;
  const userRole = "farmer", userName = "Ramesh Patel", userAvatar = "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/98e85076-de53-44d4-871a-286ba77b51ec.png", currentPath = Astro.url.pathname;
  return renderTemplate`${renderComponent($$result, "StandardLayout", $$StandardLayout, { title: "Add New Product | FarmHub Connect", userRole, userName, userAvatar, currentPath }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/add-product.astro" data-source-line-start="19" data-source-line-end="28" class="page-body">
    <div data-source-file="src/pages/add-product.astro" data-source-line-start="20" data-source-line-end="27" class="max-w-2xl mx-auto">
      <div data-source-file="src/pages/add-product.astro" data-source-line-start="21" data-source-line-end="24" class="mb-8">
        <h1 data-source-file="src/pages/add-product.astro" data-source-line-start="22" data-source-line-end="22" class="text-page-title mb-2">Add New Product</h1>
        <p data-source-file="src/pages/add-product.astro" data-source-line-start="23" data-source-line-end="23" class="text-caption">Fill in the details below to list a new product on the marketplace.</p>
      </div>
      
      ${renderComponent($$result2, "AddProductForm", AddProductForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/add-product/AddProductForm", "client:component-export": "default" })}
    </div>
  </div>
` })}`;
}, "/vercel/share/v0-project/src/pages/add-product.astro", void 0);
const $$file = "/vercel/share/v0-project/src/pages/add-product.astro";
const $$url = "/add-product.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$AddProduct,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
