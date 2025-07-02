import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { MapPin, Cpu, HardDrive, MemoryStick, Globe, Shield, Zap } from "lucide-react"

export default function CloudServersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Cloud Servers</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deploy high-performance cloud servers in minutes. Choose from our global network of data centers with
            enterprise-grade infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Server Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Region Filters */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Regions</Label>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="us-east" defaultChecked />
                      US East (N. Virginia)
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="us-west" />
                      US West (Oregon)
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="eu-west" />
                      EU West (Ireland)
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="asia-pacific" />
                      Asia Pacific (Singapore)
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox id="canada" />
                      Canada (Central)
                    </Label>
                  </div>
                </div>

                <Separator />

                {/* Performance Filters */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Performance</Label>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-slate-600 mb-2 block">CPU Cores</Label>
                      <Slider defaultValue={[2]} max={32} min={1} step={1} className="w-full" />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>1</span>
                        <span>32+</span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-600 mb-2 block">RAM (GB)</Label>
                      <Slider defaultValue={[4]} max={128} min={1} step={1} className="w-full" />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>1</span>
                        <span>128+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Price Range */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Monthly Budget</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under-50">Under $50</SelectItem>
                      <SelectItem value="50-100">$50 - $100</SelectItem>
                      <SelectItem value="100-200">$100 - $200</SelectItem>
                      <SelectItem value="over-200">Over $200</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Server Plans */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Basic Plan */}
              <Card className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Basic</CardTitle>
                      <CardDescription>Perfect for development and testing</CardDescription>
                    </div>
                    <Badge variant="secondary">Popular</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Specs */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">1 vCPU</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MemoryStick className="w-4 h-4 text-green-600" />
                      <span className="text-sm">2 GB RAM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">25 GB SSD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">1 TB Transfer</span>
                    </div>
                  </div>

                  <Separator />

                  {/* OS Options */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Operating System</Label>
                    <RadioGroup defaultValue="ubuntu" className="space-y-1">
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="ubuntu" />
                        Ubuntu 22.04 LTS
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="centos" />
                        CentOS 8
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="debian" />
                        Debian 11
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="windows" />
                        Windows Server 2022
                      </Label>
                    </RadioGroup>
                  </div>

                  {/* Pricing */}
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-slate-900">$12</div>
                    <div className="text-sm text-slate-600">/month</div>
                    <div className="text-xs text-slate-500 mt-1">Billed monthly</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Zap className="w-4 h-4 mr-2" />
                    Deploy Now
                  </Button>
                </CardFooter>
              </Card>

              {/* Standard Plan */}
              <Card className="relative hover:shadow-lg transition-shadow border-blue-200 bg-blue-50/30">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 hover:bg-blue-700">Recommended</Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Standard</CardTitle>
                      <CardDescription>Great for small to medium applications</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Specs */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">2 vCPUs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MemoryStick className="w-4 h-4 text-green-600" />
                      <span className="text-sm">4 GB RAM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">50 GB SSD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">2 TB Transfer</span>
                    </div>
                  </div>

                  <Separator />

                  {/* OS Options */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Operating System</Label>
                    <RadioGroup defaultValue="ubuntu" className="space-y-1">
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="ubuntu" />
                        Ubuntu 22.04 LTS
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="centos" />
                        CentOS 8
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="debian" />
                        Debian 11
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="windows" />
                        Windows Server 2022
                      </Label>
                    </RadioGroup>
                  </div>

                  {/* Pricing */}
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-slate-900">$24</div>
                    <div className="text-sm text-slate-600">/month</div>
                    <div className="text-xs text-slate-500 mt-1">Billed monthly</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Zap className="w-4 h-4 mr-2" />
                    Deploy Now
                  </Button>
                </CardFooter>
              </Card>

              {/* Premium Plan */}
              <Card className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Premium</CardTitle>
                      <CardDescription>High-performance for production workloads</CardDescription>
                    </div>
                    <Badge variant="outline">Enterprise</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Specs */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">4 vCPUs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MemoryStick className="w-4 h-4 text-green-600" />
                      <span className="text-sm">8 GB RAM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">100 GB SSD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">4 TB Transfer</span>
                    </div>
                  </div>

                  <Separator />

                  {/* OS Options */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Operating System</Label>
                    <RadioGroup defaultValue="ubuntu" className="space-y-1">
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="ubuntu" />
                        Ubuntu 22.04 LTS
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="centos" />
                        CentOS 8
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="debian" />
                        Debian 11
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="windows" />
                        Windows Server 2022
                      </Label>
                    </RadioGroup>
                  </div>

                  {/* Pricing */}
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-slate-900">$48</div>
                    <div className="text-sm text-slate-600">/month</div>
                    <div className="text-xs text-slate-500 mt-1">Billed monthly</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Zap className="w-4 h-4 mr-2" />
                    Deploy Now
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Enterprise</CardTitle>
                      <CardDescription>Maximum performance and resources</CardDescription>
                    </div>
                    <Badge variant="secondary">High Memory</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Specs */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">8 vCPUs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MemoryStick className="w-4 h-4 text-green-600" />
                      <span className="text-sm">16 GB RAM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">200 GB SSD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">8 TB Transfer</span>
                    </div>
                  </div>

                  <Separator />

                  {/* OS Options */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block">Operating System</Label>
                    <RadioGroup defaultValue="ubuntu" className="space-y-1">
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="ubuntu" />
                        Ubuntu 22.04 LTS
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="centos" />
                        CentOS 8
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="debian" />
                        Debian 11
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem value="windows" />
                        Windows Server 2022
                      </Label>
                    </RadioGroup>
                  </div>

                  {/* Pricing */}
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-slate-900">$96</div>
                    <div className="text-sm text-slate-600">/month</div>
                    <div className="text-xs text-slate-500 mt-1">Billed monthly</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Zap className="w-4 h-4 mr-2" />
                    Deploy Now
                  </Button>
                </CardFooter>
              </Card>

              {/* Custom Plan */}
              <Card className="relative hover:shadow-lg transition-shadow border-dashed border-2">
                <CardHeader>
                  <div className="text-center">
                    <CardTitle className="text-xl">Custom</CardTitle>
                    <CardDescription>Need something specific? Let's talk</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-8">
                    <Shield className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-sm text-slate-600 mb-4">
                      Configure your perfect server with custom CPU, RAM, storage, and network requirements.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1">
                      <li>• Up to 64 vCPUs</li>
                      <li>• Up to 512 GB RAM</li>
                      <li>• Up to 2 TB NVMe SSD</li>
                      <li>• Dedicated IP & Private Network</li>
                      <li>• 24/7 Priority Support</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Features Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Why Choose Our Cloud Servers?</CardTitle>
                <CardDescription>Enterprise-grade infrastructure with unmatched reliability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">99.9% Uptime SLA</h3>
                    <p className="text-sm text-slate-600">Guaranteed uptime with automatic failover and redundancy</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-sm text-slate-600">DDoS protection, firewalls, and encrypted storage</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Global Network</h3>
                    <p className="text-sm text-slate-600">Deploy in 15+ regions worldwide with low latency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}