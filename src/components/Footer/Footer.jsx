import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterGallery from "./FooterGallery";
import Newsletter from "./Newsletter";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-slate-950 text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      {/* Main Content */}
      <div className="relative z-10">

        {/* Top Section */}
        <div className="mx-auto grid w-[92%] max-w-7xl gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          <FooterBrand />

          <FooterLinks />

          <FooterContact />

          <FooterGallery />

        </div>

        {/* Newsletter */}
        <div className="mx-auto w-[92%] max-w-7xl">
          <Newsletter />
        </div>

        {/* Bottom */}
        <FooterBottom />

      </div>

    </footer>
  );
}