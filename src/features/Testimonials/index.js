import { TestimonialItem } from "./TestimonialItem";
import {
  TestimonialsContainer,
  TestimonialsSection,
  TestimonialsTitle,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { Helmet } from "react-helmet";

export const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Helmet>
        <title>Opinie - Naprawa RTV i AGD - Przemyśl</title>
        <meta
          name="description"
          content="Przeczytaj opinie naszych klientów o naszych usługach naprawy RTV i AGD w Przemyślu. Dowiedz się, dlaczego warto nam zaufać."
        />
      </Helmet>
      <TestimonialsContainer>
        <TestimonialsTitle>Opinie Klientów</TestimonialsTitle>
        {serwis.testimonials.map((item, index) => (
          <TestimonialItem item={item} key={index} />
        ))}
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};
