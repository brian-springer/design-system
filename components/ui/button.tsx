import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-sky-950 dark:focus-visible:ring-sky-300",
  {
    variants: {
      variant: {
        default: "bg-sky-800 text-sky-50 hover:bg-sky-800/90 dark:bg-sky-600 dark:text-sky-50 dark:hover:bg-sky-600/90",
        destructive:
          "bg-red-500 text-sky-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-sky-50 dark:hover:bg-red-900/90",
        outline:
          "border border-sky-200 bg-white hover:bg-sky-100 hover:text-sky-800 dark:border-sky-800 dark:bg-sky-950 dark:hover:bg-sky-800 dark:hover:text-sky-50",
        secondary:
          "bg-sky-100 text-sky-800 hover:bg-sky-100/80 dark:bg-sky-800 dark:text-sky-50 dark:hover:bg-sky-800/80",
        ghost: "hover:bg-sky-100 hover:text-sky-800 dark:hover:bg-sky-800 dark:hover:text-sky-50",
        link: "text-sky-800 underline-offset-4 hover:underline dark:text-sky-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
