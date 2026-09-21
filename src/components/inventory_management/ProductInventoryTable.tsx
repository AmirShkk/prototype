
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import SafeIcon from '@/components/common/SafeIcon';
import { StatusBadge } from '@/components/common/StatusBadge';
import { cn } from '@/lib/utils';
import type { ProductData } from '@/data/ProductData';

interface ProductInventoryTableProps {
  products: ProductData[];
  isClient: boolean;
  onStatusToggle: (productId: string) => void;
  onStockUpdate: (productId: string, newQty: number) => void;
  onEdit: (productId: string) => void;
  onDelete: (productId: string) => void;
}

export default function ProductInventoryTable({
  products,
  isClient,
  onStatusToggle,
  onStockUpdate,
  onEdit,
  onDelete,
}: ProductInventoryTableProps) {
  const [editingStockId, setEditingStockId] = React.useState<string | null>(null);
  const [editingStockValue, setEditingStockValue] = React.useState<string>('');

  const handleStockEdit = (productId: string, currentQty: number) => {
    setEditingStockId(productId);
    setEditingStockValue(currentQty.toString());
  };

  const handleStockSave = (productId: string) => {
    const newQty = parseInt(editingStockValue, 10);
    if (!isNaN(newQty) && newQty >= 0) {
      onStockUpdate(productId, newQty);
    }
    setEditingStockId(null);
    setEditingStockValue('');
  };

  const handleStockCancel = () => {
    setEditingStockId(null);
    setEditingStockValue('');
  };

  return (
    <div className="overflow-x-auto flex-1">
      <Table>
        <TableHeader className="bg-muted/30 sticky top-0 z-10">
          <TableRow className="border-b border-border hover:bg-transparent">
            <TableHead className="w-32 whitespace-nowrap font-semibold">Product Name</TableHead>
            <TableHead className="w-24 whitespace-nowrap font-semibold">Category</TableHead>
            <TableHead className="w-20 text-right whitespace-nowrap font-semibold">Price</TableHead>
            <TableHead className="w-24 text-center whitespace-nowrap font-semibold">Stock</TableHead>
            <TableHead className="w-28 text-center whitespace-nowrap font-semibold">Status</TableHead>
            <TableHead className="w-32 text-center whitespace-nowrap font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {(products || []).map((product) => (
            <TableRow
              key={product.id}
              className="table-row-hover border-b border-border/50 last:border-b-0"
            >
              {/* Product Name */}
              <TableCell className="w-32 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-8 h-8 rounded object-cover"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-sm truncate">{product.name}</span>
                    <span className="text-xs text-muted-foreground">{product.id}</span>
                  </div>
                </div>
              </TableCell>

              {/* Category */}
              <TableCell className="w-24 whitespace-nowrap">
                <Badge variant="outline" className="text-xs">
                  {product.categoryId}
                </Badge>
              </TableCell>

              {/* Price */}
              <TableCell className="w-20 text-right whitespace-nowrap">
                <span className="font-semibold text-primary">₹{product.pricePerUnit}</span>
                <span className="text-xs text-muted-foreground ml-1">/{product.unit}</span>
              </TableCell>

              {/* Stock Quantity */}
              <TableCell className="w-24 text-center whitespace-nowrap">
                {editingStockId === product.id ? (
                  <div className="flex items-center justify-center gap-1">
                    <Input
                      type="number"
                      min="0"
                      value={editingStockValue}
                      onChange={(e) => setEditingStockValue(e.target.value)}
                      className="w-16 h-8 text-center text-sm"
                      autoFocus
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      onClick={() => handleStockSave(product.id)}
                      aria-label="Save stock"
                    >
                      <SafeIcon name="Check" size={14} className="text-success" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      onClick={handleStockCancel}
                      aria-label="Cancel edit"
                    >
                      <SafeIcon name="X" size={14} className="text-destructive" />
                    </Button>
                  </div>
                ) : (
                  <div
                    className="flex items-center justify-center gap-2 cursor-pointer group"
                    onClick={() => handleStockEdit(product.id, product.stockQty)}
                  >
                    <span className="font-semibold">{product.stockQty}</span>
                    <span className="text-xs text-muted-foreground">{product.unit}</span>
                    {isClient && (
                      <SafeIcon
                        name="Edit2"
                        size={14}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>
                )}
              </TableCell>

              {/* Status */}
              <TableCell className="w-28 text-center whitespace-nowrap">
                {isClient ? (
                  <button
                    onClick={() => onStatusToggle(product.id)}
                    className="inline-block hover:scale-105 transition-transform"
                    aria-label={`Toggle status for ${product.name}`}
                  >
                    <StatusBadge
                      status={product.status === 'Available' ? 'available' : 'out_of_stock'}
                      size="sm"
                    />
                  </button>
                ) : (
                  <StatusBadge
                    status={product.status === 'Available' ? 'available' : 'out_of_stock'}
                    size="sm"
                  />
                )}
              </TableCell>

              {/* Actions */}
              <TableCell className="w-32 text-center whitespace-nowrap">
                {isClient && (
                  <div className="flex items-center justify-center gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-primary hover:bg-primary/10"
                      onClick={() => onEdit(product.id)}
                      aria-label={`Edit ${product.name}`}
                    >
                      <SafeIcon name="Edit" size={16} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-destructive hover:bg-destructive/10"
                      onClick={() => onDelete(product.id)}
                      aria-label={`Delete ${product.name}`}
                    >
                      <SafeIcon name="Trash2" size={16} />
                    </Button>
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
