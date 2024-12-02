import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ToggleOption {
  value: string
  label: string
  icon?: React.ReactNode
}

interface ToggleButtonsProps {
  options: ToggleOption[]
  value: string
  onChange: (value: string) => void
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "outline"
  className?: string
  iconsOnly?: boolean
}

export function ToggleButtons({
  options,
  value,
  onChange,
  size = "default",
  variant = "outline",
  className,
  iconsOnly = false,
}: ToggleButtonsProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-sky-200 bg-transparent p-1 dark:border-sky-800",
        className
      )}
    >
      {options.map((option) => {
        const isSelected = option.value === value
        return (
          <Button
            key={option.value}
            onClick={() => onChange(option.value)}
            size={size}
            variant={isSelected ? "default" : "ghost"}
            className={cn(
              "transition-all",
              isSelected && "bg-sky-800 text-sky-50 shadow-sm dark:bg-sky-600",
              !isSelected && "hover:bg-sky-100 hover:text-sky-800 dark:hover:bg-sky-800 dark:hover:text-sky-50",
              "rounded-sm",
              size === "icon" && "h-8 w-8",
              iconsOnly && option.icon ? "px-2" : ""
            )}
          >
            {option.icon && (
              <span className={cn("h-4 w-4", !iconsOnly && "mr-2")}>
                {option.icon}
              </span>
            )}
            {(!iconsOnly || !option.icon) && option.label}
          </Button>
        )
      })}
    </div>
  )
}
