import { Helmet, HelmetProvider } from "react-helmet-async";

export const HemletForServices = () => (
  <HelmetProvider>
    <div>
      <Helmet>
        <title>Nasze usługi | Serwis RTV AGD w Przemyślu</title>
        <meta
          name="description"
          content="Oferujemy profesjonalną naprawę pralek, zmywarek, ekspresów do kawy oraz telewizorów w Przemyślu."
        />
        <meta
          name="keywords"
          content="naprawa, serwis, RTV, AGD, Przemyśl, pralki, zmywarki, ekspresy do kawy, telewizory"
        />
        <link rel="canonical" href="https://naprawaprzemysl.pl/uslugi" />
        <meta
          property="og:title"
          content="Nasze usługi | Serwis RTV AGD w Przemyślu"
        />
        <meta
          property="og:description"
          content="Oferujemy profesjonalną naprawę pralek, zmywarek, ekspresów do kawy oraz telewizorów w Przemyślu."
        />
        <meta property="og:url" content="https://naprawaprzemysl.pl/uslugi" />
      </Helmet>
    </div>
  </HelmetProvider>
);
