import { Helmet, HelmetProvider } from "react-helmet-async";

export const HemletForTestimonials = () => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>Opinie klientów | Serwis RTV AGD w Przemyślu</title>
        <meta
          name="description"
          content="Przeczytaj opinie moich zadowolonych klientów o moim serwisie pralek, zmywarek, ekspresów do kawy oraz telewizorów w Przemyślu."
        />
        <meta
          name="keywords"
          content="opinie, recenzje, serwis, RTV, AGD, Przemyśl, pralki, zmywarki, ekspresy do kawy, telewizory"
        />
        <link rel="canonical" href="https://naprawaprzemysl.pl/opinie" />
        <meta
          property="og:title"
          content="Opinie klientów | Serwis RTV AGD w Przemyślu"
        />
        <meta
          property="og:description"
          content="Sprawdź opinie naszych klientów na temat serwisu RTV i AGD w Przemyślu."
        />
        <meta property="og:url" content="https://naprawaprzemysl.pl/opinie" />
      </Helmet>
    </div>
  </HelmetProvider>
);
