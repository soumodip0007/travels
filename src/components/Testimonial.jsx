import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import testimonials from "../data/testimonial";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-10">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e915,transparent_40%),radial-gradient(circle_at_bottom_right,#f9731615,transparent_40%)]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        <div className="text-center mb-16">

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            What Our Travelers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Thousands of happy customers have explored beautiful destinations
            with us.
          </p>

        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
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

              <div className="group relative h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition duration-500 hover:-translate-y-3 hover:border-orange-400 hover:shadow-xl">

                <div className="absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-br-full rounded-tl-3xl bg-gradient-to-br from-sky-600 to-orange-500">

                  <Quote
                    size={42}
                    className="text-white"
                  />

                </div>

                <div className="pt-20">

                  <p className="text-lg leading-9 text-slate-600">
                    "{item.review}"
                  </p>

                </div>

                <div className="mt-12 flex items-center gap-5">

                  <img
                    src={item.image}
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

        <div className="mt-12 flex justify-center gap-5">

          <button
            ref={prevRef}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-md transition hover:bg-orange-500"
          >
            <ArrowLeft />
          </button>

          <button
            ref={nextRef}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-md transition hover:bg-orange-500"
          >
            <ArrowRight />
          </button>

        </div>

      </div>

    </section>
  );
}