import { Helmet, HelmetProvider } from "react-helmet-async";

export const HelmetForHome = () => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>Naprawa telewizorów ✔, pralek ✔, zmywarek ✔, ekspresów do kawy ✔</title>
        <meta
          name="description"
          content="Profesjonalna naprawa i serwis telewizorów, pralek, zmywarek oraz ekspresów do kawy w Przemyślu. Szybka pomoc i fachowa obsługa."
        />
        <meta
          name="keywords"
          content="naprawa, serwis, RTV, AGD, telewizory, pralki, zmywarki, ekspresy do kawy, Przemyśl"
        />
        <link rel="canonical" href="https://naprawaprzemysl.pl/" />
        <meta
          property="og:title"
          content="Naprawa telewizorów, pralek, zmywarek i ekspresów do kawy"
        />
        <meta
          property="og:description"
          content="Profesjonalna naprawa i serwis telewizorów, pralek, zmywarek oraz ekspresów do kawy w Przemyślu. Szybka pomoc i fachowa obsługa."
        />
        <meta property="og:url" content="https://naprawaprzemysl.pl/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Serwis RTV i AGD",
            "@id": "https://naprawaprzemysl.pl",
            url: "https://naprawaprzemysl.pl",
            telephone: "+48 790 258 612",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Generała Józefa Sowińskiego 2",
              addressLocality: "Przemyśl",
              postalCode: "37-700",
              addressCountry: "PL",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 49.782778,
              longitude: 22.776028,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:30",
                closes: "17:00",
              },
            ],
            sameAs: ["https://www.facebook.com/profile.php?id=100063811592941"],
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Naprawa pralek",
                },
                areaServed: {
                  "@type": "Place",
                  name: "Przemyśl",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Naprawa zmywarek",
                },
                areaServed: {
                  "@type": "Place",
                  name: "Przemyśl",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Naprawa ekspresów do kawy",
                },
                areaServed: {
                  "@type": "Place",
                  name: "Przemyśl",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Naprawa telewizorów",
                },
                areaServed: {
                  "@type": "Place",
                  name: "Przemyśl",
                },
              },
            ],
          })}
        </script>
      </Helmet>
    </div>
  </HelmetProvider>
);
