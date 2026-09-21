
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import SafeIcon from '@/components/common/SafeIcon';
import { toast } from 'sonner';

type UserRole = 'farmer' | 'hub' | 'consumer';

interface LoginFormProps {
  role: UserRole;
}

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginForm({ role }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));

      const mockToken = `jwt_${role}_${Date.now()}`;
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('userRole', role);
      localStorage.setItem('userEmail', email);
      
      if (rememberMe) {
        localStorage.setItem('rememberEmail', email);
      }

      toast.success(`Welcome back! Logging in as ${role}...`);

      const dashboardUrls: Record<UserRole, string> = {
        farmer: './farmer-dashboard.html',
        hub: './hub-dashboard.html',
        consumer: './consumer-marketplace.html',
      };

      setTimeout(() => {
        window.location.href = dashboardUrls[role];
      }, 500);
    } catch (error) {
      toast.error('Login failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-label">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors({ ...errors, email: undefined });
          }}
          disabled={isLoading}
          className={errors.email ? 'border-destructive focus:ring-destructive/20' : ''}
        />
        {errors.email && (
          <p className="text-xs text-destructive flex items-center gap-1 mt-1">
            <SafeIcon name="AlertCircle" size={12} />
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-label">Password</Label>
          <button
            type="button"
            onClick={() => toast.info('Password reset feature coming soon')}
            className="text-xs text-primary hover:underline font-medium"
          >
            Forgot password?
          </button>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors({ ...errors, password: undefined });
          }}
          disabled={isLoading}
          className={errors.password ? 'border-destructive focus:ring-destructive/20' : ''}
        />
        {errors.password && (
          <p className="text-xs text-destructive flex items-center gap-1 mt-1">
            <SafeIcon name="AlertCircle" size={12} />
            {errors.password}
          </p>
        )}
      </div>

      <div className="flex items-center space-x-2 py-2">
        <Checkbox
          id="remember"
          checked={rememberMe}
          onCheckedChange={(checked:boolean) => setRememberMe(checked as boolean)}
          disabled={isLoading}
        />
        <Label htmlFor="remember" className="text-xs font-normal cursor-pointer">
          Remember me on this device
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full font-semibold h-10 shadow-sm"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <SafeIcon name="Loader2" size={16} className="mr-2 animate-spin" />
            Logging in...
          </>
        ) : (
          <>
            <SafeIcon name="LogIn" size={16} className="mr-2" />
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By logging in, you agree to our{' '}
        <button
          type="button"
          onClick={() => toast.info('Terms of Service')}
          className="text-primary hover:underline font-medium"
        >
          Terms of Service
        </button>
      </p>
    </form>
  );
}
