import { TestimonialItem } from "./TestimonialItem";
import {
  TestimonialsContainer,
  TestimonialsSection,
  TestimonialsTitle,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import { HemletForTestimonials } from "./HemletForTestimonials";

export const Testimonials = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <TestimonialsSection $show={show}>
      <HemletForTestimonials />
      <TestimonialsContainer>
        <TestimonialsTitle>Opinie Klientów</TestimonialsTitle>
        {serwis.testimonials.map((item, index) => (
          <TestimonialItem item={item} key={index} />
        ))}
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};
