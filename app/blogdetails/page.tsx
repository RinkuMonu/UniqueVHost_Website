"use client";
import { Search, Calendar, User, Eye, Tag, MessageSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "./blogdetail.css"


interface RecentPost {
  id: number;
  date: string;
  title: string;
  image: string;
}

interface BlogCategory {
  name: string;
  count: number;
}

interface Comment {
  id: number;
  name: string;
  email: string;
  comment: string;
  date: string;
}

const BlogsDetails = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const recentPosts: RecentPost[] = [
    {
      id: 1,
      date: "July 5, 2024",
      title: "AEPS: Transforming Digital Banking in India",
      image: "/images/blog/blog-thumb-1.webp",
    },
    {
      id: 2,
      date: "June 28, 2024",
      title: "BBPS: The Future of Digital Bill Payments in India",
      image: "/images/blog/blog-thumb-2.webp",
    },
    {
      id: 3,
      date: "June 15, 2024",
      title: "Six 'what ifs' that could transform digital agency",
      image: "/images/blog/blog-thumb-3.webp",
    },
  ];

  const categories: BlogCategory[] = [
    { name: "Uncategorized", count: 78 },
    { name: "Technology", count: 5 },
    { name: "Business & Marketing", count: 23 },
    { name: "Digital Agency", count: 10 },
  ];

  const tags = ["Barbershop", "Culture", "Grooming", "Community", "Trends", "Style"];



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const newComment: Comment = {
        id: comments.length + 1,
        name,
        email,
        comment,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };

      setComments([newComment, ...comments]);
      setName("");
      setEmail("");
      setComment("");
      setIsSubmitting(false);
    }, 1000);
  };


  return (
    <div className=" h-screen overflow-auto scrollbar-hide">
      {/* Hero Section */}
      <div className="relative bg-[#FFF8F4] py-24 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-12">
          {/* Left content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 pb-5 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              Blog Details
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8 ">
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

      {/* Main Content */}
      <div className="py-12 md:py-16 ">
        <div className="container mx-auto px-4">
          <div className=" flex flex-col lg:flex-row gap-8 ">
            {/* Main Blog Content */}
            <div className="lg:w-2/3 ">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
                {/* Featured Image */}
                <div className="relative h-80 md:h-96 w-full">
                  <Image
                    src="/images/blog/blog-1.webp"
                    alt="Blog featured image"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Blog Content */}
                <div className="p-6 md:p-8">
                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="flex items-center gap-2 bg-[#FD5D07]/10 text-[#FD5D07] px-4 py-2 rounded-full text-sm font-medium">
                      <User className="text-[#FD5D07]" />
                      by admin
                    </span>
                    <span className="flex items-center gap-2 bg-[#4C5671]/10 text-[#4C5671] px-4 py-2 rounded-full text-sm font-medium">
                      <Calendar className="text-[#4C5671]" />
                      July 5, 2024
                    </span>
                    <span className="flex items-center gap-2 bg-[#001233]/10 text-[#001233] px-4 py-2 rounded-full text-sm font-medium">
                      <Eye className="text-[#001233]" />
                      1.2k views
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-6 leading-tight">
                    Unraveling the Enduring Charm and Evolution of Barbershops as Societal and Cultural Hubs
                  </h2>

                  {/* Blog Content */}
                  <div className="text-[#4C5671] mb-8 space-y-6">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                    <blockquote className="border-l-4 border-[#FD5D07] pl-6 py-4 my-6 bg-[#FFF8F4] rounded-r-lg italic text-[#001233]">
                      <p className="mb-0">
                        "The barbershop has always been more than just a place for haircuts - it's a community
                        cornerstone where stories are shared and bonds are formed."
                      </p>
                    </blockquote>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="border-t border-[#FFF8F4] pt-6">
                    <h6 className="flex items-center gap-2 text-lg font-semibold mb-4 text-[#001233]">
                      <Tag className="text-[#FD5D07]" />
                      Tags:
                    </h6>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-4 py-2 border border-[#FD5D07] text-[#FD5D07] rounded-full text-sm font-medium hover:bg-[#FFF8F4] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <div className=" mx-auto mt-12">
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mx-auto">

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="w-6 h-6 text-[#FD5D07]" />
                    <h3 className="text-xl font-semibold text-[#001233]">
                      {comments.length > 0 ? `${comments.length} Comments` : "Leave a Comment"}
                    </h3>
                  </div>
                  {/* Comment Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h4 className="text-lg font-semibold text-[#001233]">Post a Comment</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm text-[#4C5671] mb-1">Name *</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-2 border border-[#F4F4F4] rounded-md focus:ring-2 focus:ring-[#FD5D07] outline-none text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-[#4C5671] mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-[#F4F4F4] rounded-md focus:ring-2 focus:ring-[#FD5D07] outline-none text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="comment" className="block text-sm text-[#4C5671] mb-1">Comment *</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-[#F4F4F4] rounded-md focus:ring-2 focus:ring-[#FD5D07] outline-none text-sm"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#FD5D07] hover:bg-[#e35205] text-white px-5 py-2.5 rounded-md text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Posting...' : 'Post Comment'}
                    </button>
                  </form>

                  {/* Comment List */}
                  {comments.length === 0 ? (
                    <div className="text-center py-8 text-[#4C5671]">
                      No comments yet. Be the first to share your thoughts!
                    </div>
                  ) : (
                    <div className="space-y-5 mb-8">
                      {comments.map((comment) => (
                        <div key={comment.id} className="border-b border-[#F4F4F4] pb-4 last:border-0">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-9 h-9 rounded-full bg-[#FD5D07]/10 flex items-center justify-center text-[#FD5D07] font-semibold text-sm">
                              {comment.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <h4 className="font-medium text-[#001233] text-sm">{comment.name}</h4>
                              <p className="text-xs text-[#8B95A5]">{comment.date}</p>
                            </div>
                          </div>
                          <p className="text-[#4C5671] text-sm pl-12">{comment.comment}</p>
                        </div>
                      ))}
                    </div>
                  )}


                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 ">
       <div className="sticky top-8 space-y-6">
               {/* Search Box */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h5 className="text-xl font-bold mb-4 text-[#001233]">Search</h5>
                <div className="relative">
                  <input
                    type="search"
                    className="w-full pl-12 pr-4 py-3 border border-[#FFF8F4] rounded-full focus:ring-2 focus:ring-[#FD5D07] focus:border-[#FD5D07] outline-none transition-all"
                    placeholder="Search articles..."
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4C5671] text-xl" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h5 className="text-xl font-bold mb-4 text-[#001233]">Blog Categories</h5>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex justify-between items-center py-3 px-4 hover:bg-[#FFF8F4] rounded-lg transition-colors"
                    >
                      <span className="text-[#4C5671]">{category.name}</span>
                      <span className="bg-[#FD5D07]/10 text-[#FD5D07] px-3 py-1 rounded-full text-xs font-semibold">
                        {category.count}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h5 className="text-xl font-bold mb-4 text-[#001233]">Recent Posts</h5>
                <div className="space-y-5">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-[#4C5671] mb-1 flex items-center gap-1">
                          <Calendar className="text-[#4C5671]" />
                          {post.date}
                        </p>
                        <h6 className="text-base font-semibold text-[#001233] leading-snug hover:text-[#FD5D07] transition-colors">
                          {post.title}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
       </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default BlogsDetails;