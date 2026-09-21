
import React, { useState, useRef } from 'react'
import SafeIcon from '@/components/common/SafeIcon'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProductImageUploadProps {
  onImageUpload: (imageUrl: string) => void
}

export default function ProductImageUpload({
  onImageUpload,
}: ProductImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      setPreview(dataUrl)
      onImageUpload(dataUrl)
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setPreview(null)
    onImageUpload('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleClickUpload = () => {
    fileInputRef.current?.click()
  }

  if (preview) {
    return (
      <div className="space-y-4">
        <div className="relative group">
          <img
            src={preview}
            alt="Product preview"
            className="w-full h-64 object-cover rounded-lg border-2 border-border shadow-md"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleRemoveImage}
              className="shadow-lg"
            >
              <SafeIcon name="Trash2" size={16} className="mr-1" />
              Remove
            </Button>
          </div>
        </div>
        <p className="text-caption text-center text-muted-foreground">
          Image uploaded successfully. Hover to remove and upload a different image.
        </p>
      </div>
    )
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClickUpload}
      className={cn(
        'relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200',
        isDragging
          ? 'border-primary bg-primary/5 scale-[1.02]'
          : 'border-border bg-muted/20 hover:bg-muted/40'
      )}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
        aria-label="Upload product image"
      />

      <div className="flex flex-col items-center gap-3">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          <SafeIcon name="Upload" size={32} strokeWidth={1.5} />
        </div>

        <div className="space-y-1">
          <p className="text-base font-semibold text-foreground">
            {isDragging ? 'Drop your image here' : 'Upload Product Image'}
          </p>
          <p className="text-caption text-muted-foreground">
            Drag and drop or click to select (Max 5MB)
          </p>
        </div>

        <div className="text-xs text-muted-foreground mt-2">
          Supported formats: JPG, PNG, WebP
        </div>
      </div>
    </div>
  )
}
