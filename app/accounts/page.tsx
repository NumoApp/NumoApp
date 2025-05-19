"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Bell, Search, Plus, CreditCard, Building, ExternalLink, Trash2, Eye, EyeOff } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AccountsPage() {
  const [showNewAccountDialog, setShowNewAccountDialog] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Bank Accounts</h1>
              <p className="text-muted-foreground">Manage your linked financial accounts</p>
            </div>
            <Dialog open={showNewAccountDialog} onOpenChange={setShowNewAccountDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Link Account
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Link Bank Account</DialogTitle>
                  <DialogDescription>Connect your bank account to track your finances.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="bank-name">Bank Name</Label>
                    <Select>
                      <SelectTrigger id="bank-name">
                        <SelectValue placeholder="Select a bank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chase">Chase Bank</SelectItem>
                        <SelectItem value="bofa">Bank of America</SelectItem>
                        <SelectItem value="wells">Wells Fargo</SelectItem>
                        <SelectItem value="citi">Citibank</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="account-type">Account Type</Label>
                    <Select>
                      <SelectTrigger id="account-type">
                        <SelectValue placeholder="Select account type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="checking">Checking</SelectItem>
                        <SelectItem value="savings">Savings</SelectItem>
                        <SelectItem value="investment">Investment</SelectItem>
                        <SelectItem value="credit">Credit Card</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="Your bank username" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input id="password" type={showPassword ? "text" : "password"} placeholder="Your bank password" />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Your credentials are encrypted and securely stored.</p>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowNewAccountDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setShowNewAccountDialog(false)}>Link Account</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Tabs defaultValue="accounts" className="space-y-4">
            <TabsList>
              <TabsTrigger value="accounts">All Accounts</TabsTrigger>
              <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            </TabsList>

            <TabsContent value="accounts" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    <Building className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-green-500">+2.5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Linked Accounts</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Across 3 financial institutions</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Today</div>
                    <p className="text-xs text-muted-foreground">10:30 AM</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Linked Accounts</CardTitle>
                  <CardDescription>Your connected financial accounts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-muted p-2 rounded-full">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Chase Bank</p>
                        <p className="text-sm text-muted-foreground">Checking • ****4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-medium">$3,245.67</p>
                        <p className="text-sm text-muted-foreground">Available</p>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-muted p-2 rounded-full">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Bank of America</p>
                        <p className="text-sm text-muted-foreground">Savings • ****8901</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-medium">$12,234.00</p>
                        <p className="text-sm text-muted-foreground">Available</p>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-muted p-2 rounded-full">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Wells Fargo</p>
                        <p className="text-sm text-muted-foreground">Investment • ****2345</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-medium">$29,752.22</p>
                        <p className="text-sm text-muted-foreground">Available</p>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={() => setShowNewAccountDialog(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Link Another Account
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest financial activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium">
                      <div className="col-span-2">Description</div>
                      <div>Account</div>
                      <div className="text-right">Date</div>
                      <div className="text-right">Amount</div>
                    </div>

                    <div className="divide-y">
                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Grocery Store</div>
                          <div className="text-xs text-muted-foreground">Food & Dining</div>
                        </div>
                        <div>Chase (Checking)</div>
                        <div className="text-right">May 18, 2023</div>
                        <div className="text-right text-red-500">-$85.43</div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Paycheck</div>
                          <div className="text-xs text-muted-foreground">Income</div>
                        </div>
                        <div>Chase (Checking)</div>
                        <div className="text-right">May 15, 2023</div>
                        <div className="text-right text-green-500">+$2,450.00</div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Transfer to Savings</div>
                          <div className="text-xs text-muted-foreground">Transfer</div>
                        </div>
                        <div>Chase (Checking)</div>
                        <div className="text-right">May 15, 2023</div>
                        <div className="text-right text-red-500">-$500.00</div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Transfer from Checking</div>
                          <div className="text-xs text-muted-foreground">Transfer</div>
                        </div>
                        <div>BoA (Savings)</div>
                        <div className="text-right">May 15, 2023</div>
                        <div className="text-right text-green-500">+$500.00</div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Restaurant</div>
                          <div className="text-xs text-muted-foreground">Food & Dining</div>
                        </div>
                        <div>Chase (Checking)</div>
                        <div className="text-right">May 14, 2023</div>
                        <div className="text-right text-red-500">-$65.20</div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Gas Station</div>
                          <div className="text-xs text-muted-foreground">Transportation</div>
                        </div>
                        <div>Chase (Checking)</div>
                        <div className="text-right">May 12, 2023</div>
                        <div className="text-right text-red-500">-$45.67</div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Dividend Payment</div>
                          <div className="text-xs text-muted-foreground">Investment</div>
                        </div>
                        <div>Wells Fargo (Investment)</div>
                        <div className="text-right">May 10, 2023</div>
                        <div className="text-right text-green-500">+$123.45</div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Online Shopping</div>
                          <div className="text-xs text-muted-foreground">Shopping</div>
                        </div>
                        <div>Chase (Checking)</div>
                        <div className="text-right">May 8, 2023</div>
                        <div className="text-right text-red-500">-$98.76</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Transactions
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
