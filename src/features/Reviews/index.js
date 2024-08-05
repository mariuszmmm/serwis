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
  const [reviewsApi, setReviewsApi] = useState(null);

  async function initPlace() {
    /* global google */
    const { Place } = await google.maps.importLibrary("places");
    const place = new Place({
      id: "ChIJrWDpGyR_O0cRpvj4OFLVPPw",
    });

    await place.fetchFields({
      fields: ["reviews"],
    });

    if (place.reviews && place.reviews.length > 0) {

      let reviews = [];
      reviews = place.reviews.map((item) => {
        return ({
          rating: item.rating,
          text: item.text,
          author_name: item.authorAttribution.displayName,
          profile_photo_url: item.authorAttribution.photoURI,
          time: item.publishTime,
        });
      });
      setReviewsApi(reviews);
    };
  };

  useEffect(() => {
    initPlace();
    setShow(true);
  }, []);

  return (
    <ReviewsSection $show={show}>
      <HemletForReviews />
      <ReviewsContainer>
        <ReviewsTitle>Opinie Klientów</ReviewsTitle>
        {(reviewsApi ? reviewsApi : serwis.reviews).map((item, index) => (
          <ReviewsItem item={item} key={index} api={reviewsApi ? true : false} />
        ))}
      </ReviewsContainer>
    </ReviewsSection>
  );
};
