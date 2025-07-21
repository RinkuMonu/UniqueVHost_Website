"use client";

import type React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axiosInstance from "@/app/AxiosInstance/axiosInstance";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Eye,
  EyeOff,
  User,
  Lock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Server,
  Cloud,
  Database,
  Mail,
  Phone,
  Building,
  MapPin,
} from "lucide-react";

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  illustration: React.ReactNode;
  bgGradient: string;
  accentColor: string;
}

interface FormData {
  name: string;
  email: string;
  password: string;
  phone: string;
  company_name: string;
  address: string;
  role: string;
}

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    phone: "",
    company_name: "",
    address: "",
    role: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/register", formData);

      console.log("Registration successful:", response.data);

      // Show SweetAlert success message and redirect on confirmation
      Swal.fire({
        icon: "success",
        title: "Account Created",
        text: "Registration successful!",
        confirmButtonText: "Go to Login",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        company_name: "",
        address: "",
        role: "",
      });
    } catch (error: unknown) {
      let errorMessage = "Something went wrong!";

      if (typeof error === "object" && error !== null && "response" in error) {
        const err = error as { response?: { data?: { message?: string } } };
        errorMessage = err.response?.data?.message || errorMessage;
      }

      console.error("Registration error:", error);

      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: errorMessage,
      });
    }
  };

  const slides: SlideData[] = [
    {
      title: "Lightning Fast",
      subtitle: "Web Hosting",
      description:
        "Experience blazing-fast performance with our premium SSD hosting.",
      buttonText: "Start Hosting",
      bgGradient: "from-[#FD5D07] via-[#FF8C44] to-orange-600",
      accentColor: "from-yellow-400 to-orange-500",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Animated Server Farm */}
          <div className="relative">
            {/* Main Server */}
            <div className="w-56 h-40 bg-gradient-to-br from-white/25 to-white/10 rounded-2xl backdrop-blur-xl border border-white/30 relative overflow-hidden ">
              {/* Server Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 animate-pulse"></div>

              {/* Server Racks */}
              <div className="absolute inset-4 space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-5 bg-white/20 rounded-lg flex items-center px-3 relative overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-blue-400/30 animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                    <div className="relative flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <div className="h-1 bg-white/50 rounded flex-1"></div>
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Speed Indicators */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full animate-bounce shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-full animate-bounce delay-500 shadow-lg">
              <Database className="h-5 w-5 text-white" />
            </div>

            {/* Data Flow Animation */}
            <div className="absolute top-1/2 -right-12 w-8 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-1 bg-gradient-to-r from-white/40 to-transparent rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 -right-4 w-4 h-1 bg-gradient-to-r from-white/20 to-transparent rounded-full animate-pulse delay-600"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Scalable Cloud",
      subtitle: "Infrastructure",
      description: "Scale effortlessly with our advanced cloud platform. ",
      buttonText: "Go Cloud",
      bgGradient: "from-[#FD5D07] via-[#FF6B35] to-red-500",
      accentColor: "from-blue-400 to-purple-500",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Cloud Network */}
          <div className="relative">
            {/* Main Cloud */}
            <div className="relative">
              <svg
                width="240"
                height="160"
                viewBox="0 0 240 160"
                className="drop-shadow-2xl"
              >
                <defs>
                  <linearGradient
                    id="cloudGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Animated Clouds */}
                <path
                  d="M60 80C45 80 35 65 35 50C35 35 45 20 60 20C70 10 85 5 100 5C115 5 130 10 140 20C155 20 170 35 170 50C170 65 155 80 140 80H60Z"
                  fill="url(#cloudGrad)"
                  filter="url(#glow)"
                  className="animate-pulse"
                />
                <path
                  d="M180 100C170 100 160 90 160 80C160 70 170 60 180 60C185 50 195 45 205 45C215 45 225 50 230 60C240 60 250 70 250 80C250 90 240 100 230 100H180Z"
                  fill="rgba(220, 220, 220, 1)"
                  className="animate-pulse delay-500"
                />
                <path
                  d="M20 120C10 120 5 110 5 100C5 90 10 80 20 80C25 70 35 65 45 65C55 65 65 70 70 80C80 80 90 90 90 100C90 110 80 120 70 120H20Z"
                  fill="rgba(220, 220, 220, 1)"
                  className="animate-pulse delay-1000"
                />
              </svg>

              {/* Network Nodes */}
              <div className="absolute top-12 left-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping shadow-lg"></div>
              <div className="absolute top-20 left-32 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping delay-300 shadow-lg"></div>
              <div className="absolute top-16 left-44 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-ping delay-600 shadow-lg"></div>
            </div>

            {/* Floating Cloud Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-full animate-float shadow-2xl">
              <Cloud className="h-8 w-8 text-grey" />
            </div>

            {/* Global Network Indicators */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full animate-bounce shadow-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Secure Domain",
      subtitle: "Management",
      description: "Manage all your domains with enterprise-grade security. ",
      buttonText: "Secure Now",
      bgGradient: "from-[#FD5D07] via-orange-500 to-red-600",
      accentColor: "from-green-400 to-emerald-500",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Domain Security Hub */}
          <div className="relative">
            {/* Main Security Shield */}
            <div className="w-48 h-48 bg-gradient-to-br from-white/25 to-white/10 rounded-3xl backdrop-blur-xl border border-white/30 relative overflow-hidden ">
              {/* Security Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 animate-pulse"></div>

              {/* Shield Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-6 rounded-full shadow-2xl animate-pulse">
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Domain Extensions Floating */}
              <div className="absolute top-4 right-4 bg-white/30 px-3 py-1 rounded-full text-white font-bold text-sm animate-bounce">
                .com
              </div>
              <div className="absolute bottom-4 left-4 bg-white/25 px-2 py-1 rounded-full text-white font-bold text-xs animate-bounce delay-300">
                .org
              </div>
              <div className="absolute top-1/2 left-2 bg-white/20 px-2 py-1 rounded-full text-white font-bold text-xs animate-bounce delay-600">
                .net
              </div>
            </div>

            {/* Security Indicators */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-full animate-spin-slow shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-400 to-green-500 p-2 rounded-full animate-bounce shadow-lg">
              <Server className="h-5 w-5 text-white" />
            </div>

            {/* Security Waves */}
            <div className="absolute inset-0 rounded-3xl border-2 border-green-400/30 animate-ping"></div>
            <div className="absolute inset-2 rounded-3xl border border-emerald-400/20 animate-ping delay-500"></div>
          </div>
        </div>
      ),
    },
  ];

  // Enhanced auto-advance with transition effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log("Registration attempt:", formData)
  //   // Here you would typically send the data to your backend
  // }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const changeSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`min-h-screen flex transition-all duration-1000`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Particles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/15 rounded-full blur-md animate-float delay-500"></div>

        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
      </div>

      {/* Left Side - Enhanced Dynamic Content Slider */}
      <div className="hidden lg:flex lg:w-3/7 relative overflow-hidden">
        {/* Enhanced Curved Lines */}
        <div className="absolute top-0 left-0 w-full h-40">
          <svg viewBox="0 0 400 160" className="w-full h-full opacity-30">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
            <path
              d="M0 30 Q200 10 400 30 Q200 50 0 70 Q200 90 400 110 Q200 130 0 150"
              stroke="url(#lineGrad)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0 40 Q200 20 400 40 Q200 60 0 80 Q200 100 400 120 Q200 140 0 160"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse delay-500"
            />
          </svg>
        </div>

        {/* Enhanced Slide Content */}
        <div className="relative z-10 px-6 flex flex-col justify-center  h-full">
          <div
            className={`mb-16 transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 transform translate-y-8"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            <div className="mb-8">
              <div
                className={`inline-flex items-center gap-3 bg-gradient-to-r ${slides[currentSlide].accentColor} px-4 py-2 rounded-full mb-6 shadow-lg`}
              >
                <Sparkles className="h-5 w-5  animate-spin-slow" />
                <span className=" font-semibold text-sm uppercase tracking-wider">
                  Premium
                </span>
              </div>
              <h1 className="text-6xl font-bold leading-tight mb-4">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-4xl font-semibold  mb-8">
                {slides[currentSlide].subtitle}
              </h2>
            </div>

            <p className="text-xl  leading-relaxed max-w-lg mb-10 font-light">
              {slides[currentSlide].description}
            </p>

            <Button
              className={`bg-gradient-to-r ${slides[currentSlide].accentColor} hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold px-8 py-4 text-lg group relative overflow-hidden`}
            >
              <div className="absolute inset-0  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              {slides[currentSlide].buttonText}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Enhanced Slide Indicators */}
          <div className="flex gap-4 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 relative overflow-hidden ${
                  index === currentSlide
                    ? "w-12 bg-black shadow-lg"
                    : "w-6 bg-black/40 hover:bg-black/60"
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Navigation */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 group"
            >
              <ChevronLeft className="h-6 w-6  group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 group"
            >
              <ChevronRight className="h-6 w-6  group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Enhanced Illustration Area */}
        <div
          className={`absolute bottom-20 right-20 w-72 h-56 transition-all duration-700 ${
            isTransitioning
              ? "opacity-0 transform scale-95 rotate-3"
              : "opacity-100 transform scale-100 rotate-0"
          }`}
        >
          {slides[currentSlide].illustration}
        </div>
      </div>

      {/* Right Side - Enhanced Registration Form */}
      <div className="w-full lg:w-4/7 flex items-center justify-center relative">
        {/* Form Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent"></div>

        <div className="w-full  relative z-10 h-screen">
          {/* Enhanced Mobile Slider */}
          <div className="lg:hidden mb-10">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl mb-8 border border-white/20 text-white text-center shadow-2xl">
              <div
                className={`transition-all duration-500 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <h2 className="text-2xl font-bold mb-4">
                  {slides[currentSlide].title}
                </h2>
                <h3 className="text-xl font-semibold mb-4">
                  {slides[currentSlide].subtitle}
                </h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>
              <div className="flex justify-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-white"
                        : "w-4 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Registration Card */}
          <Card className=" border-0 bg-white/95 backdrop-blur-xl overflow-hidden relative">
            {/* Gradient Border Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].accentColor} opacity-20 blur-xl`}
            ></div>
            <div
              className={`h-1 bg-gradient-to-r ${slides[currentSlide].accentColor} transition-all duration-1000`}
            ></div>

            <CardContent className="px-10 relative">
              {/* Enhanced Greeting */}
              <div className="mb-6 ">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
                  Join Us!
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  Create your hosting account
                </p>
              </div>

              {/* Enhanced Registration Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-gray-700 font-semibold text-lg"
                    >
                      Full Name
                    </Label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 bg-gray-50/50 hover:bg-white rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-gray-700 font-semibold text-lg"
                    >
                      Email Address
                    </Label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 bg-gray-50/50 hover:bg-white rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-gray-700 font-semibold text-lg"
                    >
                      Password
                    </Label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        className="pl-12 pr-14 h-14 text-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 bg-gray-50/50 hover:bg-white rounded-xl"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors p-2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-gray-700 font-semibold text-lg"
                    >
                      Phone Number
                    </Label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 bg-gray-50/50 hover:bg-white rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Company Name Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="company_name"
                      className="text-gray-700 font-semibold text-lg"
                    >
                      Company Name
                    </Label>
                    <div className="relative group">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      <Input
                        id="company_name"
                        type="text"
                        placeholder="Enter your company name"
                        value={formData.company_name}
                        onChange={(e) =>
                          handleInputChange("company_name", e.target.value)
                        }
                        className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 bg-gray-50/50 hover:bg-white rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  {/* Address Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="address"
                      className="text-gray-700 font-semibold text-lg"
                    >
                      Address
                    </Label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                      <Input
                        id="address"
                        type="text"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 bg-gray-50/50 hover:bg-white rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  {/* Role Field */}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="role"
                    className="text-gray-700 font-semibold text-lg "
                  >
                    Role
                  </Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => handleInputChange("role", value)}
                  >
                    <SelectTrigger className="h-14 text-lg border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 bg-gray-50/50 hover:bg-white rounded-xl">
                      <SelectValue
                        placeholder="Select your role "
                        className="w-full"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="customer">Customer</SelectItem>
                      <SelectItem value="reseller">Reseller</SelectItem>
                      <SelectItem value="partner">Partner</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className={`w-full h-10 text-[14px]  bg-gradient-to-r ${slides[currentSlide].bgGradient} hover:shadow-2xl hover:scale-105 text-white font-bold text-xl transition-all duration-300 group relative overflow-hidden rounded-xl mt-3`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  Create Account
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="text-center">
                  <p
                    onClick={() => router.push("/login")}
                    className="cursor-pointer text-gray-600 hover:text-orange-500 font-semibold hover:underline transition-colors text-lg"
                  >
                    Already have an account? Sign In
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
