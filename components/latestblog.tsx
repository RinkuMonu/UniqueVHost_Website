"use client";

import Image from "next/image";
import Link from "next/link";
import "@/app/styles/style.css";
import "@/app/styles/plug.css";
import "@/app/styles/bootstrap.css";
import "@/app/styles/animation.css";
import "@/app/styles/header.css";
import "@/app/styles/nav.css";
import "@/app/styles/forms.css";
import "@/app/styles/mobile.css"; 
import '@/app/styles/site-elements.css'
import "@/app/styles/reset.css";
import "@/app/styles/typography.css"
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
    <section className="rts-blog body-bg-2 pt--120 pb--60">
      <div className="container">
        <div className="row justify-content-center justify-content-md-start">
          <div className="col-md-12 col-sm-10">
            <div className="rts-section text-center">
              <h2 className="rts-section__title">Latest Article</h2>
            </div>
          </div>
        </div>

        <div className="row g-30 mb--60 justify-content-center justify-content-md-start">
          {blogs.map((blog, index) => (
            <div className="col-lg-4 col-md-6 col-sm-10" key={index}>
              <div className="rts-blog__single">
                <Link href="/blog-details">
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
                  <Link href="/blog-details" className="title">
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
          ))}
        </div>

        {/* View all blogs button */}
        <div className="row">
          <div className="col-12 text-center mt-4">
            <Link href="/blog" className="rts-btn btn-primary">
              View All Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
