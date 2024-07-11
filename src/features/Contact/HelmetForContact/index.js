import { Helmet, HelmetProvider } from "react-helmet-async";

export const HelmetForContact = () => (
  <HelmetProvider>
    <div>
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
      </Helmet>
    </div>
  </HelmetProvider>
);
