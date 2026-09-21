import { cn } from '@/lib/utils'
import React from 'react';
import SafeIcon from '@/components/common/SafeIcon';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface AppHeaderProps {
  userRole: 'farmer' | 'hub' | 'consumer';
  userName: string;
  userAvatar?: string;
  currentPath: string;
  onSignOut: () => void;
  cartCount?: number;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  userRole,
  userName,
  userAvatar,
  currentPath,
  onSignOut,
  cartCount = 0,
}) => {
  const getRoleLabel = () => {
    switch (userRole) {
      case 'farmer':
        return 'Farmer';
      case 'hub':
        return 'Hub Manager';
      case 'consumer':
        return 'Consumer';
      default:
        return '';
    }
  };

  const navLinks = {
    farmer: [
      { label: 'Dashboard', url: './farmer-dashboard.html' },
      { label: 'Inventory', url: './inventory-management.html' },
      { label: 'Orders', url: './farmer-orders.html' },
    ],
    hub: [
      { label: 'Overview', url: './hub-dashboard.html' },
      { label: 'Logistics', url: './hub-logistics.html' },
      { label: 'Ledger', url: './hub-ledger.html' },
    ],
    consumer: [
      { label: 'Marketplace', url: './consumer-marketplace.html' },
      { label: 'My Orders', url: './order-tracking.html' },
    ],
  };

  const activeLinks = navLinks[userRole] || [];

  const handleLogoClick = () => {
    const homeUrl = userRole === 'farmer' 
      ? './farmer-dashboard.html' 
      : userRole === 'hub' 
        ? './hub-dashboard.html' 
        : './consumer-marketplace.html';
    window.location.href = homeUrl;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={handleLogoClick}
          >
            <div className="bg-primary p-1.5 rounded-lg text-primary-foreground group-hover:scale-105 transition-transform">
              <SafeIcon name="Sprout" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground hidden sm:inline-block">
              FarmConnect
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {activeLinks.map((link) => {
              const isActive = currentPath.includes(link.url.replace('./', ''));
              return (
                <a
                  key={link.url}
                  href={link.url}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {userRole === 'consumer' && (
            <Button
              variant="ghost"
              size="icon"
              className="relative mr-2"
              onClick={() => window.location.href = './cart-page.html'}
            >
              <SafeIcon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-secondary text-secondary-foreground border-2 border-card cart-badge-pulse"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          )}

          <div className="hidden sm:flex flex-col items-end mr-2">
            <span className="text-sm font-semibold leading-none">{userName}</span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 px-1.5 py-0.5 rounded border border-border bg-muted/50">
              {getRoleLabel()}
            </span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10 border border-border">
                  <AvatarImage src={userAvatar || `https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4724825a-2439-475b-8668-4636bb961b21.png`} alt={userName} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {userName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userName}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {getRoleLabel()}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => window.location.href = './auth-portal.html'}>
                <SafeIcon name="User" className="mr-2 h-4 w-4" />
                <span>Profile Settings</span>
              </DropdownMenuItem>
              {userRole === 'farmer' && (
                <DropdownMenuItem onClick={() => window.location.href = './add-product.html'}>
                  <SafeIcon name="PlusCircle" className="mr-2 h-4 w-4" />
                  <span>Add Product</span>
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={onSignOut}
                className="text-destructive focus:text-destructive"
              >
                <SafeIcon name="LogOut" className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
