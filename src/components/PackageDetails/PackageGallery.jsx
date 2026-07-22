import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";

const IMAGES_PER_PAGE = 3;

export default function PackageGallery({ tour }) {
  const images = tour?.gallery || [];

  const [page, setPage] = useState(1);
  const [preview, setPreview] = useState(null);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  const currentImages = useMemo(() => {
    const start = (page - 1) * IMAGES_PER_PAGE;
    return images.slice(start, start + IMAGES_PER_PAGE);
  }, [images, page]);

  if (!images.length) return null;

  return (
    <section className="mt-20">

      <div className="mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-8 flex items-end justify-between">

          <div>

            <h2 className="text-4xl font-black text-sky-700">
              Package Gallery
            </h2>

            <p className="mt-2 text-slate-500">
              Beautiful memories captured during this journey.
            </p>

          </div>

          <div className="hidden rounded-full bg-sky-50 px-5 py-2 text-sm font-semibold text-sky-700 md:block">
            {images.length} Photos
          </div>

        </div>

        {/* Images */}

        <AnimatePresence mode="wait">

          <motion.div
            key={page}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: .35,
            }}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >

            {currentImages.map((img, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[28px] shadow-xl"
              >

                <img
                  src={img}
                  alt=""
                  onClick={() => setPreview(img)}
                  className="h-[260px] w-full cursor-pointer object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">

                  <button
                    onClick={() => setPreview(img)}
                    className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-600 shadow-xl transition hover:scale-110"
                  >
                    <Expand size={20} />
                  </button>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </AnimatePresence>

        {/* Pagination */}

        {totalPages > 1 && (

          <div className="mt-8 flex items-center justify-center gap-5">

            <button
              onClick={() => page > 1 && setPage(page - 1)}
              disabled={page === 1}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
                page === 1
                  ? "cursor-not-allowed bg-slate-200 text-slate-400"
                  : "bg-white shadow-lg hover:scale-110"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-3">

              {Array.from({ length: totalPages }).map((_, i) => (

                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`transition-all duration-300 ${
                    page === i + 1
                      ? "h-3 w-10 rounded-full bg-gradient-to-r from-sky-600 to-orange-500"
                      : "h-3 w-3 rounded-full bg-slate-300 hover:bg-slate-400"
                  }`}
                />

              ))}

            </div>

            <button
              onClick={() =>
                page < totalPages && setPage(page + 1)
              }
              disabled={page === totalPages}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition ${
                page === totalPages
                  ? "cursor-not-allowed bg-slate-200 text-slate-400"
                  : "bg-gradient-to-r from-sky-600 to-orange-500 text-white shadow-lg hover:scale-110"
              }`}
            >
              <ChevronRight size={20} />
            </button>

          </div>

        )}

      </div>

      {/* Preview */}

      <AnimatePresence>

        {preview && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-6"
          >

            <button
              onClick={() => setPreview(null)}
              className="absolute right-8 top-8 rounded-full bg-white p-3 shadow-xl"
            >
              <X />
            </button>

            <motion.img
              initial={{
                scale: .9,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: .9,
              }}
              src={preview}
              className="max-h-[90vh] max-w-[90vw] rounded-[30px] shadow-2xl"
            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}