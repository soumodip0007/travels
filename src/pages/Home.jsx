import React, { useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import FeatureCards from "../components/FeatureCards";
import TourSection from "../components/TourSection";
import RatingBar from "../components/RatingBar";
import Testimonials from "../components/Testimonial";
import Certification from "../components/Certification";
import Reviews from "../components/Reviews";
import ParticlesBackground from "../components/ParticlesBackground";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="relative z-0">

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <ParticlesBackground />
      </div>

      <div className="relative z-10">

        <div data-aos="fade-up">
          <HeroSlider />
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <FeatureCards />
        </div>

        <div data-aos="fade-up" data-aos-delay="150">
          <TourSection />
        </div>

        <div data-aos="zoom-in" data-aos-delay="200">
          <RatingBar />
        </div>

        <div data-aos="fade-up" data-aos-delay="250">
          <Testimonials />
        </div>

        <div data-aos="fade-up" data-aos-delay="250">
          <Reviews />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <Certification />
        </div>

      </div>

    </div>
  );
};

export default Home;