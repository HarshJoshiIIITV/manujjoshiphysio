import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta name="description" content="Personalized physiotherapy with care & proven results" />
        <meta name="keywords" content="physiotherapy, pain relief, rehab, Jaipur physio, back pain, neck pain, sports injury, Dr Manuj Joshi" />
        <meta name="author" content="Dr. Manuj Joshi Physiotherapy Clinic" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:title" content="Dr. Manuj Physiotherapy Clinic | Best Physiotherapist in Jaipur" />
        <meta property="og:description" content="Expert physiotherapy, pain relief, and rehabilitation in Jaipur. Visit Dr. Manuj Joshi Physiotherapy Clinic today!" />
        <meta property="og:image" content="https://manujjoshiphysio.com" />
        <meta property="og:url" content="https://manujjoshiphysio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Manuj Physiotherapy Clinic | Best Physiotherapist in Jaipur" />
        <meta name="twitter:description" content="Personalized physiotherapy and rehabilitation with proven results." />
        <meta name="twitter:image" content="https://manujjoshiphysio.com" />

        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Dr. Manuj Joshi Physiotherapy Clinic",
              image: "https://manujjoshiphysio.com/images/og-image.jpg",
              url: "https://manujjoshiphysio.com",
              telephone: "+91-8619360651",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nirman Nagar",
                addressLocality: "Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302019",
                addressCountry: "IN",
              },
              openingHours: "Mo-Sa 17:00-21:00",
              description:
                "Professional physiotherapy and rehabilitation services in Jaipur with personalized care and proven results.",
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
