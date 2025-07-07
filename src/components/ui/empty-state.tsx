import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const emptyStateVariants = cva(
  'flex flex-col items-center justify-center text-center p-8',
  {
    variants: {
      variant: {
        default: 'text-muted-foreground',
        newProject: 'text-primary',
        noProjects: 'text-muted-foreground',
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

const EmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof emptyStateVariants>
>(({ className, variant, size, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(emptyStateVariants({ variant, size }), className)}
      {...props}
    />
  );
});
EmptyState.displayName = 'EmptyState';

const EmptyStateIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
EmptyStateIcon.displayName = 'EmptyStateIcon';

const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-lg font-semibold mb-2', className)}
    {...props}
  />
));
EmptyStateTitle.displayName = 'EmptyStateTitle';

const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground mb-4 max-w-sm', className)}
    {...props}
  />
));
EmptyStateDescription.displayName = 'EmptyStateDescription';

const EmptyStateAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex gap-2', className)} {...props} />
));
EmptyStateAction.displayName = 'EmptyStateAction';

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
};
