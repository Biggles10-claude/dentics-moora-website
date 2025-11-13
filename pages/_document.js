import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dentics Moora",
    "image": "https://dentics-moora-website.onrender.com/logo.png",
    "description": "Professional dental care in Moora, Western Australia. Comprehensive dentistry services including general, cosmetic, and emergency dental care.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "394 Dandaragan Road",
      "addressLocality": "Moora",
      "addressRegion": "WA",
      "postalCode": "6510",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-30.6422",
      "longitude": "116.0100"
    },
    "telephone": "0424000442",
    "email": "faisalssa@yahoo.com",
    "url": "https://dentics-moora-website.onrender.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "00:00",
        "closes": "00:00",
        "description": "By Appointment Only"
      }
    ],
    "paymentAccepted": "Cash, Credit Card, HICAPS",
    "currenciesAccepted": "AUD",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-30.6422",
        "longitude": "116.0100"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Dentistry",
            "description": "Check-ups, cleaning, and preventative care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cosmetic Dentistry",
            "description": "Teeth whitening, veneers, and smile makeovers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Implants",
            "description": "Permanent tooth replacement solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Dental Care",
            "description": "Same-day emergency appointments available"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <Html lang="en-AU">
      <Head>
        {/* Preconnect to improve font loading performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />

        {/* Structured Data - Critical for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="Dentics Moora" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="AU-WA" />
        <meta name="geo.placename" content="Moora" />
        <meta name="geo.position" content="-30.6422;116.0100" />
        <meta name="ICBM" content="-30.6422, 116.0100" />

        {/* Business Information */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-title" content="Dentics Moora" />
        <meta name="application-name" content="Dentics Moora" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
