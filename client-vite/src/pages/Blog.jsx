import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Must-Watch Movies of 2024",
      excerpt: "Discover the most captivating films that defined cinema this year, from blockbuster hits to indie masterpieces.",
      category: "Reviews",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1489599735734-79b4169c4388?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "The Evolution of Streaming Technology",
      excerpt: "How streaming platforms have revolutionized the way we consume entertainment and what's next for the industry.",
      category: "Technology",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Behind the Scenes: Movie Production Secrets",
      excerpt: "Explore the fascinating world of filmmaking and discover secrets from Hollywood's biggest productions.",
      category: "Industry",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Genre Guide: Understanding Film Categories",
      excerpt: "A comprehensive guide to movie genres and how to discover your next favorite film based on your preferences.",
      category: "Guides",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "The Art of Cinematography in Modern Films",
      excerpt: "Analyzing visual storytelling techniques and how cinematography shapes our movie-watching experience.",
      category: "Analysis",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "International Cinema: Hidden Gems to Explore",
      excerpt: "Discover incredible films from around the world that deserve a spot on your watchlist.",
      category: "Reviews",
      date: "Dec 3, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1489599735734-79b4169c4388?w=400&h=250&fit=crop"
    }
  ];

  const categories = ['All', 'Reviews', 'Technology', 'Industry', 'Guides', 'Analysis'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            CinemaSphere Blog
          </h1>
          <p className="text-xl text-orange-100 leading-relaxed">
            Insights, reviews, and stories from the world of cinema
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Post</h2>
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500 transition-colors">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.date}</span>
                    <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">All Posts</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map(post => (
            <article key={post.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-slate-700 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <button className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 text-lg mb-6">
              Get the latest movie insights and platform updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;