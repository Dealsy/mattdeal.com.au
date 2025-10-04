import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva(
  'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default:
          'bg-background-elevated border-t-0 border-background-border dark:border-t dark:border-b-0 dark:border-background-border shadow-xl placeholder:text-foreground/60 rounded-xl',
      },
    },
  }
)

type InputProps = React.ComponentProps<'input'> & VariantProps<typeof inputVariants>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'default', ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
