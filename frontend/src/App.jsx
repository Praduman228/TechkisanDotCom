import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "swiper/css";
import "swiper/css/pagination";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Outlet />
      {/* <Hero />
      <Services />
      <Automation />
      <Solar />
      <Security />
      <ITservices />
      
      <Outlet /> */}
      <Footer />
    </>
  );
}

export default App;
