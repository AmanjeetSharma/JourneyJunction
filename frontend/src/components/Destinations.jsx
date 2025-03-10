import React, { useState, useEffect } from "react";
import jaipur from "./images/discover-1.jpg";
import agra from "./images/discover-2.jpg";
import mumbai from "./images/discover-3.jpg";

// Mock API function to simulate fetching data from a backend
const fetchDestinations = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          img: jaipur,
          title: "Jaipur",
          desc: "Discover the majestic beauty and rich history of Jaipur's forts.",
        },
        {
          img: agra,
          title: "Agra",
          desc: "Home to the timeless symbol of love, the majestic Taj Mahal.",
        },
        {
          img: mumbai,
          title: "Mumbai",
          desc: "The heartbeat of India, rich in culture and Bollywood dreams.",
        },
      ]);
    }, 1000); // Simulate a 1-second delay
  });
};

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDestinations = async () => {
      try {
        const data = await fetchDestinations();
        setDestinations(data);
      } catch (err) {
        setError("Failed to fetch destinations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getDestinations();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Discover the most attractive destinations</h1>
          <p className="text-gray-600 mt-2">Let's see India with your passion</p>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Discover the most attractive destinations</h1>
          <p className="text-gray-600 mt-2">Let's see India with your passion</p>
        </div>
        <div className="text-center text-red-600 mt-8">{error}</div>
      </section>
    );
  }

  return (
    <section className="py-12 px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Discover the most attractive destinations</h1>
        <p className="text-gray-600 mt-2">Let's see India with your passion</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={place.img}
              alt={place.title}
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">{place.title}</h4>
              <p className="text-gray-600 mt-2">{place.desc}</p>
              <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded hover:from-blue-700 hover:to-purple-700 focus:outline-none transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;