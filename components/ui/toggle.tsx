"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-sky-100 hover:text-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-800 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-sky-100 data-[state=on]:text-sky-800 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2 dark:ring-offset-sky-950 dark:hover:bg-sky-800 dark:hover:text-sky-50 dark:focus-visible:ring-sky-300 dark:data-[state=on]:bg-sky-800 dark:data-[state=on]:text-sky-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-sky-200 bg-transparent hover:bg-sky-100 hover:text-sky-800 dark:border-sky-800 dark:hover:bg-sky-800 dark:hover:text-sky-50",
        persistent:
          "border border-sky-200 bg-sky-50 hover:bg-sky-100 hover:text-sky-800 dark:border-sky-800 dark:bg-sky-900 dark:hover:bg-sky-800 dark:hover:text-sky-50",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-5 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
