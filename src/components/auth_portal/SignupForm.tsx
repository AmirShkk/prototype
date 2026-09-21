
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import SafeIcon from '@/components/common/SafeIcon';
import { toast } from 'sonner';

type UserRole = 'farmer' | 'hub' | 'consumer';

interface SignupFormProps {
  role: UserRole;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
}

export default function SignupForm({ role }: SignupFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the terms';
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
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockToken = `jwt_${role}_${Date.now()}`;
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('userRole', role);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', fullName);

      toast.success(`Account created successfully! Welcome, ${fullName}!`);

      const dashboardUrls: Record<UserRole, string> = {
        farmer: './farmer-dashboard.html',
        hub: './hub-dashboard.html',
        consumer: './consumer-marketplace.html',
      };

      setTimeout(() => {
        window.location.href = dashboardUrls[role];
      }, 500);
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-label">Full Name</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
          }}
          disabled={isLoading}
          className={errors.fullName ? 'border-destructive focus:ring-destructive/20' : ''}
        />
        {errors.fullName && (
          <p className="text-xs text-destructive flex items-center gap-1 mt-1">
            <SafeIcon name="AlertCircle" size={12} />
            {errors.fullName}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-email" className="text-label">Email Address</Label>
        <Input
          id="signup-email"
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
        <Label htmlFor="signup-password" className="text-label">Password</Label>
        <Input
          id="signup-password"
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

      <div className="space-y-2">
        <Label htmlFor="confirm-password" className="text-label">Confirm Password</Label>
        <Input
          id="confirm-password"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: undefined });
          }}
          disabled={isLoading}
          className={errors.confirmPassword ? 'border-destructive focus:ring-destructive/20' : ''}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-destructive flex items-center gap-1 mt-1">
            <SafeIcon name="AlertCircle" size={12} />
            {errors.confirmPassword}
          </p>
        )}
      </div>

      <div className="flex items-start space-x-2 py-2">
        <Checkbox
          id="terms"
          checked={agreeTerms}
          onCheckedChange={(checked:boolean) => {
            setAgreeTerms(checked as boolean);
            if (errors.terms) setErrors({ ...errors, terms: undefined });
          }}
          disabled={isLoading}
          className="mt-1"
        />
        <Label htmlFor="terms" className="text-xs font-normal cursor-pointer leading-relaxed">
          I agree to the{' '}
          <button
            type="button"
            onClick={() => toast.info('Terms of Service')}
            className="text-primary hover:underline font-medium"
          >
            Terms of Service
          </button>
          {' '}and{' '}
          <button
            type="button"
            onClick={() => toast.info('Privacy Policy')}
            className="text-primary hover:underline font-medium"
          >
            Privacy Policy
          </button>
        </Label>
      </div>
      {errors.terms && (
        <p className="text-xs text-destructive flex items-center gap-1">
          <SafeIcon name="AlertCircle" size={12} />
          {errors.terms}
        </p>
      )}

      <Button
        type="submit"
        className="w-full font-semibold h-10 shadow-sm"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <SafeIcon name="Loader2" size={16} className="mr-2 animate-spin" />
            Creating account...
          </>
        ) : (
          <>
            <SafeIcon name="UserPlus" size={16} className="mr-2" />
            Create Account
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By signing up, you agree to our{' '}
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
