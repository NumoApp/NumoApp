import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { StockChart } from "@/components/stock-chart"
import { Bell, Search, Filter, ArrowUpRight, ArrowDownRight, Eye, EyeOff, Plus } from "lucide-react"

export default function StocksPage() {
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
                placeholder="Search stocks..."
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
              <h1 className="text-3xl font-bold tracking-tight">Stock Portfolio</h1>
              <p className="text-muted-foreground">Manage and track your investments</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Stock
              </Button>
            </div>
          </div>

          <Tabs defaultValue="portfolio" className="space-y-4">
            <TabsList>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
              <TabsTrigger value="discover">Discover</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-green-500">+2.5% ($1,123.45)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Day Change</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-500">+$523.14</div>
                    <p className="text-xs text-green-500">+1.2% today</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Return</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-500">+$6,789.32</div>
                    <p className="text-xs text-green-500">+15.3% all time</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Dividend Yield</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2.4%</div>
                    <p className="text-xs text-muted-foreground">$1,085.64 annually</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Performance</CardTitle>
                  <CardDescription>Your investment growth over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <StockChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Stocks</CardTitle>
                  <CardDescription>Holdings and performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium">
                        <div>Stock</div>
                        <div className="text-right">Shares</div>
                        <div className="text-right">Avg. Cost</div>
                        <div className="text-right">Current Price</div>
                        <div className="text-right">Total Value</div>
                      </div>

                      <div className="divide-y">
                        <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">AAPL</div>
                            <div className="text-xs text-muted-foreground">Apple Inc.</div>
                          </div>
                          <div className="text-right">25</div>
                          <div className="text-right">$145.32</div>
                          <div className="flex items-center justify-end gap-2">
                            <div>$178.45</div>
                            <div className="flex items-center text-xs text-green-500">
                              <ArrowUpRight className="h-3 w-3" />
                              2.3%
                            </div>
                          </div>
                          <div className="text-right">$4,461.25</div>
                        </div>

                        <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">MSFT</div>
                            <div className="text-xs text-muted-foreground">Microsoft Corp.</div>
                          </div>
                          <div className="text-right">15</div>
                          <div className="text-right">$290.12</div>
                          <div className="flex items-center justify-end gap-2">
                            <div>$325.78</div>
                            <div className="flex items-center text-xs text-green-500">
                              <ArrowUpRight className="h-3 w-3" />
                              1.8%
                            </div>
                          </div>
                          <div className="text-right">$4,886.70</div>
                        </div>

                        <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">TSLA</div>
                            <div className="text-xs text-muted-foreground">Tesla Inc.</div>
                          </div>
                          <div className="text-right">10</div>
                          <div className="text-right">$210.45</div>
                          <div className="flex items-center justify-end gap-2">
                            <div>$198.32</div>
                            <div className="flex items-center text-xs text-red-500">
                              <ArrowDownRight className="h-3 w-3" />
                              1.2%
                            </div>
                          </div>
                          <div className="text-right">$1,983.20</div>
                        </div>

                        <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">AMZN</div>
                            <div className="text-xs text-muted-foreground">Amazon.com Inc.</div>
                          </div>
                          <div className="text-right">8</div>
                          <div className="text-right">$135.67</div>
                          <div className="flex items-center justify-end gap-2">
                            <div>$142.35</div>
                            <div className="flex items-center text-xs text-green-500">
                              <ArrowUpRight className="h-3 w-3" />
                              0.9%
                            </div>
                          </div>
                          <div className="text-right">$1,138.80</div>
                        </div>

                        <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">GOOGL</div>
                            <div className="text-xs text-muted-foreground">Alphabet Inc.</div>
                          </div>
                          <div className="text-right">12</div>
                          <div className="text-right">$125.32</div>
                          <div className="flex items-center justify-end gap-2">
                            <div>$132.45</div>
                            <div className="flex items-center text-xs text-green-500">
                              <ArrowUpRight className="h-3 w-3" />
                              1.5%
                            </div>
                          </div>
                          <div className="text-right">$1,589.40</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="watchlist" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Watchlist</CardTitle>
                    <CardDescription>Stocks you're monitoring</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add to Watchlist
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium">
                      <div>Stock</div>
                      <div className="text-right">Price</div>
                      <div className="text-right">Change</div>
                      <div className="text-right">Market Cap</div>
                      <div className="text-right">Actions</div>
                    </div>

                    <div className="divide-y">
                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">NFLX</div>
                          <div className="text-xs text-muted-foreground">Netflix Inc.</div>
                        </div>
                        <div className="text-right">$425.67</div>
                        <div className="flex items-center justify-end gap-2">
                          <div className="flex items-center text-xs text-green-500">
                            <ArrowUpRight className="h-3 w-3" />
                            3.2%
                          </div>
                        </div>
                        <div className="text-right">$189.2B</div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">DIS</div>
                          <div className="text-xs text-muted-foreground">Walt Disney Co.</div>
                        </div>
                        <div className="text-right">$98.45</div>
                        <div className="flex items-center justify-end gap-2">
                          <div className="flex items-center text-xs text-red-500">
                            <ArrowDownRight className="h-3 w-3" />
                            1.5%
                          </div>
                        </div>
                        <div className="text-right">$180.3B</div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <EyeOff className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-4 p-4 hover:bg-muted/50">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">NVDA</div>
                          <div className="text-xs text-muted-foreground">NVIDIA Corp.</div>
                        </div>
                        <div className="text-right">$245.32</div>
                        <div className="flex items-center justify-end gap-2">
                          <div className="flex items-center text-xs text-green-500">
                            <ArrowUpRight className="h-3 w-3" />
                            4.2%
                          </div>
                        </div>
                        <div className="text-right">$605.8B</div>
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discover" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Discover Stocks</CardTitle>
                  <CardDescription>Find new investment opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Top Gainers</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">PLTR</div>
                            <div className="flex items-center text-green-500">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              8.4%
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="font-medium">AMD</div>
                            <div className="flex items-center text-green-500">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              6.2%
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="font-medium">COIN</div>
                            <div className="flex items-center text-green-500">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              5.8%
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Trending</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">AAPL</div>
                            <div className="flex items-center text-green-500">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              2.3%
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="font-medium">TSLA</div>
                            <div className="flex items-center text-red-500">
                              <ArrowDownRight className="h-3 w-3 mr-1" />
                              1.2%
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="font-medium">MSFT</div>
                            <div className="flex items-center text-green-500">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              1.8%
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Recommended</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">V</div>
                            <div className="flex items-center text-green-500">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              1.5%
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="font-medium">JNJ</div>
                            <div className="flex items-center text-green-500">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              0.8%
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="font-medium">PG</div>
                            <div className="flex items-center text-green-500">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              0.6%
                            </div>
                          </div>
                        </CardContent>
                      </Card>
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
