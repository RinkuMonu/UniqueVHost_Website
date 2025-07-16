"use client";

import { useEffect, useState, useCallback } from "react";
import axiosInstance from "@/app/AxiosInstance/axiosInstance";
import Swal from "sweetalert2";

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
import {
  Cpu,
  HardDrive,
  MemoryStick,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

/* -------------------- API response shape -------------------- */
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
  isRecommended?: boolean;
}

/* -------------------- Filters helpers ----------------------- */
const regionsList = [
  "US East (N. Virginia)",
  "US West (Oregon)",
  "EU West (Ireland)",
  "Asia Pacific (Singapore)",
  "Canada (Central)",
];

type BudgetKey = "all" | "under-50" | "50-100" | "100-200" | "over-200";

const budgetToRange: Record<BudgetKey, { min?: number; max?: number }> = {
  all: {},
  "under-50": { max: 50 },
  "50-100": { min: 50, max: 100 },
  "100-200": { min: 100, max: 200 },
  "over-200": { min: 200 },
};

/* ------------------------------------------------------------ */
export default function DedicatedServersPage() {

  const slug = "dedicatedserver";
  /* -------- filter state -------- */
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [cpuMax, setCpuMax] = useState(2);   // default slider position
  const [ramMax, setRamMax] = useState(4);
  const [budget, setBudget] = useState<BudgetKey>("all");

  /* -------- plans data -------- */
  const [plans, setPlans] = useState<ApiPlan[]>([]);
  const [loading, setLoading] = useState(true);

  /* -------- build query params from filters -------- */
  const buildParams = () => {
    const params: Record<string, any> = {
      cpu_max: cpuMax,
      ram_max: ramMax,
      slug: slug,
    };
    if (selectedRegions.length)
      params.location = selectedRegions.join(",");
    const { min, max } = budgetToRange[budget];
    if (min != null) params.min_price = min;
    if (max != null) params.max_price = max;
    return params;
  };

  /* -------- fetch plans whenever filters change -------- */
  const fetchPlans = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get<ApiPlan[]>("/plans", {
        params: buildParams(),
      });
      setPlans(data);
    } catch (err) {
      console.error("Failed to fetch plans:", err);
      setPlans([]);
    } finally {
      setLoading(false);
    }
  }, [selectedRegions, cpuMax, ramMax, budget]);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  /* -------- toggle region checkbox -------- */
  const handleRegionToggle = (region: string, checked: boolean) => {
    setSelectedRegions((prev) =>
      checked ? [...prev, region] : prev.filter((r) => r !== region)
    );
  };

  /* -------- transform to UI plan shape -------- */
  const uiPlans = [
    ...plans.map((p) => ({
      id: p._id,
      title: p.name,
      desc: p.slug,
      cpu: p.cpu,
      ram: p.ram,
      disk: p.storage,
      transfer: p.bandwidth,
      price: `₹${p.price}`,
      badge: p.isRecommended ? "Recommended" : null,
      os: p.os_options.length ? p.os_options : ["Ubuntu"],
      custom: false,
    })),
    {
      id: "custom",
      title: "Dedicated Custom",
      desc: "Need something specific? Let's talk",
      cpu: "",
      ram: "",
      disk: "",
      transfer: "",
      price: "",
      badge: null,
      os: [],
      custom: true,
    },
  ];

