import styled from "styled-components";

export const TestimonialsSection = styled.section`
  padding: 100px 0;
  text-align: center;
  min-height: calc(100vh - 50px);
`;

export const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-size: clamp(2rem, 4.5vw, 2.5rem);
`;

export const TestimonialItem = styled.div`
  margin-bottom: 40px;
`;

export const TestimonialText = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  margin: 0 15px;
`;

export const TestimonialAuthor = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
`;
