import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { cn } from '../lib/utils'

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionVariants> {}

const actionVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition:colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export function Action({
  children,
  variant,
  size,
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(actionVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  )
}
