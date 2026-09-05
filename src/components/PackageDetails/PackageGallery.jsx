import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

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
    <section className="mt-12">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className="
            overflow-hidden
            rounded-[36px]
            border border-purple-200/60
            bg-gradient-to-br from-purple-50/80 via-fuchsia-50/70 to-purple-100/80
            shadow-[0_20px_60px_rgba(109,40,217,0.18)]
          "
        >
          {/* Header */}
          <div
            className="
              relative
              overflow-hidden
              border-b border-white/20
              bg-gradient-to-r
              from-[#6D28D9]
              via-[#9333EA]
              to-[#C026D3]
              px-8 py-7
              md:px-10 md:py-9
            "
          >
            {/* Glow */}
            <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-purple-300/30 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <h2
                className="
                  text-4xl
                  font-black
                  tracking-tight
                  text-white
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.18)]
                  md:text-5xl
                "
              >
                Package Gallery
              </h2>

              <div
                className="
                  hidden
                  rounded-full
                  border border-white/40
                  bg-white/95
                  px-5 py-2.5
                  text-sm font-bold
                  text-[#7C3AED]
                  shadow-lg
                  md:block
                "
              >
                {images.length} Photos
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="px-8 py-8 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
              >
                {currentImages.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[28px]
                      bg-gradient-to-br
                      from-[#C084FC]
                      via-[#8B5CF6]
                      to-[#6D28D9]
                      p-[3px]
                      shadow-[0_18px_35px_rgba(109,40,217,0.35)]
                      transition-shadow
                      duration-500
                      hover:shadow-[0_25px_45px_rgba(109,40,217,0.5)]
                    "
                  >
                    <div className="relative overflow-hidden rounded-[25px]">
                      <img
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        onClick={() => setPreview(img)}
                        className="
                          h-[260px]
                          w-full
                          cursor-pointer
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-110
                        "
                      />

                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-t
                          from-purple-950/70
                          via-transparent
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      >
                        <button
                          onClick={() => setPreview(img)}
                          className="
                            absolute
                            bottom-5 right-5
                            flex h-12 w-12
                            items-center justify-center
                            rounded-full
                            bg-white
                            text-[#7C3AED]
                            shadow-xl
                            transition
                            hover:scale-110
                          "
                        >
                          <Expand size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-9 flex items-center justify-center gap-5">
                <button
                  onClick={() => page > 1 && setPage(page - 1)}
                  disabled={page === 1}
                  className={`
                    flex h-11 w-11 items-center justify-center
                    rounded-full transition
                    ${
                      page === 1
                        ? "cursor-not-allowed bg-slate-200 text-slate-400"
                        : "bg-white text-purple-600 shadow-lg hover:scale-110"
                    }
                  `}
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-3">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`
                        transition-all duration-300
                        ${
                          page === i + 1
                            ? "h-3 w-10 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#C026D3]"
                            : "h-3 w-3 rounded-full bg-purple-200 hover:bg-purple-400"
                        }
                      `}
                    />
                  ))}
                </div>

                <button
                  onClick={() => page < totalPages && setPage(page + 1)}
                  disabled={page === totalPages}
                  className={`
                    flex h-11 w-11 items-center justify-center
                    rounded-full transition
                    ${
                      page === totalPages
                        ? "cursor-not-allowed bg-slate-200 text-slate-400"
                        : "bg-gradient-to-r from-[#7C3AED] to-[#C026D3] text-white shadow-lg hover:scale-110"
                    }
                  `}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Preview */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="
              fixed inset-0 z-[99999]
              flex items-center justify-center
              bg-black/90 p-6
            "
          >
            <button
              onClick={() => setPreview(null)}
              className="
                absolute right-8 top-8
                rounded-full bg-white p-3
                text-slate-900 shadow-xl
                transition hover:scale-110
              "
            >
              <X />
            </button>

            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={preview}
              alt="Gallery preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw] rounded-[30px] shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}