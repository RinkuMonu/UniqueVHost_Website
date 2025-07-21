"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, Plus, Minus, ShoppingCart, CheckCircle } from "lucide-react"
import Link from "next/link"
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

const initialCartItems = [
    {
        id: "1",
        name: "Pro Hosting Plan",
        price: 29.99,
        quantity: 1,
        image: "/images/hosting/server.png",
    },
    {
        id: "2",
        name: "Premium SSL",
        price: 5.0,
        quantity: 2,
        image: "/images/hosting/cloud.png",
    },
    {
        id: "3",
        name: "Premium SSL",
        price: 5.0,
        quantity: 7,
        image: "/images/hosting/ssl.png",
    },
    {
        id: "4",
        name: "Premium SSL",
        price: 5.0,
        quantity: 5,
        image: "/images/hosting/cloud-server.png",
    },
]

const savedPaymentMethods = [
    { id: "card1", name: "Visa **** 4242" },
    { id: "card2", name: "Mastercard **** 5823" },
    { id: "card3", name: "Razorpay UPI" },
]

const recommendedItems = [
    { id: "r1", name: "Daily Backups", price: 10, image: "/images/hosting/backup.jpg" },
    { id: "r2", name: "Dedicated IP", price: 5, image: "/images/hosting/ip.jpg" },
    { id: "r3", name: "Advanced Firewall", price: 15, image: "/images/hosting/firewall.jpg" },
]

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems)
    const [couponCode, setCouponCode] = useState("")
    const [discountAmount, setDiscountAmount] = useState(0)
    const [selectedPayment, setSelectedPayment] = useState(savedPaymentMethods[0].id)
    const { width, height } = useWindowSize();


    const [showPopup, setShowPopup] = useState(false);

    const handleApplyCoupon = () => {
        if (couponCode === "SAVE10") {
            setDiscountAmount(10);
            setShowPopup(true);
            // Auto-hide popup after 3 seconds
            setTimeout(() => setShowPopup(false), 3000);
        } else {
            setDiscountAmount(0);
            alert("Invalid coupon code!");
        }
    };

    const increaseQty = (id: string) => {
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
        )
    }

    const decreaseQty = (id: string) => {
        setCartItems((prev) =>
            prev.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
        )
    }

    const removeItem = (id: string) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const taxRate = 0.18
    const taxAmount = (subtotal - discountAmount) * taxRate
    const total = subtotal - discountAmount + taxAmount
    // popup

    return (
        <div className="bg-gradient-to-br from-[#fdfcfb] to-[#e2ebf0] min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-7xl">
                <h1 className="text-4xl font-bold text-[#001233] text-center mb-12">Your Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20">
                        <ShoppingCart className="w-16 h-16 mx-auto text-[#FD5D07]" />
                        <h2 className="text-2xl font-semibold mt-4 text-[#001233]">Your cart is empty</h2>
                        <p className="text-[#4C5671] mb-6">Looks like you haven’t added anything yet.</p>
                        <Button className="bg-[#FD5D07] text-white px-8 py-3 rounded-full hover:bg-[#FF7E2E] transition">
                            Start Shopping
                        </Button>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Cart Items */}
                        <div className="md:col-span-2 space-y-6">
                            <AnimatePresence>
                                {cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex bg-white rounded-xl shadow p-5 items-center justify-between"
                                    >
                                        <div className="flex items-center gap-5">
                                            <img src={item.image} alt={item.name} className="w-24 h-24 p-4 rounded-lg object-cover border" />
                                            <div>
                                                <h3 className="text-lg font-semibold text-[#001233]">{item.name}</h3>
                                                <p className="text-[#4C5671]">Price: ${item.price.toFixed(2)}</p>
                                                <div className="flex items-center mt-2">
                                                    <Button variant="ghost" onClick={() => decreaseQty(item.id)}>
                                                        <Minus className="w-4 h-4 text-[#FD5D07]" />
                                                    </Button>
                                                    <span className="px-3 text-[#001233] font-medium">{item.quantity}</span>
                                                    <Button variant="ghost" onClick={() => increaseQty(item.id)}>
                                                        <Plus className="w-4 h-4 text-[#FD5D07]" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            onClick={() => removeItem(item.id)}
                                            className="border-[#FD5D07] text-[#FD5D07] hover:bg-[#FD5D07] hover:text-white transition"
                                        >
                                            <Trash2 className="w-4 h-4 mr-1" />
                                            Remove
                                        </Button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Summary */}
                        <div className="bg-white rounded-xl shadow p-6 sticky top-24 h-fit">
                            <h2 className="text-xl font-bold text-[#001233] mb-4">Order Summary</h2>
                            <Separator className="mb-4" />
                            <div className="flex justify-between mb-2 text-[#4C5671]">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2 text-[#4C5671]">
                                <span>Tax (18%)</span>
                                <span>${taxAmount.toFixed(2)}</span>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex justify-between font-bold text-[#001233] text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            {/* Coupon */}
                            <div className="mt-4">
                                <input
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Enter coupon code"
                                    className="border px-3 py-2 rounded w-full"
                                />
                                <button
                                    onClick={handleApplyCoupon}
                                    className="font-medium mt-3 w-full bg-orange-500 text-white px-4 py-2 rounded-full"
                                >
                                    Apply
                                </button>
                                {discountAmount > 0 && (
                                    <p className="text-green-600 mt-2 font-semibold">Discount applied: -${discountAmount.toFixed(2)}</p>
                                )}
                            </div>

                            {/* Payment Methods */}
                            <div className="mt-6">
                                <h3 className="text-[#001233] font-semibold mb-2">Saved Payment Methods</h3>
                                {savedPaymentMethods.map((method) => (
                                    <label
                                        key={method.id}
                                        className={`flex items-center border rounded-lg px-4 py-2 mb-2 cursor-pointer transition ${selectedPayment === method.id ? "border-[#FD5D07] bg-[#FFF8F4]" : "border-gray-200"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            value={method.id}
                                            checked={selectedPayment === method.id}
                                            onChange={(e) => setSelectedPayment(e.target.value)}
                                            className="mr-3"
                                        />
                                        {method.name}
                                    </label>
                                ))}
                            </div>

                            <Link
                                href={'/checkout'}
                                className="w-full mt-6 bg-[#FD5D07] hover:bg-[#FF7E2E] text-center font-medium text-white text-lg py-3 rounded-full"
                                style={{ display: "block" }}
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                )}

                {/* Recommended Items */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-[#001233] mb-6">You might also like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {recommendedItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow p-4 hover:shadow-xl transition">
                                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-4" />
                                <h3 className="font-semibold text-[#001233]">{item.name}</h3>
                                <p className="text-[#FD5D07] font-medium mt-2">${item.price.toFixed(2)}</p>
                                <Button variant="outline" className="mt-3 w-full border-[#FD5D07] text-[#FD5D07] hover:bg-[#FD5D07] hover:text-white">
                                    Add to Cart
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {showPopup && (
                    <>
                        <Confetti
                            width={width}
                            height={height}
                            recycle={false}
                            numberOfPieces={300}
                            gravity={0.3}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.7, zIndex:"999"  }}
                            animate={{ opacity: 1, scale: 1, zIndex:"999"  }}
                            exit={{ opacity: 0, scale: 0.7, zIndex:"999" }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center max-w-sm mx-auto">
                                <CheckCircle className="w-14 h-14 text-green-500 mb-3 animate-bounce" />
                                <h2 className="text-2xl font-bold text-[#001233] mb-1">Hurray! 🎉</h2>
                                <p className="text-[#4C5671]">Coupon code applied successfully.</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>


        </div>
    )
}
