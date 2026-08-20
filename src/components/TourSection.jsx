import { useEffect, useMemo, useRef, useState } from "react";
import packages from "../data/packages";
import TourCard from "./TourCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS_PER_PAGE = 4;
const CARD_DELAY = 200;

export default function TourSection() {
  const domesticPackages = useMemo(
    () => packages.filter((pkg) => pkg.category === "domestic"),
    [],
  );

  const internationalPackages = useMemo(
    () => packages.filter((pkg) => pkg.category === "international"),
    [],
  );

  const [domesticPage, setDomesticPage] = useState(1);
  const [internationalPage, setInternationalPage] = useState(1);

  const [showAllDomestic, setShowAllDomestic] = useState(false);
  const [showAllInternational, setShowAllInternational] = useState(false);

  const domesticSectionRef = useRef(null);
  const internationalSectionRef = useRef(null);

  const domesticButtonRef = useRef(null);
  const internationalButtonRef = useRef(null);

  const autoScrollRef = useRef(null);

  /*
   * Stop automatic scrolling
   */
  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      cancelAnimationFrame(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  /*
   * Automatically scroll toward the Show Less button.
   */
  const startAutoScroll = (buttonRef) => {
    stopAutoScroll();

    const scrollSpeed = 10;
    const targetOffset = 120;

    const scroll = () => {
      const button = buttonRef.current;

      if (!button) {
        stopAutoScroll();
        return;
      }

      const buttonRect = button.getBoundingClientRect();

      /*
       * Position of Show Less button relative to document
       */
      const buttonDocumentTop = buttonRect.top + window.scrollY;

      /*
       * Stop when Show Less button reaches
       * approximately 120px from the top of viewport.
       */
      const targetScrollPosition = buttonDocumentTop - targetOffset;

      /*
       * If we have reached the button,
       * stop automatic scrolling.
       */
      if (window.scrollY >= targetScrollPosition) {
        window.scrollTo({
          top: targetScrollPosition,
          behavior: "auto",
        });

        stopAutoScroll();
        return;
      }

      /*
       * Continue scrolling downward.
       */
      window.scrollBy({
        top: scrollSpeed,
        behavior: "auto",
      });

      autoScrollRef.current = requestAnimationFrame(scroll);
    };

    autoScrollRef.current = requestAnimationFrame(scroll);
  };

  /*
   * Cleanup automatic scrolling
   * when component is unmounted.
   */
  useEffect(() => {
    return () => {
      stopAutoScroll();
    };
  }, []);

  const renderPagination = (page, totalPages, setPage) => (
    <div className="mt-14 flex items-center justify-center gap-5">
      {/* Previous */}
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
          page === 1
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-gradient-to-r from-[#6957DF] to-[#8471F2] text-white shadow-lg hover:scale-110"
        }`}
      >
        <ChevronLeft size={22} />
      </button>

      {/* Pagination Pills */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`transition-all duration-300 ${
              page === index + 1
                ? "h-3 w-14 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]"
                : "h-3 w-3 rounded-full bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
          page === totalPages
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg hover:scale-110"
        }`}
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );

  const renderSection = (
    title,
    subtitle,
    data,
    page,
    setPage,
    showAll,
    setShowAll,
    color,
    sectionRef,
    buttonRef,
  ) => {
    const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);

    const startIndex = (page - 1) * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;

    const visiblePackages = showAll ? data : data.slice(startIndex, endIndex);

    const handleToggle = () => {
      /*
       * VIEW ALL
       */
      if (!showAll) {
        setShowAll(true);

        /*
         * First move to the top of this section.
         */
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          /*
           * Wait for the section to render all cards,
           * then start automatic scrolling.
           */
          setTimeout(() => {
            startAutoScroll(buttonRef);
          }, 400);
        }, 100);
      } else {
        /*
         * SHOW LESS
         */
        stopAutoScroll();

        setShowAll(false);
        setPage(1);

        /*
         * Return to section top.
         */
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    };

    return (
      <div ref={sectionRef} className="mb-15 scroll-mt-20">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h3 className="ts-serif mt-5 text-4xl font-bold text-[#1E2A47]">
            {title}
          </h3>
        </div>

        {data.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 py-16 text-center text-lg text-slate-500">
            No Packages Available
          </div>
        ) : (
          <>
            {/* Cards */}
            <div
              key={`${title}-${showAll ? "all" : page}`}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            >
              {visiblePackages.map((tour, index) => (
                <div
                  key={tour.id}
                  className="ts-card-in"
                  style={{
                    animationDelay: showAll
                      ? `${index * CARD_DELAY}ms`
                      : `${(index % CARDS_PER_PAGE) * 80}ms`,
                  }}
                >
                  <TourCard tour={tour} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {!showAll &&
              totalPages > 1 &&
              renderPagination(page, totalPages, setPage)}

            {/* View All / Show Less */}
            {data.length > CARDS_PER_PAGE && (
              <div className="mt-8 flex justify-center">
                <button
                  ref={showAll ? buttonRef : null}
                  onClick={handleToggle}
                  className="cta-shimmer cursor-pointer rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-7 py-3 font-bold text-white shadow-[0_20px_45px_rgba(105,87,223,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_55px_rgba(105,87,223,0.45)]"
                >
                  {showAll ? "Show Less" : "View All Packages"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <section
      id="tours"
      className="ts-root relative overflow-hidden bg-transparent py-4"
    >
      <div className="relative z-10 mx-auto w-[96%] max-w-[1700px]">
        {/* Main Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="ts-serif mt-6 whitespace-nowrap text-4xl font-bold leading-tight text-[#1E2A47] md:text-6xl">
            Our Popular{" "}
            <span className="bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
              Tour Packages
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 backdrop-blur-xs">
            Discover hand-picked travel experiences crafted with comfort,
            adventure and unforgettable memories across India and the world.
          </p>
        </div>

        {/* Domestic Packages */}
        {renderSection(
          "Domestic Tour Packages",
          "Explore Incredible India",
          domesticPackages,
          domesticPage,
          setDomesticPage,
          showAllDomestic,
          setShowAllDomestic,
          "sky",
          domesticSectionRef,
          domesticButtonRef,
        )}

        {/* International Packages */}
        {renderSection(
          "International Tour Packages",
          "Travel The World",
          internationalPackages,
          internationalPage,
          setInternationalPage,
          showAllInternational,
          setShowAllInternational,
          "orange",
          internationalSectionRef,
          internationalButtonRef,
        )}
      </div>
    </section>
  );
}

// import { useEffect, useMemo, useRef, useState } from "react";
// import packages from "../data/packages";
// import TourCard from "./TourCard";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const CARDS_PER_PAGE = 4;
// const CARD_DELAY = 200;

// export default function TourSection() {
//   const domesticPackages = useMemo(
//     () => packages.filter((pkg) => pkg.category === "domestic"),
//     []
//   );

//   const internationalPackages = useMemo(
//     () => packages.filter((pkg) => pkg.category === "international"),
//     []
//   );

//   const [domesticPage, setDomesticPage] = useState(1);
//   const [internationalPage, setInternationalPage] = useState(1);

//   const [showAllDomestic, setShowAllDomestic] = useState(false);
//   const [showAllInternational, setShowAllInternational] = useState(false);

//   const domesticSectionRef = useRef(null);
//   const internationalSectionRef = useRef(null);

//   const domesticButtonRef = useRef(null);
//   const internationalButtonRef = useRef(null);

//   const autoScrollRef = useRef(null);

//   /*
//    * Stop automatic scrolling
//    */
//   const stopAutoScroll = () => {
//     if (autoScrollRef.current) {
//       cancelAnimationFrame(autoScrollRef.current);
//       autoScrollRef.current = null;
//     }
//   };

//   /*
//    * Automatically scroll toward the Show Less button.
//    */
//   const startAutoScroll = (buttonRef) => {
//     stopAutoScroll();

//     const scrollSpeed = 10;
//     const targetOffset = 120;

//     const scroll = () => {
//       const button = buttonRef.current;

//       if (!button) {
//         stopAutoScroll();
//         return;
//       }

//       const buttonRect = button.getBoundingClientRect();

//       /*
//        * Position of Show Less button relative to document
//        */
//       const buttonDocumentTop =
//         buttonRect.top + window.scrollY;

//       /*
//        * Stop when Show Less button reaches
//        * approximately 120px from the top of viewport.
//        */
//       const targetScrollPosition =
//         buttonDocumentTop - targetOffset;

//       /*
//        * If we have reached the button,
//        * stop automatic scrolling.
//        */
//       if (window.scrollY >= targetScrollPosition) {
//         window.scrollTo({
//           top: targetScrollPosition,
//           behavior: "auto",
//         });

//         stopAutoScroll();
//         return;
//       }

//       /*
//        * Continue scrolling downward.
//        */
//       window.scrollBy({
//         top: scrollSpeed,
//         behavior: "auto",
//       });

//       autoScrollRef.current =
//         requestAnimationFrame(scroll);
//     };

//     autoScrollRef.current =
//       requestAnimationFrame(scroll);
//   };

//   /*
//    * Cleanup automatic scrolling
//    * when component is unmounted.
//    */
//   useEffect(() => {
//     return () => {
//       stopAutoScroll();
//     };
//   }, []);

//   const renderPagination = (page, totalPages, setPage) => (
//     <div className="mt-14 flex items-center justify-center gap-5">
//       {/* Previous */}
//       <button
//         onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//         disabled={page === 1}
//         className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
//           page === 1
//             ? "cursor-not-allowed bg-slate-200 text-slate-400"
//             : "bg-gradient-to-r from-[#6957DF] to-[#8471F2] text-white shadow-lg hover:scale-110"
//         }`}
//       >
//         <ChevronLeft size={22} />
//       </button>

//       {/* Pagination Pills */}
//       <div className="flex items-center gap-3">
//         {Array.from({ length: totalPages }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setPage(index + 1)}
//             className={`transition-all duration-300 ${
//               page === index + 1
//                 ? "h-3 w-14 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]"
//                 : "h-3 w-3 rounded-full bg-slate-300 hover:bg-slate-400"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Next */}
//       <button
//         onClick={() =>
//           setPage((prev) => Math.min(prev + 1, totalPages))
//         }
//         disabled={page === totalPages}
//         className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 ${
//           page === totalPages
//             ? "cursor-not-allowed bg-slate-200 text-slate-400"
//             : "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg hover:scale-110"
//         }`}
//       >
//         <ChevronRight size={22} />
//       </button>
//     </div>
//   );

//   const renderSection = (
//     title,
//     subtitle,
//     data,
//     page,
//     setPage,
//     showAll,
//     setShowAll,
//     color,
//     sectionRef,
//     buttonRef
//   ) => {
//     const totalPages = Math.ceil(data.length / CARDS_PER_PAGE);

//     const startIndex = (page - 1) * CARDS_PER_PAGE;
//     const endIndex = startIndex + CARDS_PER_PAGE;

//     const visiblePackages = showAll
//       ? data
//       : data.slice(startIndex, endIndex);

//     const handleToggle = () => {
//       /*
//        * VIEW ALL
//        */
//       if (!showAll) {
//         setShowAll(true);

//         /*
//          * First move to the top of this section.
//          */
//         setTimeout(() => {
//           sectionRef.current?.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });

//           /*
//            * Wait for the section to render all cards,
//            * then start automatic scrolling.
//            */
//           setTimeout(() => {
//             startAutoScroll(buttonRef);
//           }, 400);
//         }, 100);
//       }

//       /*
//        * SHOW LESS
//        */
//       else {
//         stopAutoScroll();

//         setShowAll(false);
//         setPage(1);

//         /*
//          * Return to section top.
//          */
//         setTimeout(() => {
//           sectionRef.current?.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }, 100);
//       }
//     };

//     return (
//       <div
//         ref={sectionRef}
//         className="mb-15 scroll-mt-20"
//       >
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <h3 className="ts-serif mt-5 text-4xl font-bold text-[#1E2A47]">
//             {title}
//           </h3>
//         </div>

//         {data.length === 0 ? (
//           <div className="rounded-3xl border border-dashed border-slate-300 py-16 text-center text-lg text-slate-500">
//             No Packages Available
//           </div>
//         ) : (
//           <>
//             {/* Cards */}
//             <div
//               key={`${title}-${showAll ? "all" : page}`}
//               className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
//             >
//               {visiblePackages.map((tour, index) => (
//                 <div
//                   key={tour.id}
//                   className="ts-card-in"
//                   style={{
//                     animationDelay: showAll
//                       ? `${index * CARD_DELAY}ms`
//                       : `${(index % CARDS_PER_PAGE) * 80}ms`,
//                   }}
//                 >
//                   <TourCard tour={tour} />
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             {!showAll &&
//               totalPages > 1 &&
//               renderPagination(
//                 page,
//                 totalPages,
//                 setPage
//               )}

//             {/* View All / Show Less */}
//             {data.length > CARDS_PER_PAGE && (
//               <div className="mt-8 flex justify-center">
//                 <button
//                   ref={showAll ? buttonRef : null}
//                   onClick={handleToggle}
//                   className="cta-shimmer cursor-pointer rounded-full bg-gradient-to-r from-[#6957DF] to-[#9F7AEA] px-7 py-3 font-bold text-white shadow-[0_20px_45px_rgba(105,87,223,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_55px_rgba(105,87,223,0.45)]"
//                 >
//                   {showAll
//                     ? "Show Less"
//                     : "View All Packages"}
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     );
//   };

//   return (
//     <section
//       id="tours"
//       className="ts-root relative overflow-hidden bg-transparent py-4"
//     >
//       <div className="relative z-10 mx-auto w-[96%] max-w-[1700px]">

//         {/* Main Heading */}
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="ts-serif mt-6 whitespace-nowrap text-4xl font-bold leading-tight text-[#1E2A47] md:text-6xl">
//             Our Popular{" "}
//             <span className="bg-gradient-to-r from-[#6957DF] via-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
//               Tour Packages
//             </span>
//           </h2>

//           <p className="mt-6 text-lg leading-8 text-slate-600 backdrop-blur-xs">
//             Discover hand-picked travel experiences crafted with comfort,
//             adventure and unforgettable memories across India and the world.
//           </p>
//         </div>

//         {/* Domestic Packages */}
//         {renderSection(
//           "Domestic Tour Packages",
//           "Explore Incredible India",
//           domesticPackages,
//           domesticPage,
//           setDomesticPage,
//           showAllDomestic,
//           setShowAllDomestic,
//           "sky",
//           domesticSectionRef,
//           domesticButtonRef
//         )}

//         {/* International Packages */}
//         {renderSection(
//           "International Tour Packages",
//           "Travel The World",
//           internationalPackages,
//           internationalPage,
//           setInternationalPage,
//           showAllInternational,
//           setShowAllInternational,
//           "orange",
//           internationalSectionRef,
//           internationalButtonRef
//         )}
//       </div>
//     </section>
//   );
// }

