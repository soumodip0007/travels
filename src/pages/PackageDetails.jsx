import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import packages from "../data/packages";
import PackageHero from "../components/PackageDetails/PackageHero";
import PackageOverview from "../components/PackageDetails/PackageOverview";
import PackageGallery from "../components/PackageDetails/PackageGallery";
import TourPlan from "../components/PackageDetails/TourPlan";
import IncludedExcluded from "../components/PackageDetails/IncludedExcluded";
import SimilarPackages from "../components/PackageDetails/SimilarPackages";
import Reviews from "../components/Reviews";

export default function PackageDetails() {
  const { slug } = useParams();

  const tour = packages.find((pkg) => pkg.slug === slug);

  const [selectedPackage, setSelectedPackage] = useState("");

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
    <>
      <div data-aos="fade">
        <PackageHero
          tour={tour}
          selectedPackage={selectedPackage}
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <PackageOverview
          tour={tour}
          selectedPackage={selectedPackage}
        />
      </div>

      <div data-aos="zoom-in" data-aos-delay="150">
        <PackageGallery tour={tour} />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <TourPlan
          tour={tour}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <IncludedExcluded
          tour={tour}
          selectedPackage={selectedPackage}
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <Reviews />
      </div>

      {/*
      <div data-aos="fade-up" data-aos-delay="400">
        <SimilarPackages currentSlug={tour.slug} />
      </div>
      */}
    </>
  );
}