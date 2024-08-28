import "./responsive.css";
import "./style.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar.js";

import Home from "./Pages/HomePage/Home.js";
import Gallery from "./Pages/GalleryPage/Gallery.js";
import About from "./Pages/AboutPage/About";

import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/hakkimizda" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
