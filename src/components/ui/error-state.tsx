import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const errorStateVariants = cva(
  'flex flex-col items-center justify-center text-center p-8',
  {
    variants: {
      variant: {
        default: 'text-destructive',
        apiFailure: 'text-destructive',
        validationError: 'text-destructive',
      },
      size: {
        default: 'min-h-[200px]',
        sm: 'min-h-[150px]',
        lg: 'min-h-[300px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const ErrorState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof errorStateVariants>
>(({ className, variant, size, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(errorStateVariants({ variant, size }), className)}
      {...props}
    />
  );
});
ErrorState.displayName = 'ErrorState';

const ErrorStateIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10',
      className
    )}
    {...props}
  />
));
ErrorStateIcon.displayName = 'ErrorStateIcon';

const ErrorStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-lg font-semibold mb-2 text-destructive', className)}
    {...props}
  />
));
ErrorStateTitle.displayName = 'ErrorStateTitle';

const ErrorStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground mb-4 max-w-sm', className)}
    {...props}
  />
));
ErrorStateDescription.displayName = 'ErrorStateDescription';

const ErrorStateAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex gap-2', className)} {...props} />
));
ErrorStateAction.displayName = 'ErrorStateAction';

const ErrorStateDetails = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mt-4 p-3 rounded-md bg-muted text-xs font-mono text-muted-foreground max-w-md overflow-auto',
      className
    )}
    {...props}
  />
));
ErrorStateDetails.displayName = 'ErrorStateDetails';

export {
  ErrorState,
  ErrorStateIcon,
  ErrorStateTitle,
  ErrorStateDescription,
  ErrorStateAction,
  ErrorStateDetails,
};
