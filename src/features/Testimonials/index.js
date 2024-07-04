import { TestimonialItem } from "./TestimonialItem";
import {
  TestimonialsContainer,
  TestimonialsSection,
  TestimonialsTitle,
} from "./styled";
import { serwis } from "../../utils/serwis";

export const Testimonials = () => {
  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsTitle>Opinie Klientów</TestimonialsTitle>
        {serwis.testimonials.map((item, index) => (
          <TestimonialItem item={item} key={index} />
        ))}
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};
