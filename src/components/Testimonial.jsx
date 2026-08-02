import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState } from "react";

import testimonials from "../data/testimonial";

import "swiper/css";

export default function Testimonials() {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-transparent backdrop-blur-xs py-10 -mb-12">

      {/* Background */}

      <div className="absolute" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-12 text-center">

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            What Our Travelers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Thousands of happy customers have explored beautiful destinations
            with us.
          </p>

        </div>

        {/* Swiper */}

        <Swiper
          modules={[Autoplay]}
          loop
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="group relative overflow-hidden flex-full min-h-[430px] flex-col rounded-3xl border border-[#8B5CF6]/30 bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] p-8 transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 hover:border-[#7C3AED] hover:bg-white hover:bg-none">

                {/* Decorative circles */}
                <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-white/10 transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:bg-[#8B5CF6]/12 group-hover:scale-105"></div>

                <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-white/10 transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:bg-[#8B5CF6]/10 group-hover:scale-105"></div>

                {/* Quote */}
                <div className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-br-full rounded-tl-3xl bg-white/15 transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:bg-gradient-to-br group-hover:from-[#8B5CF6] group-hover:to-[#6D28D9]">

                  <Quote
                    size={42}
                    className="text-white transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                  />

                </div>

                {/* Review */}
                <div className="relative z-10 pt-20">

                  <p className="text-lg leading-9 text-white transition-colors duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-slate-700">
                    "{item.review}"
                  </p>

                </div>

                {/* User */}
                <div className="relative z-10 mt-12 flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-full border-4 border-white/30 object-cover transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:border-slate-200 group-hover:scale-105"
                  />

                  <div>

                    <h3 className="text-2xl font-bold text-white transition-colors duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-white/85 transition-colors duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-[#6D28D9]">
                      {item.designation}
                    </p>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}

        <div className="mt-14 flex items-center justify-center gap-5">

          {/* Previous */}

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-14 w-14 items-center justify-center rounded-full
    border border-purple-100
    bg-white
    text-[#6957DF]
    shadow-[0_10px_25px_rgba(105,87,223,0.16)]
    transition-all duration-300
    hover:-translate-y-1 hover:scale-110
    hover:border-purple-200
    hover:bg-gradient-to-r hover:from-[#6957DF] hover:to-[#9F7AEA]
    hover:text-white hover:shadow-[0_18px_40px_rgba(147,51,234,0.32)]"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Indicators */}

          <div className="flex items-center gap-3 rounded-full border border-purple-100 bg-white/80 px-4 py-3 backdrop-blur-md shadow-[0_10px_30px_rgba(105,87,223,0.08)]">

            {testimonials.map((_, index) => (

              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`transition-all duration-300 ${activeIndex === index
                  ? "h-3 w-14 rounded-full bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7] shadow-[0_0_16px_rgba(168,85,247,0.45)]"
                  : "h-3 w-3 rounded-full bg-purple-200 hover:bg-purple-300"
                  }`}
              />

            ))}

          </div>

          {/* Next */}

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-14 w-14 items-center justify-center rounded-full
    border border-purple-100
    bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7]
    text-white
    shadow-[0_12px_30px_rgba(147,51,234,0.28)]
    transition-all duration-300
    hover:-translate-y-1 hover:scale-110
    hover:shadow-[0_20px_45px_rgba(147,51,234,0.4)]"
          >
            <ChevronRight size={22} />
          </button>

        </div>

      </div>

    </section>
  );
}