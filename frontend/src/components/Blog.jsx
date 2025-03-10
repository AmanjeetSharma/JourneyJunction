const Blog = () => {
    return (
      <section className="py-12 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Latest Travel Stories</h1>
          <p className="text-gray-600">Explore the world through our latest travel experiences.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[{
            img: "./assets/blog/blog-1.jpg",
            title: "Exploring the Himalayas",
            desc: "A breathtaking journey through the highest peaks of the world."
          }, {
            img: "./assets/blog/blog-2.jpg",
            title: "A Foodie's Guide to Delhi",
            desc: "Discover the mouth-watering street food of India's capital."
          }, {
            img: "./assets/blog/blog-3.jpg",
            title: "Beaches of Goa",
            desc: "Experience the serene beauty and vibrant nightlife of Goa."
          }].map((post, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{post.title}</h4>
                <p className="text-gray-600 mt-2">{post.desc}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blog;