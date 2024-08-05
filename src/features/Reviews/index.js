import { ReviewsItem } from "./ReviewsItem";
import {
  ReviewsContainer,
  ReviewsSection,
  ReviewsTitle,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { useEffect, useState } from "react";
import { HemletForReviews } from "./HemletForReviews";

export const Reviews = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <ReviewsSection $show={show}>
      <HemletForReviews />
      <ReviewsContainer>
        <ReviewsTitle>Opinie Klientów</ReviewsTitle>
        {serwis.reviews.map((item, index) => (
          <ReviewsItem item={item} key={index} />
        ))}
      </ReviewsContainer>
    </ReviewsSection>
  );
};
