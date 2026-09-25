import { cn } from '@/lib/utils'
import React, { useState,useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'
import { toast } from 'sonner'
import { getAll as getAllCategories } from '@/data/CategoryService'
import { savePersisted as saveProducts, productDataList } from '@/data/ProductService'
import type { ProductData } from '@/data/ProductData'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import ProductImageUpload from '@/components/add-product/ProductImageUpload'

// ADDED: Mock mandi prices used to provide a soft fair-price check while listing.
const MANDI_AVERAGE_PRICES: Record<string, number> = {
  onion: 20,
  tomato: 18,
  wheat: 22,
  potato: 15,
}

interface FormData {
  name: string
  description: string
  categoryId: string
  unit: string
  pricePerUnit: number | ''
  stockQty: number | ''
  harvestDate: string
  organicCertified: boolean
  imageUrl: string
  minOrderQty: number | ''
}

const UNIT_OPTIONS = [
  { value: 'kg', label: 'Kilogram (kg)' },
  { value: 'bundle', label: 'Bundle' },
  { value: 'box', label: 'Box' },
  { value: 'pack', label: 'Pack' },
  { value: 'sack', label: 'Sack' },
  { value: 'litre', label: 'Litre (L)' },
  { value: 'piece', label: 'Piece' },
]

export default function AddProductForm() {
  const [categories] = useState(() => getAllCategories())
  const [isClient, setIsClient] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    categoryId: '',
    unit: 'kg',
    pricePerUnit: '',
    stockQty: '',
    harvestDate: new Date().toISOString().split('T')[0],
    organicCertified: false,
    imageUrl: '',
    minOrderQty: 1,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  useEffect(() => {
    setIsClient(false)
    requestAnimationFrame(() => {
      setIsClient(true)
    })
  }, [])

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }
    if (!formData.categoryId) {
      newErrors.categoryId = 'Category is required'
    }
    if (!formData.pricePerUnit || formData.pricePerUnit <= 0) {
      newErrors.pricePerUnit = 'Price must be greater than 0'
    }
    if (!formData.stockQty || formData.stockQty <= 0) {
      newErrors.stockQty = 'Stock quantity must be greater than 0'
    }
    if (!formData.harvestDate) {
      newErrors.harvestDate = 'Harvest date is required'
    }
    if (!formData.imageUrl) {
      newErrors.imageUrl = 'Product image is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'number' ? (value === '' ? '' : parseFloat(value)) : value,
    }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      organicCertified: checked,
    }))
  }

  const handleImageUpload = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      imageUrl,
    }))
    if (errors.imageUrl) {
      setErrors((prev) => ({
        ...prev,
        imageUrl: undefined,
      }))
    }
  }

  // ADDED: Derive the current crop's fair band without blocking submission.
  const mandiAverage = MANDI_AVERAGE_PRICES[formData.name.trim().toLowerCase()]
  const fairPriceMin = mandiAverage ? mandiAverage * 0.85 : 0
  const fairPriceMax = mandiAverage ? mandiAverage * 1.15 : 0
  const hasEnteredPrice = typeof formData.pricePerUnit === 'number' && formData.pricePerUnit > 0
  const isPriceAboveMandi = hasEnteredPrice && mandiAverage
    ? formData.pricePerUnit > mandiAverage
    : false
  const isPriceWithinBand = hasEnteredPrice && mandiAverage
    ? formData.pricePerUnit >= fairPriceMin && formData.pricePerUnit <= fairPriceMax
    : false

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    try {
      const newProduct: ProductData = {
        id: `prd-${Date.now()}`,
        farmerId: 'far-001',
        categoryId: formData.categoryId,
        name: formData.name.trim(),
        description: formData.description.trim(),
        unit: formData.unit,
        pricePerUnit: formData.pricePerUnit as number,
        stockQty: formData.stockQty as number,
        status: 'Available',
        harvestDate: formData.harvestDate,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0],
        imageUrl: formData.imageUrl,
        organicCertified: formData.organicCertified,
        minOrderQty: (formData.minOrderQty as number) || 1,
      }

      productDataList.push(newProduct)
      saveProducts(productDataList)

      toast.success('Product added successfully!')

      setTimeout(() => {
        window.location.href = './inventory-management.html'
      }, 500)
    } catch (error) {
      console.error('Error adding product:', error)
      toast.error('Failed to add product. Please try again.')
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    window.location.href = './farmer-dashboard.html'
  }

  if (!isClient) {
    return (
      <div className="flex items-center justify-center py-16">
        <LoadingSpinner size="md" text="Loading form..." />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Product Image Section */}
      <Card className="surface-base border">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-lg flex items-center gap-2">
            <SafeIcon name="Image" size={20} className="text-primary" />
            Product Image
          </CardTitle>
        </CardHeader>
        <CardContent className="card-padding">
          <ProductImageUpload onImageUpload={handleImageUpload} />
          {errors.imageUrl && (
            <p className="text-sm text-destructive mt-2">{errors.imageUrl}</p>
          )}
        </CardContent>
      </Card>

      {/* Basic Information Section */}
      <Card className="surface-base border">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-lg flex items-center gap-2">
            <SafeIcon name="Info" size={20} className="text-primary" />
            Basic Information
          </CardTitle>
        </CardHeader>
        <CardContent className="card-padding space-y-5">
          {/* Product Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-label">
              Product Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="e.g., Fresh Spinach Bundle"
              value={formData.name}
              onChange={handleInputChange}
              className={cn(
                'h-10 bg-background border-input focus:ring-primary/20',
                errors.name && 'border-destructive'
              )}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-label">
              Description <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your product, harvesting method, quality details..."
              value={formData.description}
              onChange={handleInputChange}
              className={cn(
                'min-h-[100px] bg-background border-input focus:ring-primary/20 resize-none',
                errors.description && 'border-destructive'
              )}
            />
            {errors.description && (
              <p className="text-sm text-destructive">{errors.description}</p>
            )}
          </div>

          {/* Category & Unit Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="categoryId" className="text-label">
                Category <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.categoryId}
                onValueChange={(value) =>
                  handleSelectChange('categoryId', value)
                }
              >
                <SelectTrigger
                  id="categoryId"
                  className={cn(
                    'h-10 bg-background border-input focus:ring-primary/20',
                    errors.categoryId && 'border-destructive'
                  )}
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {(categories || []).map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.categoryId && (
                <p className="text-sm text-destructive">{errors.categoryId}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="unit" className="text-label">
                Unit <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.unit}
                onValueChange={(value) => handleSelectChange('unit', value)}
              >
                <SelectTrigger id="unit" className="h-10 bg-background border-input focus:ring-primary/20">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {UNIT_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing & Inventory Section */}
      <Card className="surface-base border">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-lg flex items-center gap-2">
            <SafeIcon name="DollarSign" size={20} className="text-primary" />
            Pricing & Inventory
          </CardTitle>
        </CardHeader>
        <CardContent className="card-padding space-y-5">
          {/* Price & Stock Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pricePerUnit" className="text-label">
                Price per Unit (₹) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="pricePerUnit"
                name="pricePerUnit"
                type="number"
                placeholder="0"
                min="0"
                step="0.01"
                value={formData.pricePerUnit}
                onChange={handleInputChange}
                className={cn(
                  'h-10 bg-background border-input focus:ring-primary/20',
                  errors.pricePerUnit && 'border-destructive'
                )}
              />
              {errors.pricePerUnit && (
                <p className="text-sm text-destructive">{errors.pricePerUnit}</p>
              )}
              {/* ADDED: Mandi guidance appears once a supported crop and price are entered. */}
              {mandiAverage && (
                <div
                  className={cn(
                    'rounded-[--radius] border p-3 text-sm transition-all duration-150',
                    hasEnteredPrice && isPriceAboveMandi
                      ? 'border-[hsl(var(--warning)/0.3)] bg-[hsl(var(--warning)/0.1)] text-[hsl(var(--warning))]'
                      : 'border-border bg-muted/30 text-muted-foreground'
                  )}
                  aria-live="polite"
                >
                  <div className="flex items-center gap-2 font-medium">
      <SafeIcon
        name={isPriceAboveMandi ? 'AlertTriangle' : 'CheckCircle2'}
        size={16}
      />
                    <span>Mandi price guidance</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <span>Mandi average: ₹{mandiAverage.toFixed(2)}</span>
                    <span>Fair range: ₹{fairPriceMin.toFixed(2)}–₹{fairPriceMax.toFixed(2)}</span>
                  </div>
      {hasEnteredPrice && isPriceAboveMandi && (
        <p className="mt-2 text-xs font-medium">
          This price is higher than the mandi average. You can still submit this listing.
        </p>
      )}
      {hasEnteredPrice && !isPriceAboveMandi && (
        <p className="mt-2 text-xs font-medium">Your price is at or below the mandi average.</p>
      )}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="stockQty" className="text-label">
                Stock Quantity <span className="text-destructive">*</span>
              </Label>
              <Input
                id="stockQty"
                name="stockQty"
                type="number"
                placeholder="0"
                min="0"
                step="1"
                value={formData.stockQty}
                onChange={handleInputChange}
                className={cn(
                  'h-10 bg-background border-input focus:ring-primary/20',
                  errors.stockQty && 'border-destructive'
                )}
              />
              {errors.stockQty && (
                <p className="text-sm text-destructive">{errors.stockQty}</p>
              )}
            </div>
          </div>

          {/* Minimum Order Quantity */}
          <div className="space-y-2">
            <Label htmlFor="minOrderQty" className="text-label">
              Minimum Order Quantity
            </Label>
            <Input
              id="minOrderQty"
              name="minOrderQty"
              type="number"
              placeholder="1"
              min="1"
              step="1"
              value={formData.minOrderQty}
              onChange={handleInputChange}
              className="h-10 bg-background border-input focus:ring-primary/20"
            />
            <p className="text-caption">
              Consumers must order at least this quantity per purchase.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Harvest & Certification Section */}
      <Card className="surface-base border">
        <CardHeader className="border-b border-border">
          <CardTitle className="text-lg flex items-center gap-2">
            <SafeIcon name="Leaf" size={20} className="text-primary" />
            Harvest & Certification
          </CardTitle>
        </CardHeader>
        <CardContent className="card-padding space-y-5">
          {/* Harvest Date */}
          <div className="space-y-2">
            <Label htmlFor="harvestDate" className="text-label">
              Harvest Date <span className="text-destructive">*</span>
            </Label>
            <Input
              id="harvestDate"
              name="harvestDate"
              type="date"
              value={formData.harvestDate}
              onChange={handleInputChange}
              className={cn(
                'h-10 bg-background border-input focus:ring-primary/20',
                errors.harvestDate && 'border-destructive'
              )}
            />
            {errors.harvestDate && (
              <p className="text-sm text-destructive">{errors.harvestDate}</p>
            )}
          </div>

          {/* Organic Certification */}
          <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg border border-border">
            <Checkbox
              id="organicCertified"
              checked={formData.organicCertified}
              onCheckedChange={handleCheckboxChange}
              className="h-5 w-5"
            />
            <div className="flex-1">
              <Label
                htmlFor="organicCertified"
                className="text-label font-medium cursor-pointer"
              >
                Organic Certified
              </Label>
              <p className="text-caption mt-0.5">
                Check this if your product is certified organic. This will be
                highlighted to consumers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Actions */}
      <div className="flex gap-3 justify-end pt-4 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={handleCancel}
          disabled={isSubmitting}
          className="min-w-[120px]"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-w-[140px] shadow-sm"
        >
          {isSubmitting ? (
            <>
              <SafeIcon name="Loader2" size={16} className="mr-2 animate-spin" />
              Adding...
            </>
          ) : (
            <>
              <SafeIcon name="Plus" size={16} className="mr-2" />
              Add Product
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
