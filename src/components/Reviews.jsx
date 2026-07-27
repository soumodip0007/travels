import { useState, useRef } from "react";
import { Star, Quote, Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "video",
    name: "Rahul Mehta",
    location: "Ladakh Adventure Trip",
    rating: 5,
    text: "Watch how the team handled a last-minute route change when weather closed the pass — still one of the best trips of my life.",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Ananya Sharma",
    location: "Goa Beach Package",
    rating: 5,
    text: "Everything from the airport pickup to the hotel checkout was seamless. Our guide knew every hidden spot on the coastline that wasn't in any guidebook.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "image",
    name: "Priya Desai",
    location: "Kerala Backwaters",
    rating: 5,
    text: "The houseboat stay was straight out of a postcard. Booking was simple, pricing was transparent, and support replied within minutes.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
  },
  {
    type: "video",
    name: "Karan Singh",
    location: "Rajasthan Heritage Tour",
    rating: 4,
    text: "A quick clip from our camel safari at sunset — the tour plan balanced the palaces with just enough downtime.",
    thumbnail:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const PER_PAGE = 4;

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

export default function Reviews() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [page, setPage] = useState(1);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(reviews.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visibleReviews = reviews.slice(start, start + PER_PAGE);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages || p === page) return;
    setPage(p);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Builds a compact page list like: 1, 2, 3, ..., 8  or  1, ..., 4, 5, 6, ..., 10
  const getPageNumbers = () => {
    const pages = [];
    const windowSize = 1;

    for (let p = 1; p <= totalPages; p++) {
      if (
        p === 1 ||
        p === totalPages ||
        (p >= page - windowSize && p <= page + windowSize)
      ) {
        pages.push(p);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <section ref={sectionRef} className="relative scroll-mt-24 border-white/70
    rounded-[36px]
              bg-white/80
              backdrop-blur-1xl
              shadow-[0_25px_60px_rgba(105,87,223,0.12)]
              mt-12
              p-8
              md:p-10">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Traveler Stories
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-slate-800 md:text-5xl">
            Loved by <span className="text-[#6957DF]">thousands</span> of
            travelers
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {visibleReviews.map((review, index) => (
            <div
              key={start + index}
              className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-white/80 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Quote
                size={70}
                className="absolute -right-3 -top-3 rotate-6 text-slate-100"
              />

              {review.type === "image" ? (
                <div className="relative flex items-start gap-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-lg"
                  />
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
                <div className="relative flex items-center gap-4">
                  <button
                    onClick={() => setActiveVideo(review.videoUrl)}
                    className="group/play relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl shadow-lg"
                  >
                    <img
                      src={review.thumbnail}
                      alt={review.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover/play:bg-black/40">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform group-hover/play:scale-110">
                        <Play
                          size={16}
                          className="ml-0.5 fill-blue-600 text-blue-600"
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

              <p className="relative mt-5 text-[15px] leading-relaxed text-slate-600">
                "{review.text}"
              </p>

              {review.type === "video" && (
                <button
                  onClick={() => setActiveVideo(review.videoUrl)}
                  className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#6957DF] transition group-hover:gap-3 hover:text-orange-500"
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

          <div className="mt-14 flex items-center justify-center gap-6">

            {/* Previous */}

            <button
              onClick={() => page > 1 && setPage(page - 1)}
              disabled={page === 1}
              className={`
      flex h-16 w-16 items-center justify-center
      rounded-full
      transition-all duration-300
      ${page === 1
                  ? "bg-[#EAEAF4] text-[#94A3B8]"
                  : "bg-[#EEF0F8] text-[#7C87A3] hover:scale-110 hover:shadow-xl"
                }
    `}
            >
              <ChevronLeft size={26} strokeWidth={2.4} />
            </button>

            {/* Indicators */}

            <div className="flex items-center gap-4">

              {Array.from({ length: totalPages }).map((_, index) => (

                <button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`
          transition-all duration-500
          ${page === index + 1
                      ? "h-4 w-20 rounded-full bg-gradient-to-r from-[#6957DF] to-[#9B5CF7] shadow-[0_6px_18px_rgba(105,87,223,.35)]"
                      : "h-4 w-4 rounded-full bg-[#C7D2E2] hover:scale-125 hover:bg-[#9B5CF7]"
                    }
        `}
                />

              ))}

            </div>

            {/* Next */}

            <button
              onClick={() => page < totalPages && setPage(page + 1)}
              disabled={page === totalPages}
              className={`
      flex h-16 w-16 items-center justify-center
      rounded-full
      transition-all duration-300
      ${page === totalPages
                  ? "bg-[#EAEAF4] text-[#94A3B8]"
                  : "bg-gradient-to-br from-[#7B4DFF] to-[#9A56FF] text-white shadow-[0_12px_30px_rgba(123,77,255,.45)] hover:scale-110 hover:shadow-[0_18px_40px_rgba(123,77,255,.55)]"
                }
    `}
            >
              <ChevronRight size={26} strokeWidth={2.4} />
            </button>

          </div>

        )}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
            >
              <X size={20} />
            </button>
            <video src={activeVideo} controls autoPlay className="w-full" />
          </div>
        </div>
      )}
    </section>
  );
}