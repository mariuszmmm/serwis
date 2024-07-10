import { TestimonialItem } from "./TestimonialItem";
import {
  TestimonialsContainer,
  TestimonialsSection,
  TestimonialsTitle,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <TestimonialsSection $show={show}>
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
            <meta
              property="og:url"
              content="https://naprawaprzemysl.pl/opinie"
            />
          </Helmet>
        </div>
      </HelmetProvider>
      <TestimonialsContainer>
        <TestimonialsTitle>Opinie Klientów</TestimonialsTitle>
        {serwis.testimonials.map((item, index) => (
          <TestimonialItem item={item} key={index} />
        ))}
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};
