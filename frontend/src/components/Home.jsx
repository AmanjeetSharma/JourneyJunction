const Home = () => {
    return (
      <section className="py-12 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to Journey-Junction</h1>
          <p className="text-gray-600 mt-2">Your gateway to the most incredible travel destinations</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Explore Now</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[{
            img: "./assets/discover/discover-1.jpg",
            title: "Jaipur",
            desc: "Discover the majestic beauty and rich history of Jaipur's forts."
          }, {
            img: "./assets/discover/discover-2.jpg",
            title: "Agra",
            desc: "Home to the timeless symbol of love, the majestic Taj Mahal."
          }, {
            img: "./assets/discover/discover-3.jpg",
            title: "Mumbai",
            desc: "The heartbeat of India, rich in culture and Bollywood dreams."
          }].map((place, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={place.img} alt={place.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{place.title}</h4>
                <p className="text-gray-600 mt-2">{place.desc}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Home;