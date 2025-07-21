"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Page() {
    const blogs = [
        {
            img: "/images/blog/blog-1.webp",
            category: "Web Hosting",
            date: "19 Sep, 2023",
            title: "Attentive was born in 2015 help sales teams VPS hosting",
            authorImg: "/images/author/author__one.png",
            authorName: "Mack Jon",
            authorRole: "Developer & Web serenity",
        },
        {
            img: "/images/blog/blog-2.webp",
            category: "Web Hosting",
            date: "19 Sep, 2023",
            title: "Attentive was born in 2015 help sales teams VPS hosting",
            authorImg: "/images/author/author__two.png",
            authorName: "Ahmad Eamin",
            authorRole: "Developer",
        },
        {
            img: "/images/blog/blog-3.webp",
            category: "Web Hosting",
            date: "19 Sep, 2023",
            title: "Attentive was born in 2015 help sales teams VPS hosting",
            authorImg: "/images/author/author__four.png",
            authorName: "Samira Khan",
            authorRole: "Digital Marketer",
        },
    ];

    return (
        <>
            <div className="relative bg-[#FFF8F4] py-24 overflow-hidden">
                {/* Decorative blurred shapes */}
                <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-12">
                    {/* Left content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl pb-5 font-extrabold mb-6 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
                            Blog
                        </h1>
                        <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
                            Experience unparalleled speed and reliability with our dedicated servers,
                            designed for demanding workloads and global reach. Deploy in minutes with
                            full root access.
                        </p>

                    </div>

                    {/* Right image */}
                    <div className="flex justify-center">
                        <img
                            src="/images/banner/breadcrumb-01.webp"
                            alt="Dedicated Server Illustration"
                            className="w-full max-w-md rounded-xl transition-transform hover:scale-105"
                        />
                    </div>
                </div>
            </div>
            <section className="rts-blog  pt-24 pb--60">
                <div className="container">
                    <div className="grid grid-cols-12 gap-8 mb-16 justify-center">
                        {blogs.map((blog, index) => (
                            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 group">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                    {/* Image with overlay */}
                                    <div className="relative w-full h-60 overflow-hidden">
                                        <Link href="/blogdetails">
                                            <Image
                                                src={blog.img}
                                                alt="Blog post thumb"
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </Link>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col justify-between flex-grow">
                                        <div>
                                            <div className="flex items-center justify-between mb-3 text-sm">
                                                <Link
                                                    href="#"
                                                    className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full font-medium hover:bg-amber-200 transition"
                                                >
                                                    {blog.category}
                                                </Link>
                                                <span className="text-gray-500">{blog.date}</span>
                                            </div>
                                            <Link href="/blogdetails" className="block text-lg font-semibold text-gray-900 mb-3 hover:text-amber-600 transition">
                                                {blog.title}
                                            </Link>
                                        </div>

                                        {/* Author */}
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                                <Image
                                                    src={blog.authorImg}
                                                    alt={blog.authorName}
                                                    width={40}
                                                    height={40}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="text-sm">
                                                <p className="font-medium text-gray-900">{blog.authorName}</p>
                                                <span className="text-gray-500">{blog.authorRole}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>

        </>
    )
}

export default Page


