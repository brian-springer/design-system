import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export interface SplitButtonOption {
  label: string
  value: string
  icon?: React.ReactNode
  onClick?: () => void
}

interface SplitButtonProps {
  options: SplitButtonOption[]
  defaultOption?: SplitButtonOption
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
  persistent?: boolean
  value?: string
  onChange?: (value: string) => void
}

export function SplitButton({
  options,
  defaultOption,
  variant = "default",
  size = "default",
  className,
  persistent = false,
  value,
  onChange,
}: SplitButtonProps) {
  const [selectedOption, setSelectedOption] = React.useState<SplitButtonOption>(
    defaultOption || options[0]
  )

  React.useEffect(() => {
    if (persistent && value) {
      const option = options.find(opt => opt.value === value)
      if (option) {
        setSelectedOption(option)
      }
    }
  }, [value, options, persistent])

  const handleOptionSelect = (option: SplitButtonOption) => {
    if (persistent) {
      onChange?.(option.value)
    } else {
      option.onClick?.()
    }
    setSelectedOption(option)
  }

  return (
    <div className={cn("relative flex items-center", className)}>
      <Button
        variant={variant}
        size={size}
        className={cn(
          "rounded-r-none border-r-0",
          persistent && "min-w-[120px] justify-start"
        )}
        onClick={persistent ? undefined : selectedOption.onClick}
      >
        {selectedOption.icon && (
          <span className="mr-2 h-4 w-4">{selectedOption.icon}</span>
        )}
        {selectedOption.label}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant}
            size={size}
            className={cn(
              "rounded-l-none px-2",
              size === "lg" && "px-3",
              size === "sm" && "px-1.5"
            )}
          >
            <ChevronDown className={cn(
              "h-4 w-4",
              size === "sm" && "h-3 w-3",
              size === "lg" && "h-5 w-5"
            )} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[160px]">
          {persistent && (
            <>
              <DropdownMenuItem
                disabled
                className="text-xs text-muted-foreground"
              >
                Select option
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleOptionSelect(option)}
            >
              <div className="flex w-full items-center justify-between">
                <span className="flex items-center">
                  {option.icon && (
                    <span className="mr-2 h-4 w-4">{option.icon}</span>
                  )}
                  {option.label}
                </span>
                {persistent && option.value === value && (
                  <Check className="ml-2 h-4 w-4" />
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
