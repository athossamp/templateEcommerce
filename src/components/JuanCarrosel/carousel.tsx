import embla from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import s from "./caroulsel.module.css";

type CarouselFunctionSnap = {
  actualSnap: number;
  setActualSnap: (number: number) => void;
};

export function Carousel({
  isDotted = false,
  isAutoplay,
  children,
  startIndex = 0,
  onSnapChange
}: {
  isDotted?: boolean;
  isAutoplay?: boolean;
  children: React.ReactNode | (({ actualSnap }: CarouselFunctionSnap) => React.ReactNode);
  startIndex?: number;
  onSnapChange?: (number: number) => void;
}) {
  const [actualSnap, setActualSnap] = useState(startIndex);
  const [emblaRef, carousel] = embla(
    { align: "center", startIndex: startIndex },
    isAutoplay ? [Autoplay({ delay: 4000 })] : []
  );

  useEffect(() => {
    carousel?.on("select", (_e: any) => {
      setActualSnap(carousel.selectedScrollSnap());
      onSnapChange?.(carousel.selectedScrollSnap());
    });

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      carousel?.off("select", () => {});
    };
  }, [carousel]);

  function handleScrollTo(index: number) {
    carousel?.scrollTo(index);
    setActualSnap(index);
    onSnapChange?.(index);
  }

  return (
    <div className={s.carouselContainer}>
      <div ref={emblaRef} className={s.embla}>
        <div className={s.embla__container}>
          {typeof children === "function" ? children({ actualSnap, setActualSnap: handleScrollTo }) : children}
        </div>
      </div>
      {isDotted ? (
        <div className={s.dots}>
          {carousel?.slideNodes().map((_, index) => (
            <div className={s.dotContainer} key={index}>
              {isAutoplay && actualSnap === index ? (
                <svg viewBox="0 0 30 30" height={20} width={20}>
                  <circle
                    className={s.circle}
                    cx="15px"
                    cy="15px"
                    r="13px"
                    stroke="rgb(184, 139, 255)"
                    strokeWidth={3}
                    fill="none"
                  />
                </svg>
              ) : null}
              <button
                onClick={() => {
                  carousel?.scrollTo(index);
                  setActualSnap(index);
                }}
                type="button"
                className={s.dot}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
