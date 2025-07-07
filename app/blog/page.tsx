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
              src="/images/banner/breadcrumb-05.webp"
              alt="Dedicated Server Illustration"
              className="w-full max-w-md rounded-xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
                <section className="rts-blog  pt-24 pb--60">
                    <div className="container">


                        <div className="grid grid-cols-12 gap-6 mb--60 justify-content-center justify-content-md-start">
                            {blogs.map((blog, index) => (
                                <Link href="/blogdetails" className='col-span-12 md:col-span-6 lg:col-span-4'>
                                <div className="" key={index}>
                                    <div className="rts-blog__single">
                                        <Link href="/blogdetails">
                                            <Image
                                                className="blog__thumb"
                                                src={blog.img}
                                                alt="Blog post thumb"
                                                width={500}
                                                height={300}
                                            />
                                        </Link>
                                        <div className="rts-blog__single--meta">
                                            <div className="cat__date">
                                                <Link href="#" className="cat">
                                                    {blog.category}
                                                </Link>
                                                <span className="date">{blog.date}</span>
                                            </div>
                                            <Link href="/blogdetails" className="title">
                                                {blog.title}
                                            </Link>
                                            <div className="rts-blog__single--author">
                                                <div className="author">
                                                    <Image
                                                        src={blog.authorImg}
                                                        alt={blog.authorName}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                                <div className="author__content">
                                                    <Link href="#">{blog.authorName}</Link>
                                                    <span>{blog.authorRole}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </section>
      
        </>
    )
}

export default Page


