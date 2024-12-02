import * as React from "react"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface ButtonAction {
  label: string
  onClick: () => void
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  disabled?: boolean
}

interface ButtonGroupProps {
  actions: ButtonAction[]
  maxVisible?: number
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function ButtonGroup({
  actions,
  maxVisible = 3,
  size = "default",
  className = "",
}: ButtonGroupProps) {
  const visibleActions = actions.slice(0, maxVisible)
  const hiddenActions = actions.slice(maxVisible)
  const hasHiddenActions = hiddenActions.length > 0

  return (
    <div className={cn("flex items-center isolate", className)}>
      {visibleActions.map((action, index) => (
        <Button
          key={`${action.label}-${index}`}
          onClick={action.onClick}
          variant={action.variant}
          size={size}
          disabled={action.disabled}
          className={cn(
            "rounded-none border-r-0",
            // First button
            index === 0 && "rounded-l-md",
            // Last button (if no hidden actions)
            index === visibleActions.length - 1 && !hasHiddenActions && "rounded-r-md border-r",
            // Handle hover state borders
            "focus:relative",
            // Negative margin to remove double borders
            "first:ml-0 -ml-[1px]"
          )}
        >
          {action.label}
        </Button>
      ))}
      
      {hasHiddenActions && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size={size}
              className={cn(
                "rounded-none rounded-r-md -ml-[1px]",
                "focus:relative"
              )}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {hiddenActions.map((action, index) => (
              <DropdownMenuItem
                key={`${action.label}-${index}`}
                onClick={action.onClick}
                disabled={action.disabled}
              >
                {action.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}
