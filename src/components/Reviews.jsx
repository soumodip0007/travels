import { useState } from "react";
import {
  Star,
  Quote,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

import reviews from "../data/reviews";

const PER_PAGE = 4;
const MAX_DOTS = 5;

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-orange-400 text-orange-400"
              : "fill-slate-200 text-slate-200"
          }
        />
      ))}
    </div>
  );
}

function ProfileImage({ src }) {
  const [imageError, setImageError] = useState(false);

  const hasValidSource =
    typeof src === "string" && src.trim() !== "" && !imageError;

  return (
    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
      {hasValidSource ? (
        <img
          src={src}
          alt=""
          onError={() => setImageError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
          <User size={30} strokeWidth={1.8} />
        </div>
      )}
    </div>
  );
}

export default function Reviews() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(reviews.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visibleReviews = reviews.slice(start, start + PER_PAGE);

  // Changes the page without scrolling
  const goToPage = (p) => {
    if (p < 1 || p > totalPages || p === page) return;
    setPage(p);
  };

  // Sliding window of page dots (max MAX_DOTS) so it fits on mobile
  const getVisiblePages = () => {
    if (totalPages <= MAX_DOTS) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const first = Math.max(
      1,
      Math.min(page - Math.floor(MAX_DOTS / 2), totalPages - MAX_DOTS + 1)
    );

    return Array.from({ length: MAX_DOTS }, (_, i) => first + i);
  };

  return (
    <section
      className="
        relative
        mt-12
        rounded-[28px]
        border
        border-white/70
        bg-white/80
        p-4
        shadow-[0_25px_60px_rgba(105,87,223,0.12)]
        backdrop-blur-xl
        sm:rounded-[36px]
        sm:p-8
        md:p-10
      "
    >
      <div className="mx-auto w-full max-w-7xl sm:w-[92%]">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span
            className="
              inline-block
              rounded-full
              bg-gradient-to-r
              from-[#6957DF]
              via-[#7C3AED]
              to-[#A855F7]
              px-4
              py-1
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-white
            "
          >
            Traveler Stories
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-800 md:text-5xl">
            Loved by <span className="text-[#6957DF]">thousands</span> of
            travelers
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {visibleReviews.map((review, index) => (
            <div
              key={start + index}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/40
                bg-white/80
                p-7
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* Quote Icon */}
              <Quote
                size={70}
                className="
                  absolute
                  -right-3
                  -top-3
                  rotate-6
                  text-slate-100
                "
              />

              {/* Image Review */}
              {review.type === "image" ? (
                <div className="relative flex items-start gap-4">
                  <ProfileImage src={review.avatar} />

                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {review.name}
                    </h3>

                    <p className="text-sm text-gray-500">{review.location}</p>

                    <div className="mt-1">
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                </div>
              ) : (
                /* Video Review */
                <div className="relative flex items-center gap-4">
                  <button
                    onClick={() => setActiveVideo(review.videoUrl)}
                    aria-label={`Play video review by ${review.name}`}
                    className="
                      group/play
                      relative
                      h-20
                      w-24
                      shrink-0
                      overflow-hidden
                      rounded-2xl
                      shadow-lg
                    "
                  >
                    <img
                      src={review.thumbnail}
                      alt=""
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover/play:scale-110
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-black/30
                        transition-colors
                        group-hover/play:bg-black/40
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-white/90
                          shadow-md
                          transition-transform
                          group-hover/play:scale-110
                        "
                      >
                        <Play
                          size={16}
                          className="
                            ml-0.5
                            fill-blue-600
                            text-blue-600
                          "
                        />
                      </div>
                    </div>
                  </button>

                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {review.name}
                    </h3>

                    <p className="text-sm text-gray-500">{review.location}</p>

                    <div className="mt-1">
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                </div>
              )}

              {/* Review Text */}
              <p
                className="
                  relative
                  mt-5
                  text-[15px]
                  leading-relaxed
                  text-slate-600
                "
              >
                "{review.text}"
              </p>

              {/* Video Link */}
              {review.type === "video" && (
                <button
                  onClick={() => setActiveVideo(review.videoUrl)}
                  aria-label={`Watch full review by ${review.name}`}
                  className="
                    relative
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#6957DF]
                    transition
                    group-hover:gap-3
                    hover:text-orange-500
                  "
                >
                  Watch full review
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3 sm:mt-14 sm:gap-6">
            {/* Previous */}
            <button
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className={`
                flex h-11 w-11 shrink-0 items-center justify-center rounded-full
                transition-all duration-300 sm:h-16 sm:w-16
                ${
                  page === 1
                    ? "bg-[#EAEAF4] text-[#94A3B8]"
                    : "bg-[#EEF0F8] text-[#7C87A3] hover:scale-110 hover:shadow-xl"
                }
              `}
            >
              <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={2.4} />
            </button>

            {/* Dots (windowed) */}
            <div className="flex items-center gap-2 sm:gap-4">
              {getVisiblePages().map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  aria-label={`Go to page ${p}`}
                  aria-current={page === p ? "page" : undefined}
                  className={`
                    shrink-0 transition-all duration-500
                    ${
                      page === p
                        ? "h-3 w-10 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9B5CF7] shadow-[0_6px_18px_rgba(105,87,223,.35)] sm:h-4 sm:w-20"
                        : "h-3 w-3 rounded-full bg-[#C7D2E2] hover:scale-125 hover:bg-[#9B5CF7] sm:h-4 sm:w-4"
                    }
                  `}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
              className={`
                flex h-11 w-11 shrink-0 items-center justify-center rounded-full
                transition-all duration-300 sm:h-16 sm:w-16
                ${
                  page === totalPages
                    ? "bg-[#EAEAF4] text-[#94A3B8]"
                    : "bg-gradient-to-br from-[#7B4DFF] to-[#9A56FF] text-white shadow-[0_12px_30px_rgba(123,77,255,.45)] hover:scale-110 hover:shadow-[0_18px_40px_rgba(123,77,255,.55)]"
                }
              `}
            >
              <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={2.4} />
            </button>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/80
            p-4
            backdrop-blur-sm
          "
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="
              relative
              w-full
              max-w-3xl
              overflow-hidden
              rounded-3xl
              bg-black
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="
                absolute
                right-4
                top-4
                z-10
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white/20
                text-white
                backdrop-blur
                transition
                hover:bg-white/30
              "
            >
              <X size={20} />
            </button>

            {/* Video */}
            <video src={activeVideo} controls autoPlay className="w-full" />
          </div>
        </div>
      )}
    </section>
  );
}