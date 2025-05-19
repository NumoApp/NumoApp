"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Progress } from "@/components/ui/progress"
import { Bell, Search, Plus, PiggyBank, Calendar, DollarSign, Trash2, Edit } from "lucide-react"
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

export default function GoalsPage() {
  const [showNewGoalDialog, setShowNewGoalDialog] = useState(false)

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
              <h1 className="text-3xl font-bold tracking-tight">Savings Goals</h1>
              <p className="text-muted-foreground">Track and manage your financial goals</p>
            </div>
            <Dialog open={showNewGoalDialog} onOpenChange={setShowNewGoalDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Goal
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Goal</DialogTitle>
                  <DialogDescription>Set up a new savings goal to track your progress.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="goal-name">Goal Name</Label>
                    <Input id="goal-name" placeholder="e.g. New Car, Vacation, etc." />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="target-amount">Target Amount</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="target-amount" type="number" className="pl-8" placeholder="5000" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="current-amount">Current Amount</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="current-amount" type="number" className="pl-8" placeholder="0" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="target-date">Target Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input id="target-date" type="date" className="pl-8" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="transportation">Transportation</SelectItem>
                        <SelectItem value="housing">Housing</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="emergency">Emergency Fund</SelectItem>
                        <SelectItem value="retirement">Retirement</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowNewGoalDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setShowNewGoalDialog(false)}>Create Goal</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active Goals</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All Goals</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
                    <PiggyBank className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$24,484.00</div>
                    <p className="text-xs text-green-500">+4.3% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
                    <PiggyBank className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Out of 5 total goals</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Next Goal Due</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Aug 2023</div>
                    <p className="text-xs text-muted-foreground">Vacation: 75 days left</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Active Savings Goals</CardTitle>
                  <CardDescription>Track your progress towards financial goals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">New Car</h3>
                        <p className="text-sm text-muted-foreground">Due: Dec 2023</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Progress value={50} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>$12,500 saved</span>
                      <span className="text-muted-foreground">$25,000 goal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monthly contribution: $1,500</span>
                      <span className="text-muted-foreground">8 months left</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Vacation</h3>
                        <p className="text-sm text-muted-foreground">Due: Aug 2023</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Progress value={64} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>$3,200 saved</span>
                      <span className="text-muted-foreground">$5,000 goal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monthly contribution: $600</span>
                      <span className="text-muted-foreground">3 months left</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Emergency Fund</h3>
                        <p className="text-sm text-muted-foreground">Due: Oct 2023</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Progress value={87.5} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>$8,750 saved</span>
                      <span className="text-muted-foreground">$10,000 goal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Monthly contribution: $500</span>
                      <span className="text-muted-foreground">2.5 months left</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Goals</CardTitle>
                  <CardDescription>Goals you've successfully achieved</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">New Laptop</h3>
                        <p className="text-sm text-muted-foreground">Completed: Mar 2023</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Progress value={100} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>$2,000 saved</span>
                      <span className="text-muted-foreground">$2,000 goal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-green-500">Completed 2 weeks early!</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Home Renovation</h3>
                        <p className="text-sm text-muted-foreground">Completed: Jan 2023</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Progress value={100} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>$15,000 saved</span>
                      <span className="text-muted-foreground">$15,000 goal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-green-500">Completed on time!</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Goals</CardTitle>
                  <CardDescription>Overview of all your financial goals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-6 gap-4 p-4 text-sm font-medium">
                      <div className="col-span-2">Goal</div>
                      <div className="text-right">Target</div>
                      <div className="text-right">Progress</div>
                      <div className="text-right">Due Date</div>
                      <div className="text-right">Status</div>
                    </div>

                    <div className="divide-y">
                      <div className="grid grid-cols-6 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">New Car</div>
                          <div className="text-xs text-muted-foreground">Transportation</div>
                        </div>
                        <div className="text-right">$25,000</div>
                        <div className="text-right">50%</div>
                        <div className="text-right">Dec 2023</div>
                        <div className="text-right text-amber-500">In Progress</div>
                      </div>

                      <div className="grid grid-cols-6 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Vacation</div>
                          <div className="text-xs text-muted-foreground">Travel</div>
                        </div>
                        <div className="text-right">$5,000</div>
                        <div className="text-right">64%</div>
                        <div className="text-right">Aug 2023</div>
                        <div className="text-right text-amber-500">In Progress</div>
                      </div>

                      <div className="grid grid-cols-6 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Emergency Fund</div>
                          <div className="text-xs text-muted-foreground">Emergency</div>
                        </div>
                        <div className="text-right">$10,000</div>
                        <div className="text-right">87.5%</div>
                        <div className="text-right">Oct 2023</div>
                        <div className="text-right text-amber-500">In Progress</div>
                      </div>

                      <div className="grid grid-cols-6 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">New Laptop</div>
                          <div className="text-xs text-muted-foreground">Technology</div>
                        </div>
                        <div className="text-right">$2,000</div>
                        <div className="text-right">100%</div>
                        <div className="text-right">Mar 2023</div>
                        <div className="text-right text-green-500">Completed</div>
                      </div>

                      <div className="grid grid-cols-6 gap-4 p-4 hover:bg-muted/50">
                        <div className="col-span-2">
                          <div className="font-medium">Home Renovation</div>
                          <div className="text-xs text-muted-foreground">Housing</div>
                        </div>
                        <div className="text-right">$15,000</div>
                        <div className="text-right">100%</div>
                        <div className="text-right">Jan 2023</div>
                        <div className="text-right text-green-500">Completed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
