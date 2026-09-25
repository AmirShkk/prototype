import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const MARKET_DATA = {
  onion: { label: 'Onion', avg: 20, history: [18, 19, 21, 20, 22, 19, 20] },
  tomato: { label: 'Tomato', avg: 18, history: [16, 17, 18, 19, 18, 17, 18] },
  wheat: { label: 'Wheat', avg: 22, history: [21, 22, 22, 23, 22, 21, 22] },
} as const

type CropKey = keyof typeof MARKET_DATA

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function getFairRange(avg: number) {
  return {
    min: Math.round(avg * 0.85),
    max: Math.round(avg * 1.15),
  }
}

function buildChartPoints(history: readonly number[], width: number, height: number) {
  const min = Math.min(...history) - 1
  const max = Math.max(...history) + 1
  return history.map((price, index) => {
    const x = (index / (history.length - 1)) * width
    const y = height - ((price - min) / (max - min)) * height
    return { x, y }
  })
}

export default function WholesaleMarketPrice() {
  const [crop, setCrop] = useState<CropKey>('onion')
  const [listingPrice, setListingPrice] = useState(MARKET_DATA.onion.avg)
  const market = MARKET_DATA[crop]
  const fairRange = useMemo(() => getFairRange(market.avg), [market.avg])
  const chartWidth = 640
  const chartHeight = 150
  const points = buildChartPoints(market.history, chartWidth, chartHeight)
  const linePath = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')
  const areaPath = `${linePath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`
  const isAboveAverage = listingPrice > market.avg

  const handleCropChange = (nextCrop: CropKey) => {
    setCrop(nextCrop)
    setListingPrice(MARKET_DATA[nextCrop].avg)
  }

  return (
    <Card className="surface-raised overflow-hidden">
      <CardHeader className="border-b border-border pb-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-section-title">Wholesale Market Price</CardTitle>
          <div className="flex items-center gap-3">
            <label htmlFor="market-crop" className="sr-only">Select crop</label>
            <select
              id="market-crop"
              value={crop}
              onChange={(event) => handleCropChange(event.target.value as CropKey)}
              className="h-9 rounded-[--radius] border border-input bg-background px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {Object.entries(MARKET_DATA).map(([value, data]) => (
                <option key={value} value={value}>{data.label}</option>
              ))}
            </select>
            <div className="flex gap-4 text-right">
              <div>
                <p className="text-xs text-muted-foreground">Wholesale price</p>
                <p className="text-sm font-semibold text-foreground">₹{market.avg}/kg</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Fair range</p>
                <p className="text-sm font-semibold text-foreground">₹{fairRange.min}–{fairRange.max}</p>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="card-padding space-y-6">
        <div>
          <div className="h-44 w-full">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight + 24}`} className="h-full w-full" role="img" aria-label={`${market.label} wholesale price trend for the last seven days`} preserveAspectRatio="none">
              <path d={areaPath} fill="hsl(var(--primary) / 0.12)" />
              <path d={linePath} fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              {points.map((point, index) => <circle key={DAYS[index]} cx={point.x} cy={point.y} r="4" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" vectorEffect="non-scaling-stroke" />)}
              {DAYS.map((day, index) => <text key={day} x={points[index].x} y={chartHeight + 18} textAnchor="middle" className="fill-muted-foreground text-[11px]">{day}</text>)}
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="listing-price" className="text-label">Your listing price</label>
            <span className="text-lg font-semibold text-primary">₹{listingPrice}/kg</span>
          </div>
          <input
            id="listing-price"
            type="range"
            min="10"
            max="35"
            step="1"
            value={listingPrice}
            onChange={(event) => setListingPrice(Number(event.target.value))}
            className="w-full accent-primary"
            aria-valuetext={`₹${listingPrice} per kilogram`}
          />
          <div className="flex items-center justify-between gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${isAboveAverage ? 'border-[hsl(var(--warning)/0.3)] bg-[hsl(var(--warning)/0.1)] text-[hsl(var(--warning))]' : 'border-[hsl(var(--success)/0.3)] bg-[hsl(var(--success)/0.1)] text-[hsl(var(--success))]'}`}>
              {isAboveAverage ? 'Above market average' : 'Within fair range'}
            </span>
            <span className="text-xs text-muted-foreground">Soft guidance only</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
