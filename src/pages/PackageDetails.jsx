import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import packages from "../data/packages";

import PackageHero from "../components/PackageDetails/PackageHero";
import PackageOverview from "../components/PackageDetails/PackageOverview";
import PackageGallery from "../components/PackageDetails/PackageGallery";
import TourPlan from "../components/PackageDetails/TourPlan";
import IncludedExcluded from "../components/PackageDetails/IncludedExcluded";
import BookingCard from "../components/PackageDetails/BookingCard";
import SimilarPackages from "../components/PackageDetails/SimilarPackages";
import Reviews from "../components/Reviews";
import TravelBackground from "../components/PackageDetails/TravelBackground";

export default function PackageDetails() {
  const { slug } = useParams();

  const tour = packages.find((pkg) => pkg.slug === slug);

  const [selectedPackage, setSelectedPackage] = useState("");

  // Scroll to top whenever package changes
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
    <div className="relative z-0 bg-gradient-to-b from-white via-[#F7F5FF] to-white">

      <div className="fixed inset-0 -z-10 overflow-hidden">
 *       <TravelBackground />
 *     </div>

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
        <div className="mx-auto w-[92%] max-w-7xl py-14">
          <div className="grid gap-10 lg:grid-cols-3">

            {/* ================= LEFT COLUMN ================= */}
            <div className="lg:col-span-2">

              <div data-aos="fade-up" data-aos-delay="100">
                <PackageOverview
                  tour={tour}
                  selectedPackage={selectedPackage}
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <TourPlan
                  tour={tour}
                  selectedPackage={selectedPackage}
                  setSelectedPackage={setSelectedPackage}
                />
              </div>

              <div data-aos="zoom-in" data-aos-delay="250">
                <PackageGallery tour={tour} />
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <IncludedExcluded
                  tour={tour}
                  selectedPackage={selectedPackage}
                />
              </div>

              <div data-aos="fade-up" data-aos-delay="350">
                <Reviews />
              </div>

            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div className="lg:col-span-1">

              <div className="sticky top-25">

                <BookingCard
                  tour={tour}
                  selectedPackage={selectedPackage}
                />

              </div>

            </div>

          </div>
        </div>

        {/*
        <div data-aos="fade-up" data-aos-delay="400">
          <SimilarPackages currentSlug={tour.slug} />
        </div>
        */}
      </div>

    </div>
  );
}