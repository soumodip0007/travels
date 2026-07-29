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
    button1: "Enquire Now",
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

      {/* Only theme colors changed */}
      <style>{`
        .hero-badge {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #E9D5FF;
          backdrop-filter: blur(12px);
        }

        .hero-title {
          color: #FFFFFF;
        }

        .hero-description {
          color: rgba(243, 232, 255, 0.92);
        }

        .primary-btn {
          background: linear-gradient(90deg, #6957DF 0%, #7C3AED 50%, #A855F7 100%);
          color: white;
          box-shadow: 0 22px 45px rgba(147, 51, 234, 0.35);
        }

        .primary-btn:hover {
          box-shadow: 0 28px 55px rgba(147, 51, 234, 0.45);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: white;
          backdrop-filter: blur(12px);
        }

        .secondary-btn:hover {
          border-color: rgba(192, 132, 252, 0.55);
          background: rgba(255, 255, 255, 0.18);
        }

        .stats-card {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: white;
          backdrop-filter: blur(18px);
          box-shadow: 0 35px 80px rgba(0, 0, 0, 0.35);
        }

        .stats-card p {
          color: rgba(243, 232, 255, 0.82);
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.45);
          opacity: 1;
          transition: all .3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 42px;
          border-radius: 999px;
          background: linear-gradient(90deg, #6957DF, #A855F7);
          box-shadow: 0 0 18px rgba(168, 85, 247, .55);
        }
      `}</style>

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

              {/* Content */}

              <div className="hero-content">

                <div className="hero-container">

                  {/* Left */}

                  <div className="hero-left">

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