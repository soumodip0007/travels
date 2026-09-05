import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, MapPin, Globe, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

import packages from "../data/packages";
import ParticlesBackground from "../components/ParticlesBackground";

const Gallery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const domesticPackages = packages.filter(
    (item) => item.category?.toLowerCase() === "domestic"
  );

  const internationalPackages = packages.filter(
    (item) => item.category?.toLowerCase() === "international"
  );

  const displayedPackages =
    activeCategory === "domestic"
      ? domesticPackages
      : activeCategory === "international"
        ? internationalPackages
        : packages;

  const openGallery = (slug) => {
    navigate(`/gallery/${slug}`);
  };

  return (
    <div className="relative z-0 min-h-screen">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <ParticlesBackground />
      </div>

      <section className="relative overflow-hidden rounded-[55px] px-6 py-10">

        <div className="mx-auto w-[92%] max-w-7xl">

          {/* Heading */}

          <div className="mb-14 text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-[#EDE9FE] px-5 py-2 text-sm font-semibold text-[#6957DF]">
              <Camera size={16} />
              Travel Memories
            </span>

            <h1 className="mt-5 text-5xl font-extrabold text-slate-800">
              Our Gallery
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Explore beautiful moments from our domestic and international
              travel packages. Select a package to view its complete gallery.
            </p>

          </div>

          {/* Category Buttons */}

          <div className="mb-12 flex flex-wrap justify-center gap-4">

            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${activeCategory === "all"
                  ? "bg-[#6957DF] text-white shadow-lg"
                  : "bg-white text-slate-700 shadow"
                }`}
            >
              <Camera size={17} />
              All Packages
            </button>

            <button
              onClick={() => setActiveCategory("domestic")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${activeCategory === "domestic"
                  ? "bg-[#6957DF] text-white shadow-lg"
                  : "bg-white text-slate-700 shadow"
                }`}
            >
              <Home size={17} />
              Domestic
            </button>

            <button
              onClick={() => setActiveCategory("international")}
              className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${activeCategory === "international"
                  ? "bg-[#6957DF] text-white shadow-lg"
                  : "bg-white text-slate-700 shadow"
                }`}
            >
              <Globe size={17} />
              International
            </button>

          </div>

          {/* Package Gallery */}

          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >

            {displayedPackages.map((item) => (

              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => openGallery(item.slug)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl"
              >

                {/* Cover Image */}

                <div className="relative h-72 overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Image Count */}

                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <Camera size={14} />
                    {item.gallery?.length || 0}
                  </div>

                  {/* Package Details */}

                  <div className="absolute bottom-0 left-0 right-0 p-5">

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

          {displayedPackages.length === 0 && (
            <div className="py-20 text-center text-slate-500">
              No packages available.
            </div>
          )}

        </div>

      </section>

    </div>
  );
};

export default Gallery;