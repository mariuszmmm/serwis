import { Helmet, HelmetProvider } from "react-helmet-async";

export const HelmetForAbout = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>O mnie | Serwis RTV AGD w Przemyślu</title>
          <meta
            name="description"
            content="Dowiedz się więcej o mnie i moim doświadczeniu w naprawie pralek, zmywarek, ekspresów do kawy oraz telewizorów w Przemyślu."
          />
          <meta
            name="keywords"
            content="o mnie, serwis, RTV, AGD, Przemyśl, pralki, zmywarki, ekspresy do kawy, telewizory"
          />
          <link rel="canonical" href="https://naprawaprzemysl.pl/o-mnie" />
          <meta
            property="og:title"
            content="O mnie | Serwis RTV AGD w Przemyślu"
          />
          <meta
            property="og:description"
            content="Dowiedz się więcej o mnie i moim doświadczeniu w naprawie pralek, zmywarek, ekspresów do kawy oraz telewizorów w Przemyślu."
          />
          <meta property="og:url" content="https://naprawaprzemysl.pl/o-mnie" />
        </Helmet>
      </div>
    </HelmetProvider>
  );
};
