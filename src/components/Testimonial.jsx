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
    <section className="relative overflow-hidden bg-slate-50 py-10">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e915,transparent_40%),radial-gradient(circle_at_bottom_right,#f9731615,transparent_40%)]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            What Our Travelers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
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

              <div className="group relative flex-full min-h-[430px] flex-col rounded-3xl border border-purple-100 bg-purple-100 p-8 shadow-lg shadow-purple-200/30 transition-all duration-500 hover:-translate-y-3 hover:border-[#6957DF] hover:bg-white hover:shadow-xl">

                {/* Quote */}

                <div className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-br-full rounded-tl-3xl bg-gradient-to-br from-[#6957DF] via-[#7C3AED] to-[#A855F7]">

                  <Quote
                    size={42}
                    className="text-white"
                  />

                </div>

                {/* Review */}

                <div className="pt-20">

                  <p className="text-lg leading-9 text-slate-600">
                    "{item.review}"
                  </p>

                </div>

                {/* User */}

                <div className="mt-12 flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-full border-4 border-slate-100 object-cover"
                  />

                  <div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-[#6957DF]">
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