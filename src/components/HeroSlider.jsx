import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/bg2.jpeg";

const slides = [
  {
    image: bg1,
    title: "Discover Paradise",
    description:
      "Escape into breathtaking destinations where turquoise waters, golden beaches and unforgettable adventures await.",
    button1: "Enquire Now",
    button2: "Explore Tours",
  },
  {
    image: bg2,
    title: "Adventure Awaits",
    description:
      "Explore majestic mountains, scenic roads and hidden gems around the world with premium travel experiences.",
    button1: "Start Journey",
    button2: "Learn More",
  },
];

export default function HeroSlider() {
  return (
    <section className="hero-section">
      {/* Only theme colors changed */}
      <style>{`
  .hero-section {
    position: relative;
    width: 100%;
    height: 85vh;
    min-height: 550px;
    overflow: hidden;
  }

  .hero-section .swiper {
    width: 100%;
    height: 100%;
  }

  .hero-section .swiper-wrapper {
    height: 100%;
  }

  .hero-section .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .hero-slide {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 550px;
    overflow: hidden;
  }

  .hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    z-index: 0;
  }

  .hero-slide::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.35) 45%,
      rgba(0, 0, 0, 0.1) 100%
    );
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .hero-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 60px;
  }

  .hero-left {
    max-width: 650px;
  }

  .hero-badge {
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.16);
    color: #E9D5FF;
    backdrop-filter: blur(12px);
  }

  .hero-title {
    color: #FFFFFF;
    font-size: clamp(2.5rem, 5vw, 5rem);
    line-height: 1.05;
    font-weight: 800;
    margin-bottom: 25px;
  }

  .hero-description {
    color: rgba(243, 232, 255, 0.92);
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    line-height: 1.7;
    max-width: 600px;
    margin-bottom: 35px;
  }

  .hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .primary-btn {
    background: linear-gradient(
      90deg,
      #6957DF 0%,
      #7C3AED 50%,
      #A855F7 100%
    );
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
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    width: 42px;
    border-radius: 999px;
    background: linear-gradient(90deg, #6957DF, #A855F7);
    box-shadow: 0 0 18px rgba(168, 85, 247, 0.55);
  }

  .hero-wave {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 5;
    pointer-events: none;
  }

  .hero-wave svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .hero-section {
      height: 75vh;
      min-height: 500px;
    }

    .hero-slide {
      min-height: 500px;
    }

    .hero-container {
      padding: 0 40px;
    }

    .hero-left {
      max-width: 580px;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .hero-section {
      height: 75vh;
      min-height: 550px;
    }

    .hero-slide {
      min-height: 550px;
    }

    .hero-image {
      object-position: center center;
    }

    .hero-container {
      padding: 0 24px;
    }

    .hero-left {
      max-width: 100%;
    }

    .hero-title {
      font-size: clamp(2.2rem, 10vw, 3.5rem);
    }

    .hero-description {
      font-size: 1rem;
      line-height: 1.6;
    }

    .hero-buttons {
      flex-direction: column;
      align-items: flex-start;
    }

    .primary-btn,
    .secondary-btn {
      width: auto;
      min-width: 160px;
    }

    .hero-wave {
      height: 60px;
    }
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    .hero-section {
      height: 80vh;
      min-height: 580px;
    }

    .hero-slide {
      min-height: 580px;
    }

    .hero-container {
      padding: 0 20px;
    }

    .hero-title {
      font-size: 2.3rem;
    }

    .hero-description {
      font-size: 0.95rem;
    }

    .hero-buttons {
      width: 100%;
    }

    .primary-btn,
    .secondary-btn {
      width: 100%;
    }
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

              <img src={slide.image} alt={slide.title} className="hero-image" />

              {/* Content */}

              <div className="hero-content">
                <div className="hero-container">
                  {/* Left */}

                  <div className="hero-left">
                    <h1 className="hero-title">{slide.title}</h1>

                    <p className="hero-description">{slide.description}</p>

                    <div className="hero-buttons">
                      <button className="primary-btn">{slide.button1}</button>

                      <button className="secondary-btn">
                        {slide.button2}
                        <ArrowRight size={18} />
                      </button>
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
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44C184.06,95.11,0,23.87,0,23.87V120H1200V0S1050.68,93.28,863.91,74.63C706.89,58.88,570.86-12.6,321.39,56.44Z"
            className="fill-[#EAE6FC]"
          />
        </svg>
      </div>
    </section>
  );
}
