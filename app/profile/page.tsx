"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/app/AxiosInstance/axiosInstance";
import "@/app/styles/header.css";
import Swal from "sweetalert2";
import { AxiosError } from "axios";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
}

export default function ProfilePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  // const [showToast, setShowToast] = useState(false);
  // const [profileImage, setProfileImage] = useState<File | null>(null);
  // const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     setProfileImage(file);
  //     setPreviewUrl(URL.createObjectURL(file));
  //   }
  // };

  const validate = (): Errors => {
    const tempErrors: Errors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid.";
    if (!formData.phone) tempErrors.phone = "Phone number is required.";
    if (!formData.company) tempErrors.company = "Company name is required.";
    return tempErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        console.log("TOKEN: ", token);

        await axiosInstance.put("/users/updateprofile", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.company,
          address: formData.address,
        });

        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your profile has been updated successfully.",
          confirmButtonColor: "#fd5d07",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } catch (error: unknown) {
  const err = error as AxiosError<{ message?: string }>;
  console.error("Profile update failed:", err.response?.data?.message || err.message);
}
    } else {
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = localStorage.getItem("user");
        const parsedUser = userData ? JSON.parse(userData) : null;
        const userId = parsedUser?.id;

        console.log("userIduserId", userId);

        if (!userId) {
          console.error("User ID not found in localStorage");
          return;
        }

        const res = await axiosInstance.get(`/users/${userId}`);
        const data = res.data || {};

        console.log("resresresres", res);

        setFormData({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          company: data.company_name || "",
          address: data.address || "",
        });

        if (data.profileImage) {
      
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Right Form Section */}
          <div className="lg:w-full p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Edit Profile
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // remove non-digits
                    setFormData({ ...formData, phone: value });
                  }}
                  placeholder="Enter your phone number"
                  maxLength={10}
                  className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                    errors.company ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              <div className="mb-8">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  rows={3}
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#fd5d07] to-[#b84304] text-white py-3 rounded-lg font-semibold hover:from-[#e95500] hover:to-[#a93d03] transition shadow-lg"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {/* {showToast && (
        <div className="fixed top-5 right-5 bg-green-200 px-6 py-3 rounded-lg shadow-lg transition transform animate-slide-in">
          Profile updated successfully!
        </div>
      )} */}
    </main>
  );
}
