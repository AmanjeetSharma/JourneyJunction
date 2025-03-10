import * as Icons from 'react-icons/ri';  // Import all icons from 'ri' (Remix Icon)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <h4>Thank you for visiting Journey-Junction</h4>
        <div className="social flex space-x-4">
          {/* Using Tailwind color classes for icons */}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <Icons.RiFacebookFill className="text-3xl" />
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800">
            <Icons.RiInstagramFill className="text-3xl" />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-500">
            <Icons.RiTwitterFill className="text-3xl" />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-800">
            <Icons.RiLinkedinFill className="text-3xl" />
          </a>
          <a href="#" className="text-red-600 hover:text-red-700">
            <Icons.RiYoutubeFill className="text-3xl" />
          </a>
        </div>
        <p>Embark on your next adventure with us and make memories that will last a lifetime. Happy travels!</p>
      </div>
    </footer>
  );
};

export default Footer;
