import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop";
import PageLoader from "./components/PageLoader";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PackageDetails from "./pages/PackageDetails";
import Error404 from "./pages/Error404";

const App = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  // Initialize AOS ONCE for the whole app lifetime
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // set to false if you want animations to replay on scroll back
    });
  }, []);

  // Loader on route change
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Re-scan DOM for AOS elements whenever the route changes
  // (needed because new elements mount on every page navigation)
  useEffect(() => {
    AOS.refreshHard();
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
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
      <ScrollTop />
    </>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { ChevronUp, Sparkles } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer/Footer";
// import ScrollTop from "./components/ScrollTop";
// import PageLoader from "./components/PageLoader";

// import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import PackageDetails from "./pages/PackageDetails";

// const App = () => {
//   const location = useLocation();

//   const [loading, setLoading] = useState(true);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [expanded, setExpanded] = useState(false);

//   // ---------------- Loader ----------------

//   useEffect(() => {
//     setLoading(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   // ---------------- Navbar Scroll ----------------

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 120) {
//         setShowNavbar(false);
//         setExpanded(false);
//       } else {
//         setShowNavbar(true);
//         setExpanded(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <PageLoader loading={loading} />

//       {/* ---------------- Navbar ---------------- */}

//       <AnimatePresence>
//         {showNavbar && (
//           <motion.div
//             initial={{ y: -120, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{
//               y: -120,
//               opacity: 0,
//               transition: {
//                 duration: 0.45,
//               },
//             }}
//           >
//             <Navbar />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ---------------- Floating Navbar Button ---------------- */}

//       <AnimatePresence>
//         {!showNavbar && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.5,
//               y: -30,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//             }}
//             exit={{
//               opacity: 0,
//               scale: 0.5,
//               y: -30,
//             }}
//             transition={{
//               duration: 0.45,
//             }}
//             className="fixed left-1/2 top-6 z-[9999] -translate-x-1/2"
//           >
//             {/* Glow */}

//             <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-500/30 via-white/10 to-orange-500/30 blur-xl"></div>

//             <motion.button
//               onMouseEnter={() => setExpanded(true)}
//               onMouseLeave={() => setExpanded(false)}
//               onClick={() => {
//                 setShowNavbar(true);
//                 window.scrollTo({
//                   top: 0,
//                   behavior: "smooth",
//                 });
//               }}
//               animate={{
//                 width: expanded ? 260 : 88,
//               }}
//               transition={{
//                 duration: 0.45,
//                 ease: "easeInOut",
//               }}
//               className="relative flex h-20 items-center overflow-hidden rounded-full border border-white/20 bg-black/55 px-5 backdrop-blur-2xl"
//             >
//               {/* Left Glow */}

//               <div className="absolute left-0 top-0 h-full w-2 rounded-l-full bg-sky-400 shadow-[0_0_30px_8px_#38bdf8]"></div>

//               {/* Right Glow */}

//               <div className="absolute right-0 top-0 h-full w-2 rounded-r-full bg-orange-400 shadow-[0_0_30px_8px_#fb923c]"></div>

//               {/* Icon */}

//               <motion.div
//                 animate={{
//                   rotate: expanded ? 360 : 0,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                 }}
//                 className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 shadow-lg"
//               >
//                 <ChevronUp className="text-white" size={28} />
//               </motion.div>

//               {/* Text */}

//               <AnimatePresence>
//                 {expanded && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       x: 20,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     exit={{
//                       opacity: 0,
//                       x: 20,
//                     }}
//                     className="ml-5 text-left"
//                   >
//                     <h3 className="text-lg font-bold text-white">
//                       Open Navbar
//                     </h3>

//                     <p className="text-sm text-gray-300">
//                       Click to expand
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Sparkle */}

//               {expanded && (
//                 <motion.div
//                   animate={{
//                     rotate: 360,
//                   }}
//                   transition={{
//                     repeat: Infinity,
//                     duration: 6,
//                     ease: "linear",
//                   }}
//                   className="absolute right-6"
//                 >
//                   <Sparkles
//                     size={18}
//                     className="text-orange-300"
//                   />
//                 </motion.div>
//               )}
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* ---------------- Routes ---------------- */}

//       <Routes location={location}>
//         <Route path="/" element={<Home />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/packages/:slug" element={<PackageDetails />} />
//       </Routes>

//       <Footer />
//       <ScrollTop />
//     </>
//   );
// };

// export default App;