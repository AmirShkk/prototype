
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SafeIcon from '@/components/common/SafeIcon';
import { cn } from '@/lib/utils';

type UserRole = 'farmer' | 'hub' | 'consumer';

interface RoleSelectorProps {
  selectedRole: UserRole | null;
  onSelectRole: (role: UserRole) => void;
}

const roles: Array<{
  id: UserRole;
  label: string;
  description: string;
  icon: string;
  color: string;
}> = [
  {
    id: 'farmer',
    label: 'Farmer',
    description: 'Manage products and inventory',
    icon: 'Sprout',
    color: 'bg-green-50 border-green-200 hover:border-green-400',
  },
  {
    id: 'hub',
    label: 'Hub Manager',
    description: 'Track logistics and deliveries',
    icon: 'Warehouse',
    color: 'bg-blue-50 border-blue-200 hover:border-blue-400',
  },
  {
    id: 'consumer',
    label: 'Consumer',
    description: 'Browse and purchase produce',
    icon: 'ShoppingCart',
    color: 'bg-orange-50 border-orange-200 hover:border-orange-400',
  },
];

export default function RoleSelector({ selectedRole, onSelectRole }: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {roles.map((role) => (
        <Card
          key={role.id}
          className={cn(
            "cursor-pointer transition-all duration-200 border-2",
            selectedRole === role.id
              ? "ring-2 ring-primary ring-offset-2 border-primary"
              : "border-border hover:border-primary/50",
            role.color
          )}
          onClick={() => onSelectRole(role.id)}
        >
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-white border border-border shadow-sm">
              <SafeIcon name={role.icon} size={28} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{role.label}</h3>
              <p className="text-sm text-muted-foreground">{role.description}</p>
            </div>
            <div className={cn(
              "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
              selectedRole === role.id
                ? "border-primary bg-primary"
                : "border-border"
            )}>
              {selectedRole === role.id && (
                <SafeIcon name="Check" size={14} className="text-primary-foreground" />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
