import { Progress } from "@/components/ui/progress"

interface SavingsGoalCardProps {
  title: string
  current: number
  target: number
  percentage: number
  dueDate: string
}

export function SavingsGoalCard({ title, current, target, percentage, dueDate }: SavingsGoalCardProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <h3 className="font-medium">{title}</h3>
        <span className="text-sm text-muted-foreground">Due: {dueDate}</span>
      </div>
      <Progress value={percentage} className="h-2" />
      <div className="flex justify-between text-sm">
        <span>${current.toLocaleString()}</span>
        <span className="text-muted-foreground">${target.toLocaleString()}</span>
      </div>
    </div>
  )
}
