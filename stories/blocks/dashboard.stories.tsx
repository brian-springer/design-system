import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Card } from "@/components/ui/card"
import { DonutTotal } from "@/components/charts/donut-total"
import { Sparkline } from "@/components/charts/sparkline"
import { ColumnSparkline } from "@/components/charts/column-sparkline"
import { CategorySummary } from "@/components/charts/category-summary"
import { KPISpark } from "@/components/charts/kpi-spark"

interface DashboardProps {
  className?: string
}

const generateSparklineData = (points: number, base: number, variance: number) => {
  return Array.from({ length: points }, () => ({
    value: base + (Math.random() - 0.5) * variance
  }))
}

const generateColumnData = (points: number, base: number, variance: number) => {
  return Array.from({ length: points }, () => ({
    value: base + (Math.random() - 0.5) * variance * 2
  }))
}

const generateKPIHistoricalData = (actual: number, projected: number, goal: number) => {
  const totalPoints = 15
  const actualPoints = Math.floor(totalPoints * 0.75)
  
  // Calculate slope to reach projected value at 100% width
  const startValue = actual * 0.85 // Start at 85% of actual
  const projectedIntersection = projected // End at projected value
  
  const stepIncrease = (projectedIntersection - startValue) / (totalPoints - 1)
  
  // Generate actual data points with minimal variation
  const actualData = Array.from({ length: actualPoints }, (_, i) => {
    // Base value with continuous increase towards projected
    const baseValue = startValue + (stepIncrease * i)
    
    // Add very small random variation (±1%)
    const variation = baseValue * (Math.random() * 0.02 - 0.01)
    
    // Ensure we stay below goal and maintain minimum increase
    const value = Math.min(
      baseValue + variation,
      goal - 1
    )
    
    return { value }
  })

  // Sort to ensure continuous increase
  actualData.sort((a, b) => a.value - b.value)

  // Ensure the last actual point matches our current actual
  actualData[actualData.length - 1].value = actual

  return actualData
}

const meta = {
  title: "Blocks/Dashboard",
  parameters: {
    layout: "centered",
  },
} satisfies Meta

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="space-y-4">
        <div className="min-w-[280px]">
          <CategorySummary
            categories={[
              {
                name: "Impressions",
                users: 1250000,
                revenue: 12500,
                trend: {
                  value: 12.5,
                  direction: "up"
                }
              },
              {
                name: "Clicks",
                users: 280000,
                revenue: 28000,
                trend: {
                  value: 8.3,
                  direction: "up"
                }
              },
              {
                name: "Sign-ups",
                users: 85000,
                revenue: 85000,
                trend: {
                  value: 3.2,
                  direction: "down"
                }
              },
              {
                name: "Purchases",
                users: 25000,
                revenue: 250000,
                trend: {
                  value: 15.8,
                  direction: "up"
                }
              },
            ]}
            size="md"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-[280px]">
          <div className="min-w-[280px]">
            <KPISpark
              actual={750000}
              projected={1200000}
              goal={1000000}
              historicalData={generateKPIHistoricalData(750000, 1200000, 1000000)}
              variant="line"
              title="Revenue"
              unit="USD"
              size="md"
            />
          </div>
          <div className="min-w-[280px]">
            <KPISpark
              actual={85}
              projected={95}
              goal={90}
              historicalData={generateKPIHistoricalData(85, 95, 90)}
              variant="line"
              title="Customer Satisfaction"
              unit="%"
              size="md"
            />
          </div>
          <div className="min-w-[280px]">
            <KPISpark
              actual={650000}
              projected={900000}
              goal={1000000}
              variant="bar"
              title="Sales Target"
              unit="USD"
              size="md"
            />
          </div>
          <div className="min-w-[280px]">
            <KPISpark
              actual={120}
              projected={150}
              goal={140}
              variant="bar"
              title="New Customers"
              unit=""
              size="md"
            />
          </div>
          <div className="min-w-[280px]">
            <DonutTotal
              data={[
                { name: "Mobile", value: 65, trend: 12 },
                { name: "Desktop", value: 35, trend: -5 }
              ]}
              label="Devices"
              trend={12}
              size="md"
            />
          </div>
          <div className="min-w-[280px]">
            <DonutTotal
              data={[
                { name: "Subscriptions", value: 45678, trend: 15 },
                { name: "One-time", value: 23456, trend: 8 },
                { name: "Services", value: 12345, trend: -3 }
              ]}
              label="Revenue"
              trend={-5}
              size="md"
            />
          </div>
          <div className="min-w-[280px]">
            <DonutTotal
              data={[
                { name: "Completed", value: 120, trend: -8 },
                { name: "In Progress", value: 45, trend: 10 },
                { name: "Pending", value: 30, trend: -3 },
                { name: "Blocked", value: 15, trend: 5 }
              ]}
              label="Tasks"
              trend={8}
              size="md"
            />
          </div>
          <div className="min-w-[280px]">
            <DonutTotal
              data={[
                { name: "Active", value: 75, trend: 18 },
                { name: "Inactive", value: 25, trend: -12 }
              ]}
              label="Users"
              trend={-3}
              size="md"
            />
          </div>
          <div className="min-w-[280px]">
            <Sparkline
              title="Daily Revenue"
              value={8420}
              valuePrefix="$"
              data={generateSparklineData(30, 8000, 2000)}
              trend={{
                value: 12.5,
                direction: "up"
              }}
              size="md"
              color="hsl(var(--chart-1))"
            />
          </div>
          <div className="min-w-[280px]">
            <Sparkline
              title="Active Users"
              value={1284}
              data={generateSparklineData(30, 1200, 300)}
              trend={{
                value: 3.8,
                direction: "down"
              }}
              size="md"
              color="hsl(var(--chart-2))"
            />
          </div>
          <div className="min-w-[280px]">
            <ColumnSparkline
              title="Daily P&L"
              value={1250}
              valuePrefix="$"
              data={generateColumnData(20, 0, 2000)}
              trend={{
                value: 12.5,
                direction: "up"
              }}
              size="md"
              positiveColor="hsl(var(--emerald-9))"
              negativeColor="hsl(var(--rose-9))"
            />
          </div>
          <div className="min-w-[280px]">
            <ColumnSparkline
              title="Net Flow"
              value={-25420}
              valuePrefix="$"
              data={generateColumnData(20, 0, 50000)}
              trend={{
                value: 8.3,
                direction: "down"
              }}
              size="md"
              positiveColor="hsl(var(--emerald-9))"
              negativeColor="hsl(var(--rose-9))"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
