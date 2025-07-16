"use client"
import { useRef } from "react";
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { X } from "lucide-react"
import axiosInstance from "@/app/AxiosInstance/axiosInstance"
import AdditionalServices from "@/components/AdditionalServices";
import Swal from "sweetalert2";

export default function Plans({ sharedHosting }: { sharedHosting: string }) {
  const { slug } = useParams()
  const [activeTab, setActiveTab] = useState("monthly")
  const [plans, setPlans] = useState<any[]>([])
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null)
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Update both state and ref from child
  const handleSelectedServices = (services: string[]) => {
    console.log("Selected services:", services);
    setSelectedServices(services); // ✅ only update state
  };


  useEffect(() => {
    async function fetchPlans() {
      try {
        const res = await axiosInstance.get(`/plans/slug/${sharedHosting}`)
        setPlans(res.data || [])
      } catch (err) {
        console.error("Error fetching plans:", err)
      }
    }
    fetchPlans()
  }, [sharedHosting])

  const planDurations = ["monthly", "yearly", "3year"]
  const durationLabels: Record<string, string> = {
    monthly: "Monthly",
    yearly: "Yearly",
    "3year": "3 Year",
  }

  const getDurationMultiplier = (duration: string) => (duration === "monthly" ? 1 : duration === "yearly" ? 12 : 36)

  const filteredPlans = plans.filter((p) => p.duration === "monthly") // we'll calculate manually

  const getTierKey = (planName: string) => {
    const n = planName.toLowerCase()
    if (n.includes("basic")) return "basic"
    if (n.includes("business") || n.includes("standard")) return "standard"
    if (n.includes("pro") || n.includes("premium")) return "premium"
    return "basic"
  }

  const priceDisplay = (price: number) => `₹${price.toFixed(2)}`

  const renewLine = (price: number, dur: string) =>
    `Renews at ${priceDisplay(price)}/${dur === "monthly" ? "mo" : dur === "yearly" ? "yr" : "3yr"}`

  const selectedPlan = filteredPlans.find((plan) => plan._id === selectedPlanId)

  const handlePlanClick = (planId: string) => {
    setSelectedPlanId(selectedPlanId === planId ? null : planId)
  }
  const handleBuyNow = async (planId: string) => {
    const selectedPlan = plans.find((p) => p._id === planId);
    if (!selectedPlan) return;

    // Dummy user ID — replace with actual logged-in user id if needed
    const userId = "6863b0eebfc5b2a8147e563a";

    // Generate current & end dates (e.g., 1 month later)
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);

    try {
      const res = await axiosInstance.post("/orders/order/createorder", {
        user_id: userId,
        plan_id: selectedPlan._id,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        server_info: {
          ip: "192.168.1.100",
          panel: "cPanel",
          username: "demo_user"
        },
        additional_services: selectedServices
      });

      // Success alert
      Swal.fire({
        icon: "success",
        title: "Order placed successfully!",
        text: "Thank you for purchasing.",
        confirmButtonColor: "#FD5D07",
      });
    } catch (error) {
      console.error("Order failed:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to place order",
        text: "Please try again later.",
        confirmButtonColor: "#FD5D07",
      });
    }
  };

  return (
    <section className="py-20 bg-[#FFF8F4]">
      <div className=" mx-auto">
        <h1 className="text-center text-4xl font-extrabold text-[#001233] mb-12">Choose Your Plan</h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {planDurations.map((duration) => (
            <button
              key={duration}
              onClick={() => {
                setActiveTab(duration)
                setSelectedPlanId(null)
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all
                 ${activeTab === duration
                  ? "bg-[#FD5D07] text-white shadow-md"
                  : "bg-white text-[#001233] border border-[#FD5D07] hover:bg-[#FD5D07] hover:text-white"
                }`}
            >
              {durationLabels[duration]}
            </button>
          ))}
        </div>

        {/* Plan Cards */}
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {filteredPlans.map((plan) => {
              const multiplier = getDurationMultiplier(activeTab)
              const adjustedPrice = plan.price * multiplier
              const isSelected = selectedPlanId === plan._id
              return (
                <div
                  key={plan._id}
                  onClick={() => handlePlanClick(plan._id)}
                  className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 text-center border hover:-translate-y-2 cursor-pointer ${isSelected
                    ? "border-[#FD5D07] ring-2 ring-[#FD5D07] ring-opacity-20"
                    : "border-transparent hover:border-[#FD5D07]"
                    }`}
                >
                  <h3 className="font-bold text-xl mb-2 text-[#001233]">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{renewLine(adjustedPrice, activeTab)}</p>
                  <div className="text-4xl font-bold text-[#FD5D07] mb-2">
                    {priceDisplay(adjustedPrice)}
                    <sub className="text-base text-[#001233]">
                      {activeTab === "monthly" ? "/ mo" : activeTab === "yearly" ? "/ yr" : "/ 3yr"}
                    </sub>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNow(plan._id); // 👈 pass the plan ID
                    }}
                    className="mt-4 px-5 py-2 bg-[#FD5D07] text-white rounded-full font-semibold hover:bg-[#e04d00] transition-all"
                  >
                    Buy Now
                  </button>
                  {/* <p className="mt-3 text-sm text-[#FD5D07] font-medium">
                  {selectedPlanId === plan._id ? "Click to hide features" : "Click to view features"}
                </p> */}
                </div>
              )
            })}
          </div>
        </div>


        {/* Separate Features Table Section */}
        {selectedPlan && (

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#FD5D07] animate-in slide-in-from-top-4 duration-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#001233]">{selectedPlan.name} - Features</h2>
              {/* <button
                onClick={() => setSelectedPlanId(null)}
                className="flex items-center gap-2 px-4 py-2 text-[#FD5D07] hover:text-white hover:bg-[#FD5D07] border border-[#FD5D07] rounded-full transition-all"
              >
                <X size={16} />
                Hide Features
              </button> */}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {["Plan Features", "Email Features"].map((grp) => (
                <div key={grp}>
                  <h4 className="font-semibold text-lg mb-4 text-[#001233] border-b-2 border-[#FD5D07] pb-2">{grp}</h4>
                  <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                    <table className="w-full text-sm">
                      <tbody>
                        {selectedPlan.features
                          ?.filter((f: any) => f.group === grp)
                          .map((f: any, index: number) => (
                            <tr
                              key={f._id}
                              className={`border-b last:border-0 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                            >
                              <td className="px-4 py-3 font-medium text-gray-700">{f.title}</td>
                              <td className="px-4 py-3 text-[#FD5D07] font-semibold text-right">
                                {f.values?.[getTierKey(selectedPlan.name)] ?? "—"}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <AdditionalServices onSelectionChange={handleSelectedServices} />
      </div>
    </section>
  )
}
