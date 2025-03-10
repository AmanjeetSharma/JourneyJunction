import * as Icons from 'react-icons/ri'; // Import all icons from 'ri' (Remix Icon)

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h4 className="text-2xl font-semibold mb-4">Thank you for visiting Journey-Junction</h4>
        
        <div className="social flex justify-center space-x-6 mb-6">
          {/* Using Tailwind color classes and adding animations on hover */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transform transition-all duration-300 hover:scale-125"
          >
            <Icons.RiFacebookFill className="text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transform transition-all duration-300 hover:scale-125"
          >
            <Icons.RiInstagramFill className="text-4xl" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transform transition-all duration-300 hover:scale-125"
          >
            <Icons.RiTwitterFill className="text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 transform transition-all duration-300 hover:scale-125"
          >
            <Icons.RiLinkedinFill className="text-4xl" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-700 transform transition-all duration-300 hover:scale-125"
          >
            <Icons.RiYoutubeFill className="text-4xl" />
          </a>
        </div>

        <p className="text-gray-400 mt-4 text-lg">
          Embark on your next adventure with us and make memories that will last a lifetime. Happy travels!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
