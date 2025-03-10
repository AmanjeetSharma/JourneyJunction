import { useEffect } from 'react';

const Home = () => {
  // Add animation effect on component mount
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10');
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-10');
      }, 200);
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-6">
      <div className="text-center fade-in-up transition-all duration-1000 ease-out">
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Welcome to My Space
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          A place where creativity meets innovation. Explore my world of ideas and projects.
        </p>
        <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Animated Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {[
          {
            icon: "🚀",
            title: "Innovative Ideas",
            desc: "Bringing fresh and creative solutions to the table.",
          },
          {
            icon: "🎨",
            title: "Creative Designs",
            desc: "Crafting visually stunning and user-friendly designs.",
          },
          {
            icon: "💻",
            title: "Tech Enthusiast",
            desc: "Passionate about cutting-edge technology and development.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 fade-in-up"
            style={{ transitionDelay: `${20}ms` }}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;