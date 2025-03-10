import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  )
}

export default App
