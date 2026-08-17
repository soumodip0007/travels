import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import packages from "../data/packages";

import PackageHero from "../components/PackageDetails/PackageHero";
import PackageOverview from "../components/PackageDetails/PackageOverview";
import PackageGallery from "../components/PackageDetails/PackageGallery";
import TourPlan from "../components/PackageDetails/TourPlan";
import IncludedExcluded from "../components/PackageDetails/IncludedExcluded";
import BookingCard from "../components/PackageDetails/BookingCard";
// import SimilarPackages from "../components/PackageDetails/SimilarPackages";
import Reviews from "../components/Reviews";
import TravelBackground from "../components/PackageDetails/TravelBackground";

export default function PackageDetails() {
  const { slug } = useParams();

  const tour = packages.find((pkg) => pkg.slug === slug);

  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [slug]);

  useEffect(() => {
    if (!tour?.packages) return;

    const firstAvailable = Object.keys(tour.packages).find(
      (key) => tour.packages[key]?.itinerary?.length > 0
    );

    if (firstAvailable) {
      setSelectedPackage(firstAvailable);
    }
  }, [tour]);

  if (!tour) {
    return (
      <h1 className="py-40 text-center text-3xl font-bold">
        Package Not Found
      </h1>
    );
  }

  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-b from-white via-[#F7F5FF] to-white">

      {/* Responsive Large Desktop Styles */}
      <style>{`
        .package-main-container {
          width: 92%;
          max-width: 1280px;
        }

        .package-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(300px, 360px);
          gap: 40px;
        }

        .package-booking-wrapper {
          position: sticky;
          top: 100px;
        }

        /* Large Desktop */
        @media (min-width: 1280px) {
          .package-main-container {
            width: 90%;
            max-width: 1250px;
          }

          .package-main-grid {
            grid-template-columns:
              minmax(0, 2fr)
              minmax(320px, 380px);
            gap: 40px;
          }

          .package-booking-wrapper {
            top: 100px;
          }
        }

        /* Extra Large Desktop */
        @media (min-width: 1536px) {
          .package-main-container {
            width: 88%;
            max-width: 1350px;
          }

          .package-main-grid {
            grid-template-columns:
              minmax(0, 2.1fr)
              minmax(350px, 400px);
            gap: 50px;
          }
        }

        /* Very Large Desktop */
        @media (min-width: 1800px) {
          .package-main-container {
            width: 86%;
            max-width: 1450px;
          }

          .package-main-grid {
            grid-template-columns:
              minmax(0, 2.15fr)
              minmax(360px, 420px);
            gap: 55px;
          }
        }

        /* Ultra Wide Screens */
        @media (min-width: 2200px) {
          .package-main-container {
            max-width: 1600px;
          }

          .package-main-grid {
            grid-template-columns:
              minmax(0, 2.2fr)
              minmax(380px, 440px);
            gap: 60px;
          }
        }

        /* Tablet */
        @media (max-width: 1023px) {
          .package-main-container {
            width: 92%;
          }

          .package-main-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .package-booking-wrapper {
            position: relative;
            top: auto;
          }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .package-main-container {
            width: 94%;
          }

          .package-main-grid {
            gap: 25px;
          }
        }
      `}</style>

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <TravelBackground />
      </div>

      {/* Main Content */}
      <div className="relative z-10">

        {/* Hero */}
        <div data-aos="fade">
          <PackageHero
            tour={tour}
            selectedPackage={selectedPackage}
          />
        </div>

        {/* Main Content */}
        <div className="package-main-container mx-auto py-14">

          <div className="package-main-grid">

            {/* ================= LEFT COLUMN ================= */}
            <div className="min-w-0">

              {/* Package Overview */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <PackageOverview
                  tour={tour}
                  selectedPackage={selectedPackage}
                />
              </div>

              {/* Tour Plan */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <TourPlan
                  tour={tour}
                  selectedPackage={selectedPackage}
                  setSelectedPackage={setSelectedPackage}
                />
              </div>

              {/* Gallery */}
              <div
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <PackageGallery
                  tour={tour}
                />
              </div>

              {/* Included / Excluded */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <IncludedExcluded
                  tour={tour}
                  selectedPackage={selectedPackage}
                />
              </div>

              {/* Reviews */}
              <div
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <Reviews />
              </div>

            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div className="min-w-0">

              <div className="package-booking-wrapper">

                <BookingCard
                  tour={tour}
                  selectedPackage={selectedPackage}
                />

              </div>

            </div>

          </div>
        </div>

        {/* Similar Packages */}
        {/*
        <div
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <SimilarPackages
            currentSlug={tour.slug}
          />
        </div>
        */}

      </div>

    </div>
  );
}