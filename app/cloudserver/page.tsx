"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/app/AxiosInstance/axiosInstance";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
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
import Newsletter from "@/components/newsletter";
import ProductFreture from "@/components/ProductFreture";

interface ApiPlan {
  _id: string;
  name: string;
  slug: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  price: number;
  os_options: string[];
  badge?: string;
}

const REGIONS = [
  "US East (N. Virginia)",
  "US West (Oregon)",
  "EU West (Ireland)",
  "Asia Pacific (Singapore)",
  "Canada (Central)",
];

type BudgetKey = "all" | "under-50" | "50-100" | "100-200" | "over-200";
const budgetRange: Record<BudgetKey, { min?: number; max?: number }> = {
  all: {},
  "under-50": { max: 50 },
  "50-100": { min: 50, max: 100 },
  "100-200": { min: 100, max: 200 },
  "over-200": { min: 200 },
};

export default function CloudServersPage() {
  const router = useRouter();
  const slug = "cloudserver";

  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [cpuMax, setCpuMax] = useState(2);
  const [ramMax, setRamMax] = useState(4);
  const [budget, setBudget] = useState<BudgetKey>("all");

  const [plans, setPlans] = useState<ApiPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const params: Record<string, any> = {
          cpu_max: cpuMax,
          ram_max: ramMax,
          slug,
        };
        if (selectedRegions.length)
          params.location = selectedRegions.join(",");
        const { min, max } = budgetRange[budget];
        if (min != null) params.min_price = min;
        if (max != null) params.max_price = max;

        const { data } = await axiosInstance.get<ApiPlan[]>("/plans", { params });
        setPlans(data);
      } catch (err: unknown) {
        console.error("fetch cloud plans:", err);
        setPlans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [selectedRegions, cpuMax, ramMax, budget]);

  const handleRegionToggle = (region: string, checked: boolean) => {
    setSelectedRegions((prev) =>
      checked ? [...prev, region] : prev.filter((r) => r !== region)
    );
  };

  const handleBuyNow = async (planId: string) => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");

      if (!user || !user.id) {
        Swal.fire({
          icon: "warning",
          title: "Login Required",
          text: "Please login first to place an order.",
          confirmButtonColor: "#FD5D07",
        });
        return;
      }

      const payload = {
        user_id: user.id,
        plan_id: planId,
        start_date: new Date().toISOString(),
        end_date: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
        server_info: {
          ip: "192.168.1.100",
          panel: "cPanel",
          username: "demo_user",
        },
      };

      const res = await axiosInstance.post("/orders/order/createorder", payload);

      Swal.fire({
        icon: "success",
        title: "Order Placed Successfully!",
        text: res.data.message || "Your order has been created.",
        confirmButtonColor: "#FD5D07",
      });
    } catch (error: unknown) {
      const message =
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        (error as any).response?.data?.message;

      Swal.fire({
        icon: "error",
        title: "Order Failed",
        text: message || "Something went wrong while placing your order.",
        confirmButtonColor: "#FD5D07",
      });
    }
  };

  /* ---------------- UI (all original classes retained) ---------------- */
  return (
    <div className="min-h-screen text-[#4C5671]">
      {/* Header (unchanged) */}
      <div className="relative bg-[#FFF8F4] py-24 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
        <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              Cloud Servers
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
              Deploy high-performance cloud servers in minutes. Choose from our
              global network of data centers with enterprise-grade
              infrastructure.
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
          <div className="flex justify-center">
            <img
              src="/images/banner/banner-hero-03.webp"
              alt="Cloud Server Illustration"
              className="w-full max-w-md rounded-xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Filters card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-white rounded-xl shadow-xl border-0 overflow-hidden transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#001233] text-lg font-semibold">
                  <MapPin className="w-5 h-5 text-[#FD5D07]" />
                  Server Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Regions */}
                <div>
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">
                    Regions
                  </Label>
                  <div
                    className="space-y-2"
                    style={{ display: "grid", gap: "10px" }}
                  >
                    {REGIONS.map((region) => (
                      <Label
                        key={region}
                        className="flex items-center gap-2 font-normal text-sm text-[#4C5671]"
                        style={{ display: "flex  " }}
                      >
                        <Checkbox
                          checked={regions.includes(region)}
                          onCheckedChange={(c) =>
                            handleRegionToggle(region, Boolean(c))
                          }
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] rounded-full mr-2"
                        />
                        {region}
                      </Label>
                    ))}
                  </div>
                </div>
                <Separator className="bg-[#4C5671]/20" />

                {/* Performance sliders */}
                <div>
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">
                    Performance
                  </Label>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-xs text-[#313149] mb-2 block">
                        CPU Cores
                      </Label>
                      <Slider
                        value={[cpuMax]}
                        max={32}
                        min={1}
                        step={1}
                        onValueChange={(v) => setCpuMax(v[0])}
                      />
                      <div className="flex justify-between text-xs text-[#4C5671] mt-1">
                        <span>1</span>
                        <span>32+</span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-[#313149] mb-2 block">
                        RAM (GB)
                      </Label>
                      <Slider
                        value={[ramMax]}
                        max={128}
                        min={1}
                        step={1}
                        onValueChange={(v) => setRamMax(v[0])}
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
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">
                    Monthly Budget
                  </Label>
                  <Select
                    value={budget}
                    onValueChange={(v) => setBudget(v as BudgetKey)}
                  >
                    <SelectTrigger className="text-[#4C5671] border-[#FD5D07] focus:ring-[#FD5D07]">
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

          {/* Plans */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {loading && (
                <p className="col-span-full text-center py-10">
                  Loading plans…
                </p>
              )}

              {!loading &&
                uiPlans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`relative bg-white bg-gradient-to-br from-[#fff] via-[#fdf7f1] to-[#fff8f4]
                      rounded-2xl shadow-xl hover:shadow-2xl transition-all
                      hover:-translate-y-2 hover:scale-[1.02] border ${plan.badge ? "border-[#FD5D07]" : "border-gray-200"
                      }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-pulse">
                        <Badge className="bg-[#FD5D07] text-white shadow-lg">
                          {plan.badge}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg md:text-xl font-semibold text-[#001233]">
                        {plan.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-[#4C5671]">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {!plan.custom ? (
                        <>
                          <div className="space-y-2 text-[#4C5671]">
                            <div className="flex items-center gap-2">
                              <Cpu className="w-4 h-4 text-[#FD5D07]" />{" "}
                              {plan.cpu}
                            </div>
                            <div className="flex items-center gap-2">
                              <MemoryStick className="w-4 h-4 text-[#FD5D07]" />{" "}
                              {plan.ram}
                            </div>
                            <div className="flex items-center gap-2">
                              <HardDrive className="w-4 h-4 text-[#FD5D07]" />{" "}
                              {plan.storage}
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-[#FD5D07]" />{" "}
                              {plan.transfer}
                            </div>
                          </div>
                          <Separator />
                          <div>
                            <Label className="text-sm font-medium block text-[#313149]">
                              Operating System
                            </Label>
                            <RadioGroup
                              defaultValue={plan.os[0] ?? "Ubuntu"}
                              className="space-y-1 mt-3"
                            >
                              {plan.os.map((os) => (
                                <Label
                                  key={os}
                                  className="flex items-center gap-2 font-normal text-sm"
                                  style={{ display: "flex  " }}
                                >
                                  <RadioGroupItem value={os} />
                                  {os}
                                </Label>
                              ))}
                            </RadioGroup>
                          </div>
                          <div className="text-center py-4">
                            <div className="text-2xl font-bold text-[#001233]">
                              {plan.price}
                            </div>
                            <div className="text-xs text-[#4C5671] mt-1">
                              Billed monthly
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <Shield className="w-12 h-12 text-[#4C5671] mx-auto mb-4" />
                          <p className="text-sm text-[#4C5671] mb-4">
                            Configure your perfect server with custom CPU, RAM,
                            storage, and network requirements.
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
                        className={`w-full ${plan.custom
                          ? "bg-transparent border-[#FD5D07] text-[#FD5D07] hover:bg-[#FD5D07] hover:text-white"
                          : "bg-[#FD5D07] text-white hover:bg-[#FD5D07]/90"
                          }`}
                        variant={plan.custom ? "outline" : "default"}
                        onClick={() => {
                          if (plan.custom) {
                            router.push("/contactus");
                          } else {
                            handleBuyNow(plan.id);
                          }
                        }}
                      >
                        {plan.custom ? (
                          "Contact Sales"
                        ) : (
                          <>
                            <Zap className="w-4 h-4 mr-2" />
                            Buy Now
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </div>

        {/* Features Section (unchanged markup) */}
        <div className="pt-20">
          {/* features card exactly as you had … */}
          <Card className="relative mt-16 bg-gradient-to-br from-[#FFF8F4] to-[#FFFFFF] rounded-2xl shadow-xl border-0 overflow-hidden">
            {/* blurred circles */}
            <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
            <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>

            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-[#001233] text-2xl md:text-3xl font-bold">
                Why Choose Our Cloud Servers?
              </CardTitle>
              <CardDescription className="text-[#4C5671] text-sm md:text-base">
                Enterprise-grade infrastructure with unmatched reliability
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-3 gap-8">
                {/* three feature boxes unchanged */}
                {[
                  {
                    icon: (
                      <Zap className="w-7 h-7 text-[#FD5D07] group-hover:scale-110 transition-transform" />
                    ),
                    title: "99.9% Uptime SLA",
                    desc: "Guaranteed uptime with automatic failover and redundancy",
                    bg: "bg-[#FD5D07]/10",
                  },
                  {
                    icon: (
                      <Shield className="w-7 h-7 text-[#001233] group-hover:scale-110 transition-transform" />
                    ),
                    title: "Enterprise Security",
                    desc: "DDoS protection, firewalls, and encrypted storage",
                    bg: "bg-[#001233]/10",
                  },
                  {
                    icon: (
                      <Globe className="w-7 h-7 text-[#FFC107] group-hover:scale-110 transition-transform" />
                    ),
                    title: "Global Network",
                    desc: "Deploy in 15+ regions worldwide with low latency",
                    bg: "bg-[#FFC107]/10",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="group text-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all border border-transparent hover:border-[#FD5D07]/20"
                  >
                    <div
                      className={`w-14 h-14 ${f.bg} rounded-full flex items-center justify-center mx-auto mb-4 transition-all`}
                    >
                      {f.icon}
                    </div>
                    <h3 className="font-semibold mb-2 text-[#001233] group-hover:text-[#FD5D07] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-sm text-[#4C5671]">{f.desc}</p>
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