import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Utensils } from "lucide-react"

export const DayOrdersAmountCard = () => {
  return (
    <Card>
        <CardHeader className="flex-row space-y-0 items-center justify-between">
          <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
          <Utensils className="size-4 text-muted-foreground"/>
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tight">12</span>
          <p className="text-xs text-muted-foreground">
            <span className="text-rose-500 dark:text-rose-400">-4%</span> em relação à ontem
          </p>
        </CardContent>
      </Card>
  )
}