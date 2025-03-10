import { useState, useEffect } from "react";
import blog1 from "./images/blog-1.jpg";
import blog2 from "./images/blog-2.webp";
import blog3 from "./images/blog-3.jpg";

// Simulate fetching blog posts from an API
const fetchBlogPosts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          img: blog1,
          title: "Exploring the Himalayas",
          desc: "A breathtaking journey through the highest peaks of the world.",
        },
        {
          img: blog2,
          title: "A Foodie's Guide to Delhi",
          desc: "Discover the mouth-watering street food of India's capital.",
        },
        {
          img: blog3,
          title: "Beaches of Goa",
          desc: "Experience the serene beauty and vibrant nightlife of Goa.",
        },
      ]);
    }, 2000); // Simulate a 2-second delay
  });
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const data = await fetchBlogPosts();
        setBlogPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Latest Travel Stories</h1>
          <p className="text-gray-600">
            Explore the world through our latest travel experiences.
          </p>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6">
      {/* Title Animation */}
      <div className="text-center animate-dropDown">
        <h1 className="text-3xl font-bold">Latest Travel Stories</h1>
        <p className="text-gray-600">
          Explore the world through our latest travel experiences.
        </p>
      </div>

      {/* Cards Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-48 object-cover"
              loading="lazy" // Lazy load images for better performance
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">{post.title}</h4>
              <p className="text-gray-600 mt-2">{post.desc}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;