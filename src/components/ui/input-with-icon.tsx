import { cva, type VariantProps } from 'class-variance-authority';
import {
  Search,
  AlertCircle,
  CheckCircle2,
  Loader2,
  X,
  Eye,
  EyeOff,
} from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input focus-visible:ring-ring',
        error: 'border-destructive focus-visible:ring-destructive',
        success: 'border-green-500 focus-visible:ring-green-500',
      },
      inputSize: {
        default: 'h-10',
        sm: 'h-9',
        lg: 'h-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  }
);

export interface InputWithIconProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  error?: string;
  success?: string;
  showClearButton?: boolean;
  onClear?: () => void;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  (
    {
      className,
      variant,
      inputSize,
      type,
      icon,
      rightIcon,
      isLoading,
      error,
      success,
      showClearButton,
      onClear,
      value,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [inputType, setInputType] = React.useState(type);

    React.useEffect(() => {
      if (type === 'password') {
        setInputType(showPassword ? 'text' : 'password');
      } else {
        setInputType(type);
      }
    }, [type, showPassword]);

    // Determine the current variant based on props
    const currentVariant = error ? 'error' : success ? 'success' : variant;

    // Determine icons to show
    const leftIcon = React.useMemo(() => {
      if (isLoading) {
        return (
          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
        );
      }
      if (icon) {
        return icon;
      }
      if (type === 'search') {
        return <Search className="h-4 w-4 text-muted-foreground" />;
      }
      return null;
    }, [icon, isLoading, type]);

    const rightIconElement = React.useMemo(() => {
      if (type === 'password') {
        return (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="flex items-center justify-center p-1 text-muted-foreground hover:text-foreground focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        );
      }

      if (showClearButton && value && onClear) {
        return (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center justify-center p-1 text-muted-foreground hover:text-foreground focus:outline-none"
            tabIndex={-1}
          >
            <X className="h-4 w-4" />
          </button>
        );
      }

      if (error) {
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      }

      if (success) {
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      }

      return rightIcon;
    }, [
      type,
      showPassword,
      showClearButton,
      value,
      onClear,
      error,
      success,
      rightIcon,
    ]);

    return (
      <div className="relative">
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              {leftIcon}
            </div>
          )}
          <input
            type={inputType}
            className={cn(
              inputVariants({ variant: currentVariant, inputSize, className }),
              leftIcon && 'pl-10',
              rightIconElement && 'pr-10'
            )}
            ref={ref}
            value={value}
            {...props}
          />
          {rightIconElement && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {rightIconElement}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        {success && !error && (
          <p className="mt-1 text-sm text-green-500">{success}</p>
        )}
      </div>
    );
  }
);

InputWithIcon.displayName = 'InputWithIcon';

export { InputWithIcon, inputVariants };
