"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { StockChart } from "@/components/stock-chart"
import { Bell, Search, Edit, Share2, Users, TrendingUp, PiggyBank, Shield } from "lucide-react"

export default function ProfilePage() {
  const [isPublic, setIsPublic] = useState(true)

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
          <div className="relative h-40 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-16">
            <div className="absolute -bottom-12 left-8 flex items-end space-x-4">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="@alex" />
                <AvatarFallback>AL</AvatarFallback>
              </Avatar>
              <div className="mb-2">
                <h1 className="text-2xl font-bold">Alex Lee</h1>
                <p className="text-muted-foreground">@alexlee</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button variant="outline" size="sm" className="bg-background">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" className="bg-background">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Visibility</CardTitle>
                  <CardDescription>Control who can see your financial data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="public-profile">Public Profile</Label>
                      <p className="text-sm text-muted-foreground">Allow others to view your profile</p>
                    </div>
                    <Switch id="public-profile" checked={isPublic} onCheckedChange={setIsPublic} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-stocks">Show Stock Holdings</Label>
                      <p className="text-sm text-muted-foreground">Display your stock portfolio</p>
                    </div>
                    <Switch id="show-stocks" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-returns">Show Returns</Label>
                      <p className="text-sm text-muted-foreground">Display your investment returns</p>
                    </div>
                    <Switch id="show-returns" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-goals">Show Savings Goals</Label>
                      <p className="text-sm text-muted-foreground">Display your financial goals</p>
                    </div>
                    <Switch id="show-goals" defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-muted-foreground">Bio</h3>
                    <p>Tech enthusiast and long-term investor focused on growth stocks and dividend income.</p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-muted-foreground">Investment Style</h3>
                    <p>Growth & Value</p>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-muted-foreground">Member Since</h3>
                    <p>January 2022</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Network</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span>Followers</span>
                    </div>
                    <span className="font-medium">243</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span>Following</span>
                    </div>
                    <span className="font-medium">156</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Connections
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="md:col-span-2 space-y-6">
              <Tabs defaultValue="portfolio" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="goals">Goals</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>

                <TabsContent value="portfolio" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Investment Performance</CardTitle>
                      <CardDescription>Your stock portfolio performance over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <StockChart />
                    </CardContent>
                  </Card>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Top Holdings</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">AAPL</div>
                            <div className="text-green-500">+23.5%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">MSFT</div>
                            <div className="text-green-500">+18.2%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">GOOGL</div>
                            <div className="text-green-500">+15.7%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">AMZN</div>
                            <div className="text-green-500">+12.3%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">TSLA</div>
                            <div className="text-red-500">-5.8%</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Portfolio Allocation</CardTitle>
                        <PiggyBank className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Technology</div>
                            <div>45%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Healthcare</div>
                            <div>20%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Consumer Cyclical</div>
                            <div>15%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Financial Services</div>
                            <div>12%</div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-medium">Other</div>
                            <div>8%</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="goals" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Savings Goals</CardTitle>
                      <CardDescription>Track your progress towards financial goals</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <h3 className="font-medium">New Car</h3>
                          <span className="text-sm text-muted-foreground">Due: Dec 2023</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-full w-[50%] rounded-full bg-blue-500"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>$12,500</span>
                          <span className="text-muted-foreground">$25,000</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <h3 className="font-medium">Vacation</h3>
                          <span className="text-sm text-muted-foreground">Due: Aug 2023</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-full w-[64%] rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>$3,200</span>
                          <span className="text-muted-foreground">$5,000</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <h3 className="font-medium">Emergency Fund</h3>
                          <span className="text-sm text-muted-foreground">Due: Oct 2023</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-full w-[87%] rounded-full bg-purple-500"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>$8,750</span>
                          <span className="text-muted-foreground">$10,000</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Add New Goal</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="activity" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your latest financial transactions and updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="flex">
                          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            <TrendingUp className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Purchased 5 shares of AAPL</p>
                            <p className="text-sm text-muted-foreground">May 15, 2023 at 10:30 AM</p>
                          </div>
                          <div className="ml-auto font-medium">$875.45</div>
                        </div>

                        <div className="flex">
                          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            <PiggyBank className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Added funds to Vacation goal</p>
                            <p className="text-sm text-muted-foreground">May 12, 2023 at 3:45 PM</p>
                          </div>
                          <div className="ml-auto font-medium">$500.00</div>
                        </div>

                        <div className="flex">
                          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            <Shield className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Updated profile privacy settings</p>
                            <p className="text-sm text-muted-foreground">May 10, 2023 at 5:20 PM</p>
                          </div>
                          <div className="ml-auto font-medium">-</div>
                        </div>

                        <div className="flex">
                          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            <TrendingUp className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Sold 10 shares of TSLA</p>
                            <p className="text-sm text-muted-foreground">May 8, 2023 at 11:15 AM</p>
                          </div>
                          <div className="ml-auto font-medium">$1,983.20</div>
                        </div>

                        <div className="flex">
                          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                            <Users className="h-5 w-5" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Followed 3 new investors</p>
                            <p className="text-sm text-muted-foreground">May 5, 2023 at 2:30 PM</p>
                          </div>
                          <div className="ml-auto font-medium">-</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
