import React, { useEffect } from 'react';
import about from './images/about.jpg';

const About = () => {
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
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-up">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={about}
              alt="Travel destinations and adventures"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Explore the World</h3>
              <p className="text-sm">Your adventure starts here.</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              About Us
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                At <span className="font-semibold text-blue-600">Journey-Junction</span>, we specialize in crafting personalized travel experiences.
              </p>
              <p>
                Our dedicated team ensures seamless booking and insider guidance to create unforgettable adventures tailored to your preferences.
              </p>
              <p>
                Explore pristine beaches, vibrant cities, and cultural wonders with us. Let's turn your travel dreams into reality today.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { number: "387", label: "Completed Trips" },
                { number: "71", label: "Tour Guides" },
                { number: "46", label: "Destinations" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-2"
                >
                  <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Explore Button */}
            <button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-in-out hover:scale-105 flex items-center space-x-2">
              <span>Explore More</span>
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;