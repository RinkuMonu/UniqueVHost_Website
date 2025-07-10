"use client";
import { useState } from "react";
import Image from "next/image";
import '@/app/styles/header.css'

export default function ProfilePage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
    });

    const [profileImage, setProfileImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.email) tempErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid.";
        if (!formData.phone) tempErrors.phone = "Phone number is required.";
        if (!formData.company) tempErrors.company = "Company name is required.";
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted:", formData, profileImage);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <main className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-12 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">
                    {/* Left Profile Section */}
                    {/* <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center p-8">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                            {previewUrl ? (
                                <Image src={previewUrl} alt="Profile Preview" layout="fill" objectFit="cover" />
                            ) : (
                                <Image src="/default-avatar.png" alt="Default Avatar" layout="fill" objectFit="cover" />
                            )}
                        </div>
                        <h3 className="text-2xl font-bold">{formData.name}</h3>
                        <p className="text-gray-200 italic">@{formData.name.split(" ")[0].toLowerCase()}</p>
                        <p className="text-gray-100 mt-4 text-center">{formData.address}</p>
                        <label className="mt-4 bg-white text-blue-700 px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-gray-100 transition">
                            Change Photo
                            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                        </label>
                    </div> */}

                    {/* Right Form Section */}
                    <div className="lg:w-full p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit Profile</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${errors.name ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${errors.email ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
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
                                    className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${errors.phone ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>


                            <div className="mb-5">
                                <label htmlFor="company" className="block text-gray-700 font-medium mb-1">Company Name</label>
                                <input
                                    id="company"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Enter company name"
                                    className={`w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${errors.company ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                            </div>

                            <div className="mb-8">
                                <label htmlFor="address" className="block text-gray-700 font-medium mb-1">Address</label>
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
            {showToast && (
                <div className="fixed top-5 right-5 bg-green-200 px-6 py-3 rounded-lg shadow-lg transition transform animate-slide-in">
                    Profile updated successfully!
                </div>
            )}
        </main>
    );
}
