import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { chartColors, sizeConfigs } from "@/lib/styles"
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "@radix-ui/react-icons"
import * as Tooltip from "@radix-ui/react-tooltip"
import { useState } from "react"

interface Category {
  name: string
  value: number
  trend?: number
}

interface DonutTotalProps {
  data: Category[]
  trend?: number
  label?: string
  className?: string
  size?: keyof typeof sizeConfigs.donut
}

const getTrendIcon = (trend: number) => {
  if (trend > 0) return <ArrowUpIcon className="h-3 w-3" />
  if (trend < 0) return <ArrowDownIcon className="h-3 w-3" />
  return <ArrowRightIcon className="h-3 w-3" />
}

const getTrendColor = (trend: number) => {
  if (trend > 0) return "bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/25"
  if (trend < 0) return "bg-red-500/15 text-red-500 hover:bg-red-500/25"
  return "bg-gray-500/15 text-gray-500 hover:bg-gray-500/25"
}

export function DonutTotal({
  data,
  trend,
  label = "Total",
  className,
  size = "md"
}: DonutTotalProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const config = sizeConfigs.donut[size]
  const total = data.reduce((sum, item) => sum + item.value, 0)
  
  console.log('DonutTotal props:', { data, trend, label, size })
  console.log('Total:', total)
  
  // Calculate dimensions
  const radius = (config.width - config.strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  // Helper function to create SVG arc path
  const describeArc = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(config.width / 2, config.height / 2, radius, endAngle)
    const end = polarToCartesian(config.width / 2, config.height / 2, radius, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"
    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ")
  }

  // Helper function to convert polar coordinates to cartesian
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    }
  }

  // Calculate arcs for each category
  let currentAngle = 0
  const categoryArcs = data.map(category => {
    const percentage = (category.value / total) * 100
    const arcAngle = (percentage / 100) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + arcAngle
    currentAngle = endAngle
    return {
      path: describeArc(startAngle, endAngle),
      percentage
    }
  })

  const colors = [
    "stroke-sky-700",
    "stroke-sky-600",
    "stroke-sky-500",
    "stroke-sky-400"
  ]

  // Find hovered category data
  const hoveredData = hoveredCategory 
    ? data.find(category => category.name === hoveredCategory)
    : null

  // Get current trend value
  const currentTrend = hoveredData?.trend ?? trend

  console.log('Hover state:', {
    hoveredCategory,
    hoveredData,
    displayName: hoveredData ? hoveredData.name : label,
    displayValue: hoveredData ? hoveredData.value : total
  })

  const handleMouseEnter = (category: string) => {
    console.log('Mouse enter:', category)
    setHoveredCategory(category)
  }

  const handleMouseLeave = () => {
    console.log('Mouse leave')
    setHoveredCategory(null)
  }

  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center justify-center">
          <div className="relative" style={{ width: config.width, height: config.height }}>
            <div className="absolute inset-0">
              <svg
                width={config.width}
                height={config.height}
                viewBox={`0 0 ${config.width} ${config.height}`}
              >
                {data.map((category, index) => (
                  <path
                    key={category.name}
                    d={categoryArcs[index].path}
                    fill="none"
                    className={cn(
                      "transition-all duration-300 ease-in-out cursor-pointer pointer-events-auto",
                      colors[index % colors.length],
                      hoveredCategory === category.name && "brightness-110"
                    )}
                    strokeWidth={config.strokeWidth}
                    onMouseEnter={() => handleMouseEnter(category.name)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </svg>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className={cn("text-muted-foreground", config.labelSize)}>
                {hoveredData ? hoveredData.name : label}
              </div>
              <div className={cn("font-semibold", config.valueSize)}>
                {hoveredData ? hoveredData.value.toLocaleString() : total.toLocaleString()}
              </div>
              {currentTrend !== undefined && (
                <Badge
                  variant="secondary"
                  className={cn(
                    "flex items-center gap-0.5 font-normal py-0.5 px-1.5 h-4",
                    getTrendColor(currentTrend),
                    config.badgeSize
                  )}
                >
                  {getTrendIcon(currentTrend)}
                  {Math.abs(currentTrend)}%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
