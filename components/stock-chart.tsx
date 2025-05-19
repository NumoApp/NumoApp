"use client"

import { useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function StockChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const canvas = canvasRef.current
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Sample data - would come from API in real app
    const data = [
      { date: "Jan", value: 120 },
      { date: "Feb", value: 150 },
      { date: "Mar", value: 180 },
      { date: "Apr", value: 170 },
      { date: "May", value: 200 },
      { date: "Jun", value: 220 },
      { date: "Jul", value: 250 },
      { date: "Aug", value: 280 },
      { date: "Sep", value: 260 },
      { date: "Oct", value: 300 },
      { date: "Nov", value: 340 },
      { date: "Dec", value: 380 },
    ]

    // Chart dimensions
    const padding = 40
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // Find min and max values
    const maxValue = Math.max(...data.map((d) => d.value)) * 1.1
    const minValue = Math.min(...data.map((d) => d.value)) * 0.9

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.lineTo(canvas.width - padding, canvas.height - padding)
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    ctx.textAlign = "right"
    ctx.font = "12px sans-serif"
    ctx.fillStyle = "#94a3b8"

    for (let i = 0; i <= gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i
      const value = Math.round(maxValue - ((maxValue - minValue) / gridLines) * i)

      ctx.beginPath()
      ctx.strokeStyle = "#e2e8f0"
      ctx.moveTo(padding, y)
      ctx.lineTo(canvas.width - padding, y)
      ctx.stroke()

      ctx.fillText(`$${value}`, padding - 10, y + 4)
    }

    // Draw x-axis labels
    ctx.textAlign = "center"
    data.forEach((point, i) => {
      const x = padding + (chartWidth / (data.length - 1)) * i
      ctx.fillText(point.date, x, canvas.height - padding + 20)
    })

    // Draw line
    ctx.beginPath()
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 3

    data.forEach((point, i) => {
      const x = padding + (chartWidth / (data.length - 1)) * i
      const y = padding + chartHeight - ((point.value - minValue) / (maxValue - minValue)) * chartHeight

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw area under the line
    ctx.lineTo(padding + chartWidth, canvas.height - padding)
    ctx.lineTo(padding, canvas.height - padding)
    ctx.closePath()
    ctx.fillStyle = "rgba(59, 130, 246, 0.1)"
    ctx.fill()

    // Draw data points
    data.forEach((point, i) => {
      const x = padding + (chartWidth / (data.length - 1)) * i
      const y = padding + chartHeight - ((point.value - minValue) / (maxValue - minValue)) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2
      ctx.stroke()
    })
  }, [])

  return (
    <Tabs defaultValue="1y" className="w-full">
      <div className="flex justify-between items-center mb-4">
        <TabsList>
          <TabsTrigger value="1d">1D</TabsTrigger>
          <TabsTrigger value="1w">1W</TabsTrigger>
          <TabsTrigger value="1m">1M</TabsTrigger>
          <TabsTrigger value="3m">3M</TabsTrigger>
          <TabsTrigger value="1y">1Y</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="1y" className="mt-0">
        <div className="h-[300px] w-full">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
      </TabsContent>

      {/* Other tabs would have similar content */}
      <TabsContent value="1d" className="mt-0">
        <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
          1 Day chart data would appear here
        </div>
      </TabsContent>
    </Tabs>
  )
}
