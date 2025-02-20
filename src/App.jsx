import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Services from "./Components/services";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import ImageSlider from "./Components/ImageSlider";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ImageSlider" element={<ImageSlider/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
