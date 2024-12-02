export const chartColors = {
  sky: [
    "stroke-sky-500",
    "stroke-sky-400",
    "stroke-sky-300",
    "stroke-sky-200"
  ],
  skyBg: [
    "fill-sky-500",
    "fill-sky-400",
    "fill-sky-300",
    "fill-sky-200"
  ],
}

export const sizeConfigs = {
  donut: {
    sm: { 
      width: 140, 
      height: 140, 
      strokeWidth: 12,
      valueSize: "text-lg",
      labelSize: "text-xs",
      badgeSize: "text-[10px]"
    },
    md: { 
      width: 180, 
      height: 180, 
      strokeWidth: 16,
      valueSize: "text-xl",
      labelSize: "text-sm",
      badgeSize: "text-xs"
    },
    lg: { 
      width: 220, 
      height: 220, 
      strokeWidth: 20,
      valueSize: "text-2xl",
      labelSize: "text-base",
      badgeSize: "text-sm"
    }
  },
  sparkline: {
    sm: {
      width: 280,
      height: 140,
      valueSize: "text-xl",
      labelSize: "text-xs",
      barHeight: 8,
      tickHeight: 16,
      padding: "p-3",
      chartPadding: 80,
      titleSize: "text-xs"
    },
    md: {
      width: 320,
      height: 180,
      valueSize: "text-2xl",
      labelSize: "text-sm",
      barHeight: 12,
      tickHeight: 24,
      padding: "p-4",
      chartPadding: 90,
      titleSize: "text-sm"
    },
    lg: {
      width: 380,
      height: 220,
      valueSize: "text-3xl",
      labelSize: "text-base",
      barHeight: 16,
      tickHeight: 32,
      padding: "p-5",
      chartPadding: 100,
      titleSize: "text-base"
    }
  }
}