const handleBuyNow = async (planId: string) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));

    // ✅ Show alert if user not logged in
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
      title: "Order Placed!",
      text: res.data.message || "Your server has been deployed.",
      confirmButtonColor: "#FD5D07",
    });
  } catch (err: any) {
    Swal.fire({
      icon: "error",
      title: "Failed",
      text: err?.response?.data?.message || "Could not complete the order.",
      confirmButtonColor: "#FD5D07",
    });
  }
};

  /* -------------------------------------------------------- */
  return (
    <div className="min-h-screen  text-[#4C5671]">
      {/* ---------------- Hero Section (unchanged) ---------------- */}
      {/* (kept exactly as in your original code) */}
      <div className="relative bg-[#FFF8F4] py-24 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
        <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              High-Performance Dedicated Servers
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
              Experience unparalleled speed and reliability with our dedicated
              servers, designed for demanding workloads and global reach. Deploy
              in minutes with full root access.
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
              alt="Dedicated Server Illustration"
              className="w-full max-w-md rounded-xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* ---------------- Main Content ---------------- */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ---------------- Sidebar Filters ---------------- */}
          <div className="lg:col-span-1">
            {/* (Only filter card is shown below, so sidebar placeholder empty) */}
          </div>

          {/* ---------------- Plans Grid ---------------- */}
          <div className="lg:col-span-3 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* ---------------- Filter Card (unchanged markup) ---------------- */}
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
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">
                    Regions
                  </Label>
                  <div className="space-y-2" style={{ display: "grid" }}>
                    {regionsList.map((region) => (
                      <Label
                        key={region}
                        className="flex items-center gap-2 font-normal text-sm"
                        style={{ display: "flex" }}
                      >
                        <Checkbox
                          checked={selectedRegions.includes(region)}
                          onCheckedChange={(checked) =>
                            handleRegionToggle(region, Boolean(checked))
                          }
                          className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] rounded-full"
                        />
                        {region}
                      </Label>
                    ))}
                  </div>
                </div>

                <Separator className="bg-[#4C5671]/20" />

                {/* Performance */}
                <div>
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">
                    Performance
                  </Label>
                  <div className="space-y-4">
                    {/* CPU slider */}
                    <div>
                      <Label className="text-xs text-[#313149] mb-2 block">
                        CPU Cores (≤{cpuMax})
                      </Label>
                      <input
                        type="range"
                        min={1}
                        max={32}
                        value={cpuMax}
                        onChange={(e) => setCpuMax(Number(e.target.value))}
                        className="w-full accent-[#FD5D07]"
                      />
                      <div className="flex justify-between text-xs text-[#4C5671] mt-1">
                        <span>1</span>
                        <span>32+</span>
                      </div>
                    </div>
                    {/* RAM slider */}
                    <div>
                      <Label className="text-xs text-[#313149] mb-2 block">
                        RAM (GB) (≤{ramMax})
                      </Label>
                      <input
                        type="range"
                        min={1}
                        max={128}
                        value={ramMax}
                        onChange={(e) => setRamMax(Number(e.target.value))}
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
                  <Label className="text-sm font-medium mb-3 block text-[#313149]">
                    Monthly Budget
                  </Label>
                  <Select
                    value={budget}
                    onValueChange={(v: BudgetKey) => setBudget(v)}
                  >
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

            {/* ---------------- Dynamic plan cards ---------------- */}
            {loading && (
              <p className="col-span-full text-center py-10">Loading plans…</p>
            )}

            {!loading &&
              uiPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`relative bg-white bg-gradient-to-br from-[#fff] via-[#fdf7f1] to-[#fff8f4]
                    rounded-2xl shadow-xl hover:shadow-2xl transition-all
                    hover:-translate-y-2 hover:scale-[1.02] border
                    ${plan.badge === "Recommended"
                      ? "border-[#FD5D07]"
                      : "border-gray-200"
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
                    <CardTitle className="text-lg font-bold text-[#001233]">
                      {plan.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-[#313149]">
                      {plan.desc}
                    </CardDescription>
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
                          <Label className="text-sm font-medium block text-[#313149]">
                            Operating System
                          </Label>
                          <RadioGroup
                            defaultValue={plan.os[0] ?? "Ubuntu"}
                            className="space-y-1 mt-3 rounded-full"
                          >
                            {plan.os.map((os) => (
                              <Label
                                key={os}
                                className="flex items-center gap-2 font-normal text-sm"
                                style={{ display: "flex" }}
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
                        <p className="text-sm text-[#313149] mb-4">
                          Configure your perfect dedicated server with custom
                          CPU, RAM, storage, and network requirements.
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
                      onClick={() => {
                        if (!plan.custom) handleBuyNow(plan.id);
                        else Swal.fire({
                          icon: "info",
                          title: "Custom Plan",
                          text: "Please contact sales for a custom configuration.",
                          confirmButtonColor: "#FD5D07",
                        });
                      }}
                      className={`w-full ${plan.custom
                        ? "bg-transparent border-[#FD5D07] text-[#FD5D07] hover:bg-[#FD5D07] hover:text-white"
                        : "bg-[#FD5D07] text-white hover:bg-[#FD5D07]/90"
                        }`}
                      variant={plan.custom ? "outline" : "default"}
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

        {/* ---------------- Features Section (unchanged) ---------------- */}
        {/* (kept exactly as in your original file) */}
        <div className="pt-20">
          <Card className="relative mt-12 bg-gradient-to-br from-[#FFF8F4] to-[#FFFFFF] rounded-2xl shadow-xl border-0 overflow-hidden">
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