import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  MapPin,
  Maximize2,
  Minimize2,
  X,
} from "lucide-react";

import gallery from '../data/gallery'

const Gallery = () => {
  const [selected, setSelected] = useState(null); // the clicked item
  const [isMaximized, setIsMaximized] = useState(false);

  const openImage = (item) => {
    setSelected(item);
    setIsMaximized(false); // always open at 50% size first
  };

  const closeImage = () => {
    setSelected(null);
    setIsMaximized(false);
  };

  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-20">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            <Camera size={16} />
            Travel Memories
          </span>

          <h1 className="mt-5 text-5xl font-extrabold text-slate-800">
            Our Gallery
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Every destination has a story. Explore breathtaking mountains,
            crystal-clear lakes, pristine beaches, lush forests, and unforgettable
            travel moments captured from our most popular tour packages.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {gallery.map((item) => (

            <div
              key={item.id}
              onClick={() => openImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-100"></div>

              {/* Content */}

              <div className="absolute bottom-0 left-0 right-0 p-6">

                <div className="translate-y-5 transition duration-500 group-hover:translate-y-0">

                  <div className="mb-3 inline-flex rounded-full bg-white/20 p-3 backdrop-blur">
                    <Camera
                      size={20}
                      className="text-white"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-white/90">

                    <MapPin size={16} />

                    <span>Explore Destination</span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Lightbox Modal */}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div
              layout
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: 1,
                width: isMaximized ? "95vw" : "80vw",
                height: isMaximized ? "95vh" : "80vh",
              }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl bg-black shadow-2xl"
            >

              {/* Control icons */}

              {/* Control icons */}

              <div className="absolute right-4 top-4 z-10 flex gap-2">

                <button
                  onClick={() => setIsMaximized(true)}
                  disabled={isMaximized}
                  className="rounded-full bg-slate-800/90 p-2.5 text-white shadow-lg transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-800/40 disabled:text-white/40"
                  aria-label="Maximize"
                >
                  <Maximize2 size={18} />
                </button>

                <button
                  onClick={() => setIsMaximized(false)}
                  disabled={!isMaximized}
                  className="rounded-full bg-slate-800/90 p-2.5 text-white shadow-lg transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-slate-800/40 disabled:text-white/40"
                  aria-label="Minimize"
                >
                  <Minimize2 size={18} />
                </button>

                <button
                  onClick={closeImage}
                  className="rounded-full bg-slate-800/90 p-2.5 text-white shadow-lg transition hover:bg-red-600"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

              </div>

              {/* Image */}

              <img
                src={selected.image}
                alt={selected.title}
                className="h-full w-full object-cover"
              />

              {/* Caption */}

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">
                  {selected.title}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-white/90">
                  <MapPin size={16} />
                  <span>Explore Destination</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;