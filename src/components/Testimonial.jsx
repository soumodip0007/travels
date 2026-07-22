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

              <div className="group relative h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-3 hover:border-orange-400 hover:shadow-xl">

                {/* Quote */}

                <div className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-br-full rounded-tl-3xl bg-gradient-to-br from-sky-600 to-orange-500">

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

                    <p className="text-orange-500">
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
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-sky-500 text-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Indicators */}

          <div className="flex items-center gap-3">

            {testimonials.map((_, index) => (

              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? "h-3 w-14 rounded-full bg-gradient-to-r from-sky-600 to-orange-500"
                    : "h-3 w-3 rounded-full bg-slate-300 hover:bg-slate-400"
                }`}
              />

            ))}

          </div>

          {/* Next */}

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={22} />
          </button>

        </div>

      </div>

    </section>
  );
}