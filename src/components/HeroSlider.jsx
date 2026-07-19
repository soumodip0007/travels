import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
    title: "Discover Paradise",
    description:
      "Escape into breathtaking destinations where turquoise waters, golden beaches and unforgettable adventures await.",
    button1: "Book Now",
    button2: "Explore Tours",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80",
    title: "Adventure Awaits",
    description:
      "Explore majestic mountains, scenic roads and hidden gems around the world with premium travel experiences.",
    button1: "Start Journey",
    button2: "Learn More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80",
    title: "Travel Beyond Limits",
    description:
      "Create unforgettable memories with luxury tours designed for every explorer and every dreamer.",
    button1: "Get Started",
    button2: "View Packages",
  },
];

export default function HeroSlider() {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide">

              {/* Background */}

              <img
                src={slide.image}
                alt={slide.title}
                className="hero-image"
              />

              {/* Overlay */}

              <div className="hero-overlay"></div>

              {/* Decorative Glow */}

              <div className="hero-glow hero-glow-blue"></div>
              <div className="hero-glow hero-glow-orange"></div>

              {/* Content */}

              <div className="hero-content">

                <div className="hero-container">

                  {/* Left */}

                  <div className="hero-left">

                    <span className="hero-badge">
                      ✈ Explore The World
                    </span>

                    <h1 className="hero-title">
                      {slide.title}
                    </h1>

                    <p className="hero-description">
                      {slide.description}
                    </p>

                    <div className="hero-buttons">

                      <button className="primary-btn">
                        {slide.button1}
                      </button>

                      <button className="secondary-btn">
                        {slide.button2}
                        <ArrowRight size={18} />
                      </button>

                    </div>

                  </div>

                  {/* Right Floating Card */}

                  <div className="hero-right">

                    <div className="stats-card">

                      <h2>1000+</h2>

                      <p>Destinations Worldwide</p>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Wave */}

      <div className="hero-wave">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C184.06,95.11,0,23.87,0,23.87V120H1200V0S1050.68,93.28,863.91,74.63C706.89,58.88,570.86-12.6,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>

    </section>
  );
}