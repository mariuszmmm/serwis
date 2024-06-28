import {
  TestimonialAuthor,
  TestimonialItem,
  TestimonialText,
  TestimonialsContainer,
  TestimonialsSection,
  TestimonialsTitle,
} from "./styled";

export const Testimonials = () => {
  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <TestimonialsTitle>Opinie Klientów</TestimonialsTitle>
        <TestimonialItem>
          <TestimonialText>
            "Profesjonalna obsługa i szybka naprawa. Moja pralka działa jak
            nowa!"
          </TestimonialText>
          <TestimonialAuthor>Anna K.</TestimonialAuthor>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialText>
            "Doskonała jakość usług, polecam każdemu kto ma problem ze sprzętem
            AGD."
          </TestimonialText>
          <TestimonialAuthor>Jan M.</TestimonialAuthor>
        </TestimonialItem>
        <TestimonialItem>
          <TestimonialText>
            "Bardzo kompetentny serwis, szybka i skuteczna naprawa mojego
            ekspresu do kawy."
          </TestimonialText>
          <TestimonialAuthor>Maria W.</TestimonialAuthor>
        </TestimonialItem>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};
