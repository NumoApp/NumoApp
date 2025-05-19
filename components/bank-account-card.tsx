import { CreditCard, ExternalLink } from "lucide-react"

interface BankAccountCardProps {
  bankName: string
  accountType: string
  accountNumber: string
  balance: number
}

export function BankAccountCard({ bankName, accountType, accountNumber, balance }: BankAccountCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="bg-muted p-2 rounded-full">
          <CreditCard className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium">{bankName}</p>
          <p className="text-sm text-muted-foreground">
            {accountType} • {accountNumber}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="font-medium">${balance.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Available</p>
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  )
}
