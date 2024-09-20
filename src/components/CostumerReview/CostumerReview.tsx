import React from "react";
import { Carousel } from "../TesteCarrosel/carousel";
import { useReview } from "../../hooks/useReview/useReview";
import s from "./CostumerReview.module.css";
function CostumerReview() {
  const review = useReview();
  return (
    <div className={s.totalReview}>
      <Carousel
        isDotted={true}
        customDotClassName={s.carouselDots}
        customSelectedDotClassName={s.carouselSelectedDot}
        customDotsContainerClassName={s.carouselDotsContainer}
      >
        {review.map((item, index) => (
          <div key={index} className={s.reviewBackground}>
            <div>
              <img src="images/review.png" className={s.reviewQuote} />
              <p className={s.reviewText}>{item.text}</p>
            </div>
            <div>
              <p className={s.reviewName}>- {item.name}</p>
            </div>
            <div>
              <button className={s.reviewButton}>Leave us a review</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export { CostumerReview };
