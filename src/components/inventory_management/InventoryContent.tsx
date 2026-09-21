
import React, { useMemo,useState,useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SafeIcon from '@/components/common/SafeIcon';
import { toast } from 'sonner';
import * as ProductService from '@/data/ProductService';
import * as CategoryService from '@/data/CategoryService';
import type { ProductData } from '@/data/ProductData';
import ProductInventoryTable from './ProductInventoryTable';
import InventoryFilters from './InventoryFilters';
import EmptyState from '@/components/common/EmptyState';
import ConfirmDialog from '@/components/common/ConfirmDialog';

export default function InventoryContent() {
  const farmerId = 'far-001';
  
  const [products, setProducts] = useState(() => {
    const persisted = ProductService.loadPersisted();
    if (persisted) return persisted;
    return ProductService.getByFarmerId(farmerId);
  });

  const [filterStatus, setFilterStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(true);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(false);
    const params = new URLSearchParams(window.location.search);
    const status = params.get('filterStatus') || '';
    if (status) setFilterStatus(status);
    
    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => p.farmerId === farmerId);

    if (filterStatus) {
      result = result.filter((p) => p.status === filterStatus);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return result.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  }, [products, filterStatus, searchQuery]);

  const handleStatusToggle = (productId: string) => {
    setProducts((prev) => {
      const updated = prev.map((p) => {
        if (p.id === productId) {
          const newStatus = p.status === 'Available' ? 'Out of Stock' : 'Available';
          return { ...p, status: newStatus as 'Available' | 'Out of Stock', updatedAt: new Date().toISOString() };
        }
        return p;
      });
      ProductService.savePersisted(updated);
      toast.success('Product status updated');
      return updated;
    });
  };

  const handleStockUpdate = (productId: string, newQty: number) => {
    setProducts((prev) => {
      const updated = prev.map((p) => {
        if (p.id === productId) {
          const status =
            newQty === 0
              ? 'Out of Stock'
              : newQty < 10
                ? 'Low Stock'
                : 'Available';
          return {
            ...p,
            stockQty: newQty,
            status: status as 'Available' | 'Out of Stock' | 'Low Stock',
            updatedAt: new Date().toISOString(),
          };
        }
        return p;
      });
      ProductService.savePersisted(updated);
      toast.success('Stock quantity updated');
      return updated;
    });
  };

  const handleDeleteClick = (productId: string) => {
    setProductToDelete(productId);
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!productToDelete) return;
    setProducts((prev) => {
      const updated = prev.filter((p) => p.id !== productToDelete);
      ProductService.savePersisted(updated);
      toast.success('Product deleted successfully');
      return updated;
    });
    setDeleteConfirmOpen(false);
    setProductToDelete(null);
  };

  const handleEditClick = (productId: string) => {
    window.location.href = `./add-product.html?productId=${productId}`;
  };

  const handleAddNew = () => {
    window.location.href = './add-product.html';
  };

  const handleBackClick = () => {
    window.location.href = './farmer-dashboard.html';
  };

  return (
    <div className="page-body flex flex-col gap-6 h-full">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBackClick}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Go back"
            >
              <SafeIcon name="ArrowLeft" size={20} />
            </Button>
            <div>
              <h1 className="text-page-title">My Stocks & Inventory</h1>
              <p className="text-caption mt-1">Manage your product listings and stock levels</p>
            </div>
          </div>
          <Button
            onClick={handleAddNew}
            className="gap-2 shadow-sm"
            size="lg"
          >
            <SafeIcon name="Plus" size={18} />
            Add New Product
          </Button>
        </div>
      </div>

      {/* Filters Section */}
      <InventoryFilters
        filterStatus={filterStatus}
        onFilterStatusChange={setFilterStatus}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Table Section */}
      <div className="flex-1 min-h-0 flex flex-col surface-base rounded-lg border overflow-hidden">
        {filteredProducts.length > 0 ? (
          <ProductInventoryTable
            products={filteredProducts}
            isClient={isClient}
            onStatusToggle={handleStatusToggle}
            onStockUpdate={handleStockUpdate}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <EmptyState
              iconName="Package"
              title={searchQuery || filterStatus ? 'No products found' : 'No products yet'}
              description={
                searchQuery || filterStatus
                  ? 'Try adjusting your search or filter criteria'
                  : 'Start by adding your first product to your inventory'
              }
              actionLabel="Add Product"
              onAction={handleAddNew}
            />
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={deleteConfirmOpen}
        onOpenChange={setDeleteConfirmOpen}
        title="Delete Product"
        description="Are you sure you want to delete this product? This action cannot be undone."
        confirmLabel="Delete"
        cancelLabel="Cancel"
        variant="destructive"
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
