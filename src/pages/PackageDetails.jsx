import { useParams } from "react-router-dom";
import packages from "../data/packages";

import PackageHero from "../components/PackageDetails/PackageHero";
import PackageOverview from "../components/PackageDetails/PackageOverview";
import PackageGallery from "../components/PackageDetails/PackageGallery";
import TourPlan from "../components/PackageDetails/TourPlan";
import TourDayCard from "../components/PackageDetails/TourDayCard";
import IncludedExcluded from "../components/PackageDetails/IncludedExcluded";
import SimilarPackages from "../components/PackageDetails/SimilarPackages";

export default function PackageDetails() {

  const { slug } = useParams();

  const tour = packages.find((pkg) => pkg.slug === slug);

  if (!tour) {
    return <h1>Package Not Found</h1>;
  }

  return (
    <>
      <PackageHero tour={tour} />
      <PackageOverview tour={tour} />
      {/* <PackageGallery tour={tour} /> */}
      <TourPlan tour={tour} />
      <IncludedExcluded tour={tour} />
      {/* <SimilarPackages currentSlug={tour.slug} /> */}
    </>
  );
}

{/* <div className="mx-auto grid w-[92%] max-w-7xl gap-8 py-16 lg:grid-cols-3">

  <div className="lg:col-span-2">

    <PackageOverview tour={tour} />
    <PackageGallery tour={tour} />
    <TourPlan tour={tour} />
    <IncludedExcluded tour={tour} />

  </div>

  <div>
    <BookingCard tour={tour} />
  </div>

</div> */}