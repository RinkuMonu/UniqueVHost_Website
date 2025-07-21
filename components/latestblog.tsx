"use client";

import Image from "next/image";
import Link from "next/link";

export default function LatestBlog() {
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
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Get the latest tips and insights on web hosting, performance optimization, and online growth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Link href="/blog-details">
                  <Image
                    src={blog.img}
                    alt="Blog Thumbnail"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 hover:opacity-50 transition"></div>
                </Link>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="bg-amber-500 text-white px-2 py-0.5 rounded-full">{blog.category}</span>
                  <span className="text-gray-400">{blog.date}</span>
                </div>
                <Link href="/blog-details" className="text-lg font-bold text-gray-900 mb-3 hover:text-amber-600 transition">
                  {blog.title}
                </Link>

                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border-2 border-amber-500">
                    <Image
                      src={blog.authorImg}
                      alt={blog.authorName}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">{blog.authorName}</p>
                    <p className="text-gray-500 text-xs">{blog.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-medium transition shadow-md">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
