import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, PiggyBank, Users, ChevronRight, Bell, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StockChart } from "@/components/stock-chart"
import { SavingsGoalCard } from "@/components/savings-goal-card"
import { BankAccountCard } from "@/components/bank-account-card"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-[200px] rounded-md border border-input bg-background px-3 py-2 pl-8 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Alex! Here's an overview of your finances.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-green-500">+2.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
                <PiggyBank className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,234.00</div>
                <p className="text-xs text-green-500">+4.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Stock Performance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+15.3%</div>
                <p className="text-xs text-green-500">+2.1% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profile Followers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">243</div>
                <p className="text-xs text-green-500">+12 new this week</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Stock Portfolio</CardTitle>
                <CardDescription>Your investment performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <StockChart />
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Link href="/stocks" className="flex items-center text-sm text-blue-500 hover:underline">
                  View all stocks
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Savings Goals</CardTitle>
                <CardDescription>Track your progress towards financial goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <SavingsGoalCard title="New Car" current={12500} target={25000} percentage={50} dueDate="Dec 2023" />
                <SavingsGoalCard title="Vacation" current={3200} target={5000} percentage={64} dueDate="Aug 2023" />
                <SavingsGoalCard
                  title="Emergency Fund"
                  current={8750}
                  target={10000}
                  percentage={87.5}
                  dueDate="Oct 2023"
                />
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Link href="/goals" className="flex items-center text-sm text-blue-500 hover:underline">
                  Manage all goals
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Bank Accounts</CardTitle>
                <CardDescription>Your linked financial accounts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <BankAccountCard
                  bankName="Chase Bank"
                  accountType="Checking"
                  accountNumber="****4567"
                  balance={3245.67}
                />
                <BankAccountCard
                  bankName="Bank of America"
                  accountType="Savings"
                  accountNumber="****8901"
                  balance={12234.0}
                />
                <BankAccountCard
                  bankName="Wells Fargo"
                  accountType="Investment"
                  accountNumber="****2345"
                  balance={29752.22}
                />
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Link href="/accounts" className="flex items-center text-sm text-blue-500 hover:underline">
                  Manage accounts
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Profiles</CardTitle>
                <CardDescription>Discover investors to follow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Jane Doe</p>
                    <p className="text-xs text-muted-foreground">Tech Investor • +32% YTD</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Mike Smith</p>
                    <p className="text-xs text-muted-foreground">Dividend Expert • +18% YTD</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>LJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Lisa Johnson</p>
                    <p className="text-xs text-muted-foreground">ETF Specialist • +24% YTD</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Link href="/community" className="flex items-center text-sm text-blue-500 hover:underline">
                  Discover more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
