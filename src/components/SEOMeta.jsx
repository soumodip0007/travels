import { Helmet } from "react-helmet-async";

export default function SEOMeta({
  title = "Riya Tours & Travels | Domestic & International Travel Packages",
  description = "Explore amazing travel packages to domestic and international destinations. Plan your perfect trip with Riya Tours & Travels.",
  keywords = "travel packages, tours, holidays, domestic tours, international tours, travel agency, vacation packages, Riya Tours",
  ogTitle,
  ogDescription,
  ogImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=630&q=80",
  ogUrl,
  twitterCard = "summary_large_image",
  robots = "index, follow",
  canonical,
  author = "Riya Tours & Travels",
}) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      {/* Open Graph Meta Tags for Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:site_name" content="Riya Tours & Travels" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />

      {/* Theme Color */}
      <meta name="theme-color" content="#6957DF" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Preconnect to external resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />

      {/* Structured Data (JSON-LD) for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Riya Tours & Travels",
          "description": description,
          "url": window.location.origin,
          "telephone": "+91 9163569695",
          "email": "riyatourtravels01@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "57A, Mahanirban Rd, Dover Terrace",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "postalCode": "700029",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://www.facebook.com/riyatourtravel",
            "https://www.instagram.com/riyatourtravel",
            "https://www.whatsapp.com"
          ],
          "image": ogImage
        })}
      </script>
    </Helmet>
  );
}
