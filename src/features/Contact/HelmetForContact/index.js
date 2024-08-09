import { Helmet } from "react-helmet-async";

export const HelmetForContact = () => (
  <>
    <Helmet>
      <title>Kontakt | Serwis RTV AGD w Przemyślu</title>
      <meta
        name="description"
        content="Skontaktuj się z nami pod numerem telefonu +48 790 258 612 lub odwiedź nas w Przemyślu przy ulicy Generała Józefa Sowińskiego 2."
      />
      <meta
        name="keywords"
        content="kontakt, serwis, RTV, AGD, Przemyśl, pralki, zmywarki, ekspresy do kawy, telewizory"
      />
      <link rel="canonical" href="https://naprawaprzemysl.pl/kontakt" />
      <meta
        property="og:title"
        content="Kontakt | Serwis RTV AGD w Przemyślu"
      />
      <meta
        property="og:description"
        content="Skontaktuj się z nami. Serwis RTV i AGD w Przemyślu. Profesjonalna pomoc i szybka naprawa."
      />
      <meta property="og:url" content="https://naprawaprzemysl.pl/kontakt" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Serwis RTV i AGD",
          "alternateName": "Naprawa pralek i sprzętu RTV - naprawa ekspresów do kawy, naprawa telewizorów, naprawa zmywarki, serwis agd,",
          "@id": "https://naprawaprzemysl.pl",
          "url": "https://naprawaprzemysl.pl",
          "telephone": "+48 790 258 612",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Generała Józefa Sowińskiego 2",
            "addressLocality": "Przemyśl",
            "postalCode": "37-700",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.782778,
            "longitude": 22.776028
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:30",
              "closes": "17:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/profile.php?id=100063811592941"
          ],
          "logo": "https://naprawaprzemysl.pl/static/media/serwis.1b7b2504558771c986cc.webp",
          "description": "Profesjonalna naprawa i serwis telewizorów, pralek, zmywarek oraz ekspresów do kawy w Przemyślu. Szybka pomoc i fachowa obsługa.",
          "offers": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Naprawa pralek"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Przemyśl"
              },
              "priceCurrency": "PLN",
              "price": "100-*"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Naprawa zmywarek"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Przemyśl"
              },
              "priceCurrency": "PLN",
              "price": "100-*"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Naprawa ekspresów do kawy"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Przemyśl"
              },
              "priceCurrency": "PLN",
              "price": "120-*"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Naprawa telewizorów"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Przemyśl"
              },
              "priceCurrency": "PLN",
              "price": "150-*"
            }
          ],
          "paymentAccepted": [
            "Cash"
          ],
          "review": [
            {
              "@type": "Review",
              "author": "m p",
              "reviewBody": "Super profesjonalizm, przystępne ceny i szybkie terminy - zdecydowanie polecam",
              "reviewRating": {
                "@type": "Rating",
                "bestRating": "5",
                "ratingValue": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "Review",
              "author": "Agti Wo",
              "reviewBody": "Pan bardzo punktualny, zaangażowany. Szybko i trafnie  zdiagnozował problem. Usługa wykonana bardzo sprawnie i rzetelnie - pralka działa jak należy! Polecam serdecznie! Agata Wowk-Musiał",
              "reviewRating": {
                "@type": "Rating",
                "bestRating": "5",
                "ratingValue": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "Review",
              "author": "Gabriel Gwiazdoń",
              "reviewBody": "Bardzo rzetelny serwis, polecam! Miałem problem z pralką, Pan znalazł termin w zasadzie od ręki, w dniu naprawy na miejscu znalazł i usunął usterkę, jestem bardzo zadowolony.",
              "reviewRating": {
                "@type": "Rating",
                "bestRating": "5",
                "ratingValue": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "Review",
              "author": "EL-METR INSTALACJE Zbigniew Banasiewicz",
              "reviewBody": "Pan z ogromną wiedzą i doświadczeniem. Już kilka napraw za nami , wszystko naprawione i działa. Polecam Pana Piotra. Najlepszy elektronik w mieście. Pozdrawiam",
              "reviewRating": {
                "@type": "Rating",
                "bestRating": "5",
                "ratingValue": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "Review",
              "author": "Piotr Wilgucki",
              "reviewBody": "Serwis rzetelny, szybki i cenowo bardzo dobry. Pralka działa bez zarzutów po dziś dzień. Polecam",
              "reviewRating": {
                "@type": "Rating",
                "bestRating": "5",
                "ratingValue": "5",
                "worstRating": "1"
              }
            },
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Strona Główna",
              "item": "https://naprawaprzemysl.pl"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "O mnie",
              "item": "https://naprawaprzemysl.pl/o-mnie"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Usługi",
              "item": "https://naprawaprzemysl.pl/uslugi"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Cennik",
              "item": "https://naprawaprzemysl.pl/cennik"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Opinie",
              "item": "https://naprawaprzemysl.pl/opinie"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Kontakt",
              "item": "https://naprawaprzemysl.pl/kontakt"
            }
          ]
        })}
      </script>
    </Helmet>
  </>
);
