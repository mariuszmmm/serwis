import styled from "styled-components";

export const TestimonialsSection = styled.section`
  padding: 100px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.color.background};
  min-height: calc(100vh - 50px);
`;

export const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const TestimonialItem = styled.div`
  margin-bottom: 40px;
`;

export const TestimonialText = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

export const TestimonialAuthor = styled.h4`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
`;
