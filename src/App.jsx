import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop";
import PageLoader from "./components/PageLoader";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PackageDetails from "./pages/PackageDetails";

const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Loader overlays everything */}
      <PageLoader loading={loading} />

      {/* App stays mounted */}
      <Navbar />

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages/:slug" element={<PackageDetails />} />
      </Routes>

      <Footer />
      <ScrollTop />
    </>
  );
};

export default App;