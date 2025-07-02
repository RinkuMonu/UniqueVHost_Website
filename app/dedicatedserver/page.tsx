"use client"

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

export default function DedicatedServersPage() {
  return (
    <div className="min-h-screen bg-[#FFF5EF] text-[#4C5671]">
      {/* Hero Section */}
      <div className="bg-[#FFF8F4] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#001233] mb-6">High-Performance Dedicated Servers</h1>
          <p className="text-xl text-[#313149] max-w-4xl mx-auto mb-8">
            Experience unparalleled speed and reliability with our dedicated servers, designed for demanding workloads
            and global reach. Deploy in minutes with full root access.
          </p>
          <Button size="lg" className="bg-[#FD5D07] hover:bg-[#FD5D07]/90 text-[#fff] shadow-lg">
            Get Started
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 bg-[#fff]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#001233]">
                  <MapPin className="w-5 h-5 text-[#FD5D07]" />
                  Server Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Region Filters */}
                <div>
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">Regions</Label>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="us-east"
                        defaultChecked
                        className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                      />
                      US East (N. Virginia)
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="us-west"
                        className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                      />
                      US West (Oregon)
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="eu-west"
                        className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                      />
                      EU West (Ireland)
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="asia-pacific"
                        className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                      />
                      Asia Pacific (Singapore)
                    </Label>
                    <Label className="flex items-center gap-2 font-normal">
                      <Checkbox
                        id="canada"
                        className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                      />
                      Canada (Central)
                    </Label>
                  </div>
                </div>
                <Separator className="bg-[#4C5671]/20" />
                {/* Performance Filters */}
                <div>
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">Performance</Label>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-[#313149] mb-2 block">CPU Cores</Label>
                      <Slider
                        defaultValue={[2]}
                        max={32}
                        min={1}
                        step={1}
                        className="w-full [&>span:first-child]:bg-[#FD5D07] [&>span:first-child]:text-[#fff]"
                      />
                      <div className="flex justify-between text-xs text-[#4C5671] mt-1">
                        <span>1</span>
                        <span>32+</span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-[#313149] mb-2 block">RAM (GB)</Label>
                      <Slider
                        defaultValue={[4]}
                        max={128}
                        min={1}
                        step={1}
                        className="w-full [&>span:first-child]:bg-[#FD5D07] [&>span:first-child]:text-[#fff]"
                      />
                      <div className="flex justify-between text-xs text-[#4C5671] mt-1">
                        <span>1</span>
                        <span>128+</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Separator className="bg-[#4C5671]/20" />
                {/* Price Range */}
                <div>
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">Monthly Budget</Label>
                  <Select defaultValue="all">
                    <SelectTrigger className="text-[#4C5671] focus:ring-[#FD5D07]">
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
              <Card className="relative hover:shadow-lg transition-shadow bg-[#fff]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-[#001233]">Dedicated Basic</CardTitle>
                      <CardDescription className="text-[#313149]">
                        Ideal for personal projects and small applications
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Specs */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">1 vCPU</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MemoryStick className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">2 GB RAM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">25 GB SSD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">1 TB Transfer</span>
                    </div>
                  </div>
                  <Separator className="bg-[#4C5671]/20" />
                  {/* OS Options */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block text-[#313149]">Operating System</Label>
                    <RadioGroup defaultValue="ubuntu" className="space-y-1">
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="ubuntu"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        Ubuntu 22.04 LTS
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="centos"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        CentOS 8
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="debian"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        Debian 11
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="windows"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        Windows Server 2022
                      </Label>
                    </RadioGroup>
                  </div>
                  {/* Pricing */}
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-[#001233]">$10</div>
                    <div className="text-sm text-[#313149]">/month</div>
                    <div className="text-xs text-[#4C5671] mt-1">Billed monthly</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#FD5D07] hover:bg-[#FD5D07]/90 text-[#fff]" size="lg">
                    <Zap className="w-4 h-4 mr-2" />
                    Deploy Now
                  </Button>
                </CardFooter>
              </Card>
              {/* Standard Plan */}
              <Card className="relative hover:shadow-lg transition-shadow border-[#FD5D07] bg-[#FD5D07]/5">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#FD5D07] hover:bg-[#FD5D07]/90 text-[#fff]">Recommended</Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-[#001233]">Dedicated Standard</CardTitle>
                      <CardDescription className="text-[#313149]">
                        Balanced performance for growing applications
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Specs */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">2 vCPUs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MemoryStick className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">4 GB RAM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">50 GB SSD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">2 TB Transfer</span>
                    </div>
                  </div>
                  <Separator className="bg-[#4C5671]/20" />
                  {/* OS Options */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block text-[#313149]">Operating System</Label>
                    <RadioGroup defaultValue="ubuntu" className="space-y-1">
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="ubuntu"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        Ubuntu 22.04 LTS
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="centos"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        CentOS 8
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="debian"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        Debian 11
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="windows"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        Windows Server 2022
                      </Label>
                    </RadioGroup>
                  </div>
                  {/* Pricing */}
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-[#001233]">$20</div>
                    <div className="text-sm text-[#313149]">/month</div>
                    <div className="text-xs text-[#4C5671] mt-1">Billed monthly</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#FD5D07] hover:bg-[#FD5D07]/90 text-[#fff]" size="lg">
                    <Zap className="w-4 h-4 mr-2" />
                    Deploy Now
                  </Button>
                </CardFooter>
              </Card>
              {/* Premium Plan */}
              <Card className="relative hover:shadow-lg transition-shadow bg-[#fff]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-[#001233]">Dedicated Premium</CardTitle>
                      <CardDescription className="text-[#313149]">
                        Optimized for high-traffic and resource-intensive applications
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Specs */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">4 vCPUs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MemoryStick className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">8 GB RAM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">100 GB SSD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#FD5D07]" />
                      <span className="text-sm">4 TB Transfer</span>
                    </div>
                  </div>
                  <Separator className="bg-[#4C5671]/20" />
                  {/* OS Options */}
                  <div>
                    <Label className="text-sm font-medium mb-2 block text-[#313149]">Operating System</Label>
                    <RadioGroup defaultValue="ubuntu" className="space-y-1">
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="ubuntu"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        Ubuntu 22.04 LTS
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="centos"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        CentOS 8
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="debian"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        Debian 11
                      </Label>
                      <Label className="flex items-center gap-2 font-normal text-sm">
                        <RadioGroupItem
                          value="windows"
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                        />
                        Windows Server 2022
                      </Label>
                    </RadioGroup>
                  </div>
                  {/* Pricing */}
                  <div className="text-center py-4">
                    <div className="text-3xl font-bold text-[#001233]">$40</div>
                    <div className="text-sm text-[#313149]">/month</div>
                    <div className="text-xs text-[#4C5671] mt-1">Billed monthly</div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#FD5D07] hover:bg-[#FD5D07]/90 text-[#fff]" size="lg">
                    <Zap className="w-4 h-4 mr-2" />
                    Deploy Now
                  </Button>
                </CardFooter>
              </Card>
              {/* Custom Plan */}
              <Card className="relative hover:shadow-lg transition-shadow border-dashed border-2 border-[#4C5671]/50 bg-[#fff]">
                <CardHeader>
                  <div className="text-center">
                    <CardTitle className="text-xl text-[#001233]">Dedicated Custom</CardTitle>
                    <CardDescription className="text-[#313149]">Need something specific? Let's talk</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-8">
                    <Shield className="w-12 h-12 text-[#4C5671] mx-auto mb-4" />
                    <p className="text-sm text-[#313149] mb-4">
                      Configure your perfect dedicated server with custom CPU, RAM, storage, and network requirements.
                    </p>
                    <ul className="text-xs text-[#4C5671] space-y-1">
                      <li>{"• Up to 64 vCPUs"}</li>
                      <li>{"• Up to 512 GB RAM"}</li>
                      <li>{"• Up to 2 TB NVMe SSD"}</li>
                      <li>{"• Dedicated IP & Private Network"}</li>
                      <li>{"• 24/7 Priority Support"}</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-[#FD5D07] text-[#FD5D07] hover:bg-[#FD5D07] hover:text-[#fff]"
                    size="lg"
                  >
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
            {/* Features Section */}
            <Card className="mt-8 bg-[#fff]">
              <CardHeader>
                <CardTitle className="text-[#001233]">Why Choose Our Dedicated Servers?</CardTitle>
                <CardDescription className="text-[#313149]">
                  Robust infrastructure with dedicated resources and expert support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FD5D07]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Cpu className="w-6 h-6 text-[#FD5D07]" />
                    </div>
                    <h3 className="font-semibold mb-2 text-[#001233]">Blazing Fast SSDs</h3>
                    <p className="text-sm text-[#313149]">
                      Experience lightning-fast performance with NVMe SSD storage.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#001233]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <MemoryStick className="w-6 h-6 text-[#001233]" />
                    </div>
                    <h3 className="font-semibold mb-2 text-[#001233]">Dedicated Resources</h3>
                    <p className="text-sm text-[#313149]">
                      Guaranteed CPU, RAM, and storage for consistent performance.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FFC107]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-[#FFC107]" />
                    </div>
                    <h3 className="font-semibold mb-2 text-[#001233]">Global Data Centers</h3>
                    <p className="text-sm text-[#313149]">
                      Deploy your VPS in multiple locations worldwide for low latency.
                    </p>
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
