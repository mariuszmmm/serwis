import { TestimonialItem } from "./TestimonialItem";
import {
  TestimonialsContainer,
  TestimonialsSection,
  TestimonialsTitle,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Testimonials = () => {
  return (
    <TestimonialsSection>
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
