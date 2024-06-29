import {
  TestimonialAuthor,
  TestimonialItemWrapper,
  TestimonialText,
} from "./styled";

export const TestimonialItem = ({ item }) => {
  return (
    <TestimonialItemWrapper>
      <TestimonialText>"{item.text}"</TestimonialText>
      <TestimonialAuthor>{item.author}</TestimonialAuthor>
    </TestimonialItemWrapper>
  );
};
