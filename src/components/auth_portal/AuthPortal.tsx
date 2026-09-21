import { toast } from 'sonner'
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SafeIcon from '@/components/common/SafeIcon';
import RoleSelector from '@/components/auth_portal/RoleSelector';
import LoginForm from '@/components/auth_portal/LoginForm';
import SignupForm from '@/components/auth_portal/SignupForm';

type UserRole = 'farmer' | 'hub' | 'consumer';
type AuthTab = 'login' | 'signup';

export default function AuthPortal() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [activeTab, setActiveTab] = useState<AuthTab>('login');
  const [isClient, setIsClient] = useState(true);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    setIsClient(false);
    
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam) {
      setLanguage(langParam);
    }

    requestAnimationFrame(() => {
      setIsClient(true);
    });
  }, []);

  const getRoleLabel = (role: UserRole): string => {
    const labels: Record<UserRole, string> = {
      farmer: 'Farmer',
      hub: 'Hub Manager',
      consumer: 'Consumer',
    };
    return labels[role];
  };

  const getRoleDescription = (role: UserRole): string => {
    const descriptions: Record<UserRole, string> = {
      farmer: 'Manage your products and inventory',
      hub: 'Track deliveries and logistics',
      consumer: 'Browse and purchase fresh produce',
    };
    return descriptions[role];
  };

  if (!isClient) {
    return (
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Welcome to FarmHub</h1>
          <p className="text-muted-foreground">Select your role to get started</p>
        </div>
        <RoleSelector 
          selectedRole={null}
          onSelectRole={() => {}}
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-in fade-in duration-500">
      {!selectedRole ? (
        <>
          <div className="space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Welcome to FarmHub</h1>
            <p className="text-muted-foreground">Select your role to get started</p>
          </div>
          <RoleSelector 
            selectedRole={selectedRole}
            onSelectRole={setSelectedRole}
          />
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => {
                toast.info('Google login coming soon');
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button 
              onClick={() => {
                toast.info('GitHub login coming soon');
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium text-sm"
            >
              <SafeIcon name="Github" size={16} />
              GitHub
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setSelectedRole(null)}
              className="p-1.5 hover:bg-muted rounded-lg transition-colors"
              aria-label="Back to role selection"
            >
              <SafeIcon name="ArrowLeft" size={20} className="text-muted-foreground" />
            </button>
            <div>
              <h2 className="text-xl font-bold">{getRoleLabel(selectedRole)}</h2>
              <p className="text-xs text-muted-foreground">{getRoleDescription(selectedRole)}</p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={(value:string) => setActiveTab(value as AuthTab)} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="font-semibold">Login</TabsTrigger>
              <TabsTrigger value="signup" className="font-semibold">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <LoginForm role={selectedRole} />
            </TabsContent>

            <TabsContent value="signup" className="space-y-4">
              <SignupForm role={selectedRole} />
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
}
