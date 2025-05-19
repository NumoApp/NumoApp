import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">
        FinanceHub
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link href="/stocks" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Stocks
      </Link>
      <Link href="/accounts" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Accounts
      </Link>
      <Link href="/goals" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Goals
      </Link>
      <Link
        href="/community"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Community
      </Link>
    </nav>
  )
}
