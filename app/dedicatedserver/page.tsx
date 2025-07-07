"use client";

import Newsletter from "@/components/newsletter";
import ProductFreture from "@/components/ProductFreture";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  MapPin,
  Cpu,
  HardDrive,
  MemoryStick,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

export default function DedicatedServersPage() {
  return (
    <div className="min-h-screen  text-[#4C5671]">
      {/* Hero Section */}
      <div className="relative bg-[#FFF8F4] py-24 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
        <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-12">
          {/* Left content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              High-Performance Dedicated Servers
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
              Experience unparalleled speed and reliability with our dedicated servers,
              designed for demanding workloads and global reach. Deploy in minutes with
              full root access.
            </p>
            <div className="inline-block relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FD5D07] to-[#FFB703] blur-xl opacity-60 transition-opacity group-hover:opacity-80 animate-pulse"></div>
              <Button
                size="lg"
                className="relative bg-[#FD5D07] hover:bg-[#FD5D07]/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center">
            <img
              src="/images/banner/banner-hero-03.webp"
              alt="Dedicated Server Illustration"
              className="w-full max-w-md rounded-xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar filters */}
          <div className="lg:col-span-1">

          </div>


          {/* Plans */}
          <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <Card className="sticky top-24 bg-white rounded-xl shadow-xl border-0 overflow-hidden transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#001233]">
                  <Globe className="w-5 h-5 text-[#FD5D07]" />
                  Server Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Regions */}
                <div>
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">Regions</Label>
                  <div className="space-y-2" style={{display:"grid"}}>
                    {["US East (N. Virginia)", "US West (Oregon)", "EU West (Ireland)", "Asia Pacific (Singapore)", "Canada (Central)"].map((region, idx) => (
                      <Label
                        key={idx}
                        className="flex items-center gap-2 font-normal text-sm"
                        style={{display:"flex"}}
                      >
                        <Checkbox className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] rounded-full" />
                        {region}
                      </Label>
                    ))}
                  </div>
                </div>

                <Separator className="bg-[#4C5671]/20" />

                {/* Performance */}
                <div>
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">Performance</Label>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-[#313149] mb-2 block">CPU Cores</Label>
                      <input
                        type="range"
                        min="1"
                        max="32"
                        defaultValue="2"
                        className="w-full accent-[#FD5D07]"
                      />
                      <div className="flex justify-between text-xs text-[#4C5671] mt-1">
                        <span>1</span>
                        <span>32+</span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-[#313149] mb-2 block">RAM (GB)</Label>
                      <input
                        type="range"
                        min="1"
                        max="128"
                        defaultValue="4"
                        className="w-full accent-[#FD5D07]"
                      />
                      <div className="flex justify-between text-xs text-[#4C5671] mt-1">
                        <span>1</span>
                        <span>128+</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-[#4C5671]/20" />

                {/* Budget */}
                <div>
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">Monthly Budget</Label>
                  <Select defaultValue="all">
                    <SelectTrigger className="text-[#4C5671] border-[#FD5D07] focus:ring-[#FD5D07]">
                      <SelectValue placeholder="Select" />
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
            {[
              {
                title: "Dedicated Basic",
                desc: "Ideal for personal projects and small applications",
                cpu: "1 vCPU",
                ram: "2 GB RAM",
                disk: "25 GB SSD",
                transfer: "1 TB Transfer",
                price: "$10",
                badge: null,
              },
              {
                title: "Dedicated Standard",
                desc: "Balanced performance for growing applications",
                cpu: "2 vCPUs",
                ram: "4 GB RAM",
                disk: "50 GB SSD",
                transfer: "2 TB Transfer",
                price: "$20",
                badge: "Recommended",
              },
              {
                title: "Dedicated Premium",
                desc: "Optimized for high-traffic and resource-intensive apps",
                cpu: "4 vCPUs",
                ram: "8 GB RAM",
                disk: "100 GB SSD",
                transfer: "4 TB Transfer",
                price: "$40",
                badge: null,
              },
              {
                title: "Dedicated Custom",
                desc: "Need something specific? Let's talk",
                custom: true,
              },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`
              relative bg-white bg-gradient-to-br from-[#fff] via-[#fdf7f1] to-[#fff8f4]
              rounded-2xl shadow-xl hover:shadow-2xl transition-all
              hover:-translate-y-2 hover:scale-[1.02] border
              ${plan.badge === "Recommended" ? "border-[#FD5D07]" : "border-gray-200"}
            `}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-pulse">
                    <Badge className="bg-[#FD5D07] text-white shadow-lg">{plan.badge}</Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-lg font-bold text-[#001233]">{plan.title}</CardTitle>
                  <CardDescription className="text-sm text-[#313149]">{plan.desc}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {!plan.custom ? (
                    <>
                      <div className="space-y-2 text-[#4C5671]">
                        <div className="flex items-center justify-start mb-3 gap-2">
                          <div className="p-2 rounded-full bg-gradient-to-tr from-[#FD5D07]/10 to-[#FD5D07]/30">
                            <Cpu className="w-4 h-4 text-[#FD5D07]" />
                          </div>
                          {plan.cpu}
                        </div>
                        <div className="flex items-center justify-start mb-3 gap-2">
                          <div className="p-2 rounded-full bg-gradient-to-tr from-[#FD5D07]/10 to-[#FD5D07]/30">
                            <MemoryStick className="w-4 h-4 text-[#FD5D07]" />
                          </div>
                          {plan.ram}
                        </div>
                        <div className="flex items-center justify-start mb-3 gap-2">
                          <div className="p-2 rounded-full bg-gradient-to-tr from-[#FD5D07]/10 to-[#FD5D07]/30">
                            <HardDrive className="w-4 h-4 text-[#FD5D07]" />
                          </div>
                          {plan.disk}
                        </div>
                        <div className="flex items-center justify-start mb-3 gap-2">
                          <div className="p-2 rounded-full bg-gradient-to-tr from-[#FD5D07]/10 to-[#FD5D07]/30">
                            <Globe className="w-4 h-4 text-[#FD5D07]" />
                          </div>
                          {plan.transfer}
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <Label className="text-sm font-medium block text-[#313149]">Operating System</Label>
                        <RadioGroup defaultValue="ubuntu" className="space-y-1 mt-3 rounded-full">
                          {["Ubuntu 22.04 LTS", "CentOS 8", "Debian 11", "Windows Server 2022"].map((os) => (
                            <Label key={os} className="flex items-center gap-2 font-normal text-sm " style={{ display: "flex" }}>
                              <RadioGroupItem value={os} />
                              {os}
                            </Label>
                          ))}
                        </RadioGroup>
                      </div>
                      <div className="text-center py-4">
                        <div className="text-2xl font-bold text-[#001233]">{plan.price}</div>
                        <div className="text-xs text-[#4C5671] mt-1">Billed monthly</div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <Shield className="w-12 h-12 text-[#4C5671] mx-auto mb-4" />
                      <p className="text-sm text-[#313149] mb-4">
                        Configure your perfect dedicated server with custom CPU, RAM, storage, and network requirements.
                      </p>
                      <ul className="text-xs text-[#4C5671] space-y-1">
                        <li>• Up to 64 vCPUs</li>
                        <li>• Up to 512 GB RAM</li>
                        <li>• Up to 2 TB NVMe SSD</li>
                        <li>• Dedicated IP & Private Network</li>
                        <li>• 24/7 Priority Support</li>
                      </ul>
                    </div>
                  )}
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full ${plan.custom ? "bg-transparent border-[#FD5D07] text-[#FD5D07] hover:bg-[#FD5D07] hover:text-white" : "bg-[#FD5D07] text-white hover:bg-[#FD5D07]/90"}`}
                    variant={plan.custom ? "outline" : "default"}
                  >
                    {plan.custom ? "Contact Sales" : <>
                      <Zap className="w-4 h-4 mr-2" />
                      Deploy Now
                    </>}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="pt-20">
          {/* Features Section */}
          <Card className="relative mt-12 bg-gradient-to-br from-[#FFF8F4] to-[#FFFFFF] rounded-2xl shadow-xl border-0 overflow-hidden">
            {/* Decorative blurred circles */}
            <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
            <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>

            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-[#001233] text-2xl md:text-3xl font-bold">
                Why Choose Our Dedicated Servers?
              </CardTitle>
              <CardDescription className="text-[#313149] text-sm md:text-base">
                Robust infrastructure with dedicated resources and expert
                support.
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: (
                      <Cpu className="w-7 h-7 text-[#FD5D07] group-hover:scale-110 transition-transform" />
                    ),
                    title: "Blazing Fast SSDs",
                    desc: "Experience lightning-fast performance with NVMe SSD storage.",
                    bg: "bg-[#FD5D07]/10",
                  },
                  {
                    icon: (
                      <MemoryStick className="w-7 h-7 text-[#001233] group-hover:scale-110 transition-transform" />
                    ),
                    title: "Dedicated Resources",
                    desc: "Guaranteed CPU, RAM, and storage for consistent performance.",
                    bg: "bg-[#001233]/10",
                  },
                  {
                    icon: (
                      <Globe className="w-7 h-7 text-[#FFC107] group-hover:scale-110 transition-transform" />
                    ),
                    title: "Global Data Centers",
                    desc: "Deploy your VPS in multiple locations worldwide for low latency.",
                    bg: "bg-[#FFC107]/10",
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="group text-center bg-white shadow-md p-6 hover:shadow-xl transition-all rounded-2xl border-transparent hover:border-[#FD5D07]/20"
                  >
                    <div
                      className={`w-14 h-14 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-all`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-[#001233] group-hover:text-[#FD5D07] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#313149]">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <ProductFreture />
      <Newsletter />
    </div>
  );
}
